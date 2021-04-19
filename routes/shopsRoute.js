const express = require("express");
const {
  createShop,
  getAllShops,
  getSingleShop,
  updateShop,
  deleteShop,
} = require("../controllers/shopsController");

const protect = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").post(protect, createShop).get(getAllShops);
router
  .route("/:_id")
  .get(protect, getSingleShop)
  .put(protect, updateShop)
  .delete(protect, deleteShop);

module.exports = router;
