// ============================================================
// SAMPLE DATA — multi-assignment structure
// ============================================================

const STUDENTS = {
  "mei.chen@university.ac.uk": {
    name: "Mei Chen",
    email: "mei.chen@university.ac.uk",
    tutor: "Dr Sarah Mitchell",
    assignments: [
      {
        id: "mei-essay-2",
        module: "Introduction to Psychology",
        title: "Essay 2: Critically evaluate the claim that memory is a reconstructive process",
        date: "10 February 2026",
        grade: 72,
        band: "Distinction",

        progress: [
          "Your essay structure has improved noticeably \u2014 the conclusion now synthesises your argument rather than listing points.",
          "Your use of evidence is more targeted: you cite specific findings rather than general claims.",
          "Referencing is now fully consistent in APA 7th edition format."
        ],

        structure: {
          overall: "This essay is well-organised with a clear, logical flow. Each paragraph addresses a distinct aspect of the reconstructive memory debate and links back to your central argument. The improvement in your conclusion since Essay 1 is particularly notable.",
          introduction: "Your introduction clearly defines reconstructive memory, names the key theorists (Bartlett, Loftus, Conway), and states your position that memory is largely reconstructive but not without reliable elements. This gives the reader a strong roadmap.",
          conclusion: "Your conclusion effectively synthesises the evidence, weighing Bartlett and Loftus's findings against research on flashbulb memory. You reach a nuanced position and suggest implications for eyewitness testimony policy. This is a significant improvement from your previous essay.",
          tips: [
            "Consider signposting transitions between paragraphs more explicitly \u2014 phrases like 'Building on this evidence...' or 'In contrast to the studies above...' help the reader follow your logic.",
            "Your conclusion could briefly acknowledge what further research is needed to resolve remaining debates."
          ]
        },

        understanding: {
          overall: "You demonstrate strong engagement with the primary research literature. You move beyond textbook summaries to discuss specific findings, methodological details, and their implications.",
          content: "Your choice of studies is well-targeted: Bartlett (1932), Loftus and Palmer (1974), Conway et al. (1994), and Hirst et al. (2015) provide a comprehensive evidence base. The inclusion of Hirst's longitudinal study shows awareness of recent developments in the field.",
          summarising: "Your research summaries are now much more balanced. You describe each study concisely and then spend proportionally more time analysing the findings. The summary of Loftus and Palmer is particularly effective \u2014 you explain both the method and the implications in four focused sentences.",
          tips: [
            "Consider including a study that challenges the reconstructive view from a different angle \u2014 for example, research on eidetic memory or highly superior autobiographical memory (HSAM).",
            "When discussing Conway et al., you could compare their findings more directly with Bartlett's original claims to show how the field has evolved."
          ]
        },

        argument: {
          overall: "Your argument is well-developed and consistently evaluative. You take a clear position and maintain it throughout, using evidence to support, challenge, and refine your claim. This is a marked improvement from Essay 1.",
          framing: "Each paragraph opens with an argumentative claim rather than a description. Your paragraph on Loftus and Palmer is particularly strong: you present the evidence, evaluate its strengths, identify a methodological limitation (ecological validity), and then explain how this affects the broader claim. This is exactly the kind of critical depth we look for.",
          tips: [
            "In the section on flashbulb memory, your argument could be strengthened by addressing why the evidence is inconsistent \u2014 are the contradictions due to different methods, different types of events, or different time delays?",
            "Consider making your final evaluative statement even more precise: rather than 'memory is mostly reconstructive', specify in what circumstances reconstruction is most and least likely."
          ]
        },

        writing: {
          overall: "Your writing is clear, precise, and consistently academic in tone. You have addressed the wordiness issues from Essay 1 effectively.",
          conciseness: "Your sentences are noticeably tighter than in your previous essay. You make your points efficiently without unnecessary padding. Well done.",
          clarity: "Your writing is easy to follow. The only area to watch is your use of the word 'suggests' \u2014 you use it eleven times. Vary your vocabulary: 'indicates', 'demonstrates', 'implies', 'provides evidence for'.",
          grammar: "Grammar and punctuation are accurate throughout. No significant issues to flag.",
          tips: [
            "Vary your reporting verbs to avoid repetition: argued, demonstrated, found, proposed, concluded, contended.",
            "In a few places you could tighten further: 'It is the case that...' can usually be deleted entirely."
          ]
        },

        referencing: {
          overall: "Your referencing is now excellent. All in-text citations are correctly formatted in APA 7th edition, and the reference list is complete and accurate.",
          citing: "Every factual claim is supported by a citation. You handle multiple authors correctly and use 'et al.' appropriately. No unreferenced claims found.",
          referenceList: "Your reference list is well-formatted and matches your in-text citations exactly. You include six peer-reviewed journal articles, exceeding the minimum requirement. The only minor note: check the capitalisation in the Hirst et al. title \u2014 APA uses sentence case for article titles.",
          tips: [
            "For distinction-level work, consider citing the most recent available edition of key texts (e.g., check if there is a later edition of Baddeley's memory textbook).",
            "You could strengthen your bibliography by including a meta-analysis or systematic review to demonstrate breadth of reading."
          ]
        },

        actionPlan: [
          "Add more explicit signposting between paragraphs to strengthen the flow of your argument.",
          "Vary your reporting verbs \u2014 create a list of alternatives to 'suggests' and 'shows' to use across your next essay.",
          "Read one meta-analysis on reconstructive memory to deepen your evidence base for revision or future essays."
        ]
      },
      {
        id: "mei-essay-1",
        module: "Introduction to Psychology",
        title: "Essay 1: Discuss the role of early attachment in emotional development",
        date: "8 December 2025",
        grade: 62,
        band: "Merit",

        structure: {
          overall: "Your essay has a clear sense of organisation and a logical progression of ideas. You open with a well-framed introduction that defines attachment and signals the structure of your argument. The body paragraphs each address a distinct aspect of attachment theory, which makes the essay easy to follow. However, some paragraphs attempt to cover too much ground, which dilutes the focus of individual points.",
          introduction: "Your introduction is one of the stronger parts of this essay. You clearly define what attachment theory is, name the key theorists you will discuss (Bowlby, Ainsworth, Hazan and Shaver), and state the position you intend to argue. The reader knows exactly what to expect from the rest of the essay. One area for improvement: your introduction could more explicitly address the specific question about emotional development rather than attachment theory in general.",
          conclusion: "Your conclusion summarises the main points but reads more like a list of what you covered rather than a synthesis. A stronger conclusion would draw the threads together, state clearly how the evidence answers the essay question, and briefly acknowledge limitations or areas for further research. At the moment, it feels like the essay simply stops rather than reaching a considered endpoint.",
          tips: [
            "Limit each body paragraph to one main argument \u2014 if you find yourself writing more than 200 words in a single paragraph, consider splitting it.",
            "Use the first sentence of each paragraph as a topic sentence that states the paragraph\u2019s argument, not just its topic.",
            "In your conclusion, avoid introducing new evidence. Instead, synthesise your findings and answer the question directly.",
            "Try outlining your essay structure before writing \u2014 this helps ensure each paragraph has a distinct role."
          ]
        },

        understanding: {
          overall: "You demonstrate a solid grasp of the core theories in this area. Your discussion of Bowlby\u2019s attachment theory and Ainsworth\u2019s Strange Situation is accurate and shows genuine engagement with the material. You correctly distinguish between secure and insecure attachment styles and link them to developmental outcomes.",
          content: "Your choice of content is appropriate and well-targeted. You draw on the key studies (Bowlby 1944, Ainsworth 1978, Hazan and Shaver 1987) and use them to build a coherent narrative about how early attachment influences later emotional functioning. The inclusion of Rutter\u2019s Romanian orphan studies adds nuance by challenging the idea that deprivation effects are permanent.",
          summarising: "Your summaries of individual studies are generally accurate, though at times you spend too long describing what a study did rather than explaining what it means. For example, your paragraph on the Strange Situation spends six sentences describing the methodology but only two sentences on the findings and their implications. Aim for a tighter balance: describe briefly, then analyse in depth.",
          tips: [
            "When summarising a study, use the formula: who studied what, how they did it (one sentence), what they found, and what it means for the broader argument.",
            "Avoid listing multiple studies without connecting them \u2014 explain how each one builds on, supports, or challenges the previous point.",
            "Consider including a more recent study (post-2000) to show awareness of how the field has developed.",
            "Check that every study you cite links directly back to the essay question about emotional development."
          ]
        },

        argument: {
          overall: "You are beginning to develop a clear argumentative voice, which is encouraging. Your essay does take a position \u2014 that early attachment has significant but not deterministic effects on emotional development \u2014 and you return to this idea at several points. This gives the essay a sense of direction.",
          framing: "Your argument is most effective in the sections on Bowlby and on cross-cultural critiques, where you weigh evidence on both sides before stating your view. However, in other sections, particularly the discussion of Hazan and Shaver, the argument drifts into description. You present the findings but do not explicitly state what they tell us about your central claim. Every paragraph should advance your argument, not just present information.",
          tips: [
            "At the start of each paragraph, state what you are going to argue, not just what you are going to describe.",
            "After presenting evidence, always include a sentence that explicitly links it back to your central argument.",
            "Use phrases like \u2018This supports the claim that...\u2019, \u2018However, this evidence is limited because...\u2019, or \u2018This suggests that the relationship between attachment and emotional development is more complex than Bowlby proposed.\u2019",
            "Consider presenting a counter-argument and then explaining why your position is still supported \u2014 this shows critical depth."
          ]
        },

        writing: {
          overall: "Your writing is generally clear and readable. You use an appropriate academic tone throughout, and your sentence structure is varied enough to maintain the reader\u2019s engagement. There are a few areas where tightening the language would improve clarity.",
          conciseness: "Some sentences are longer than necessary. For example, \u2018It is widely acknowledged by many researchers in the field of developmental psychology that attachment plays an important role\u2019 could be shortened to \u2018Developmental psychologists widely acknowledge the importance of attachment.\u2019 Aim for precision over wordiness.",
          clarity: "Most of your writing is easy to follow. One area to watch: some sentences contain multiple clauses separated by commas, which can make the meaning ambiguous. If a sentence needs more than two commas, consider breaking it into two sentences.",
          grammar: "Your grammar is generally accurate. Watch for subject-verb agreement in longer sentences, and make sure that pronouns clearly refer to their antecedents. There are two instances where \u2018their\u2019 is used ambiguously (paragraphs 3 and 5) \u2014 re-read these to check the reference is clear.",
          tips: [
            "Read your work aloud before submitting \u2014 if you run out of breath, the sentence is too long.",
            "Replace vague phrases (\u2018a lot of research\u2019, \u2018it is important\u2019) with specific claims (\u2018three longitudinal studies\u2019, \u2018attachment security predicts\u2019).",
            "Use the active voice where possible: \u2018Bowlby argued\u2019 is stronger than \u2018It was argued by Bowlby.\u2019",
            "Proofread specifically for pronoun clarity on your next draft."
          ]
        },

        referencing: {
          overall: "Your referencing is mostly accurate and consistent. You use APA 7th edition style correctly for in-text citations and your reference list is well-formatted. This is an important academic skill that you are developing well.",
          citing: "Your in-text citations are correctly placed and formatted. You consistently use (Author, Year) format and handle multiple authors appropriately. One issue: there are two places in the essay where you make factual claims without a supporting citation (the opening sentence of paragraph 4 and the claim about \u2018most children\u2019 in paragraph 6). Every specific claim needs a reference.",
          referenceList: "Your reference list is well-organised and mostly accurate. One entry (Hazan & Shaver) is missing the journal volume number, and the Rutter et al. entry uses \u2018and\u2019 instead of \u2018&\u2019 before the final author. These are minor issues but worth correcting for precision.",
          tips: [
            "Before submitting, do a final check: read each paragraph and confirm that every factual claim has an in-text citation.",
            "For studies with three or more authors, use \u2018et al.\u2019 from the first citation (APA 7th edition rule).",
            "Include at least five peer-reviewed journal articles per 2000-word essay \u2014 you currently have four, so add one more primary source.",
            "Use PsycINFO or Google Scholar to find recent studies that either support or challenge the classic findings you have cited."
          ]
        },

        actionPlan: [
          "Strengthen your conclusions: practise writing a conclusion that synthesises rather than summarises \u2014 draw the threads together and answer the question.",
          "Tighten your writing: go through each paragraph and shorten any sentence over 30 words.",
          "Add one more peer-reviewed journal article to your next essay to broaden your evidence base."
        ]
      }
    ]
  },

  "james.okafor@university.ac.uk": {
    name: "James Okafor",
    email: "james.okafor@university.ac.uk",
    tutor: "Dr Sarah Mitchell",
    assignments: [
      {
        id: "james-essay-1",
        module: "Research Methods in Psychology",
        title: "Essay 1: Evaluate the contribution of attachment theory to developmental psychology",
        date: "8 December 2025",
        grade: 48,
        band: "Pass",

        structure: {
          overall: "Your essay would benefit from a clearer organisational framework. Currently, ideas are presented in an order that feels more associative than planned \u2014 you move between topics without clear transitions, which makes it difficult for the reader to follow your argument.",
          introduction: "Your introduction provides some context but does not clearly state what position you will take or how the essay will be structured. The reader finishes the introduction unsure of what specific question you are answering. A strong introduction should define key terms, state your central argument, and briefly outline the structure of what follows.",
          conclusion: "Your conclusion is very brief (two sentences) and does not synthesise the arguments you have made. It simply states that \u2018attachment theory is important,\u2019 which is too general. Revisit your evidence, draw it together, and make a clear evaluative statement about how much attachment theory has contributed to developmental psychology.",
          tips: [
            "Before you start writing, create a paragraph plan: list the main point of each paragraph and check they follow a logical order.",
            "Start your introduction with a clear definition, then state your position, then outline the essay structure in one sentence.",
            "Each paragraph should begin with a topic sentence that tells the reader what this paragraph will argue.",
            "Write your conclusion last, after re-reading the essay, so it genuinely synthesises what you have written."
          ]
        },

        understanding: {
          overall: "You show a basic understanding of attachment theory but rely too heavily on textbook summaries rather than engaging with the primary research. Your discussion of Bowlby is accurate at a surface level but lacks the depth needed at this level of study.",
          content: "You mention Bowlby and Ainsworth but do not discuss their work in enough detail. For example, you describe the Strange Situation as \u2018an experiment about attachment\u2019 without explaining the method, the specific attachment styles identified, or the significance of the findings. At university level, you need to engage with the detail of research studies.",
          summarising: "When you do cite studies, you tend to paraphrase in very general terms. Phrases like \u2018research has shown that attachment is important\u2019 do not demonstrate understanding. Instead, describe specifically what the researchers did, what they found, and what the findings mean in the context of your argument.",
          tips: [
            "For each key study, write one sentence on the method, one on the findings, and one on the implications.",
            "Move beyond textbook descriptions \u2014 read at least two original journal articles and cite them directly.",
            "When you write \u2018research shows,\u2019 always ask yourself: which research? Name the researchers and the year.",
            "Focus on three or four studies in depth rather than mentioning many studies superficially."
          ]
        },

        argument: {
          overall: "Your essay currently reads more as a description of attachment theory than an evaluation of it. The essay question asks you to evaluate the contribution, which means you need to weigh up strengths and weaknesses, not just describe what the theory says.",
          framing: "You do not explicitly state a position in the essay. A strong evaluative essay would open with a claim (e.g., \u2018Attachment theory has made a significant but not uncontested contribution to developmental psychology\u2019) and then use evidence to support and challenge that claim throughout. At the moment, each paragraph presents information without connecting it to a central argument.",
          tips: [
            "Rewrite your introduction to include a clear evaluative statement that answers the question directly.",
            "After each piece of evidence, add a sentence explaining whether it supports or challenges the value of attachment theory.",
            "Try the \u2018Point, Evidence, Explain\u2019 structure: state your point, provide the evidence, then explain what it means for your argument.",
            "Include at least one counter-argument (e.g., cross-cultural criticisms of attachment theory) and explain how it affects your evaluation."
          ]
        },

        writing: {
          overall: "Your writing is generally understandable but uses informal language in several places that is not appropriate for academic writing.",
          conciseness: "Some sections contain unnecessary repetition. For example, you make the same point about attachment being \u2018important for development\u2019 in three separate paragraphs without adding new information each time. Make each sentence count.",
          clarity: "Your main ideas are usually clear, but some sentences are ambiguous because they lack specificity. \u2018This shows that attachment matters\u2019 could mean many things \u2014 state precisely what the evidence shows and why it matters.",
          grammar: "Watch for informal expressions: \u2018a lot of,\u2019 \u2018basically,\u2019 \u2018kids\u2019 (use \u2018children\u2019), and \u2018really important\u2019 (use \u2018significant\u2019 or \u2018critical\u2019). Academic writing requires a formal, precise register. There are also several run-on sentences that need to be split.",
          tips: [
            "Replace every instance of informal language with a formal alternative before submitting.",
            "Read each paragraph and check: does every sentence add something new? If not, remove the repetition.",
            "Keep sentences under 25 words where possible \u2014 shorter sentences are usually clearer.",
            "Use the university\u2019s Academic Skills Centre \u2014 they offer excellent workshops on academic writing style."
          ]
        },

        referencing: {
          overall: "Your referencing needs significant improvement. There are multiple places where claims are unsupported by citations, and the reference list contains formatting errors.",
          citing: "Several paragraphs make claims about research findings without citing the source. For example, you write \u2018Studies have shown that securely attached children do better in school\u2019 without naming the study. This weakens your argument and risks academic integrity concerns. Every factual claim needs a citation.",
          referenceList: "Your reference list has four entries but your essay mentions at least six sources by name. Every source cited in the text must appear in the reference list, and vice versa. Additionally, two entries are missing publication years and one is formatted incorrectly (wrong use of italics).",
          tips: [
            "As a rule: if you did not discover a fact through your own experience, it needs a reference.",
            "Use a reference manager (such as Zotero or Mendeley) to help format citations correctly.",
            "Cross-check your reference list against your in-text citations before submitting \u2014 they must match exactly.",
            "Aim for a minimum of five peer-reviewed sources per 2000-word essay."
          ]
        },

        actionPlan: [
          "Create a paragraph plan before writing your next essay \u2014 list the main argument for each paragraph and check the logical order.",
          "Read two original journal articles on your next essay topic and cite them directly (not via the textbook).",
          "Before submitting, cross-check every factual claim has a citation and every citation appears in the reference list."
        ]
      }
    ]
  }
};

