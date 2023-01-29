/*
Question[12]: How will you remove duplicate characters from a sting?
*/

// var x = "Int32,Int32,Int32,Int32,Int32,Int32,Int32,Int32,Int32,Double,Double,Double"
// x = Array.from(new Set(x.split(','))).toString();
// console.log(x);

function removeDuplicateChar(str){
    var len = str.length,
        char, 
        charCount = {}, 
        newStr = [];
    for(var i =0; i<len; i++){
      char = str[i];
      if(charCount[char]){
        charCount[char]++;
      }
      else
        charCount[char] = 1;
    }
    for (var j in charCount){
      if (charCount[j]==1)
         newStr.push(j);
    }
    return newStr.join('');
  }

  console.log(removeDuplicateChar('Learn javascript'));

  ///////////
  function str(string){
    const obj = {};
    let char;
   
     for(let i = 0; i< string.length; i++){
       char = string[i];
       if(obj[char]){
         obj[char]++
       } else {
           obj[char] = 1
       }
     }
     return obj;
   }
   
   console.log(str("AADDcccEr"))

   