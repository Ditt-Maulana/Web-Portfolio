// Mengambil elemen body
const body = document.body;
let themeButton; // Deklarasi variabel untuk tombol

// Fungsi untuk mengubah tema
function toggleTheme() {
    if (body.classList.contains('light')) {
        body.classList.remove('light');
        body.classList.add('dark');
        body.style.backgroundColor = '#121212'; // Latar belakang untuk tema gelap
        themeButton.innerText = 'Switch to Light Theme'; // Ubah teks tombol
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
        body.style.backgroundColor = 'white'; // Latar belakang untuk tema terang
        themeButton.innerText = 'Switch to Dark Theme'; // Ubah teks tombol
    }
}

// Menambahkan event listener untuk tombol tema
document.addEventListener('DOMContentLoaded', () => {
    // Set tema default
    if (!body.classList.contains('light') && !body.classList.contains('dark')) {
        body.classList.add('light'); // Set tema default ke terang
        body.style.backgroundColor = 'white'; // Latar belakang default
    }

    // Tambahkan tombol untuk mengubah tema di atas
    themeButton = document.createElement('button');
    themeButton.innerText = 'Switch to Dark Theme'; // Teks awal tombol
    themeButton.onclick = toggleTheme;

    // Menambahkan tombol ke bagian atas halaman
    const navbar = document.getElementById('navbar'); // Mengambil elemen navbar
    navbar.appendChild(themeButton); // Menambahkan tombol ke navbar
});