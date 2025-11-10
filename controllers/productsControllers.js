const Product = require("../models/productModel");

const getAllProductStatic = async (req, res) => {
  const products = await Product.find({
    name: "wahid",
  });
  res.status(200).json({ products, nHabits: products.length });
};

const getAllProducts = async (req, res) => {
  const { featured, company, name } = req.query;
  const queryObject = {};
  if (featured) queryObject.featured = featured === "true" ? true : false;
  if (company) queryObject.company = company;
  if (name) queryObject.name = { $regex: name, $options: "i" };
  console.log(name);
  console.log(queryObject);

  const products = await Product.find(queryObject);
  res.status(200).json({ products, nHabits: products.length });
};

module.exports = {
  getAllProductStatic,
  getAllProducts,
};
