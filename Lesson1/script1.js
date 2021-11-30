// alert("Hello world");
function printSymb(count, symb) {
    for (let index = 0; index < count; index++) {
        console.log(symb);
    }
}
function average(array) {
    let avg = 0;
    array.forEach(el => avg += el);
    return avg / array.length;
}
let count = prompt("Enter count repats...");
let symb = prompt("Enter symbol...");
printSymb(count, symb);

console.log("Task 2:");
let kilometers = prompt("Enter kilometers...");
console.log(`${kilometers} kilometers = ${kilometers * 1000} meters.`)
console.log("Task 3:");
let marks = [0, 0, 0]
for (let index = 0; index < marks.length; index++) {
    marks[index] = +prompt("Enter mark: ");

}
console.log(`Average mark: ${average(marks)}`)
switch (average(marks)) {
    case 2:
        console.log("Bad");
        break;
    case 3:
        console.log("So-So");
        break;
    case 4:
        console.log("GOOD");
        break;
    case 5:
        console.log("Excelent");
        break;
    default:
        break;
}
console.log("Task 4:");
let memory = +prompt("Enter flash-memory (GB): ");
console.log(`Aviable ${Math.floor(memory * 1024 / 820)}`);
console.log("Task 5:");
let number = +prompt("Enter a number: ");
switch (number) {
    case 0:
        console.log(")");
        break;
    case 1:
        console.log("!");
        break;
    case 2:
        console.log("@");
        break;
    case 3:
        console.log("#");
        break;
    case 4:
        console.log("$");
        break;
    case 5:
        console.log("%");
        break;
    case 6:
        console.log("^");
        break;
    case 7:
        console.log("&");
        break;
    case 8:
        console.log("*");
        break;
    case 9:
        console.log("(");
        break;
    default:
        break;
}

console.log("Task 6:");
function numConcat(num1,num2,num3){
    return +(num1.toString() + num2.toString() + num3.toString());
}
console.log(numConcat(prompt("Enter number1: "),prompt("Enter number2: "),prompt("Enter number3: ")));
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Task 7. Dish game:");
let prev_player1 = 0;
let prev_player2 = 0;
let player1_score = 0;
let player2_score = 0;
let number1 = 0;
let number2 = 0;
let N = 20;
while (player1_score < N || player2_score < N && player1_score != player2_score) {
    number1 = getRandomInt(1,6);
    prev_player1 = number1; 
    number2 = getRandomInt(1,6);
    prev_player2 = number2;
    if(number1 < number2){
        player1_score++;
        console.log("Player 1 got + 1 score");
        if(number1 == prev_player1){
            console.log("Player 1 got + 2 score");
            player1_score+=2;
        }
    }
    else if(number1 > number2){
        player2_score++;
        console.log("Player 1 got + 1 score");
        if(number2 == prev_player2){
            console.log("Player 2 got + 2 score");
            player2_score+=2;
        }
    }
    
}
if(player1_score < player2_score){
    console.log("Player 2 WINS!")
}
else if(player1_score > player2_score){
    console.log("Player 1 WINS!")
}
console.log("Task 8. Is perfect number:");
let my_num = prompt("Enter num: ");
let summ = 0;
for (let index = 1; index < my_num; index++) {
    if(my_num % index == 0){
        summ+= index;
    }
    
}
if(summ == my_num){
    console.log("A number is perfect!")
}
else{
    console.log("A number isn`t perfect!");
}

console.log("Task 9. Get fibonnaci number:");
let my_num2 = prompt("Enter number for Fibonacci: ");
function fibonnaci_number(number){
    if(n <= 1){
        return N;
    }
    return fibonnaci_number(n-1) + fibonnaci_number(n-2);
}
console.log(`Fibonacci number of ${my_num2} - ${fibonnaci_number}`);
let my_date = new Date(1999,11,31);
function year(date, count) {
    date.setFullYear(date.getFullYear() + count);
    console.log(date);
}
// function month(date, count) {
//     date.setFull(date.getFullYear() + count);
//     console.log(date);
// }
// let fibonnaci_number = 1;
// let prev = fibonnaci_number;
// console.log(1);
// for (let index = 0; index < my_num2; index++) {
//     fibonnaci_number += prev;
//     prev=fibonnaci_number;
//     console.log(fibonnaci_number);
// }