//Week-4 Exercise 2 Faktor Persekutuan Terbesar
/*
Diberikan sebuah function fpb(angka1, angka2) yang menerima dua parameter angka.
Function akan mengembalikan nilai FPB (Faktor Persekutuan Terbesar).
FPB dari dua bilangan merupakan bilangan bulat positif terbesar yang dapat
membagi habis kedua bilangan tersebut.

Algoritma Euclid:
Diberikan dua bilangan asli a dan b, periksa apakah b adalah nol.
Jika ya, a adalah FPB.
Jika tidak, ulangi proses tadi menggunakan b dan sisa setelah a dibagi oleh b (ditulis sebagai a modulus b).
*/

function fpb(angka1, angka2) {
  while(angka2 !== 0) {
    var varT = angka2;
    angka2 = angka1 % angka2;
    angka1 = varT;
  }
  return angka1;
}

console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1