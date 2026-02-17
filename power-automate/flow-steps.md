# Power Automate Flow — "Assemble and Send Feedback"

Step-by-step guide to building the flow. Each section is one action (or group of actions) in the flow designer.

---

## Trigger: Power Apps (V2)

1. Create a new **Instant cloud flow**
2. Name: `Assemble and Send Feedback`
3. Trigger: **Power Apps (V2)**
4. Add an input:
   - Type: **Text**
   - Name: `SelectionID`

---

## Step 1: Get Selection Item

- **Action:** SharePoint — Get items
- **Site Address:** `https://your-tenant.sharepoint.com/sites/PsychFeedbackPoC`
- **List Name:** `Selections`
- **Filter Query:**

```
SelectionID eq '@{triggerBody()['text']}'
```

- **Top Count:** `1`

After this action, the selection is at:

```
first(body('Get_Selection')?['value'])
```

---

## Step 2: Initialise Variables

Add these **Initialise variable** actions:

| Variable Name | Type | Value |
|---|---|---|
| varStudentName | String | `@{first(body('Get_Selection')?['value'])?['Student']?['Value']}` |
| varStudentEmail | String | `@{first(body('Get_Selection')?['value'])?['StudentEmail']}` |
| varModule | String | `@{first(body('Get_Selection')?['value'])?['Module']}` |
| varCustomNote | String | `@{first(body('Get_Selection')?['value'])?['CustomNote']}` |
| varIntroID | String | `@{first(body('Get_Selection')?['value'])?['IntroID']?['Value']}` |
| varSelectedIDs | String | `@{first(body('Get_Selection')?['value'])?['SelectedFeedbackIDs']}` |
| varSelectionItemId | Integer | `@{first(body('Get_Selection')?['value'])?['ID']}` |
| varHtmlBody | String | *(empty)* |
| varPlainBody | String | *(empty)* |

---

## Step 3: Get Intro Paragraph

- **Action:** SharePoint — Get items
- **List Name:** `IntroParagraphs`
- **Filter Query:**

```
IntroID eq '@{variables('varIntroID')}'
```

- **Top Count:** `1`

Extract the intro text:

```
first(body('Get_Intro')?['value'])?['IntroText']
```

---

## Step 4: Get Footer Template

- **Action:** SharePoint — Get items
- **List Name:** `Templates`
- **Filter Query:**

```
TemplateID eq 'FT01'
```

- **Top Count:** `1`

Expressions for later use:

```
first(body('Get_Template')?['value'])?['FooterText']
first(body('Get_Template')?['value'])?['AccessibilityStatement']
```

---

## Step 5: Parse JSON — SelectedFeedbackIDs

- **Action:** Data Operation — Parse JSON
- **Content:** `@{variables('varSelectedIDs')}`
- **Schema:**

```json
{
    "type": "array",
    "items": {
        "type": "object",
        "properties": {
            "FeedbackID": {
                "type": "string"
            }
        },
        "required": ["FeedbackID"]
    }
}
```

---

## Step 6: Initialise Feedback Collection

- **Action:** Initialise variable
- **Name:** `varFeedbackItems`
- **Type:** Array
- **Value:** `[]`

---

## Step 7: For Each — Retrieve Feedback Items

- **Action:** Apply to each
- **Select an output from previous steps:** `body('Parse_JSON')`

### Inside the loop:

**7a. Get the feedback item:**

- **Action:** SharePoint — Get items
- **List Name:** `FeedbackLibrary`
- **Filter Query:**

```
FeedbackID eq '@{items('For_Each_Selected_ID')?['FeedbackID']}'
```

- **Top Count:** `1`

**7b. Append to array:**

- **Action:** Append to array variable
- **Name:** `varFeedbackItems`
- **Value:**

```json
{
    "FeedbackID": "@{first(body('Get_Feedback_Item')?['value'])?['FeedbackID']}",
    "Title": "@{first(body('Get_Feedback_Item')?['value'])?['Title']}",
    "Category": "@{first(body('Get_Feedback_Item')?['value'])?['Category']?['Value']}",
    "FeedbackText": "@{first(body('Get_Feedback_Item')?['value'])?['FeedbackText']}",
    "PlainText": "@{first(body('Get_Feedback_Item')?['value'])?['PlainText']}",
    "DisplayOrder": @{first(body('Get_Feedback_Item')?['value'])?['DisplayOrder']}
}
```

---

## Step 8: Define Category Order

- **Action:** Compose
- **Name:** `CategoryOrder`
- **Inputs:**

```json
["Engagement", "Academic Skills", "Critical Thinking", "PEEL Structure", "Structure", "Writing", "Referencing", "Next Steps", "Overall"]
```

---

## Step 9: Build HTML and Plain Text — Loop Over Categories

- **Action:** Apply to each
- **Name:** `For_Each_Category`
- **Select an output:** `outputs('CategoryOrder')`

### Inside the category loop:

