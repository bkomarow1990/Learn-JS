console.log("Task 1");
const year = prompt("Enter year of birth: ");
console.log(`You are ${(new Date().getFullYear() - year )} y.o`);

console.log("Task 2:");
let memory = +prompt("Enter flash-memory (GB): ");
console.log(`Aviable ${Math.floor(memory * 1024 / 820)}`);

console.log("Task 1: ");
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

console.log("Task 2: ");
const year2 = +prompt("Enter year:");
year2 % 400 == 0 || year2 % 4 == 0 && year2 % 100 != 0 ? console.log("Year is leap") : console.log("Year isn`t leap");
console.log("Task 3: ");

function addDays(day) {
    var aDate = new Date(2021,01,21);
    aDate.setDate(aDate.getDate() + day);
    alert(aDate);
}
function addMonths(year) {
    var aDate = new Date(2021,01,21);
    aDate.setDate(aDate.getMonth() + month);
    alert(aDate);
}
function addYears(year) {
    var aDate = new Date(2021,01,21);
    aDate.setDate(aDate.getFullYear() + year);
    alert(aDate);
}
console.log("Task 1: ");
const num1 = +prompt("Enter left number in range: ");
const num2 = +prompt("Enter right number in range: ");
let sum = 0;
for (let index = num1; index <= num2; index++) {
    sum+=index;
}
console.log(`Summ of number in range ${num1}, ${num2} - ${sum}`);
console.log("Task 2: ");
const num_for_count = +prompt("Enter number: ");
let count = 0;
let tmp_num = num_for_count;
while (tmp_num > 0 ){
    tmp_num = Math.round(tmp_num / 10);
    count++;
}
console.log(`Count of digits of number ${num_for_count} - ${count}`)
console.log("Task 3: ");
let numbers = new Array(10);
let positive = 0, negative = 0, odd = 0, evens = 0, nulls = 0;
for (let index = 0; index < numbers.length; index++) {
    element = prompt(`Enter number ${index+1}: `);
    if(element > 0){
        positive++;
    }
    else if(element < 0 ){
        negative++;
    }
    else{
        nulls++;
    }
    if(element % 2 == 0){
        evens++;
    }
    else{
        odd++;
    }
}
console.log(`Positive: ${positive}, Negative: ${negative}, Nulls: ${nulls} Even: ${evens}, Odd: ${odd}`)
// numbers.forEach((element, ind) => {
    
// });

