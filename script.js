const images = [
    'images/museum pendidikan.jpeg',
    'images/kalimascrop.jpeg',
    'images/tugupcrop.jpg',
    'images/tamanhiburancrop.jpg',

];

let currentIndex = 0;

function changeBackground() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('beranda').style.backgroundImage = `url('${images[currentIndex]}')`;
}

// Ganti gambar secara otomatis setiap 3 detik
setInterval(changeBackground, 3000);

// Set gambar pertama saat halaman dimuat
changeBackground();
