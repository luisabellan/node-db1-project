"use strict";

var express = require("express");

var db = require("../data/dbConfig");

var router = express.Router();
router.get("/", function _callee(req, res, next) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          try {
            res.json({
              message: "Welcome"
            });
          } catch (err) {
            next(err);
          }

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
});
module.exports = router;