// /**
//  * Here i learned about how to declare a type for an object
//  * And Use it for type safety and reduce runtime error
//  */
var user1 = {
  name: "Sabbir",
  email: "this@mail.com",
  googleId: "a34s456lfk1h5d",
  startTrial: function () {
    return "Sabbir10";
  },
  // here this are parameter string
  getCupon: function (cuponCode, amount) {
    return amount;
  },
};
console.log(user1.getCupon("sabbir11", 25));
