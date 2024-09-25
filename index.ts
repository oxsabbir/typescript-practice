/**
 * So we going use type when we are creating array object 
 * When we are using it as function parameters 
 * We will get checked on the time of the function is called 
 * or if we try to mutate those types of value with other type of value 
 */
type Pizza = {
  name : string
  price : number
}

type Order = {
  orderId : number
  pizza : Pizza
  status : string
}


const menu : Array<Pizza> = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 8 },
  { name: "Hawaiian", price: 8 },
  { name: "Veggie", price: 8 },
];

let cashRegister = 100;

let orderId : number = 1;
let orderQueue : Array<Order> = [];

/**
 * adding utility funciton to add new pizza menu to the menu
 */

const addNewPizza = function (pizzaObject : Pizza) {
  menu.push(pizzaObject);
};


addNewPizza({ name: "Rissoto", price: 8 });
addNewPizza({ name: "BBQ chicken", price:12 });

const placeOder = function (pizzaName :string) {
  const foundPizza = menu.find((item) => item.name === pizzaName);

  if (!foundPizza) return console.log("No pizza found with this name");
  let orderedPizza = {
    orderId : orderId ,
    pizza: foundPizza,
    status: "orderd",
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
  