// ============================================================
// SECTION CONFIG
// ============================================================

const SECTIONS = [
  {
    key: "structure", title: "Structure", icon: "\ud83c\udfd7\ufe0f",
    cssClass: "sec-structure", skillPage: "skills/structure.html",
    subsections: [
      { key: "overall", title: "Overview" },
      { key: "introduction", title: "Introduction" },
      { key: "conclusion", title: "Conclusion" }
    ]
  },
  {
    key: "understanding", title: "Understanding", icon: "\ud83d\udca1",
    cssClass: "sec-understanding", skillPage: "skills/understanding.html",
    subsections: [
      { key: "overall", title: "Overview" },
      { key: "content", title: "Content Selection" },
      { key: "summarising", title: "Summarising Research" }
    ]
  },
  {
    key: "argument", title: "Argument", icon: "\ud83c\udfaf",
    cssClass: "sec-argument", skillPage: "skills/argument.html",
    subsections: [
      { key: "overall", title: "Overview" },
      { key: "framing", title: "Framing Your Argument" }
    ]
  },
  {
    key: "writing", title: "Academic Writing Skills", icon: "\u270d\ufe0f",
    cssClass: "sec-writing", skillPage: "skills/writing.html",
    subsections: [
      { key: "overall", title: "Overview" },
      { key: "conciseness", title: "Conciseness" },
      { key: "clarity", title: "Clarity" },
      { key: "grammar", title: "Grammar & Punctuation" }
    ]
  },
  {
    key: "referencing", title: "Referencing", icon: "\ud83d\udcda",
    cssClass: "sec-referencing", skillPage: "skills/referencing.html",
    subsections: [
      { key: "overall", title: "Overview" },
      { key: "citing", title: "In-Text Citations" },
      { key: "referenceList", title: "Reference List" }
    ]
  }
];

