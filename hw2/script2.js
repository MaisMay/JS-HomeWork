// ####Задача 1

// Напишите функцию `f`, которая возвращает куб числа. Число передается параметром. Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число.

// ```js
// f(2); // 8
// f('Content'); // Error: parameter type is not a Number
// ```

// ####Задача 1 РЕШЕНИЕ

// function f (a) {
//     if (typeof a === 'number'){
//         result = a*a*a;
//     } else throw new Error('parameter type is not a Number');
    
//     console.log(result);
// }

// f('lfd') // выводит нужный ерор 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// ####Задача 2

// Напишите функцию `f` которая возвращает сумму всех параметров. 
//Количество параметров может быть любым. Данная функция должна обязательно 
//содержать проверку входных параметров, потому что принимать она может только числа.

// ```js
// f(1,2,3); // 6
// f(1,1,1,1,1,1,1,1); // 8
// f(1,2,'s',4); // Error: all parameters type should be a Number
// ```

// ####Задача 2 РЕШЕНИЕ

function f() {
    let sum = 0;

    for(variable of arguments) {
        if (typeof variable === "number") {
            sum += variable;
        } else {
             throw new Error('parameter type is not a Number');
        }
    }

    console.log(sum);
}

f(1,2,3)
f(1,2,'qq')