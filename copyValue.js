//this is copy by value in this case the first value is not effect
//copy by value applicable only primitive data type ,number, string, boolean, null, undefine,symbole 
var a = 10;
var b = a;
b = b + 10;
console.log(a);
console.log(b);
// copy by referance it 
var obj = {
    fname: "Ramdayal",
    lname: "Patel",
    password: "ABCDEF"
}

let obj1 = obj;
console.log(obj1);
console.log(obj1 === obj);
obj1.password = "EFGH";
console.log(obj1);
