let open_google_btn = document.getElementById("open_google_btn"); 
let close_google_btn = document.getElementById("close_google_btn"); 
let google;
open_google_btn.addEventListener("click", (event) => {
    event.preventDefault();
    // window.open()
    google = window.open("https://google.com",'targetWindow',
                                   `toolbar=no,
                                    location=no,
                                    status=no,
                                    menubar=no,
                                    scrollbars=yes,
                                    resizable=yes,
                                    width=640,
                                    height=480`);
                                
});


close_google_btn.addEventListener("click", (event) => {
    event.preventDefault();
    // window.open()
    google.close();
                             
});