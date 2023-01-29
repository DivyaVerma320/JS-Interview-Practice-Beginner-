/*
Question[13]: How will you verify a word as plaindrome?

Answer: if you reverse a word and it becomes same as the previous word, it is called palindrome.
*/

function isPalindrome(str){
    let strLen = str.length
    let strLen2 = Math.floor(strLen);

    for(let i = 0; i < strLen2/2; i++){
        if(str[i] !== str[strLen - 1 -i]){
            return `${str} is not plaindrome`
        }
    }
    return `${str} is a palindrome`;
};

console.log(isPalindrome('madam'));  

//OR

function isPalindrome2(str2){
    return str2 == str2.split('').reverse().join(''); 
};

console.log(isPalindrome2('madam'));