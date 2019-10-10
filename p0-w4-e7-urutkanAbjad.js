//Week-4 Exercise 7 Urutkan Abjad
/*
Diberikan sebuah function urutkanAbjad(str) yang menerima satu parameter berupa string.
Function tersebut akan mengembalikan string baru yang telah diubah urutan abjadnya dari a hingga z.
Contohnya, halo akan menjadi ahlo.
Kamu tidak perlu memikirkan apabila ada simbol ataupun angka didalam string tersebut.
*/

function urutkanAbjad(str) {
  var temp = [];
  var result = '';

  for(var i=0; i<str.length; i++) {
    temp.push(str[i]);
  }
  temp.sort(function(a,b) {return a>b});
  for(var i=0; i<temp.length; i++) {
    result += temp[i];
  }
  return result;
}

console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'