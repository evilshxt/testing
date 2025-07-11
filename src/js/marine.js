// Marine Page Specific JavaScript
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AOS from 'aos';
import '../css/main.css';
import "../css/assets.css";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize AOS
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Hero section animations
    const heroTitle = document.getElementById('hero-title');
    const ctaTitle = document.getElementById('cta-title');
    
    if (heroTitle) {
        gsap.from(heroTitle, {
            duration: 1.5,
            y: 100,
            opacity: 0,
            ease: "power3.out"
        });
    }
    
    if (ctaTitle) {
        gsap.from(ctaTitle, {
            scrollTrigger: {
                trigger: ctaTitle,
                start: "top 80%"
            },
            duration: 1,
            y: 50,
            opacity: 0,
            ease: "power2.out"
        });
    }

    // Product cards hover effects
    const productCards = document.querySelectorAll('.bg-white.rounded-2xl.shadow-lg');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            gsap.to(this, {
                duration: 0.3,
                y: -5,
                scale: 1.02,
                ease: "power2.out"
            });
        });
        
        card.addEventListener('mouseleave', function() {
            gsap.to(this, {
                duration: 0.3,
                y: 0,
                scale: 1,
                ease: "power2.out"
            });
        });
    });

    // Stats counter animation
    const statsNumbers = document.querySelectorAll('.text-4xl.font-bold.text-\\[\\#3e78b2\\]');
    statsNumbers.forEach(stat => {
        const finalValue = stat.textContent;
        const isPercentage = finalValue.includes('%');
        const isTime = finalValue.includes('/');
        
        gsap.from(stat, {
            scrollTrigger: {
                trigger: stat,
                start: "top 80%"
            },
            duration: 2,
            textContent: 0,
            ease: "power2.out",
            onUpdate: function() {
                if (isPercentage) {
                    stat.textContent = Math.round(this.targets()[0].textContent) + '%';
                } else if (isTime) {
                    stat.textContent = Math.round(this.targets()[0].textContent) + '/7';
                } else {
                    stat.textContent = Math.round(this.targets()[0].textContent) + '+';
                }
            },
            onComplete: function() {
                stat.textContent = finalValue;
            }
        });
    });

    // Workflow steps animation
    const workflowSteps = document.querySelectorAll('.flex-1.text-center');
    workflowSteps.forEach((step, index) => {
        gsap.from(step, {
            scrollTrigger: {
                trigger: step,
                start: "top 90%"
            },
            duration: 0.8,
            y: 30,
            opacity: 0,
            delay: index * 0.2,
            ease: "power2.out"
        });
    });

    // Partner logos animation
    const partnerLogos = document.querySelectorAll('.bg-white.rounded-lg.p-6.shadow-md');
    partnerLogos.forEach((logo, index) => {
        gsap.from(logo, {
            scrollTrigger: {
                trigger: logo,
                start: "top 85%"
            },
            duration: 0.6,
            scale: 0.8,
            opacity: 0,
            delay: index * 0.1,
            ease: "back.out(1.7)"
        });
    });

    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                        y: targetElement,
                        offsetY: 100
                    },
                    ease: "power2.inOut"
                });
            }
        });
    });

    // CTA button hover effect
    const ctaButtons = document.querySelectorAll('.bg-\\[\\#3e78b2\\].hover\\:bg-\\[\\#004ba8\\]');
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            gsap.to(this, {
                duration: 0.3,
                scale: 1.05,
                ease: "power2.out"
            });
        });
        
        button.addEventListener('mouseleave', function() {
            gsap.to(this, {
                duration: 0.3,
                scale: 1,
                ease: "power2.out"
            });
        });
    });

    // Parallax effect for hero background
    const heroSection = document.querySelector('.relative.h-screen');
    if (heroSection) {
        gsap.to(heroSection, {
            scrollTrigger: {
                trigger: heroSection,
                start: "top top",
                end: "bottom top",
                scrub: true
            },
            y: 100,
            ease: "none"
        });
    }

    // Mobile menu functionality
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            const isHidden = mobileMenu.classList.contains('hidden');
            
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                gsap.from(mobileMenu, {
                    duration: 0.3,
                    opacity: 0,
                    y: -20,
                    ease: "power2.out"
                });
            } else {
                gsap.to(mobileMenu, {
                    duration: 0.3,
                    opacity: 0,
                    y: -20,
                    ease: "power2.out",
                    onComplete: () => {
                        mobileMenu.classList.add('hidden');
                    }
                });
            }
        });
    }

    // Mobile dropdown functionality
    const mobileDropdowns = ['aboutMobile', 'industriesMobile', 'solutionsMobile', 'insightsMobile'];
    mobileDropdowns.forEach(dropdownId => {
        const button = document.getElementById(dropdownId);
        const content = document.getElementById(dropdownId + 'Content');
        
        if (button && content) {
            button.addEventListener('click', function() {
                const isHidden = content.classList.contains('hidden');
                const icon = this.querySelector('i');
                
                if (isHidden) {
                    content.classList.remove('hidden');
                    icon.classList.remove('fa-chevron-down');
                    icon.classList.add('fa-chevron-up');
                } else {
                    content.classList.add('hidden');
                    icon.classList.remove('fa-chevron-up');
                    icon.classList.add('fa-chevron-down');
                }
            });
        }
    });

    // Authentication functionality
    const authButton = document.getElementById('authButton');
    const authButtonMobile = document.getElementById('authButtonMobile');
    const loginModal = document.getElementById('loginModal');
    const logoutModal = document.getElementById('logoutModal');
    const closeModal = document.getElementById('closeModal');
    const googleLoginBtn = document.getElementById('googleLoginBtn');
    const confirmLogoutBtn = document.getElementById('confirmLogoutBtn');
    const cancelLogoutBtn = document.getElementById('cancelLogoutBtn');

    // Check authentication status on page load
    updateAuthUI();

    // Auth button click handlers
    if (authButton) {
        authButton.addEventListener('click', function() {
            if (isAuthenticated()) {
                logoutModal.classList.remove('hidden');
            } else {
                loginModal.classList.remove('hidden');
            }
        });
    }

    if (authButtonMobile) {
        authButtonMobile.addEventListener('click', function() {
            if (isAuthenticated()) {
                logoutModal.classList.remove('hidden');
            } else {
                loginModal.classList.remove('hidden');
            }
        });
    }

    // Modal close handlers
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            loginModal.classList.add('hidden');
        });
    }

    if (cancelLogoutBtn) {
        cancelLogoutBtn.addEventListener('click', function() {
            logoutModal.classList.add('hidden');
        });
    }

    // Google login handler
    if (googleLoginBtn) {
        googleLoginBtn.addEventListener('click', async function() {
            try {
                // Simulate Google login
                showToast('Logging in with Google...', 'info');
                
                // Simulate authentication delay
                setTimeout(() => {
                    localStorage.setItem('isAuthenticated', 'true');
                    localStorage.setItem('userEmail', 'user@ascender.tech');
                    updateAuthUI();
                    loginModal.classList.add('hidden');
                    showToast('Successfully logged in!', 'success');
                }, 1500);
                
            } catch (error) {
                showToast('Login failed. Please try again.', 'error');
            }
        });
    }

    // Logout handler
    if (confirmLogoutBtn) {
        confirmLogoutBtn.addEventListener('click', function() {
            localStorage.removeItem('isAuthenticated');
            localStorage.removeItem('userEmail');
            updateAuthUI();
            logoutModal.classList.add('hidden');
            showToast('Successfully logged out!', 'success');
        });
    }

    // Close modals when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === loginModal) {
            loginModal.classList.add('hidden');
        }
        if (event.target === logoutModal) {
            logoutModal.classList.add('hidden');
        }
    });

    function updateAuthUI() {
        const isLoggedIn = isAuthenticated();
        const userEmail = localStorage.getItem('userEmail');
        
        if (authButton) {
            if (isLoggedIn) {
                authButton.innerHTML = '<i class="fas fa-user"></i><span>Logout</span>';
                authButton.classList.remove('bg-white', 'text-ucla-blue', 'border-ucla-blue');
                authButton.classList.add('bg-red-500', 'text-white', 'border-red-500');
            } else {
                authButton.innerHTML = '<i class="fas fa-sign-in-alt"></i><span>Login</span>';
                authButton.classList.remove('bg-red-500', 'text-white', 'border-red-500');
                authButton.classList.add('bg-white', 'text-ucla-blue', 'border-ucla-blue');
            }
        }
        
        if (authButtonMobile) {
            if (isLoggedIn) {
                authButtonMobile.innerHTML = '<i class="fas fa-user"></i><span>Logout</span>';
                authButtonMobile.classList.remove('bg-ucla-blue', 'text-white');
                authButtonMobile.classList.add('bg-red-500', 'text-white');
            } else {
                authButtonMobile.innerHTML = '<i class="fas fa-sign-in-alt"></i><span>Login</span>';
                authButtonMobile.classList.remove('bg-red-500', 'text-white');
                authButtonMobile.classList.add('bg-ucla-blue', 'text-white');
            }
        }
    }

    function isAuthenticated() {
        return localStorage.getItem('isAuthenticated') === 'true';
    }

    function showToast(message, type = 'info') {
        const toastContainer = document.getElementById('toastContainer');
        if (!toastContainer) return;

        const toast = document.createElement('div');
        toast.className = `px-4 py-3 rounded-lg shadow-lg text-white transform translate-x-full transition-all duration-300 ${
            type === 'success' ? 'bg-green-500' :
            type === 'error' ? 'bg-red-500' :
            type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
        }`;
        toast.textContent = message;

        toastContainer.appendChild(toast);

        // Animate in
        setTimeout(() => {
            toast.classList.remove('translate-x-full');
        }, 100);

        // Animate out and remove
        setTimeout(() => {
            toast.classList.add('translate-x-full');
            setTimeout(() => {
                toastContainer.removeChild(toast);
            }, 300);
        }, 3000);
    }
});