**9a. Filter feedback items for this category:**

- **Action:** Filter array
- **Name:** `Filter_By_Category`
- **From:** `variables('varFeedbackItems')`
- **Condition:** `@{item()?['Category']}` is equal to `@{items('For_Each_Category')}`

**9b. Condition — any items in this category?**

- **Action:** Condition
- **Expression:** `@{length(body('Filter_By_Category'))}` is greater than `0`

### If yes:

**9c. Sort the filtered items by DisplayOrder:**

- **Action:** Compose
- **Name:** `Sorted_Items`
- **Inputs:** `@{sort(body('Filter_By_Category'), 'DisplayOrder')}`

> **Note:** If `sort()` is not available in your environment, skip this step and use `body('Filter_By_Category')` directly — the items are already stored in a reasonable order from the library.

**9d. Append category heading to HTML:**

- **Action:** Append to string variable
- **Name:** `varHtmlBody`
- **Value:**

```html
<h2 style="font-size:20px; line-height:1.3; color:#1a1a1a; margin:24px 0 12px 0; font-family:Arial, Helvetica, sans-serif;">@{items('For_Each_Category')}</h2>
<ul style="padding-left:20px; margin:0 0 16px 0; list-style-type:disc;">
```

**9e. Append category heading to plain text:**

- **Action:** Append to string variable
- **Name:** `varPlainBody`
- **Value:**

```
@{toUpper(items('For_Each_Category'))}
-------------
```

**9f. For each feedback item in the sorted list:**

- **Action:** Apply to each
- **Name:** `For_Each_Feedback_Item`
- **Select an output:** `outputs('Sorted_Items')` (or `body('Filter_By_Category')`)

**Append to varHtmlBody:**

```html
<li style="font-size:16px; line-height:1.5; color:#1a1a1a; margin:0 0 12px 0; font-family:Arial, Helvetica, sans-serif;"><strong>@{items('For_Each_Feedback_Item')?['Title']}</strong><br>@{items('For_Each_Feedback_Item')?['FeedbackText']}</li>
```

**Append to varPlainBody:**

```
- @{items('For_Each_Feedback_Item')?['Title']}
  @{items('For_Each_Feedback_Item')?['PlainText']}

```

**9g. Close the HTML list (after the inner loop):**

- **Action:** Append to string variable
- **Name:** `varHtmlBody`
- **Value:** `</ul>`

---

## Step 10: Build Custom Note Section

- **Action:** Condition
- **Expression:** `@{empty(variables('varCustomNote'))}` is equal to `false`

### If yes (custom note exists):

**Initialise varCustomNoteHtml:**

- **Action:** Set variable
- **Name:** `varCustomNoteHtml` (initialise as empty string earlier, or use Compose)
- **Value:**

```html
<h2 style="font-size:20px; line-height:1.3; color:#1a1a1a; margin:24px 0 12px 0; font-family:Arial, Helvetica, sans-serif;">A Note from Your Tutor</h2>
<p style="font-size:16px; line-height:1.5; color:#1a1a1a; margin:0 0 24px 0; font-family:Arial, Helvetica, sans-serif;">@{variables('varCustomNote')}</p>
```

**Append to varPlainBody:**

```
A NOTE FROM YOUR TUTOR
----------------------
@{variables('varCustomNote')}

```

### If no: leave varCustomNoteHtml empty.

> **Tip:** Initialise `varCustomNoteHtml` as an empty string variable at Step 2 so it is always available.

---

## Step 11: Compose Final HTML Email

- **Action:** Compose
- **Name:** `FinalHtmlEmail`
- **Inputs:**

```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Personalised Feedback -- @{variables('varModule')} -- @{variables('varStudentName')}</title>
<style>body{margin:0;padding:0;background-color:#f5f5f5;font-family:Arial,Helvetica,sans-serif}a{color:#0055a5}</style>
</head>
<body style="margin:0;padding:0;background-color:#f5f5f5;font-family:Arial,Helvetica,sans-serif;">
<div role="article" aria-label="Personalised feedback for @{variables('varStudentName')}" style="max-width:600px;margin:0 auto;background-color:#ffffff;padding:32px;font-family:Arial,Helvetica,sans-serif;">
<h1 style="font-size:24px;line-height:1.3;color:#1a1a1a;margin:0 0 8px 0;">Personalised Feedback</h1>
<p style="font-size:16px;line-height:1.5;color:#333333;margin:0 0 24px 0;"><strong>Student:</strong> @{variables('varStudentName')}<br><strong>Module:</strong> @{variables('varModule')}<br><strong>Date:</strong> @{formatDateTime(utcNow(), 'dd MMMM yyyy')}</p>
<hr style="border:none;border-top:1px solid #cccccc;margin:24px 0;" aria-hidden="true">
<p style="font-size:16px;line-height:1.5;color:#1a1a1a;margin:0 0 24px 0;">@{first(body('Get_Intro')?['value'])?['IntroText']}</p>
@{variables('varHtmlBody')}
@{variables('varCustomNoteHtml')}
<hr style="border:none;border-top:1px solid #cccccc;margin:24px 0;" aria-hidden="true">
<p style="font-size:14px;line-height:1.5;color:#555555;margin:0 0 12px 0;">@{first(body('Get_Template')?['value'])?['FooterText']}</p>
<p style="font-size:14px;line-height:1.5;color:#555555;margin:0 0 0 0;">@{first(body('Get_Template')?['value'])?['AccessibilityStatement']}</p>
</div>
</body>
</html>
```

