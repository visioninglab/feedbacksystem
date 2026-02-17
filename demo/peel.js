// ============================================================
// SAMPLE STUDENT PARAGRAPHS
// ============================================================

const PARAGRAPHS = [
  {
    id: "strong",
    label: "Strong paragraph (Mei Chen — Intro to Psychology)",
    student: "Mei Chen",
    module: "Intro to Psychology",
    assignment: "Essay: Discuss the role of early attachment in emotional development",
    quality: "strong",
    sentences: [
      {
        peel: "point",
        text: "Bowlby\u2019s attachment theory provides a compelling explanation for the long-term effects of early caregiving on emotional development."
      },
      {
        peel: "evidence",
        text: "Hazan and Shaver (1987) found that adults who reported insecure attachment in childhood were significantly more likely to describe their romantic relationships as anxious or avoidant, with 56% of securely attached participants reporting satisfying relationships compared to only 24% of those classified as avoidant."
      },
      {
        peel: "explain",
        text: "This finding supports Bowlby\u2019s prediction that internal working models formed in infancy shape expectations in later relationships. However, the reliance on retrospective self-report means participants may have reconstructed their childhood experiences through the lens of their current relationship difficulties, which limits the causal conclusions we can draw."
      },
      {
        peel: "link",
        text: "While attachment theory offers a strong framework for understanding emotional development, it does not fully account for the role of peer relationships, which will be examined in the following section."
      }
    ]
  },
  {
    id: "developing",
    label: "Developing paragraph (James Okafor — Research Methods)",
    student: "James Okafor",
    module: "Research Methods",
    assignment: "Essay: Evaluate the contribution of attachment theory to developmental psychology",
    quality: "developing",
    sentences: [
      {
        peel: "point",
        text: "There are many theories about attachment and how it affects people later in life."
      },
      {
        peel: "evidence",
        text: "Research has shown that attachment affects later relationships. Bowlby said that children form attachments to their caregivers and this is important for development."
      },
      {
        peel: "explain",
        text: "This shows that attachment is really important for how people develop emotionally."
      },
      {
        peel: "link",
        text: "There are also other theories about emotional development."
      }
    ]
  },
  {
    id: "mixed",
    label: "Mixed quality paragraph (Priya Sharma — Cognitive Psychology)",
    student: "Priya Sharma",
    module: "Cognitive Psychology",
    assignment: "Essay: Critically assess Bowlby\u2019s maternal deprivation hypothesis",
    quality: "mixed",
    sentences: [
      {
        peel: "point",
        text: "Bowlby\u2019s maternal deprivation hypothesis suggests that prolonged separation from the primary caregiver during the critical period of the first two years leads to irreversible emotional and cognitive damage."
      },
      {
        peel: "evidence",
        text: "Bowlby (1944) studied 44 juvenile thieves and found that 14 of them showed \u2018affectionless psychopathy,\u2019 and 12 of these 14 had experienced prolonged separation from their mothers before the age of two."
      },
      {
        peel: "explain",
        text: "This seems to support the idea that early separation is harmful to children."
      },
      {
        peel: "link",
        text: "Rutter\u2019s Romanian orphan studies, discussed in the next section, challenge the claim that the effects of deprivation are necessarily permanent, suggesting instead that recovery is possible depending on the quality of subsequent care."
      }
    ]
  }
];

// ============================================================
// PEEL FEEDBACK ITEMS (organised by element)
// ============================================================

