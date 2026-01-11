/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times

*/

alert("Welcome to the Fautly Calculator that performs wrong operations 10% of the times");
let random = Math.random();
console.log(random);
let a = prompt("Enter First Number");
let b = prompt ("Enter Operation (+ , - , * , / )");
let c  = prompt("Enter Second Number");

let obj = {
    "+" : "-",
    "-" : "/",
    "*" : "+",
    "/" : "**"
}

if(random > 0.1) {
    console.log(`The result is ${a} ${b} ${c}`);
     alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
} else {
    b = obj[b];
    console.log(`The result is ${eval(`${a} ${b} ${c}`)}`);
}

/* Another Approach


alert("Welcome to the Calculator");

let num1 = Number(prompt("Enter First Number"));
let num2 = Number(prompt("Enter Second Number"));
let operator = prompt("Enter Operator (+ , - , * , / , **)");

let isFaulty = Math.random() < 0.1;

if(isFaulty) {
    if (operator === "+") operator = "-";
     else if (operator === "-") operator = "*";
      else if (operator === "*") operator = "/";
       else if (operator === "/") operator = "+";
}

let result;

if(operator === "+") result = num1 + num2 ;
else if(operator === "-") result = num1 - num2 ;
else if(operator === "*") result = num1 * num2 ;
else if(operator === "/") result = num1 / num2 ;
else if(operator === "**") result = num1 ** num2 ;

alert("Result: " + result);
*/