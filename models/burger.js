const orm = require("../config/orm.js");

//call ORM functions using burger specific input
const burger = {
  selectAll: function (guardDesire) {
    orm.selectAll("burgers", function (chefTicket) {
      guardDesire(chefTicket);
    });
  },

  insertOne: function (guardReq, guardDesire) {
    // { burger_name: "name of burger" }
    orm.insertOne("burgers", guardReq, function (res) {
      console.log("chefs desire fulfilled:", res);
      guardDesire(res);
    });
  },

  updateOne: function (guardReq, guardDesire) {
    // { id: 123 }
    console.log("nomnomonomononononomommom", guardReq);

    const guardParams = {
      set: { devoured: true },
      where: guardReq
    }

    orm.updateOne("burgers", guardParams, function (res) {
      console.log("chef's update desire fulfilled:", res);
      guardDesire(res);
    });
  }
};


module.exports = burger;