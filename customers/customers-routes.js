const express = require("express")
const db = require("../data/dbConfig")

const router = express.Router()
router.get("/", async (req, res, next) => {
	try {
		// translates to `SELECT * FROM "customers";`
		// MVP const customers = await db.select("*").from("customers")
		const customers = await db.select("*").from("customers").limit(10) //stretch: adding query string option (limit,sortby or sortdir)
		res.json(customers)
	} catch (err) {
		next(err)
	}
})

router.get("/:id", async (req, res, next) => {
	try {
		// translates to `SELECT * FROM "customers" WHERE "id" = ? LIMIT 1;`

		
		const customers = await db("customers").where("id", req.params.id).first() // the same as above but a shortened version, as `db.first("*").from(messages)` is equivalent to `db("messages")`
		res.json(customers)
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
		
		// translates to `INSERT INTO "customers" ("title", "contents") VALUES (?, ?);`
		const [id] = await db("customers").insert(payload)
		const account = await db("customers").where("id", id).first()

		res.json(account)
	} catch (err) {
		next(err)
	}
})

router.put("/:id", async (req, res, next) => {
	try {
		const payload = {
			name: req.body.name,
			budget: req.body.budget,
		}

		// translates to `UPDATE "customers" SET "title" = ? AND "contents" = ? WHERE "id" = ?;`
		await db("customers").where("id", req.params.id).update(payload)
		const updatedAccount = await db("customers").where("id", req.params.id).first()

		res.json(updatedAccount)
	} catch (err) {
		next(err)
	}
})

router.delete("/:id", async (req, res, next) => {
	try {
		// translates to `DELETE FROM "customers" WHERE "id" = ?;`
		await db("customers").where("id", req.params.id).del()
		res.status(204).end()
	} catch (err) {
		next(err)
	}
})

module.exports = router