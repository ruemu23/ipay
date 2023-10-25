// Get the button and the div elements
// const button = document.getElementById("myButton");
var buttons = document.querySelectorAll("#button1, #button2");
const divo = document.getElementById("myDiv");



// loop through each button and add a click event listener
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        if (divo.style.display === "none") {
            divo.style.display = "block";
        } else {
            divo.style.display = "none";
        }
    });
});




// add a click event listener to the document object
document.addEventListener("click", function (event) {
    // check if the click was outside of any of the buttons
    if (!event.target.matches("#button1, #button2") && event.target !== divo) {
        divo.style.display = "none";
    }
});

// add a click event listener to myDiv
divo.addEventListener("click", function (event) {
    event.stopPropagation();
});