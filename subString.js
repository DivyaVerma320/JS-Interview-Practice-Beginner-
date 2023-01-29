/*
Question[19]: How can you match substring of a sting?
Answer: Will use to pointer (one for string and another for the substring) while iterating the 
        string. And will have another variable to hold the starting index of the initial match.
*/

function subStringFinder(str, subStr){
    return str.includes(subStr); 
    //return str.indexOf(subStr);
}
  
console.log(subStringFinder('abbcdabbbbbck', 'ab'));

console.log(subStringFinder('abbcbck', 'bck'));

//OR
function subStringFinder(str, subStr){
  var idx = 0,
      i = 0,
      j = 0,
      len = str.length,
      subLen = subStr.length;

   for(; i<len; i++){
   
      if(str[i] == subStr[j])
         j++;
      else
         j = 0;
      
      //check starting point or a match   
      if(j == 0)
        idx = i;
      else if (j == subLen)
        return idx;
  }

  return -1;
}

console.log(subStringFinder('abbcdabbbbbck', 'ab'))

console.log(subStringFinder('abbcdabbbbbck', 'bck'));


//doesn't work for this one.
//subStringFinder('abbcdabbbbbck', 'bbbck')  
