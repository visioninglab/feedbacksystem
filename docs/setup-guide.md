# Setup Guide — Psychology Feedback Newsletter PoC

Follow these steps in order. Estimated time: 1–2 hours.

---

## Part 1: Create the SharePoint Site

1. Go to [sharepoint.com](https://sharepoint.com) and sign in with your Microsoft 365 account.
2. Click **+ Create site** in the top left.
3. Choose **Team site**.
4. Enter:
   - **Site name:** `Psychology Feedback PoC`
   - **Privacy:** Private
   - **Description:** `Proof of concept for personalised student feedback newsletters`
5. Click **Finish** and wait for the site to provision.
6. Note your site URL (e.g., `https://your-tenant.sharepoint.com/sites/PsychFeedbackPoC`). You will need this throughout the setup.

---

## Part 2: Create SharePoint Lists

### List A: Students

1. From your new site, click the **gear icon** > **Site contents**.
2. Click **+ New** > **List**.
3. Choose **From CSV**.
4. Upload the file `data/students.csv` from this repository.
5. SharePoint will preview the columns. Verify:
   - All columns detected as **Single line of text**
   - 10 rows of data visible
6. Name the list: `Students`
7. Click **Create**.
8. After import, go to **List settings** (gear icon > List settings):
   - Click on the **StudentID** column
   - Set **Enforce unique values** to **Yes**
   - Click **OK**

### List B: FeedbackLibrary

1. **Site contents** > **+ New** > **List** > **From CSV**.
2. Upload `data/feedback-library.csv`.
3. Name the list: `FeedbackLibrary`
4. Click **Create**.
5. After import, go to **List settings** and adjust column types:

| Column | Change to | Notes |
|---|---|---|
| FeedbackID | Keep as Single line of text | Set **Enforce unique values = Yes** |
| Title | Keep as Single line of text | |
| Category | **Choice** | Add choices: `Engagement`, `Academic Skills`, `Critical Thinking`, `Structure`, `Writing`, `Referencing`, `Next Steps`, `Overall` |
| FeedbackText | **Multiple lines of text** | Set to **Plain text** |
| PlainText | **Multiple lines of text** | Set to **Plain text** |
| Tags | Keep as Single line of text | |
| DisplayOrder | **Number** | 0 decimal places |
| HasAttachment | **Yes/No** | Default = No |
| AltText | Keep as Single line of text | |
| AccessibilityNotes | **Multiple lines of text** | Set to **Plain text** |

> **Note:** When changing a column to Choice type after CSV import, you may need to recreate the column. If so: create a new Choice column with the correct name, copy the values using a quick edit view, then delete the old column.

### List C: IntroParagraphs

1. **Site contents** > **+ New** > **List** > **From CSV**.
2. Upload `data/intro-paragraphs.csv`.
3. Name the list: `IntroParagraphs`
4. Click **Create**.
5. After import:
   - Change **IntroText** to **Multiple lines of text** (Plain text)
   - Set **Enforce unique values** on **IntroID**

### List D: Templates

1. **Site contents** > **+ New** > **List** > **From CSV**.
2. Upload `data/templates.csv`.
3. Name the list: `Templates`
4. Click **Create**.
5. After import:
   - Change **FooterText** to **Multiple lines of text**
   - Change **AccessibilityStatement** to **Multiple lines of text**
   - Set **Enforce unique values** on **TemplateID**

### List E: Selections (create manually)

This list contains Lookup columns, which cannot be imported via CSV. Create it manually.

1. **Site contents** > **+ New** > **List** > **Blank list**.
2. Name: `Selections`
3. Click **Create**.
4. Add columns one at a time using **+ Add column**:

| Column Name | Type | Required | Configuration |
|---|---|---|---|
| SelectionID | Single line of text | Yes | Enforce unique values = Yes |
| Student | Lookup | Yes | Get information from: **Students**, In this column: **StudentName** |
| StudentEmail | Single line of text | Yes | |
| Module | Single line of text | Yes | |
| IntroID | Lookup | No | Get information from: **IntroParagraphs**, In this column: **IntroID** |
| SelectedFeedbackIDs | Multiple lines of text | Yes | Plain text |
| CustomNote | Multiple lines of text | No | Plain text |
| Status | Choice | Yes | Choices: `Draft`, `Submitted`, `Sent`, `Failed`. Default: `Draft` |
| SubmittedAt | Date and time | No | Include time = Yes |
| SentAt | Date and time | No | Include time = Yes |
| SentTo | Single line of text | No | |
| FlowRunId | Single line of text | No | |
| ErrorMessage | Multiple lines of text | No | Plain text |

5. To add a Lookup column:
   - Click **+ Add column** > **Show/hide columns** is NOT what you want
   - Instead: go to **List settings** > **Create column**
   - Choose type **Lookup**
   - Set **Get information from** to the target list
   - Set **In this column** to the display column

### List F: DeliveryLog

1. **Site contents** > **+ New** > **List** > **From CSV**.
2. Upload `data/delivery-log-sample.csv`.
3. Name the list: `DeliveryLog`
4. Click **Create**.
5. After import, adjust column types:

| Column | Change to |
|---|---|
| SentAt | **Date and time** |
| DeliveryStatus | **Choice** (Sent, Failed) |
| Error | **Multiple lines of text** |

---

## Part 3: Build the Power Apps Canvas App

### 3.1 Create the app

1. Go to [make.powerapps.com](https://make.powerapps.com).
2. Click **+ Create** in the left nav.
3. Choose **Canvas app from blank**.
4. Name: `Feedback Builder`
5. Format: **Tablet** (gives more screen space for the gallery)
6. Click **Create**.

### 3.2 Add data connections

1. In the left panel, click the **Data** icon (cylinder).
2. Click **+ Add data**.
3. Search for **SharePoint**.
4. Enter your site URL (e.g., `https://your-tenant.sharepoint.com/sites/PsychFeedbackPoC`).
5. Select these lists and click **Connect**:
   - Students
   - FeedbackLibrary
   - IntroParagraphs
   - Templates
   - Selections

### 3.3 Set App.OnStart

1. In the tree view, click **App**.
2. In the formula bar, select the **OnStart** property.
3. Paste the formula from [power-apps/formulas.md](../power-apps/formulas.md) Section 1.
4. Click the **...** menu on App > **Run OnStart** to test.

### 3.4 Add controls

Build the screen from top to bottom, left to right. For each control:

1. Click **+ Insert** in the toolbar
2. Search for the control type
3. Rename it (right-click > Rename) to match the names below
4. Set the specified properties by selecting each property in the formula bar dropdown

**Refer to [power-apps/formulas.md](../power-apps/formulas.md) for all formulas.** The sections below tell you what to add and where — the formulas file has the exact code.

#### Top section (student info):

| Control | Type | Formulas Section |
|---|---|---|
| ddStudent | Dropdown | Section 3 |
| lblStudentEmail | Label | Section 3 |
| lblStudentTutor | Label | Section 3 |
| ddModule | Dropdown or Text Input | Section 4 |
| ddIntro | Dropdown | Section 5 |
| lblIntroPreview | Label | Section 5 |

#### Middle section (feedback selection):

| Control | Type | Formulas Section |
|---|---|---|
| ddCategoryFilter | Dropdown | Section 6 |
| txtSearch | Text Input | Section 6 |
| galFeedbackItems | Vertical Gallery | Section 7 |
| *(inside gallery)* lblGalTitle | Label | Section 7 |
| *(inside gallery)* lblGalCategory | Label | Section 7 |
| *(inside gallery)* lblGalPreview | Label | Section 7 |
| *(inside gallery)* chkSelect | Checkbox | Section 7 |
| lblSelectionCount | Label | Section 8 |

#### Bottom section (note and actions):

| Control | Type | Formulas Section |
|---|---|---|
| txtCustomNote | Text Input (multiline) | Section 9 |
| btnSaveDraft | Button | Section 10 |
| btnSubmitSend | Button | Section 11 |

### 3.5 Layout tips

- Set the gallery height to fill most of the middle of the screen
- Place ddCategoryFilter and txtSearch side by side above the gallery
- Place btnSaveDraft and btnSubmitSend side by side at the bottom
- Use a contrasting background colour for the button area

### 3.6 Connect to Power Automate

Do this AFTER building the flow (Part 4).

1. Select **btnSubmitSend**.
2. In the top menu, click **Action** > **Power Automate**.
3. Click **Add flow** and select `Assemble and Send Feedback`.
4. Power Apps will add it as a data source. The formula in btnSubmitSend.OnSelect already references it as `AssembleAndSendFeedback.Run(varCurrentSelectionID)`.

### 3.7 Run the Accessibility Checker

1. In the top menu, click the **App checker** icon (looks like a checkmark).
2. Review the **Accessibility** tab.
3. Fix any issues flagged (missing accessible labels, tab order, contrast).
4. Refer to [power-apps/formulas.md](../power-apps/formulas.md) Section 12 for guidance.

### 3.8 Save and publish

1. Click **File** > **Save**.
2. Click **Publish**.
3. Click **Share** and add the tutors who need access.

---

## Part 4: Build the Power Automate Flow

### 4.1 Create the flow

1. Go to [make.powerautomate.com](https://make.powerautomate.com).
2. Click **+ Create** in the left nav.
3. Choose **Instant cloud flow**.
4. Name: `Assemble and Send Feedback`
5. Trigger: **Power Apps (V2)**
6. Click **Create**.

### 4.2 Build the flow step by step

Follow every step in [power-automate/flow-steps.md](../power-automate/flow-steps.md).

**Summary of actions to add:**

1. **Power Apps (V2) trigger** — add SelectionID text input
2. **SharePoint — Get items** (Selections list, filtered by SelectionID)
3. **Initialise variable** (x9 — one per variable)
4. **SharePoint — Get items** (IntroParagraphs, filtered by IntroID)
5. **SharePoint — Get items** (Templates, filtered by TemplateID)
6. **Parse JSON** (SelectedFeedbackIDs)
7. **Initialise variable** (varFeedbackItems as Array)
8. **Apply to each** — loop over parsed JSON
   - **SharePoint — Get items** (FeedbackLibrary, filtered by FeedbackID)
   - **Append to array variable** (varFeedbackItems)
9. **Compose** (CategoryOrder array)
10. **Apply to each** — loop over CategoryOrder
    - **Filter array** (varFeedbackItems by category)
    - **Condition** (any items?)
    - **Compose** (sort filtered items)
    - **Append to string variable** (varHtmlBody — heading + list open)
    - **Append to string variable** (varPlainBody — heading)
    - **Apply to each** — loop over feedback items
      - **Append to string variable** (varHtmlBody — list item)
      - **Append to string variable** (varPlainBody — bullet)
    - **Append to string variable** (varHtmlBody — list close)
11. **Condition** (custom note exists?)
    - **Set variable** (varCustomNoteHtml)
    - **Append to string variable** (varPlainBody)
12. **Compose** (FinalHtmlEmail)
13. **Compose** (FinalPlainText)
14. **Scope: Try_Scope**
    - **Office 365 Outlook — Send an email (V2)**
    - **SharePoint — Update item** (Selections — Status = Sent)
    - **SharePoint — Create item** (DeliveryLog — Sent)
15. **Scope: Catch_Scope** (Configure Run After = Try_Scope failed)
    - **SharePoint — Update item** (Selections — Status = Failed)
    - **SharePoint — Create item** (DeliveryLog — Failed)

### 4.3 Save and test

1. Click **Save**.
2. Click **Test** > **Manually**.
3. Enter `SEL001` as the SelectionID.
4. Check the flow run to verify each step succeeds.
5. Check the email inbox of the test student address.

> **Important:** Before testing, make sure the Selections list has a row with SelectionID = `SEL001` and the Student lookup is correctly set.

---

## Part 5: Connect Power Apps to the Flow

1. Return to Power Apps and open the `Feedback Builder` app for editing.
2. Select **btnSubmitSend**.
3. Click **Action** > **Power Automate** in the top menu.
4. Select the `Assemble and Send Feedback` flow.
5. The formula `AssembleAndSendFeedback.Run(varCurrentSelectionID)` in btnSubmitSend.OnSelect will now work.
6. **Save** and **Publish** the app.

---

## Part 6: Testing Checklist

Run through each test and tick it off:

### Functional tests

- [ ] Can select a student from the dropdown
- [ ] Email and module auto-populate when student is selected
- [ ] Can filter feedback by category
- [ ] Can search feedback by title/tag
- [ ] Can tick 3–8 feedback items
- [ ] Selection count label updates correctly
- [ ] Save Draft creates a Selections row with Status = Draft
- [ ] Submit & Send updates Status to Submitted and triggers the flow
- [ ] Email arrives at the student's address
- [ ] Email contains correct student name, module, and date
- [ ] Feedback items are grouped by category in the correct order
- [ ] Custom note appears in the email (if one was entered)
- [ ] Selections row Status updates to Sent after successful send
- [ ] DeliveryLog entry is created

### Accessibility checks

- [ ] Email headings are read in correct order by a screen reader
- [ ] Email has clear spacing and short text blocks
- [ ] Plain-text version is appended at the bottom of the email
- [ ] Power App passes the built-in Accessibility Checker

### Error handling tests

- [ ] Invalid email address results in Status = Failed and error logged
- [ ] DeliveryLog captures the error message
- [ ] Flow does not resend unless user manually resubmits

### Demo script (2-minute walkthrough)

1. Open the Feedback Builder app
2. Select **Mei Chen** from the student dropdown
3. Filter by **Critical Thinking**
4. Tick **F09** (Excellent critical evaluation) and **F11** (Good comparison of perspectives)
5. Change filter to **Referencing**
6. Tick **F21** (Accurate APA referencing)
7. Type a custom note: *"Great work this term, Mei. Keep it up!"*
8. Click **Submit & Send**
9. Open the email inbox and show the received feedback email
10. Show the structured format with category headings and the custom note

---

## Part 7: Troubleshooting

### "Column not found" errors in the flow

SharePoint internal column names can differ from display names. To find the internal name:
1. Go to **List settings** > click the column name
2. Look at the URL — the `Field=` parameter shows the internal name
3. Common example: a column named "Student Email" may have internal name `Student_x0020_Email`

### Flow not triggering from Power Apps

- Make sure the flow is saved and turned on
- In Power Apps, remove and re-add the flow connection
- Check that `AssembleAndSendFeedback.Run(varCurrentSelectionID)` matches the exact flow name

### Email not arriving

- Check the flow run history — did the Send Email step succeed?
- Verify the sender mailbox has permission to send to the student address
- Check the student email's spam/junk folder
- For testing, use your own email address in the Students list

### JSON parse error in the flow

- Check the SelectedFeedbackIDs value in the Selections list
- It must be a valid JSON array, e.g.: `[{"FeedbackID":"F01"},{"FeedbackID":"F05"}]`
- Common issue: Power Apps may add extra escaping. Check the raw value in SharePoint.

### Lookup columns not populating

- Lookup columns cannot be set via CSV import
- They must be set manually in SharePoint or via Power Apps Patch
- When using Patch in Power Apps, use the format: `{Id: item.ID, Value: item.DisplayField}`

### "The specified list was not found" error

- Verify the site URL in the flow matches your actual SharePoint site
- Check that the list name is spelled exactly right (case-sensitive in some contexts)
- Try using the list GUID instead of the name
