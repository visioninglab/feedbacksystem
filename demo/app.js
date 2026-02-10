// ============================================================
// DATA — embedded from CSV files
// ============================================================

const STUDENTS = [
  { StudentID: "STU001", StudentName: "Mei Chen", Email: "mei.chen@university.ac.uk", Module: "Intro to Psychology", Tutor: "Dr Sarah Mitchell" },
  { StudentID: "STU002", StudentName: "James Okafor", Email: "james.okafor@university.ac.uk", Module: "Research Methods", Tutor: "Dr Sarah Mitchell" },
  { StudentID: "STU003", StudentName: "Priya Sharma", Email: "priya.sharma@university.ac.uk", Module: "Cognitive Psychology", Tutor: "Dr Tom Reeves" },
  { StudentID: "STU004", StudentName: "Liam Byrne", Email: "liam.byrne@university.ac.uk", Module: "Intro to Psychology", Tutor: "Dr Sarah Mitchell" },
  { StudentID: "STU005", StudentName: "Aisha Khan", Email: "aisha.khan@university.ac.uk", Module: "Research Methods", Tutor: "Dr Tom Reeves" },
  { StudentID: "STU006", StudentName: "Sophie Williams", Email: "sophie.williams@university.ac.uk", Module: "Cognitive Psychology", Tutor: "Dr Tom Reeves" },
  { StudentID: "STU007", StudentName: "Daniel Adeyemi", Email: "daniel.adeyemi@university.ac.uk", Module: "Intro to Psychology", Tutor: "Dr Sarah Mitchell" },
  { StudentID: "STU008", StudentName: "Emma Johansson", Email: "emma.johansson@university.ac.uk", Module: "Research Methods", Tutor: "Dr Sarah Mitchell" },
  { StudentID: "STU009", StudentName: "Ryan Patel", Email: "ryan.patel@university.ac.uk", Module: "Cognitive Psychology", Tutor: "Dr Tom Reeves" },
  { StudentID: "STU010", StudentName: "Chloe Dubois", Email: "chloe.dubois@university.ac.uk", Module: "Intro to Psychology", Tutor: "Dr Tom Reeves" }
];

