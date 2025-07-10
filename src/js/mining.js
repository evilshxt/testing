// Mining Page Specific JavaScript
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AOS from 'aos';
import "../css/main.css";
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

    // Mobile menu functionality (if needed)
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

    console.log('Mining page JavaScript loaded successfully!');
}); 