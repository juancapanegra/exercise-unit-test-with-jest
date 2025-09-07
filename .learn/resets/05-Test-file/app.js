// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function (valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function (valueInDollar) {
    //Al no tener el valor concrecto de esas dos monedas, nos apoyamos en el euro
    let apoyoEuro = valueInDollar / 1.07;
    let valueInYen = apoyoEuro * 156.5;

    return valueInYen;
}



// Esta es mi función que syuma dos números
const sum = (a, b) => {
    return a + b
}

//Registro de consola para nosotros
console.log(sum(7, 3))

//Exportación de la función
module.exports = { sum, fromEuroToDollar, fromDollarToYen };

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
