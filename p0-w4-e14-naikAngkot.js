//Week-4 Exercise 14 Naik Angkot
/*
Diberikan function naikAngkot(arrPenumpang) yang akan menerima satu parameter berupa array dua dimensi.
Function akan me-return array of object.
Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input : [['Dimitri', 'B', 'F']]
        output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  var result = [];

  for(var i=0; i<arrPenumpang.length; i++) {
    for(j=0; j<rute.length; j++) {
      if(arrPenumpang[i][1]===rute[j]) {
        var naikDari = j;
      }
      else if(arrPenumpang[i][2]===rute[j]) {
        var tujuan = j;
      }
    }
    var objJalan = {};
    objJalan['penumpang'] = arrPenumpang[i][0];
    objJalan['naikDari'] = arrPenumpang[i][1];
    objJalan['tujuan'] = arrPenumpang[i][2];
    objJalan['bayar'] = (tujuan - naikDari) * 2000;
    result.push(objJalan);
  }
  return result;
}

console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]