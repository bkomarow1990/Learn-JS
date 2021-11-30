function randomInitArray(array, count){
    for (let index = 0; index < count; index++) {
        array[index] =  Math.random();   
    }
}
function printArray(array){
    array.forEach((el)=>console.log(el));
}
function insertAt(array, index ,item){
    array.splice(index,0,item);
}
let array = new Array(10);
randomInitArray(array, 10);
printArray(array);
console.log(array.filter((el)=>{el % 2 == 0}));

insertAt(array, 2, "lol");

// Tasks 2
function findString(array,string){
     array.forEach((el, ind) =>{
         if(el.length == string.length && el.toLowerCase() == string.toLowerCase()){
            
            return ind;
            // if(count === el.length){
            //     return ind;
            // }
         }
         
         
    });
    // for (let index = 0; index < array.length; index++) {
    //     const element = array[index];
    //     for (let index_str = 0; index_str < array[index].length; index_str++) {
    //         const element_str = array[index][index_str];
    //         if(element_str == string[])
    //     }
    // }
    return -1;
}
function shuffle_array(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
}  
function deleteSuperFluouSymbols(str, max_length){
    if(str.length <= max_length){
        return;
    }
    str = str.slice(0, max_length);
    str+= "...";
    return str;
}
let fruit_array = ["apple","watermelon","cherry"];
console.log(`Cherry at ${findString(fruit_array, "apple")} index`);
let str = "lol kek cheburek";
console.log(`Count words: ${str.split(" ").length}`)
let spam = "salam, 100% бесплатно, дай таке";
let spam_words = ["100% бесплатно", "увеличение продаж", "только сегодня", "не удаляйте", "xxx"];
console.log(`Spam - ${spam.includes(spam_words)}`);
// if (substrings.some(v => str.includes(v))) {
//     // There's at least one
// }
let my_str = "Kaban iklan 22";
console.log(deleteSuperFluouSymbols(my_str, 11));
console.log(my_str);