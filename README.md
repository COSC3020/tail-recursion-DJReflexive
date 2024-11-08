# Tail Recursion

In the lectures, we've seen code for a recursive implementation for computing
the Fibonacci numbers. Make this implementation tail-recursive. I have not
provided a template; depending on how you choose to implement the function, it
will have a different signature.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

Hint: It may help to have a look at the iterative dynamic programming
implementation. What changes between iterations of the loop?

# Runtime Analysis

Is the asymptotic complexity of tail-recursive Fibonacci different from the
non-tail-recursive version? Why, or why not, and what is the complexity
(worst-case $\Theta$)? Add your answer, including your reasoning, to this
markdown file.


## My Runtime Analysis

When the fibonacciTailRecursive() is called, all that it does is call an auxilary function (local function) using 2 accumulators initialized to 0 and 1. This operation is constant.

Inside the auxilary function fib(), here's where the tail recursion occurs. When the recursive call happens, most of the arithmetic occurs in the arguments themselves. And since there is only one recursive call, this algorithm can execute in linear time - $\Theta(n)$.

The asymptotic complexity of the standard recursive fibonacci function is slower than the tail recursive version. The standard recursive function (which can be found in the code.test.js file), has two recursive calls at the end. As more and more calls happen, it grows exponentially, meaning the standard recursive version has a complexity of $\Theta(2^n)$. Since the recursive version above is only linear time, this makes the tail recursive much faster than the standard version.


# Sources

- ChatGPT - For runtime complexity of the standard fibonacci function. (I deduced the runtime of the recursive fibonacci myself).

# Plagiarism Acknowledgement

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.