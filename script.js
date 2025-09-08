// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles
    initParticles();
    
    // Navigation handling
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and pages
            navLinks.forEach(nav => nav.classList.remove('active'));
            pages.forEach(page => page.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show corresponding page
            const targetPage = this.getAttribute('data-page');
            document.getElementById(targetPage).classList.add('active');
        });
    });
    
    // Form button handlers
    document.getElementById('nonAnonymousForm').addEventListener('click', function(e) {
        e.preventDefault();
        // Replace with your actual Google Form URL for non-anonymous
        window.open('https://docs.google.com/forms/d/e/YOUR_NON_ANONYMOUS_FORM_ID/viewform', '_blank');
    });
    
    document.getElementById('anonymousForm').addEventListener('click', function(e) {
        e.preventDefault();
        // Replace with your actual Google Form URL for anonymous
        window.open('https://docs.google.com/forms/d/e/YOUR_ANONYMOUS_FORM_ID/viewform', '_blank');
    });
    
    // Smooth scrolling for anchor links
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
});

// Particles.js configuration
function initParticles() {
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: ["#00f5ff", "#ff00ff", "#ffffff"]
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 0.6,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#00f5ff",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });
}

// Add dynamic typing effect for the name
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when home page is visible
document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('.name');
    const originalText = nameElement.textContent;
    
    // Start typing effect after a short delay
    setTimeout(() => {
        typeWriter(nameElement, originalText, 100);
    }, 1000);
});

// Add glitch effect to logo
function glitchEffect() {
    const logo = document.querySelector('.logo-text');
    const originalText = logo.textContent;
    const glitchChars = '!<>-_\\/[]{}—=+*^?#________';
    
    let iterations = 0;
    
    const interval = setInterval(() => {
        logo.textContent = originalText
            .split('')
            .map((letter, index) => {
                if (index < iterations) {
                    return originalText[index];
                }
                return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            })
            .join('');
        
        if (iterations >= originalText.length) {
            clearInterval(interval);
        }
        
        iterations += 1/3;
    }, 30);
}

// Trigger glitch effect periodically
setInterval(glitchEffect, 10000);

// Add floating animation to cards on hover
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.glass-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) rotateX(5deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0)';
        });
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe all cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.glass-card');
    cards.forEach(card => {
        observer.observe(card);
    });
});
