console.log('QMUN 2025 - Enhanced Website Starting');

// Enhanced initialization when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, starting enhanced initialization');
    initializeQMUNWebsite();
});

function initializeQMUNWebsite() {
    console.log('Initializing QMUN website...');
    
    // Show home page initially
    showPage('home');
    
    // Set up all enhanced navigation
    setupEnhancedNavigation();
    
    // Setup elegant dropdown menus
    setupDropdownMenus();
    
    // Start countdown with enhanced animations
    setupEnhancedCountdown();
    
    // Setup sophisticated forms
    setupElegantForms();
    
    // Initialize scroll animations
    setupScrollAnimations();
    
    // Setup enhanced interactions
    setupElegantInteractions();
    
    // Initialize accessibility features
    setupAccessibilityFeatures();
    
    // Setup team section interactions
    setupTeamInteractions();
    
    // Setup Google Forms
    setupGoogleForms();
    
    console.log('QMUN website initialized successfully');
}

// Enhanced page navigation system
function showPage(pageId) {
    console.log('Showing page with elegant transition:', pageId);
    
    // Hide all pages immediately
    const allPages = document.querySelectorAll('.page');
    allPages.forEach(page => {
        page.classList.remove('active');
        page.style.display = 'none';
    });
    
    // Show target page immediately
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.style.display = 'block';
        targetPage.classList.add('active');
        
        // Smooth scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Update navigation
        updateNavigation(pageId);
        
        // Update URL hash
        if (window.location.hash !== '#' + pageId) {
            window.history.pushState(null, '', '#' + pageId);
        }
        
        console.log('Page shown successfully:', pageId);
    } else {
        console.error('Page not found:', pageId);
    }
}

function updateNavigation(activePageId) {
    // Update nav links with elegant highlighting
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === activePageId) {
            link.classList.add('active');
        }
    });
    
    // Update dropdown items
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-page') === activePageId) {
            item.classList.add('active');
        }
    });
}

function setupEnhancedNavigation() {
    console.log('Setting up enhanced navigation...');
    
    // Main navigation links - handle both with and without data-page
    const allNavLinks = document.querySelectorAll('.nav-link');
    console.log('Found all nav links:', allNavLinks.length);
    
    allNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const page = this.getAttribute('data-page');
            const href = this.getAttribute('href');
            
            if (page) {
                console.log('Nav link clicked with data-page:', page);
                showPage(page);
                closeAllDropdowns();
            } else if (href && href.startsWith('#')) {
                const pageFromHref = href.substring(1);
                console.log('Nav link clicked with href:', pageFromHref);
                if (document.getElementById(pageFromHref)) {
                    showPage(pageFromHref);
                    closeAllDropdowns();
                }
            }
        });
    });
    
    // Committee and preview cards
    const committeeCards = document.querySelectorAll('.committee-card, .committee-preview-card');
    console.log('Found committee cards:', committeeCards.length);
    
    committeeCards.forEach(card => {
        card.style.cursor = 'pointer';
        card.setAttribute('tabindex', '0');
        
        card.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const committee = this.getAttribute('data-committee');
            if (committee) {
                console.log('Committee card clicked:', committee);
                showPage(committee);
            }
        });
        
        // Enhanced keyboard accessibility
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const committee = this.getAttribute('data-committee');
                if (committee) {
                    console.log('Committee card keyboard activated:', committee);
                    showPage(committee);
                }
            }
        });
    });
    
    // Back buttons
    const backBtns = document.querySelectorAll('.back-btn');
    console.log('Found back buttons:', backBtns.length);
    
    backBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const page = this.getAttribute('data-page');
            if (page) {
                console.log('Back button clicked:', page);
                showPage(page);
            }
        });
    });
    
    // Dropdown navigation items
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    console.log('Found dropdown items:', dropdownItems.length);
    
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const page = this.getAttribute('data-page');
            const href = this.getAttribute('href');
            
            if (page) {
                console.log('Dropdown item clicked with data-page:', page);
                showPage(page);
                closeAllDropdowns();
            } else if (href && href.startsWith('#')) {
                const pageFromHref = href.substring(1);
                console.log('Dropdown item clicked with href:', pageFromHref);
                if (document.getElementById(pageFromHref)) {
                    showPage(pageFromHref);
                    closeAllDropdowns();
                }
            }
        });
    });
    
    // Footer links
    const footerLinks = document.querySelectorAll('.footer-links a');
    console.log('Found footer links:', footerLinks.length);
    
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const page = this.getAttribute('data-page');
            const href = this.getAttribute('href');
            
            if (page) {
                console.log('Footer link clicked with data-page:', page);
                showPage(page);
            } else if (href && href.startsWith('#')) {
                const pageFromHref = href.substring(1);
                console.log('Footer link clicked with href:', pageFromHref);
                if (document.getElementById(pageFromHref)) {
                    showPage(pageFromHref);
                }
            }
        });
    });
    
    // Any other links with data-page attribute
    const dataPageLinks = document.querySelectorAll('[data-page]:not(.nav-link):not(.dropdown-item):not(.footer-links a):not(.back-btn)');
    console.log('Found other data-page links:', dataPageLinks.length);
    
    dataPageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const page = this.getAttribute('data-page');
            if (page) {
                console.log('Data-page link clicked:', page);
                showPage(page);
            }
        });
    });
    
    console.log('Enhanced navigation setup complete');
}

