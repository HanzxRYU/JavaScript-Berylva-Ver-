class Pesawat {
  constructor(jenis, kecepatan) {
    var _jenis = jenis;
    var _kecepatan = kecepatan;

    this.setJenis = function (jenis) {
      _jenis = jenis;
    };

    this.setKecepatan = function (kecepatan) {
      _kecepatan = kecepatan;
    };

    this.getJenis = function () {
      return _jenis;
    };

    this.getKecepatan = function () {
      return _kecepatan;
    };
  }
  terbang() {
    return `Pesawat dengan jenis ${this.getJenis()} sedang terbang dengan kecepatan ${this.getKecepatan()}`;
  }
}
class Jet extends Pesawat {
  constructor(jenis, kecepatan, KapasitasBahanBakar) {
    super(jenis, kecepatan);
    var _KapasitasBahanBAkar = KapasitasBahanBakar;

    this.setKapasitasBahanBakar = function (KapasitasBahanBakar) {
      _KapasitasBahanBAkar = KapasitasBahanBakar;
    };

    this.getKapasitasBahanBakar = function () {
      return _KapasitasBahanBAkar;
    };
  }
  isiBahanBakar() {
    return `Mengisi bahan bakar sebanyak ${this._kapasitasBahanBakar}`;
  }
}

// Membuat instance objek Jet
const jet = new Jet("F-16", "1500 km/jam", "5000 liter");
const pesawat = new Pesawat("Boeing", "1000 km/jam");

// Menguji metode terbang() dan isiBahanBakar()
console.log(jet.terbang());
console.log(jet.isiBahanBakar());
console.log(pesawat.terbang());
