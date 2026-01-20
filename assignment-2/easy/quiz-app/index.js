function init() {
    var hello = document.getElementById("btn");
    hello.addEventListener("click", ()=> {
        console.log("Hello");
    })
}
window.onload = init;