const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 8 },
  { name: "Hawaiian", price: 8 },
  { name: "Veggie", price: 8 },
];

let cashRegister = 100;

let orderId : number = 1;
const orderQueue = [];

/**
 * adding utility funciton to add new pizza menu to the menu
 */

const addNewPizza = function (pizzaObject) {
  menu.push(pizzaObject);
};
addNewPizza({ name: "Rissoto", price: 8 });

const placeOder = function (pizzaName) {
  const foundPizza = menu.find((item) => item.name === pizzaName);

  if (!foundPizza) return console.log("No pizza found with this name");


  const orderedPizza = {
    pizza: foundPizza,
    status: "orderd",
    orderId : orderId ,
  };

  cashRegister += foundPizza.price;

  orderQueue.push(orderedPizza);
  orderId++;
  return orderedPizza;
};

console.log(placeOder("Hawaiian"));

const completeOrder = function (orderId : number) {
  const orderIndex = orderQueue.findIndex((item) => item.orderId  === orderId);

  if (orderIndex < 0) return console.log("No order found with this ID");

  orderQueue[orderIndex].status  = "complete";

  return orderQueue[orderIndex];
};

completeOrder(1);
  