// Sophisticated dropdown menu system
function setupDropdownMenus() {
    console.log('Setting up elegant dropdown menus...');
    
    const dropdownWrappers = document.querySelectorAll('.dropdown-wrapper');
    
    dropdownWrappers.forEach(wrapper => {
        const trigger = wrapper.querySelector('.nav-link');
        const menu = wrapper.querySelector('.dropdown-menu');
        
        if (!menu) return;
        
        // Create elegant dropdown menu
        menu.style.cssText = `
            position: absolute;
            top: 100%;
            left: 0;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(192, 192, 192, 0.2);
            border-radius: 16px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            padding: 12px;
            min-width: 220px;
            z-index: 1000;
            opacity: 0;
            visibility: hidden;
            transform: translateY(-10px);
            transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        `;
        
        // Style dropdown items
        const items = menu.querySelectorAll('.dropdown-item');
        items.forEach(item => {
            item.style.cssText = `
                display: block;
                padding: 12px 16px;
                color: #2C2C2C;
                text-decoration: none;
                border-radius: 12px;
                font-family: 'Inter', sans-serif;
                font-weight: 500;
                font-size: 14px;
                transition: all 0.2s ease;
                border: 1px solid transparent;
                margin-bottom: 4px;
                cursor: pointer;
            `;
            
            // Hover effects for dropdown items
            item.addEventListener('mouseenter', function() {
                this.style.background = 'rgba(75, 0, 130, 0.08)';
                this.style.color = '#4B0082';
                this.style.transform = 'translateX(4px)';
                this.style.borderColor = 'rgba(75, 0, 130, 0.15)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.background = '';
                this.style.color = '#2C2C2C';
                this.style.transform = '';
                this.style.borderColor = 'transparent';
            });
        });
        
        // Show dropdown on hover
        wrapper.addEventListener('mouseenter', function() {
            closeAllDropdowns();
            menu.style.opacity = '1';
            menu.style.visibility = 'visible';
            menu.style.transform = 'translateY(0)';
        });
        
        // Hide dropdown
        wrapper.addEventListener('mouseleave', function() {
            setTimeout(() => {
                menu.style.opacity = '0';
                menu.style.visibility = 'hidden';
                menu.style.transform = 'translateY(-10px)';
            }, 100);
        });
        
        // Keep dropdown open when hovering over menu
        menu.addEventListener('mouseenter', function() {
            this.style.opacity = '1';
            this.style.visibility = 'visible';
            this.style.transform = 'translateY(0)';
        });
        
        // Position wrapper relatively
        wrapper.style.position = 'relative';
    });
    
    console.log('Elegant dropdown menus initialized');
}

function closeAllDropdowns() {
    const dropdownMenus = document.querySelectorAll('.dropdown-menu');
    dropdownMenus.forEach(menu => {
        menu.style.opacity = '0';
        menu.style.visibility = 'hidden';
        menu.style.transform = 'translateY(-10px)';
    });
}

