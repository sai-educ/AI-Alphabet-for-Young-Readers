// ===== KID-FRIENDLY AI ALPHABET JAVASCRIPT =====

// Quiz Data with Fun Facts
const quizData = [
    { letter: 'A', word: 'Algorithm', definition: 'A set of steps a computer follows to solve a problem or do a job.', hint: 'A set of steps a computer follows to solve a problem', funFact: '🎯 The word "algorithm" comes from a mathematician named Al-Khwarizmi who lived over 1000 years ago!' },
    { letter: 'B', word: 'Bot', definition: 'A computer program that you can talk to or type to, and it will answer you.', hint: 'A computer program that you can talk to', funFact: '🤖 The first chatbot ELIZA was created in 1966 - that\'s older than your parents!' },
    { letter: 'C', word: 'Code', definition: 'A special language that people write to tell computers what to do.', hint: 'A special language that tells computers what to do', funFact: '💻 The first computer programmer was a woman named Ada Lovelace in 1843!' },
    { letter: 'D', word: 'Data', definition: 'Words, numbers, pictures, or anything that tells us something.', hint: 'Information like words, numbers, or pictures', funFact: '📊 Every day, the world creates enough data to fill 10 million Blu-ray discs!' },
    { letter: 'E', word: 'Ethics', definition: 'Knowing right from wrong and making good choices.', hint: 'Knowing right from wrong', funFact: '⚖️ AI ethics helps robots make fair decisions, just like how you learn to share toys!' },
    { letter: 'F', word: 'Fake', definition: 'Something that looks real but is not real.', hint: 'Something that looks real but isn\'t', funFact: '🎭 AI can create pictures of unicorns that look real, but we know unicorns are imaginary!' },
    { letter: 'G', word: 'Glitch', definition: 'A tiny problem that makes something not work right.', hint: 'A small problem that causes errors', funFact: '⚡ The first computer "bug" was a real moth that got stuck in a computer!' },
    { letter: 'H', word: 'Hallucination', definition: 'When a computer or robot makes something up that is not true.', hint: 'When AI makes things up', funFact: '💭 Sometimes AI gets too creative and tells silly stories that aren\'t true!' },
    { letter: 'I', word: 'Internet', definition: 'A big invisible web that connects computers everywhere.', hint: 'A network connecting computers worldwide', funFact: '🌐 The Internet connects over 5 billion people - that\'s more than half the world!' },
    { letter: 'J', word: 'Judgement', definition: 'Making a good choice or deciding what is right.', hint: 'Making good decisions', funFact: '🤔 AI helps doctors make better decisions about keeping people healthy!' },
    { letter: 'K', word: 'Keyword', definition: 'An important word that helps you understand what something is about.', hint: 'Important words that help you search', funFact: '🔑 Google searches through 100 billion web pages in less than a second!' },
    { letter: 'L', word: 'Literacy', definition: 'Being able to read and understand words and images.', hint: 'Being able to read and understand', funFact: '📖 Learning about AI is as important as learning to read books!' },
    { letter: 'M', word: 'Machine Learning', definition: 'A computer learns from data to get better at a task.', hint: 'How computers learn from examples', funFact: '🧠 Netflix uses machine learning to guess what shows you\'ll love!' },
    { letter: 'N', word: 'Neural Network', definition: 'A special kind of computer brain that helps a computer learn.', hint: 'A computer brain that learns', funFact: '🕸️ Neural networks work like your brain - with lots of connections!' },
    { letter: 'O', word: 'Object Spotter', definition: 'A computer tool that can identify objects in pictures.', hint: 'AI that identifies things in images', funFact: '👁️ Object spotters help self-driving cars see stop signs and people!' },
    { letter: 'P', word: 'Prompt', definition: 'A little helper that gives you an idea or tells you what to do.', hint: 'Instructions you give to AI', funFact: '✍️ A good prompt is like a magic spell that helps AI create amazing things!' },
    { letter: 'Q', word: 'Query', definition: 'A question you ask a computer.', hint: 'A question for computers', funFact: '❓ People ask Google over 8 billion questions every single day!' },
    { letter: 'R', word: 'Robot', definition: 'A machine that can move, follow steps, and sometimes think using AI.', hint: 'A machine that can move and think', funFact: '🤖 The word "robot" comes from a Czech word meaning "worker"!' },
    { letter: 'S', word: 'Siri', definition: 'A helpful voice assistant you can talk to.', hint: 'Apple\'s voice assistant', funFact: '🗣️ Siri answers 25 billion questions every month - that\'s a lot of talking!' },
    { letter: 'T', word: 'Turing Test', definition: 'A test to see if a computer can talk like a human.', hint: 'A test for computer intelligence', funFact: '🧪 Alan Turing invented this test in 1950 - before computers fit on desks!' },
    { letter: 'U', word: 'Unplug', definition: 'Take a break from screens and technology.', hint: 'Taking a break from technology', funFact: '🔌 Playing outside helps your brain grow stronger and more creative!' },
    { letter: 'V', word: 'Voice Recognition', definition: 'A computer can listen to your voice and understand your words.', hint: 'Computers understanding speech', funFact: '🎤 Voice recognition can understand over 100 different languages!' },
    { letter: 'W', word: 'WiFi', definition: 'How devices connect to the Internet without wires.', hint: 'Wireless internet connection', funFact: '📶 WiFi signals travel at the speed of light - 186,000 miles per second!' },
    { letter: 'X', word: 'eXploration', definition: 'Trying new things to learn or solve problems.', hint: 'Discovering and learning new things', funFact: '🔍 AI helps scientists explore space and the deepest parts of the ocean!' },
    { letter: 'Y', word: 'You', definition: 'The person using the computer or asking questions.', hint: 'The user of technology', funFact: '👦 YOU are the most important part of any technology!' },
    { letter: 'Z', word: 'Zeroes and Ones', definition: 'The binary code that computers use to think.', hint: 'Binary code computers use', funFact: '0️⃣1️⃣ Everything on your computer is made of just 0s and 1s - even games!' }
];

