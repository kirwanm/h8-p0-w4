//Week-4 Exercise 15 Highest Score
/*
Implementasikan function highestScore untuk mendapatkan student dengan nilai tertinggi dari setiap class:
Output yang diharapkan berupa Object Literal dengan format sebagai berikut:

{
  <class>: { name: <name>, score: <score> },
  <class>: { name: <name>, score: <score> },
  <class>: { name: <name>, score: <score> }
}
*/

//Object Literal
function highestScore(students) {
  var classH = [];
  //var objHigh = {};
  var objClass = {};

  //looping simpan group class
  for(var i=0; i<students.length; i++) {
    var duplikat = false;
    for(j=0; j<classH.length; j++) {
      if(classH[j]===students[i]['class']) {
        duplikat = true;
      }
    }
    if(duplikat===false) {
      classH.push(students[i]['class']);
    }
  }
  //console.log(classH);
  
  for(i=0; i<classH.length; i++) {
    var scoreH = 0;
    //console.log(classH[i]);
    for(var j=0; j<students.length; j++) {
      if(classH[i]===students[j]['class'] && students[j]['score']>scoreH) {
        scoreH = students[j]['score'];
        var objHigh = {};
        objHigh['name']=students[j]['name'];
        objHigh['score']=scoreH;
        //console.log(objHigh);
        //var objClass = {};
        objClass[classH[i]] = objHigh;
      }
    }
  }
  //console.log(objClass);
  return objClass;
}
  
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}
  