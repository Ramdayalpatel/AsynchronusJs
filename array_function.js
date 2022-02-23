var is_Array = function (input) {
    if (toString.call(input) === "[object Array]") {
        return true;
    }
    else {
        return false;
    }

}
console.log(is_Array([1, 2, 3, 4, 5, 6, 7]));
console.log(is_Array(["welCome to Array list"]));

