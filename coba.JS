class Orang {
  constructor(nama, umur) {
    this.nama = nama;
    this.umur = umur;
  }

  tidur() {
    return `${this.nama} sedang tidur`;
  }

  makan() {
    return `${this.nama} sedang makan`;
  }
}
// Tulis kode kamu di bawah ini
class Pelajar extends Orang {
  constructor(nama, umur, namaSekolah) {
    super(nama, umur);
    this.namaSekolah = namaSekolah;
  }
  belajar() {
    return `${this.nama} belajar di ${this.namaSekolah}`;
  }
}
let user = new Pelajar("Terra", 17, "Skilvul");
console.log(user);

// skilvul encapsulation
class Pelajar {
  constructor(nama, sekolah) {
    this._nama = nama;
    this._sekolah = sekolah;
  }

  setNama(nama) {
    this._nama = nama;
  }

  setSekolah(sekolah) {
    this._sekolah = sekolah;
  }

  getNama() {
    return this._nama;
  }

  getSekolah() {
    return this._sekolah;
  }

  belajar() {
    return `${this.getNama()} belajar di ${this.getSekolah()}`;
  }
}

// Membuat instance objek pelajar
const pelajar = new Pelajar("Alpha", "Skilvul");

// Menampilkan hasil belajar
console.log(pelajar.belajar());
// 
