import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://kartikgeu:kartikgeu123@cluster0.tpcar.mongodb.net/blog-app"
  );
  console.log("DB Connected");
};
