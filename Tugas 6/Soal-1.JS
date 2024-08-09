// 1. Deklarasi dan Akses Array
const identity = ["Hannan uddin", "15", "Bogor"];
console.log(identity[1]); // Menampilkan elemen kedua dari array

// 2. Mengubah Elemen Array
identity[0] = "Hannan";
console.log(identity); // Menampilkan array yang telah diperbarui

// 3. Menghapus Elemen Array
identity.splice(1, 1); // Menghapus elemen kedua dari array
console.log(identity); // Menampilkan array setelah penghapusan

// 4. Menggabungkan Array
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = array1.concat(array2);
console.log(combinedArray); // Menampilkan hasil gabungan

// 5. Mencari Elemen Array
const index = identity.indexOf("Bogor");
console.log(index); // Menampilkan indeks dari elemen "asal kota"

// 6. Mengurutkan Array
const numbers = [34, 7, 23, 32, 5];
numbers.sort((a, b) => a - b); // Mengurutkan array dalam urutan menaik
console.log(numbers); // Menampilkan array yang sudah diurutkan

// 7. Menghitung Banyak Data dalam Array
const count = numbers.length;
console.log(count); // Menampilkan jumlah elemen dalam array

