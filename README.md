# Personalised Psychology Feedback Newsletter

**SharePoint + Power Apps + Power Automate**

---

## 0) Preconditions

- Microsoft 365 tenant with SharePoint, Power Apps, Power Automate, and permission to create lists and flows.
- Mailbox for sender (tutor) with permission to send to student emails (test emails ok).
- Decide environment: default Power Platform environment is fine for PoC.

---

## 1) Create SharePoint Site + Lists

### 1.1 Site

Create a SharePoint Team Site:

- **Name:** Psychology Feedback PoC
- **URL:** e.g. `/sites/PsychFeedbackPoC`

### 1.2 List A -- Students

Create SharePoint List: **Students**

| Column | Type | Required | Notes |
|---|---|---|---|
| StudentID | Single line of text | Yes | Enforce unique values = Yes |
| StudentName | Single line of text | Yes | |
| Email | Single line of text | Yes | |
| Module | Choice OR Single line of text | Yes | |
| Tutor | Single line of text | No | |

Import the Students inline table rows.

### 1.3 List B -- FeedbackLibrary

Create SharePoint List: **FeedbackLibrary**

| Column | Type | Required | Notes |
|---|---|---|---|
| FeedbackID | Single line of text | Yes | Enforce unique values = Yes (maps to F01 etc) |
| Title | Single line of text | Yes | |
| Category | Choice | Yes | Choices: Engagement, Academic Skills, Critical Thinking, Structure, Writing, Referencing, Next Steps, Overall |
| FeedbackText | Multiple lines of text | Yes | Plain text; keep it simple |
| PlainText | Multiple lines of text | Yes | |
| Tags | Single line of text | No | Comma-separated |
| DisplayOrder | Number | No | |
| HasAttachment | Yes/No | No | Default No |
| AltText | Single line of text | No | |
| AccessibilityNotes | Multiple lines of text | No | |

Import the Feedback Library table.

> **PoC tip:** keep FeedbackText plain text. HTML can come later.

### 1.4 List C -- IntroParagraphs

Create list: **IntroParagraphs**

| Column | Type | Required | Notes |
|---|---|---|---|
| IntroID | Single line of text | Yes | Enforce unique values |
| IntroText | Multiple lines of text | Yes | |

Import your intro options.

### 1.5 List D -- Templates

Create list: **Templates**

| Column | Type | Required | Notes |
|---|---|---|---|
| TemplateID | Single line of text | Yes | Enforce unique values (e.g., FT01) |
| FooterText | Multiple lines of text | Yes | |
| AccessibilityStatement | Multiple lines of text | No | Example: "If you need this feedback in another format, reply to this email." |

Import footer record(s).

### 1.6 List E -- Selections

Create list: **Selections** (this is written by Power Apps)

| Column | Type | Required | Notes |
|---|---|---|---|
| SelectionID | Single line of text | Yes | Enforce unique values (can be generated in app/flow) |
| Student | Lookup to Students list | Yes | |
| StudentEmail | Single line of text | Yes | Denormalised for convenience |
| Module | Single line of text | Yes | |
| IntroID | Lookup to IntroParagraphs | No | Or fixed |
| SelectedFeedbackIDs | Multiple lines of text | Yes | Store as JSON array string, e.g. `["F01","F04","F07"]` |
| CustomNote | Multiple lines of text | No | |
| Status | Choice | Yes | Choices: Draft, Submitted, Sent, Failed |
| SubmittedAt | Date/Time | No | |
| SentAt | Date/Time | No | |
| SentTo | Single line of text | No | |
| FlowRunId | Single line of text | No | |
| ErrorMessage | Multiple lines of text | No | |

### 1.7 List F -- DeliveryLog (optional but recommended)

Create list: **DeliveryLog**

| Column | Type | Required | Notes |
|---|---|---|---|
| SelectionID | Single line of text | No | |
| StudentEmail | Single line of text | No | |
| SentAt | Date/Time | No | |
| DeliveryStatus | Choice | No | Choices: Sent, Failed |
| MessageId | Single line of text | No | |
| Error | Multiple lines of text | No | |

---

## 2) Power App (Canvas App) -- "Feedback Builder"

### 2.1 Data connections

Connect the app to:

- Students
- FeedbackLibrary
- IntroParagraphs
- Templates
- Selections

### 2.2 Screen layout (single-screen PoC)

**Controls:**

**Dropdown: `ddStudent`**
- Items: `Students`
- DisplayFields: `StudentName`
- OnChange: set email/module fields automatically.

**Text input or dropdown: `ddModule`**
- Default: `ddStudent.Selected.Module`

**Dropdown: `ddIntro`** (optional)
- Items: `IntroParagraphs`

**Dropdown: `ddCategoryFilter`**
- Items: distinct categories from FeedbackLibrary plus "All"

**Search box: `txtSearch`**

**Gallery: `galFeedbackItems`** with checkboxes

Items formula (example):

```
SortByColumns(
  Filter(
    FeedbackLibrary,
    (ddCategoryFilter.Selected.Value="All" || Category.Value=ddCategoryFilter.Selected.Value) &&
    (IsBlank(txtSearch.Text) || Search(Title & " " & Tags, txtSearch.Text))
  ),
  "DisplayOrder",
  Ascending
)
```

Each row: Title, Category, short preview of FeedbackText, Checkbox `chkSelect`

**Multiline input: `txtCustomNote`**

**Buttons:**
- Save Draft
- Submit & Send (sets status Submitted and triggers flow)

### 2.3 Selection storage pattern (important)

