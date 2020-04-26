"use strict";var express=require("express"),server=require("./api/server.js"),welcomeRouter=require("./welcome/welcome-routes"),accountsRouter=require("./accounts/accounts-routes"),customersRouter=require("./customers/customers-routes"),PORT=process.env.PORT||5e3;server.use(express.json()),server.use("/api/",welcomeRouter),server.use("/api/accounts",accountsRouter),server.use("/api/customers",customersRouter),server.use(function(e,s,r,o){console.log(e),r.status(500).json({message:"Houston we have a problem"})}),server.listen(PORT,function(){console.log("\n== API running on port ".concat(PORT," ==\n"))});