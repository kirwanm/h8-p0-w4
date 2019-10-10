//Week-4 Exercise 3 Mencari Median
/*
Diberikan sebuah function cariMedian(arr) yang menerima sebuah array angka.
Function akan me-return median dari deret angka tersebut.
Median adalah nilai tengah dari sebuah deret bilangan.
Contoh, median atau dari [1, 2, 3, 4, 5] adalah 3 yang merupakan nilai yang ada di posisi tengah
dari deret tersebut. Median dari deret yang berjumlah genap adalah rata-rata dari dua nilai tengah.
Contoh, median dari [1, 2, 3, 4] adalah 2.5, karena ((2 + 3) / 2).
*/

function cariMedian(arr) {
  var numIdxTengah = 0;
  
  if(arr.length % 2 === 0) {
    numIdxTengah = (arr.length / 2) - 1;
    return (arr[numIdxTengah] + arr[numIdxTengah+1]) / 2;
  }
  else {
    numIdxTengah = ((arr.length - 1) / 2);
    return arr[numIdxTengah];   
  }
}

console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5