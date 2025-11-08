// Membuat partikel animasi
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Ukuran acak
        const size = Math.random() * 10 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Posisi acak
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Warna acak
        const colors = ['rgba(255,255,255,0.7)', 'rgba(255,200,100,0.5)', 'rgba(100,200,255,0.5)'];
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Animasi dengan durasi acak
        const duration = Math.random() * 20 + 10;
        particle.style.animationDuration = `${duration}s`;
        
        // Delay animasi acak
        const delay = Math.random() * 5;
        particle.style.animationDelay = `${delay}s`;
        
        particlesContainer.appendChild(particle);
    }
}

// Animasi klik untuk semua elemen interaktif
function addClickAnimation(element) {
    element.addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.add('clicked');
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 300);
    });
}

// Mengganti foto profil
function setupProfilePhotoChange() {
    const profileImg = document.getElementById('profileImg');
    const changePhotoBtn = document.getElementById('changePhotoBtn');
    const photoInput = document.getElementById('photoInput');
    
    changePhotoBtn.addEventListener('click', function() {
        photoInput.click();
    });
    
    photoInput.addEventListener('change', function(e) {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            
            reader.onload = function(event) {
                profileImg.src = event.target.result;
                
                // Animasi saat foto berubah
                profileImg.style.transform = 'scale(1.2) rotate(10deg)';
                setTimeout(() => {
                    profileImg.style.transform = 'scale(1) rotate(0deg)';
                }, 500);
            }
            
            reader.readAsDataURL(e.target.files[0]);
        }
    });
}

// Menambahkan efek ripple saat mengklik
function addRippleEffect() {
    document.addEventListener('click', function(e) {
        const ripple = document.createElement('div');
        ripple.classList.add('ripple');
        ripple.style.left = `${e.clientX}px`;
        ripple.style.top = `${e.clientY}px`;
        document.body.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
}

// Inisialisasi
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    setupProfilePhotoChange();
    addRippleEffect();
    
    // Tambahkan animasi klik ke semua link sosial media
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        addClickAnimation(link);
    });
    
    // Tambahkan animasi klik ke tombol ganti foto
    addClickAnimation(document.getElementById('changePhotoBtn'));
    
    // Animasi untuk copyright
    const copyright = document.querySelector('.copyright');
    copyright.addEventListener('click', function() {
        this.classList.add('clicked');
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 300);
    });
    
    // Tambahkan efek ketik untuk nama
    const nameElement = document.querySelector('h1');
    const originalText = nameElement.textContent;
    nameElement.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            nameElement.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Mulai efek ketik setelah halaman dimuat
    setTimeout(typeWriter, 1000);
});
