"use strict";

var express = require("express");

var db = require("./data/dbConfig");

var router = express.Router();
router.get("/", function (req, res, next) {});
router.get("/:id", function (req, res, next) {});
router.post("/", function (req, res, next) {});
router.put("/:id", function (req, res, next) {});
router["delete"]("/:id", function (req, res, next) {});
module.exports = router;