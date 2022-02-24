import express from "express";
import {
  createScreams,
  getScreams,
} from "../controllers/screams/getScreams.js";

const router = express.Router();

router.get("/", getScreams);

router.post("/", createScreams);

export default router;
