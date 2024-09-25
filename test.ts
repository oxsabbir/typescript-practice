/**
 * Here i learned about how to declare a type for an object
 * And Use it for type safety and reduce runtime error
 */

type Address = {
    street : string 
    city : string 
    country : string
}

type Person = {
    name : string 
    age : number
    isStudent : boolean
    address? : Address
}

const person1 : Person = {
    name: "sabbir",
    age: 12,
    isStudent: true,
    address: {
        street: "123 Main",
        city: "Anycity",
        country: "USA"
    }
}
const person2 : Person = {
    name: 'elen',
    age: 14,
    isStudent: false,
}




/**
 * Here i learned about Literal types 
 * That it's value cannot be changed 
 * Or only a certain value can be there 
 */

// this variable only can hold only type of data 
// it can be used with UNION to create something like USER role Enum ["ADMIN", "GUEST", "MEMBER"]
let onlyName : "ONLY" = "ONLY"


/**
 * Here we used the type of array and store the Person type object in there
 */

const people : Person[]= [person1, person2]
console.log(people)

const displayPerson = function(person:Person)  {
    console.log(`${person.name} lives at ${person?.address?.street}`)
}
displayPerson(person2)
