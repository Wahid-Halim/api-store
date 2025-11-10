const Product = require("../models/productModel");

const getAllProductStatic = async (req, res) => {
  const products = await Product.find({
    name: "wahid",
  });
  res.status(200).json({ products, nHabits: products.length });
};

const getAllProducts = async (req, res) => {
  const { featured, company, name, sort } = req.query;
  const queryObject = {};
  if (featured) queryObject.featured = featured === "true" ? true : false;
  if (company) queryObject.company = company;
  if (name) queryObject.name = { $regex: name, $options: "i" };

  let result = Product.find(queryObject);
  if (sort) {
    const shortList = sort.split(",").join(" ");
    result = result.sort(shortList);
  } else {
    result = result.sort("createdAt");
  }
  const products = await result;

  res.status(200).json({ products, nHabits: products.length });
};

module.exports = {
  getAllProductStatic,
  getAllProducts,
};
