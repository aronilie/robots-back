import mongoose from "mongoose";

const { Schema } = mongoose;

const robotsSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  imageUrl: {
    type: String,
    require: true,
  },
  velocity: {
    type: Number,
    require: true,
  },
  resistance: {
    type: Number,
    require: true,
  },
  creationDate: {
    type: Number,
    require: true,
  },
});

const Robot = mongoose.model("Robot", robotsSchema, "robots");

export default Robot;