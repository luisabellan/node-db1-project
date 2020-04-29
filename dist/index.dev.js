"use strict";

var express = require("express");

var server = require("./api/server.js");

var welcomeRouter = require("./welcome/welcome-routes.js");

var accountsRouter = require("./accounts/accounts-routes.js"); //const customersRouter = require("./customers/customers-routes")


var PORT = process.env.PORT || 5000;
server.use(express.json());
server.use("/api/", welcomeRouter);
server.use("/api/accounts/", accountsRouter); //server.use("/api/customers/", customersRouter)

server.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).json({
    message: "Houston we have a problem"
  });
});
server.listen(PORT, function () {
  console.log("\n== API running on port ".concat(PORT, " ==\n"));
});