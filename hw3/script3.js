// ####Задача 1

// Создать имплементацию функции `forEach`, логика работы такая же как и у родного метода.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию

// ```javascript
// const arr = [1,2,3];
// forEach(arr, function(item, i, arr) {});


// ЗАДАЧА 1 РЕШЕНИЕ 

// function forEach1 (arr, second){
//     let arr1 = [];
//     if (Array.isArray(arr) 
//             && 
//         typeof second === 'function') {
//       for (let i=0; i< arr.length; i++) {
//         arr1.push(arr[i]);
//         second(arr1[i],i,arr)
//       }
//     } else {
//       throw new Error ('Error');
//     }
//     return arr1;
//   }
//   const arr = [1,2,3];
// forEach1(arr, function(item, i, arr) {
//     console.log(item +': '+ i + ' of ' + arr); });

//////////////////////////////////////////////////////////////////////////////////////////

// ####Задача 2

// Создать имплементацию функции `filter`, логика работы такая же как и у родного метода.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию

// ```javascript
// const arr = [1,2,3];
// filter(arr, function(item, i, arr) {});

// ЗАДАЧА 2 РЕШЕНИЕ 
// function filter(arr, second) {
//     if (!Array.isArray(arr) && typeof second !== 'function') {
//         throw new Error('Eror');
//     }

//     let result = new Array();
//     for (let i = 0; i < arr.length; i++) {
//         if (second(arr[i])) result.push(arr[i]);
//     }

//     return result;
// }

// const arr = [1, 2, 3];
// console.log(filter(arr, function (item) {
//     return item % 2 !== 0
// }));

//////////////////////////////////////////////////////////////////////////////////////////

// ####Задача 3

// Создать имплементацию функции `every`, логика работы такая же как и у родного метода.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию

// ```javascript
// const arr = [1,2,3];
// every(arr, function(item, i, arr) {}); 


// ЗАДАЧА 3 РЕШЕНИЕ 

// function every1 (arr, second){
//     let result = true;
//     if (Array.isArray(arr) && typeof second === 'function') {
//       for (let i=0; i< arr.length; i++)
//         if (arr[i]<item) 
//         {
//            result = false; 
//            i = arr.length;
//         }
//     } else {
//       throw new Error ('Error');
//     }
//     return result;
//   }
//   const arr = [1,2,3];
//   let item = 2;
//   let result1 = every1 (arr, function(item, i, arr){});
//   console.log(result1); 


//////////////////////////////////////////////////////////////////////////////////////////


// ####Задача 4

// Создать имплементацию функции `some`, логика работы такая же как и у родного метода.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию

// ```javascript
// const arr = [1,2,3];
// some(arr, function(item, i, arr) {});
// ```

// ЗАДАЧА 4 РЕШЕНИЕ

//  function some1(arr, second){
//     let result = false;
//     if (Array.isArray(arr) && typeof second === 'function') {
//       for (let i=0; i< arr.length; i++)
//         if (arr[i]>item) 
//         {
//            result = true; 
//            i = arr.length;
//         }
//     } else {
//       throw new Error ('Error');
//     }
//     return result;
//   }
//   const arr = [1,2,3];
//   let item = 4;
//   let result1 = some1(arr, function(item, i, arr){});
//   console.log(result1); 

//////////////////////////////////////////////////////////////////////////////////////////

// ####Задача 5

// Создать имплементацию функции `reduce`, логика работы такая же как и у родного метода.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию
// - Третий параметр обязателен и может принимать только строку или число

// ```javascript
// const arr = [1,2,3];
// const acc = 0;
// reduce(arr, function(acc, item, i, arr) {}, acc);

// ЗАДАЧА 5 РЕШЕНИЕ

