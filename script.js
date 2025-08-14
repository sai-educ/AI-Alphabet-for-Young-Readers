// Alphabet Data
const alphabetData = {
    A: {
        word: "Algorithm",
        definition: "A set of steps a computer follows to solve a problem or do a job.",
        activity: "What algorithm will you write for making a paper airplane? Try creating step-by-step instructions that a robot could follow!",
        fact: "Bessie Coleman was the first African American woman to earn a pilot's license in 1921. She used mental algorithms to navigate and fly safely!"
    },
    B: {
        word: "Bot (Chatbot)",
        definition: "A computer program that you can talk to or type to, and it will answer you.",
        activity: "What 2 Voice or 3 Voice Poems will you write together with friends and with AI? Create a conversation between humans and bots!",
        fact: "The first chatbot, ELIZA, was created in 1966 at MIT. It could have simple conversations by recognizing patterns in what people typed."
    },
    C: {
        word: "Code",
        definition: "A special language that people write to tell computers what to do.",
        activity: "What will you Code today? Try Tynker, OctoStudio, or Kodable to start your coding journey!",
        fact: "Grace Hopper invented the first computer compiler in 1952, making it easier for people to write code."
    },
    D: {
        word: "Data",
        definition: "Words, numbers, pictures, or anything that tells us something.",
        activity: "How will you solve Data Puzzles from Sydney-the-Statistician? Look for patterns and make predictions!",
        fact: "Florence Nightingale used data visualization in the 1850s to show how proper hospital care saved lives."
    },
    E: {
        word: "Ethics",
        definition: "Knowing right from wrong and making good choices. Is this fair? Is this safe? Does this help others?",
        activity: "What ethical problems will a character have to resolve in a story you are writing? Try Writer Igniter to get started.",
        fact: "Mary Shelley's 'Frankenstein' (1818) was one of the first stories to explore ethics in technology and creation."
    },
    F: {
        word: "Fake",
        definition: "Something that looks real but is not real. In AI, a fake can be a picture of a person who doesn't exist, a voice that sounds like someone but is made by a computer, or a video that shows something that never happened.",
        activity: "What Tall Tales will you write from your imagination? Try Tall Tales: AI Storybook Creator",
        fact: "The term 'deepfake' was coined in 2017, combining 'deep learning' and 'fake' to describe AI-generated false videos."
    },
    G: {
        word: "Glitch",
        definition: "A tiny problem that makes something not work right.",
        activity: "What amazing new inventions are you creating and what glitches do you have to solve? Create a design for your invention using Doodle Pad.",
        fact: "The term 'bug' for computer glitches came from 1947 when a real moth was found in a Harvard computer!"
    },
    H: {
        word: "Hallucination",
        definition: "When a computer or robot makes something up that is not true or not real.",
        activity: "Try this 2 Truths and a Lie learning plan and then create your own games to test AI for accuracy.",
        fact: "AI hallucinations happen because AI predicts what words should come next, not because it truly 'knows' facts."
    },
    I: {
        word: "Internet",
        definition: "A big invisible web that connects computers everywhere.",
        activity: "What website will you design? Try one with Google Sites or Wix.",
        fact: "Tim Berners-Lee invented the World Wide Web in 1989 and made it free for everyone to use."
    },
    J: {
        word: "Judgement",
        definition: "Making a good choice or deciding what is right. It helps us know what to do in different situations.",
        activity: "What Scruples game questions will you write? Create ethical dilemmas for others to solve!",
        fact: "The ancient Greek philosopher Aristotle wrote about judgment and ethics over 2,300 years ago."
    },
    K: {
        word: "Keyword",
        definition: "An important word that helps you understand. It tells you what a question or story is about.",
        activity: "What favorite words will you have to create your own digital Alphabet Book? Publish Your ABC book with Toolify.ai",
        fact: "Sylvia Ashton-Warner developed the 'key vocabulary' method to teach reading using words meaningful to each child."
    },
    L: {
        word: "Literacy",
        definition: "Being able to read and understand words and images. Literacy helps us learn, follow stories, and know what signs or books are saying.",
        activity: "Can you find the hidden word in these Toy Theatre games?",
        fact: "Frederick Douglass taught himself to read and write, believing literacy was the path to freedom."
    },
    M: {
        word: "Machine Learning",
        definition: "A computer learns from data to get better at a task. It looks at examples and starts to figure things out on its own — kind of like how kids learn by practicing!",
        activity: "What comic or cartoon story will you draw about a machine that learns? Try ComicsMaker.ai",
        fact: "Arthur Samuel coined the term 'machine learning' in 1959 while teaching computers to play checkers."
    },
    N: {
        word: "Neural Network",
        definition: "A special kind of computer brain that helps a computer learn from examples, make decisions, and get smarter over time.",
        activity: "How will you build your brain today? By Reading, Writing, Designing, Inventing, Creating, and Believing you can do it!",
        fact: "Neural networks are inspired by how human brains work, with billions of connected neurons."
    },
    O: {
        word: "Object Spotter",
        definition: "A computer tool that can look at a picture or a video and tell what objects are there, like: a dog, a bike, or a tree.",
        activity: "What I Spy game will you create? Play a Spy with my Science Eye Game with friends to get started.",
        fact: "Computer vision technology helps self-driving cars 'see' and identify objects on the road."
    },
    P: {
        word: "Prompt",
        definition: "A little helper that gives you an idea or tells you what to do.",
        activity: "What prompts would you give AI to start you writing a Once Upon a Time story about a pirate penguin and a robot octopus? Try writing cartoon adventure stories with Toonastic 3D.",
        fact: "Good prompts are like good questions - the clearer they are, the better answers you'll get!"
    },
    Q: {
        word: "Query",
        definition: "A question you ask a computer. It helps the computer know what you want to find out.",
        activity: "Create a Jeopardy game with Factile but write your own questions.",
        fact: "Search engines answer over 8.5 billion queries every day around the world!"
    },
    R: {
        word: "Robot",
        definition: "A machine that can move, follow steps, and sometimes think or talk using AI.",
        activity: "If you could design a new robot for your home, what would you have it do? Then record an audio or video commercial to promote it.",
        fact: "The word 'robot' comes from a Czech word meaning 'forced work' and was first used in a 1920 play."
    },
    S: {
        word: "SIRI",
        definition: "A helpful friend inside a phone or tablet you can talk to, ask questions, or tell it to do things and it talks back to help you.",
        activity: "If you invented your own Siri voice assistant, what helpful or funny things would you ask it to do?",
        fact: "SIRI stands for 'Speech Interpretation and Recognition Interface' and was first released in 2011."
    },
    T: {
        word: "Turing Test",
        definition: "A game to see if a computer can talk like a person. If you ask questions and can't tell if the answers come from a person or a computer, then the computer passes the test.",
        activity: "Learn about Alan Turing and try to create questions that would reveal if you're talking to a human or AI.",
        fact: "Alan Turing proposed this test in 1950. He also helped crack the Enigma code during World War II."
    },
    U: {
        word: "Unplug",
        definition: "Take a break from screens to do something away from technology.",
        activity: "What are you going to do outside for fun and learning?",
        fact: "Studies show that spending time in nature improves creativity and problem-solving skills by 50%!"
    },
    V: {
        word: "Voice Recognition",
        definition: "A computer can listen to your voice and understand your words. You talk, and the computer follows what you say.",
        activity: "What is going to happen next in Milo and Talking Tablet? Write the next chapter of the story!",
        fact: "IBM Shoebox, created in 1961, could recognize 16 spoken words and the digits 0 through 9."
    },
    W: {
        word: "Wi-Fi",
        definition: "How computers, tablets, or phones talk to the Internet without using any wires!",
        activity: "How will people communicate with each other in future? Create a visual history timeline of wired communication technologies with Canva and AI.",
        fact: "Hedy Lamarr, a Hollywood actress, invented frequency hopping in 1942, which helped create Wi-Fi technology!"
    },
    X: {
        word: "eXploration",
        definition: "Trying new things to learn or solving a problem.",
        activity: "What will you explore today? Take a virtual walk in the forest with Sofia or a trip to the river with Jenny.",
        fact: "Marie Curie's exploration of radioactivity made her the first woman to win a Nobel Prize in 1903."
    },
    Y: {
        word: "You",
        definition: "The person using the computer or the person asking the question.",
        activity: "What will you write and record in your All about Me autobiography? Try All about Me Book Creator",
        fact: "You are unique! Your fingerprints, voice pattern, and even the way you type are all distinctly yours."
    },
    Z: {
        word: "Zeroes and Ones",
        definition: "Like light switches that AI uses to help it think. Zero (0) is like the light being off. One (1) is like the light being on. The computer turns the switches on and off to learn things.",
        activity: "Where in Math History do you want to visit with Tai, the-Time Traveling Math-Historian?",
        fact: "Binary code (zeroes and ones) was invented by Gottfried Leibniz in 1679, inspired by ancient Chinese I Ching!"
    }
};

