// Js untuk navbar pada tampilan mobile, burger navbar jika fi click akan menampilkan navbar
const toggleButton = document.getElementById('toogle');
const navList = document.getElementById('navi-list');

toggleButton.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Js untuk merubah tampilan button menjadi dalam proses
function rubah() {
    document.getElementById("button-1").innerHTML = "Dalam Proses";
};

// Js untuk merubah tampilan button menjadi tahap pengembangan
function rubah2() {
    document.getElementById("button-2").innerHTML = "Tahap pengembangan";
};

// Js untuk button scrol footer untuk kembali ke atas
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};