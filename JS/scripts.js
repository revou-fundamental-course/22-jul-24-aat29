// Fungsi untuk memeriksa apakah gambar terlihat dalam viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Memeriksa gambar saat halaman dimuat dan saat di-scroll
function checkFadeIn() {
    const image = document.getElementById('fadeInImage');
    if (isInViewport(image)) {
        image.classList.add('visible');
    }
}

// Menambahkan event listener untuk memeriksa gambar saat di-scroll
window.addEventListener('scroll', checkFadeIn);

// Memeriksa gambar saat halaman dimuat
window.addEventListener('load', checkFadeIn);
