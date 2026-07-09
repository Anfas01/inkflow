import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import NoteCard from "../components/NoteCard";
import NewNote from "../components/NewNote";
import ReadNote from "../components/ReadNote";

const Home = () => {
  const navigate = useNavigate();

  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showNewNote, setShowNewNote] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  const [editingNote, setEditingNote] = useState(null);

  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/login");
  }

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    try {
      const res = await api.get("/note/get");
      setNotes(res.data.notes);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const addNote = (note) => {
    setNotes((prev) => [note, ...prev]);
  };

  const deleteNote = async (id) => {
    try {
      await api.delete(`/note/delete/${id}`);

      setNotes((prev) => prev.filter((note) => note._id !== id));

      if (selectedNote?._id === id) {
        setSelectedNote(null);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateNote = (updated) => {
    setNotes((prev) =>
      prev.map((note) =>
        note._id === updated._id ? updated : note
      )
    );

    setSelectedNote(updated);

    setEditingNote(null);
  };

  const openEditModal = (note) => {
    setSelectedNote(null);
    setEditingNote(note);
    setShowNewNote(true);
  };

  return (
    <>
      <Navbar setEditingNote={setEditingNote} setNewNote={setShowNewNote} />

      {showNewNote && (
        <NewNote
          setNewNote={setShowNewNote}
          addNote={addNote}
          note={editingNote}
          updateNote={updateNote}
        />
      )}

      {selectedNote && (
        <ReadNote

          note={selectedNote}
          onClose={() => setSelectedNote(null)}
          onDelete={deleteNote}
          onUpdate={openEditModal}
        />
      )}

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {loading ? (
          <h1 className="text-xl font-semibold">
            Loading...
          </h1>
        ) : notes.length === 0 ? (
          <h1 className="text-2xl font-bold text-gray-800">
            No notes found
          </h1>
        ) : (
          notes.map((note) => (
            <NoteCard
              onEdit={openEditModal}
              key={note._id}
              note={note}
              onOpen={() => setSelectedNote(note)}
              onDelete={deleteNote}
            />
          ))
        )}

      </div>
    </>
  );
};

export default Home;