const FEEDBACK_LIBRARY = [
  { FeedbackID: "F01", Title: "Strong seminar participation", Category: "Engagement", FeedbackText: "You have contributed consistently and constructively to seminar discussions, offering thoughtful comments that build on the ideas of your peers. This level of engagement shows genuine intellectual curiosity.", Tags: "seminars,participation,discussion", DisplayOrder: 10 },
  { FeedbackID: "F02", Title: "Improving lecture attendance", Category: "Engagement", FeedbackText: "Your attendance at lectures has been inconsistent this term. Regular attendance is important because lectures introduce core theoretical frameworks that you need for your assignments. I would encourage you to attend all remaining sessions.", Tags: "attendance,lectures,improvement", DisplayOrder: 20 },
  { FeedbackID: "F03", Title: "Good use of office hours", Category: "Engagement", FeedbackText: "You have made effective use of office hours to clarify your understanding of key concepts. This proactive approach to seeking support is a strength that will serve you well throughout your studies.", Tags: "office-hours,proactive,support", DisplayOrder: 30 },
  { FeedbackID: "F04", Title: "Limited engagement with reading", Category: "Engagement", FeedbackText: "Your contributions suggest you have not yet engaged fully with the recommended reading list. Engaging with primary sources is essential in psychology \u2014 try to read at least two journal articles per topic before each seminar.", Tags: "reading,preparation,journals", DisplayOrder: 40 },
  { FeedbackID: "F05", Title: "Excellent application of theory", Category: "Academic Skills", FeedbackText: "You demonstrate a strong ability to apply psychological theories to real-world scenarios. Your essay connected attachment theory to clinical practice in a way that showed genuine understanding rather than surface-level description.", Tags: "theory,application,clinical", DisplayOrder: 10 },
  { FeedbackID: "F06", Title: "Developing analytical skills", Category: "Academic Skills", FeedbackText: "Your analytical skills are developing well. To strengthen them further, try to move beyond describing what a study found and instead evaluate the methodology, consider alternative explanations, and discuss the implications.", Tags: "analysis,methodology,evaluation", DisplayOrder: 20 },
  { FeedbackID: "F07", Title: "Strong data interpretation", Category: "Academic Skills", FeedbackText: "Your interpretation of statistical output in the lab report was accurate and clearly explained. You correctly identified the key findings and linked them back to the hypothesis.", Tags: "statistics,data,lab-report", DisplayOrder: 30 },
  { FeedbackID: "F08", Title: "Needs stronger evidence base", Category: "Academic Skills", FeedbackText: "Your arguments would benefit from a stronger evidence base. Where you make claims about psychological phenomena, support them with specific research findings, including the authors and year of publication.", Tags: "evidence,research,citations", DisplayOrder: 40 },
  { FeedbackID: "F09", Title: "Excellent critical evaluation", Category: "Critical Thinking", FeedbackText: "You show a strong capacity for critical evaluation. Your analysis of the methodological limitations in the Milgram replication studies was particularly well-reasoned, weighing ethical and validity concerns with nuance.", Tags: "critical-analysis,methodology,ethics", DisplayOrder: 10 },
  { FeedbackID: "F10", Title: "Moving beyond description", Category: "Critical Thinking", FeedbackText: "Your work tends to describe theories and findings rather than critically evaluate them. Try to ask: What are the strengths and limitations of this study? How could it be improved? Do the conclusions follow from the evidence?", Tags: "description,evaluation,improvement", DisplayOrder: 20 },
  { FeedbackID: "F11", Title: "Good comparison of perspectives", Category: "Critical Thinking", FeedbackText: "You effectively compared the cognitive and behaviourist perspectives on learning, identifying where they agree, diverge, and what each perspective fails to explain. This kind of comparative analysis is exactly what we look for.", Tags: "comparison,perspectives,analysis", DisplayOrder: 30 },
  { FeedbackID: "F12", Title: "Developing independent argument", Category: "Critical Thinking", FeedbackText: "You are beginning to form your own arguments, which is encouraging. To develop this further, try stating your position explicitly at the start of each section and then marshalling evidence to support it.", Tags: "argument,independence,structure", DisplayOrder: 40 },
  { FeedbackID: "F13", Title: "Well-organised essay", Category: "Structure", FeedbackText: "Your essay was clearly organised with a logical progression from introduction through to conclusion. Each paragraph addressed a distinct point and linked back to your central argument. This made your work easy to follow.", Tags: "organisation,paragraphs,flow", DisplayOrder: 10 },
  { FeedbackID: "F14", Title: "Improve paragraph structure", Category: "Structure", FeedbackText: "Some paragraphs in your essay tried to cover too many ideas at once. Aim for one main point per paragraph: a topic sentence, supporting evidence, analysis, and a linking sentence to the next paragraph.", Tags: "paragraphs,topic-sentences,clarity", DisplayOrder: 20 },
  { FeedbackID: "F15", Title: "Strong introduction framing", Category: "Structure", FeedbackText: "Your introduction effectively framed the question, defined key terms, and outlined the structure of your argument. This gave the reader a clear roadmap for what followed.", Tags: "introduction,framing,definitions", DisplayOrder: 30 },
  { FeedbackID: "F16", Title: "Conclusion needs development", Category: "Structure", FeedbackText: "Your conclusion was brief and did not fully synthesise your arguments. A strong conclusion should summarise your key findings, state how they answer the question, and suggest implications or areas for further research.", Tags: "conclusion,synthesis,implications", DisplayOrder: 40 },
  { FeedbackID: "F17", Title: "Clear and concise writing style", Category: "Writing", FeedbackText: "Your writing is clear, concise, and appropriately academic in tone. You avoid unnecessary jargon while still using technical terminology accurately. This is a real strength of your work.", Tags: "clarity,tone,academic-writing", DisplayOrder: 10 },
  { FeedbackID: "F18", Title: "Improve academic tone", Category: "Writing", FeedbackText: "Parts of your essay used informal language that is not appropriate for academic writing. Avoid phrases like \u201ca lot of\u201d or \u201cbasically\u201d and replace them with more precise academic alternatives such as \u201ca substantial body of\u201d or \u201cfundamentally.\u201d", Tags: "tone,formality,precision", DisplayOrder: 20 },
  { FeedbackID: "F19", Title: "Good use of technical terminology", Category: "Writing", FeedbackText: "You used psychological terminology accurately and consistently throughout your report. Terms like \u201coperationalisation,\u201d \u201cecological validity,\u201d and \u201cconfounding variable\u201d were applied correctly in context.", Tags: "terminology,accuracy,vocabulary", DisplayOrder: 30 },
  { FeedbackID: "F20", Title: "Proofread for clarity", Category: "Writing", FeedbackText: "There are several sentences in your essay that are unclear due to grammatical errors or overly long constructions. I recommend reading your work aloud before submitting \u2014 this often helps identify sentences that need simplifying.", Tags: "proofreading,grammar,clarity", DisplayOrder: 40 },
  { FeedbackID: "F21", Title: "Accurate APA referencing", Category: "Referencing", FeedbackText: "Your reference list is accurately formatted in APA 7th edition style, and your in-text citations are consistently and correctly placed. This is an important academic skill that you have clearly mastered.", Tags: "APA,citations,reference-list", DisplayOrder: 10 },
  { FeedbackID: "F22", Title: "Inconsistent citation format", Category: "Referencing", FeedbackText: "Your in-text citations are inconsistently formatted. Remember: for one or two authors, cite both names every time. For three or more authors, use the first author followed by \u201cet al.\u201d from the first citation. Check the APA 7th edition guidelines.", Tags: "APA,format,consistency", DisplayOrder: 20 },
  { FeedbackID: "F23", Title: "Broaden source range", Category: "Referencing", FeedbackText: "You relied heavily on textbook sources. To strengthen your work, include peer-reviewed journal articles \u2014 aim for at least five primary sources per 2000-word essay. Use databases like PsycINFO or Google Scholar.", Tags: "sources,journals,PsycINFO", DisplayOrder: 30 },
  { FeedbackID: "F24", Title: "Missing references", Category: "Referencing", FeedbackText: "Several claims in your essay were not supported by citations. Every factual claim or theoretical statement that is not common knowledge needs a reference. Unreferenced claims weaken your argument significantly.", Tags: "missing-citations,evidence,academic-integrity", DisplayOrder: 40 },
  { FeedbackID: "F25", Title: "Prepare for the next assignment", Category: "Next Steps", FeedbackText: "For your upcoming essay on developmental psychology, start by reviewing the marking criteria and planning your structure before you begin writing. Allocate time for at least two drafts.", Tags: "planning,time-management,drafts", DisplayOrder: 10 },
  { FeedbackID: "F26", Title: "Visit the Academic Skills Centre", Category: "Next Steps", FeedbackText: "I recommend booking a session with the Academic Skills Centre to work on your essay planning and critical writing techniques. They offer one-to-one appointments and drop-in workshops.", Tags: "support,skills-centre,workshops", DisplayOrder: 20 },
  { FeedbackID: "F27", Title: "Engage with feedback", Category: "Next Steps", FeedbackText: "Take time to read through all your feedback comments carefully. Identify one or two areas to focus on for your next piece of work, and keep a note of the progress you make. Feedback is most useful when you act on it.", Tags: "reflection,improvement,action-plan", DisplayOrder: 30 },
  { FeedbackID: "F28", Title: "Set up a study group", Category: "Next Steps", FeedbackText: "Consider forming a study group with your peers. Discussing psychological theories with others helps deepen understanding and exposes you to different perspectives that can enrich your own thinking.", Tags: "peer-learning,study-group,collaboration", DisplayOrder: 40 },
  { FeedbackID: "F29", Title: "Outstanding work overall", Category: "Overall", FeedbackText: "This was an outstanding piece of work that demonstrated deep understanding, critical analysis, and clear communication. You should be very pleased with your progress. Keep up this standard.", Tags: "excellent,praise,progress", DisplayOrder: 10 },
  { FeedbackID: "F30", Title: "Good progress this term", Category: "Overall", FeedbackText: "You have made good progress this term. Your understanding of core psychological concepts is solid, and with further development of your critical analysis skills, you are well placed to achieve strong marks going forward.", Tags: "progress,encouraging,potential", DisplayOrder: 20 },
  { FeedbackID: "F31", Title: "Satisfactory but room to improve", Category: "Overall", FeedbackText: "Your work meets the basic requirements but there is significant room for improvement. Focus on the specific areas highlighted above, and do come to office hours if you would like to discuss strategies for raising your grade.", Tags: "satisfactory,improvement,office-hours", DisplayOrder: 30 },
  { FeedbackID: "F32", Title: "Concerns about progress", Category: "Overall", FeedbackText: "I have some concerns about your progress this term. Please do make an appointment to see me during office hours so we can discuss a plan to help you get back on track. Support is available and I want to make sure you access it.", Tags: "concerns,support,meeting", DisplayOrder: 40 }
];

