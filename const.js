const obj = {
    fname: "Ramdayal",
    lname: "patel",
    age: 23,
    address: "Varanasi",
    edu: "Master of computer Applications",

}

var prom = new Promise(obj, (resolve, reject) => {

    setTimeout(() => {
resolve(console.log(`First_Name : ${ojb.fname} Last_Name : ${obj.lname} Age : ${obj.age}`));
    }, 1000,);

})
async function getfun(){
    let aa=await obj

}