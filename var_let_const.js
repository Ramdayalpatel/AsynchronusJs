//const a = 10;

var f = (num) => {
    var a = 11;
    var b = () => {
        console.log(a + num);
    }
    b();
}

f(100);