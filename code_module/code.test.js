import { fibonacciTailRecursive } from "./code.js";
import jsc from 'jsverify';


// Standard Fibonacci Function, not using tail recursion
function fibonacciStandard(n) {
    if (n <= 1) { return n; }

    return fibonacciStandard(n-1) + fibonacciStandard(n-2);
}

    /* Custom Testing */

const numTests = 100000; // Sufficiently large number of tests
const maxInputSize = 30; // Not too large so runtime doesn't skyrocket

for (let count = 0; count < numTests; count++) {
    const randomInput = jsc.random(0, maxInputSize);

    const standardFib = fibonacciStandard(randomInput);
    const tailFib = fibonacciTailRecursive(randomInput);

    if (standardFib != tailFib) {
        console.assert(standardFib == tailFib, "The two fib calculations were not equal...");
        throw "The two fib calculations were not equal...";
    }
}

console.assert(true, "If you see this message, it's oppsite day.");
