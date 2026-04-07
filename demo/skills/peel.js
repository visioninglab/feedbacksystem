// ============================================================
// SAMPLE STUDENT PARAGRAPHS
// ============================================================

const PARAGRAPHS = [
  {
    id: "strong",
    label: "Strong paragraph (Mei Chen \u2014 Intro to Psychology)",
    student: "Mei Chen",
    module: "Intro to Psychology",
    assignment: "Discuss the role of early attachment in emotional development",
    sentences: [
      { peel: "point", text: "Bowlby\u2019s attachment theory provides a compelling explanation for the long-term effects of early caregiving on emotional development." },
      { peel: "evidence", text: "Hazan and Shaver (1987) found that adults who reported insecure attachment in childhood were significantly more likely to describe their romantic relationships as anxious or avoidant, with 56% of securely attached participants reporting satisfying relationships compared to only 24% of those classified as avoidant." },
      { peel: "explain", text: "This finding supports Bowlby\u2019s prediction that internal working models formed in infancy shape expectations in later relationships. However, the reliance on retrospective self-report means participants may have reconstructed their childhood experiences through the lens of their current relationship difficulties, which limits the causal conclusions we can draw." },
      { peel: "link", text: "While attachment theory offers a strong framework for understanding emotional development, it does not fully account for the role of peer relationships, which will be examined in the following section." }
    ]
  },
  {
    id: "developing",
    label: "Developing paragraph (James Okafor \u2014 Research Methods)",
    student: "James Okafor",
    module: "Research Methods",
    assignment: "Evaluate the contribution of attachment theory to developmental psychology",
    sentences: [
      { peel: "point", text: "There are many theories about attachment and how it affects people later in life." },
      { peel: "evidence", text: "Research has shown that attachment affects later relationships. Bowlby said that children form attachments to their caregivers and this is important for development." },
      { peel: "explain", text: "This shows that attachment is really important for how people develop emotionally." },
      { peel: "link", text: "There are also other theories about emotional development." }
    ]
  },
  {
    id: "mixed",
    label: "Mixed quality paragraph (Priya Sharma \u2014 Cognitive Psychology)",
    student: "Priya Sharma",
    module: "Cognitive Psychology",
    assignment: "Critically assess Bowlby\u2019s maternal deprivation hypothesis",
    sentences: [
      { peel: "point", text: "Bowlby\u2019s maternal deprivation hypothesis suggests that prolonged separation from the primary caregiver during the critical period of the first two years leads to irreversible emotional and cognitive damage." },
      { peel: "evidence", text: "Bowlby (1944) studied 44 juvenile thieves and found that 14 of them showed \u2018affectionless psychopathy,\u2019 and 12 of these 14 had experienced prolonged separation from their mothers before the age of two." },
      { peel: "explain", text: "This seems to support the idea that early separation is harmful to children." },
      { peel: "link", text: "Rutter\u2019s Romanian orphan studies, discussed in the next section, challenge the claim that the effects of deprivation are necessarily permanent, suggesting instead that recovery is possible depending on the quality of subsequent care." }
    ]
  }
];

// ============================================================
// PEEL FEEDBACK — short, focused per element
// ============================================================

const PEEL_FEEDBACK = {
  point: [
    {
      id: "F33", title: "Strong topic sentence", tone: "positive",
      text: "Clear, focused opening that names the theory and states a specific claim. This sets up the rest of the paragraph effectively."
    },
    {
      id: "F34", title: "Topic sentence needs focus", tone: "developmental",
      text: "Your opening is too broad. Name the specific theory, state a clear claim, and signal what evidence will follow."
    }
  ],
  evidence: [
    {
      id: "F35", title: "Effective use of evidence", tone: "positive",
      text: "Well-cited with named researchers, specific findings, and supporting data. Directly supports your topic sentence."
    },
    {
      id: "F36", title: "Evidence needs strengthening", tone: "developmental",
      text: "Cite specific studies: name the researchers, describe the method briefly, and state the exact finding rather than making general claims."
    }
  ],
  explain: [
    {
      id: "F37", title: "Clear analysis", tone: "positive",
      text: "Strong analysis connecting evidence to theory, with critical evaluation of methodological limitations."
    },
    {
      id: "F38", title: "Explanation needs depth", tone: "developmental",
      text: "Don\u2019t move on after citing evidence. Explain why it matters, what it tells us about the theory, and note any limitations."
    }
  ],
  link: [
    {
      id: "F39", title: "Strong linking sentence", tone: "positive",
      text: "Effective transition that summarises the paragraph\u2019s conclusion, acknowledges a limitation, and signals the next section."
    },
    {
      id: "F40", title: "Linking needs work", tone: "developmental",
      text: "Your paragraph ends abruptly. Restate how this answers the essay question and introduce what comes next."
    }
  ]
};

