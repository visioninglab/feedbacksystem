# Power Apps Formulas Reference — Feedback Builder

Copy-paste these formulas into the Power Apps formula bar for each control.

---

## 1. App-Level

### App.OnStart

```
Set(varCurrentUser, User());
Clear(colSelectedFeedback);
Set(varCurrentSelectionID, Blank())
```

---

## 2. Screen: scrFeedbackBuilder

### Screen.OnVisible

```
Clear(colSelectedFeedback);
Set(varCurrentSelectionID, Blank());
Reset(ddStudent);
Reset(ddModule);
Reset(ddIntro);
Reset(ddCategoryFilter);
Reset(txtSearch);
Reset(txtCustomNote)
```

---

## 3. Student Selection

### ddStudent (Dropdown)

**Items:**

```
SortByColumns(Students, "StudentName", SortOrder.Ascending)
```

**Value:** `StudentName`

**OnChange:**

```
Set(varSelectedStudent, ddStudent.Selected);
Clear(colSelectedFeedback)
```

### lblStudentEmail (Label)

**Text:**

```
"Email: " & ddStudent.Selected.Email
```

### lblStudentTutor (Label)

**Text:**

```
"Tutor: " & ddStudent.Selected.Tutor
```

---

## 4. Module

### ddModule (Dropdown or Text Input)

**DefaultSelectedItems:**

```
[ddStudent.Selected.Module]
```

If using a Text Input instead:

**Default:**

```
ddStudent.Selected.Module
```

---

## 5. Intro Paragraph

### ddIntro (Dropdown)

**Items:**

```
IntroParagraphs
```

**Value:** `IntroID`

### lblIntroPreview (Label — optional, shows selected intro text)

**Text:**

```
ddIntro.Selected.IntroText
```

---

## 6. Category Filter and Search

### ddCategoryFilter (Dropdown)

**Items:**

```
["All", "Engagement", "Academic Skills", "Critical Thinking", "Structure", "Writing", "Referencing", "Next Steps", "Overall"]
```

**Default:** `"All"`

### txtSearch (Text Input)

No special formula — standard text input. Set **HintText** to `"Search by title or tag..."`.

---

## 7. Feedback Gallery

### galFeedbackItems (Gallery)

**Items:**

```
SortByColumns(
    Filter(
        FeedbackLibrary,
        (ddCategoryFilter.Selected.Value = "All" || Category.Value = ddCategoryFilter.Selected.Value)
        && (IsBlank(txtSearch.Text) || txtSearch.Text in Title || txtSearch.Text in Tags)
    ),
    "DisplayOrder",
    SortOrder.Ascending
)
```

### Inside the gallery template:

**lblGalTitle (Label) — Text:**

```
ThisItem.Title
```

**lblGalCategory (Label) — Text:**

```
ThisItem.Category.Value
```

**lblGalPreview (Label) — Text:**

```
Left(ThisItem.FeedbackText, 120) & If(Len(ThisItem.FeedbackText) > 120, "...", "")
```

### chkSelect (Checkbox — inside gallery)

**Default:**

```
ThisItem.FeedbackID in colSelectedFeedback.FeedbackID
```

**OnCheck:**

```
Collect(colSelectedFeedback, {FeedbackID: ThisItem.FeedbackID})
```

**OnUncheck:**

```
RemoveIf(colSelectedFeedback, FeedbackID = ThisItem.FeedbackID)
```

---

## 8. Selection Count

### lblSelectionCount (Label)

**Text:**

```
CountRows(colSelectedFeedback) & " feedback item(s) selected"
```

---

## 9. Custom Note

### txtCustomNote (Text Input)

Set **Mode** to `TextMode.MultiLine`. Set **HintText** to `"Add a personal note for this student (optional)..."`.

No special formula needed.

---

## 10. Save Draft Button

### btnSaveDraft (Button)

**Text:** `"Save Draft"`

**DisplayMode:**

```
If(
    IsBlank(ddStudent.Selected) || CountRows(colSelectedFeedback) = 0,
    DisplayMode.Disabled,
    DisplayMode.Edit
)
```

**OnSelect:**

