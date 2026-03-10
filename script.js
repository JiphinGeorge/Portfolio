document.addEventListener('DOMContentLoaded', () => {
    
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    /* =========================================================================
       Custom Cursor
       ========================================================================= */
    const cursorDot = document.querySelector("[data-cursor-dot]");
    const cursorOutline = document.querySelector("[data-cursor-outline]");
    
    // Track mouse position
    window.addEventListener("mousemove", function (e) {
        const posX = e.clientX;
        const posY = e.clientY;
        
        // Dot follows instantly
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
        
        // Outline follows with a slight delay using GSAP
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Add hover effect to clickable elements
    const clickables = document.querySelectorAll('a, button, .clickable');
    
    clickables.forEach((el) => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.classList.add('hover');
        });
        el.addEventListener('mouseleave', () => {
            cursorOutline.classList.remove('hover');
        });
    });

    /* =========================================================================
       Navbar Scroll Effect
       ========================================================================= */
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /* =========================================================================
       Mobile Navigation
       ========================================================================= */
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li');
    
    hamburger.addEventListener('click', () => {
        // Toggle Nav
        navLinks.classList.toggle('nav-active');
        
        // Animate Links
        navItems.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Burger Animation
        hamburger.classList.toggle('toggle');
    });

    // Close mobile nav when clicking a link
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('nav-active')) {
                navLinks.classList.remove('nav-active');
                hamburger.classList.remove('toggle');
                navItems.forEach(link => link.style.animation = '');
            }
        });
    });

    /* =========================================================================
       Scroll To Top Button
       ========================================================================= */
    const scrollTopBtn = document.querySelector('.scroll-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    /* =========================================================================
       Active Section Highlight
       ========================================================================= */
    const sections = document.querySelectorAll('section');
    const navItemsList = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });
        
        navItemsList.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').slice(1) === current) {
                item.classList.add('active');
            }
        });
    });

/* =========================================================================
       Typing Effect
       ========================================================================= */
    const typingText = document.querySelector('.typing-text');
    const skills = [
        "Flutter Developer", 
        "Python Developer", 
        "AI & Chatbot Developer", 
        "Full Stack Developer"
    ];
    
    let skillIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeEffect() {
        const currentSkill = skills[skillIndex];
        
        if (isDeleting) {
            typingText.textContent = currentSkill.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50; // Faster when deleting
        } else {
            typingText.textContent = currentSkill.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100; // Normal speed typing
        }

        if (!isDeleting && charIndex === currentSkill.length) {
            // Pause at the end of typing
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // Move to next skill
            isDeleting = false;
            skillIndex = (skillIndex + 1) % skills.length;
            typingSpeed = 500; // Pause before typing next word
        }

        setTimeout(typeEffect, typingSpeed);
    }

    // Start typing effect
    if(typingText) {
        setTimeout(typeEffect, 1000);
    }

    /* =========================================================================
       GSAP Scroll Animations
       ========================================================================= */
    // Hero Section Animations
    gsap.from(".greeting", { opacity: 0, y: 30, duration: 1, delay: 0.2, ease: "power3.out" });
    gsap.from(".hero-name", { opacity: 0, y: 30, duration: 1, delay: 0.3, ease: "power3.out" });
    gsap.from(".hero-tagline", { opacity: 0, y: 30, duration: 1, delay: 0.4, ease: "power3.out" });
    gsap.from(".hero-intro", { opacity: 0, y: 30, duration: 1, delay: 0.5, ease: "power3.out" });
    gsap.from(".hero-cta", { opacity: 0, y: 30, duration: 1, delay: 0.6, ease: "power3.out" });
    gsap.from(".hero-socials", { opacity: 0, y: 30, duration: 1, delay: 0.7, ease: "power3.out" });
    gsap.from(".hero-visual", { opacity: 0, scale: 0.8, x: 50, duration: 1.2, delay: 0.5, ease: "back.out(1.7)" });

    // About Section Animations
    gsap.from("#about .section-title", {
        scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8
    });

    gsap.from(".about-text p", {
        scrollTrigger: {
            trigger: ".about-text",
            start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
    });

    gsap.from(".timeline-item", {
        scrollTrigger: {
            trigger: ".timeline",
            start: "top 80%",
        },
        x: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
    });

    // Skills Section Animations
    gsap.from("#skills .section-title", {
        scrollTrigger: {
            trigger: "#skills",
            start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8
    });

    gsap.from(".skill-category", {
        scrollTrigger: {
            trigger: ".skills-container",
            start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
    });

    gsap.from(".skill-card", {
        scrollTrigger: {
            trigger: ".skills-container",
            start: "top 70%",
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05
    });

    // Projects Section Animations
    gsap.from("#projects .section-title", {
        scrollTrigger: {
            trigger: "#projects",
            start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8
    });

    gsap.utils.toArray(".project-card").forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 90%",
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: (i % 3) * 0.15 // pseudo-stagger per row
        });
    });

    // Certifications Section Animations
    gsap.from("#certifications .section-title", {
        scrollTrigger: {
            trigger: "#certifications",
            start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8
    });

    gsap.utils.toArray(".cert-card").forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 90%",
            },
            y: 30,
            opacity: 0,
            duration: 0.6,
            delay: (i % 3) * 0.15
        });
    });

    // Experience Section Animations
    gsap.from("#experience .section-title", {
        scrollTrigger: {
            trigger: "#experience",
            start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8
    });

    gsap.from(".experience-card", {
        scrollTrigger: {
            trigger: "#experience",
            start: "top 75%",
        },
        x: -50,
        opacity: 0,
        duration: 0.8
    });

    // Contact Section Animations
    gsap.from("#contact .section-title", {
        scrollTrigger: {
            trigger: "#contact",
            start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8
    });

    gsap.from(".contact-info", {
        scrollTrigger: {
            trigger: ".contact-container",
            start: "top 80%",
        },
        x: -50,
        opacity: 0,
        duration: 0.8
    });

    gsap.from(".contact-form", {
        scrollTrigger: {
            trigger: ".contact-container",
            start: "top 80%",
        },
        x: 50,
        opacity: 0,
        duration: 0.8
    });

});

// Add keyframes for mobile nav link animation dynamically
const style = document.createElement('style');
style.innerHTML = `
    @keyframes navLinkFade {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(style);
