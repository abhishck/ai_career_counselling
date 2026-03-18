import bcrypt from "bcryptjs";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const jwtSecret = "await@123";
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ status: false, message: "All fields are mandatory" });
    }
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res
        .status(401)
        .json({ status: false, message: "user already exist!" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new userModel({
      username,
      email,
      password: hashedPassword,
    });
    await user.save();

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      jwtSecret,
      {
        expiresIn: "5m",
      },
    );

    return res.status(201).json({
      status: true,
      message: "user created successfully",
      token: token,
    });
  } catch (error) {
    console.log(`register error : ${error.message}`);
    return res
      .status(500)
      .json({ status: false, message: "internal server error" });
  }
};

export const login = async (req, res) => {
  const jwtSecret = "await@123";
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ status: false, message: "All fields are mandatory" });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ status: false, message: "User not found !!" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ status: false, message: "password is invalid!!" });
    }
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      jwtSecret,
      {
        expiresIn: "5m",
      },
    );
    return res
      .status(200)
      .json({ status: true, message: "login successfully!!", token: token });
  } catch (error) {
    console.log(`login error : ${error.message}`);
    return res
      .status(500)
      .json({ status: false, message: "internal server error" });
  }
};

export const currentUser = async (req, res) => {
  try {
    const id = req._id;
    const user = await userModel.findById({ id });
    return res.status(200).json({ status: true, user: user });
  } catch (error) {
    console.log(`current user error : ${error.message}`);
    return res
      .status(500)
      .json({ status: false, message: "internal server error" });
  }
};
