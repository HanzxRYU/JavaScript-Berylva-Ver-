// Menampilkan confirm box ketika halaman dimuat
window.onload = function () {
  let konfirmasi = confirm("Apakah Anda ingin melanjutkan?");

  // Memeriksa apakah pengguna mengklik OK atau Cancel
  if (konfirmasi) {
    alert("Anda memilih OK!");
  } else {
    alert("Anda memilih Cancel!");
  }
};
