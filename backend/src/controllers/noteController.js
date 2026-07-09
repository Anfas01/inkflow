import Note from "../models/noteModel.js";



// @desc    Get all notes for the logged-in user
// @route   GET /api/notes
// @access  Private

export async function getNotes(req, res) {
  try {

    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized.",
      });
    }

    const notes = await Note.find({
      user: req.user._id,
    })
      .select("title content")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      notes,
    });
  } catch (error) {
    console.error("Get Notes Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
}

// @desc    Create a new note
// @route   POST /api/notes
// @access  Private
export async function createNote(req, res) {
  try {
    let { title, content } = req.body;

    title = title?.trim();
    content = content?.trim();

    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: "Title and content are required.",
      });
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

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
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
      return res.status(400).json({
        success: false,
        message: "Please provide a title or content to update.",
      });
    }

    const note = await Note.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found.",
      });
    }

    if (title) note.title = title;
    if (content) note.content = content;

    await note.save();

    return res.status(200).json({
      success: true,
      message: "Note updated successfully.",
      note,
    });
  } catch (error) {
    console.error("Update Note Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
}

// @desc    Delete a note
// @route   DELETE /api/notes/:id
// @access  Private
export async function deleteNote(req, res) {
  try {
    const note = await Note.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found.",
      });
    }

    await note.deleteOne();

    return res.status(200).json({
      success: true,
      message: "Note deleted successfully.",
    });
  } catch (error) {
    console.error("Delete Note Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
}

// @desc    Get a single note
// @route   GET /api/notes/:id
// @access  Private
export async function getNote(req, res) {
  try {
    const note = await Note.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found.",
      });
    }

    return res.status(200).json({
      success: true,
      note,
    });
  } catch (error) {
    console.error("Get Note Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
}