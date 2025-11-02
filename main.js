// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functions
    initLoader();
    initNavigation();
    initTypingEffect();
    initCodeEditor();
    renderProjects();
    renderDescription();
    renderExperience();
    renderSkills();
    renderSocialLinks();
    renderContactInfo();
    initScrollEffects();
    initFormHandling();
    initNavbarHighlight();
    initScrollAnimations();
});

// Loader Functionality
function initLoader() {
    const loader = document.getElementById('loader');
    
    setTimeout(() => {
        loader.classList.add('hidden');
        // Remove loader from DOM after animation
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, ANIMATION_CONFIG.loaderDuration);
}

// Navigation Functionality
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Typing Effect
function initTypingEffect() {
    const typingElement = document.getElementById('typing-text');
    if (!typingElement) return;

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeText() {
        const currentText = TYPING_TEXTS[textIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? ANIMATION_CONFIG.deletingSpeed : ANIMATION_CONFIG.typingSpeed;

        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = ANIMATION_CONFIG.pauseDuration;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % TYPING_TEXTS.length;
        }

        setTimeout(typeText, typeSpeed);
    }

    typeText();
}

// Code Editor Typing Effect
function initCodeEditor() {
    const codeElement = document.getElementById('code-typing');
    if (!codeElement) return;

    let charIndex = 0;
    const codeText = CODE_EDITOR_CONTENT;

    function typeCode() {
        if (charIndex < codeText.length) {
            const currentChar = codeText.charAt(charIndex);
            const currentText = codeText.substring(0, charIndex + 1);
            
            // Apply syntax highlighting
            codeElement.innerHTML = applySyntaxHighlighting(currentText);
            
            charIndex++;
            setTimeout(typeCode, ANIMATION_CONFIG.codeTypingSpeed);
        }
    }

    // Start typing after a delay
    setTimeout(typeCode, 1000);
}

// Apply syntax highlighting to code
function applySyntaxHighlighting(code) {
    return code
        .replace(/(const|let|var|function|return|console)/g, '<span class="keyword">$1</span>')
        .replace(/(".*?")/g, '<span class="string">$1</span>')
        .replace(/(\d+)/g, '<span class="number">$1</span>')
        .replace(/(name|role|company|experience|skills|passion|status):/g, '<span class="property">$1</span>:')
        .replace(/(\/\/.*)/g, '<span class="comment">$1</span>');
}

// Render Projects
function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;

    projectsGrid.innerHTML = '';

    PROJECTS.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card glass-effect';
    
    card.innerHTML = `
        <div class="project-image">
            <i class="${project.image} project-icon"></i>
        </div>
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
               
                <a href="${project.githubLink}" class="project-link" target="_blank">
                    <i class="fab fa-github"></i>
                    GitHub
                </a>
            </div>
        </div>
    `;

    return card;
}

// Render Experience Timeline
function renderExperience() {
    const timeline = document.querySelector('.timeline');
    if (!timeline) return;

    timeline.innerHTML = '';

    EXPERIENCE.forEach((exp, index) => {
        const timelineItem = createTimelineItem(exp, index);
        timeline.appendChild(timelineItem);
    });
}

function createTimelineItem(experience, index) {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    
    const isEven = index % 2 === 0;
    const contentClass = isEven ? 'timeline-content' : 'timeline-content timeline-content-left';
    
    item.innerHTML = `
        <div class="timeline-dot"></div>
        <div class="${contentClass} glass-effect">
            <div class="timeline-date">${experience.duration}</div>
            <h3 class="timeline-title">${experience.title}</h3>
            <h4 class="timeline-company">${experience.company}</h4>
            <p class="timeline-description">${experience.description}</p>
            <div class="timeline-skills">
                ${experience.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        </div>
    `;

    return item;
}

// Render Skills
function renderSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    if (!skillsGrid) return;

    skillsGrid.innerHTML = '';

    // Render Backend Skills
    const backendCategory = createSkillCategory('Backend Technologies', SKILLS.backend);
    skillsGrid.appendChild(backendCategory);

    // Render Frontend Skills
    const frontendCategory = createSkillCategory('Frontend Technologies', SKILLS.frontend);
    skillsGrid.appendChild(frontendCategory);

    //Render Database & framework skills
    const databaseCategory = createSkillCategory('Database & Framework', SKILLS.database);
    skillsGrid.appendChild(databaseCategory);

    //Render devOps & Methodology skills
    const devOpsCategory = createSkillCategory('DevOps & Methodologies', SKILLS.devOps);
    skillsGrid.appendChild(devOpsCategory);

    // Render Tools (if any)
    if (SKILLS.tools && SKILLS.tools.length > 0) {
        const toolsCategory = createSkillCategory('Tools & Technologies', SKILLS.tools);
        skillsGrid.appendChild(toolsCategory);
    }
}

