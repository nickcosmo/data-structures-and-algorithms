// Big O of this solution is roughly O(2^n) -> BAD!

function fib(n) {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

// console.log(fib(9));

// A better solution using dynamic programming with memoization
// idea here is that each sub problem is only solved once
// Big O of this solution is roughly O(N) -> MUCH BETTER!

function fib2(n, memo = []) {
    if (memo[n] !== undefined) return memo[n];
    if (n <= 2) return 1;
    let res = fib2(n - 1, memo) + fib2(n - 2, memo);
    memo[n] = res;
    return res;
}

// console.log(fib2(6));

// Another solution using dynamic programming with tabulation
// Big O of this solution is roughly O(N) -> STILL GOOD!
// Better space complexity vs memoized version so less risk of stack overflow error

function fib3(n) {
    if (n <= 2) return 1;
    let fibArr = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
    }
    return fibArr[n];
}

console.log(fib3(6));

