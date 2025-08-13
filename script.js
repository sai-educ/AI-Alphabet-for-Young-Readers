// AI Alphabet for Young Readers - Enhanced JavaScript with Flash Cards Quiz

// Quiz Data
const quizData = [
    { letter: 'A', word: 'Algorithm', definition: 'A set of steps a computer follows to solve a problem or do a job.', hint: 'A set of steps a computer follows to solve a problem', funFact: 'The word "algorithm" comes from the name of a 9th-century Persian mathematician, Al-Khwarizmi!' },
    { letter: 'B', word: 'Bot', definition: 'A computer program that you can talk to or type to, and it will answer you.', hint: 'A computer program that you can talk to', funFact: 'The first chatbot was created in 1966 and was called ELIZA!' },
    { letter: 'C', word: 'Code', definition: 'A special language that people write to tell computers what to do.', hint: 'A special language that tells computers what to do', funFact: 'The first computer program was written by Ada Lovelace in 1843!' },
    { letter: 'D', word: 'Data', definition: 'Words, numbers, pictures, or anything that tells us something.', hint: 'Information like words, numbers, or pictures', funFact: 'Every day, we create 2.5 quintillion bytes of data!' },
    { letter: 'E', word: 'Ethics', definition: 'Knowing right from wrong and making good choices.', hint: 'Knowing right from wrong', funFact: 'AI ethics helps ensure robots and computers make fair decisions!' },
    { letter: 'F', word: 'Fake', definition: 'Something that looks real but is not real.', hint: 'Something that looks real but isn\'t', funFact: 'AI can create images of people who have never existed!' },
    { letter: 'G', word: 'Glitch', definition: 'A tiny problem that makes something not work right.', hint: 'A small problem that causes errors', funFact: 'The term "bug" for computer glitches came from a real moth found in a computer in 1947!' },
    { letter: 'H', word: 'Hallucination', definition: 'When a computer or robot makes something up that is not true or not real.', hint: 'When AI makes things up', funFact: 'AI hallucinations happen when the computer is too creative with its answers!' },
    { letter: 'I', word: 'Internet', definition: 'A big invisible web that connects computers everywhere.', hint: 'A network connecting computers worldwide', funFact: 'The Internet connects over 5 billion people around the world!' },
    { letter: 'J', word: 'Judgement', definition: 'Making a good choice or deciding what is right.', hint: 'Making good decisions', funFact: 'AI uses judgement to help doctors diagnose diseases!' },
    { letter: 'K', word: 'Keyword', definition: 'An important word that helps you understand what something is about.', hint: 'Important words that help you search', funFact: 'Search engines use keywords to find what you\'re looking for among billions of web pages!' },
    { letter: 'L', word: 'Literacy', definition: 'Being able to read and understand words and images.', hint: 'Being able to read and understand', funFact: 'Digital literacy is just as important as reading books!' },
    { letter: 'M', word: 'Machine Learning', definition: 'A computer learns from data to get better at a task.', hint: 'How computers learn from examples', funFact: 'Machine learning helps Netflix suggest shows you might like!' },
    { letter: 'N', word: 'Neural Network', definition: 'A special kind of computer brain that helps a computer learn.', hint: 'A computer brain that learns', funFact: 'Neural networks are inspired by how human brains work!' },
    { letter: 'O', word: 'Object Spotter', definition: 'A computer tool that can identify objects in pictures or videos.', hint: 'AI that identifies things in images', funFact: 'Object spotters help self-driving cars see pedestrians and traffic signs!' },
    { letter: 'P', word: 'Prompt', definition: 'A little helper that gives you an idea or tells you what to do.', hint: 'Instructions you give to AI', funFact: 'A good prompt can help AI create amazing stories and art!' },
    { letter: 'Q', word: 'Query', definition: 'A question you ask a computer.', hint: 'A question for computers', funFact: 'Google processes over 8.5 billion queries every day!' },
    { letter: 'R', word: 'Robot', definition: 'A machine that can move, follow steps, and sometimes think using AI.', hint: 'A machine that can move and think', funFact: 'The word "robot" comes from a Czech word meaning "forced work"!' },
    { letter: 'S', word: 'Siri', definition: 'A helpful voice assistant you can talk to.', hint: 'Apple\'s voice assistant', funFact: 'Siri answers 25 billion requests per month!' },
    { letter: 'T', word: 'Turing Test', definition: 'A test to see if a computer can talk like a human.', hint: 'A test for computer intelligence', funFact: 'The Turing Test was created by Alan Turing in 1950!' },
    { letter: 'U', word: 'Unplug', definition: 'Take a break from screens and technology.', hint: 'Taking a break from technology', funFact: 'Taking tech breaks helps your brain recharge and be more creative!' },
    { letter: 'V', word: 'Voice Recognition', definition: 'A computer can listen to your voice and understand your words.', hint: 'Computers understanding speech', funFact: 'Voice recognition can understand over 100 different languages!' },
    { letter: 'W', word: 'WiFi', definition: 'How devices connect to the Internet without wires.', hint: 'Wireless internet connection', funFact: 'WiFi signals travel at the speed of light!' },
    { letter: 'X', word: 'eXploration', definition: 'Trying new things to learn or solve problems.', hint: 'Discovering and learning new things', funFact: 'AI helps scientists explore space and the deep ocean!' },
    { letter: 'Y', word: 'You', definition: 'The person using the computer or asking questions.', hint: 'The user of technology', funFact: 'You are the most important part of any technology!' },
    { letter: 'Z', word: 'Zeroes and Ones', definition: 'The binary code that computers use to think.', hint: 'Binary code computers use', funFact: 'Everything on a computer is made of just 0s and 1s!' }
];

