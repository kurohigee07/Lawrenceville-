// Inisialisasi efek partikel yang lebih kompleks
class CosmicEffects {
    constructor() {
        this.init();
    }

    init() {
        this.createQuantumParticles();
        this.createGravityWaves();
        this.initPortalInteractions();
        this.initSpaceshipEffects();
    }

    createQuantumParticles() {
        const container = document.querySelector('.universe');
        const particleCount = 50;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'quantum-particle';
            
            // Random properties
            const size = Math.random() * 4 + 1;
            const duration = Math.random() * 10 + 5;
            const delay = Math.random() * 5;
            
            particle.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: ${this.getRandomColor()};
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                opacity: ${Math.random() * 0.7 + 0.3};
                animation: quantumFloat ${duration}s infinite ${delay}s;
                pointer-events: none;
            `;

            container.appendChild(particle);
        }

        // Add quantum float animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes quantumFloat {
                0%, 100% {
                    transform: translate(0, 0) scale(1);
                    opacity: 0.3;
                }
                25% {
                    transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(1.2);
                    opacity: 0.8;
                }
                50% {
                    transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(0.8);
                    opacity: 0.5;
                }
                75% {
                    transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(1.1);
                    opacity: 0.7;
                }
            }
        `;
        document.head.appendChild(style);
    }

