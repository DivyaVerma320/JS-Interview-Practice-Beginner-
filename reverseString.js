/*
Question[8]: How would you reverse a string in JavaScript?
*/

function reverse(str){
    return str.split('').reverse().join('');
};
console.log(reverse('you are a nice dude'));

//OR

function reverse1(str1){
    let revStr = '';
    for(let i = str1.length-1; i >= 0 ; i--){
        revStr += str1[i]
    }
    return revStr;
}
console.log(reverse1('you are a nice dude'));



