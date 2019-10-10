//Week-4 Exercise 6 Digit Perkalian Minimun
/*
Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima satu parameter angka.
Function akan mengembalikan jumlah digit minimal dari angka yang merupakan faktor angka parameter tersebut.
Contoh, jika angka adalah 24, maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6.
Dari antara faktor tersebut, yang digit nya paling sedikit adalah 3 * 8 atau 4 * 6,
sehingga function akan me-return 2.
*/

function digitPerkalianMinimum(angka) {
  var result = [];
  for(var i=1; i<=angka; i++) {
    if(angka % i === 0) {
      result.push(i);
      result.push(angka / i);
    }
  }
  //console.log(result);

  var temp = 0;
  var digit = result.length;
  for(var i=1; i<=result.length; i++) {
    if(i % 2 === 0) {
      temp = temp + String(result[i-1]).length;
      if(digit>temp) {
        digit = temp;
      }
    }
    else {
      temp = String(result[i-1]).length;
    }
  }
  return digit;
}

console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
console.log(digitPerkalianMinimum(1000)); // 