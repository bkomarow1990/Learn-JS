// languages_ul.atr
// alert(navigator.languages[0]);
function renderLanguages() {
    const langs = navigator.languages;
    const list = document.getElementById("languages");
    // let li ;
    langs.forEach((element, ind) => {
        const li = document.createElement("li");
        // if(ind == 0 ){
        //     // li.setAttribute("class", "main_lang");
        //     li.style.fontWeight = "bold";
        // }
        // else{
        //     li.setAttribute("class", "lang");
        // }
        
        li.innerHTML = element;
        list.appendChild(li);
    });
    list.children[0].style.fontWeight = "bold";
    // li.innerHTML = languages;




}
renderLanguages();