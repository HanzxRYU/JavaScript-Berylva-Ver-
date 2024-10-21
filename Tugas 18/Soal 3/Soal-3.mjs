function hitungan() {
    document.getElementById("count").innerText++;
    document.getElementById("count").onclick = hitungan;
}
document.getElementById("myButton").onclick = hitungan;