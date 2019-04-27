// 1. What would be the output of following code?
var strA = "hi there";
var strB = strA;
strB="bye there!";
console.log (strA)

// hi there
// Strings are passed by value, that is, copied.

// 2. What would be the output of following code?
var objA = {prop1: 42};
var objB = objA;
objB.prop1 = 90;
console.log(objA)


// {prop1: 90}
// Objects are passed by reference, that is, objA and objB point to the same object in memory.

// 3. What would be the output of following code?
var objA = {prop1: 42};
var objB = objA;
objB = {};
console.log(objA)

// {prop1: 42}.
// When we assign objA to objB, the objB variable will point to the same object as the objA variable.However, when we reassign objB to an empty object, we simply change where objB variable references to. This doesn't affect where objA variable references to.

// 4. What would be the output of following code?
var arrA = [0,1,2,3,4,5];
var arrB = arrA;
arrB[0]=42;
console.log(arrA)

// [42,1,2,3,4,5].
// Arrays are object in JavaScript and they are passed and assigned by reference.

// 5. What would be the output of following code?
var arrA = [0,1,2,3,4,5];
var arrB = arrA.slice();
arrB[0]=42;
console.log(arrA)

// [0,1,2,3,4,5]
// The slice function copies all the elements of the array returning the new array.

// 5. What would be the output of following code?
var arrA = [{prop1: "value of array A!!"},  {someProp: "also value of array A!"}, 3,4,5];
var arrB = arrA;
arrB[0].prop1=42;
console.log(arrA);

// [{prop1: 42}, {someProp: "also value of array A!"}, 3,4,5]

// 6. What would be the output of following code?
var arrA = [{prop1: "value of array A!!"}, {someProp: "also value of array A!"},3,4,5];
var arrB = arrA.slice();
arrB[0].prop1=42;
arrB[3] = 20;
console.log(arrA);

// [{prop1: 42}, {someProp: "also value of array A!"}, 3,4,5]
// The slice doesn't do deep copying. Instead it does shallow copying. You can imagine slice implemented like this:
// function slice(arr) {
//    var result = [];
//    for (i = 0; i< arr.length; i++) {
//        result.push(arr[i]);
//    }
//    return result;
// }

// arr[0] is an object {prop1: "value of array A!!"}. Only the reference to this object will be copied
