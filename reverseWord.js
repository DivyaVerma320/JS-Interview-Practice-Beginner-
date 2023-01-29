/*
Question[9]: How would you reverse words in a sentence?
Question[10]: If you have a string like "I am the good boy". How can you generate 
            "I ma eht doog yob"? Please note that the words are in place but reverse.
*/

//------------
function reverseWords9(str9){
    return str9.split(' ').reverse().join(' ');
  };

console.log(reverseWords9('you are a nice dude'));

//----reverse in place
function reverseWords10(str10){
    return str10.split(' ').reverse().join(' ').split('').reverse().join('');
  };

console.log(reverseWords10('you are a nice dude'));


