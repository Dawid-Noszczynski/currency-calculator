let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");



formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value;
    let currency = currencyElement.value;

    let usdRate = 4.48;
    let eurRate = 4.69;
    let chfRate = 4.76;
    let gbpRate = 5.43;

    switch (currency) {
        case "USD":
            currency = usdRate;
            break;
        case "EUR":
            currency = eurRate;
            break;
        case "CHF":
            currency = chfRate;
            break;
        case "GBP":
            currency = gbpRate;
    }

    let result = amount / currency

    resultElement.innerText = result.toFixed(2) + currencyElement.value

});