// Quiz Variables
let currentQuestionIndex = 0;
let score = 0;
let streak = 0;

// Sound Effects (using Web Audio API for better browser compatibility)
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

function playSuccessSound() {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
    oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
    oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2); // G5
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
}

function playErrorSound() {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(300, audioContext.currentTime);
    oscillator.frequency.setValueAtTime(200, audioContext.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
}

// Confetti Effect
function createConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FECA57', '#FF9FF3'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            confettiContainer.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 3000);
        }, i * 30);
    }
}

// Show/hide sections
function showSection(sectionName) {
    // Hide all sections
    const allSections = document.querySelectorAll('.home-section, .letter-section');
    allSections.forEach(section => {
        section.style.display = 'none';
        section.classList.remove('active');
    });
    
    // Show the requested section
    const targetSection = document.getElementById(sectionName);
    if (targetSection) {
        targetSection.style.display = 'block';
        targetSection.classList.add('active');
        
        // Smooth scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // Update URL without page reload
        updateURL(sectionName);
        
        // If flashcards section, initialize quiz
        if (sectionName === 'flashcards') {
            initializeQuiz();
        }
    }
}

// Show specific letter
function showLetter(letter) {
    showSection('letter-' + letter);
}

// Update URL for better navigation
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
    document.querySelector('.hint').textContent = `"${question.hint}"`;
    
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
    
    if (userAnswer === correctAnswer || 
        (correctAnswer.includes(' ') && userAnswer === correctAnswer.split(' ')[0].toLowerCase()) ||
        (correctAnswer === 'machine learning' && userAnswer === 'machine') ||
        (correctAnswer === 'neural network' && userAnswer === 'neural') ||
        (correctAnswer === 'object spotter' && userAnswer === 'object') ||
        (correctAnswer === 'voice recognition' && userAnswer === 'voice') ||
        (correctAnswer === 'turing test' && userAnswer === 'turing') ||
        (correctAnswer === 'zeroes and ones' && (userAnswer === 'zeroes' || userAnswer === 'zeros'))) {
        
        // Correct answer
        resultIcon.textContent = '🎉';
        resultIcon.style.color = '#2DCE89';
        score++;
        streak++;
        playSuccessSound();
        createConfetti();
    } else {
        // Wrong answer
        resultIcon.textContent = '🤔';
        resultIcon.style.color = '#F5365C';
        streak = 0;
        playErrorSound();
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
    currentQuestionIndex = (currentQuestionIndex + 1) % quizData.length;
    loadQuestion();
}

// Skip Question
function skipQuestion() {
    streak = 0;
    nextQuestion();
}

// Reset Quiz
function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    streak = 0;
    loadQuestion();
    updateStats();
}

// Update Stats
function updateStats() {
    document.getElementById('quiz-score').textContent = score;
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
    document.getElementById('quiz-streak').textContent = streak;
}

// Handle Enter key for answer submission
document.addEventListener('DOMContentLoaded', function() {
    const answerInput = document.getElementById('answer-input');
    if (answerInput) {
        answerInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkAnswer();
            }
        });
    }
});

// Handle browser back/forward buttons
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

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check if there's a hash in the URL
    if (window.location.hash) {
        const section = window.location.hash.substring(1);
        showSection(section);
    } else {
        showSection('home');
    }
    
    // Add smooth scrolling for all internal links
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
    
    // Add animation to hero cards
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
    
    // Observe feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});

// Export functions for global use
window.showSection = showSection;
window.showLetter = showLetter;
window.checkAnswer = checkAnswer;
window.nextQuestion = nextQuestion;
window.skipQuestion = skipQuestion;
window.resetQuiz = resetQuiz;