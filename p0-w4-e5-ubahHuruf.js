//Week-4 Exercise 5 Ubah Huruf
/*
Diberikan function ubahHuruf(kata) yang akan menerima satu parameter berupa string.
Function akan me-return sebuah kata baru dimana setiap huruf akan digantikan dengan huruf alfabet setelahnya.
Contoh, huruf a akan menjadi b, c akan menjadi d, k menjadi l, dan z menjadi a.
*/

function ubahHuruf(kata) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var result = '';
  for(var i=0; i<kata.length; i++) {
    var indeks = alphabet.indexOf([kata[i]]);
    if(indeks===25) {
      indeks = 0;
    }
    else {
      indeks += 1;
    }
    result += alphabet[indeks];
  }
  return result;
}

console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu