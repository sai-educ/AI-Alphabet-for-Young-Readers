
/* Basic interactions & data ------------------------------------------------ */
(function(){
  const qs = (s, el=document) => el.querySelector(s);
  const qsa = (s, el=document) => [...el.querySelectorAll(s)];

  // Mobile nav
  const toggle = qs('.nav-toggle');
  const menu = qs('#nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('show');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Alphabet data (single source of truth)
  const LETTERS = [
    ["A","ALGORITHM","A list of steps a computer follows to solve a problem.","Make a sandwich plan: write each step on paper!"],
    ["B","BOT","A helper program that can do simple jobs again and again.","Sort toys: make a 'bot' rule — if it’s a car, box A; if not, box B."],
    ["C","CODE","The special instructions we give computers.","Write 3 steps to tell a friend how to brush teeth."],
    ["D","DATA","Facts and examples a computer learns from.","Count fruit at home and make a tiny table."],
    ["E","ETHICS","Using tech in fair, kind, and safe ways.","List 3 'kind tech' rules for home or class."],
    ["F","FAKE","Something that looks real but isn’t.","Spot‑the‑difference: compare two photos and circle clues."],
    ["G","GLITCH","A small mistake that makes software act funny.","Draw a comic of a silly app glitch and the fix."],
    ["H","HALLUCINATION","When AI gives an answer that sounds right but isn’t.","Ask: 'How do we check?' Practice with a book or trusted adult."],
    ["I","INTERNET","A huge network that lets computers talk.","Draw a map from your device to a library website."],
    ["J","JUDGEMENT","Choosing the best action with care and fairness.","Write 2 questions to ask before posting online."],
    ["K","KEYWORD","An important word used to search or learn.","Pick a topic and list 3 strong keywords."],
    ["L","LITERACY","Understanding and using ideas with skill.","Teach someone one new AI word today."],
    ["M","MACHINE LEARNING","Computers finding patterns from data to improve.","Sort shapes by color and guess the rule."],
    ["N","NEURAL NETWORK","Layers that help computers spot patterns like faces.","Stack cups in layers and pass a 'signal' (a marble) down."],
    ["O","OBJECT SPOTTER","A tool that finds things in pictures.","Circle every triangle you can find in a picture book."],
    ["P","PROMPT","How we ask an AI for help.","Write a clear request with details: who, what, style."],
    ["Q","QUERY","A question asked to a computer or database.","Turn a big question into 3 small ones."],
    ["R","ROBOT","A machine that can sense, think, and act.","Build a paper robot and label its sensors."],
    ["S","SIRI","A voice assistant that listens and answers.","Practice asking a polite, clear question out loud."],
    ["T","TURING TEST","A famous idea: can a machine seem human?","Play 'guess who': human or robot answers?"],
    ["U","UNPLUG","Taking a healthy break from screens.","Try a 10‑minute walk and notice 5 sounds."],
    ["V","VOICE RECOGNITION","Tech that understands spoken words.","Say the same sentence in 3 ways, hear differences."],
    ["W","WI‑FI","Wireless internet that sends signals through air.","Find places at home where Wi‑Fi is strongest."],
    ["X","eXPLORATION","Learning by trying, testing, and noticing.","Run a tiny experiment and jot what changed."],
    ["Y","YOU","The most important thinker and decision‑maker.","Write one way you’ll use tech kindly today."],
    ["Z","ZEROES & ONES","The tiny 'bits' computers use to represent information.","Make a secret code using 0 = clap, 1 = snap."]
  ];

  // Expose for pages
  window.AI_ALPHABET = LETTERS;

  /* Learn page grid -------------------------------------------------------- */
  window.renderAlphabetGrid = function(){
    const grid = document.querySelector('.alphabet-grid');
    if (!grid) return;
    const colors = [1,2,3,4,5];
    LETTERS.forEach((row, idx) => {
      const [letter, word] = [row[0], row[1]];
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'tile';
      btn.dataset.color = colors[idx % colors.length];
      btn.setAttribute('aria-label', `${letter} is for ${word}`);
      btn.innerHTML = `
        <span class="big" aria-hidden="true">${letter}</span>
        <span class="label">${letter}</span>
        <span class="word">${word}</span>
      `;
      btn.addEventListener('click', () => {
        window.location.href = `alphabet.html?letter=${letter}`;
      });
      grid.appendChild(btn);
    });
  };

  /* Alphabet letter page --------------------------------------------------- */
  let currentIndex = 0;
  function renderCard(){
    const card = qs('#card');
    const fill = qs('#progressFill');
    const label = qs('#currentLabel');
    if (!card || !fill || !label) return;
    const [L, W, def, act] = LETTERS[currentIndex];
    const pct = Math.round(((currentIndex+1)/LETTERS.length)*100);
    fill.style.width = pct + '%';
    label.textContent = L;

    card.innerHTML = `
      <div class="left">
        <div style="display:flex; align-items:center; gap:16px; margin-bottom:8px;">
          <div class="blob" aria-hidden="true">${L}</div>
          <div>
            <div class="kicker">is for</div>
            <h2>${W}</h2>
          </div>
        </div>

        <div class="box def">
          <h3>Kid‑friendly meaning</h3>
          <p>${def}</p>
        </div>

        <div class="box act">
          <h3>Try it</h3>
          <p>${act}</p>
        </div>

        <div class="box fact">
          <h3>Remember</h3>
          <p>Technology is a <strong>helper</strong>. We ask clearly, think carefully, and check kindly.</p>
        </div>
      </div>

      <div class="right">
        <div class="illus">
          <p>Imagine an illustration for <strong>${W}</strong> here — add drawings, stickers, or class photos!</p>
        </div>
      </div>
    `;

    const prev = qs('#prevBtn');
    const next = qs('#nextBtn');
    if (prev && next){
      prev.disabled = (currentIndex === 0);
      next.disabled = (currentIndex === LETTERS.length - 1);
    }
  }

  window.mountLetterPage = function(){
    // read ?letter param
    const usp = new URLSearchParams(location.search);
    const letter = (usp.get('letter') || 'A').toUpperCase();
    const idx = LETTERS.findIndex(r => r[0] === letter);
    currentIndex = idx >= 0 ? idx : 0;
    renderCard();

    const prev = document.getElementById('prevBtn');
    const next = document.getElementById('nextBtn');
    if (prev) prev.addEventListener('click', () => { currentIndex = Math.max(0, currentIndex-1); renderCard(); history.replaceState({}, '', `?letter=${LETTERS[currentIndex][0]}`); });
    if (next) next.addEventListener('click', () => { currentIndex = Math.min(LETTERS.length-1, currentIndex+1); renderCard(); history.replaceState({}, '', `?letter=${LETTERS[currentIndex][0]}`); });
  };
})
  // Auto-mount when DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.alphabet-grid')) {
      window.renderAlphabetGrid();
    }
  });

})();