// ============================================================
// STATE
// ============================================================

var currentStudent = null;
var currentView = "login"; // login | list | detail
var currentAssignmentId = null;

// ============================================================
// DOM
// ============================================================

var dom = {
  loginPage: document.getElementById("loginPage"),
  appPage: document.getElementById("appPage"),
  appContent: document.getElementById("appContent"),
  loginEmail: document.getElementById("loginEmail"),
  btnLogin: document.getElementById("btnLogin"),
  btnLogout: document.getElementById("btnLogout"),
  navHome: document.getElementById("navHome"),
  navUser: document.getElementById("navUser")
};

// ============================================================
// HELPERS
// ============================================================

function escapeHtml(text) {
  var d = document.createElement("div");
  d.textContent = text;
  return d.innerHTML;
}

function gradeClass(band) {
  return "grade-" + band.toLowerCase();
}

function welcomeGradeClass(band) {
  return band.toLowerCase();
}

// Action plan localStorage
function getActionKey(assignmentId) {
  return "feedback-actions-" + assignmentId;
}

function loadChecked(assignmentId) {
  try {
    var data = localStorage.getItem(getActionKey(assignmentId));
    return data ? JSON.parse(data) : {};
  } catch (e) {
    return {};
  }
}

function saveChecked(assignmentId, checked) {
  try {
    localStorage.setItem(getActionKey(assignmentId), JSON.stringify(checked));
  } catch (e) { /* ignore */ }
}