// Quiz Variables
let currentQuestionIndex = 0;
let score = 0;
let streak = 0;
let highScore = localStorage.getItem('aiAlphabetHighScore') || 0;

// Fun Sound Effects using Web Audio API
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

function playSound(type) {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    switch(type) {
        case 'success':
            // Happy ascending notes
            oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
            oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
            oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2); // G5
            oscillator.frequency.setValueAtTime(1046.50, audioContext.currentTime + 0.3); // C6
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
            oscillator.stop(audioContext.currentTime + 0.5);
            break;
            
        case 'error':
            // Gentle descending notes
            oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
            oscillator.frequency.setValueAtTime(350, audioContext.currentTime + 0.1);
            oscillator.frequency.setValueAtTime(300, audioContext.currentTime + 0.2);
            gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
            oscillator.stop(audioContext.currentTime + 0.3);
            break;
            
        case 'click':
            // Quick click sound
            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);
            oscillator.stop(audioContext.currentTime + 0.05);
            break;
            
        case 'achievement':
            // Celebration sound
            oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime);
            oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1);
            oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2);
            oscillator.frequency.setValueAtTime(1046.50, audioContext.currentTime + 0.3);
            oscillator.frequency.setValueAtTime(1318.51, audioContext.currentTime + 0.4);
            gainNode.gain.setValueAtTime(0.4, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.6);
            oscillator.stop(audioContext.currentTime + 0.6);
            break;
    }
    
    oscillator.start(audioContext.currentTime);
}

// Enhanced Confetti Effect
function createConfetti(intensity = 50) {
    const confettiContainer = document.getElementById('confetti-container');
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FECA57', '#FF9FF3', '#667EEA', '#43E97B'];
    const shapes = ['circle', 'square', 'star'];
    
    for (let i = 0; i < intensity; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            
            // Random shapes
            const shape = shapes[Math.floor(Math.random() * shapes.length)];
            if (shape === 'circle') {
                confetti.style.borderRadius = '50%';
            } else if (shape === 'star') {
                confetti.innerHTML = '⭐';
                confetti.style.backgroundColor = 'transparent';
            }
            
            confettiContainer.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 3000);
        }, i * 30);
    }
}

