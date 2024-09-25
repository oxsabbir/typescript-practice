/**
 * So we going use type when we are creating array object
 * When we are using it as function parameters
 * We will get checked on the time of the function is called
 * or if we try to mutate those types of value with other type of value
 */
type Pizza = {
  name: string;
  price: number;
};

type Order = {
  orderId: number;
  pizza: Pizza;
  status: "ordered" | "complete";
};

const menu: Array<Pizza> = [
  { name: "Margherita", price: 23 },
  { name: "Pepperoni", price: 64 },
  { name: "Hawaiian", price: 23 },
  { name: "Veggie", price: 61 },
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

addNewPizza({ name: "Rissoto", price: 18 });
addNewPizza({ name: "BBQ chicken", price: 32 });

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

placeOder("BBQ chicken")
placeOder("Rissoto")
placeOder("Pepperoni")

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

completeOrder(1)
completeOrder(3)

pizzaStatus()