// ============================================================
// RENDER: ASSIGNMENTS LIST
// ============================================================

function renderList() {
  var student = currentStudent;
  var assignments = student.assignments;
  var html = "";

  // Header
  html += '<div class="list-header">';
  html += '<h1>Welcome back, ' + escapeHtml(student.name) + '</h1>';
  html += '<p>Your marked assignments are below. Click any assignment to view your detailed feedback.</p>';
  html += '</div>';

  // Cross-assignment progress (if 2+ assignments)
  if (assignments.length >= 2) {
    var latest = assignments[0];
    if (latest.progress && latest.progress.length > 0) {
      html += '<div class="progress-summary">';
      html += '<div class="progress-summary-title">\ud83d\udcc8 Your Progress Since ' + escapeHtml(assignments[1].title.split(":")[0]) + '</div>';
      html += '<div class="progress-items">';
      latest.progress.forEach(function(p) {
        html += '<div class="progress-item"><span class="progress-arrow">\u2191</span>' + escapeHtml(p) + '</div>';
      });
      html += '</div></div>';
    }
  }

  // Assignment cards
  assignments.forEach(function(a) {
    html += '<div class="assignment-card" data-assignment="' + a.id + '">';
    html += '<div class="assignment-card-inner">';
    html += '<div class="assignment-info">';
    html += '<div class="assignment-module">' + escapeHtml(a.module) + '</div>';
    html += '<div class="assignment-title">' + escapeHtml(a.title) + '</div>';
    html += '<div class="assignment-meta">' + escapeHtml(a.date) + ' \u00b7 ' + escapeHtml(student.tutor) + '</div>';
    html += '</div>';
    html += '<div class="assignment-right">';
    html += '<div class="grade-badge ' + gradeClass(a.band) + '">';
    html += '<span class="grade-pct">' + a.grade + '%</span>';
    html += '<span class="grade-label">' + escapeHtml(a.band) + '</span>';
    html += '</div>';
    html += '<span class="assignment-arrow">\u203a</span>';
    html += '</div>';
    html += '</div></div>';
  });

  dom.appContent.innerHTML = html;

  // Click handlers for cards
  var cards = dom.appContent.querySelectorAll(".assignment-card");
  cards.forEach(function(card) {
    card.addEventListener("click", function() {
      showDetail(card.dataset.assignment);
    });
  });
}

