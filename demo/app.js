// ============================================================
// SAMPLE DATA — Aisha Patel, averaging a Lower Second (2:2)
// ============================================================

const STUDENTS = {
  "aisha.patel@university.ac.uk": {
    name: "Aisha Patel",
    initials: "AP",
    email: "aisha.patel@university.ac.uk",
    tutor: "Dr Sarah Mitchell",
    module: "Introduction to Psychology",
    assignments: [
      {
        id: "aisha-essay-2",
        module: "Introduction to Psychology",
        title: "Critically evaluate the claim that memory is a reconstructive process",
        shortTitle: "Essay 2",
        date: "10 February 2026",
        markedAgo: "Marked 12 days ago",
        grade: 58,
        band: "Lower Second",
        bandClass: "lower",

        // Skill scores (0–100) for the radar
        skillScores: { structure: 58, understanding: 60, argument: 52, writing: 58, referencing: 64 },

        progress: [
          "Your essay structure has improved \u2014 paragraphs now follow a clearer order than in Essay 1.",
          "Your referencing is much more consistent: APA formatting is mostly accurate throughout.",
          "You\u2019re beginning to evaluate evidence rather than just describe it, particularly in the section on Loftus and Palmer."
        ],

        structure: {
          overall: "Your essay is better organised than your previous one. The introduction sets out the question and the body paragraphs each address a distinct point. The flow between paragraphs is still uneven in places \u2014 some transitions feel abrupt, and your conclusion needs more work to genuinely synthesise your argument.",
          introduction: "Your introduction defines reconstructive memory and names the key theorists you intend to discuss. This is a clear improvement on Essay 1. To push further, try ending the introduction with a one-sentence statement of the position you will defend.",
          conclusion: "Your conclusion summarises the main points but does not yet draw them together into a clear answer. It still reads as a recap rather than a judgement. A 2:1 conclusion would weigh the evidence and state, in your own words, where you think the balance lies.",
          tips: [
            "End your introduction with a sentence that says 'I will argue that...' \u2014 this gives the reader (and you) a clear thread to follow.",
            "Treat the conclusion as the answer to the essay question, not a summary of what you wrote.",
            "Use linking phrases between paragraphs ('Building on this...', 'However, this view is challenged by...') to make the structure visible to the reader."
          ]
        },

        understanding: {
          overall: "You show a fair grasp of the key studies. Your discussion of Bartlett and Loftus is broadly accurate, but you still rely heavily on textbook descriptions rather than engaging directly with the primary sources. To move into 2:1 territory, you need more depth on the studies you cite.",
          content: "You include the expected core studies (Bartlett, Loftus and Palmer) and you mention Conway in passing. This is a reasonable foundation, but the essay would benefit from at least one more recent source and from spending longer on the implications of each study rather than the description.",
          summarising: "Your summaries describe what each study did but spend little time on what the findings mean for your argument. For example, your paragraph on Loftus and Palmer explains the method clearly but only briefly mentions ecological validity. This is the kind of analysis examiners reward.",
          tips: [
            "For each study, write one sentence on the method and two on the implications \u2014 not the other way round.",
            "Try to read at least one primary journal article per essay rather than relying on textbook summaries.",
            "Ask yourself: 'What does this study tell us that we wouldn\u2019t know without it?' That answer is what belongs in your essay."
          ]
        },

        argument: {
          overall: "Your essay now has more of an argumentative voice than Essay 1, which is genuine progress. You take a position \u2014 that memory is largely reconstructive \u2014 and return to it at points. However, several paragraphs still drift into description, and you rarely acknowledge counter-evidence. This is the area that will most lift your grade if you focus on it.",
          framing: "Your strongest paragraph is the one on Loftus and Palmer, where you present evidence and then evaluate it. Your weakest is the section on flashbulb memory, which presents two studies without explaining what they tell us about your central claim. Aim for the Loftus paragraph\u2019s structure throughout: claim, evidence, evaluation.",
          tips: [
            "Open every paragraph with a claim, not a description ('This evidence supports the view that...' rather than 'Loftus did a study where...').",
            "After each piece of evidence, ask: 'so what?' Write a sentence that links it back to your central argument.",
            "Include at least one counter-argument and explain why your position still holds \u2014 examiners reward this even when the counter-argument is brief."
          ]
        },

        writing: {
          overall: "Your writing is clearer than in Essay 1. You\u2019ve cut down on the wordiness and the academic tone is mostly consistent. There are still a few habits to watch \u2014 over-use of certain words, and a tendency toward long sentences that could be split.",
          conciseness: "You\u2019ve made good progress here. Most sentences are now an appropriate length, and the unnecessary throat-clearing phrases ('It is widely believed that...') from Essay 1 are mostly gone.",
          clarity: "You use the word 'shows' nine times and 'suggests' seven times. Vary your reporting verbs \u2014 'demonstrates', 'indicates', 'argues', 'finds', 'concludes' \u2014 to keep the reader engaged and to be more precise about what each study actually does.",
          grammar: "Grammar is mostly accurate. Watch for two issues: comma splices (joining two complete sentences with a comma) and pronoun ambiguity (using 'this' or 'they' without making clear what you\u2019re referring to).",
          tips: [
            "Make a list of six reporting verbs and try to use each at least once in your next essay.",
            "Read your work aloud before submitting \u2014 if you run out of breath, the sentence is too long.",
            "When you write 'this' or 'these', check that the noun it refers to is unambiguous."
          ]
        },

        referencing: {
          overall: "Your referencing has improved noticeably. APA formatting is mostly accurate and your reference list matches your in-text citations. There are still a couple of unsupported claims and a few formatting slips to tidy up.",
          citing: "Most of your factual claims are now supported by citations. Two exceptions: the opening sentence of paragraph 3 and the claim about 'most psychologists' in paragraph 5. Every specific claim needs a reference.",
          referenceList: "Your reference list has six entries and is mostly well-formatted. The Loftus & Palmer entry is missing the journal volume number, and one author\u2019s initials appear without the full stop. Small things, but worth checking before submission.",
          tips: [
            "Before submitting, do a final pass: read each paragraph and check every claim has a citation.",
            "Use a reference manager (Zotero is free) to handle formatting automatically.",
            "Aim for at least one peer-reviewed journal article per 400 words \u2014 this would put you at six or seven sources for a 2,500-word essay."
          ]
        },

        actionPlan: [
          "Strengthen your conclusions: practise writing a conclusion that answers the question rather than summarising the essay.",
          "Open every paragraph with an argumentative claim, not a description.",
          "Build a list of six reporting verbs to use in place of 'shows' and 'suggests'.",
          "Read at least one primary journal article (not a textbook chapter) for your next essay topic."
        ]
      },
      {
        id: "aisha-essay-1",
        module: "Introduction to Psychology",
        title: "Discuss the role of early attachment in emotional development",
        shortTitle: "Essay 1",
        date: "8 December 2025",
        markedAgo: "Marked 18 December",
        grade: 52,
        band: "Lower Second",
        bandClass: "lower",

        skillScores: { structure: 48, understanding: 55, argument: 45, writing: 52, referencing: 58 },

        structure: {
          overall: "Your essay has the bones of a clear structure but the order of ideas is hard to follow in places. Some paragraphs cover too much ground and others repeat earlier points. A clearer paragraph plan before writing would help.",
          introduction: "Your introduction names the key theorists but doesn\u2019t state what position you intend to argue. The reader finishes the introduction unsure of what the essay will conclude.",
          conclusion: "Your conclusion is brief and doesn\u2019t draw the evidence together. It states that 'attachment is important for development', which is too general. A stronger conclusion would say what kind of effect, on which aspects of development, and with what limitations.",
          tips: [
            "Plan your essay on paper before writing: one line per paragraph stating the main point.",
            "End your introduction with a sentence stating your position.",
            "Write your conclusion last, after re-reading the whole essay, so it actually responds to what you wrote."
          ]
        },

        understanding: {
          overall: "You show a basic understanding of attachment theory. Your discussion of Bowlby and Ainsworth is accurate but stays at the level of textbook summary. At university level we expect more engagement with the detail of individual studies.",
          content: "You mention the right theorists (Bowlby, Ainsworth) but the essay would be stronger with more specific detail \u2014 what the Strange Situation actually involved, what the attachment categories were, what proportion of children fell into each.",
          summarising: "Several of your study summaries are too vague. 'Research has shown that attachment matters' doesn\u2019t demonstrate understanding \u2014 which research, what did it show, and how do we know? Be specific.",
          tips: [
            "For each study, write one sentence on the method, one on the findings, and one on the implications.",
            "When you write 'research shows', stop and name the researchers and the year.",
            "Pick three or four studies to discuss in depth rather than mentioning many superficially."
          ]
        },

        argument: {
          overall: "Your essay reads more as a description of attachment theory than an evaluation of it. The question asks you to discuss the role of attachment in emotional development \u2014 you need to take a position on how much it matters and weigh the evidence.",
          framing: "You don\u2019t state a clear position anywhere in the essay. Each paragraph presents information but does not link it to a central claim. This is the most important thing to fix for your next essay.",
          tips: [
            "Decide what you think the answer to the question is, then write your introduction around that position.",
            "Every paragraph should advance your argument, not just present information.",
            "After each piece of evidence, write one sentence explaining how it supports or challenges your position."
          ]
        },

        writing: {
          overall: "Your writing is generally readable but uses informal phrasing in places that isn\u2019t appropriate for academic work. Several sentences are longer than they need to be.",
          conciseness: "Phrases like 'It is the case that' and 'It is widely believed that' add words without adding meaning. Cut them out.",
          clarity: "Some of your sentences are ambiguous because they lack a clear subject. 'This shows it matters' \u2014 what shows, and what matters? Be specific.",
          grammar: "Watch for informal language: 'kids' (use 'children'), 'a lot of' (use 'many' or a number), 'really important' (use 'significant' or 'critical').",
          tips: [
            "Read each paragraph aloud and cut anything that doesn\u2019t add new information.",
            "Replace vague words with specific ones.",
            "Aim to keep most sentences under 25 words."
          ]
        },

        referencing: {
          overall: "Your referencing needs work. Several factual claims are unsupported, and the reference list has formatting errors. This is a fixable problem and should be your top priority for next time.",
          citing: "Multiple paragraphs make claims about research without citing the source. For example, 'studies have shown that securely attached children do better at school' is presented without naming a single study.",
          referenceList: "Your reference list has four entries but your essay names six sources. Every source mentioned in the text must appear in the reference list. Two entries are missing publication years.",
          tips: [
            "Rule of thumb: if you didn\u2019t learn it from your own experience, it needs a reference.",
            "Before submitting, cross-check every in-text citation against your reference list.",
            "Use a reference manager (Zotero, Mendeley) to handle formatting."
          ]
        },

        actionPlan: [
          "Plan your next essay on paper before writing: one line per paragraph.",
          "State your position in the introduction, not just the topic.",
          "Cross-check every claim in your essay against your reference list before submitting.",
          "Read at least two original journal articles on your essay topic, not just the textbook."
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
    key: "structure", title: "Structure", cssClass: "sec-structure",
    skillPage: "skills/structure.html",
    subsections: [
      { key: "overall", title: "Overview" },
      { key: "introduction", title: "Introduction" },
      { key: "conclusion", title: "Conclusion" }
    ]
  },
  {
    key: "understanding", title: "Understanding", cssClass: "sec-understanding",
    skillPage: "skills/understanding.html",
    subsections: [
      { key: "overall", title: "Overview" },
      { key: "content", title: "Content Selection" },
      { key: "summarising", title: "Summarising Research" }
    ]
  },
  {
    key: "argument", title: "Argument", cssClass: "sec-argument",
    skillPage: "skills/argument.html",
    subsections: [
      { key: "overall", title: "Overview" },
      { key: "framing", title: "Framing Your Argument" }
    ]
  },
  {
    key: "writing", title: "Academic Writing", cssClass: "sec-writing",
    skillPage: "skills/writing.html",
    subsections: [
      { key: "overall", title: "Overview" },
      { key: "conciseness", title: "Conciseness" },
      { key: "clarity", title: "Clarity" },
      { key: "grammar", title: "Grammar & Punctuation" }
    ]
  },
  {
    key: "referencing", title: "Referencing", cssClass: "sec-referencing",
    skillPage: "skills/referencing.html",
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
var currentView = "list";
var currentAssignmentId = null;

var dom = {
  appContent: document.getElementById("appContent"),
  navHome: document.getElementById("navHome"),
  navMyWork: document.getElementById("navMyWork"),
  navAvatar: document.getElementById("navAvatar")
};

// ============================================================
// HELPERS
// ============================================================

function escapeHtml(text) {
  var d = document.createElement("div");
  d.textContent = text;
  return d.innerHTML;
}

function getActionKey(id) { return "feedback-actions-" + id; }
function loadChecked(id) {
  try { var d = localStorage.getItem(getActionKey(id)); return d ? JSON.parse(d) : {}; }
  catch (e) { return {}; }
}
function saveChecked(id, c) {
  try { localStorage.setItem(getActionKey(id), JSON.stringify(c)); } catch (e) {}
}

// ============================================================
// RADAR CHART (5-axis SVG)
// ============================================================

function radarPoints(scores, radius) {
  // Order: structure(top), understanding(top-right), argument(bottom-right),
  //        writing(bottom-left), referencing(top-left)
  var keys = ["structure", "understanding", "argument", "writing", "referencing"];
  var cx = 90, cy = 90;
  var pts = [];
  for (var i = 0; i < 5; i++) {
    var angle = -Math.PI / 2 + i * (2 * Math.PI / 5);
    var r = (scores[keys[i]] / 100) * radius;
    var x = cx + r * Math.cos(angle);
    var y = cy + r * Math.sin(angle);
    pts.push(x.toFixed(1) + "," + y.toFixed(1));
  }
  return pts.join(" ");
}

function renderRadar(currentScores, previousScores) {
  var maxR = 70;
  var grid = [1.0, 0.75, 0.5, 0.25].map(function(f) {
    var pts = radarPoints({ structure: f * 100, understanding: f * 100, argument: f * 100, writing: f * 100, referencing: f * 100 }, maxR);
    return '<polygon points="' + pts + '"/>';
  }).join("");

  var axes = [];
  for (var i = 0; i < 5; i++) {
    var angle = -Math.PI / 2 + i * (2 * Math.PI / 5);
    var x = 90 + maxR * Math.cos(angle);
    var y = 90 + maxR * Math.sin(angle);
    axes.push('<line x1="90" y1="90" x2="' + x.toFixed(1) + '" y2="' + y.toFixed(1) + '"/>');
  }

  var prev = previousScores ? '<polygon points="' + radarPoints(previousScores, maxR) + '" fill="#d4a574" fill-opacity="0.18" stroke="#d4a574" stroke-width="1.5" stroke-linejoin="round"/>' : '';
  var curr = '<polygon points="' + radarPoints(currentScores, maxR) + '" fill="#7a9b76" fill-opacity="0.28" stroke="#7a9b76" stroke-width="2" stroke-linejoin="round"/>';

  return '<svg class="radar-svg" width="180" height="180" viewBox="0 0 180 180" aria-label="Skill radar chart">' +
    '<g fill="none" stroke="#e8e2d4" stroke-width="1">' + grid + '</g>' +
    '<g stroke="#e8e2d4" stroke-width="1">' + axes.join("") + '</g>' +
    prev + curr +
    '<g font-family="Inter, sans-serif" font-size="9" fill="#8a8a9a" font-weight="600">' +
    '<text x="90" y="13" text-anchor="middle">STRUCTURE</text>' +
    '<text x="166" y="56" text-anchor="start">UNDERST.</text>' +
    '<text x="148" y="150" text-anchor="middle">ARGUMENT</text>' +
    '<text x="32" y="150" text-anchor="middle">WRITING</text>' +
    '<text x="14" y="56" text-anchor="end">REFS</text>' +
    '</g>' +
    '</svg>';
}

// ============================================================
// RENDER: LIST (HOME)
// ============================================================

function renderList() {
  var s = currentStudent;
  var assignments = s.assignments;
  var latest = assignments[0];
  var previous = assignments[1];
  var trend = previous ? (latest.grade - previous.grade) : null;

  // Hero insight: simple deterministic narrative
  var firstName = s.name.split(" ")[0];
  var insight = "Since your last essay, your <strong>structure</strong> and <strong>referencing</strong> have improved. With sharper <strong>argument framing</strong> \u2014 leading paragraphs with claims rather than descriptions \u2014 you\u2019d be in 2:1 territory.";

  var html = "";

  // Hero
  html += '<section class="hero">';
  html += '  <div class="hero-left">';
  html += '    <div class="hero-eyebrow">Welcome back</div>';
  html += '    <h1 class="hero-title display">Hello, <em>' + escapeHtml(firstName) + '.</em><br>Your writing is&nbsp;sharpening.</h1>';
  html += '    <p class="hero-insight">' + insight + '</p>';
  if (trend !== null) {
    var sign = trend >= 0 ? '+' : '';
    html += '    <div class="trend-row">';
    html += '      <div class="trend-num"><span class="sign">' + sign + '</span>' + trend + '</div>';
    html += '      <div class="trend-label">point gain since ' + escapeHtml(previous.shortTitle) + ', ' + escapeHtml(previous.date.split(" ").slice(-2).join(" ")) + '</div>';
    html += '    </div>';
  }
  html += '  </div>';

  // Radar card
  html += '  <div class="card">';
  html += '    <div class="card-eyebrow">Skill shape</div>';
  html += '    <h3 class="card-title">Where you\u2019re strongest</h3>';
  html += '    <div class="radar-wrap">';
  html += renderRadar(latest.skillScores, previous ? previous.skillScores : null);
  html += '      <div class="radar-legend">';
  html += '        <div><span class="legend-dot" style="background:#7a9b76"></span>' + escapeHtml(latest.shortTitle) + ' \u2014 now</div>';
  if (previous) {
    html += '      <div><span class="legend-dot" style="background:#d4a574"></span>' + escapeHtml(previous.shortTitle) + ' \u2014 ' + escapeHtml(previous.date.split(" ")[1]) + '</div>';
  }
  html += '      </div>';
  html += '    </div>';
  html += '  </div>';
  html += '</section>';

  // Timeline
  html += '<section class="timeline-section">';
  html += '  <div class="section-header">';
  html += '    <h2 class="section-title display">Your assignments</h2>';
  html += '    <span class="section-meta">' + assignments.length + ' marked &middot; ' + escapeHtml(s.module) + '</span>';
  html += '  </div>';
  html += '  <div class="timeline">';
  assignments.forEach(function(a) {
    html += '<article class="tl-node ' + a.bandClass + '">';
    html += '  <div class="tl-card" data-assignment="' + a.id + '">';
    html += '    <div>';
    html += '      <div class="tl-module">' + escapeHtml(a.module) + ' &middot; ' + escapeHtml(a.shortTitle) + '</div>';
    html += '      <h3 class="tl-title">' + escapeHtml(a.title) + '</h3>';
    html += '      <div class="tl-meta">';
    html += '        <span>' + escapeHtml(a.date) + '</span>';
    html += '        <span>' + escapeHtml(s.tutor) + '</span>';
    html += '        <span>' + escapeHtml(a.markedAgo) + '</span>';
    html += '      </div>';
    html += '    </div>';
    html += '    <div class="grade-block">';
    html += '      <div class="grade-num ' + a.bandClass + '">' + a.grade + '<span class="grade-pct">%</span></div>';
    html += '      <div class="grade-band">' + escapeHtml(a.band) + '</div>';
    html += '    </div>';
    html += '  </div>';
    html += '</article>';
  });
  html += '  </div>';
  html += '</section>';

  dom.appContent.innerHTML = html;

  // Click handlers
  dom.appContent.querySelectorAll(".tl-card").forEach(function(card) {
    card.addEventListener("click", function() {
      showDetail(card.dataset.assignment);
    });
  });
}

// ============================================================
// RENDER: DETAIL
// ============================================================

function renderDetail(assignmentId) {
  var s = currentStudent;
  var a = null;
  for (var i = 0; i < s.assignments.length; i++) {
    if (s.assignments[i].id === assignmentId) { a = s.assignments[i]; break; }
  }
  if (!a) return;

  var html = "";

  html += '<button class="back-link" id="btnBack">&larr; All assignments</button>';

  html += '<header class="detail-header">';
  html += '  <div class="detail-eyebrow">' + escapeHtml(a.module) + ' &middot; ' + escapeHtml(a.shortTitle) + '</div>';
  html += '  <h1 class="detail-title display">' + escapeHtml(a.title) + '</h1>';
  html += '  <div class="detail-meta-row">';
  html += '    <div class="detail-grade-chip">';
  html += '      <span class="num ' + a.bandClass + '">' + a.grade + '%</span>';
  html += '      <span class="band">' + escapeHtml(a.band) + '</span>';
  html += '    </div>';
  html += '    <div class="detail-meta-text">' + escapeHtml(a.date) + ' &middot; ' + escapeHtml(s.tutor) + '</div>';
  html += '    <button class="print-btn" onclick="window.print()">Print / Save PDF</button>';
  html += '  </div>';
  html += '</header>';

  // Sections
  SECTIONS.forEach(function(section) {
    var data = a[section.key];
    if (!data) return;

    html += '<article class="fb-section ' + section.cssClass + '">';
    html += '  <div class="fb-section-bar"></div>';
    html += '  <div class="fb-section-body">';
    html += '    <div class="fb-eyebrow">' + escapeHtml(section.title.toUpperCase()) + '</div>';
    html += '    <h3>' + escapeHtml(section.title) + '</h3>';

    section.subsections.forEach(function(sub, i) {
      if (!data[sub.key]) return;
      if (i > 0) html += '<hr class="fb-divider">';
      html += '<div class="fb-sub">';
      if (sub.key !== "overall") {
        html += '<div class="fb-sub-title">' + escapeHtml(sub.title) + '</div>';
      }
      html += '<p class="fb-text">' + escapeHtml(data[sub.key]) + '</p>';
      html += '</div>';
    });

    if (data.tips && data.tips.length > 0) {
      html += '<div class="tips-box">';
      html += '  <div class="tips-box-title">Tips for improving</div>';
      html += '  <ul>';
      data.tips.forEach(function(t) { html += '<li>' + escapeHtml(t) + '</li>'; });
      html += '  </ul>';
      html += '</div>';
    }

    if (section.skillPage) {
      html += '<a href="' + section.skillPage + '" class="practise-link" target="_blank">Practise this skill &rarr;</a>';
    }

    html += '  </div>';
    html += '</article>';
  });

  // Action plan
  if (a.actionPlan && a.actionPlan.length > 0) {
    var checked = loadChecked(assignmentId);
    var done = 0;
    a.actionPlan.forEach(function(_, idx) { if (checked[idx]) done++; });
    var pct = Math.round((done / a.actionPlan.length) * 100);

    html += '<section class="action-plan">';
    html += '  <div class="ap-eyebrow">For next time</div>';
    html += '  <h2 class="ap-title display">Your action plan</h2>';
    html += '  <p class="ap-intro">Based on this feedback, here are your priorities for the next assignment. Tick them off as you work through them.</p>';

    a.actionPlan.forEach(function(item, idx) {
      var isChecked = checked[idx] ? true : false;
      html += '<div class="action-item">';
      html += '  <input type="checkbox" id="action-' + idx + '" data-idx="' + idx + '"' + (isChecked ? ' checked' : '') + '>';
      html += '  <label for="action-' + idx + '"' + (isChecked ? ' class="checked"' : '') + '>' + escapeHtml(item) + '</label>';
      html += '</div>';
    });

    html += '  <div class="ap-progress" id="apProgress">' + done + ' of ' + a.actionPlan.length + ' completed';
    html += '    <div class="ap-bar-bg"><div class="ap-bar-fill" style="width:' + pct + '%"></div></div>';
    html += '  </div>';
    html += '</section>';
  }

  dom.appContent.innerHTML = html;

  document.getElementById("btnBack").addEventListener("click", showList);

  dom.appContent.querySelectorAll('.action-item input[type="checkbox"]').forEach(function(cb) {
    cb.addEventListener("change", function() {
      var idx = parseInt(cb.dataset.idx);
      var c = loadChecked(assignmentId);
      c[idx] = cb.checked;
      saveChecked(assignmentId, c);

      var label = cb.nextElementSibling;
      if (cb.checked) label.classList.add("checked"); else label.classList.remove("checked");

      var total = a.actionPlan.length;
      var d = 0;
      dom.appContent.querySelectorAll('.action-item input[type="checkbox"]').forEach(function(x) { if (x.checked) d++; });
      var p = Math.round((d / total) * 100);
      var prog = document.getElementById("apProgress");
      if (prog) {
        prog.innerHTML = d + ' of ' + total + ' completed<div class="ap-bar-bg"><div class="ap-bar-fill" style="width:' + p + '%"></div></div>';
      }
    });
  });

  window.scrollTo(0, 0);
}

// ============================================================
// VIEW MANAGEMENT
// ============================================================

function showList() {
  currentView = "list";
  currentAssignmentId = null;
  renderList();
  window.scrollTo(0, 0);
}

function showDetail(id) {
  currentView = "detail";
  currentAssignmentId = id;
  renderDetail(id);
}

// ============================================================
// INIT
// ============================================================

currentStudent = STUDENTS["aisha.patel@university.ac.uk"];
dom.navAvatar.textContent = currentStudent.initials;
dom.navAvatar.title = currentStudent.name;

dom.navHome.addEventListener("click", showList);
dom.navMyWork.addEventListener("click", function(e) { e.preventDefault(); showList(); });

showList();