```
If(
    IsBlank(ddStudent.Selected) || CountRows(colSelectedFeedback) = 0,
    Notify("Please select a student and at least one feedback item.", NotificationType.Error),
    If(
        IsBlank(varCurrentSelectionID),
        // CREATE new draft
        Set(
            varNewSelection,
            Patch(
                Selections,
                Defaults(Selections),
                {
                    SelectionID: "SEL-" & Text(Now(), "yyyymmddhhmmss"),
                    Student: {
                        Id: ddStudent.Selected.ID,
                        Value: ddStudent.Selected.StudentName
                    },
                    StudentEmail: ddStudent.Selected.Email,
                    Module: ddStudent.Selected.Module,
                    IntroID: {
                        Id: ddIntro.Selected.ID,
                        Value: ddIntro.Selected.IntroID
                    },
                    SelectedFeedbackIDs: JSON(colSelectedFeedback, JSONFormat.Compact),
                    CustomNote: txtCustomNote.Text,
                    Status: {Value: "Draft"}
                }
            )
        );
        Set(varCurrentSelectionID, varNewSelection.SelectionID);
        Notify("Draft saved.", NotificationType.Success),

        // UPDATE existing draft
        Patch(
            Selections,
            LookUp(Selections, SelectionID = varCurrentSelectionID),
            {
                StudentEmail: ddStudent.Selected.Email,
                Module: ddStudent.Selected.Module,
                IntroID: {
                    Id: ddIntro.Selected.ID,
                    Value: ddIntro.Selected.IntroID
                },
                SelectedFeedbackIDs: JSON(colSelectedFeedback, JSONFormat.Compact),
                CustomNote: txtCustomNote.Text,
                Status: {Value: "Draft"}
            }
        );
        Notify("Draft updated.", NotificationType.Success)
    )
)
```

---

## 11. Submit & Send Button

### btnSubmitSend (Button)

**Text:** `"Submit & Send"`

**DisplayMode:**

```
If(
    IsBlank(ddStudent.Selected) || CountRows(colSelectedFeedback) = 0,
    DisplayMode.Disabled,
    DisplayMode.Edit
)
```

**OnSelect:**

```
If(
    IsBlank(ddStudent.Selected) || CountRows(colSelectedFeedback) = 0,
    Notify("Please select a student and at least one feedback item.", NotificationType.Error),

    // Save or update with Submitted status
    If(
        IsBlank(varCurrentSelectionID),
        Set(
            varNewSelection,
            Patch(
                Selections,
                Defaults(Selections),
                {
                    SelectionID: "SEL-" & Text(Now(), "yyyymmddhhmmss"),
                    Student: {
                        Id: ddStudent.Selected.ID,
                        Value: ddStudent.Selected.StudentName
                    },
                    StudentEmail: ddStudent.Selected.Email,
                    Module: ddStudent.Selected.Module,
                    IntroID: {
                        Id: ddIntro.Selected.ID,
                        Value: ddIntro.Selected.IntroID
                    },
                    SelectedFeedbackIDs: JSON(colSelectedFeedback, JSONFormat.Compact),
                    CustomNote: txtCustomNote.Text,
                    Status: {Value: "Submitted"},
                    SubmittedAt: Now()
                }
            )
        );
        Set(varCurrentSelectionID, varNewSelection.SelectionID),

        Patch(
            Selections,
            LookUp(Selections, SelectionID = varCurrentSelectionID),
            {
                SelectedFeedbackIDs: JSON(colSelectedFeedback, JSONFormat.Compact),
                CustomNote: txtCustomNote.Text,
                Status: {Value: "Submitted"},
                SubmittedAt: Now()
            }
        )
    );

    // Trigger the Power Automate flow
    AssembleAndSendFeedback.Run(varCurrentSelectionID);

    Notify("Feedback submitted and sent!", NotificationType.Success);

    // Reset the form for next student
    Clear(colSelectedFeedback);
    Set(varCurrentSelectionID, Blank());
    Reset(ddStudent);
    Reset(txtCustomNote)
)
```

---

## 12. Accessibility Checklist for the App

Before publishing, verify these settings:

- Set **AccessibleLabel** on every control (e.g., `"Select student dropdown"`, `"Feedback item checkbox for " & ThisItem.Title`)
- Set **TabIndex** so keyboard navigation follows the visual order: ddStudent -> ddModule -> ddIntro -> ddCategoryFilter -> txtSearch -> galFeedbackItems -> txtCustomNote -> btnSaveDraft -> btnSubmitSend
- Use the built-in **Accessibility Checker** (App checker icon in the toolbar)
- Ensure all text meets 4.5:1 contrast ratio against background
- Avoid using colour alone to convey meaning (e.g., the selected count label should use text, not just a colour change)