// Current index for navigation
let currentIndex = 0;
const letters = Object.keys(alphabetData);

// Function to update the card display
function updateCard() {
    const letter = letters[currentIndex];
    const data = alphabetData[letter];
    
    const cardHTML = `
        <div class="card active">
            <div class="card-content">
                <div class="left-section">
                    <div class="letter-display">
                        <div class="letter-circle">${letter}</div>
                        <div class="word-title">
                            <h2>${data.word}</h2>
                            <div class="word-subtitle">Letter ${letter}</div>
                        </div>
                    </div>
                    
                    <div class="definition-box">
                        <h3>📖 Definition</h3>
                        <p class="definition-text">${data.definition}</p>
                    </div>
                    
                    <div class="activity-box">
                        <h3>✏️ Things to Do</h3>
                        <p class="activity-text">${data.activity}</p>
                    </div>
                    
                    <div class="fact-box">
                        <h3>💡 Did You Know?</h3>
                        <p class="fact-text">${data.fact}</p>
                    </div>
                </div>
                
                <div class="right-section">
                    <div class="image-container">
                        <img src="/Users/sai/Documents/GitHub/AI-Alphabet-for-Young-Readers/media/${letter.toLowerCase()}.png" 
                             alt="${data.word} illustration" 
                             onerror="this.onerror=null; this.src='/Users/sai/Documents/GitHub/AI-Alphabet-for-Young-Readers/media/${letter.toLowerCase()}.jpeg'; 
                             this.onerror=function(){this.style.display='none'; this.parentElement.innerHTML='<div class=image-placeholder>📸 Image placeholder for ${data.word}<br><small>Add ${letter.toLowerCase()}.png or ${letter.toLowerCase()}.jpeg to media folder</small></div>';}"
                        />
                    </div>
                </div>
            </div>
        </div>
    `;
    
    const cardContent = document.getElementById('cardContent');
    if (cardContent) {
        cardContent.innerHTML = cardHTML;
        document.getElementById('currentLetter').textContent = letter;
        document.getElementById('progressBar').style.width = `${((currentIndex + 1) / 26) * 100}%`;
        
        // Update navigation buttons
        document.getElementById('prevBtn').disabled = currentIndex === 0;
        document.getElementById('nextBtn').disabled = currentIndex === letters.length - 1;
        
        // Update URL without page reload
        const newUrl = window.location.pathname + '?letter=' + letter;
        window.history.pushState({letter: letter}, '', newUrl);
    }
}

