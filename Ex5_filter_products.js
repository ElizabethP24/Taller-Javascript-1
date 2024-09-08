/**
 * 5.	Dado un arreglo de objetos JSON que representan productos, escribe una función que devuelva un nuevo que contenga solo los productos que tengan un precio mayor a $70000 y una cantidad inferior a 100, luego a cada producto se debe agregar una nueva propiedad "taxValue" que represente el precio con el impuesto del 19% y una propiedad “totalValue” de valor más el impuesto calculado. Utiliza el spread operator, la función map y filter.
 */
let products = [
    {
        id_product: 1,
        product_name: "Camiseta",
        product_price: 50000,
        product_quantity: 89 
    },
    {
        id_product: 2,
        product_name: "Pantalón",
        product_price: 90000,
        product_quantity: 44
    },
    {
        id_product: 3,
        product_name: "Chaqueta",
        product_price: 160000,
        product_quantity: 23 
    },
    {
        id_product: 4,
        product_name: "Correa",
        product_price: 80000,
        product_quantity: 104 
    }
]
/** Use Filter function (https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
 * map function (https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
 * Spread Operator (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
 * */

//Function to filter and map the products
function filterProduct(products){

    //Filter the products with price > 70000 and quantity < 100
    let filterProducts = products.filter((products) => {
        return products.product_price> 70000 && products.product_quantity < 100
    })

      //Get the tax value and total value of the product in the new object
    let resultProducts = filterProducts.map((products) => {
        return {
            ...products,
            taxValue: products.product_price * 0.19,
            totalValue: products.product_price + products.product_price * 0.19
        }
    })

    return resultProducts;
}
    //Call the function
    let resultProducts = filterProduct(products);
    //Print the results
    console.log('Products',resultProducts)
    
/**
 * Expected result:
 * [
    {
        id_product: 2,
        product_name: "Pantalón",
        product_price: 90000,
        product_quantity: 44,
        product_tax_value: 17100,
        product_total_value: 107100
    },
    {
        id_product: 3,
        product_name: "Chaqueta",
        product_price: 160000,
        product_quantity: 23,
        product_tax_value: 30400,
        product_total_value: 190400
    }
]
 */