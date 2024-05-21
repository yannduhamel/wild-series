const express = require("express");

const router = express.Router();

/* ************************************************************************* */
const { browse, read } = require("../../../controllers/categoryActions");
/* ************************************************************************* */

// Route to get a list of programs
router.get("/", browse);

// Route to get one program
router.get("/:id", read);

/* ************************************************************************* */

module.exports = router;
