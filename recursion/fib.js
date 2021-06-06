// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

// the correct way!!
// function fib(n) {
//   if (n <= 2) return 1;
//   return fib(n - 1) + fib(n - 2);
// }

function fib(num) {
  let count = 3;
  let prevprevNum = 1;
  let prevNum = 1;

  function fibonacci(number) {
    if (number <= 1 || number === 2) return 1;

    if (count === number) {
      return prevNum + prevprevNum;
    }
    count++;
    let currNum = prevNum + prevprevNum;
    prevprevNum = prevNum;
    prevNum = currNum;
    return fibonacci(number);
  }

  return fibonacci(num);
}

console.log(fib(4));