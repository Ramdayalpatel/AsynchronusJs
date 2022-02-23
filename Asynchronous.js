//This is Syncronous function
// function fun2() {
//     console.log("fun2 is starting");

// }

// const fun1 = () => {
//     console.log("fun1 is starting");
//     fun2();
//     console.log("fun1 is ending");
// }
// fun1();
//*** This Asynchronous functions */
const fun1 = () => {
    console.log("fun1 is starting ");
    fun2();
    console.log("fun1 is ending");
}
const fun2 = () => {
    let start = 0;
    setTimeout(() => {
        // while (start <= 10) {
        //     +
        //         setInterval(() => {
        //             console.log("Ready To go");
        //         }, 1000);
        //     start++;
        // }
        console.log("Ready To GO!");
    }, 3000);
}
fun1();