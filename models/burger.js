const orm = require("../config/orm.js");

//call ORM functions using burger specific input
const burger = {
    selectAll: function (guardDesire) {
        orm.selectAll("burgers", guardDesire);
    },

    insertOne: function (guardReq, guardDesire) {
        orm.insertOne("burgers", guardReq, guardDesire);
    },

    updateOne: function (guardReq, guardDesire) {
        const guardParams = {
            set: { devoured: true },
            where: guardReq
        };

        orm.updateOne("burgers", guardParams, guardDesire);
    }
};

module.exports = burger;