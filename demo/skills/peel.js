// ============================================================
// SAMPLE PARAGRAPHS — for student PEEL practice
// Each sentence has the correct PEEL element + a "why" rationale
// ============================================================

const PARAGRAPHS = [
  {
    id: "strong",
    label: "A strong paragraph on attachment theory",
    topic: "Discuss the role of early attachment in emotional development",
    sentences: [
      {
        peel: "point",
        text: "Bowlby\u2019s attachment theory provides a compelling explanation for the long-term effects of early caregiving on emotional development.",
        why: "This sentence opens the paragraph by naming the theory and stating a clear claim. It tells the reader exactly what the paragraph will argue."
      },
      {
        peel: "evidence",
        text: "Hazan and Shaver (1987) found that adults who reported insecure attachment in childhood were significantly more likely to describe their romantic relationships as anxious or avoidant, with 56% of securely attached participants reporting satisfying relationships compared to only 24% of those classified as avoidant.",
        why: "This sentence supplies specific research evidence \u2014 named researchers, a year, the method, and the actual figures from the study. That\u2019s the hallmark of an Evidence sentence."
      },
      {
        peel: "explain",
        text: "This finding supports Bowlby\u2019s prediction that internal working models formed in infancy shape expectations in later relationships. However, the reliance on retrospective self-report means participants may have reconstructed their childhood experiences through the lens of their current relationship difficulties, which limits the causal conclusions we can draw.",
        why: "This sentence interprets what the evidence means for the argument and acknowledges its methodological limitations. That kind of analysis is what Explain looks like at university level."
      },
      {
        peel: "link",
        text: "While attachment theory offers a strong framework for understanding emotional development, it does not fully account for the role of peer relationships, which will be examined in the following section.",
        why: "This sentence ties the paragraph back to the central argument and signposts what comes next in the essay. That signposting role is the job of a Link sentence."
      }
    ]
  },
  {
    id: "mixed",
    label: "A mixed paragraph on maternal deprivation",
    topic: "Critically assess Bowlby\u2019s maternal deprivation hypothesis",
    sentences: [
      {
        peel: "point",
        text: "Bowlby\u2019s maternal deprivation hypothesis suggests that prolonged separation from the primary caregiver during the first two years leads to irreversible emotional and cognitive damage.",
        why: "The opening sentence states the hypothesis being assessed and frames the paragraph\u2019s central claim \u2014 a clear Point."
      },
      {
        peel: "evidence",
        text: "Bowlby (1944) studied 44 juvenile thieves and found that 14 of them showed \u2018affectionless psychopathy\u2019, and 12 of these 14 had experienced prolonged separation from their mothers before the age of two.",
        why: "This is a textbook Evidence sentence: a named study, a sample size, and the specific finding."
      },
      {
        peel: "explain",
        text: "This seems to support the idea that early separation is harmful to children.",
        why: "Although brief and quite weak, this sentence is attempting to interpret what the evidence means for the argument \u2014 that\u2019s the role of an Explain sentence. A stronger version would also evaluate the limitations of the study."
      },
      {
        peel: "link",
        text: "Rutter\u2019s Romanian orphan studies, discussed in the next section, challenge the claim that the effects of deprivation are necessarily permanent, suggesting instead that recovery is possible depending on the quality of subsequent care.",
        why: "This sentence signposts to what comes next in the essay and qualifies the claim made in this paragraph. That bridging role makes it a Link."
      }
    ]
  },
  {
    id: "memory",
    label: "A paragraph on reconstructive memory",
    topic: "Critically evaluate the claim that memory is a reconstructive process",
    sentences: [
      {
        peel: "point",
        text: "The reconstructive view of memory proposes that recall is not a literal replay of events but an active process shaped by expectations, schemas and post-event information.",
        why: "This sentence sets out the central claim of the paragraph \u2014 what \u2018reconstructive memory\u2019 means \u2014 making it the Point."
      },
      {
        peel: "evidence",
        text: "Loftus and Palmer (1974) demonstrated this experimentally by showing participants a film of a car accident and asking them to estimate vehicle speed using verbs of varying intensity; participants asked the \u2018smashed\u2019 question reported speeds 9 mph higher on average than those asked the \u2018contacted\u2019 question.",
        why: "Specific researchers, a year, a method, and the precise size of the effect \u2014 this is a strong Evidence sentence."
      },
      {
        peel: "explain",
        text: "These results suggest that the wording of a question can subtly alter what participants remember, supporting the idea that memory is reconstructed at the point of recall rather than retrieved intact. The study\u2019s ecological validity is limited, however, since watching a film differs in important ways from witnessing an actual accident.",
        why: "The sentence interprets what the findings mean for the argument and weighs a methodological limitation. That analysis is the job of an Explain sentence."
      },
      {
        peel: "link",
        text: "Although laboratory evidence supports the reconstructive view, real-world studies of flashbulb memory \u2014 examined in the next section \u2014 raise the possibility that some memories are more stable than this account predicts.",
        why: "This sentence acknowledges the paragraph\u2019s position and points the reader to what the essay will discuss next. That bridging role makes it a Link."
      }
    ]
  }
];