const PEEL_ORDER = ["point", "evidence", "explain", "link"];
const PEEL_LABELS = { point: "Point", evidence: "Evidence", explain: "Explain", link: "Link" };

// ============================================================
// STATE
// ============================================================

const state = {
  currentParagraph: PARAGRAPHS[0],
  selections: { point: null, evidence: null, explain: null, link: null }
};

// ============================================================
// DOM
// ============================================================

const dom = {
  ddParagraph: document.getElementById("ddParagraph"),
  paragraphDisplay: document.getElementById("paragraphDisplay"),
  paragraphMeta: document.getElementById("paragraphMeta"),
  peelSelectors: document.getElementById("peelSelectors"),
  feedbackOutput: document.getElementById("feedbackOutput"),
  btnClear: document.getElementById("btnClear")
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
// RENDER
// ============================================================

function renderParagraph() {
  const p = state.currentParagraph;
  let html = "";
  p.sentences.forEach(s => {
    html += '<span class="peel-sent ' + s.peel + '">' +
      '<span class="peel-tag ' + s.peel + '">' + PEEL_LABELS[s.peel].charAt(0) + '</span>' +
      escapeHtml(s.text) + '</span> ';
  });
  dom.paragraphDisplay.innerHTML = html;
  dom.paragraphMeta.textContent = p.student + " \u2014 " + p.module + " \u2014 " + p.assignment;
}

function renderSelectors() {
  let html = "";
  PEEL_ORDER.forEach(el => {
    const items = PEEL_FEEDBACK[el];
    html += '<div class="peel-card">';
    html += '<div class="peel-card-hdr ' + el + '">' + PEEL_LABELS[el] + '</div>';
    html += '<div class="peel-card-body">';
    items.forEach(item => {
      const sel = state.selections[el] === item.id;
      const tCls = item.tone === "positive" ? "tone-pos" : "tone-dev";
      const tLbl = item.tone === "positive" ? "Strength" : "Develop";
      html += '<div class="fb-opt' + (sel ? " sel " + el : "") + '" data-element="' + el + '" data-id="' + item.id + '">';
      html += '<input type="radio" name="peel_' + el + '"' + (sel ? " checked" : "") + ' aria-label="' + escapeHtml(item.title) + '">';
      html += '<div class="fb-opt-content">';
      html += '<div class="fb-opt-title">' + escapeHtml(item.title) + ' <span class="tone-badge ' + tCls + '">' + tLbl + '</span></div>';
      html += '<div class="fb-opt-text">' + escapeHtml(item.text) + '</div>';
      html += '</div></div>';
    });
    html += '</div></div>';
  });
  dom.peelSelectors.innerHTML = html;
}

function renderOutput() {
  const hasAny = PEEL_ORDER.some(el => state.selections[el] !== null);
  if (!hasAny) {
    dom.feedbackOutput.innerHTML = '<div class="output-empty">Select feedback for each PEEL element to build paragraph feedback.</div>';
    return;
  }
  let html = "";
  PEEL_ORDER.forEach(el => {
    const id = state.selections[el];
    if (!id) return;
    const item = PEEL_FEEDBACK[el].find(f => f.id === id);
    if (!item) return;
    html += '<div class="out-block ' + el + '">';
    html += '<h4 class="' + el + '">' + PEEL_LABELS[el] + ': ' + escapeHtml(item.title) + '</h4>';
    html += '<p>' + escapeHtml(item.text) + '</p>';
    html += '</div>';
  });
  dom.feedbackOutput.innerHTML = html;
}

function renderAll() { renderParagraph(); renderSelectors(); renderOutput(); }

// ============================================================
// EVENTS
// ============================================================

dom.ddParagraph.addEventListener("change", function () {
  state.currentParagraph = PARAGRAPHS.find(p => p.id === this.value) || PARAGRAPHS[0];
  state.selections = { point: null, evidence: null, explain: null, link: null };
  renderAll();
});

dom.peelSelectors.addEventListener("click", function (e) {
  const opt = e.target.closest(".fb-opt");
  if (!opt) return;
  const el = opt.dataset.element;
  const id = opt.dataset.id;
  state.selections[el] = state.selections[el] === id ? null : id;
  renderSelectors();
  renderOutput();
});

dom.btnClear.addEventListener("click", function () {
  state.selections = { point: null, evidence: null, explain: null, link: null };
  renderSelectors();
  renderOutput();
});

// ============================================================
// INIT
// ============================================================

PARAGRAPHS.forEach(p => {
  const opt = document.createElement("option");
  opt.value = p.id;
  opt.textContent = p.label;
  dom.ddParagraph.appendChild(opt);
});

renderAll();
