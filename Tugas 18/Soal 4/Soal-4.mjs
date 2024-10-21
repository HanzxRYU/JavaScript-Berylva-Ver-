function getUserName() {
  let userName = prompt("Masukkan nama Anda:");
  if (userName === null || userName.trim() === "") {
    let tryAgain = confirm("Apakah Anda ingin mencoba lagi?");
    if (tryAgain) {
      getUserName();
    } else {
      alert("Terima kasih!");
    }
  } else {
    alert("Halo, " + userName + "! Selamat datang.");
    document.getElementById("myButton").innerHTML = "Tampilkan Pesan";
  }
}

window.onload = function () {
  let proses = confirm("Apakah Anda ingin melanjutkan?");
  if (proses) {
    alert("Anda memilih OK");
    getUserName();
  } else {
    alert("Anda memilih untuk tidak melanjutkan");
  }

  document.getElementById("myButton").addEventListener("click", function () {
    getUserName();
  });
};
