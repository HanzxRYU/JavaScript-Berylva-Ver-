class mobil {
  constructor(merk, tahun) {
    var _merk = merk;
    var _tahun = tahun;

    this.setmerk = function (merk) {
      _merk = merk;
    };
    this.getmerk = function () {
      return _merk;
    };
    this.settahun = function (tahun) {
      _tahun = tahun;
    };
    this.gettahun = function () {
      return _tahun;
    };
  }
  spek() {
    return `mobil ini bernama ${this.getmerk()} keluaran tahun ${this.gettahun()}`;
  }
}
var mobil1 = new mobil("honda", 2010);
console.log(mobil1.spek());
