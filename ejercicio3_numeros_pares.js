/**
 * 3.	Dado un arreglo de números, escribe una función que devuelva un nuevo arreglo que contenga solo los números pares, y cada número se multiplique por 2. Utiliza la función filter y la función map.
 */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/** Use Filter function (https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
 * map function (https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
 * */

//Filtrar los numeros pares
let pairNumbers = numbers.filter((number) => {
    return number % 2 === 0;
})

//Multiplicar los números pares por 2
let totalNumbers = pairNumbers.map((number) => {
    return  number *2
    
})

console.log('Números Pares', pairNumbers)
console.log('Números Pares * 2',totalNumbers)
/**
 * Expected Result:
 * [4, 8, 12, 16, 20]
 */