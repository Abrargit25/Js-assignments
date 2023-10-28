console.log('Use for loop to iterate from 0 to 100 and print only even numbers.')

for(i=0;i<=100;i++){

if(i%2==0){
    console.log(i)
}
}

console.log('se for loop to iterate from 0 to 100 and print only odd numbers.')

for(i=0;i<=100;i++){

    if(i%2!==0){
        console.log(i)
    }
}

console.log('Use for loop to iterate from 0 to 100 and print the sum of all numbers.')
let sum=0;
for(i=0;i<=100;i++){

 
       sum+=i;
      
}

console.log(sum) 

console.log('se for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.')

let sum1=0;
let sum2=0;
for(i=0;i<=100;i++){

    if(i%2==0){
        sum1+=i;
    }
    }
    console.log('even',sum1)


    for(i=0;i<=100;i++){

        if(i%2!==0){
            sum2+=i;
        }
    }
    console.log('odds',sum2)

    console.log('Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array')

    let allEvenOdd=[];

    let even=sum1;
    let odd=sum2;

    allEvenOdd.push(even)
    allEvenOdd.push(odd)

console.log(allEvenOdd)

console.log('countires')

 

 


var countires=["ALBANIA","BOLIVIA","CANADA","DENMARK","ETHIOPIA","FINLAND","GERMANY","HUNGARY","IRELAND","JAPAN","KENYA"]

var countiresLength=[];
for (var i = 0; i < countires.length; i++){
let len=countires[i].length

countiresLength.push(len)
}

console.log("Using the above countries array, create an array for countries length.",countiresLength)


var countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];
var countriesLength = countries.map(function (country) {
    return country.length;
});

console.log("apporach 2:", countriesLength);


  var lgth = 0;
  var longest;
  
  for (var i = 0; i < countires.length; i++) {
    if (countires[i].length > lgth) {
      var lgth = countires[i].length;
      longest = countires[i];
    }
  }
  
  let bigchar=longest;
  
  console.log("biggest number of characters.",bigchar)

 

  function fiveletter(arr) {
    let FiveLetterCountries = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length==5) {
        FiveLetterCountries.push(arr[i]);
      }
    }
  
    return FiveLetterCountries;
  }
  
let fiveletters=fiveletter(countires)
console.log("apporach 1:",fiveletters)


function fiveLette1r(arr) {
    return arr.filter(country => country.length === 5);
}

let fiveLettr = fiveLette1r(countires);
console.log("apporach 2", fiveLettr);

let fiveltr=countires.filter(fivelttr)


function fivelttr(array1){
    return array1.length==5;
}
fivelttr(countires)

console.log('apporach 3',fiveltr)


console.log('Using the above countries array, reverse the order using loop without using a reverse method')

var countries2 = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];

var reversearray=[]

var Pop=0;

function arrayrev(array4){

for (let i = 0; i < array4.length; i++){
    
      Pop=countries2.pop(i)
      Push=reversearray.push(Pop);
}

}
arrayrev([...countries2])

console.log("apprach 1:",reversearray)


var countries1 = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];

var reversearray1=[]

var Pop1=0;

function arrayre1v(array5){

    for (let i = array5.length - 1; i >= 0; i--){
    
      Pop1=countries1.pop(i)
      Push=reversearray1.push(Pop1);
}

}

arrayre1v(countries1)

console.log("apprach 2:",reversearray1)

var reversearray2=[];

for (var i = countries.length - 1; i >= 0; i--) {
    reversearray2.push(countries[i]);
}

console.log("apprach 3:",reversearray2)




// git init

git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Abrargit25/Js-assignments.git
git push -u origin main











