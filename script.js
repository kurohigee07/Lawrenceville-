// Membuat bintang-bintang
function createStars() {
    const starsContainers = [document.querySelector('.stars'), 
                           document.querySelector('.stars2'), 
                           document.querySelector('.stars3')];
    
    starsContainers.forEach((container, index) => {
        // Reset content
        container.innerHTML = '';
        
        // Buat lebih banyak bintang untuk efek yang lebih kaya
        const starCount = index === 0 ? 200 : index === 1 ? 150 : 100;
        
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.style.position = 'absolute';
            star.style.width = `${Math.random() * 3 + 1}px`;
            star.style.height = star.style.width;
            star.style.backgroundColor = 'white';
            star.style.borderRadius = '50%';
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.opacity = Math.random() * 0.8 + 0.2;
            star.style.animation = `twinkle ${Math.random() * 5 + 3}s infinite alternate`;
            
            // Tambahkan style untuk animasi twinkle
            const style = document.createElement('style');
            style.textContent = `
                @keyframes twinkle {
                    0% { opacity: ${Math.random() * 0.3 + 0.2}; }
                    100% { opacity: ${Math.random() * 0.8 + 0.5}; }
                }
            `;
            document.head.appendChild(style);
            
            container.appendChild(star);
        }
    });
}

// Animasi klik untuk semua elemen interaktif
function addClickAnimation(element) {
    element.addEventListener('click', function(e) {
        if (this.tagName === 'A') {
            e.preventDefault();
        }
        this.classList.add('clicked');
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 300);
    });
}

// Mengganti foto profil
function setupProfilePhotoChange() {
    const profileImg = document.getElementById('profileImg');
    const profileContainer = document.querySelector('.profile-img-container');
    const changePhotoBtn = document.getElementById('changePhotoBtn');
    const photoInput = document.getElementById('photoInput');
    
    // Klik pada container foto profil
    profileContainer.addEventListener('click', function() {
        photoInput.click();
    });
    
    changePhotoBtn.addEventListener('click', function() {
        photoInput.click();
    });
    
    photoInput.addEventListener('change', function(e) {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            
            reader.onload = function(event) {
                profileImg.src = event.target.result;
                
                // Animasi saat foto berubah
                profileImg.style.transform = 'scale(1.2) rotate(5deg)';
                profileContainer.style.boxShadow = '0 0 50px rgba(79, 195, 247, 1)';
                
                setTimeout(() => {
                    profileImg.style.transform = 'scale(1) rotate(0deg)';
                    profileContainer.style.boxShadow = '0 0 30px rgba(79, 195, 247, 0.5)';
                }, 500);
            }
            
            reader.readAsDataURL(e.target.files[0]);
        }
    });
}

// Efek hover untuk social boxes
function setupSocialBoxEffects() {
    const socialBoxes = document.querySelectorAll('.social-box');
    
    socialBoxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        box.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Inisialisasi
document.addEventListener('DOMContentLoaded', function() {
    createStars();
    setupProfilePhotoChange();
    setupSocialBoxEffects();
    
    // Tambahkan animasi klik ke semua elemen interaktif
    const interactiveElements = document.querySelectorAll('.social-box, .change-photo-btn, .profile-img-container');
    interactiveElements.forEach(element => {
        addClickAnimation(element);
    });
    
    // Animasi teks nama
    const nameElement = document.querySelector('.profile-name');
    const originalText = nameElement.textContent;
    nameElement.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            nameElement.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 150);
        }
    };
    
    // Mulai efek ketik setelah halaman dimuat
    setTimeout(typeWriter, 1000);
    
    // Tambahkan efek parallax untuk bintang
    window.addEventListener('mousemove', function(e) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        document.querySelector('.stars').style.transform = `translate(${x * 10}px, ${y * 10}px)`;
        document.querySelector('.stars2').style.transform = `translate(${x * 20}px, ${y * 20}px)`;
        document.querySelector('.stars3').style.transform = `translate(${x * 30}px, ${y * 30}px)`;
    });
});
