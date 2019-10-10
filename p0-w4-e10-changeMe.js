//Week-4 Exercise 10 Change Me
/*
Diberikan sebuah function changeMe(arr) yang menerima satu parameter berupa array multidimensi
dimana array tersebut berisi value (pasti berurut dari kiri ke kanan):
First Name, Last Name, Gender dan Birth Year.
Fungsi ini akan menampilkan object literal yang memiliki property firstName, lastName, gender dan age.
Nilai age didapatkan dari tahun sekarang dikurang tahun lahir.
Jika tahun lahir tidak diisi atau tahun lahir lebih besar dibandingkan tahun sekarang
maka age akan berisi 'Invalid Birth Year'.

Contoh, jika arr inputan adalah [['Platinum', 'Fox', 'female', 1995], ['John', 'Doe', 'male', 2000]]
maka output:
Platinum Fox: { firstName: 'Platinum', lastName: 'Fox', gender: 'female', age: 23 }
John Doe: { firstName: 'John', lastName: 'Doe', gender: 'male', age: 18 }
*/

function changeMe(arr) {
  var objPerson = {};
  var obj = {};
  var nama = '';

  for(var i=0; i<arr.length; i++) {
    nama = arr[i][0] + ' ' + arr[i][1];
    for(var j=0; j<arr[i].length; j++) {
      switch(j) {
        case 0: objPerson['firstname'] = arr[i][j]; break;
        case 1: objPerson['lastname'] = arr[i][j]; break;
        case 2: objPerson['gender'] = arr[i][j]; break;
        case 3: {
            if(arr[i][j]>2019) {
              objPerson['age'] = 'Invalid Birth Year'; break;
            }
            else {
              objPerson['age'] = 2019-arr[i][j]; break;
            }
        }
      }
    }
    if(arr[i].length===3) {objPerson['age'] = 'Invalid Birth Year';}
    console.log(nama + ': ');
    console.log(objPerson); 
  }
}

changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""