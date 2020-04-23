"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
          return regeneratorRuntime.awrap(db("accounts").where("id", req.params.id).first());

        case 3:
          accounts = _context2.sent;
          // the same as above but a shortened version, as `db.first("*").from(messages)` is equivalent to `db("messages")`
          res.json(accounts);
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
router.post("/", function _callee3(req, res, next) {
  var payload, _ref, _ref2, id, account;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          payload = {
            name: req.body.name,
            budget: req.body.budget
          }; // translates to `INSERT INTO "messages" ("title", "contents") VALUES (?, ?);`

          _context3.next = 4;
          return regeneratorRuntime.awrap(db("accounts").insert(payload));

        case 4:
          _ref = _context3.sent;
          _ref2 = _slicedToArray(_ref, 1);
          id = _ref2[0];
          _context3.next = 9;
          return regeneratorRuntime.awrap(db("accounts").where("id", id).first());

        case 9:
          account = _context3.sent;
          res.json(account);
          _context3.next = 16;
          break;

        case 13:
          _context3.prev = 13;
          _context3.t0 = _context3["catch"](0);
          next(_context3.t0);

        case 16:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 13]]);
});
router.put("/:id", function (req, res, next) {});
router["delete"]("/:id", function (req, res, next) {});
module.exports = router;