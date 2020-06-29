const express = require('express');
const helpers = require('../helpers/blog');

const router = express.Router()

router.route("/")
    .get(helpers.getAll)
    .post(helpers.insert)

router.route("/:id")
    .get(helpers.findOne)
    .put((req, res) => res.send("Put"))

module.exports= router;

