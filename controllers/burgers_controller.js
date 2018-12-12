const express = require('express');
const burger = require('../models/burger.js');

//create router for app
const router = express.Router();

router.get("/", function(_, res) {
  burger.selectAll(function(chefTicket) {
    const ticketObject = { orderHistory: chefTicket };
    res.render(
      "index",
      ticketObject
    );
  });
});

router.post("/api/guardRecord", function(req, res) {
    burger.insertOne(req.body, function() {
      return res.status(200).end();
    });
});

router.put("/peasant/devour/:id", function (req, res) {
    burger.updateOne({id: req.params.id}, function() {
      return res.status(200).end();
    });
});

module.exports = router;