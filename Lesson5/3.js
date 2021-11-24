const history_btn = document.getElementById("history_btn");

history_btn.addEventListener("click", (event) =>{
    event.preventDefault();
    let history = window.history;
    console.log(`Count: ${history.length}`);
    
    // history.array.forEach(element => {
    // });
});


// history_btn.addEventListener(()=>{

// });