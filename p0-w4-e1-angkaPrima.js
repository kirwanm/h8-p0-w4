//Week-4 Exercise 1 Angka Prima
/*
Diberikan sebuah function angkaPrima(angka) yang menerima satu parameter berupa angka.
Function akan me-return true jika angka tersebut adalah bilangan prima. Jika tidak, return false.
*/

function angkaPrima(angka) {
  var Temp = false;

  if(angka === 2 || angka === 3 || angka === 5 || angka === 7) {
    //console.log(angka + ' Prima');
    Temp = true;
  }
  else if(angka % 2 === 0 || angka % 3 === 0 || angka % 5 === 0 || angka % 7 === 0 || angka === 1) {
    //console.log(angka + ' not Prima');
    Temp = false;
  }
  else {
    //console.log(angka + ' Prima');
    Temp = true;
  }
  return Temp;
}

console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
console.log(angkaPrima(1)); // false
/*
console.log(angkaPrima(11)); // 
console.log(angkaPrima(13)); // 
console.log(angkaPrima(17)); // 
console.log(angkaPrima(19)); // 
console.log(angkaPrima(29)); // 
console.log(angkaPrima(31)); // 
console.log(angkaPrima(37)); // 
console.log(angkaPrima(41)); // 
console.log(angkaPrima(43)); // 
console.log(angkaPrima(47)); // 
console.log(angkaPrima(53)); // 
console.log(angkaPrima(61)); // 
console.log(angkaPrima(67)); // 
console.log(angkaPrima(71)); // 
console.log(angkaPrima(73)); // 
console.log(angkaPrima(79)); // 
console.log(angkaPrima(83)); // 
console.log(angkaPrima(89)); // 
console.log(angkaPrima(97)); // 
console.log(angkaPrima(101)); // 
*/