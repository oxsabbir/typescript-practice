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

type Role = "admin" | "member" | "contributor";

type User = {
  id: number;
  username: string;
  role: Role;
};

// we can extend type to by mixing these 2 type we created new type called Bear
type Animal = {
  name: string;
};
type Bear = Animal & {
  honey: boolean;
};

const bearOne: Bear = { name: "big Bear", honey: true };

let nextUserId = 1;

const user: User[] = [
  { id: nextUserId++, username: "jon_doe", role: "contributor" },
  { id: nextUserId++, username: "machine", role: "admin" },
  { id: nextUserId++, username: "skill_mat", role: "member" },
  { id: nextUserId++, username: "charlie_brown", role: "member" },
];
/**
 * Here i leard about utility type called Partial it's uses generics syntax
 * The partial takes in a type and return a new type with slight modification like it's set all the property to optional
 */

const updateUser = function (id: number, updates: Partial<User>): User | void {
  const selectedUser = user.find((item) => item.id === id);
  console.log(selectedUser);
  if (!selectedUser) return console.log("No user found by provided ID");
  const updatedUser = Object.assign(selectedUser, updates);
  return updatedUser;
};

const addNewUser = function (newUser: Omit<User, "id">): User {
  const userAdded: User = { id: nextUserId++, ...newUser };
  user.push(userAdded);
  return userAdded;
};

addNewUser({ username: "rocky", role: "contributor" });

updateUser(1, { role: "member" });
updateUser(2, { role: "admin", username: "oxsabbir" });

console.log(user);

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

/**
 * Lesson about generics
 */

const numberArray = [23, 34, 53];

const stringArray = ["name is ", "don't know", "how"];

const objectArray = [{ name: "don't knwo" }, { name: "bob" }];

const getLastItem = function <PlaceType>(
  array: PlaceType[]
): PlaceType | undefined {
  const retunableItem: PlaceType = array[array.length - 1];
  return retunableItem;
};

console.log(getLastItem(numberArray));
console.log(getLastItem(stringArray));
console.log(getLastItem(objectArray));

/// here we leared about interface in ts
interface IUser {
  name: string;
  email: string;
  googleId: string;
  // here this method should return only string
  startTrial(): string;
  getCupon(cuponCode: string, amount: number): number;
}

// re-opening interface
// by doing this we are adding new propery of type in our existing interface
interface IUser {
  // this is the new field that we are adding to the IUser interface
  githubToken: string;
}

// or we can entend an interface like OOP inheritance that inherit properties from it's parent interface
// we can extend interface from more than one interface by using (Admin extends IUser,Another) comma
interface Admin extends IUser {
  role: "Admin" | "User" | "Moderator";
}
// Creating actual user from that interface
const user1: Admin = {
  name: "Sabbir",
  email: "this@mail.com",
  googleId: "a34s456lfk1h5d",
  startTrial() {
    return "Sabbir10";
  },
  // here this are parameter string
  getCupon(cuponCode: "sabbir10", amount: 10) {
    return amount;
  },
  githubToken: "newgithubtoken",
  // role is coming from Admin interface that inherit IUser interface
  role: "Admin",
};

console.log(user1);
