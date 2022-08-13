import mongoose, { model } from "mongoose";

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
    type: String,
    require: true,
  },
});

const Robot = model("Robot", robotsSchema, "robots");

export default Robot;
