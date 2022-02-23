let array = [10, 20, 30, 40, 50];
// 1// fro creating clone of a array
// function isCloneArray(index) {
//     let clone = index.slice(0);
//     return clone;
// }
// console.log(`Original Array :${array}`);
// array.push(1000);
// console.log(`Clone Array :${isCloneArray(array)}`);
// isCloneArray(array);
// //second method
// let cloneArray = array.map(i => i);
// console.log(cloneArray);
////return first  N number of element from array

// 2.function get_n_num_Array(array, key) {
//     let temp;
//     if (array == null) {
//         return void 0;
//     }
//     if (key == 0) {
//         return array[0];
//     }
//     if (key <= array.length) {
//         temp = array.slice(0, key);
//     }
//     return temp;
// }
// console.log(get_n_num_Array(array, 3));

//Return 3 last Element from 
// function getLastElement(array, key) {
//     let temp;
//     if (key == 0) {
//         return array[0];
//     }
//     if (array == null) {
//         return void 0;
//     }
//     if (key <= array.length) {
//         temp = array.slice(array.length - 1);
//     }
//     return temp;
// }
// var getstore = getLastElement(array, 3);
// console.log(getstore);

//4 : join Array 
// function joinTwoArray(array) {
//     let secondArray = ["Black", "Green", "White", "Yello"];

//     secondArray = secondArray.join("+");
//    secondArray= secondArray.concat(array);
//     return secondArray;
// }

// let printArray = joinTwoArray(array);
// console.log(printArray);
//5 : Insert input from User

const num = window.prompt();
const str = num.toString();
const result = [str[0]];
  
for(let x=1; x<str.length; x++)
  {
    if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
     {
      result.push('-', str[x]);
     }
    else
     {
      result.push(str[x]);
     }
  }
console.log(result.join(''));