// Navigation functions
function nextCard() {
    if (currentIndex < letters.length - 1) {
        currentIndex++;
        updateCard();
    }
}

function previousCard() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCard();
    }
}

// Function to navigate to specific alphabet from grid
function goToAlphabet(letter) {
    window.location.href = `alphabet.html?letter=${letter}`;
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' && document.getElementById('nextBtn')) {
        nextCard();
    }
    if (e.key === 'ArrowLeft' && document.getElementById('prevBtn')) {
        previousCard();
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the alphabet card page
    if (document.getElementById('cardContent')) {
        const urlParams = new URLSearchParams(window.location.search);
        const letter = urlParams.get('letter') || 'A';
        const letterIndex = letter.charCodeAt(0) - 65;
        if (letterIndex >= 0 && letterIndex < 26) {
            currentIndex = letterIndex;
            updateCard();
        }
    }
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add active state to current page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Handle browser back/forward buttons
window.addEventListener('popstate', function(event) {
    if (event.state && event.state.letter) {
        const letterIndex = event.state.letter.charCodeAt(0) - 65;
        if (letterIndex >= 0 && letterIndex < 26) {
            currentIndex = letterIndex;
            updateCard();
        }
    }
});

// Add hover effects for alphabet buttons
document.querySelectorAll('.alphabet-btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.05)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add loading animation for images
function handleImageLoad(img) {
    img.style.opacity = '0';
    img.onload = function() {
        img.style.transition = 'opacity 0.5s ease';
        img.style.opacity = '1';
    };
}

// Initialize any images on the page
document.querySelectorAll('img').forEach(img => {
    if (!img.complete) {
        handleImageLoad(img);
    }
});
  /* Flashcard Quiz --------------------------------------------------------- */
  function initFlashQuiz(){
    const card = document.getElementById('flashCard');
    if (!card) return false;

    const deckMeta = document.getElementById('deckMeta');
    const flipBtn = document.getElementById('flipCard');
    const prevBtn = document.getElementById('prevCard');
    const nextBtn = document.getElementById('nextCard');
    const knewBtn = document.getElementById('knewIt');
    const shuffleBtn = document.getElementById('shuffle');

    const frontTitle = document.getElementById('frontTitle');
    const frontPrompt = document.getElementById('frontPrompt');
    const backTitle = document.getElementById('backTitle');
    const backText = document.getElementById('backText');
    const backExtra = document.getElementById('backExtra');

    // Simple sounds using Web Audio (no files)
    const AudioC = window.AudioContext || window.webkitAudioContext;
    const audioCtx = AudioC ? new AudioC() : null;
    function beep(freq=660, time=0.12, type='sine', vol=0.15){
      if (!audioCtx) return;
      const o = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      o.type = type; o.frequency.value = freq;
      g.gain.value = vol;
      o.connect(g); g.connect(audioCtx.destination);
      o.start(); o.stop(audioCtx.currentTime + time);
    }
    function success(){ beep(880, .09, 'triangle', .12); setTimeout(()=>beep(1160,.1,'triangle',.12), 90); }
    function flipSound(){ beep(520,.06,'square',.08); }

    let idx = 0;
    let order = Array.from({length: LETTERS.length}, (_,i)=>i);

    function render(){
      const [L, W, def, act] = LETTERS[order[idx]];
      frontTitle.textContent = `${L} — ${W}`;
      frontPrompt.textContent = `What does “${W}” mean?`;
      backTitle.textContent = W;
      backText.textContent = def;
      backExtra.textContent = `Try it: ${act}`;
      deckMeta.textContent = `Card ${idx+1} of ${order.length}`;
      card.classList.remove('is-flipped');
    }

    function next(n=1){
      idx = (idx + n + order.length) % order.length;
      render();
    }

    card.addEventListener('click', ()=>{ card.classList.toggle('is-flipped'); flipSound(); });
    flipBtn && flipBtn.addEventListener('click', ()=>{ card.classList.toggle('is-flipped'); flipSound(); });
    prevBtn && prevBtn.addEventListener('click', ()=> next(-1));
    nextBtn && nextBtn.addEventListener('click', ()=> next(1));
    knewBtn && knewBtn.addEventListener('click', ()=>{ success(); next(1); });
    shuffleBtn && shuffleBtn.addEventListener('click', ()=>{
      order.sort(()=>Math.random()-0.5);
      idx = 0;
      render();
    });

    render();
    return true;
  }
  document.addEventListener('DOMContentLoaded', ()=>{ initFlashQuiz(); });
