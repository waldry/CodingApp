const mongoose = require("mongoose");
const { Schema } = mongoose; //require schema from mongoose

const TechnologySchema = new Schema(
  {
    //new Schema for technology
    name: { type: String, maxlength: 50 },
    description: { type: String },
    logo: { type: String },
    tags: [{ type: String }],
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

module.exports = mongoose.model("Technology", TechnologySchema);