const INTRO_PARAGRAPHS = [
  { IntroID: "INT01", IntroText: "Thank you for your hard work this term. Below you will find personalised feedback on your recent submission. Please read each section carefully and use the suggestions to guide your preparation for upcoming assessments." },
  { IntroID: "INT02", IntroText: "I have put together some feedback on your work based on your recent assignment. The comments below highlight your strengths and identify specific areas where you can improve. I encourage you to review these and come to office hours if you have any questions." },
  { IntroID: "INT03", IntroText: "Here is your personalised feedback for this module. Each section covers a different aspect of your academic performance. I hope you find these comments useful as you continue to develop your skills." },
  { IntroID: "INT04", IntroText: "Welcome to your feedback newsletter. The sections below contain targeted comments about different aspects of your work. Please take time to reflect on each point and consider how you can apply these suggestions to your next assignment." }
];

const TEMPLATE = {
  FooterText: "This feedback was compiled by your module tutor using the Psychology Department Feedback System. If you have questions about any of the comments, please book an appointment during office hours. We are here to support your learning.",
  AccessibilityStatement: "If you need this feedback in another format (for example, large print, audio, or a different file type), please reply to this email and we will provide an alternative version within five working days."
};

const CATEGORY_ORDER = [
  "Engagement", "Academic Skills", "Critical Thinking", "Structure",
  "Writing", "Referencing", "Next Steps", "Overall"
];

