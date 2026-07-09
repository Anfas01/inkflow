import app from "./app.js";
import connectDB  from "./config/db.js";
import dotenv from "dotenv";

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
});