const search = document.getElementById("search");
const find = document.getElementById("find");
const xhr = new XMLHttpRequest();

// controls

const user_img = document.getElementById("user_img"); 

const url_github = document.getElementById("url_github"); 
const name = document.getElementById("name"); 


find.addEventListener("click", (event) =>{
    event.preventDefault();
    const login = search.value;
    const api_url = "https://api.github.com/users/" + login;
    xhr.open("GET", api_url);
    xhr.send();
    xhr.onload = () => {
        let result = JSON.parse(xhr.responseText);
        console.log(result);
        user_img.src = result.avatar_url;
        name.innerHTML = result.name;
        url_github.innerHTML = result.html_url;
        console.log(result);
    }
});