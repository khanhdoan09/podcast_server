const Category = require("../models/category");

const getAllCategory = async (req, res) => {
  try {
    const data = await Category.aggregate([{
      $project: { _id: 0, icon: 1, type: 1 },
    }]).exec();
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(204).json({ message: "category list is empty" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error in server" });
  }
};

module.exports = {
  getAllCategory,
};
