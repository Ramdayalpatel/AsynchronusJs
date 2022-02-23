// //Object1

const object = {
    first_name: "Ramdayal",
    last_name: "Patel",
    password: "12345",
    user_address: "Ghaziabad",
    sortArray: function (array) {
        for (let i = 0; i < array.length; i++) {
            let temp;
            for (let j = 0; j < array.length; j++) {
                if (array[j] > array[i]) {
                    temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
        }
        return array;
    }
}
// //object Sencond
const object1 = {
    first_name: "Ajay",
    last_name: "Singh",
    password: "102030",
    user_address: "VNS"
}

// console.log(object === object);
// console.log(object == object);
// console.log(Object.is(object, object1));

// object2 = object;
// console.log(object);
// object2.password = "ABCD";
// console.log(object2);
// console.log('65' == 65);
// console.log('object' == object);
// console.log(object)

function objectCompare(object1, object2) {
    let flag = false;
    if (Object.is(object1, object2)) {
        return flag = true;
    } else {
        return flag = false;
    }

}

const array = [20, 30, 80, 50, 12, 34, 05, -1, 4, 6];
var $status = objectCompare(object, object1);
console.log($status);

console.log(object.sortArray(array));


