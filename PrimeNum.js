/*
Question[1]: How would you verify a prime number?
Answer: a prime number is only divisible by itself and 1. So, i will run a while loop and 
        increase by 1.
*/

function isPrime(n){
    if(n < 2) return `${n} is not a prime num`;

    for(let i = 2; i < n; i++ ){
        if( n % i === 0 ){
            return `${n} is not a prime num`;
        }
    }
    return `${n} is a prime num`;
}

console.log(isPrime(7));

//OR

/*the divisor are increased 1 at a time. after 3 i can increase by 2. if a number is divisible 
by any even number, it will be divisible by 2.*/

function isPrime2(n2){
    let divisor2 = 3;//a number could be divisible by numbers 1/3 of its value.
    limit = Math.sqrt(n2);

    if(n2 == 2 || n2 == 3)
        return true;
    if(n2 % 2 == 0)
        return false;

    while(divisor2 <= limit){
        if(n2 % divisor2 == 0)
        return false;
        divisor2 += 2;
    }
    return true;
};
//console.log(isPrime2(25));


