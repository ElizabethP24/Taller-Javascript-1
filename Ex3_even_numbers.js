/**
 * 3.	Dado un arreglo de números, escribe una función que devuelva un nuevo arreglo que contenga solo los números pares, y cada número se multiplique por 2. Utiliza la función filter y la función map.
 */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/** Use Filter function (https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
 * map function (https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
 * */

//Function to filter and map the numbers and multiply by 2
function filterNumber(numbers){

    //Filter the even numbers
    let pairNumbers = numbers.filter((number) => {
        return number % 2 === 0;
    })

    //Multiply by 2
    let totalNumbers = pairNumbers.map((number) => {
        return  number *2
        
    })
    return { totalNumbers, pairNumbers };
}

//Call the function
let{ totalNumbers, pairNumbers } = filterNumber(numbers);
//Print the results

console.log('Even Numbers',pairNumbers)
console.log('Even Numbers multiplied by 2',totalNumbers)

/**
 * Expected Result:
 * [4, 8, 12, 16, 20]
 */