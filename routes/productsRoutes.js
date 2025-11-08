const express = require("express");
const router = express.Router();

const {
  getAllProductsStatic,
  getAllProducts,
  getAllProductStatic,
} = require("../controllers/productsControllers");
const { route } = require("express/lib/router");

router.route("/").get(getAllProducts);
router.route("/static").get(getAllProductStatic);

module.exports = router;
