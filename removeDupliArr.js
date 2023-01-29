//Question[5]: How would you remove duplicate members from an array?

function duplicateArr(arr){
    let set = [...new Set(arr)];
    return set;
};
console.log(duplicateArr([1,1,2,3,4,4,5,6,3]));

//OR

function duplicateArr(arr){
    let array = [],
        exsit = {},
        elm;

    for(let i = 0; i < arr.length; i++){
        elm = arr[i];
        if(!exsit[elm]){
            array.push(elm);
            exsit[elm] = true;
        }
    }
    return array;
};
console.log(duplicateArr([1,1,2,3,4,4,5,6,3]));

