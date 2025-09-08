// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeFormHandlers();
    initializeAnimations();
});

// Navigation functionality
function initializeNavigation() {
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
            
            // Show corresponding page with smooth transition
            const targetPage = this.getAttribute('data-page');
            const targetElement = document.getElementById(targetPage);
            
            if (targetElement) {
                targetElement.classList.add('active');
                
                // Smooth scroll to top
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Form handlers
function initializeFormHandlers() {
    // Non-anonymous form button
    const nonAnonymousBtn = document.getElementById('nonAnonymousForm');
    if (nonAnonymousBtn) {
        nonAnonymousBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Replace with your actual Google Form URL
            window.open('https://docs.google.com/forms/d/e/YOUR_NON_ANONYMOUS_FORM_ID/viewform', '_blank');
        });
    }
    
    // Anonymous form button
    const anonymousBtn = document.getElementById('anonymousForm');
    if (anonymousBtn) {
        anonymousBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Replace with your actual Google Form URL
            window.open('https://docs.google.com/forms/d/e/YOUR_ANONYMOUS_FORM_ID/viewform', '_blank');
        });
    }
}

// Initialize animations and interactions
function initializeAnimations() {
    // Smooth hover effects for glass cards
    const glassCards = document.querySelectorAll('.glass-card');
    
    glassCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards for animation
    glassCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Typewriter effect for name (optional)
    const nameElement = document.querySelector('.name');
    if (nameElement) {
        const originalText = nameElement.textContent;
        
        // Add a subtle typing animation on load
        setTimeout(() => {
            nameElement.style.borderRight = '2px solid var(--accent-color)';
            nameElement.style.animation = 'blink 1s infinite';
            
            setTimeout(() => {
                nameElement.style.borderRight = 'none';
                nameElement.style.animation = 'none';
            }, 3000);
        }, 1000);
    }
}

// Add CSS for blinking cursor animation
const style = document.createElement('style');
style.textContent = `
    @keyframes blink {
        0%, 50% { border-color: var(--accent-color); }
        51%, 100% { border-color: transparent; }
    }
    
    .fade-in {
        animation: fadeInUp 0.8s ease-out;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Add smooth scrolling for any anchor links
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

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    const navLinks = document.querySelectorAll('.nav-link');
    const activeLink = document.querySelector('.nav-link.active');
    
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault();
        
        const currentIndex = Array.from(navLinks).indexOf(activeLink);
        let newIndex;
        
        if (e.key === 'ArrowLeft') {
            newIndex = currentIndex > 0 ? currentIndex - 1 : navLinks.length - 1;
        } else {
            newIndex = currentIndex < navLinks.length - 1 ? currentIndex + 1 : 0;
        }
        
        navLinks[newIndex].click();
    }
});
