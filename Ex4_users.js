    /** 4.	Dado un arreglo de objetos JSON que representan usuarios, escribe una función que devuelva un nuevo arreglo que contenga solo los usuarios mayores de edad (18 años o más), y para cada usuario se agregue una nueva propiedad "ageInDays" que represente la edad del usuario en días. Utiliza el spread operator, la función map y filter. */

    const users = [
        { name: "Carlos", age: 20 },
        { name: "Juana", age: 17 },
        { name: "Oliver", age: 25 },
        { name: "Katherine", age: 30 },
    ];

    /** Use Filter function (https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
     * map function (https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
     * Spread Operator (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
     * */

//Function to filter and map the users
function filterUser(users){

    //Filter the users older than 18
    let userAdult = users.filter((users) => {
        return users.age > 18
    })

    // Get the age in days and add it to the user object
    let resultUsers = userAdult.map((users) => {
        return {
            ...users,
            age_in_days: users.age *365
        }
    })

    return resultUsers;
}
    
    //Call the function
    let resultUsers = filterUser(users);
    //Print the results
    console.log('Users older than 18',resultUsers)


    /**
     * Expected Result:
     * [
            { name: "Carlos", age: 20, age_in_days: 7300 },
            { name: "Oliver", age: 25, age_in_days: 9125 },
            { name: "Katherine", age: 30, age_in_days: 10950 },
        ]
    */