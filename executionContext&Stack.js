
function fun1() {
    debugger;
    console.log("Function First stack 0");
    fun2();

}
function fun2() {
    console.log("function in stack 1");
    debugger;
    fun3();
}
function fun3() {
    console.log("function in stack 2");
    fun4();
}
function fun4() {
    console.log("function  in stack 3");
    fun5();
}
function fun5() {
    console.log("function in stack 4");

}
fun1();