import userModel from "../models/userModel";
import bcrypt from "bcryptjs";

export const registerController = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    if (!username || !email || !password) {
      return res
        .status(500)
        .send({ success: false, message: "please provide all fields" });
    }
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res
        .status(500)
        .send({ success: false, message: "User already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new userModel({
      username,
      email,
      password: hashedPassword,
    });

    newUser.save();

    res
      .status(201)
      .send({ success: true, message: "User registered successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Register api", error });
  }
};