    createGravityWaves() {
        const container = document.querySelector('.universe');
        
        for (let i = 0; i < 3; i++) {
            const wave = document.createElement('div');
            wave.className = 'gravity-wave';
            
            wave.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                width: ${200 + i * 100}px;
                height: ${200 + i * 100}px;
                border: 1px solid rgba(79, 195, 247, ${0.3 - i * 0.1});
                border-radius: 50%;
                transform: translate(-50%, -50%);
                animation: gravityPulse ${8 + i * 2}s infinite ${i * 1}s;
                pointer-events: none;
            `;

            container.appendChild(wave);
        }

        const style = document.createElement('style');
        style.textContent = `
            @keyframes gravityPulse {
                0% {
                    transform: translate(-50%, -50%) scale(0);
                    opacity: 1;
                }
                100% {
                    transform: translate(-50%, -50%) scale(3);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    getRandomColor() {
        const colors = [
            'rgba(79, 195, 247, 0.8)',
            'rgba(255, 64, 129, 0.8)',
            'rgba(124, 77, 255, 0.8)',
            'rgba(255, 152, 0, 0.8)',
            'rgba(76, 175, 80, 0.8)'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    initPortalInteractions() {
        const portals = document.querySelectorAll('.portal');
        
        portals.forEach(portal => {
            portal.addEventListener('mouseenter', () => {
                this.activatePortal(portal);
                this.createRippleEffect(portal);
            });
            
            portal.addEventListener('mouseleave', () => {
                this.deactivatePortal(portal);
            });
            
            portal.addEventListener('click', (e) => {
                e.preventDefault();
                this.portalJumpEffect(portal);
            });
        });
    }

    activatePortal(portal) {
        const core = portal.querySelector('.portal-core');
        const energy = portal.querySelector('.portal-energy');
        
        core.style.transform = 'scale(1.2) rotate(10deg)';
        energy.style.animationDuration = '0.5s';
        
        // Add particle burst
        this.createParticleBurst(portal);
    }

    deactivatePortal(portal) {
        const core = portal.querySelector('.portal-core');
        const energy = portal.querySelector('.portal-energy');
        
        core.style.transform = 'scale(1) rotate(0deg)';
        energy.style.animationDuration = '2s';
    }

    portalJumpEffect(portal) {
        // Create warp effect
        const warp = document.createElement('div');
        warp.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle, rgba(79, 195, 247, 0.8), transparent 70%);
            border-radius: 20px;
            transform: translate(-50%, -50%) scale(0);
            animation: warpJump 0.6s ease-out;
            pointer-events: none;
            z-index: 5;
        `;
        
        portal.appendChild(warp);
        
        setTimeout(() => {
            warp.remove();
        }, 600);
        
        // Add warp animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes warpJump {
                0% {
                    transform: translate(-50%, -50%) scale(0);
                    opacity: 1;
                }
                50% {
                    transform: translate(-50%, -50%) scale(1.5);
                    opacity: 0.7;
                }
                100% {
                    transform: translate(-50%, -50%) scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    createRippleEffect(element) {
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.1);
            transform: translate(-50%, -50%);
            animation: rippleExpand 1s ease-out;
            pointer-events: none;
        `;
        
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 1000);
    }

    createParticleBurst(element) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        for (let i = 0; i < 8; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: ${this.getRandomColor()};
                border-radius: 50%;
                left: ${centerX}px;
                top: ${centerY}px;
                pointer-events: none;
                z-index: 100;
                animation: particleBurst 1s ease-out forwards;
            `;
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 1000);
        }

        // Add particle burst animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes particleBurst {
                0% {
                    transform: translate(0, 0) scale(1);
                    opacity: 1;
                }
                100% {
                    transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(0);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    initSpaceshipEffects() {
        const spaceship = document.querySelector('.spaceship');
        
        // Add occasional engine boost
        setInterval(() => {
            this.engineBoost();
        }, 5000);
    }

    engineBoost() {
        const engineGlow = document.querySelector('.engine-glow');
        if (engineGlow) {
            engineGlow.style.animation = 'none';
            setTimeout(() => {
                engineGlow.style.animation = 'enginePulse 0.5s ease-in-out infinite alternate';
            }, 10);
            
            // Add boost particles
            this.createBoostParticles();
        }
    }

    createBoostParticles() {
        const engineGlow = document.querySelector('.engine-glow');
        const rect = engineGlow.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.bottom;
        
        for (let i = 0; i < 6; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 3px;
                height: 3px;
                background: linear-gradient(45deg, #ff9800, #ff5722);
                border-radius: 50%;
                left: ${centerX + Math.random() * 20 - 10}px;
                top: ${centerY}px;
                pointer-events: none;
                z-index: 100;
                animation: boostParticle 1s ease-out forwards;
            `;
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 1000);
        }

        const style = document.createElement('style');
        style.textContent = `
            @keyframes boostParticle {
                0% {
                    transform: translateY(0) scale(1);
                    opacity: 1;
                }
                100% {
                    transform: translateY(100px) scale(0);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Inisialisasi ketika halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Initialize cosmic effects
    new CosmicEffects();
    
    // Add ripple effect to entire page
    document.addEventListener('click', function(e) {
        createClickRipple(e.clientX, e.clientY);
    });
    
    // Parallax effect for background elements
    document.addEventListener('mousemove', function(e) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        // Move nebulas
        document.querySelectorAll('.nebula').forEach((nebula, index) => {
            const speed = (index + 1) * 0.02;
            nebula.style.transform = `translate(${x * speed * 100}px, ${y * speed * 100}px)`;
        });
        
        // Move energy orb
        const orb = document.querySelector('.energy-orb');
        if (orb) {
            orb.style.transform = `translate(calc(-50% + ${x * 20}px), calc(-50% + ${y * 20}px))`;
        }
    });
    
    // Add keyboard interactions
    document.addEventListener('keydown', function(e) {
        if (e.code === 'Space') {
            e.preventDefault();
            createBigBangEffect();
        }
    });
    
    // Add scroll effects
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        const scrollDiff = currentScrollY - lastScrollY;
        
        // Adjust spaceship position based on scroll
        const spaceship = document.querySelector('.spaceship');
        if (spaceship) {
            spaceship.style.transform = `translateY(${scrollDiff * 0.5}px)`;
        }
        
        lastScrollY = currentScrollY;
    });
});

// Additional effect functions
function createClickRipple(x, y) {
    const ripple = document.createElement('div');
    ripple.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border: 2px solid rgba(79, 195, 247, 0.8);
        border-radius: 50%;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
        z-index: 1000;
        animation: clickRipple 0.6s ease-out forwards;
    `;
    
    document.body.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

function createBigBangEffect() {
    // Create expanding circle
    const bang = document.createElement('div');
    bang.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background: radial-gradient(circle, rgba(79, 195, 247, 0.3), transparent 70%);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        animation: bigBang 1s ease-out forwards;
        pointer-events: none;
        z-index: 1000;
    `;
    
    document.body.appendChild(bang);
    
    // Create multiple particles
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            createExplosionParticle();
        }, i * 30);
    }
    
    setTimeout(() => {
        bang.remove();
    }, 1000);
}

function createExplosionParticle() {
    const particle = document.createElement('div');
    const angle = Math.random() * Math.PI * 2;
    const distance = 100 + Math.random() * 200;
    const size = Math.random() * 8 + 2;
    
    particle.style.cssText = `
        position: fixed;
        width: ${size}px;
        height: ${size}px;
        background: ${getRandomParticleColor()};
        border-radius: 50%;
        left: 50%;
        top: 50%;
        pointer-events: none;
        z-index: 1000;
        animation: explosionParticle 1.5s ease-out forwards;
    `;
    
    document.body.appendChild(particle);
    
    // Add explosion animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes explosionParticle {
            0% {
                transform: translate(0, 0) scale(1);
                opacity: 1;
            }
            100% {
                transform: translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0);
                opacity: 0;
            }
        }
        
        @keyframes clickRipple {
            0% {
                transform: scale(1);
                opacity: 1;
            }
            100% {
                transform: scale(20);
                opacity: 0;
            }
        }
        
        @keyframes bigBang {
            0% {
                width: 0;
                height: 0;
                opacity: 1;
            }
            100% {
                width: 100vmax;
                height: 100vmax;
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    setTimeout(() => {
        particle.remove();
    }, 1500);
}

function getRandomParticleColor() {
    const colors = [
        'rgba(79, 195, 247, 0.9)',
        'rgba(255, 64, 129, 0.9)',
        'rgba(124, 77, 255, 0.9)',
        'rgba(255, 152, 0, 0.9)',
        'rgba(76, 175, 80, 0.9)',
        'rgba(255, 255, 255, 0.9)'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Add CSS for new animations
const additionalStyles = `
    .quantum-particle {
        position: absolute;
        pointer-events: none;
    }
    
    .gravity-wave {
        position: absolute;
        pointer-events: none;
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);