// ============================================================
// STATE
// ============================================================

const state = {
  selectedStudent: null,
  selectedIntro: INTRO_PARAGRAPHS[0],
  selectedFeedback: new Set(),
  customNote: "",
  categoryFilter: "All",
  searchText: ""
};

// ============================================================
// DOM REFERENCES
// ============================================================

const dom = {
  ddStudent: document.getElementById("ddStudent"),
  lblModule: document.getElementById("lblModule"),
  ddIntro: document.getElementById("ddIntro"),
  ddCategory: document.getElementById("ddCategory"),
  txtSearch: document.getElementById("txtSearch"),
  galFeedback: document.getElementById("galFeedback"),
  lblFilterCount: document.getElementById("lblFilterCount"),
  lblSelectionCount: document.getElementById("lblSelectionCount"),
  txtCustomNote: document.getElementById("txtCustomNote"),
  btnSaveDraft: document.getElementById("btnSaveDraft"),
  btnSubmitSend: document.getElementById("btnSubmitSend"),
  previewHtml: document.getElementById("previewHtml"),
  previewPlain: document.getElementById("previewPlain"),
  toastContainer: document.getElementById("toastContainer")
};

// ============================================================
// HELPERS
// ============================================================

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function formatDate() {
  const d = new Date();
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

function showToast(message, type) {
  const toast = document.createElement("div");
  toast.className = "toast " + (type || "info");
  toast.textContent = message;
  dom.toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.style.transition = "opacity 0.3s";
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ============================================================
// POPULATE CONTROLS
// ============================================================

function populateStudents() {
  STUDENTS.forEach(s => {
    const opt = document.createElement("option");
    opt.value = s.StudentID;
    opt.textContent = s.StudentName;
    dom.ddStudent.appendChild(opt);
  });
}

function populateIntros() {
  INTRO_PARAGRAPHS.forEach(ip => {
    const opt = document.createElement("option");
    opt.value = ip.IntroID;
    opt.textContent = ip.IntroID + " \u2014 " + ip.IntroText.substring(0, 60) + "...";
    dom.ddIntro.appendChild(opt);
  });
}

function populateCategories() {
  const allOpt = document.createElement("option");
  allOpt.value = "All";
  allOpt.textContent = "All Categories";
  dom.ddCategory.appendChild(allOpt);

  CATEGORY_ORDER.forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    dom.ddCategory.appendChild(opt);
  });
}

// ============================================================
// FILTERING & GALLERY
// ============================================================

