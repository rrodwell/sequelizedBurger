/**
 * Created by ryanrodwell on 5/3/17.
 */
var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var db = require("../models/");

// get route -> index
router.get("/", function(req, res) {
    res.redirect("/burgers");
});

// Create all our routes and set up logic within those routes where required.
router.get("/burgers", function(req, res) {
    db.Burger.findAll()
        .then(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        return res.render("index", hbsObject);
    });
});

router.post("/burgers/create", function(req, res) {
    db.Burger.create({
        burger_name: req.body.burger_name
    }).then(function(data) {
            console.log(data);
            res.redirect("/");
        });
});

router.put("/burgers/update", function(req, res) {
    var condition = req.body.burger_id;

    console.log("condition", condition);

    db.Burger.update({
        devoured: true
    }, {
        where: {
            id: condition
        }
    }).then(function(data) {
        res.redirect("/");
    });
});


// Export routes for server.js to use.
module.exports = router;
