//Ques: explain closure

function closures() {
    let test = "divya";
    return function () {
      test = "Al";
      console.log("test--", test);
    };
  }
  
  // const innerFunc = closures();
  // innerFunc();
  //But the above one is best practice
  closures()(); // we can also call the outer and inner func both together
  

  // Ques: Implement this --> delay(3000).then(() => alert("runs after 3 seconds"))
function delay(time) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("error");
    }, time);
  });
}
delay(3000)
  .then(() => alert("runs after 3 seconds"))
  .catch((error) => alert(error));


  

 //Ques: predict the output?
function buildFunction() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    //As we know that "for" loop is synchronous and it will called immediatly before the code inside of it.
    var j = i; //imp line think carefully\
    arr.push(function () {
      return j;
    });
    //------Different way to solve the problem without using "let"--------------
  /* 
    arr.push(console.log.bind(null, j));
    console.log.bind(null, j) creates a new function with j as its first argument.
   */ 
  
     /**
     * 
      The code works because Function.prototype.bind creates a new function with a specified this value and initial arguments. When you use bind with console.log, it effectively pre-defines the arguments that console.log will use when it's eventually called.
     */
    // (function (j) {
    //   arr.push(function () {
    //     return j;
    //   });
    // })(j);
    //---> (IIFE)another way to solve this problem without using "let", so basically this will call immediatly with every for loop and then we will sending the exact actual value of "i", inside of "j", that's why the output is [0,1,2]
  }
  console.log(arr);
  return arr;
}

var fs = buildFunction();
console.log("1", fs[0]());
console.log("2", fs[1]());
console.log("3", fs[2]());
/**
Explanation

-->Variable Scope:

var i and var j are declared with var, making them function-scoped rather 
than block-scoped. This means that the same j variable is shared across all 
iterations of the loop.


-->Closure:

Each function pushed to arr forms a closure over the j variable.
 When the functions are eventually called, they reference the same j variable,
  which holds the value from the last iteration of the loop (2 in this case).
 */
