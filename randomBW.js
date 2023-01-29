/*
Question[14]:If you have a function that generate random number between 1 to 5 how could u 
            generate random number 1 to 7 by using that function?
*/

function rand5(){
    return Math.floor(Math.random() * 5 + 1 );
 }
 
console.log(rand5());  
 
//random between two No.

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomInteger(5,10))




