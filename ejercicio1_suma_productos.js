/** 1.	Escribe una función que tome un arreglo de objetos JSON que representan productos, y devuelva la suma de los precios de los productos y la suma total del valor del stock de la tienda. Utiliza la función reduce y el spread operator para obtener los precios de cada objeto y sumarlos. */

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
    // Función para calcular la suma de los precios y el valor total del stock
    function calculateTotal(products){

        // Calcula la suma de los precios
        const totalPrice = products.reduce((acc, { product_price}) => acc +  product_price, 0);
    
        // Calcula la suma del valor del stock
        const totalStock = products.reduce((acc, { product_price, product_quantity }) => acc + ( product_price * product_quantity), 0);
            
        return { totalPrice, totalStock };
    }

    const result = calculateTotal(products);
    console.log(`Suma de precios: ${result.totalPrice}`); 
    console.log(`Suma del valor del stock: ${result.totalStock}`); 

    /** Use Spread Operator and reduce function (https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) */
    /** Expected result: 
     * Suma de precios: $380000
     * Stock: $20410000*/