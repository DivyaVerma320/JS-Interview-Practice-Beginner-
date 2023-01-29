/*
Question[15]:You have an array of numbers 1 to 100 in an array. Only one number is missing in 
            the array. The array is unsorted. Find the missing number.
Answer: Using summation of first N natural numbers. Find the sum of the numbers in the range 
        [1, N] using the formula N * (N+1)/2. Now find the sum of all the elements in the array 
        and subtract it from the sum of the first N natural numbers. This will give the value of 
        the missing element.
*/

function missingNum(num){
    let n = num.length + 1,
    sum = 0,
    sumOfNum = n * (n + 1)/2;

    for(let i = 0; i < num.length; i++){
        sum += num[i];
    }
    return sumOfNum - sum;

};

console.log(missingNum([1,3]));


