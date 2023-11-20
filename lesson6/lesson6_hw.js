/* Task - 1
    Створіть масив (array1) з 5 любих елементівю
    Створіть функцію, яка буде повертати другий елемент з масиву
*/

var arr1 = [1, 2, 3, 4, "Fifth"];
console.log(arr1[1]);


/* Task - 2
    Створіть функцію, який додасть 1 елемент до масиву з попередньої задачи (array1) (наприклад, "new item")
*/


function array1(){
    arr1[5]="new item"
    console.log(arr1);
}
array1()

/* Task - 3
    Створіть другий масив (array2), потім створить функцію, 
    яка отримує 2 масиви і повертає масив, що містить елементи з масивів array1 та array2
*/

var arr2 = ['Maxim', "Ivan", "Petro"];
console.log(arr2);

function returnArr1Arr2(){
    var newarr=arr1.concat(arr2)
    console.log(newarr)
}
returnArr1Arr2()


/* Task - 4 (Not required)
    Створіть функцію, яка буде повертає новий масив заданої довжини, заповнений заданим значенням
    https://www.w3schools.com/jsref/jsref_fill.asp
*/
var name = ['Vika', "Marina", "Dasha", "Zoriana", "Iruna", "Oksana"];
console.log(name);

function returnNewArrSetLenght(){
    //name.fill('Valentuna',0,3)
    console.log(name.fill('Valentuna',0,3))
}
returnNewArrSetLenght()

/* Task - 5 (Not required)
    Створіть функцію , яка отримує масив об'єктів
    наприклад, [{name: "John Snow", age: 45}, {name: "Cersei Lannister", age: 32}, {name: "Daenerys Targaryen", age: 18}, {name: "Jorah Mormont", age: 28}]]
    і повертає кількість людей, чиє ім'я "John" або вік менший за 30
     не використовуйте цикли
*/

function findCountSomePeople(){
    var arr = [
        {name: "John Snow", age: 45}, 
        {name: "Cersei Lannister", age: 32}, 
        {name: "Daenerys Targaryen", age: 18}, 
        {name: "Jorah Mormont", age: 28}
    ]; 
    var countPeople = arr.filter(el=> el.name =="John" || el.age < 30)

    console.log(countPeople.length)
}
findCountSomePeople()


/* Task - 6 (Not required)
    Створіть функцію , яка отримує масив об'єктів
    наприклад, [{name: "John Snow", age: 45}, {name: "Cersei Lannister", age: 32}, {name: "Daenerys Targaryen", age: 18}, {name: "Jorah Mormont", age: 28}]]
    і повертає кількість людей, чиє ім'я "John" або вік менший за 30
    * не використовуйте цикли
    * https://www.w3schools.com/jsref/jsref_filter.asp
*/
//same task as 5



/* Task - 7 (Not required)
    Створіть функцію , яка отримує масив об'єктів
    наприклад, [{name: "John Snow", age: 45}, {name: "Cersei Lannister", age: 32}, {name: "Daenerys Targaryen", age: 18}, {name: "Jorah Mormont", age: 28}]]
    і повертає новий масив усіх людей, старших за 30 років
*/

function returnNewArrayOlder30(){
        var arr = [
        {name: "John ", surname:"Snow", age: 45}, 
        {name: "Cersei",surname:"Lannister", age: 32}, 
        {name: "Daenerys ",surname:"Targaryen", age: 18}, 
        {name: "Jorah",surname:"Mormont", age: 28}
    ]; 
    var newListPeople = arr.filter(el=> el.age > 30)

    console.log(newListPeople)

}
returnNewArrayOlder30()

/* Task - 8 (Not required)

    Створіть функцію, яка буде приймати масив об'єктів
    наприклад, [{ім'я: "Jane", вік: 45}, {ім'я: "Peter", вік: 18}].
    та поверне новий масив об'єктів, що містить додаткову властивість "state"
    state = "baby", якщо вік дорівнює 0 або 3,
    state = "preschooler", якщо вік від 4 до 5,
    state = "teenager", якщо вік від 13 до 18 років

 https://www.w3schools.com/jsref/jsref_map.asp
*/
const people = [
    { name: "Jane", age: 45 },
    { name: "Peter", age: 13 },
    { name: "Volodumur", age: 2 },
    { name: "Olesia", age: 5 },
];
function AddNewPropertyToPeople(peopleArray){
    return peopleArray.map(person =>{
    
        if (person.age >= 0 && person.age <= 3) {
            state = "baby";
        } else if (person.age >= 4 && person.age <= 5) {
            state = "preschooler";
        } else if (person.age >= 13 && person.age <= 18) {
            state = "teenager";
        } else if (person.age >= 18 ) {
            state = "adult";
        }

        return { ...person, state };
    })
}

console.log(AddNewPropertyToPeople(people))



/* Task - 9 (Not required)

    Створити функцію для знаходження індексу мінімального елементу масиву;
    наприклад,  console.log(minItem([6,8,2,9,1,3])) // 4
*/


function findIndexOfMinElement(){
    let numbers = [94, 87, 12, 0, -67, 32];
    let minValue = Math.min.apply(null, numbers);
    console.log('Minimum value of array: '+minValue);
    console.log('Index of minimum value: '+numbers.indexOf(minValue))
}
findIndexOfMinElement()



/* Task - 10 (Not required)

   Створити функцію, яка поверне кількість допустимих (НЕ not null/undefined) значень масиву
*/

let myArray10 = ['1', null, "Ku-ku", undefined, 5, "hello", null,];

function returnCountNotNullValue(arr){
    var newArr= arr.filter(el=> el !== null && el !== undefined);
    //console.log(myArray10)
    //console.log(newArr)
    console.log(newArr.length);
}
returnCountNotNullValue(myArray10)



/* Task - 11 (Not required)

   Створити функцію, яка відфільтрує нульові та невизначені значення
  якщо кількість невірних записів більше 3 - потрібно згенерувати помилку "Дані потрібно переглянути"
*/

let myArray11 = ['1', null, "Ku-ku", undefined, 5, "hello", null, null ];

function returnCountNotNullValue(arr){
    var newArr= arr.filter(el=> el == null && el == undefined);
    if (newArr.length>3){
        console.log("Дані потрібно переглянути")
    }
    // console.log(myArray11)
    // console.log(newArr)
    // console.log(newArr.length);
}
returnCountNotNullValue(myArray11)