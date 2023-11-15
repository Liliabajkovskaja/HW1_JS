/* Task - 1 
Створіть об'єкт "Людина" з щонайменше трьома властивостями (рік, ім'я, прізвище). 

Завдання:
- Напишіть метод getInfo(), який виводитиме всі властивості об'єкта у вигляді пар "ключ: значення". 
- Напишіть метод getFullName(), який виводитиме повне ім'я. 
*/
 var person = {
    name: "Daria",
    sName: "Koval",
    age: 20,

getInfo: function() {
    console.log('Name: ' + this.name+ '\n'+ 'Surname: '+  this.sName+ '\n'+ "Age: " + this.age)
    },
getFullName: function(){
    console.log('Повне ім\'я: '+ person.name +' '+ person.sName)
}
}
person.getInfo();
person.getFullName();


/* Task - 2 (Not required)
   Створіть функцію createRobot, яка створить об'єкт "robot" з об'єкта "person", 
   додавши додаткову властивість до об'єкта "person". 
   "Robot" повинен мати властивість "batteryEnergy" (наприклад, batteryEnergy = 50)

 * ПРИМІТКА: використовуйте метод присвоєння об'єктів (Object.assign)
*/
var person = {
    name: "Daria",
    sName: "Koval",
    age: 20
}
function createRobot(){
    Object.assign(person,{batteryEnergy: 50});
    console.log(person)
}
createRobot()



/* Task - 3 
   Створіть isARobot, який буде перевіряти, чи є об'єкт роботом
   перевіркою наявності у об'єкта властивості (batteryEnergy)
*/
function isARobot(){
    if ('batteryEnergy' in person){
        console.log('Данний об\'єкт робот')
    } else{
        console.log('Данний об\'єкт НЕ робот')
    }
}
isARobot()

/* Task - 4 (Not required)

Припустимо, у нас є об'єкт. Властивості об'єкта - назва послуги та її вартість:

var services = {
	"стрижка": "60",
	"гоління": "80",
	"Миття голови": "100"
};

Завдання:
- створити метод price(), який обчислює та повертає загальну вартість "наданих послуг".
- створити метод minPrice() - який повертає мінімальний price
- створити метод maxPrice() - який повертає максимальний price
*/
var services = {
	"стрижка": "60",
	"гоління": "80",
	"Миття голови": "100"
};

function price(){
    services.integerValueHaircut= parseInt(services.стрижка)
    services.integerShaving= parseInt(services.гоління)
    services.integerWashing= parseInt(services["Миття голови"])
    console.log('Total sum all servises: ' + (services.integerValueHaircut+services.integerShaving+services.integerWashing))
}
price()

 
function minPrice(services) {
    var minCost = Infinity;
  
    for (var key in services) {     // Перебираємо ключі об'єкта
        if (services.hasOwnProperty(key)) {  //hasOwnProperty - метод у JavaScript, який визначає, чи має об'єкт власний ключ (властивість) з вказаним ім'ям (ключем)
            var cost = Number(services[key]);  // Отримуємо вартість та перетворюємо її в число

            if (cost < minCost) {
                minCost = cost;
            }
        }
    }
    console.log("Minimum cost: "+minCost)
}
minPrice(services)


function maxPrice(services) {
    var maxCost = 0;
  
    for (var key in services) {     
        if (services.hasOwnProperty(key)) {  
            var cost = Number(services[key]);  

            if ( maxCost< cost) {
                maxCost = cost;
            }
        }
    }
    console.log("Maximum cost: "+maxCost)
}
maxPrice(services)

