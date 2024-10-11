// Meminta pengguna memasukkan angka
let angka = prompt("Masukkan sebuah angka:");

// Konversi input ke tipe number
angka = Number(angka);

// Memeriksa apakah angka lebih besar, lebih kecil, atau sama dengan 10
if (angka > 10) {
    alert("Angka yang Anda masukkan lebih besar dari 10.");
} else if (angka < 10) {
    alert("Angka yang Anda masukkan lebih kecil dari 10.");
} else {
    alert("Angka yang Anda masukkan sama dengan 10.");
}