function createSkillCategory(title, skills) {
    const category = document.createElement('div');
    category.className = 'skill-category';
    
    category.innerHTML = `
        <h3 class="category-title">${title}</h3>
        <div class="skills-list">
            ${skills.map(skill => createSkillItem(skill)).join('')}
        </div>
    `;

    return category;
}

function createSkillItem(skill) {
    return `
        <div class="skill-item glass-effect" data-level="${skill.level}">
            <i class="${skill.icon} skill-icon"></i>
            <span class="skill-name">${skill.name}</span>
        </div>
    `;
}

// Render Contact Information
function renderContactInfo() {
    renderContactDetails();
    renderSocialLinks();
}

function renderContactDetails() {
    const contactInfo = document.querySelector('.contact-info');
    if (!contactInfo) return;

    contactInfo.innerHTML = `
        <div class="contact-item glass-effect">
            <div class="contact-icon">
                <i class="fas fa-envelope"></i>
            </div>
            <div class="contact-details">
                <h3>Email</h3>
                <p>${CONTACT_INFO.email}</p>
            </div>
        </div>
        <div class="contact-item glass-effect">
            <div class="contact-icon">
                <i class="fas fa-phone"></i>
            </div>
            <div class="contact-details">
                <h3>Phone</h3>
                <p>${CONTACT_INFO.phone}</p>
            </div>
        </div>
        <div class="contact-item glass-effect">
            <div class="contact-icon">
                <i class="fas fa-map-marker-alt"></i>
            </div>
            <div class="contact-details">
                <h3>Location</h3>
                <p>${CONTACT_INFO.location}</p>
            </div>
        </div>
    `;
}

function renderSocialLinks() {
    const socialLinks = document.querySelector('.social-links');
    if (!socialLinks) return;

    socialLinks.innerHTML = CONTACT_INFO.socialLinks.map(social => `
        <a href="${social.url}" class="social-link glass-effect" target="_blank" title="${social.name}">
            <i class="${social.icon}"></i>
        </a>
    `).join('');
}

// Scroll Effects
function initScrollEffects() {
    // Navbar background on scroll
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(26, 15, 63, 0.95)';
        } else {
            navbar.style.background = 'rgba(26, 15, 63, 0.9)';
        }
    });

    // Scroll down button
    const scrollDown = document.querySelector('.scroll-down');
    if (scrollDown) {
        scrollDown.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = document.querySelector('#projects');
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
}

// Form Handling
function initFormHandling() {
    const contactForm = document.querySelector('.form');
    const resumeBtn = document.getElementById('resume-btn');

    // Contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = contactForm.querySelector('input[placeholder="Your Name"]').value;
            const email = contactForm.querySelector('input[placeholder="Your Email"]').value;
            const subject = contactForm.querySelector('input[placeholder="Subject"]').value;
            const message = contactForm.querySelector('textarea').value;

            // Simple validation
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }

            // Simulate form submission
            showNotification('Message sent successfully!', 'success');
            contactForm.reset();
        });
    }

    // Resume download
    if (resumeBtn) {
        resumeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showNotification('Resume download will be available soon!', 'info');
            window.open(PERSONAL_INFO.resumeLink, "_blank");
        });
    }
}

// Notification System
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${getNotificationIcon(type)}"></i>
        <span>${message}</span>
    `;22

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 10px;
        padding: 15px 20px;
        color: white;
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 10px;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function getNotificationIcon(type) {
    switch (type) {
        case 'success': return 'check-circle';
        case 'error': return 'exclamation-circle';
        case 'warning': return 'exclamation-triangle';
        default: return 'info-circle';
    }
}

// Intersection Observer for animations
function initScrollAnimations() {
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

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.project-card, .timeline-item, .skill-item, .contact-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Navbar Highlighting for Current Section
function initNavbarHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-100px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');
                
                // Remove active class from all nav links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                // Add active class to current section's nav link
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
}

// Enhanced Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add stagger effect for multiple elements
                if (entry.target.classList.contains('project-card') || 
                    entry.target.classList.contains('skill-item')) {
                    const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 100;
                    entry.target.style.transitionDelay = `${delay}ms`;
                }
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.project-card, .timeline-item, .skill-item, .contact-item, .section-header');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
}

// Enhanced Loader with Progress
function initLoader() {
    const loader = document.getElementById('loader');
    const loaderSpinner = document.querySelector('.loader-spinner');
    
    // Add progress animation
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += Math.random() * 30;
        if (progress >= 100) {
            progress = 100;
            clearInterval(progressInterval);
            
            // Hide loader smoothly
            setTimeout(() => {
                loader.style.opacity = '0';
                loader.style.transform = 'scale(0.8)';
                
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 500);
            }, 200);
        }
    }, 100);
}