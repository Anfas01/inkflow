import Note from "../models/noteModel.js";
import mongoose from "mongoose";

// @desc    Get all notes for the logged-in user
// @route   GET /api/notes
// @access  Private
export async function getNotes(req, res) {
  try {
    // The authMiddleware already ensures req.user exists.
    const notes = await Note.find({
      user: req.user._id,
    })
      .select("title content createdAt updatedAt")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      notes,
    });
  } catch (error) {
    console.error("Get Notes Error:", error);

    return res.status(500).json({ success: false, message: "Internal server error." });
  }
}

// @desc    Create a new note
// @route   POST /api/notes
// @access  Private
export async function createNote(req, res) {
  try {
    let { title, content } = req.body;

    title = title?.trim();
    content = content?.trim(); // Allow empty content, but not empty title.

    if (!title) {
      return res.status(400).json({ success: false, message: "Title is required." });
    }

    if (title.length > 140) {
      return res.status(400).json({ success: false, message: "Title must be under 140 characters." });
    }
    if (content && content.length > 20000) {
      return res.status(400).json({ success: false, message: "Content must be under 20,000 characters." });
    }

    const note = await Note.create({
      title,
      content,
      user: req.user._id,
    });

    return res.status(201).json({
      success: true,
      message: "Note created successfully.",
      note,
    });
  } catch (error) {
    console.error("Create Note Error:", error);

    return res.status(500).json({ success: false, message: "Internal server error." });
  }
}

// @desc    Update a note
// @route   PATCH /api/notes/:id
// @access  Private
export async function updateNote(req, res) {
  try {
    let { title, content } = req.body;

    title = title?.trim();
    content = content?.trim();

    if (!title && !content) {
      return res.status(400).json({ success: false, message: "Please provide a title or content to update." });
    }

    if (title && title.length > 140) {
      return res.status(400).json({ success: false, message: "Title must be under 140 characters." });
    }
    if (content && content.length > 20000) {
      return res.status(400).json({ success: false, message: "Content must be under 20,000 characters." });
    }

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(404).json({ success: false, message: "Note not found." });
    }

    // Find and update in one atomic operation
    const note = await Note.findOneAndUpdate({ _id: req.params.id, user: req.user._id }, { title, content }, { new: true });

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Note updated successfully.",
      note,
    });
  } catch (error) {
    console.error("Update Note Error:", error);

    return res.status(500).json({ success: false, message: "Internal server error." });
  }
}

// @desc    Delete a note
// @route   DELETE /api/notes/:id
// @access  Private
export async function deleteNote(req, res) {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(404).json({ success: false, message: "Note not found." });
    }

    const result = await Note.deleteOne({ _id: req.params.id, user: req.user._id });

    if (result.deletedCount === 0) {
      return res.status(404).json({ success: false, message: "Note not found or you don't have permission to delete it." });
    }

    return res.status(200).json({
      success: true,
      message: "Note deleted successfully.",
    });
  } catch (error) {
    console.error("Delete Note Error:", error);
    return res.status(500).json({ success: false, message: "Internal server error." });
  }
}