function getFilteredFeedback() {
  return FEEDBACK_LIBRARY.filter(item => {
    const catMatch = state.categoryFilter === "All" || item.Category === state.categoryFilter;
    const searchMatch = !state.searchText ||
      item.Title.toLowerCase().includes(state.searchText.toLowerCase()) ||
      item.Tags.toLowerCase().includes(state.searchText.toLowerCase());
    return catMatch && searchMatch;
  }).sort((a, b) => {
    const catA = CATEGORY_ORDER.indexOf(a.Category);
    const catB = CATEGORY_ORDER.indexOf(b.Category);
    if (catA !== catB) return catA - catB;
    return a.DisplayOrder - b.DisplayOrder;
  });
}

function renderGallery() {
  const items = getFilteredFeedback();
  dom.lblFilterCount.textContent = items.length + " item" + (items.length !== 1 ? "s" : "");
  dom.lblSelectionCount.textContent = state.selectedFeedback.size + " selected";

  dom.galFeedback.innerHTML = items.map(item => {
    const checked = state.selectedFeedback.has(item.FeedbackID);
    const preview = item.FeedbackText.length > 100
      ? item.FeedbackText.substring(0, 100) + "..."
      : item.FeedbackText;

    return '<div class="gallery-item' + (checked ? ' selected' : '') + '" role="listitem" data-id="' + item.FeedbackID + '">' +
      '<input type="checkbox" ' + (checked ? 'checked' : '') +
      ' aria-label="Select ' + escapeHtml(item.Title) + '">' +
      '<div class="gallery-item-content">' +
        '<div class="gallery-item-title">' + escapeHtml(item.FeedbackID + " \u2014 " + item.Title) + '</div>' +
        '<div class="gallery-item-meta">' + escapeHtml(item.Category) + '</div>' +
        '<div class="gallery-item-preview">' + escapeHtml(preview) + '</div>' +
      '</div>' +
    '</div>';
  }).join("");

  updateButtons();
}

// ============================================================
// TOGGLE SELECTION
// ============================================================

function toggleFeedback(feedbackId) {
  if (state.selectedFeedback.has(feedbackId)) {
    state.selectedFeedback.delete(feedbackId);
  } else {
    state.selectedFeedback.add(feedbackId);
  }
  renderGallery();
  renderPreview();
}

// ============================================================
// EMAIL PREVIEW — HTML
// ============================================================

function buildEmailHtml() {
  if (!state.selectedStudent || state.selectedFeedback.size === 0) return null;

  const student = state.selectedStudent;
  const intro = state.selectedIntro;
  const date = formatDate();

  // Group selected items by category
  const grouped = {};
  CATEGORY_ORDER.forEach(cat => { grouped[cat] = []; });

  FEEDBACK_LIBRARY.forEach(item => {
    if (state.selectedFeedback.has(item.FeedbackID)) {
      grouped[item.Category].push(item);
    }
  });

  // Sort within category
  Object.keys(grouped).forEach(cat => {
    grouped[cat].sort((a, b) => a.DisplayOrder - b.DisplayOrder);
  });

  // Build sections
  let sections = "";
  CATEGORY_ORDER.forEach(cat => {
    if (grouped[cat].length === 0) return;
    sections += '<h2 style="font-size:20px; line-height:1.3; color:#1a1a1a; margin:24px 0 12px 0; font-family:Arial, Helvetica, sans-serif;">' + escapeHtml(cat) + '</h2>';
    sections += '<ul style="padding-left:20px; margin:0 0 16px 0; list-style-type:disc;">';
    grouped[cat].forEach(item => {
      sections += '<li style="font-size:16px; line-height:1.5; color:#1a1a1a; margin:0 0 12px 0; font-family:Arial, Helvetica, sans-serif;">' +
        '<strong>' + escapeHtml(item.Title) + '</strong><br>' +
        escapeHtml(item.FeedbackText) +
        '</li>';
    });
    sections += '</ul>';
  });

  // Custom note
  let customNoteHtml = "";
  if (state.customNote.trim()) {
    customNoteHtml = '<h2 style="font-size:20px; line-height:1.3; color:#1a1a1a; margin:24px 0 12px 0; font-family:Arial, Helvetica, sans-serif;">A Note from Your Tutor</h2>' +
      '<p style="font-size:16px; line-height:1.5; color:#1a1a1a; margin:0 0 24px 0; font-family:Arial, Helvetica, sans-serif;">' + escapeHtml(state.customNote) + '</p>';
  }

  return '<div role="article" aria-label="Personalised feedback for ' + escapeHtml(student.StudentName) + '" ' +
    'style="max-width:600px; margin:0 auto; background-color:#ffffff; padding:32px; font-family:Arial, Helvetica, sans-serif;">' +
    '<h1 style="font-size:24px; line-height:1.3; color:#1a1a1a; margin:0 0 8px 0; font-family:Arial, Helvetica, sans-serif;">Personalised Feedback</h1>' +
    '<p style="font-size:16px; line-height:1.5; color:#333333; margin:0 0 24px 0; font-family:Arial, Helvetica, sans-serif;">' +
      '<strong>Student:</strong> ' + escapeHtml(student.StudentName) + '<br>' +
      '<strong>Module:</strong> ' + escapeHtml(student.Module) + '<br>' +
      '<strong>Date:</strong> ' + escapeHtml(date) +
    '</p>' +
    '<hr style="border:none; border-top:1px solid #cccccc; margin:24px 0;" aria-hidden="true">' +
    '<p style="font-size:16px; line-height:1.5; color:#1a1a1a; margin:0 0 24px 0; font-family:Arial, Helvetica, sans-serif;">' + escapeHtml(intro.IntroText) + '</p>' +
    sections +
    customNoteHtml +
    '<hr style="border:none; border-top:1px solid #cccccc; margin:24px 0;" aria-hidden="true">' +
    '<p style="font-size:14px; line-height:1.5; color:#555555; margin:0 0 12px 0; font-family:Arial, Helvetica, sans-serif;">' + escapeHtml(TEMPLATE.FooterText) + '</p>' +
    '<p style="font-size:14px; line-height:1.5; color:#555555; margin:0 0 0 0; font-family:Arial, Helvetica, sans-serif;">' + escapeHtml(TEMPLATE.AccessibilityStatement) + '</p>' +
  '</div>';
}

