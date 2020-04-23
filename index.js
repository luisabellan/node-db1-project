const express = require("express")
const server = require("./api/server.js");
const welcomeRouter = require("./welcome/welcome-routes")
const accountsRouter = require("./accounts/accounts-routes")

const PORT = process.env.PORT || 5000;

server.use(express.json())
server.use("/", welcomeRouter)
server.use("/accounts", accountsRouter)
server.use((err, req, res, next)=>{
  console.log(err)
  res.status(500).json({
    message: "Houston we have a problem"
  })
})

server.listen(PORT, () => {
  console.log(`\n== API running on port ${PORT} ==\n`);
});