const PEEL_FEEDBACK = {
  point: [
    {
      id: "F33",
      title: "Strong topic sentence",
      tone: "positive",
      text: "Your paragraph opens with a clear and focused topic sentence that tells the reader exactly what the paragraph will argue. For example, your sentence \u2018Bowlby\u2019s attachment theory provides a compelling explanation for the long-term effects of early caregiving on emotional development\u2019 immediately establishes the argument and sets up the rest of the paragraph effectively. This is exactly how a PEEL paragraph should begin."
    },
    {
      id: "F34",
      title: "Topic sentence needs focus",
      tone: "developmental",
      text: "Your paragraph begins too broadly and does not clearly state what the paragraph will argue. For example, writing \u2018There are many theories about attachment\u2019 does not give the reader a specific direction. A stronger topic sentence would be: \u2018Bowlby\u2019s attachment theory suggests that disrupted early bonds can lead to lasting difficulties in emotional regulation.\u2019 Notice how the revised version names the theory, states a specific claim, and signals what evidence will follow."
    }
  ],
  evidence: [
    {
      id: "F35",
      title: "Effective use of evidence",
      tone: "positive",
      text: "You support your point with well-chosen evidence that directly strengthens your argument. For example, you cited \u2018Hazan and Shaver (1987) found that adults who reported insecure attachment in childhood were significantly more likely to describe their romantic relationships as anxious or avoidant.\u2019 This is strong because you named the researchers, described the finding specifically, and chose a study that directly supports your topic sentence about attachment and emotional development."
    },
    {
      id: "F36",
      title: "Evidence needs strengthening",
      tone: "developmental",
      text: "Your paragraph makes claims but does not provide sufficient evidence to support them. For example, you wrote \u2018Research has shown that attachment affects later relationships\u2019 without citing a specific study. A stronger version would be: \u2018Hazan and Shaver (1987) surveyed 620 adults and found that those with insecure childhood attachment were more likely to report anxiety and avoidance in romantic relationships.\u2019 Always name the researchers, describe the method briefly, and state the specific finding."
    }
  ],
  explain: [
    {
      id: "F37",
      title: "Clear explanation and analysis",
      tone: "positive",
      text: "Your explanation effectively connects the evidence back to your argument and shows critical thinking. For example, you wrote: \u2018This finding supports Bowlby\u2019s prediction that internal working models formed in infancy shape expectations in later relationships. However, the reliance on retrospective self-report means participants may have reconstructed their childhood experiences through the lens of their current relationship difficulties.\u2019 This is excellent because you explained why the evidence matters and then evaluated its limitations."
    },
    {
      id: "F38",
      title: "Explanation needs depth",
      tone: "developmental",
      text: "After presenting your evidence, you moved on without explaining what it means or why it matters. For example, after citing Hazan and Shaver\u2019s findings, you simply moved to the next study. Instead, you should explain: Why does this evidence support your point? What does it tell us about the theory? Are there any limitations? A stronger explanation would be: \u2018This suggests that early attachment experiences create internal working models that persist into adulthood, though the correlational design means we cannot confirm a causal relationship between childhood attachment and adult relationship patterns.\u2019"
    }
  ],
  link: [
    {
      id: "F39",
      title: "Strong linking sentence",
      tone: "positive",
      text: "Your paragraph ends with an effective linking sentence that connects back to the essay question and transitions to the next point. For example, you wrote: \u2018While attachment theory offers a strong framework for understanding emotional development, it does not fully account for the role of peer relationships, which will be examined in the following section.\u2019 This works well because it summarises the paragraph\u2019s conclusion, acknowledges a limitation, and signals what comes next."
    },
    {
      id: "F40",
      title: "Linking sentence needs work",
      tone: "developmental",
      text: "Your paragraph ends abruptly without linking back to the essay question or transitioning to the next point. Ending with a piece of evidence or a standalone fact leaves the reader without a sense of closure. A strong linking sentence should do two things: (1) briefly restate how the paragraph\u2019s argument answers the essay question, and (2) signal the direction of the next paragraph. For example: \u2018Although attachment theory provides a useful lens for understanding emotional development, it is important to also consider social learning theory, which emphasises the role of observed behaviour in shaping relationship patterns.\u2019"
    }
  ]
};

const PEEL_ORDER = ["point", "evidence", "explain", "link"];
const PEEL_LABELS = {
  point: "Point",
  evidence: "Evidence",
  explain: "Explain",
  link: "Link"
};

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
// RENDER: Paragraph display
// ============================================================

function renderParagraph() {
  const p = state.currentParagraph;

  let html = "";
  p.sentences.forEach(s => {
    html += '<span class="peel-sentence ' + s.peel + '">' +
      '<span class="peel-label ' + s.peel + '">' + PEEL_LABELS[s.peel].charAt(0) + '</span>' +
      escapeHtml(s.text) +
      '</span> ';
  });

  dom.paragraphDisplay.innerHTML = html;
  dom.paragraphMeta.textContent = p.student + " \u2014 " + p.module + " \u2014 " + p.assignment;
}

