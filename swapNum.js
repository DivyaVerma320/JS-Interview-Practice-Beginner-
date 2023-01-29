/*
Question[7]: How would you swap two numbers without using a temporary variable?
*/

function swapNum(a,b){
    console.log(`a: ${a}, b: ${b}`);
    
     b = b - a;
     a = a + b;
     b = a - b;

    //[a,b]=[b,a]

    console.log(`a: ${a}, b: ${b}`);
};

swapNum(1,2);