Maintain a local collection for selected feedback IDs.

**OnVisible screen:**

```
Clear(colSelectedFeedback);
```

**OnCheck of checkbox:**

```
Collect(colSelectedFeedback, {FeedbackID: ThisItem.FeedbackID});
```

**OnUncheck:**

```
RemoveIf(colSelectedFeedback, FeedbackID = ThisItem.FeedbackID);
```

**When saving:**

Convert to JSON string:

```
JSON(colSelectedFeedback, JSONFormat.Compact)
```

Store as array of objects or array of strings; pick one and keep consistent.
Simplest: store array of strings, but Power Apps makes that slightly fiddlier. Object array is fine.

### 2.4 Save Draft action

**OnSelect:**

1. Validate student chosen and at least 1 feedback chosen.
2. Create/Update Selections row:
   - Status = `"Draft"`
   - SelectedFeedbackIDs = `JSON(colSelectedFeedback, JSONFormat.Compact)`
   - CustomNote = `txtCustomNote.Text`
   - StudentEmail = `ddStudent.Selected.Email`
   - Module = `ddModule.Selected.Value` (or text)

### 2.5 Submit & Send action

**OnSelect:**

1. Patch Selection with:
   - Status = `"Submitted"`
   - SubmittedAt = `Now()`
2. Trigger flow:
   - Use Power Automate "Run" connector, passing `SelectionID` (and optionally `StudentEmail`).

---

## 3) Power Automate Flow -- "Assemble and Send Feedback"

### 3.1 Trigger

**Option A (recommended for PoC):**

Power Apps (V2) trigger

Inputs from app:
- `SelectionID` (string)

**Option B:**

When an item is created or modified (Selections)
- Trigger condition: Status equals `"Submitted"`
- (More automation but slightly trickier to avoid loops.)

### 3.2 Steps (high level)

1. **Get item** (Selections) by SelectionID

   Extract:
   - Student lookup -> StudentName / StudentID
   - StudentEmail
   - Module
   - SelectedFeedbackIDs (JSON string)
   - CustomNote
   - IntroID (optional)

2. **Parse JSON** (SelectedFeedbackIDs)

   If stored as array of objects, schema like:

   ```json
   [
     { "FeedbackID": "F01" },
     { "FeedbackID": "F04" }
   ]
   ```

3. **For each selected item:**

   - Get items from FeedbackLibrary filtered by FeedbackID
   - Use OData filter: `FeedbackID eq 'F01'`
   - Collect:
     - Category
     - Title
     - FeedbackText
     - DisplayOrder

   > **Optimization (later):** batch query using "Get items" with `or` filters; for PoC per-item is OK.

4. **Group and order**

   Order categories using your CategoryOrder table OR hard-coded array:

   `Engagement, Academic Skills, Critical Thinking, Structure, Writing, Referencing, Next Steps, Overall`

   Sort within category by DisplayOrder then Title.

5. **Build Email HTML (accessible)**

   Use a Compose action to assemble:

   - `<h1>` "Feedback Newsletter"
   - `<h2>` Student + Module + Date
   - `<h2>` for each category
   - `<ul>` list of feedback items or `<p>` blocks
   - Custom Note section (if present)
   - Footer accessibility statement

   **Accessibility rules:**
   - Use real headings (`h2`/`h3`)
   - Avoid tables for layout
   - Keep paragraphs short
   - Avoid colour for meaning
   - If including images later, ensure alt text

6. **Build Plain Text**

   Create a parallel plain-text string:
   - Headings as CAPS
   - Bullets with hyphens
   - Include PlainText field from library if different

7. **Send Email**

   Outlook "Send an email (V2)":
   - **To:** StudentEmail
   - **Subject:** `Feedback -- {Module} -- {StudentName}`
   - **Body:** HTML (include plain text appended at bottom with separator like `--- Text-only version ---`)

8. **Update Selection status**

   On success:
   - Status = `Sent`
   - SentAt = `utcNow()`
   - SentTo = `StudentEmail`

   On failure:
   - Status = `Failed`
   - ErrorMessage = error output

9. **Write DeliveryLog**

   Create log entry with outcome.

### 3.3 Error handling

Use "Scope" blocks:
- **Try** (assemble + send)
- **Catch** (set Failed + log error)

Ensure flow doesn't resend automatically unless user resubmits.

---

## 4) Email Template (PoC standard)

**Subject:**
`Feedback -- Intro to Psychology -- {StudentName}`

**HTML structure:**

1. H1: Personalised Feedback
2. H2: Student / Module / Date
3. Intro paragraph
4. Category sections
5. Next steps section
6. Custom note
7. Footer accessibility statement
8. Separator
9. Plain-text version

---

## 5) Testing Checklist

### Functional tests

- [ ] Can select student
- [ ] Can filter by category/tags
- [ ] Can tick 3-8 items
- [ ] Saves Draft without sending
- [ ] Submit triggers flow once
- [ ] Email contains correct student name, module, ordered categories
- [ ] Custom note appears
- [ ] Status updates to Sent

### Accessibility quick checks

- [ ] Screen reader: headings read in order
- [ ] Clear spacing and short blocks
- [ ] Plain-text appended

### Logging tests

- [ ] DeliveryLog entry created
- [ ] Failed sends captured with error

---

## 6) PoC Demo Script (2 minutes)

1. Open Power App
2. Select "Mei Chen"
3. Filter: "Critical Thinking"
4. Tick 2 items; filter "Referencing"; tick 1 item
5. Add custom note
6. Submit & Send
7. Show sent email arriving and structured format
