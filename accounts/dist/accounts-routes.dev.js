"use strict";

var express = require("express");

var db = require("../data/dbConfig");

var router = express.Router();
router.get("/", function _callee(req, res, next) {
  var accounts;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(db.select("*").from("accounts"));

        case 3:
          accounts = _context.sent;
          res.json(accounts);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          next(_context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
router.get("/:id", function _callee2(req, res, next) {
  var accounts;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(db("messages").where("id", req.params.id).first());

        case 3:
          accounts = _context2.sent;
          // the same as above but a shortened version, as `db.first("*").from(messages)` is equivalent to `db("messages")`
          res.json(message);
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          next(_context2.t0);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
router.post("/", function (req, res, next) {});
router.put("/:id", function (req, res, next) {});
router["delete"]("/:id", function (req, res, next) {});
module.exports = router;