// Enhanced countdown with sophisticated animations
function setupEnhancedCountdown() {
    console.log('Setting up enhanced countdown timer...');
    
    // Target date: November 1, 2025 at 9:00 AM IST
    const targetDate = new Date('2025-11-12T09:00:00+05:30').getTime();
    
    function updateCountdownWithAnimation() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        const daysElement = document.getElementById('days');
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');
        
        if (!daysElement || !hoursElement || !minutesElement || !secondsElement) {
            return;
        }
        
        if (distance < 0) {
            // Event has passed - show elegant completion
            updateCountdownNumber(daysElement, '00');
            updateCountdownNumber(hoursElement, '00');
            updateCountdownNumber(minutesElement, '00');
            updateCountdownNumber(secondsElement, '00');
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Update with elegant animations
        updateCountdownNumber(daysElement, days.toString().padStart(2, '0'));
        updateCountdownNumber(hoursElement, hours.toString().padStart(2, '0'));
        updateCountdownNumber(minutesElement, minutes.toString().padStart(2, '0'));
        updateCountdownNumber(secondsElement, seconds.toString().padStart(2, '0'));
    }
    
    function updateCountdownNumber(element, newValue) {
        if (element.textContent !== newValue) {
            element.style.transform = 'rotateX(90deg)';
            element.style.opacity = '0.5';
            
            setTimeout(() => {
                element.textContent = newValue;
                element.style.transform = 'rotateX(0deg)';
                element.style.opacity = '1';
            }, 150);
        }
    }
    
    // Add transition styles to countdown numbers
    const countdownNumbers = document.querySelectorAll('.countdown-number');
    countdownNumbers.forEach(number => {
        number.style.transition = 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    });
    
    // Update immediately and then every second
    updateCountdownWithAnimation();
    setInterval(updateCountdownWithAnimation, 1000);
    console.log('Enhanced countdown timer initialized');
}

// Sophisticated form handling
function setupElegantForms() {
    console.log('Setting up elegant forms...');
    
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Contact form submitted elegantly');
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            // Show elegant loading state
            submitBtn.innerHTML = '<span>Sending...</span>';
            submitBtn.disabled = true;
            submitBtn.classList.add('loading');
            
            const formData = {
                name: document.getElementById('contactName')?.value.trim(),
                email: document.getElementById('contactEmail')?.value.trim(),
                subject: document.getElementById('subject')?.value.trim(),
                message: document.getElementById('message')?.value.trim()
            };
            
            // Enhanced validation
            const validation = validateContactForm(formData);
            
            setTimeout(() => {
                if (validation.isValid) {
                    showElegantMessage('Your message has been sent successfully! We will respond within 24 hours.', 'success');
                    this.reset();
                    addFloatingSuccess(submitBtn);
                } else {
                    showElegantMessage(validation.message, 'error');
                    shakeForm(this);
                }
                
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                submitBtn.classList.remove('loading');
            }, 1500);
        });
        
        // Add elegant focus effects
        const formControls = contactForm.querySelectorAll('.form-control');
        formControls.forEach(control => {
            control.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
                addFloatingLabel(this);
            });
            
            control.addEventListener('blur', function() {
                this.parentElement.classList.remove('focused');
                if (!this.value) {
                    removeFloatingLabel(this);
                }
            });
        });
        
        console.log('Contact form handler set up with elegance');
    }
    
    console.log('Elegant forms setup complete');
}

function validateContactForm(data) {
    if (!data.name || data.name.length < 2) {
        return { isValid: false, message: 'Please enter your full name (at least 2 characters).' };
    }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailPattern.test(data.email)) {
        return { isValid: false, message: 'Please enter a valid email address.' };
    }
    
    if (!data.subject || data.subject.length < 5) {
        return { isValid: false, message: 'Please provide a meaningful subject (at least 5 characters).' };
    }
    
    if (!data.message || data.message.length < 20) {
        return { isValid: false, message: 'Please provide a detailed message (at least 20 characters).' };
    }
    
    return { isValid: true };
}

