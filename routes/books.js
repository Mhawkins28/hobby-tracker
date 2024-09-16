import { Router } from "express";
import * as controllers from "../controllers/books.js";

const router = Router();

router.get("/", controllers.getAllBooks);

export default router;