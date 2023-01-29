//0,1,1,2,3,5....
/*
Question[3]: How do get nth Fibonacci number?
Answer: I create an array and start from iterate through.
*/

function Fibonacci(n){
    let fibo = [0,1];

    if(n <= 1) return 1;

    for(let i = 2; i <= n; i++ ){
        fibo[i] = fibo[i-1] + fibo[i-2];
        //fibo[2] = fibo[1] + fibo[0] => 1+0 => 1 hence, fibo = [0,1,1,..]
    }
    return fibo[n]; // fibo[12] o/p => 144
    //return fibo; //o/p=> [0,1,1,2,3,5,8,13,21,34,55,89,144]
};

console.log(Fibonacci(12));

//OR (make it recursive)

function Fibonacci(n){
    if(n === 1 || n === 0){
        return n;
    } else {
        return Fibonacci(n-1) + Fibonacci(n-2);
    }
};
console.log(Fibonacci(7));

/*
                                        7
                   
                        5                              6
                   3          4                  4              5
                 1    2    2     3            2     3      3        4
               1     1 0  1 0  1   2         1 0  1  2   1  2    2    3
                                  1 0               1 0    1 0  1 0  1  2
                                                                       1 0

               1+    1+   1+   1+ 1+        1+   1+ 1+   1+ 1+  1+   1+ 1 = 13
*/
/*
fibonacci(7)
    fibonacci(5)
        fibonacci(3)
            fibonacci(1) = 1+
            fibonacci(2)
                fibonacci(0)
                fibonacci(1) =1+
        fibonacci(4)
            fibonacci(2)
                fibonacci(0)
                fibonacci(1) =1+
            fibonacci(3)
                fibonacci(1) =1+
                fibonacci(2)
                    fibonacci(0)
                    fibonacci(1) =1+
    fibonacci(6)
        fibonacci(4)
            fibonacci(2)
                fibonacci(0)
                fibonacci(1) =1+
            fibonacci(3)
                fibonacci(1) =1+
                fibonacci(2)
                    fibonacci(0)
                    fibonacci(1) =1+
        fibonacci(5)
            fibonacci(3)
                fibonacci(1) =1+
                fibonacci(2)
                    fibonacci(0)
                    fibonacci(1) =1+
            fibonacci(4)
                fibonacci(2)
                    fibonacci(0)
                    fibonacci(1) =1+
                fibonacci(3)
                    fibonacci(1) =1+
                    fibonacci(2)
                        fibonacci(0)
                        fibonacci(1) =1+    =======13
*/






