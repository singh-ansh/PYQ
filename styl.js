let Math = document.querySelector(".content");
let science = document.querySelector(".pdf-browser");

function myFunction(x) {
    if (x.matches) { // If media query matches
        // document.body.style.backgroundColor = "yellow";
        let inp = prompt("Enter the subject Math or Science :");
        if (inp === "math" || inp === "Math" || inp === "Mathematics" || inp === "mathematics" || inp === "MATHEMATICS" ||inp === "MATH") {
            science.replaceWith(Math);
        } else if (inp === "Science" || inp === "science" || inp === "Sci" || inp === "sci" || inp === "SCIENCE" || inp === "SCI") {
            Math.replaceWith(science);
        } else {
            alert("Not Available ! ");
            // Math.remove();
            // science.remove();
        }
    } else {
        // document.body.style.backgroundColor = "pink";

    }
}

// Create a MediaQueryList object
let x = window.matchMedia("(max-width: 700px)")

// Call listener function at run time
myFunction(x);

// Attach listener function on state changes
x.addEventListener("change", function () {
    myFunction(x);

});
