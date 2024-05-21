const express = require("express");

const router = express.Router();

const { sayWelcome } = require("../../controllers/sayActions");

router.get("/", sayWelcome);

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const programsRouter = require("./programs/router");

router.use("/programs", programsRouter);

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

const categoriesRouter = require("./categories/router");

router.use("/categories", categoriesRouter);

/* ************************************************************************* */

module.exports = router;
