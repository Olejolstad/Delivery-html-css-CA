
const cartButton = document.getElementById("button-add-to-cart");
const submitButton = document.getElementById("button-submit");
const checkoutCard = document.getElementById("checkout-card");
const submitCard = document.getElementById("submit-card");
const blurDiv = document.getElementById("blur-div");
const blurDivCheckout = document.getElementById("container-checkout");

console.log("HEI 1");


if (cartButton){
    cartButton.addEventListener('click', function (event) {

        blurDiv.style.webkitFilter = "blur(12px)";
        checkoutCard.style.visibility = "visible";
    });
}


if (submitButton){
    submitButton.addEventListener('click', function (event) {

        console.log("HEHEHE");
        blurDiv.style.webkitFilter = "blur(12px)";
        submitCard.style.visibility = "visible";
    });
}
