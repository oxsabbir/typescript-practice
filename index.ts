/**
 * So we going use type when we are creating array object
 * When we are using it as function parameters
 * We will get checked on the time of the function is called
 * or if we try to mutate those types of value with other type of value
 */
type Pizza = {
  id: number;
  name: string;
  price: number;
};

type Order = {
  orderId: number;
  pizza: Pizza;
  status: "ordered" | "complete";
};

const menu: Array<Pizza> = [
  { id: 1, name: "Margherita", price: 23 },
  { id: 2, name: "Pepperoni", price: 64 },
  { id: 3, name: "Hawaiian", price: 23 },
  { id: 4, name: "Veggie", price: 61 },
];

let cashRegister = 100;

let orderId: number = 1;
let orderQueue: Order[] = [];

/**
 * adding utility funciton to add new pizza menu to the menu
 */

const addNewPizza = function (pizzaObject: Pizza) {
  menu.push(pizzaObject);
};

addNewPizza({ id: 5, name: "Rissoto", price: 18 });
addNewPizza({ id: 6, name: "BBQ chicken", price: 32 });

const placeOder = function (pizzaName: string) {
  const foundPizza = menu.find((item) => item.name === pizzaName);

  if (!foundPizza) return console.log("No pizza found with this name");

  let orderedPizza: Order = {
    orderId: orderId,
    pizza: foundPizza,
    status: "ordered",
  };

  cashRegister += foundPizza.price;

  orderQueue.push(orderedPizza);
  orderId++;
  return orderedPizza;
};

placeOder("BBQ chicken");
placeOder("Rissoto");
placeOder("Pepperoni");

const completeOrder = function (orderId: number) {
  const orderIndex = orderQueue.findIndex((item) => item.orderId === orderId);

  if (orderIndex < 0) return console.log("No order found with this ID");

  orderQueue[orderIndex].status = "complete";

  return orderQueue[orderIndex];
};

const pizzaStatus = function () {
  console.log("CashRegister :", cashRegister);
  console.log("Menu :", menu);
  console.log("OrderHistory :", orderQueue);
};

completeOrder(1);
completeOrder(3);

const getPizzaDetails = function (identifier: number | string) {
  /**
   * Now here we are only checking for string not checking for number 
   * The reason is typescript uses typenarrowing to know what type left
   * Because of we don't to check for the rest of.
   * It know it has only 2 type (string , number ) one is checked(string) the other one is left(number).
   * That's why we don't the other if check to see if it's number
   */

  // example of checking both 
  /**
   * {

    if (typeof identifier === "number") {
      return item.id === identifier;
    } else if (typeof identifier === "string") {
      return item.name === identifier;
    } else {
      return false
    }
  }
   */
  
  // this uses type narrowing 
  const selectedPizza = menu.find((item) =>
    typeof identifier === "string"
      ? item.name.toLocaleLowerCase() === identifier.toLocaleLowerCase()
      : item.id === identifier
  );

  if (!selectedPizza)
    return console.log("No pizza found using that identifier");
  console.log(selectedPizza);
};

getPizzaDetails(3);
getPizzaDetails("rissoto");

// pizzaStatus();
