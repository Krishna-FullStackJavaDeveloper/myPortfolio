// ========================================
// Initialize AOS (Animate On Scroll)
// ========================================

AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// ========================================
// Smooth Scrolling for Navigation Links
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        }
    });
});

// ========================================
// Navbar Background on Scroll
// ========================================

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
    }
});

// ========================================
// Active Navigation Link on Scroll
// ========================================

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function setActiveLink() {
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', setActiveLink);

// ========================================
// Animated Skill Progress Bars
// ========================================

const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.progress-bar');
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
        }
    });
}, observerOptions);

// Observe skills section
const skillsSection = document.querySelector('#skills');
if (skillsSection) {
    progressObserver.observe(skillsSection);
}

// ========================================
// Contact Form Submission
// ========================================

// const contactForm = document.getElementById('contactForm');

// if (contactForm) {
//     contactForm.addEventListener('submit', function(e) {
//         e.preventDefault();
        
//         // Get form data
//         const formData = {
//             name: document.getElementById('name').value,
//             email: document.getElementById('email').value,
//             subject: document.getElementById('subject').value,
//             message: document.getElementById('message').value
//         };
        
//         // Here you would typically send the data to a server
//         // For now, we'll just show a success message
        
//         // Show success alert
//         showAlert('Thank you for your message! I\'ll get back to you soon.', 'success');
        
//         // Reset form
//         contactForm.reset();
//     });
// }

// ========================================
// Alert Function
// ========================================

function showAlert(message, type = 'success') {
    // Create alert element
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    alertDiv.style.cssText = 'top: 80px; right: 20px; z-index: 9999; min-width: 300px;';
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    // Add to body
    document.body.appendChild(alertDiv);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        alertDiv.remove();
    }, 5000);
}

// ========================================
// Typing Effect for Hero Section (Optional)
// ========================================

function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ========================================
// Add Hover Effect to Project Cards
// ========================================

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ========================================
// Back to Top Button (Optional Enhancement)
// ========================================

// Create back to top button
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '<i class="bi bi-arrow-up"></i>';
backToTopButton.className = 'btn btn-primary position-fixed d-none';
backToTopButton.style.cssText = 'bottom: 20px; right: 20px; z-index: 999; width: 50px; height: 50px; border-radius: 50%; padding: 0;';
backToTopButton.setAttribute('aria-label', 'Back to top');
document.body.appendChild(backToTopButton);

// Show/hide back to top button
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.remove('d-none');
    } else {
        backToTopButton.classList.add('d-none');
    }
});

// Scroll to top when clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========================================
// Preloader (Optional)
// ========================================

window.addEventListener('load', () => {
    // Hide preloader if exists
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.display = 'none';
    }
    
    // Trigger animations
    document.body.classList.add('loaded');
});

// ========================================
// Download CV Button Analytics (Optional)
// ========================================

const downloadButton = document.querySelector('a[download]');
if (downloadButton) {
    downloadButton.addEventListener('click', () => {
        console.log('CV Download clicked');
        // Add analytics tracking here if needed
    });
}

// ========================================
// External Links (Open in New Tab)
// ========================================

document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.setAttribute('rel', 'noopener noreferrer');
});

// ========================================
// Parallax Effect for Hero Section (Optional)
// ========================================

const heroSection = document.querySelector('.hero-section');

if (heroSection) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        heroSection.style.transform = `translateY(${parallax}px)`;
    });
}

// ========================================
// Console Welcome Message
// ========================================

console.log('%c👋 Welcome to Krishna Bhatt\'s Portfolio!', 'color: #0d6efd; font-size: 20px; font-weight: bold;');
console.log('%c🚀 Full Stack Java Developer | 5+ Years Experience', 'color: #6c757d; font-size: 14px;');
console.log('%c📧 krishna.bhatt@example.com', 'color: #6c757d; font-size: 14px;');

// ========================================
// Performance Optimization
// ========================================

// Lazy load images
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ========================================
// Mobile Menu Close on Outside Click
// ========================================

document.addEventListener('click', function(event) {
    const navbar = document.querySelector('.navbar-collapse');
    const toggler = document.querySelector('.navbar-toggler');
    
    if (navbar && navbar.classList.contains('show')) {
        if (!navbar.contains(event.target) && !toggler.contains(event.target)) {
            const bsCollapse = new bootstrap.Collapse(navbar);
            bsCollapse.hide();
        }
    }
});

// ========================================
// Print Styles Warning
// ========================================

window.addEventListener('beforeprint', () => {
    console.log('Printing portfolio...');
});

// ========================================
// Easter Egg (Optional Fun Feature)
// ========================================

let clickCount = 0;
const logo = document.querySelector('.navbar-brand');

if (logo) {
    logo.addEventListener('click', (e) => {
        if (e.detail === 3) { // Triple click
            clickCount++;
            if (clickCount === 3) {
                showAlert('🎉 You found the easter egg! Thanks for exploring my portfolio!', 'info');
                clickCount = 0;
            }
        }
    });
}

// ========================================
// Initialize Everything on Load
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio loaded successfully! ✅');
    
    // Set active link on page load
    setActiveLink();
    
    // Add animation classes
    document.body.classList.add('loaded');
});
