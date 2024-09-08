/** 2. Escribe una función que tome un arreglo de objetos JSON que representan productos, y devuelva un objeto que contenga la suma de los precios de los productos, la cantidad total de productos, y el nombre del producto más caro. Utiliza el spread operator, la función reduce, map y sort para calcular los valores necesarios. */

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
/** Use Spread Operator (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
 * reduce function (https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
 * */

function calculateTotal(products){

    // Calcula la suma de los precios
    const totalPrice = products.reduce((acc, { product_price}) => acc +  product_price, 0);

    // Calcula la suma del valor del stock
    const totalStock = products.reduce((acc, { product_quantity }) => acc + product_quantity, 0);

    // Ordena los productos por precio
    const expensiveProduct = products.sort((a, b) => b.product_price - a.product_price);

    // Obtiene el nombre del producto más caro
    const mostexpensiveProduct = expensiveProduct[0].product_name;
        
    return { totalPrice, totalStock, expensiveProduct , mostexpensiveProduct};
}

const result = calculateTotal(products);
console.log(`Suma de precios: ${result.totalPrice}`); 
console.log(`Suma de stock: ${result.totalStock}`); 
console.log(`Producto más caro: ${result.mostexpensiveProduct}`);

/** Expected result: 
 * // { totalPrice: 170, totalQuantity: 10, mostExpensiveProduct: { product_name: "Chaqueta", product_price: 160000, product_quantity: 44 } }
 * */