// Show Celebration Message
function showCelebration(message) {
    const celebrationEl = document.getElementById('celebration-message');
    celebrationEl.textContent = message;
    celebrationEl.style.display = 'block';
    
    setTimeout(() => {
        celebrationEl.style.display = 'none';
    }, 2000);
}

// Show/hide sections with animation
function showSection(sectionName) {
    playSound('click');
    
    // Hide all sections
    const allSections = document.querySelectorAll('.home-section, .letter-section, .quiz-section, .alphabet-section, .about-section, .letter-detail-section');
    allSections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Show the requested section
    const targetSection = document.getElementById(sectionName);
    if (targetSection) {
        targetSection.style.display = 'block';
        
        // Add entrance animation
        targetSection.style.animation = 'slideIn 0.5s ease-out';
        
        // Smooth scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // Update URL
        updateURL(sectionName);
        
        // Initialize quiz if needed
        if (sectionName === 'flashcards') {
            initializeQuiz();
        }
    }
}

// Show specific letter
function showLetter(letter) {
    playSound('click');
    
    // Hide all sections
    const allSections = document.querySelectorAll('.home-section, .letter-section, .quiz-section, .alphabet-section, .about-section, .letter-detail-section');
    allSections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Show letter section
    const letterSection = document.getElementById('letter-' + letter);
    if (letterSection) {
        letterSection.style.display = 'block';
        letterSection.style.animation = 'slideIn 0.5s ease-out';
    }
}

// Update URL
function updateURL(section) {
    const url = new URL(window.location);
    url.hash = section;
    window.history.pushState({ section: section }, '', url);
}

// Initialize Quiz
function initializeQuiz() {
    currentQuestionIndex = 0;
    loadQuestion();
    updateStats();
}

// Load Question
function loadQuestion() {
    const question = quizData[currentQuestionIndex];
    const flashcard = document.getElementById('flashcard');
    
    // Reset flashcard
    flashcard.classList.remove('flipped');
    
    // Update front of card
    document.getElementById('card-letter').textContent = question.letter;
    document.getElementById('question-hint').textContent = `"${question.hint}"`;
    
    // Clear input
    const input = document.getElementById('answer-input');
    input.value = '';
    input.focus();
    
    // Update stats
    updateStats();
}

// Check Answer
function checkAnswer() {
    const userAnswer = document.getElementById('answer-input').value.trim().toLowerCase();
    const correctAnswer = quizData[currentQuestionIndex].word.toLowerCase();
    const flashcard = document.getElementById('flashcard');
    
    // Update back of card
    const resultIcon = document.getElementById('result-icon');
    const resultWord = document.getElementById('result-word');
    const resultDefinition = document.getElementById('result-definition');
    const funFact = document.getElementById('fun-fact');
    
    // Check various acceptable answers
    let isCorrect = false;
    if (userAnswer === correctAnswer || 
        (correctAnswer.includes(' ') && userAnswer === correctAnswer.split(' ')[0].toLowerCase()) ||
        (correctAnswer === 'machine learning' && userAnswer === 'machine') ||
        (correctAnswer === 'neural network' && userAnswer === 'neural') ||
        (correctAnswer === 'object spotter' && userAnswer === 'object') ||
        (correctAnswer === 'voice recognition' && userAnswer === 'voice') ||
        (correctAnswer === 'turing test' && userAnswer === 'turing') ||
        (correctAnswer === 'zeroes and ones' && (userAnswer === 'zeroes' || userAnswer === 'zeros' || userAnswer === '01'))) {
        isCorrect = true;
    }
    
    if (isCorrect) {
        // Correct answer
        resultIcon.textContent = '🎉';
        resultIcon.style.color = '#10B981';
        score++;
        streak++;
        playSound('success');
        createConfetti(30);
        
        // Check for achievements
        if (streak === 5) {
            showCelebration('🔥 5 in a row! Amazing!');
            playSound('achievement');
            createConfetti(50);
        } else if (streak === 10) {
            showCelebration('⭐ 10 streak! You\'re a star!');
            playSound('achievement');
            createConfetti(75);
        }
        
        // Update high score
        if (score > highScore) {
            highScore = score;
            localStorage.setItem('aiAlphabetHighScore', highScore);
            showCelebration('🏆 New High Score!');
        }
    } else {
        // Wrong answer
        resultIcon.textContent = '🤔';
        resultIcon.style.color = '#EF4444';
        streak = 0;
        playSound('error');
    }
    
    // Update card content
    resultWord.textContent = quizData[currentQuestionIndex].word;
    resultDefinition.textContent = quizData[currentQuestionIndex].definition;
    funFact.textContent = quizData[currentQuestionIndex].funFact;
    
    // Flip card
    flashcard.classList.add('flipped');
    
    // Update stats
    updateStats();
}

