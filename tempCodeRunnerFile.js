/*
Question[16]: From a unsorted array, check whether there are any two numbers that will sum up 
            to a given number?
*/

function sumOfTwo(arr, sum){
    let arrLen = arr.length;

    for(let i = 0; i < arrLen-1; i++){
        for(let j = i+1; j < arrLen; j++){
            if(arr[i] + arr[j] == sum){
                return true;
            }
        }
    }
    return false;
};

console.log(sumOfTwo([1,2,6,3,5,3], 5))

/*
Interviewer: What is the time complexity of this function

You: O(n2)

Interviewer: Can you make this better

You: Let me see. I can have an object where i will store the difference of sum and element. 
And then when i get to a new element and if i find the difference is the object, then i have a 
pair that sums up to the desired sum.
*/

function sumFinder(arr, num) {
    let obj = {},
    diff;

    for(let i = 0; i < arr.length; i++){
        diff = num - arr[i];
        if(obj[diff]){
            return true;
        } else {
            obj[arr[i]] = true;
        }
    }
    return false;
}
  let sumFinderResult = sumFinder([6, 4, 3, 2], 7);
  console.log(sumFinderResult);

/*
diff = 7 - 6
// diff is now assigned 1
Since a key of 1 doesn't yet exist in our object, we will insert arr[i], or 6 as a key in our 
object. Now on the second loop iteration, our num is 7 (the num never changes). The arr[i] is 4,
and the diff is therefore 3. Since 3 is not yet a key in our object, we will add arr[i], or 4 
as a key in our object. On the third loop iteration, our num is 7, the arr[i] is 3, and the 
diff is therefore 4. This time, 4 is a key in our object, so we return true. We return true 
because we have successfully figured out that there are two numbers in our array (3 and 4) that 
will sum up to our given number (7).
*/  