function writePeoples(data){
    console.log(data);
    data.results.forEach((element) => {
        renderPeople(element);
    });
}
function renderPeople(people){
    let li = document.createElement("li");
    let name = document.createElement("h3");
    let height = document.createElement("p");
    let mass = document.createElement("p");
    let gender = document.createElement("p");
    let birth_year = document.createElement("p");

    name.innerHTML = "Name: "+people.name;
    height.innerHTML = people.height;
    mass.innerHTML = people.mass;
    gender.innerHTML = people.gender;
    birth_year.innerHTML = people.birth_year;


    li.appendChild(name);
    li.appendChild(height);
    li.appendChild(mass);
    li.appendChild(gender);
    li.appendChild(birth_year);
    peoples_ul.appendChild(li);
}
function refreshButtonsState(){
    if(data_.previous){
        prev.disabled = false;
        console.log("enabled");
    }
    else{
        prev.disabled = true;
    }
    if(data_.next){
        next.disabled = false;
        console.log("enabled2");
    }
    else{
        next.disabled = true;
    }      
}
let api_url = "https://swapi.dev/api/people/?page=9";
const peoples_ul = document.getElementById("peoples_ul");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
let data_ ;
let peoples = fetch(api_url).then(response => response.json()).then((data)=>{writePeoples(data); data_ = data});
next.disabled = true;
prev.addEventListener("click", (event) => {
    event.preventDefault();
    if(data_.previous){
        peoples_ul.innerHTML = "";
        fetch(data_.previous).then(response => response.json()).then((data)=>{writePeoples(data); data_ = data;refreshButtonsState();});
        
    }
                                
});
next.addEventListener("click", (event) => {
    event.preventDefault();
    if(data_.next){
        peoples_ul.innerHTML = "";
        fetch(data_.next).then(response => response.json()).then((data)=>{writePeoples(data); data_ = data;refreshButtonsState();});
    }
             
});



// prev.addEventListener("click",(event)=>{
//     event.preventDefault();
//     if(data_){
//         fetch(data_.previous).then(response => response.json()).then((data)=>{writePeoples(data); data_ = data});
//     }
// });