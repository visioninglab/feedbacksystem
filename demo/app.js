// ============================================================
// SAMPLE DATA
// ============================================================

const STUDENTS = {
  "mei.chen@university.ac.uk": {
    name: "Mei Chen",
    email: "mei.chen@university.ac.uk",
    module: "Introduction to Psychology",
    assessment: "Essay 1: Discuss the role of early attachment in emotional development",
    tutor: "Dr Sarah Mitchell",
    date: "14 February 2026",

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
    }
  },

  "james.okafor@university.ac.uk": {
    name: "James Okafor",
    email: "james.okafor@university.ac.uk",
    module: "Research Methods in Psychology",
    assessment: "Essay 1: Evaluate the contribution of attachment theory to developmental psychology",
    tutor: "Dr Sarah Mitchell",
    date: "14 February 2026",

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
    }
  }
};

// ============================================================
// SECTION CONFIG
// ============================================================

const SECTIONS = [
  {
    key: "structure",
    title: "Structure",
    icon: "\ud83c\udfd7\ufe0f",
    cssClass: "section-structure",
    skillPage: "skills/structure.html",
    subsections: [
      { key: "overall", title: "Overview" },
      { key: "introduction", title: "Introduction" },
      { key: "conclusion", title: "Conclusion" }
    ]
  },
  {
    key: "understanding",
    title: "Understanding",
    icon: "\ud83d\udca1",
    cssClass: "section-understanding",
    skillPage: "skills/understanding.html",
    subsections: [
      { key: "overall", title: "Overview" },
      { key: "content", title: "Content Selection" },
      { key: "summarising", title: "Summarising Research" }
    ]
  },
  {
    key: "argument",
    title: "Argument",
    icon: "\ud83c\udfaf",
    cssClass: "section-argument",
    skillPage: "skills/argument.html",
    subsections: [
      { key: "overall", title: "Overview" },
      { key: "framing", title: "Framing Your Argument" }
    ]
  },
  {
    key: "writing",
    title: "Academic Writing Skills",
    icon: "\u270d\ufe0f",
    cssClass: "section-writing",
    skillPage: "skills/writing.html",
    subsections: [
      { key: "overall", title: "Overview" },
      { key: "conciseness", title: "Conciseness" },
      { key: "clarity", title: "Clarity" },
      { key: "grammar", title: "Grammar & Punctuation" }
    ]
  },
  {
    key: "referencing",
    title: "Referencing",
    icon: "\ud83d\udcda",
    cssClass: "section-referencing",
    skillPage: "skills/referencing.html",
    subsections: [
      { key: "overall", title: "Overview" },
      { key: "citing", title: "In-Text Citations" },
      { key: "referenceList", title: "Reference List" }
    ]
  }
];

// ============================================================
// DOM
// ============================================================

const dom = {
  loginPage: document.getElementById("loginPage"),
  feedbackPage: document.getElementById("feedbackPage"),
  loginEmail: document.getElementById("loginEmail"),
  btnLogin: document.getElementById("btnLogin"),
  btnLogout: document.getElementById("btnLogout"),
  navUser: document.getElementById("navUser"),
  feedbackContent: document.getElementById("feedbackContent")
};

// ============================================================
// HELPERS
// ============================================================

function escapeHtml(text) {
  const d = document.createElement("div");
  d.textContent = text;
  return d.innerHTML;
}

// ============================================================
// RENDER FEEDBACK PAGE
// ============================================================

function renderFeedback(student) {
  let html = "";

  // Welcome banner
  html += '<div class="welcome-banner">';
  html += '<div class="welcome-name">Welcome, ' + escapeHtml(student.name) + '</div>';
  html += '<div class="welcome-meta">';
  html += '<span>' + escapeHtml(student.module) + '</span>';
  html += '<span>' + escapeHtml(student.assessment) + '</span>';
  html += '</div>';
  html += '</div>';

  // Intro
  html += '<div class="intro-block">';
  html += 'We have assessed your essay and here is feedback on your current performance and how you can improve on future assignments. Each section below covers a different aspect of your work. Please read each comment carefully and use the tips to guide your development.';
  html += '</div>';

  // Sections
  SECTIONS.forEach(section => {
    const data = student[section.key];
    if (!data) return;

    html += '<div class="fb-section ' + section.cssClass + '">';

    // Header
    html += '<div class="fb-section-header">';
    html += '<div class="fb-section-icon">' + section.icon + '</div>';
    html += '<div class="fb-section-title">' + escapeHtml(section.title) + '</div>';
    html += '</div>';

    // Body
    html += '<div class="fb-section-body">';

    // Subsections
    section.subsections.forEach((sub, i) => {
      if (!data[sub.key]) return;
      if (i > 0) html += '<hr class="fb-divider">';
      html += '<div class="fb-subsection">';
      if (sub.key !== "overall") {
        html += '<div class="fb-subsection-title">' + escapeHtml(sub.title) + '</div>';
      }
      html += '<div class="fb-text">' + escapeHtml(data[sub.key]) + '</div>';
      html += '</div>';
    });

    // Tips
    if (data.tips && data.tips.length > 0) {
      html += '<div class="tips-box">';
      html += '<div class="tips-box-title">\u2728 Tips for Improving</div>';
      html += '<ul>';
      data.tips.forEach(tip => {
        html += '<li>' + escapeHtml(tip) + '</li>';
      });
      html += '</ul>';
      if (section.skillPage) {
        html += '<a href="' + section.skillPage + '" class="skill-link" target="_blank">Learn this skill: examples, explanations & practice \u2192</a>';
      }
      html += '</div>';
    }

    html += '</div>'; // section-body
    html += '</div>'; // fb-section
  });

  dom.feedbackContent.innerHTML = html;
}

// ============================================================
// LOGIN / LOGOUT
// ============================================================

function login() {
  const email = dom.loginEmail.value.trim().toLowerCase();
  const student = STUDENTS[email];

  if (!student) {
    alert("Student not found. Try: mei.chen@university.ac.uk");
    return;
  }

  dom.loginPage.style.display = "none";
  dom.feedbackPage.style.display = "block";
  dom.navUser.textContent = student.name;

  renderFeedback(student);

  window.scrollTo(0, 0);
}

function logout() {
  dom.feedbackPage.style.display = "none";
  dom.loginPage.style.display = "flex";
  dom.feedbackContent.innerHTML = "";
  window.scrollTo(0, 0);
}

// ============================================================
// EVENTS
// ============================================================

dom.btnLogin.addEventListener("click", login);
dom.btnLogout.addEventListener("click", logout);

dom.loginEmail.addEventListener("keydown", function(e) {
  if (e.key === "Enter") login();
});

document.getElementById("loginPassword").addEventListener("keydown", function(e) {
  if (e.key === "Enter") login();
});
