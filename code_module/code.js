
// Tail Recursive Fibonacci using an auxilary method
export function fibonacciTailRecursive(n) {

    // Using the accumulator trick, this has 2 accumulators
    function fib(n, acc1, acc2) {
        if (n == 0) {
            return acc1;
        }
        else {
            return fib(n-1, acc2, acc1+acc2);
        }
    }

    return fib(n, 0, 1); // 0 and 1 being the base cases
}