---

## Step 12: Compose Final Plain Text

- **Action:** Compose
- **Name:** `FinalPlainText`
- **Inputs:**

```
PERSONALISED FEEDBACK
=====================

Student: @{variables('varStudentName')}
Module:  @{variables('varModule')}
Date:    @{formatDateTime(utcNow(), 'dd MMMM yyyy')}

-----

@{first(body('Get_Intro')?['value'])?['IntroText']}

-----

@{variables('varPlainBody')}

-----

@{first(body('Get_Template')?['value'])?['FooterText']}

@{first(body('Get_Template')?['value'])?['AccessibilityStatement']}
```

---

## Step 13: Try Scope — Send Email and Update Status

Wrap Steps 13–15 inside a **Scope** action named `Try_Scope`.

### 13a. Send Email

- **Action:** Office 365 Outlook — Send an email (V2)
- **To:** `@{variables('varStudentEmail')}`
- **Subject:** `Feedback -- @{variables('varModule')} -- @{variables('varStudentName')}`
- **Body:** `@{outputs('FinalHtmlEmail')}`

  Then append a separator and the plain text version:

  ```
  @{outputs('FinalHtmlEmail')}<br><br><p style="font-size:12px;color:#999999;">--- Text-only version below ---</p><pre style="font-size:14px;line-height:1.5;white-space:pre-wrap;">@{outputs('FinalPlainText')}</pre>
  ```

- **Is HTML:** Yes

### 13b. Update Selection — Success

- **Action:** SharePoint — Update item
- **List Name:** `Selections`
- **Id:** `@{variables('varSelectionItemId')}`
- **Status Value:** `Sent`
- **SentAt:** `@{utcNow()}`
- **SentTo:** `@{variables('varStudentEmail')}`
- **FlowRunId:** `@{workflow()?['run']?['name']}`

### 13c. Create DeliveryLog — Success

- **Action:** SharePoint — Create item
- **List Name:** `DeliveryLog`
- **SelectionID:** `@{triggerBody()['text']}`
- **StudentEmail:** `@{variables('varStudentEmail')}`
- **SentAt:** `@{utcNow()}`
- **DeliveryStatus Value:** `Sent`

---

## Step 14: Catch Scope — Handle Failures

Add a **Scope** action named `Catch_Scope`.

**Configure Run After:** Set this scope to run only if `Try_Scope` has **failed**.

### 14a. Update Selection — Failed

- **Action:** SharePoint — Update item
- **List Name:** `Selections`
- **Id:** `@{variables('varSelectionItemId')}`
- **Status Value:** `Failed`
- **ErrorMessage:** `@{result('Try_Scope')?[0]?['error']?['message']}`

### 14b. Create DeliveryLog — Failed

- **Action:** SharePoint — Create item
- **List Name:** `DeliveryLog`
- **SelectionID:** `@{triggerBody()['text']}`
- **StudentEmail:** `@{variables('varStudentEmail')}`
- **SentAt:** `@{utcNow()}`
- **DeliveryStatus Value:** `Failed`
- **Error:** `@{result('Try_Scope')?[0]?['error']?['message']}`

---

## Expression Quick Reference

| Expression | Purpose |
|---|---|
| `triggerBody()['text']` | SelectionID passed from Power Apps |
| `first(body('...')?['value'])` | First item from a SharePoint "Get items" result |
| `formatDateTime(utcNow(), 'dd MMMM yyyy')` | Formatted date (e.g., "15 March 2025") |
| `workflow()?['run']?['name']` | Current flow run ID |
| `result('Try_Scope')?[0]?['error']?['message']` | Error message from a failed scope |
| `length(body('Filter_By_Category'))` | Count of items in a filtered array |
| `sort(array, 'property')` | Sort an array by a property |
| `toUpper(string)` | Convert to uppercase (for plain text headings) |
| `empty(string)` | Check if a string is blank/null |
| `join(array, '')` | Join array elements with no separator |

---

## Testing the Flow Independently

You can test without the Power App by running the flow manually:

1. Open the flow in Power Automate
2. Click **Test** > **Manually**
3. Enter a SelectionID (e.g., `SEL001` from the sample data)
4. Check the flow run history for each step's inputs and outputs
5. Verify the email arrives at the test address

> **Important:** Make sure the Selections list has a row with that SelectionID and Status = "Submitted" before testing.
