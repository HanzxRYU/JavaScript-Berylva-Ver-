// class HBLTZ {
//   constructor(nama, team) {
//     this.nama = nama;
//     this.team = team;
//   }
//   MPL() {
//     return `${this.nama} adalah ketua dari team ${this.team}`;
//   }
// }
// let hbltz = new HBLTZ("adit", "ADZ CONNETZ");
// console.log(hbltz.MPL());
// //
// class PersegiPanjang {
//   constructor(panjang, lebar) {
//     this.panjang = panjang;
//     this.lebar = lebar;
//   }
//   luas() {
//     const hasil = this.panjang * this.lebar;
//     return hasil;
//   }
//   keliling() {
//     const hasil = 2 * (this.panjang + this.lebar);
//     return hasil;
//   }
// }

// const persegiPanjang = new PersegiPanjang(4, 3);

// console.log("Luas:", persegiPanjang.luas());
// console.log("Keliling:", persegiPanjang.keliling());
// //
// class Karyawan {
//   constructor(nama, gaji, jabatan) {
//     this._nama = nama;
//     this._gaji = gaji;
//     this._jabatan = jabatan;
//   }

//   // Getter dan Setter untuk nama
//   get nama() {
//     return this._nama;
//   }

//   set nama(nama) {
//     this._nama = nama;
//   }

//   // Getter dan Setter untuk gaji
//   get gaji() {
//     return this._gaji;
//   }

//   set gaji(gaji) {
//     this._gaji = gaji;
//   }

//   // Getter dan Setter untuk jabatan
//   get jabatan() {
//     return this._jabatan;
//   }

//   set jabatan(jabatan) {
//     this._jabatan = jabatan;
//   }
// }

// class Manajer extends Karyawan {
//   constructor(nama, gaji, jabatan, tunjangan) {
//     super(nama, gaji, jabatan);
//     this._tunjangan = tunjangan;
//   }

//   beriTunjangan() {
//     this._gaji += this._tunjangan;
//     return `Gaji setelah tunjangan: ${this._gaji}`;
//   }
// }

// // Membuat instance objek Manajer
// const manajer = new Manajer("Budi", 10000000, "Manajer", 2000000);

// // Menguji semua metode
// console.log(manajer.nama);
// console.log(manajer.gaji);
// console.log(manajer.jabatan);
// console.log(manajer.beriTunjangan());

// class Buku {
//   constructor(judul, penulis) {
//     this._judul = judul; // Variabel privat
//     this._penulis = penulis; // Variabel privat
//   }

//   getJudul() {
//     return this._judul;
//   }

//   setJudul(judul) {
//     this._judul = judul;
//   }

//   getPenulis() {
//     return this._penulis;
//   }

//   setPenulis(penulis) {
//     this._penulis = penulis;
//   }
// }

// const buku = new Buku("Belajar JavaScript", "John Doe");

// console.log(buku.getJudul());
// buku.setJudul("Pemrograman JavaScript");
// console.log(buku.getJudul());

// console.log(buku.getPenulis());
// buku.setPenulis("Si Uddin");
// console.log(buku.getPenulis());

// function LuasPersegi(s) {
//   return s * s
// }
// console.log(LuasPersegi(4))
// console.log(LuasPersegi(7))

function calculateTax(price, location) {
  let taxRate;
  if (location === "jakarta") {
      taxRate = 0.10;
  } else if (location === "bandung") {
      taxRate = 0.05;
  } else {
      taxRate = 0;
  }
  let taxAmount = price * taxRate;
  let finalPrice = price + taxAmount;
  return finalPrice;
}

// Panggil fungsi calculateTax dengan price 1000 dan location "Jakarta"
let finalPrice = calculateTax(1000, "Jakarta");
console.log(finalPrice);  // Output: 1100
