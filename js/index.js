// 1-MASALA

// function sumNum(arg) {
//   let sum = 0;
//   for (let i = 0; i < arg.length; i++) {
//     sum += arg[i];
//   }
//   return sum;
// }

// let arr = [3, 2, 5, 7];

// console.log(sumNum(arr));

// 2-MASALA

// function minNum(arg) {
//   let min = arg[0];
//   for (let i = 0; i < arg.length; i++) {
//     if (arg[i] < min) {
//       min = arg[i];
//     }
//   }
//   return min;
// }

// let arr = [5, 8, 10, 2, 6];

// console.log(minNum(arr));

// function minNum(arg) {
//   let res = Math.min(...arg);
//   return res;
// }

// let arr = [5, 8, 10, 2, 6];

// console.log(minNum(arr));

// 3-MASALA

// function lenElements(arg) {
//   let res = [];
//   for (let i = 0; i < arg.length; i++) {
//     if (typeof arg[i] == "string") {
//       res.push(arg[i].length);
//     }
//   }
//   return res;
// }

// let arr = [1, 4, true, "salom", "bolalar", undefined];

// console.log(lenElements(arr));

// 4-MASALA

// function decreaseNum(arg) {
//   return arg.sort(function (a, b) {
//     return b - a;
//   });
// }

// let arr = [3, 1, 7, 2, 9, 5];

// console.log(decreaseNum(arr));

// 5-MASALA

// function concatArr(arg1, arg2) {
//   return arg1.concat(arg2);
// }

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];

// console.log(concatArr(arr1, arr2));

// 6-MASALA

// function reverseArr(arg) {
//   let res = [];
//   for (let i = arg.length - 1; i >= 0; i--) {
//     res.push(arg[i]);
//   }
//   return res;
// }

// let arr = ["hello", "world", "Prime", 1, 2, 3];

// console.log(reverseArr(arr));

// 7-MASALA

// function positiveNum(arg) {
//   let res = [];
//   for (let i = 0; i < arg.length; i++) {
//     arg[i] > 0 ? res.push(arg[i]) : null;
//   }

//   return res;
// }

// let arr = [1, 24, 23, 41, 12, -9, -2];

// console.log(positiveNum(arr));

// 8-MASALA

// function addElements(arg, element) {
//   let res = [];
//   for (let i = 0; i < arg.length; i++) {
//     res.push(arg[i] + element);
//   }
//   return res;
// }

// let arr = [1, 2, 3, 4, 5];
// let el = "salom";

// console.log(addElements(arr, el));

// 9-MASALA

// function positiveNegativeElements(arg) {
//   let res1 = [];
//   let res2 = [];
//   for (let i = 0; i < arg.length; i++) {
//     if (arg[i] > 0) {
//       res1.push(arg[i]);
//     } else {
//       res2.push(arg[i]);
//     }
//   }
//   return {
//     res1,
//     res2,
//   };
// }

// let arr = [1, 2, 4, 5, 4, 2, -2, -1, -23, -7, 9];
// let res = positiveNegativeElements(arr);
// console.log(res.res1);
// console.log(res.res2);

// 10-MASALA

// function stringNum(arg) {
//   let res = [];
//   for (let i = 0; i < arg.length; i++) {
//     if (typeof arg[i] == "string" && !isNaN(arg[i])) {
//       res.push(Number(arg[i]));
//     }
//   }
//   return res;
// }

// let arr = ["2", "3", "7", "salom"];

// console.log(stringNum(arr));

// 11-MASALA

// function averageArr(arg) {
//   let sum = 0;
//   let len = arg.length;
//   for (let i = 0; i < arg.length; i++) {
//     sum += arg[i];
//   }
//   return sum / len;
// }

// let arr = [2, 5, 9, 1, 7, 3];

// console.log(averageArr(arr));

// 12-MASALA

