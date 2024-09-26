/**
 * Here i learned about how to declare a type for an object
 * And Use it for type safety and reduce runtime error
 */

/**
 * Adding Union type for user role inside the user
 */

type Address = {
  street: string;
  city: string;
  country: string;
};

type Person = {
  name: string;
  age: number;
  role: "admin" | "member" | "guest";
  isStudent: boolean;
  address?: Address;
};

type Role = "admin" | "member" | "contributor"

type User = {
  id: number;
  username: string;
  role  : Role
};

const user : User[] = [
    { id : 1, username : "jon_doe", role : "contributor"},
    { id : 2, username : "machine", role : "admin"},
    { id : 3, username : "skill_mat", role : "member"},
    { id : 4, username : "charlie_brown", role : "member"}
]
/**
 * Here i leard about utility type called Partial it's uses generics syntax
 * The partial takes in a type and return a new type with slight modification like it's set all the property to optional
 */

const updateUser =  function (id :number , updates : Partial<User>) {
    const selectedUser = user.find(item => item.id === id)
    console.log(selectedUser)
    if(!selectedUser) return console.log("No user found by provided ID")
    const updatedUser = Object.assign(selectedUser, updates)
    return updatedUser
}

updateUser(1, {role : "member"})
updateUser(2, {role : "admin", username :"oxsabbir"})
console.log(user)

const person1: Person = {
  name: "sabbir",
  age: 12,
  role: "guest",
  isStudent: true,
  address: {
    street: "123 Main",
    city: "Anycity",
    country: "USA",
  },
};
const person2: Person = {
  name: "elen",
  age: 14,
  role: "member",
  isStudent: false,
};

/**
 * Here i learned about Literal types
 * That it's value cannot be changed
 * Or only a certain value can be there
 */

// this variable only can hold only type of data
// it can be used with UNION to create something like USER role Enum ["ADMIN", "GUEST", "MEMBER"]
let onlyName: "ONLY" = "ONLY";

/**
 * Here we used the type of array and store the Person type object in there
 */

const people: Person[] = [person1, person2];
// console.log(people);

const displayPerson = function (person: Person) {
  console.log(`${person.name} lives at ${person?.address?.street}`);
};
// displayPerson(person1);
