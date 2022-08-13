import { Schema, Model } from "mongoose";

const robotsSchema = new Schema({
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

const Robot = new Model("Robot", robotsSchema);

export default Robot;
