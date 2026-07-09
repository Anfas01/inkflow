import express from "express";
import { getNotes, createNote, updateNote, deleteNote } from "../controllers/noteController.js";
import authMiddleware from "../middleware/authMiddleware.js";


const router = express.Router();

router.use(authMiddleware);

router.get("/get", getNotes);
router.post("/create", createNote);
router.patch("/update/:id", updateNote);
router.delete("/delete/:id", deleteNote);


export default router