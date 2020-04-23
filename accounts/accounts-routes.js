const express = require("express")
const db = require("../data/dbConfig")

const router = express.Router()
router.get("/", async (req, res, next) => {
	try {
		// translates to `SELECT * FROM "accounts";`
		const accounts = await db.select("*").from("accounts")
		res.json(accounts)
	} catch (err) {
		next(err)
	}
})

router.get("/:id", async (req, res, next) => {
	try {
		// translates to `SELECT * FROM "accounts" WHERE "id" = ? LIMIT 1;`

		
		//const messages = await db.first("*").from(messages).where("id", req.params.id) //it returns an array that's why we use bracket, to destructure the array
		const accounts = await db("accounts").where("id", req.params.id).first() // the same as above but a shortened version, as `db.first("*").from(messages)` is equivalent to `db("messages")`
		res.json(accounts)
	} catch (err) {
		next(err)
	}
})

router.post("/", async (req, res, next) => {
	try {
		const payload = {
			name: req.body.name,
			budget: req.body.budget,
		}
		
		// translates to `INSERT INTO "messages" ("title", "contents") VALUES (?, ?);`
		const [id] = await db("accounts").insert(payload)
		const account = await db("accounts").where("id", id).first()

		res.json(account)
	} catch (err) {
		next(err)
	}
})

router.put("/:id", (req, res, next) => {

})

router.delete("/:id", (req, res, next) => {

})

module.exports = router