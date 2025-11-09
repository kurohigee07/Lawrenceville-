// Create floating particles
function createParticles() {
    const container = document.querySelector('.particles-container');
    const particleCount = 20; // Kurangi jumlah particles

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 3 + 1;
        const duration = Math.random() * 15 + 10;
        const delay = Math.random() * 5;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: particleFloat ${duration}s infinite ${delay}s;
            pointer-events: none;
        `;

        container.appendChild(particle);
    }

    // Add particle animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes particleFloat {
            0%, 100% {
                transform: translate(0, 0) scale(1);
                opacity: 0.1;
            }
            25% {
                transform: translate(${Math.random() * 80 - 40}px, ${Math.random() * 40 - 20}px) scale(1.1);
                opacity: 0.3;
            }
            50% {
                transform: translate(${Math.random() * 80 - 40}px, ${Math.random() * 40 - 20}px) scale(0.9);
                opacity: 0.2;
            }
            75% {
                transform: translate(${Math.random() * 80 - 40}px, ${Math.random() * 40 - 20}px) scale(1.05);
                opacity: 0.25;
            }
        }
    `;
    document.head.appendChild(style);
}

// HAPUS fungsi ripple effect
// function addClickEffects() { ... } // DIHAPUS

function addHoverEffects() {
    const links = document.querySelectorAll('.social-link');
    
    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            createSparkle(this);
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        link.addEventListener('click', function(e) {
            e.preventDefault();
            createClickBurst(this);
            
            // Open link after animation
            setTimeout(() => {
                window.open(this.href, '_blank');
            }, 300);
        });
    });
}

function createSparkle(element) {
    const rect = element.getBoundingClientRect();
    
    for (let i = 0; i < 2; i++) { // Kurangi jumlah sparkle
        const sparkle = document.createElement('div');
        sparkle.style.cssText = `
            position: absolute;
            width: 3px;
            height: 3px;
            background: white;
            border-radius: 50%;
            left: ${Math.random() * rect.width}px;
            top: ${Math.random() * rect.height}px;
            pointer-events: none;
            z-index: 5;
            animation: sparklePop 0.6s ease-out forwards;
        `;
        
        element.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 600);
    }
}

function createClickBurst(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 6; i++) { // Kurangi jumlah particle
        const particle = document.createElement('div');
        const angle = (i / 6) * Math.PI * 2;
        const distance = 25;
        
        particle.style.cssText = `
            position: fixed;
            width: 2px;
            height: 2px;
            background: #ffffff;
            border-radius: 50%;
            left: ${centerX}px;
            top: ${centerY}px;
            pointer-events: none;
            z-index: 1000;
            animation: clickBurst 0.6s ease-out forwards;
        `;
        
        document.body.appendChild(particle);
        
        // Add burst animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes clickBurst {
                0% {
                    transform: translate(0, 0) scale(1);
                    opacity: 1;
                }
                100% {
                    transform: translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0);
                    opacity: 0;
                }
            }
            
            @keyframes sparklePop {
                0% {
                    transform: scale(0);
                    opacity: 0;
                }
                50% {
                    transform: scale(1.2);
                    opacity: 1;
                }
                100% {
                    transform: scale(0);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
        
        setTimeout(() => {
            particle.remove();
        }, 600);
    }
}

// Parallax effect yang lebih subtle
function addParallax() {
    document.addEventListener('mousemove', function(e) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        document.querySelector('.floating-shapes').style.transform = 
            `translate(${x * 10}px, ${y * 10}px)`; // Kurangi parallax effect
    });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    // HAPUS: addClickEffects(); 
    addHoverEffects();
    addParallax();
});

// HAPUS fungsi magic sparkles dan keyboard interaction
