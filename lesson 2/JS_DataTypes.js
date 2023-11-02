console.log('number' + 3 + 3)  // = number33;'number' - це стрінг, тому спрацювала конкатенація
console.log(null + 3)  // =3; null - не має ніякого значення, тому 3
console.log(5 && "qwerty")  // =qwerty; 5 - true, "qwerty" - також true але виводиться останнє значення
console.log(+'40' + +'2' + "hillel")  // =42hillel; для данних типу стрінг спрацювала конкатенація
console.log('10' - 5 === 6)  // =false; 10-5 = 5 а не 6
console.log(true + false)  //= 1; true = 1, false =0  => 1+0=1
console.log('4px' - 3)  // =NaN; система не розуміє який тип данних '4px'
console.log('4' - 3)  // = 1; 4-3=1
console.log('6' + 3 ** 0)  // = 61; "6" - стрінга, 3 ** 0 = 1, спрацювала конкатенація
console.log(12 / '6')  // =2; 12/6=2
console.log('10' + (5 === 6))  // =10false; (5 === 6) - false, спрацювала конкатенація
console.log(null == '')  //=false; null - це тип данних object, який використовується для визначення пустої змінної, а пуста строка - string
console.log(3 ** (9 / 3))  // = 27; першаа дія -9/3=3, тоді 3 в 3 степені
console.log(!!'false' == !!'true')   //=true; !!'false' - true, також !!'true' - true
console.log(0 || '0' && 1)  //=1; && - вираховує операнди зліва направо, якщо всі операнди були істиними то повертає останнє значення
console.log((+null == false) < 1)  // = false; +null - 0, 0=false - тому  true, а true не менше 1
console.log(false && true || true)  // = true; false && true  - буде false, але false ||true буде true
console.log(false && (false || true))  //=false; спочатку порівнюємо (false || true)  -буде true, але false && true - дає false
console.log((+null == false) < 1 ** 5)  //= false; +null - 0, 0=false - тому  true, а true не менше 1 в 5 степені

