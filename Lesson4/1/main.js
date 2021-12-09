// function RenderProduct(prod){
//     const list = document.getElementById("producst-list");
//     const li = document.createElement("li");
//     li.setAttribute("class","product");
//     li.innerHTML = prod.name +"" +  prod.price + "$";
// }
const saveBtn = document.getElementById("saveBtn");

const nameInput = document.getElementById("nameInput");

const priceInput = document.getElementById("priceInput");

const colorInput = document.getElementById("colorInput");

const countInput = document.getElementById("countInput");

const searchBtn = document.getElementById("searchBtn");

const searchTxt = document.getElementById("searchInput");

const list = document.getElementById("product-list");

let products = [];
let tmp = [];
saveBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let product = {

        name: nameInput.value,

        price: priceInput.value,

        color: colorInput.value,

        count: countInput.value,

        print() {

            console.log(`Name: ${this.name}, Price: ${this.price}, Color: ${this.color} ,Count ${this.count}`);

        }

    };



    product.print();



    products.push(product);


    renderProduct(product);
    // nameInput.value = "";

    // priceInput.value = "";

});

searchBtn.addEventListener("click", (event) =>{
    event.preventDefault();
    tmp = products.slice();
    products = [];
    list.innerHTML = "";
    tmp.forEach(element => {
        if(element.name == searchTxt.value){
            products.push(element);
            renderProduct(element);
        }
    });
});



function renderProduct(prod) {



    const li = document.createElement("li");

    li.setAttribute("class", "product");

    li.innerHTML = prod.name + " " + prod.price + "$";



    list.appendChild(li);

}