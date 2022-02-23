// function fun() {
//     console.log("I Am  Contain All Property");
// }

// var functionExperssion = function () {
//     console.log("Expression function");
// }

// var immediateFunction = function () {
//     console.log("Hello I Am Immediate Invoke Function Expression");
// }();
// fun();
// functionExperssion();

// let iife = function (argument1, argument2) {
//     console.log("sum");
//     return argument1 + argument2;
// }(10, 20);

const objectA = {
    first_name: "Innobit",
    last_name: "System",
    code_no: "1234"
}
console.log(objectA);
(function (argument1, argument2, objectA) {

    setTimeout(function (a, b) {
        let array = Object.keys(objectA.first_name);
        console.log(a + b);
        setInterval(()=> console.log(array), 1000);
    }, 2000, argument1, argument2, objectA);

})(100, 200, objectA);