// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(num1, num2){
    if(num2 === 0) return 1;
    else if(num2 === 1) return num1;
    num2--;
    return num1 * power(num1, num2);
}

console.log(power(2,2));