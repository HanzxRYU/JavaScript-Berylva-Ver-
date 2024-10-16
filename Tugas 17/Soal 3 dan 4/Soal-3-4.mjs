// Ambil elemen <ul> dengan ID myList
const ul = document.getElementById("myList");

// Buat elemen <li> baru
let newLi = document.createElement("li");

// Tambahkan teks "Item Disisipkan" ke elemen <li> baru
newLi.textContent = "Item Disisipkan";

// Ambil elemen <li> pertama di dalam <ul>
let firstLi = ul.firstElementChild;

// Sisipkan elemen <li> baru sebelum elemen <li> pertama
ul.insertBefore(newLi, firstLi);
