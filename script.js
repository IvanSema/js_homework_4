// // 1. Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.

// function compare(num1, num2){
//     if (num1 < num2){
//         return -1; 
//     } else if (num1 > num2){
//         return 1;
//     } else{
//         return 0;
//     }
// }

// // 2. Написать функцию, которая вычисляет факториал переданного ей числа.

// function factorial(num){
//     if (num == 0){
//         return 1;
//     } else {
//         return num * factorial(num - 1);
//     }
// }

// // 3. Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.

// function concatenation(num1, num2, num3){
//     if(+num1 && +num2 && + num3){
//         return '' + num1 + num2 + num3;
//     } else{
//         alert('Вы ввели некорректные значения.')
//     }
// }

// //4. Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

// function sqr(num1, num2=num1){
//     return num1*num2;
// }

// //5.Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.

// function isCompletely(num){
//     let temp = 0;
    
//     if(num <= 0){
//         return false;
//     }

//     for(let i = 1; i!= num; i++){
//         if(!(num%i)){
//             temp+=i;
//         }
//     }
//     if(temp == num){
//         return true;
//     }else{
//         return false;
//     }
// }

// // 6. Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 


// function isCompletelyRange(min, max){

// function isCompletely(num){
//     let temp = 0;
    
//     if(num <= 0){
//         return false;
//     }

//     for(let i = 1; i!= num; i++){
//         if(!(num%i)){
//             temp+=i;
//         }
//     }
//     if(temp == num){
//         return true;
//     }else{
//         return false;
//     }
// }


// res = ''
// for(let i = min; i <+ max; i++)
//     if(isCompletely(i)){
//         res+= (i + ' ');
//     }
//     return res;
// }

// //7. Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

// function time(hours, minutes = '00', seconds = '00'){
//     return alert(`${hours}:${minutes}:${seconds}`);
// }

// // 8. Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.

// function time(hours, minutes = 0, seconds = 0){
//     return +hours*3600 + +minutes*60 + +seconds;
// }

// // 9. Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».

// function time(seconds){
//     if(seconds < 86400){
//         let h = Math.floor(seconds / 3600);
//         let m = Math.floor(seconds%3600 / 60);
//         let s = seconds - h*3600 - m*60;
//         console.log(h, m, s);
//         return hours;
//     } else{
//         return alert('Вы ввели некорректное значение!')
//     }
// }


// 10. Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»

function dates(h1, m1, s1, h2, m2, s2){
    function timeToSec(hours, minutes = 0, seconds = 0){
        return +hours*3600 + +minutes*60 + +seconds;
        }

    function secToTime(seconds){
        if(seconds < 86400){
            let h = Math.floor(seconds / 3600);
            let m = Math.floor(seconds%3600 / 60);
            let s = seconds - h*3600 - m*60;
            console.log(h, m, s);
            return hours;
            } else{
                return alert('Вы ввели некорректное значение!')
            }
        }
    return secToTime(timeToSec(h1, m1, s1) - timeToSec(h2, m2, s2)); 
}

