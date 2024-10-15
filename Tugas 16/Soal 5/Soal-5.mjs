window.onload = function () {
  let Data = prompt("Silahkan masukan warna yang anda mau (red, green, blue)");
  if (Data == "red" || Data == "green" || Data == "blue") {
    document.getElementById("ColorBox").style.color = Data;
  } else {
    alert("Warna yang anda masukkan salah");
  }
};
