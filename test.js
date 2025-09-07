//Importar la función sum del archivo app.js
const { sum } = require('./app.js');

//Comienza primera prueba
test('adds 14 + 9 to equal 23', () => {
    //Dentro de la prueba se llama a las función sum
    let total = sum(14, 9);


    //Esperamos que la summa sea 23
    expect(total).toBe(23);
});

test('One euro should be 1.07 dollars', function () {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One Dollar should be 145,54 yen", function () {
    //Importación de la función de app.js
    const { fromDollarToYen } = require('./app.js');

    //"Uso de la funcuión como debe ser usada"
    const Yenes = fromDollarToYen(2);

    //Al no tener el tipo de cambio de Dollar a Yen
    //nos apoyamos con el Euro.
    const expected = ((2 / 1.07) * 156.5).toFixed(2);

    //Comparación (prueba):
    expect(fromDollarToYen(2)).toBeCloseTo(292.52, 2);
})

test("One Yen should be 0,0055 Pound", function () {
    //Importación de la función de app.js
    const { fromYenToPound } = require('./app.js');

    //"Uso de la funcuión como debe ser usada"
    const Pound = fromYenToPound(3);

    //Al no tener el tipo de cambio de Yen a Pound
    //nos apoyamos con la ocnversión de yen a Euro.
    const expected = (3 / 156.5) * 0.87;

    //Comparación (prueba):
    expect(fromYenToPound(3)).toBeCloseTo(0.0167, 4);
})

