/**
 * Created by ryanrodwell on 5/3/17.
 */
var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var burger = require("../models/burger.js");

// get route -> index
router.get("/", function(req, res) {
    res.redirect("/burgers");
});

// Create all our routes and set up logic within those routes where required.
router.get("/burgers", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/burgers/create", function(req, res) {
    burger.create([
        'burger_name', "devoured"
    ], [
        req.body.burger_name, 0
    ], function() {
        res.redirect("/");
    });
});

router.put("/burgers/:id", function(req, res) {
    var condition = "id = " + req.body.burger_id;

    console.log("condition", condition);

    burger.update({
        devoured: 1
    }, condition, function() {
        res.redirect("/");
    });
});


// Export routes for server.js to use.
module.exports = router;
