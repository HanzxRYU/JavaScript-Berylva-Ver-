class Hewan {
  constructor(nama) {
    this.nama = nama;
  }

  makan() {
    return "Hewan sedang makan";
  }
}

// Buat kode kamu di bawah ini
class Harimau extends Hewan {
  constructor(nama) {
    super(nama);
  }
  makan() {
    return `${this.nama} makan daging`;
  }
}
let harimauSumatra = new Harimau("Harimau Sumatra");
console.log(harimauSumatra.makan());
// 
class Pelajar {
  constructor (nama, sekolah) {
      this._nama = nama;
      this._sekolah = sekolah;
  }
  setNama (nama) {
      this._nama = nama;
  }

  setSekolah (sekolah) {
      this._sekolah = sekolah;
  }

  getNama () {
      return this._nama;
  }

  getSekolah () {
      return this._sekolah;
  }

  belajar () {
    return `${this.getNama()} belajar di ${this.getSekolah()}`
  }
}
let pelajar = new Pelajar("alpha", "skilvul");

console.log(pelajar.belajar())

// 
