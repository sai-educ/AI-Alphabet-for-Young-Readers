// AI Alphabet for Young Readers - JavaScript

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
    }
}

// Show specific letter
function showLetter(letter) {
    showSection('letter-' + letter);
    
    // Track which letter was viewed (for analytics if needed)
    console.log('Viewing letter:', letter.toUpperCase());
}

// Update URL for better navigation
function updateURL(section) {
    const url = new URL(window.location);
    url.hash = section;
    window.history.pushState({ section: section }, '', url);
}

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
    
    // Add keyboard navigation
    setupKeyboardNavigation();
    
    // Add touch-friendly features for tablets
    setupTouchFeatures();
    
    // Initialize animations
    setupAnimations();
});

// Keyboard navigation
function setupKeyboardNavigation() {
    const letterButtons = document.querySelectorAll('.letter-btn');
    const currentLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let currentIndex = -1;
    
    document.addEventListener('keydown', function(e) {
        // Check if we're in the alphabet grid
        const alphabetSection = document.getElementById('alphabet');
        if (alphabetSection && alphabetSection.style.display !== 'none') {
            // Arrow key navigation
            if (e.key === 'ArrowRight' && currentIndex < currentLetters.length - 1) {
                currentIndex++;
                letterButtons[currentIndex].focus();
            } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
                currentIndex--;
                letterButtons[currentIndex].focus();
            } else if (e.key === 'ArrowDown' && currentIndex < currentLetters.length - 5) {
                currentIndex += 5;
                letterButtons[currentIndex].focus();
            } else if (e.key === 'ArrowUp' && currentIndex >= 5) {
                currentIndex -= 5;
                letterButtons[currentIndex].focus();
            }
        }
        
        // ESC key to go back to alphabet grid
        if (e.key === 'Escape') {
            const letterSections = document.querySelectorAll('.letter-section');
            let isInLetter = false;
            
            letterSections.forEach(section => {
                if (section.style.display !== 'none' && section.id !== 'alphabet') {
                    isInLetter = true;
                }
            });
            
            if (isInLetter) {
                showSection('alphabet');
            }
        }
    });
}

// Touch-friendly features for tablets
function setupTouchFeatures() {
    const letterButtons = document.querySelectorAll('.letter-btn');
    
    letterButtons.forEach(button => {
        // Add touch feedback
        button.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        button.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    });
}

// Setup animations
function setupAnimations() {
    // Animate letter cards on scroll
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
    
    // Observe activity cards
    const activityCards = document.querySelectorAll('.activity-card');
    activityCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
}

// Helper function to get next letter
function getNextLetter(currentLetter) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const currentIndex = alphabet.indexOf(currentLetter);
    
    if (currentIndex < alphabet.length - 1) {
        return alphabet[currentIndex + 1];
    }
    return null;
}

// Helper function to get previous letter
function getPreviousLetter(currentLetter) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const currentIndex = alphabet.indexOf(currentLetter);
    
    if (currentIndex > 0) {
        return alphabet[currentIndex - 1];
    }
    return null;
}

// Add progress indicator
function updateProgress(letter) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const progress = ((alphabet.indexOf(letter) + 1) / 26) * 100;
    
    // You can use this to show progress if needed
    console.log(`Progress: ${progress.toFixed(1)}% complete`);
}

// Print functionality for teachers
function printCurrentSection() {
    window.print();
}

// Add print button functionality if needed
document.addEventListener('DOMContentLoaded', function() {
    // Check if print button exists and add functionality
    const printButton = document.getElementById('printButton');
    if (printButton) {
        printButton.addEventListener('click', printCurrentSection);
    }
});

// Analytics or tracking (placeholder for future implementation)
function trackActivity(activity, details) {
    // This could be connected to Google Analytics or similar
    console.log('Activity tracked:', activity, details);
}

// Export functions for potential use in other scripts
window.AIAlphabet = {
    showSection: showSection,
    showLetter: showLetter,
    getNextLetter: getNextLetter,
    getPreviousLetter: getPreviousLetter,
    updateProgress: updateProgress,
    trackActivity: trackActivity
};