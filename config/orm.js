const connection = require("./connection.js");

//selectAll(), insertOne(), updateOne();

// Object for all our SQL statement functions.
const orm = {
  selectAll: function(modelTable, chefDesire) {

    connection.query("SELECT * FROM ??", [modelTable], function(trash, chefTicket) {
      if (trash) {
        throw trash;
      }

      chefDesire(chefTicket);
    });
  },


  insertOne: function (modelTable, chefReq, chefDesire) {    
    console.log("orm accepted chef's request");

    connection.query("INSERT INTO ?? SET ?", [modelTable, chefReq], function(err, result) {
      if (err) {
        throw err;
      }

      chefDesire(result);
    });
  },
  
  // An example of objColVals would be {name: panther, sleepy: true}
  updateOne: function(modelTable, chefReq, chefDesire) {    
    connection.query("UPDATE ?? SET ? WHERE ?", [modelTable, chefReq.set, chefReq.where], function(err, result) {
      if (err) {
        throw err;
      }
      chefDesire(result);
    });
  }
};

module.exports = orm;
