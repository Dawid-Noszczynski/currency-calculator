{
    const currencyValue = (currencyElement) => {
        const currency = currencyElement.value;

        const usdRate = 4.48;
        const eurRate = 4.69;
        const chfRate = 4.76;
        const gbpRate = 5.43;

        switch (currency) {
            case "USD":
                return usdRate;
            case "EUR":
                return eurRate;
            case "CHF":
                return chfRate;
            case "GBP":
                return gbpRate;
        }
    };

    const updateResultTest = (result, currencyElement) => {
        const resultElement = document.querySelector(".js-result");

        resultElement.innerText = result.toFixed(2) + currencyElement.value;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        const currencyElement = document.querySelector(".js-currency");
        const amountElement = document.querySelector(".js-amount");

        const amount = amountElement.value;
        const result = amount / currencyValue(currencyElement);

        updateResultTest(result, currencyElement);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();

}





