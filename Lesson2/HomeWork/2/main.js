
class Product{
    constructor(name, count, isBought){
        this.name = name;
        this.count = count;
        this.isBought = isBought;
    }
    print(){
        console.log(`Name: ${this.name}, Count: ${this.count}, isBought: ${this.isBought} `)
    }
}
function print(list){
    let bought = [];
    let not_bought = [];
    list.forEach(element => {
        if(element.isBought){
            bought.push(element);
        }
        else{
            not_bought.push(element);
        }
    });
    not_bought.forEach(element => {
        element.print();
    }); 
    bought.forEach(element => {
        element.print();
    }); 

}
function addProduct(list,product){
    list.forEach(element => {
        if(element.name == product.name){
            element.count += product.count;
            return;
        }
        list.push(product);
    });
}
function buyProduct(list, productName){
    list.forEach(element => {
        if(element.name == productName){
            element.isBought = true;
        }
    });
}
let product1 = new Product("Bread",228,true);
let product2 = new Product("Oil",93,false);
let product3 = new Product("Meat",34,false);
console.log("====================1====================");
let shop_list = [product1, product2, product3];
print(shop_list);
console.log("====================2====================");
addProduct(shop_list, product1);
print(shop_list);
console.log("====================2====================");
addProduct(shop_list, new Product("Cola", 127, false));
print(shop_list);
console.log("====================3====================");
buyProduct(shop_list,"Cola");
print(shop_list);