// Elegant message system
function showElegantMessage(message, type) {
    console.log(`Showing elegant message: ${type} - ${message}`);
    
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.elegant-message');
    existingMessages.forEach(msg => msg.remove());
    
    // Create elegant message
    const messageElement = document.createElement('div');
    messageElement.className = `elegant-message elegant-message--${type}`;
    messageElement.innerHTML = `
        <div class="message-content">
            <span class="message-text">${message}</span>
            <button class="message-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    
    // Style the message
    messageElement.style.cssText = `
        position: fixed;
        top: 24px;
        right: 24px;
        background: ${type === 'success' ? 'rgba(75, 0, 130, 0.95)' : 'rgba(220, 53, 69, 0.95)'};
        color: white;
        padding: 20px 24px;
        border-radius: 16px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(20px);
        z-index: 2000;
        max-width: 400px;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        font-family: 'Inter', sans-serif;
        font-weight: 500;
    `;
    
    messageElement.querySelector('.message-content').style.cssText = `
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
    `;
    
    messageElement.querySelector('.message-close').style.cssText = `
        background: rgba(255, 255, 255, 0.2);
        border: none;
        color: white;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        cursor: pointer;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
        flex-shrink: 0;
    `;
    
    document.body.appendChild(messageElement);
    
    // Animate in
    requestAnimationFrame(() => {
        messageElement.style.opacity = '1';
        messageElement.style.transform = 'translateX(0)';
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (messageElement.parentNode) {
            messageElement.style.opacity = '0';
            messageElement.style.transform = 'translateX(100%)';
            setTimeout(() => messageElement.remove(), 400);
        }
    }, 5000);
}

// Sophisticated scroll animations
function setupScrollAnimations() {
    console.log('Setting up scroll animations...');
    
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    
                    // Stagger animations for grid items
                    if (entry.target.classList.contains('committee-preview-card') || 
                        entry.target.classList.contains('date-item') ||
                        entry.target.classList.contains('team-card')) {
                        const siblings = Array.from(entry.target.parentElement.children);
                        const index = siblings.indexOf(entry.target);
                        entry.target.style.animationDelay = `${index * 0.1}s`;
                    }
                }
            });
        }, observerOptions);

        // Observe all animatable elements
        const animatableElements = document.querySelectorAll(`
            .committee-preview-card,
            .date-item,
            .team-card,
            .message-card,
            .committee-card,
            .card
        `);
        
        animatableElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            observer.observe(el);
        });
        
        // Add CSS for animate-in class
        const style = document.createElement('style');
        style.textContent = `
            .animate-in {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
        `;
        document.head.appendChild(style);
    }
    
    console.log('Scroll animations initialized');
}

// Enhanced interactions and micro-animations
function setupElegantInteractions() {
    console.log('Setting up elegant interactions...');
    
    // Add ripple effects to buttons and cards
    document.addEventListener('click', function(e) {
        const target = e.target.closest('.btn, .committee-card, .committee-preview-card, .team-card');
        if (target) {
            addRippleEffect(target, e);
        }
    });
    
    // Add hover effects to cards
    const cards = document.querySelectorAll('.card, .committee-card, .committee-preview-card, .team-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (this.style.transform && this.style.transform.includes('translateY')) {
                return; // Don't override existing transform
            }
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
    
    // Add elegant focus states
    const focusableElements = document.querySelectorAll('button, a, input, textarea, [tabindex]');
    focusableElements.forEach(el => {
        el.addEventListener('focus', function() {
            this.style.outline = 'none';
            this.style.boxShadow = '0 0 0 3px rgba(75, 0, 130, 0.3)';
        });
        
        el.addEventListener('blur', function() {
            this.style.boxShadow = '';
        });
    });
    
    console.log('Elegant interactions initialized');
}

// Team section specific interactions
function setupTeamInteractions() {
    console.log('Setting up team section interactions...');
    
    const teamCards = document.querySelectorAll('.team-card');
    teamCards.forEach(card => {
        const placeholder = card.querySelector('.member-image-placeholder');
        const initials = card.querySelector('.member-initials');
        
        if (placeholder && initials) {
            // Enhanced hover effects for team member placeholders
            card.addEventListener('mouseenter', function() {
                placeholder.style.transform = 'scale(1.05) rotate(2deg)';
                placeholder.style.boxShadow = '0 15px 35px rgba(75, 0, 130, 0.3)';
                initials.style.transform = 'scale(1.1)';
                initials.style.textShadow = '0 4px 12px rgba(0, 0, 0, 0.4)';
            });
            
            card.addEventListener('mouseleave', function() {
                placeholder.style.transform = '';
                placeholder.style.boxShadow = '';
                initials.style.transform = '';
                initials.style.textShadow = '';
            });
            
            // Add click effect to team cards
            card.addEventListener('click', function(e) {
                // Create a subtle pulse effect
                placeholder.style.animation = 'teamPulse 0.6s ease-out';
                setTimeout(() => {
                    placeholder.style.animation = '';
                }, 600);
                
                // Add ripple effect
                addRippleEffect(this, e);
            });
        }
    });
    
    // Add team pulse animation
    const teamStyle = document.createElement('style');
    teamStyle.textContent = `
        @keyframes teamPulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(teamStyle);
    
    console.log('Team section interactions initialized');
}

// Accessibility enhancements
function setupAccessibilityFeatures() {
    console.log('Setting up accessibility features...');
    
    // Keyboard navigation for interactive elements
    const interactiveElements = document.querySelectorAll('[data-committee], [data-page]');
    interactiveElements.forEach(el => {
        if (!el.getAttribute('tabindex')) {
            el.setAttribute('tabindex', '0');
        }
        
        el.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    console.log('Accessibility features initialized');
}

// Setup Google Forms
function setupGoogleForms() {
    console.log('Setting up Google Forms...');
    
    const googleFormLinks = document.querySelectorAll('a[href*="forms.google.com"]');
    googleFormLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            showElegantMessage('Opening registration form in a new tab...', 'success');
        });
    });
    
    console.log('Google Forms setup complete');
}

