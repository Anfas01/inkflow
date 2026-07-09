import { useState } from "react";
import api from "../services/api";

const NewNote = ({
  setNewNote,
  addNote,
  note = null,
  updateNote,
}) => {
  const isEditing = !!note;

  const [title, setTitle] = useState(note?.title || "");
  const [content, setContent] = useState(note?.content || "");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isEditing) {
        const res = await api.patch(`/note/update/${note._id}`, {
          title,
          content,
        });

        updateNote(res.data.note);
      } else {
        const res = await api.post("/note/create", {
          title,
          content,
        });

        addNote(res.data.note);
      }

      setNewNote(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl"
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b px-6 py-4">
          <h2 className="text-2xl font-bold">
            {isEditing ? "Update Note" : "Create Note"}
          </h2>

          <button
            onClick={() => setNewNote(false)}
            className="rounded-lg p-2 hover:bg-gray-100"
          >
            ✕
          </button>
        </div>

        {/* Form */}

        <form
          onSubmit={onSubmit}
          className="space-y-5 p-6"
        >
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="w-full rounded-lg border px-4 py-3"
          />

          <textarea
            rows={8}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content..."
            className="w-full rounded-lg border px-4 py-3"
          />

          <div className="flex justify-end gap-3">

            <button
              type="button"
              onClick={() => setNewNote(false)}
              className="rounded-lg border px-5 py-2"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-lg bg-indigo-600 px-6 py-2 text-white"
            >
              {isEditing ? "Update" : "Create"}
            </button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default NewNote;