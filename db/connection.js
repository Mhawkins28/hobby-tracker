import mongoose from "mongoose";


mongoose
  .set("strictQuery", true)
  .connect(process.env.DB_URL || "mongodb://localhost:27017/hobbies")
  .then((instance) => {
    console.log(`Connected on ${instance.connections[0].name}`);
  })
  .catch((err) => console.log(`Got an error see details, ${err}`));

export default mongoose.connection;
