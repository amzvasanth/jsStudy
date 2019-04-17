// let sayHello = function(name){
//     console.log(`Greeting message for ${name}`);
//     console.log(`Hey ${name}`);
// }
// //sayHello('John');

// let fullNameMake = function(firstname, lastname){

//     console.log('Welcome to LCD');
//     console.log(`Happy to have you, ${firstname} ${lastname}`);
// }

// //fullNameMake('John','Dow');

// let myAdder = function(number1, number2){
//     let added = number1 + number2;
//     return added;
// }

// let result = myAdder(3,5)
// console.log(result);


let myMultiplier = function(num1, num2){
    return num1*num2;
}

let result = myMultiplier(5,3);
console.log(result);

let guestUser = function(name = ' uName', courseCount = 0){
    return 'Hellow' + name + ' and your course count is ' + courseCount
     }
     console.log(guestUser());