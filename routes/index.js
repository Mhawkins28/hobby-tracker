import { Router } from "express";
import books from "./books.js";

const router = Router();
router.get("/", (req, res) => {
  res.send("This is the home route for your tracker");
});

router.use("/books", books);

export default router;