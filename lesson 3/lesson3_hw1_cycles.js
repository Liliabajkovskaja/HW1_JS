/*Task - 1
  Replace the "for" loop with a "while" loop
*/
// for (let i = 0; i < 8; i++) {
//   console.log( `число - ` + i);
// }
//_________________________________________________
// let i = 0
// while (i < 7){
//     i++
//     console.log(`число - ` + i)
// }
//______________________________________________________
/*Task - 2
  Implement algorithm which will calculate sum of numbers from 0 to 50 (included) not divisible by 3.
  Use 3 different cycles: for | while | do..while */

  //_________________________________________________________
//   let s= 0 
// for ( let i=0; i<51;i++){
//     if (i %3==0) continue
//     console.log(i)
//     s +=i;

// }
// console.log(s) //=867
//___________________________________________________________
// let s= 0 
// let i= 0
// while(i<51){
//     i++
//     if (i %3==0) continue
//     s+= i;
// }
// console.log(s)

// 
//____________________________________________________________
// let s = 0;
// var i = 0;
// do {
//     i += 1; 
//     if (i %3==0) continue
//     s+= i;

// } while (i < 50);
// console.log(s)


//___________________________________________________________



/* Task - 3
  Implement algorithm which will
  calculate sum of numbers from firstNumber to secondNumber (included)
  Use for loop  
*/

//____________________________________________________________

// let firstNumber = -100;
// let secondNumber = 250;
// let s = 0
// for (let i = -100; i<251;i++){
//     s = s+i
// }
// console.log(s)

//__________________________________________________________
/* Task - 4
  Make a timer that will count from 10 to 0

  For example,
  10 seconds left
  9 seconds left
  8 seconds left 
*/
//____________________________________________________________
// for (let i = 11; i--;){
//     console.log(i + ' seconds left'); 
// }

//___________________________________________________________
// let i = 11
// while (i){
//     i--;
//     console.log(i + ' seconds left');
// }
//______________________________________________________________


/* Task - 5
  Create program to display the following sequence: 7 14 21 28 35 42 49 */

//   for(let i = 0; i <49;){
//     i += 7
//     console.log(i)
//   }

//___________________________________________________________________



/* Task - 6
  implement algorithm which calculates factorial for 
  using for, while, do..while operators
  assign the result to corresponding variable
  what is factorial: https://www.mathsisfun.com/numbers/factorial.html 
*/

// let numberfactorial = 3;
// factorial = 1
// for(let i = 0; i< numberfactorial;){
//     i += 1;
//     factorial = i*factorial;
// }
//   console.log(factorial)

//________________________________________________________
  //
// let numberfactorial = 4;
// factorial = 1
// let i = 0
// while(i<numberfactorial){
//     i++
//    factorial = factorial* i
// }
// console.log(factorial)

//___________________________________________________________
//
// let numberfactorial = 4;
// factorial = 1
// var i = 0;
// do {
//     i += 1; 
//     factorial*= i;
// } while (i < numberfactorial);
// console.log(factorial)

//___________________________________________________________



/* Task - 7
  implement algorithm filling a bathtub using buckets. 
  we know how many liters the bathtub holds and the capacity of one bucket, but we don't know how many buckets we need. 
  We need to fill the bathtub without overflowing it.
  Use while loop 
*/



// let bucket = 5; //capacity of one bucket
// let initialBathState = 0; //the initial value of the amount of water in the bathroom
// let bathCapacity = 60; //
// let countBucket  = 0
// while(initialBathState < (bathCapacity-4)){ //-4 щоб не переповнити ванну
//     initialBathState +=5;
//     countBucket++;
   
// }
// console.log(countBucket)
