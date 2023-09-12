"use strict";
const number1 = document.getElementById("num1");
const number2 = document.getElementById("num2");
const buttonElement = document.querySelector("button");
const numberResults = [];
const stringResults = [];
function add(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else if (typeof num1 === "string" && typeof num2 === "string") {
        return num1 + " " + num2;
    }
    return +num1 + +num2;
}
function printResults(resObj) {
    console.log(resObj.val);
}
buttonElement.addEventListener("click", () => {
    const n1 = number1.value;
    const n2 = number2.value;
    const result = add(+n1, +n2);
    const stringResult = add(n1, n2);
    stringResults.push(stringResult);
    numberResults.push(result);
    printResults({ val: result, timeStamps: new Date() });
    console.log(numberResults, stringResults);
});
const myPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res("It worked");
    }, 2000);
});
myPromise.then((result) => {
    console.log(result);
});
