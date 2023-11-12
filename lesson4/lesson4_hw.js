/* Task - 1 (Not required)
    Написати свою реалізацію функції isNaN. 
    
    Нагадування: це глобальна функція в JavaScript, яка використовується для перевірки, чи є значення NaN (Not-a-Number). 
*/


/* Task - 2
    Перевірка теорії ймовірності. Напишіть функцію яка буде генерувати певну кількість випадкових чисел в діапазоні 
    від 100 до 1000 включно. Порахувати кількість парних та непарних серед них. 
    Обчислити відсоткове співвідношення - чи буде воно близьке до 50%50? Приклад функції checkProbabilityTheory(count). 
    Парметр count буде вказувати скільки разів буде генеруватися випадкове число.

    Функція виводить інформацію
    Кількість згенерованих чисел: кількість чисел
    Парних чисел: кількість парних чисел
    Не парних чисел: кількість не парних чисел
    Відсоток парних до не парних
*/

function generateRandomNumber(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    let random = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(random)
    return random
}

function checkProbabilityTheory(countRandomNumber){
let even = 0;
let odd = 0;
let rnd = 0;
    for (let i = 0; i<countRandomNumber;i++){
         rnd = generateRandomNumber(100,1000)
        if (rnd%2==0){
            even +=1
        } else {
            odd +=1 
        }   
    }
console.log('Кількість згенерованих чисел: '+ countRandomNumber)
console.log('Парних чисел: '+ even)
console.log('Не парних чисел: '+ odd)
console.log('Відсоток парних до не парних - '+ even/countRandomNumber*100+"%")
}
checkProbabilityTheory(5) 
 


/* Task - 3
    Необхідно написати власну реалізацію функцій padEnd та padStart,
     але у вас повинна бути одна функція pad(‘qwerty’, ‘+’, true), яка приймає чотири аргументи:

    рядок, до якого буде додаватися символ.
    символ, який буде додаватися.
    Скільки додавати символів
    булеве значення, яке вказує, куди додавати символ. Якщо true, то до початку, якщо false, то в кінець.
    Останній аргумент повинен працювати як і в оригінальній функції, а саме якщо наш рядок з 5 символів, а ви вказуєте знаачення 6, то додаєте тільки один символ
*/

function pad(str,strNeedAdd,countNeedSymbols,whereAdd){
    let nowLenght = str.length;
    if (nowLenght >=countNeedSymbols){
        return str;
    }
    let padding = strNeedAdd.repeat(countNeedSymbols-nowLenght);
    if (whereAdd){
        return padding + str
    } else{
        return str + padding
    }
}
console.log(pad('qwerty', '&', 7, false));
console.log(pad('qwerty', '*', 10, true));