// ============================================================
// RENDER: PEEL feedback selectors
// ============================================================

function renderSelectors() {
  let html = "";

  PEEL_ORDER.forEach(element => {
    const items = PEEL_FEEDBACK[element];
    const label = PEEL_LABELS[element];

    html += '<div class="peel-section">';
    html += '<div class="peel-section-header">';
    html += '<div class="peel-dot ' + element + '"></div>';
    html += '<h3 class="' + element + '">' + label + '</h3>';
    html += '</div>';

    items.forEach(item => {
      const isSelected = state.selections[element] === item.id;
      const toneClass = item.tone === "positive" ? "tone-positive" : "tone-developmental";
      const toneLabel = item.tone === "positive" ? "Strength" : "Developmental";

      html += '<div class="feedback-option' + (isSelected ? ' selected ' + element : '') + '" ' +
        'data-element="' + element + '" data-id="' + item.id + '">';
      html += '<input type="radio" name="peel_' + element + '" ' +
        (isSelected ? 'checked' : '') +
        ' aria-label="' + escapeHtml(item.title) + '">';
      html += '<div class="feedback-option-content">';
      html += '<div class="feedback-option-title">' + escapeHtml(item.title) +
        '<span class="feedback-option-tone ' + toneClass + '">' + toneLabel + '</span></div>';
      html += '<div class="feedback-option-text">' + escapeHtml(item.text) + '</div>';
      html += '</div>';
      html += '</div>';
    });

    html += '</div>';
  });

  dom.peelSelectors.innerHTML = html;
}

// ============================================================
// RENDER: Assembled feedback output
// ============================================================

function renderOutput() {
  const hasAny = PEEL_ORDER.some(el => state.selections[el] !== null);

  if (!hasAny) {
    dom.feedbackOutput.innerHTML = '<div class="output-empty">Select feedback for each PEEL element above to build the paragraph feedback.</div>';
    return;
  }

  let html = "";

  PEEL_ORDER.forEach(element => {
    const selectedId = state.selections[element];
    if (!selectedId) return;

    const item = PEEL_FEEDBACK[element].find(f => f.id === selectedId);
    if (!item) return;

    html += '<div class="output-block ' + element + '">';
    html += '<h4 class="' + element + '">' + PEEL_LABELS[element] + ': ' + escapeHtml(item.title) + '</h4>';
    html += '<p>' + escapeHtml(item.text) + '</p>';
    html += '</div>';
  });

  dom.feedbackOutput.innerHTML = html;
}

// ============================================================
// HELPERS
// ============================================================

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// ============================================================
// EVENT HANDLERS
// ============================================================

function onParagraphChange() {
  const id = dom.ddParagraph.value;
  state.currentParagraph = PARAGRAPHS.find(p => p.id === id) || PARAGRAPHS[0];
  state.selections = { point: null, evidence: null, explain: null, link: null };
  renderParagraph();
  renderSelectors();
  renderOutput();
}

function onSelectorClick(e) {
  const option = e.target.closest(".feedback-option");
  if (!option) return;

  const element = option.dataset.element;
  const id = option.dataset.id;

  // Toggle: if already selected, deselect; otherwise select
  if (state.selections[element] === id) {
    state.selections[element] = null;
  } else {
    state.selections[element] = id;
  }

  renderSelectors();
  renderOutput();
}

function onClear() {
  state.selections = { point: null, evidence: null, explain: null, link: null };
  renderSelectors();
  renderOutput();
}

// ============================================================
// INIT
// ============================================================

function init() {
  // Populate paragraph dropdown
  PARAGRAPHS.forEach(p => {
    const opt = document.createElement("option");
    opt.value = p.id;
    opt.textContent = p.label;
    dom.ddParagraph.appendChild(opt);
  });

  dom.ddParagraph.addEventListener("change", onParagraphChange);
  dom.peelSelectors.addEventListener("click", onSelectorClick);
  dom.btnClear.addEventListener("click", onClear);

  renderParagraph();
  renderSelectors();
  renderOutput();
}

init();
