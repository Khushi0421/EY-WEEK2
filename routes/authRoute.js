import express from "express";
import { registerController } from "../controllers/authController.js";

const router = express.Router();

// Register route
router.post("/register", registerController);


export default router;

