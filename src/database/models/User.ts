import { model, Schema } from "mongoose";

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.set("toJSON", {
  virtuals: true,
  transform: (doc, ret) => {
    const newDocument = { ...ret };
    // eslint-disable-next-line no-underscore-dangle
    delete newDocument._id;
    // eslint-disable-next-line no-underscore-dangle
    delete newDocument.__v;
    delete newDocument.password;

    return newDocument;
  },
});

const User = model("User", userSchema, "users");

export default User;
