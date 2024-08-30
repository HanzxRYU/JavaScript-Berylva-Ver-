class HBLTZ {
  constructor(nama, team) {
    this.nama = nama;
    this.team = team;
  }
  MPL() {
    return `${this.nama} adalah ketua dari team ${this.team}`;
  }
}
let hbltz = new HBLTZ("adit", "ADZ CONNETZ");
console.log(hbltz.MPL());
//
class PersegiPanjang {
  constructor(panjang, lebar) {
    this.panjang = panjang;
    this.lebar = lebar;
  }
  luas() {
    const hasil = this.panjang * this.lebar;
    return hasil;
  }
  keliling() {
    const hasil = 2 * (this.panjang + this.lebar);
    return hasil;
  }
}

const persegiPanjang = new PersegiPanjang(4, 3);

console.log("Luas:", persegiPanjang.luas());
console.log("Keliling:", persegiPanjang.keliling());