// ============================================================
// EMAIL PREVIEW — PLAIN TEXT
// ============================================================

function buildPlainText() {
  if (!state.selectedStudent || state.selectedFeedback.size === 0) return null;

  const student = state.selectedStudent;
  const intro = state.selectedIntro;
  const date = formatDate();

  const grouped = {};
  CATEGORY_ORDER.forEach(cat => { grouped[cat] = []; });
  FEEDBACK_LIBRARY.forEach(item => {
    if (state.selectedFeedback.has(item.FeedbackID)) {
      grouped[item.Category].push(item);
    }
  });
  Object.keys(grouped).forEach(cat => {
    grouped[cat].sort((a, b) => a.DisplayOrder - b.DisplayOrder);
  });

  let lines = [];
  lines.push("PERSONALISED FEEDBACK");
  lines.push("=====================");
  lines.push("");
  lines.push("Student: " + student.StudentName);
  lines.push("Module:  " + student.Module);
  lines.push("Date:    " + date);
  lines.push("");
  lines.push("-----");
  lines.push("");
  lines.push(intro.IntroText);
  lines.push("");
  lines.push("-----");
  lines.push("");

  CATEGORY_ORDER.forEach(cat => {
    if (grouped[cat].length === 0) return;
    lines.push(cat.toUpperCase());
    lines.push("-------------");
    grouped[cat].forEach(item => {
      lines.push("- " + item.Title);
      lines.push("  " + item.FeedbackText);
      lines.push("");
    });
  });

  if (state.customNote.trim()) {
    lines.push("-----");
    lines.push("");
    lines.push("A NOTE FROM YOUR TUTOR");
    lines.push("----------------------");
    lines.push(state.customNote);
    lines.push("");
  }

  lines.push("-----");
  lines.push("");
  lines.push(TEMPLATE.FooterText);
  lines.push("");
  lines.push(TEMPLATE.AccessibilityStatement);

  return lines.join("\n");
}

// ============================================================
// RENDER PREVIEW
// ============================================================

function renderPreview() {
  const html = buildEmailHtml();
  const plain = buildPlainText();

  if (html) {
    dom.previewHtml.innerHTML = html;
    dom.previewPlain.textContent = plain;
  } else {
    dom.previewHtml.innerHTML = '<div class="preview-empty">Select a student and feedback items to see the email preview</div>';
    dom.previewPlain.textContent = "";
  }
}

// ============================================================
// BUTTON STATE
// ============================================================

function updateButtons() {
  const valid = state.selectedStudent && state.selectedFeedback.size > 0;
  dom.btnSaveDraft.disabled = !valid;
  dom.btnSubmitSend.disabled = !valid;
}

