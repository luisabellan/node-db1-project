const express = require("express")
const server = require("./api/server.js");
const welcomeRouter = require("./welcome/welcome-routes.js")
const accountsRouter = require("./accounts/accounts-routes.js")
//const customersRouter = require("./customers/customers-routes")

const PORT = process.env.PORT || 5000;

server.use(express.json())
server.use("/api/", welcomeRouter)
server.use("/api/accounts/", accountsRouter)
//server.use("/api/customers/", customersRouter)
server.use((err, req, res, next)=>{
  console.log(err)
  res.status(500).json({
    message: "Houston we have a problem"
  })
})

server.listen(PORT, () => {
  console.log(`\n== API running on port ${PORT} ==\n`);
});