// ============================================================
// RENDER: FEEDBACK DETAIL
// ============================================================

function renderDetail(assignmentId) {
  var student = currentStudent;
  var assignment = null;
  for (var i = 0; i < student.assignments.length; i++) {
    if (student.assignments[i].id === assignmentId) {
      assignment = student.assignments[i];
      break;
    }
  }
  if (!assignment) return;

  var html = "";

  // Back button
  html += '<button class="back-btn" id="btnBack">\u2190 Back to My Assignments</button>';

  // Print bar
  html += '<div class="print-bar">';
  html += '<button class="btn-print" onclick="window.print()">\ud83d\udda8\ufe0f Print / Save PDF</button>';
  html += '</div>';

  // Welcome panel
  html += '<div class="welcome-panel">';
  html += '<div class="welcome-name">' + escapeHtml(student.name) + '</div>';
  html += '<div class="welcome-meta">';
  html += '<span>' + escapeHtml(assignment.module) + '</span>';
  html += '<span>' + escapeHtml(assignment.title) + '</span>';
  html += '</div>';
  html += '<div class="welcome-grade-row">';
  html += '<span class="welcome-grade-badge">' + assignment.grade + '% \u2014 ' + escapeHtml(assignment.band) + '</span>';
  html += '<span class="welcome-date">' + escapeHtml(assignment.date) + '</span>';
  html += '</div>';
  html += '</div>';

  // Intro (PEEL panel style)
  html += '<div class="intro-panel">';
  html += '<div class="panel-hdr">About This Feedback</div>';
  html += '<div class="panel-body">We have assessed your essay and here is feedback on your current performance and how you can improve on future assignments. Each section below covers a different aspect of your work. Please read each comment carefully and use the tips to guide your development.</div>';
  html += '</div>';

  // Feedback sections
  SECTIONS.forEach(function(section) {
    var data = assignment[section.key];
    if (!data) return;

    html += '<div class="fb-section ' + section.cssClass + '">';
    html += '<div class="fb-section-hdr">' + section.icon + ' ' + escapeHtml(section.title) + '</div>';
    html += '<div class="fb-section-body">';

    section.subsections.forEach(function(sub, i) {
      if (!data[sub.key]) return;
      if (i > 0) html += '<hr class="fb-divider">';
      html += '<div class="fb-subsection">';
      if (sub.key !== "overall") {
        html += '<div class="fb-subsection-title">' + escapeHtml(sub.title) + '</div>';
      }
      html += '<div class="fb-text">' + escapeHtml(data[sub.key]) + '</div>';
      html += '</div>';
    });

    if (data.tips && data.tips.length > 0) {
      html += '<div class="tips-box">';
      html += '<div class="tips-box-title">\u2728 Tips for Improving</div>';
      html += '<ul>';
      data.tips.forEach(function(tip) {
        html += '<li>' + escapeHtml(tip) + '</li>';
      });
      html += '</ul>';
      html += '</div>';
    }

    if (section.skillPage) {
      html += '<div class="skill-link-wrapper">';
      html += '<a href="' + section.skillPage + '" class="skill-link" target="_blank">';
      html += '\ud83d\udcdd Practise this skill: definitions, examples & exercises';
      html += '</a>';
      html += '</div>';
    }

    html += '</div></div>';
  });

  // Action plan
  if (assignment.actionPlan && assignment.actionPlan.length > 0) {
    var checked = loadChecked(assignmentId);
    var doneCount = 0;
    assignment.actionPlan.forEach(function(_, idx) { if (checked[idx]) doneCount++; });
    var pct = Math.round((doneCount / assignment.actionPlan.length) * 100);

    html += '<div class="action-plan">';
    html += '<div class="action-plan-hdr">\ud83c\udfaf Your Action Plan</div>';
    html += '<div class="action-plan-body">';
    html += '<div class="action-plan-intro">Based on your feedback, here are your priority actions for your next assignment. Tick them off as you work through them.</div>';

    assignment.actionPlan.forEach(function(item, idx) {
      var isChecked = checked[idx] ? true : false;
      html += '<div class="action-item">';
      html += '<input type="checkbox" id="action-' + idx + '" data-idx="' + idx + '"' + (isChecked ? ' checked' : '') + '>';
      html += '<label for="action-' + idx + '"' + (isChecked ? ' class="checked"' : '') + '>' + escapeHtml(item) + '</label>';
      html += '</div>';
    });

    html += '<div class="action-plan-progress">' + doneCount + ' of ' + assignment.actionPlan.length + ' completed';
    html += '<div class="progress-bar-bg"><div class="progress-bar-fill" style="width:' + pct + '%"></div></div>';
    html += '</div>';
    html += '</div></div>';
  }

  dom.appContent.innerHTML = html;

  // Back button handler
  document.getElementById("btnBack").addEventListener("click", function() {
    showList();
  });

  // Action plan checkbox handlers
  var checkboxes = dom.appContent.querySelectorAll('.action-item input[type="checkbox"]');
  checkboxes.forEach(function(cb) {
    cb.addEventListener("change", function() {
      var idx = parseInt(cb.dataset.idx);
      var checked = loadChecked(assignmentId);
      checked[idx] = cb.checked;
      saveChecked(assignmentId, checked);

      // Update label style
      var label = cb.nextElementSibling;
      if (cb.checked) {
        label.classList.add("checked");
      } else {
        label.classList.remove("checked");
      }

      // Update progress bar
      var total = assignment.actionPlan.length;
      var done = 0;
      var allCb = dom.appContent.querySelectorAll('.action-item input[type="checkbox"]');
      allCb.forEach(function(c) { if (c.checked) done++; });
      var newPct = Math.round((done / total) * 100);
      var progressText = dom.appContent.querySelector('.action-plan-progress');
      if (progressText) {
        progressText.innerHTML = done + ' of ' + total + ' completed<div class="progress-bar-bg"><div class="progress-bar-fill" style="width:' + newPct + '%"></div></div>';
      }
    });
  });

  window.scrollTo(0, 0);
}

