// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Grabbing our models

var sequelize = require("../config/config.json");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/burgers", function(req, res) {
    sequelize.findAll(function(results) {
      res.json(results);
    });
  });

};
