// Create floating particles
function createParticles() {
    const container = document.querySelector('.particles-container');
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 4 + 1;
        const duration = Math.random() * 10 + 5;
        const delay = Math.random() * 5;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(79, 195, 247, ${Math.random() * 0.5 + 0.3});
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
                opacity: 0.3;
            }
            25% {
                transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 50 - 25}px) scale(1.2);
                opacity: 0.8;
            }
            50% {
                transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 50 - 25}px) scale(0.8);
                opacity: 0.5;
            }
            75% {
                transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 50 - 25}px) scale(1.1);
                opacity: 0.7;
            }
        }
    `;
    document.head.appendChild(style);
}

// Add click effects
function addClickEffects() {
    document.addEventListener('click', function(e) {
        createRipple(e.clientX, e.clientY);
    });
}

function createRipple(x, y) {
    const ripple = document.createElement('div');
    ripple.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border: 2px solid rgba(79, 195, 247, 0.6);
        border-radius: 50%;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
        z-index: 1000;
        animation: rippleEffect 0.6s ease-out forwards;
    `;
    
    document.body.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add hover sound effects (optional)
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
    
    for (let i = 0; i < 3; i++) {
        const sparkle = document.createElement('div');
        sparkle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
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
    
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        const angle = (i / 8) * Math.PI * 2;
        const distance = 30;
        
        particle.style.cssText = `
            position: fixed;
            width: 3px;
            height: 3px;
            background: #4fc3f7;
            border-radius: 50%;
            left: ${centerX}px;
            top: ${centerY}px;
            pointer-events: none;
            z-index: 1000;
            animation: clickBurst 0.8s ease-out forwards;
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
            
            @keyframes rippleEffect {
                0% {
                    transform: scale(1);
                    opacity: 1;
                }
                100% {
                    transform: scale(15);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
        
        setTimeout(() => {
            particle.remove();
        }, 800);
    }
}

// Parallax effect
function addParallax() {
    document.addEventListener('mousemove', function(e) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        document.querySelector('.floating-shapes').style.transform = 
            `translate(${x * 20}px, ${y * 20}px)`;
    });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    addClickEffects();
    addHoverEffects();
    addParallax();
    
    // Add keyboard interaction
    document.addEventListener('keydown', function(e) {
        if (e.code === 'Space') {
            e.preventDefault();
            createMagicSparkles();
        }
    });
});

function createMagicSparkles() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createSparkle(document.querySelector('.container'));
        }, i * 50);
    }
}
