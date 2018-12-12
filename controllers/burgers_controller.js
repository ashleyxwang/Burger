const express = require('express');
const burger = require('../models/burger.js');

//create router for app
const router = express.Router();

router.get("/", function(_, res) {
    console.log('\t\t@ ctrl/burger GET on /');
    console.log("\t\tim kinda okay \n\ti guess");

  burger.selectAll(function(chefTicket) {
    const ticketObject = { orderHistory: chefTicket };
    res.render(
      "index",
      ticketObject
    );
  });
});

router.post("/api/guardRecord", function(req, res) {
    console.log('\t\t@ ctrl/burger POST on /api/guardRecord', req.body);
    
    burger.insertOne(req.body, function() {
      console.log("guards desire fulfilled");
      return res.status(200).end();
    });
    // const peasantOrder = req.body
});

router.put("/peasant/devour/:id", function (req, res) {
    console.log('\t\t@ ctrl/burger PUT on /peasant/devour/:id', req.params.id);
    console.log(req.params.id);
    burger.updateOne({id: req.params.id}, () => {
      console.log("happy pappy guardy oney");
      return res.status(200).end();
    });
});

module.exports = router;