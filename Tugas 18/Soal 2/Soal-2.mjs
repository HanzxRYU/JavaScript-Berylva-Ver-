window.onload = function () {
    function Alert () {
        alert("Tombol sudah di tekan");
    }
    let button = document.getElementById("myButton");
    button.addEventListener("click", Alert);
}