// ============================================================
// EVENT HANDLERS
// ============================================================

function onStudentChange() {
  const id = dom.ddStudent.value;
  if (!id) {
    state.selectedStudent = null;
    dom.lblModule.textContent = "Select a student above";
  } else {
    state.selectedStudent = STUDENTS.find(s => s.StudentID === id);
    dom.lblModule.textContent = state.selectedStudent.Module + "  \u00b7  " + state.selectedStudent.Tutor;
  }
  state.selectedFeedback.clear();
  renderGallery();
  renderPreview();
}

function onIntroChange() {
  const id = dom.ddIntro.value;
  state.selectedIntro = INTRO_PARAGRAPHS.find(ip => ip.IntroID === id) || INTRO_PARAGRAPHS[0];
  renderPreview();
}

function onCategoryChange() {
  state.categoryFilter = dom.ddCategory.value;
  renderGallery();
}

function onSearchInput() {
  state.searchText = dom.txtSearch.value;
  renderGallery();
}

function onCustomNoteInput() {
  state.customNote = dom.txtCustomNote.value;
  renderPreview();
}

function onGalleryClick(e) {
  const item = e.target.closest(".gallery-item");
  if (!item) return;
  const id = item.dataset.id;
  if (id) toggleFeedback(id);
}

function onSaveDraft() {
  if (!state.selectedStudent || state.selectedFeedback.size === 0) return;
  const selectionData = {
    SelectionID: "SEL-" + Date.now(),
    StudentEmail: state.selectedStudent.Email,
    Module: state.selectedStudent.Module,
    SelectedFeedbackIDs: Array.from(state.selectedFeedback).map(id => ({ FeedbackID: id })),
    CustomNote: state.customNote,
    Status: "Draft"
  };
  console.log("Draft saved:", selectionData);
  showToast("Draft saved for " + state.selectedStudent.StudentName, "success");
}

function onSubmitSend() {
  if (!state.selectedStudent || state.selectedFeedback.size === 0) return;

  dom.btnSubmitSend.classList.add("loading");
  dom.btnSubmitSend.disabled = true;

  setTimeout(() => {
    const email = state.selectedStudent.Email;
    const name = state.selectedStudent.StudentName;

    console.log("Submitted:", {
      SelectionID: "SEL-" + Date.now(),
      StudentEmail: email,
      Module: state.selectedStudent.Module,
      SelectedFeedbackIDs: Array.from(state.selectedFeedback).map(id => ({ FeedbackID: id })),
      CustomNote: state.customNote,
      Status: "Submitted"
    });

    dom.btnSubmitSend.classList.remove("loading");
    showToast("Email sent to " + email + "!", "success");

    // Reset form
    state.selectedFeedback.clear();
    state.customNote = "";
    dom.txtCustomNote.value = "";
    dom.ddStudent.value = "";
    state.selectedStudent = null;
    dom.lblModule.textContent = "Select a student above";
    renderGallery();
    renderPreview();
  }, 1500);
}

// Preview tab switching
function onTabClick(e) {
  const tab = e.target.closest(".preview-tab");
  if (!tab) return;

  document.querySelectorAll(".preview-tab").forEach(t => t.classList.remove("active"));
  tab.classList.add("active");

  const which = tab.dataset.tab;
  if (which === "html") {
    dom.previewHtml.style.display = "";
    dom.previewPlain.style.display = "none";
  } else {
    dom.previewHtml.style.display = "none";
    dom.previewPlain.style.display = "";
  }
}

// ============================================================
// INIT
// ============================================================

function init() {
  populateStudents();
  populateIntros();
  populateCategories();

  dom.ddStudent.addEventListener("change", onStudentChange);
  dom.ddIntro.addEventListener("change", onIntroChange);
  dom.ddCategory.addEventListener("change", onCategoryChange);
  dom.txtSearch.addEventListener("input", onSearchInput);
  dom.txtCustomNote.addEventListener("input", onCustomNoteInput);
  dom.galFeedback.addEventListener("click", onGalleryClick);
  dom.btnSaveDraft.addEventListener("click", onSaveDraft);
  dom.btnSubmitSend.addEventListener("click", onSubmitSend);

  document.querySelector(".preview-tabs").addEventListener("click", onTabClick);

  renderGallery();
  renderPreview();
}

init();
