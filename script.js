// Smooth scroll effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Change navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Contact form submission with validation
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = contactForm.name.value;
    const email = contactForm.email.value;
    const subject = contactForm.subject.value;
    const message = contactForm.message.value;

    if (name && email && subject && message) {
        alert(`Terima kasih, ${name}! Pesan Anda telah dikirim.`);
        contactForm.reset(); // Reset form after submission
    } else {
        alert('Silakan lengkapi semua field sebelum mengirim.');
    }
});

// Loading Animation
window.addEventListener('load', () => {
    const loading = document.getElementById('loading');
    loading.style.display = 'none'; // Sembunyikan loading setelah halaman dimuat
});