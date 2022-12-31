
function value () {
    let buttons = document.querySelectorAll(".btn");
    
    buttons.forEach(function(btn) {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            let result = e.target.value;
            form.display.value = form.display.value + result;
        })
    })
}


value();

const equal = document.querySelector(".eql");
equal.addEventListener("click", (e) => {
    e.preventDefault();
    if (form.display.value === "") {
        alert("Please enter a number");
    }
    else {
        form.display.value = eval(form.display.value)
    }
})

document.querySelector(".clear").addEventListener("click", (e) => {
    form.display.value = "";
})