const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// const { roles } = require("../router/constand");

const userModel = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
    lowercase: true,
  },
  lastName: {
    type: String,
    require: true,
    lowercase: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    lowercase: true,
    unique: true,
  },
  phoneNumber: {
    type: Number,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  cpassword: {
    type: String,
    require: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

userModel.pre("save", async function (next) {
  try {
    if (this.isNew) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(this.password, salt);
      this.password = hashedPassword;
      const hashedCpassword = await bcrypt.hash(this.cpassword, salt);
      this.cpassword = hashedCpassword;

      if (this.email === process.env.ADMIN_EMAIL.toLowerCase()) {
        this.role = roles.admin;
      }
    }
    next();
  } catch (error) {
    next(error);
  }
});

userModel.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign(
      {
        _id: this._id,
      },
      process.env.SECRET_KEY
    );
    this.tokens.push({ token: token });
    await this.save();
    return token;
  } catch (error) {
    throw new Error(error);
  }
};

const User = mongoose.model("USER", userModel);
module.exports = User;
