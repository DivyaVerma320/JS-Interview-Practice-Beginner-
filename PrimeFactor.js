/*
Questionp[2]: How could you find all prime factors of a number?
Answer: Run a while loop. start dividing by two and if not divisible increase divider until 
        u r done.
*/  

function primeFactors(n){
    let factors = [],
         divisor= 2;

        while(n>2){
            if(n % divisor === 0){
                factors.push(divisor);
                n = n/divisor;
            } else {
                divisor++
            }
        }
        return factors;
  }
console.log(primeFactors(18));         


