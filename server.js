import db from "./db/connection.js";
import routes from "./routes/index.js";
import cors from "cors";
import express from "express";

const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/", routes);

db.on("connected", () => {
  console.clear();
  app.listen(PORT, () => {
    console.log(`Express server is running in development on PORT ${PORT}`);
  });
});
