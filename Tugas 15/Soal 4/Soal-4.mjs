window.onload = function () {
  let menyapa = alert("Selamat Datang!");
  let bertanya = confirm("Apakah anda ingin memasukan nama anda?");
  if (bertanya) {
    var nanya = prompt("Silahkan masukan nama anda");
    alert("Halo " + nanya);
  } else {
    alert("Terima Kasih");
  }
};
