/*
Question[20]:How would you create all permutation of a string?
*/

let permutation = (str, result) => {
    if(str.length == 0){
        console.log(result);
    }
    for(let i = 0; i < str.length; i++){
        let rest = str.substring(0,i) + str.substring(i+1);//''+ et(first time)
        //console.log(rest);
        permutation(rest, result + str[i])//('et', 'l')first time.
    }
}
permutation('let', '');


