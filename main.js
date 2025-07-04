// Main JavaScript for Ascender Technologies

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing app...');
    initializeApp();
});



// Initialize application
function initializeApp() {
    console.log('Initializing app...');
    initIconFallbacks();
    initMobileMenu();
    initSmoothScroll();
    initScrollAnimations();
    initParallax();
    initContactForm();
    initNavbarScroll();
    initCounters();
    initLazyLoading();
    initAccessibility();
}

// Icon fallback system
function initIconFallbacks() {
    console.log('Initializing icon fallbacks...');
    
    // Check if Iconify is loaded
    setTimeout(() => {
        const iconifyElements = document.querySelectorAll('iconify-icon');
        console.log('Found iconify elements:', iconifyElements.length);
        
        iconifyElements.forEach(element => {
            const icon = element.getAttribute('icon');
            const fallback = element.nextElementSibling;
            
            console.log('Icon element:', icon, 'has content:', element.innerHTML.length > 0);
            
            if (fallback && fallback.classList.contains('icon-fallback')) {
                // If iconify fails, show fallback
                if (!element.innerHTML || element.innerHTML.trim() === '') {
                    console.log('Showing fallback for:', icon);
                    element.style.display = 'none';
                    fallback.style.display = 'inline-block';
                }
            }
        });
    }, 1000);
}

// Mobile Menu Toggle
function initMobileMenu() {
    const toggle = document.getElementById('mobile-menu-toggle');
    const menu = document.getElementById('mobile-menu');
    
    if (toggle && menu) {
        toggle.addEventListener('click', function() {
            menu.classList.toggle('hidden');
            
            // Toggle icon
            const icon = toggle.querySelector('i');
            if (icon) {
                icon.className = menu.classList.contains('hidden') ? 'fas fa-bars text-2xl' : 'fas fa-times text-2xl';
            }
        });
        
        // Close menu when clicking links
        const links = menu.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                menu.classList.add('hidden');
                const icon = toggle.querySelector('i');
                if (icon) icon.className = 'fas fa-bars text-2xl';
            });
        });
    }
}

// Smooth Scroll for Navigation Links
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed nav
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll-based animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Parallax Effect
function initParallax() {
    const heroSection = document.querySelector('.hero-section');
    
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            const heroBg = heroSection.querySelector('.hero-bg img');
            if (heroBg) {
                heroBg.style.transform = `translateY(${rate}px)`;
            }
        });
    }
}

// Contact Form Handling
function initContactForm() {
    const contactForm = document.querySelector('#contact form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const company = formData.get('company');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !message) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
}

// Navbar Scroll Effect
function initNavbarScroll() {
    const navbar = document.querySelector('nav');
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                navbar.classList.add('bg-white/98');
                navbar.classList.remove('bg-white/95');
            } else {
                navbar.classList.add('bg-white/95');
                navbar.classList.remove('bg-white/98');
            }
        });
    }
}

// Animated Counters
function initCounters() {
    const counters = document.querySelectorAll('.stat-item .text-3xl');
    
    const countObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const text = target.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                
                if (number > 0) {
                    animateCounter(target, number, text);
                }
                
                countObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        countObserver.observe(counter);
    });
}

// Animate Counter
function animateCounter(element, target, originalText) {
    const duration = 2000;
    const start = 0;
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(start + (target - start) * easeOutQuart(progress));
        element.textContent = originalText.replace(/\d+/, current);
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Easing function
function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
}

// Lazy Loading for Images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.getAttribute('data-src');
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        }, { threshold: 0.1 });
        images.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers without IntersectionObserver
        images.forEach(img => {
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src');
        });
    }
}

// Show notification (toast)
function showNotification(message, type = 'info') {
    let notification = document.createElement('div');
    notification.className = `fixed top-6 right-6 z-50 px-6 py-4 rounded-lg shadow-lg text-white font-semibold transition-all duration-300 ${type === 'success' ? 'bg-cobalt-blue' : type === 'error' ? 'bg-red-600' : 'bg-outer-space'}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 400);
    }, 3000);
}

// Email validation
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Accessibility improvements
function initAccessibility() {
    // Trap focus in open dropdowns (desktop)
    const dropdowns = document.querySelectorAll('.dropdown-menu');
    dropdowns.forEach(menu => {
        menu.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                const focusable = menu.querySelectorAll('a, button');
                const first = focusable[0];
                const last = focusable[focusable.length - 1];
                if (e.shiftKey) {
                    if (document.activeElement === first) {
                        e.preventDefault();
                        last.focus();
                    }
                } else {
                    if (document.activeElement === last) {
                        e.preventDefault();
                        first.focus();
                    }
                }
            }
        });
    });
    // Add aria attributes to nav
    const nav = document.querySelector('nav');
    if (nav) {
        nav.setAttribute('role', 'navigation');
        nav.setAttribute('aria-label', 'Main Navigation');
    }
}