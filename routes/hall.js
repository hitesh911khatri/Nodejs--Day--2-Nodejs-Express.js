const express = require("express");
const router = express.Router();
const Hall = require("../models/Hall");
const CreateError = require("../utils/error");
const { createHall } = require("../controllers/hallController");
const { updateHall } = require("../controllers/hallController");
const { deleteHall } = require("../controllers/hallController");
const { getHall } = require("../controllers/hallController");
const { getAllHall } = require("../controllers/hallController");
const { verifyAdmin } = require("../utils/verifyToken");

router.post("/", verifyAdmin, createHall);
router.put("/:id", verifyAdmin, updateHall);
router.delete("/:id", verifyAdmin, deleteHall);
router.get("/:id", getHall);
router.get("/", getAllHall);

module.exports = router;
