const Category = require("../models/category");
const Channel = require("../models/channel");
const mongoose = require("mongoose");

const getAllChannel = async (req, res) => {
  try {
    const data = await Channel.find({});
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(204).json({ message: "channel list is empty" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error in server" });
  }
};

const getAllChannelByName = async (req, res) => {
  const name = req?.query?.name;
  try {
    if (name === undefined || name === null)
      throw Error("not found name to search");
    const data = await Channel.find({ title: { $regex: name, $options: "i" } });
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(204).json({ message: "channel list is empty" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "error in server" });
  }
};

const getAllChannelByCategory = async (req, res) => {
  const category = req?.query?.category
  try {
    if (category === undefined || category === null)
      throw Error("not found category to search");
    const data = await Category.aggregate([
      {
        $match: { type: category.trim() },
      },
      {
        $lookup: {
          from: "channels",
          localField: "channels",
          foreignField: "_id",
          as: "channels",
        },
      },
      {$project: {_id: 0,  icon: 0, type: 0, "channels.podcasts": 0, "channels.categories": 0}}
    ]);
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(204).json({ message: "channel list is empty" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "error in server" });
  }
};

module.exports = {
  getAllChannel,
  getAllChannelByName,
  getAllChannelByCategory
};
