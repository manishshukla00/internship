import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect(
      "mongodb+srv://saurabh_917:x53k9fu6fh@saurabh.dmntghg.mongodb.net/todo"
    )
    .then(() => console.log("Mongodb connected Successfully"))
    .catch((err) => console.log(err));
};

export default connectDB;