// Next Question
function nextQuestion() {
    playSound('click');
    currentQuestionIndex = (currentQuestionIndex + 1) % quizData.length;
    
    // Check if completed all questions
    if (currentQuestionIndex === 0 && score > 0) {
        showCelebration('🎊 You completed all questions!');
        playSound('achievement');
        createConfetti(100);
    }
    
    loadQuestion();
}

// Skip Question
function skipQuestion() {
    playSound('click');
    streak = 0;
    nextQuestion();
}

// Reset Quiz
function resetQuiz() {
    playSound('click');
    currentQuestionIndex = 0;
    score = 0;
    streak = 0;
    loadQuestion();
    updateStats();
}

// Update Stats with Animation
function updateStats() {
    const scoreEl = document.getElementById('quiz-score');
    const currentQuestionEl = document.getElementById('current-question');
    const streakEl = document.getElementById('quiz-streak');
    
    // Animate score change
    if (scoreEl.textContent !== score.toString()) {
        scoreEl.style.transform = 'scale(1.3)';
        setTimeout(() => {
            scoreEl.style.transform = 'scale(1)';
        }, 300);
    }
    
    scoreEl.textContent = score;
    currentQuestionEl.textContent = currentQuestionIndex + 1;
    
    // Animate streak with fire effect
    streakEl.textContent = streak;
    if (streak > 0) {
        streakEl.parentElement.parentElement.style.background = 
            `linear-gradient(135deg, #FCD34D, #FB923C)`;
    } else {
        streakEl.parentElement.parentElement.style.background = 
            `linear-gradient(135deg, #FCE7F3, #EC4899)`;
    }
}

// Add fun hover effects to tiles
function addTileEffects() {
    const tiles = document.querySelectorAll('.abc-tile');
    tiles.forEach(tile => {
        tile.addEventListener('mouseenter', () => {
            playSound('click');
        });
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check URL hash
    if (window.location.hash) {
        const section = window.location.hash.substring(1);
        showSection(section);
    } else {
        showSection('home');
    }
    
    // Add tile effects
    addTileEffects();
    
    // Handle answer input enter key
    const answerInput = document.getElementById('answer-input');
    if (answerInput) {
        answerInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkAnswer();
            }
        });
    }
    
    // Add button click sounds
    document.querySelectorAll('button').forEach(button => {
        if (!button.onclick) {
            button.addEventListener('click', () => {
                playSound('click');
            });
        }
    });
    
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe cards for animation
    const cards = document.querySelectorAll('.adventure-card, .fun-fact-item');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
    
    // Fun welcome message
    console.log('%c🤖 Welcome to AI Alphabet Adventure! 🌈', 
        'font-size: 20px; color: #8B5CF6; font-weight: bold;');
    console.log('%cHave fun learning about AI!', 
        'font-size: 16px; color: #EC4899;');
});

// Handle browser navigation
window.addEventListener('popstate', function(event) {
    if (event.state && event.state.section) {
        showSection(event.state.section);
    } else if (window.location.hash) {
        const section = window.location.hash.substring(1);
        showSection(section);
    } else {
        showSection('home');
    }
});

// Export functions for global use
window.showSection = showSection;
window.showLetter = showLetter;
window.checkAnswer = checkAnswer;
window.nextQuestion = nextQuestion;
window.skipQuestion = skipQuestion;
window.resetQuiz = resetQuiz;
