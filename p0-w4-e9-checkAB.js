//Week-4 Exercise 9 Check AB
/*
Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string.
Function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b
yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali,
kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.
*/

function checkAB(str) {
  var indeks = [[], []];
  var result = false;
  for(var i=0; i<str.length; i++) {
    if(str[i]==='a') {
      indeks[0].push(i);
    }
    else if(str[i]==='b') {
      indeks[1].push(i);
    }
  }
  for(var i=0; i<indeks[0].length; i++) {
    for(var j=0; j<indeks[1].length; j++) {
      if(Math.abs(indeks[0][i]-indeks[1][j])===4) {
        result = true;
      }
      else {
        if(result===false) {
          result = false;
        }
      }
    }  
  }
  //console.log(indeks); 
  return result;
}

console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i amasick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false