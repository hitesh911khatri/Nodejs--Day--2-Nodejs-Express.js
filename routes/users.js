const express = require("express");
const router = express.Router();
const {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} = require("../controllers/userController");
const {
  verifyToken,
  verify,
  verifyUser,
  verifyAdmin,
} = require("../utils/verifyToken");

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("authenticated");
// });
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("hello user,you are logged in and can delete");
// });

// router.get("/checkAdmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("hello admin,you are authorized");
// });

router.put("/:id", verifyUser, updateUser);
router.delete("/:id", verifyUser, deleteUser);
router.get("/:id", verifyUser, getUser);
router.get("/", verifyAdmin, getUsers);

module.exports = router;
