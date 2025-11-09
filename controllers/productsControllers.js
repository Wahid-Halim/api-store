const Product = require("../models/productModel");

const getAllProductStatic = async (req, res) => {
  const products = await Product.find({
    company: "ikea",
    featured: true,
  });
  res.status(200).json({ status: "success", data: [products] });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "products routes" });
};

module.exports = {
  getAllProductStatic,
  getAllProducts,
};
