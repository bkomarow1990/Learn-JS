const api_url = "http://www.omdbapi.com/?apikey=7f31b726&t=";

const search = document.getElementById("search");
const title = document.getElementById("title");
const films = document.getElementById("films");
const type = document.getElementById("type");

search.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(title.value);
    fetch(api_url+title.value)
    .then(response => {
        return response.json();
    }).then(data=>{
        films.innerHTML = "";
        console.log(data);
        let div = document.createElement("div");
        let img = document.createElement("img");
        let h3 = document.createElement("h3");
        let p = document.createElement("p");

        img.setAttribute("src",data.Poster);
        h3.innerHTML = data.Title;
        p.innerHTML = data.Year;
        div.appendChild(img);
        div.appendChild(h3);
        div.appendChild(p);
        films.appendChild(div);
    })
    .catch(err => {
        alert("Error");
        console.error(err);
    });
    
});

// alert("dd");