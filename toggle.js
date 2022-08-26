const toggleCheckBox = document.querySelector(".slider__toggle");
let basicPrice = document.querySelector(".basicPrice");
let proPrice = document.querySelector(".proPrice");
let masterPrice = document.querySelector(".masterPrice");

console.log(toggleCheckBox.checked);

toggleCheckBox.addEventListener("change", () => {
    if (toggleCheckBox.checked == true) {
        basicPrice.textContent = "$19.99";
        proPrice.textContent = "$24.99";
        masterPrice.textContent = "$39.99";
    }

    else {
        basicPrice.textContent = "$199.99";
        proPrice.textContent = "$249.99";
        masterPrice.textContent = "$399.99";
    }
});