const PEEL_ORDER = ["point", "evidence", "explain", "link"];
const PEEL_LABELS = { point: "Point", evidence: "Evidence", explain: "Explain", link: "Link" };
const PEEL_DEFINITIONS = {
  point:    "States the main claim \u2014 what this paragraph is arguing.",
  evidence: "Backs up the claim with specific research, data, or examples.",
  explain:  "Interprets the evidence \u2014 what it means for your argument.",
  link:     "Connects back to the question or forward to the next paragraph."
};

// ============================================================
// STATE
// ============================================================

let state = {
  paragraph: PARAGRAPHS[0],
  answers: []  // one entry per sentence: null or chosen peel key
};

function resetAnswers() {
  state.answers = state.paragraph.sentences.map(() => null);
}

// ============================================================
// DOM
// ============================================================

const dom = {
  ddParagraph: document.getElementById("ddParagraph"),
  topicLine:   document.getElementById("topicLine"),
  quiz:        document.getElementById("quiz"),
  scoreLine:   document.getElementById("scoreLine"),
  btnReveal:   document.getElementById("btnReveal"),
  btnReset:    document.getElementById("btnReset")
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

function renderQuiz() {
  const sentences = state.paragraph.sentences;
  let html = "";

  sentences.forEach((s, i) => {
    const answer = state.answers[i];
    const answered = answer !== null;
    const correct = answered && answer === s.peel;

    const stateClass = answered ? (correct ? " answered correct" : " answered wrong") : "";
    html += '<div class="qsentence' + stateClass + '" data-idx="' + i + '">';

    // Sentence text — when answered, gets a coloured underline matching its true type
    html += '  <p class="qtext' + (answered ? ' ' + s.peel : '') + '">' + escapeHtml(s.text) + '</p>';

    // Choice buttons
    html += '  <div class="qchoices">';
    PEEL_ORDER.forEach(el => {
      const isChosen = answer === el;
      const isTruth = s.peel === el;
      let cls = 'qchoice';
      if (answered) {
        if (isChosen && correct) cls += ' chosen-correct';
        else if (isChosen && !correct) cls += ' chosen-wrong';
        else if (isTruth) cls += ' reveal-correct';
        else cls += ' faded';
      }
      html += '<button class="' + cls + '" data-peel="' + el + '"' + (answered ? ' disabled' : '') + '>' + PEEL_LABELS[el] + '</button>';
    });
    html += '  </div>';

    // Result panel — shown after answer
    if (answered) {
      const icon = correct ? '\u2713' : '\u2715';
      const headline = correct
        ? 'Correct \u2014 this is a ' + PEEL_LABELS[s.peel] + ' sentence.'
        : 'Not quite \u2014 this is a ' + PEEL_LABELS[s.peel] + ' sentence.';
      html += '  <div class="qresult ' + (correct ? 'good' : 'bad') + '">';
      html += '    <div class="qresult-headline"><span class="qicon">' + icon + '</span>' + escapeHtml(headline) + '</div>';
      html += '    <p class="qwhy">' + escapeHtml(s.why) + '</p>';
      html += '  </div>';
    }

    html += '</div>';
  });

  dom.quiz.innerHTML = html;

  // Score line
  const answeredCount = state.answers.filter(a => a !== null).length;
  const correctCount = state.answers.filter((a, i) => a === sentences[i].peel).length;
  if (answeredCount === 0) {
    dom.scoreLine.textContent = sentences.length + ' sentences to tag';
  } else if (answeredCount < sentences.length) {
    dom.scoreLine.textContent = correctCount + ' correct so far \u2014 ' + (sentences.length - answeredCount) + ' to go';
  } else {
    if (correctCount === sentences.length) {
      dom.scoreLine.textContent = 'All ' + sentences.length + ' correct \u2014 nicely done.';
    } else {
      dom.scoreLine.textContent = correctCount + ' of ' + sentences.length + ' correct';
    }
  }
}

function renderTopic() {
  dom.topicLine.textContent = state.paragraph.topic;
}

function renderAll() {
  renderTopic();
  renderQuiz();
}

// ============================================================
// EVENTS
// ============================================================

dom.ddParagraph.addEventListener("change", function () {
  state.paragraph = PARAGRAPHS.find(p => p.id === this.value) || PARAGRAPHS[0];
  resetAnswers();
  renderAll();
});

dom.quiz.addEventListener("click", function (e) {
  const btn = e.target.closest(".qchoice");
  if (!btn || btn.disabled) return;
  const sentence = btn.closest(".qsentence");
  const idx = parseInt(sentence.dataset.idx, 10);
  if (state.answers[idx] !== null) return;
  state.answers[idx] = btn.dataset.peel;
  renderQuiz();
});

dom.btnReveal.addEventListener("click", function () {
  state.answers = state.paragraph.sentences.map(s => s.peel);
  renderQuiz();
});

dom.btnReset.addEventListener("click", function () {
  resetAnswers();
  renderQuiz();
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

resetAnswers();
renderAll();