// function evenOddElements(arg) {
//   let res1 = [];
//   let res2 = [];
//   for (let i = 0; i < arg.length; i++) {
//     if (arg[i] % 2 == 0) {
//       res1.push(arg[i]);
//     } else {
//       res2.push(arg[i]);
//     }
//   }
//   return {
//     res1,
//     res2,
//   };
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let res = evenOddElements(numbers);
// console.log(res.res1);
// console.log(res.res2);

// 13-MASALA

// function removeElemenst(arg, element) {
//   let res = [];
//   for (let i = 0; i < arg.length; i++) {
//     if (arr[i] !== element) {
//       res.push(arr[i]);
//     }
//   }
//   return res;
// }

// let arr = [1, 2, 4, 5, "salom", "dunyo", true];
// let el = "salom";

// console.log(removeElemenst(arr, el));

// 14-MASALA

// function greet(arg) {
//   let res = [];
//   for (let i = 0; i < arg.length; i++) {
//     res.push(arg[i] ** 2);
//   }
//   return res;
// }

// let arr = [1, 2, 3, 4];

// console.log(greet(arr));

// 15-MASALA

// function doubleElements(arg) {
//   let res = [];
//   for (let i = 0; i < arg.length; i++) {
//     res.push(arg[i] * 2);
//   }
//   return res;
// }

// let arr = [1, 2, 3, 4, 5];

// console.log(doubleElements(arr));

// 16-MASALA
// function removeElements(arg) {
//   let res = [];
//   for (let i = 0; i < arg.length; i++) {
//     if (arg[i] !== null && arg[i] !== undefined) {
//       res.push(arg[i]);
//     }
//   }
//   return res;
// }

// let arr = [1, 23, 5, 4, undefined, null];
// console.log(removeElements(arr));

// 17-MASALA

// function capitalizeStrings(arg) {
//   let res = [];
//   for (let i = 0; i < arg.length; i++) {
//     let capitalize = arg[i].charAt(0).toUpperCase() + arg[i].slice(1);
//     res.push(capitalize);
//   }

//   return res;
// }

// let arr = ["assalomu", "alaykum", "bolalar"];

// console.log(capitalizeStrings(arr));

// 18-MASALA

// function countElement(arr, element) {
//   let count = 0;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] == element) {
//       count++;
//     }
//   }
//   return count;
// }
// let el = 3;
// let numbers = [1, 2, 3, 4, 3, 5];

// console.log(countElement(numbers, el));

// 19-MASALA
// function addElementsMiddle(arg, addElements) {
//   let arrMiddle = Math.floor(arg.length / 2);
//   for (let i = 0; i < addElements.length; i++) {
//     arg.splice(arrMiddle + i, 0, addElements[i]);
//   }

//   return arg;
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let el = ["hello", "world"];

// console.log(addElementsMiddle(arr, el));

// 20-MASALA

// function sortStringLength(arg) {
//   return arg.sort(function (a, b) {
//     return a.length - b.length;
//   });
// }

// let arr = ["salom", "iq", "javascript", "bolalar"];

// console.log(sortStringLength(arr));

// 21-MASALA

// function maxLengthString(arg) {
//   let max = "";
//   for (let i = 0; i < arg.length; i++) {
//     if (arg[i].length > max.length) {
//       max = arg[i];
//     }
//   }
//   return max;
// }

// let arr = ["salom", "iq", "javascript", "bolalar"];

// console.log(maxLengthString(arr));

// 22-MASALA

// function greet(arg) {
//   return arg.join(", ");
// }

// let arr = ["salom", 1, 2, 3, "dunyo"];
// console.log(greet(arr));

// 23-MASALA

// function onlyNumbers(arg) {
//   let res = [];
//   for (let i = 0; i < arg.length; i++) {
//     if (typeof arg[i] == "number") {
//       res.push(arg[i]);
//     }
//   }
//   return res;
// }

// let arr = [1, 2, 42, 13, 94, 8, true, "salom", undefined];

// console.log(onlyNumbers(arr));

// 24-MASALA

// function lastElement(arg, element) {
//   return arg.slice(-element);
// }

// let arr = [1, 2, 3, 4, 5, "salom", "dunyo"];
// console.log(lastElement(arr, 1));
