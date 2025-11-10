const Product = require("../models/productModel");

const getAllProductStatic = async (req, res) => {
  const products = await Product.find({
    page: 3,
  });
  res.status(200).json({ status: "success", data: [products] });
};

const getAllProducts = async (req, res) => {
  const { featured, company } = req.query;
  const queryObject = {};
  if (featured) queryObject.featured = featured === "true" ? true : false;
  if (company) queryObject.company = company;

  const products = await Product.find(queryObject);
  res.status(200).json({ products, nHabits: products.length });
};

module.exports = {
  getAllProductStatic,
  getAllProducts,
};
