let styles = [
    {
        name: "font-weight",
        value: "bold"
    },
    {
        name: "background",
        value: "red"
    }
];
function writeP(styles, text){
    let style = "style=\"";
    styles.forEach(element => {
        style+=element.name+": "+element.value+"; ";
    });
    style+="\"";
    document.write(`<p ${style}>${text}</p>`);
}
writeP(styles,"Test");