// ============================================================
// VIEW MANAGEMENT
// ============================================================

function showLogin() {
  currentView = "login";
  currentStudent = null;
  currentAssignmentId = null;
  dom.appPage.style.display = "none";
  dom.loginPage.style.display = "flex";
  dom.appContent.innerHTML = "";
  window.scrollTo(0, 0);
}

function showList() {
  currentView = "list";
  currentAssignmentId = null;
  dom.loginPage.style.display = "none";
  dom.appPage.style.display = "block";
  dom.navUser.textContent = currentStudent.name;
  renderList();
  window.scrollTo(0, 0);
}

function showDetail(assignmentId) {
  currentView = "detail";
  currentAssignmentId = assignmentId;
  renderDetail(assignmentId);
}

// ============================================================
// LOGIN / LOGOUT
// ============================================================

function login() {
  var email = dom.loginEmail.value.trim().toLowerCase();
  var student = STUDENTS[email];

  if (!student) {
    alert("Student not found. Try: mei.chen@university.ac.uk or james.okafor@university.ac.uk");
    return;
  }

  currentStudent = student;
  showList();
}

function logout() {
  showLogin();
}

// ============================================================
// POPULATE INTRO DROPDOWNS (not needed here but keep for compat)
// ============================================================

// ============================================================
// EVENTS
// ============================================================

dom.btnLogin.addEventListener("click", login);
dom.btnLogout.addEventListener("click", logout);
dom.navHome.addEventListener("click", function() {
  if (currentStudent) showList();
});

dom.loginEmail.addEventListener("keydown", function(e) {
  if (e.key === "Enter") login();
});
document.getElementById("loginPassword").addEventListener("keydown", function(e) {
  if (e.key === "Enter") login();
});