// Utility functions for elegant effects
function addRippleEffect(element, event) {
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const ripple = document.createElement('div');
    ripple.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: rgba(255, 255, 255, 0.6);
        border-radius: 50%;
        pointer-events: none;
        transform: translate(-50%, -50%);
        left: ${x}px;
        top: ${y}px;
        animation: ripple 0.6s ease-out forwards;
    `;
    
    // Ensure element has relative positioning
    const originalPosition = element.style.position;
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
        if (!originalPosition) {
            element.style.position = '';
        }
    }, 600);
}

function addFloatingLabel(input) {
    const label = input.previousElementSibling;
    if (label && label.classList.contains('form-label')) {
        label.style.transform = 'translateY(-8px) scale(0.85)';
        label.style.color = '#4B0082';
    }
}

function removeFloatingLabel(input) {
    const label = input.previousElementSibling;
    if (label && label.classList.contains('form-label')) {
        label.style.transform = '';
        label.style.color = '';
    }
}

function addFloatingSuccess(button) {
    const success = document.createElement('div');
    success.textContent = '✓';
    success.style.cssText = `
        position: absolute;
        top: -10px;
        right: -10px;
        background: #28a745;
        color: white;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        animation: successPop 0.5s ease-out forwards;
    `;
    
    button.style.position = 'relative';
    button.appendChild(success);
    
    setTimeout(() => success.remove(), 2000);
}

function shakeForm(form) {
    form.style.animation = 'shake 0.5s ease-in-out';
    setTimeout(() => {
        form.style.animation = '';
    }, 500);
}

// Enhanced CSS animations
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    @keyframes ripple {
        to {
            transform: translate(-50%, -50%) scale(75);
            opacity: 0;
        }
    }
    
    @keyframes successPop {
        0% { transform: scale(0) rotate(0deg); }
        50% { transform: scale(1.2) rotate(180deg); }
        100% { transform: scale(1) rotate(360deg); }
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
    
    .loading::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 16px;
        height: 16px;
        margin: -8px 0 0 -8px;
        border: 2px solid transparent;
        border-top: 2px solid rgba(255, 255, 255, 0.7);
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(animationStyles);

// Handle browser navigation
window.addEventListener('popstate', function(e) {
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
        showPage(hash);
    } else {
        showPage('home');
    }
});

// Enhanced keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // ESC key to return home
    if (e.key === 'Escape') {
        showPage('home');
        showElegantMessage('Returned to home page', 'success');
    }
    
    // Alt + number keys for quick navigation
    if (e.altKey) {
        const keyMap = {
            '1': 'home',
            '2': 'committees', 
            '3': 'registration',
            '4': 'team',
            '5': 'contact'
        };
        
        if (keyMap[e.key]) {
            e.preventDefault();
            showPage(keyMap[e.key]);
            showElegantMessage(`Quick navigation to ${keyMap[e.key]}`, 'success');
        }
    }
});

// Error handling for images
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        console.warn('Image failed to load:', e.target.src);
        e.target.style.opacity = '0.3';
        e.target.style.background = 'linear-gradient(135deg, #4B0082, #36005C)';
    }
}, true);

// Handle page load from URL hash
window.addEventListener('load', function() {
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
        console.log('Loading page from URL hash:', hash);
        showPage(hash);
    }
});

// Enhanced initialization check
function checkInitialization() {
    const requiredElements = [
        '#home',
        '#committees', 
        '#team',
        '#countdown',
        '.nav-link'
    ];
    
    const missing = requiredElements.filter(selector => !document.querySelector(selector));
    
    if (missing.length > 0) {
        console.error('Missing required elements:', missing);
    } else {
        console.log('All required elements found - website ready');
        
        // Test a navigation link immediately after initialization
        setTimeout(() => {
            console.log('Testing navigation...');
            const testLink = document.querySelector('.nav-link[data-page="committees"]');
            if (testLink) {
                console.log('Navigation test link found, clicking...');
                testLink.click();
                
                setTimeout(() => {
                    console.log('Returning to home...');
                    const homeLink = document.querySelector('.nav-link[data-page="home"]');
                    if (homeLink) {
                        homeLink.click();
                    } else {
                        showPage('home');
                    }
                }, 1000);
            }
        }, 2000);
    }
}

// Final initialization
if (document.readyState === 'loading') {
    console.log('Document loading, waiting for initialization...');
} else {
    console.log('Document ready, starting initialization...');
    initializeQMUNWebsite();
    checkInitialization();
}

console.log('QMUN 2025 JavaScript loaded successfully');