//  function reduce1 (arr, second){
//     let result = third;
//     let item;
//     if (Array.isArray(arr) && typeof second === 'function' || third === 'number' || third === 'string') { // строку или число - не щабыть
//       for (let i=0; i< arr.length; i++) {
//         result = result + arr[i];
//         second(third,item,i,arr);
//       }
//     } else {
//       throw new Error ('Error');
//     }
//     return result;
//   }
//   const arr = ['1','2','3'];
//   const third = '0';
//   let third1 = reduce1(arr, function(third, item, i, arr) {}, third);
//   console.log(third1); 


//////////////////////////////////////////////////////////////////////////////////////////

// ####Задача 6

// Создать имплементацию функции `reduceRight`, логика работы такая же как и у родного метода.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию
// - Третий параметр обязателен и может принимать только строку или число

// ```javascript
// const arr = [1,2,3];
// const acc = 0;
// reduceRight(arr, function(acc, item, i, arr) {}, acc);

// ЗАДАЧА 6 РЕШЕНИЕ 

//  function ReduceRight1(arr, second){
//   let result = third;
//   let item;
//   if (Array.isArray(arr) && typeof second === 'function' || third === 'number' || third === 'string') {
//     for (let i=arr.length-1; i>=0; i--) {
//         result =result + arr[i];
//       second(third,item,i,arr);
//     }
//   } else {
//     throw new Error ('Error');
//   }
//   return result;
// }
// const arr = ['1','2','3'];
// const third = '0';
// let third1 = ReduceRight1(arr, function(third, item, i, third) {}, third);
// console.log(third1); 

//////////////////////////////////////////////////////////////////////////////////////////

// ####Задача 7

// Код ниже получает из массива строк новый массив, содержащий их длины:

// ```javascript
// var arr = ['abcd', 'abcde', 'ab', 'abc'];

// var arrLength = [];
// for (var i = 0; i < arr.length; i++) {
// arrLength[i] = arr[i].length;
// }

// console.log( arrLength ); // 4,5,2,3
// ```

// Перепишите выделенный участок:

// - используйте вместо цикла `for` метод `map`

//ЗАДАЧА 7 РЕШЕНИЕ 

// var arr = ['abcd', 'abcde', 'ab', 'abc'];

// var arrLength = arr.map(function(i) {
//   return i.length;
// });

// console.log( arrLength );

//////////////////////////////////////////////////////////////////////////////////////////
// ####Задача 8

// Напишите функцию `f` . Данная функция принимает один параметр: одноуровневый или многоуровневый массив. Возвращает данная функция сумму всех элементов на всех уровнях.

// Обратите внимание что функция должна возвращать число 0, если при проходе всех уровней не было найдено ни одного числа.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только массив
// - Генерировать ошибку если на каком то уровне было найдено не число и не массив


// ЗАДАЧА 8 РЕШЕНИЕ 
// function f(arr){
//     let sum = 0;
//     if (Array.isArray(arr)) {
//       var arrTemp = arr.flat(Infinity)
//       for (let i=0; i< arrTemp.length; i++) {
//         if (typeof arrTemp[i] === 'number') {
//           sum += arrTemp[i];
//         } else {
//           throw new Error ('Error');
//         }
//       }
//     } else {
//       throw new Error ('Error');
//     }
//     return sum
//   }
  
//   const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
//   var s = f(arr); 
//   console.log(s)
//////////////////////////////////////////////////////////////////////////////////////////

// ####Задача 9

// Сделайте функцию `arrayFill`, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым — сколько элементов должно быть в массиве.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только число, строку, объект, массив
// - Второй параметр обязателен и может принимать только число

// ```javascript
// arrayFill('x',5); // [x,x,x,x,x]

function arrayFill(first, second){
    let arr = new Array(second);
    if (typeof first === 'number' || typeof first === 'string' || typeof first === 'object' ) {
      if (typeof second === 'number') {
        for (let i=0; i<arr.length; i++) 
          arr[i] =first;
      } else {
        throw new Error ('Error');
      }
    } else {
      throw new Error ('Error');
    }
    return arr;
  }
  
  let sample = arrayFill('x',5); // [x,x,x,x,x]
  console.log(sample); 