const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ChannelSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  avatar: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  time: { type: String, required: true },
  podcasts: [{ type: Schema.Types.ObjectId, ref: "podcasts" }],
  categories: [{ type: Schema.Types.ObjectId, ref: "categories" }],

});

module.exports = mongoose.model("channels", ChannelSchema);
