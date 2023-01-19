const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ChannelSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  icon: {
    element: { type: String, required: true },
    name: { type: String, required: true },
  },
  type: { type: String, required: true },
  channels: [{ type: Schema.Types.ObjectId, ref: "channels" }],
});

module.exports = mongoose.model("categories", ChannelSchema);
