//Week-4 Exercise 8 Tukar Besar Kecil
/*
Diberikan function tukarBesarKecil(kalimat) yang menerima satu parameter berupa string.
Function akan me-return string tersebut dengan menukar karakter yang uppercase menjadi lowercase,
dan sebaliknya. Spasi dan simbol diabaikan.
*/

function tukarBesarKecil(kalimat) {
  var abjad = 'abcdefghijklmnopqrstuvwxyz';
  var ABJAD = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var result = '';
  var alphabet = true;

  for(var i=0; i<kalimat.length; i++) {
    for(j=0; j<26; j++) {
      if(kalimat[i]===abjad[j]) {
        result += ABJAD[j];
        alphabet = true;
        j=25;
      }
      else if(kalimat[i]===ABJAD[j]) {
        result += abjad[j];
        alphabet = true;
        j=25;
      }
      else {
        alphabet = false;
      }
    }
    if(alphabet===false) {
      result += kalimat[i];
    }
  }
  return result;
}

console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"