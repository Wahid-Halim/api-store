const getAllProductStatic = async (req, res) => {
  res.status(200).json({ msg: "Products testing route" });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "products routes" });
};

module.exports = {
  getAllProductStatic,
  getAllProducts,
};
