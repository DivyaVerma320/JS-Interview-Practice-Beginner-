/*
Question[17]: How would you find the largest sum of any two elements?
*/


function largeNum(arr){
    let number = arr.sort((a,b) => b-a);
    console.log(number);//[56,32,21,5,3,1]
    return number[0] + number[1] // 56 + 32 = 88(largseNum)
};      

console.log(largeNum([1,5,32,56,21,3]))

//OR

function topSum(arr){
    let biggest = arr[0],//1
        second = arr[1],//2
        len = arr.length;

        if(len<2) return null;

        if(biggest<second){
            biggest = arr[1]//2
            second = arr[0]//1
        }

        for(let i = 2; i < len; i++){
            if(arr[i]>biggest){//64>2
                second = biggest //2
                biggest = arr[i] //64
            } else if(arr[i]>second){//4>2
                second = arr[i];//4...//21
            }
        }
        return biggest + second //64+21
}

console.log(topSum([1,2,64,4,2,21,12]));
    






