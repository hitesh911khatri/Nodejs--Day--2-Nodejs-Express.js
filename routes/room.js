const express = require("express");
const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("hello authorized");
// });
// router.get("/register", (req, res) => {
//   res.send("hello register end point");
// });

// module.exports = router;
const {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
  updateRoomAvailability,
} = require("../controllers/roomController");
const { verifyAdmin } = require("../utils/verifyToken");

//CREATE
router.post("/:hallid", verifyAdmin, createRoom);

//UPDATE
router.put("/availability/:id", updateRoomAvailability);
router.put("/:id", verifyAdmin, updateRoom);
//DELETE
router.delete("/:id/:hallid", verifyAdmin, deleteRoom);
//GET

router.get("/:id", getRoom);
//GET ALL

router.get("/", getRooms);

module.exports = router;
