//Week-4 Exercise 4 Mencari Modus
/*
Diberikan sebuah function cariModus(arr) yang menerima sebuah array angka.
Function akan me-return modus dari array atau deret angka tersebut.
Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul.
Contoh, modus dari [10, 4, 5, 2, 4] adalah 4. Jika modus tidak ditemukan, function akan me-return -1.
Apabila ditemukan lebih dari dua nilai modus, tampilkan nilai modus yang paling pertama muncul
(dihitung dari kiri ke kanan).
Dan apabila di dalam modus hanya ada 1 nilai yang sama maka function akan me-return -1,
contohnya [1, 1, 1] adalah -1.
*/

function cariModus(arr) {
  var numHasil = 0;
  var result = [];
  for(var i=0; i<arr.length; i++) {
    var counter = 1;
    for(var j=i+1; j<arr.length; j++) {
      if(arr[j]===arr[i]) {
        counter ++;
      }
    }
    if(counter>1) {result.push(arr[i]); result.push(counter)};
    if(counter===arr.length) {i=arr.length};
  }
  //console.log(result);
  if(result.length===0) {
    numHasil = -1;
  }
  else {
    for(var i=result.length-1; i>-1; i-=2) {
      if(result[i]!==arr.length) {
        numHasil = result[i-1];
      }
      else {
        numHasil = -1;
      }
    }
  }
  return numHasil;
}

console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1