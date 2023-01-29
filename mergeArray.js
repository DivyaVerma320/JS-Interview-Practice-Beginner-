/*
Question[6]: How would you merge two sorted array?
*/

function sortArray(a, b){
    const arr = [...a, ...b];//O/P => [2,5,6,9,1,2,3,29]
    const sortedArrr = arr.sort((a, b)=> {return a - b});//O/P =>[1,2,2,3,5,6,9,29] in ascending order
    //const sortedArrr = arr.sort((a, b)=> {return b - a});//O/P =>[29,9,6,5,3,2,2,1] in descending order
    return sortedArrr;

};
console.log(sortArray([2,5,6,9], [1,2,3,29]));

//OR

function sortArray(a, b){
    for(let i = 0; i < b.length; i++){
        a.push(b[i]);
    };
    console.log(a); //O/P => [2,5,6,9,1,2,3,29]
    for(let i = 0; i < a.length; i++){
        for(let j = i+1; j < a.length; j++){
            if(a[i]>a[j]){
                temp=a[i];
                a[i]=a[j];
                a[j]=temp;
            }
        }
    }
    return a; //O/P =>[1,2,2,3,5,6,9,29]
};
console.log(sortArray([2,5,6,9], [1,2,3,29]));


