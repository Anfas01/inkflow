import { AlertCircle, FileText, Plus } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import EmptyState from "../components/common/EmptyState";
import NotesSkeleton from "../components/common/NotesSkeleton";
import ConfirmDialog from "../components/dialogs/ConfirmDialog";
import Navbar from "../components/Navbar";
import NewNote from "../components/NewNote";
import NoteCard from "../components/NoteCard";
import ReadNote from "../components/ReadNote";
import Button from "../components/ui/Button";
import { getApiError } from "../lib/apiError";
import api from "../services/api";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);
  const [editingNote, setEditingNote] = useState(null);
  const [noteToDelete, setNoteToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchNotes = useCallback(async () => {
    setIsLoading(true); setLoadError("");
    try { const response = await api.get("/note/get"); setNotes(response.data.notes); }
    catch (error) { setLoadError(getApiError(error, "Unable to load your notes.")); }
    finally { setIsLoading(false); }
  }, []);

  useEffect(() => { fetchNotes(); }, [fetchNotes]);
  if (!localStorage.getItem("token")) return <Navigate to="/login" replace />;

  const openCreate = () => { setEditingNote(null); setIsEditorOpen(true); };
  const openEdit = (note) => { setSelectedNote(null); setEditingNote(note); setIsEditorOpen(true); };
  const handleCreate = (note) => setNotes((currentNotes) => [note, ...currentNotes]);
  const handleUpdate = (updatedNote) => {
    setNotes((currentNotes) => currentNotes.map((note) => note._id === updatedNote._id ? updatedNote : note));
    setSelectedNote(updatedNote); setEditingNote(null);
  };
  const confirmDelete = async () => {
    if (!noteToDelete) return;
    setIsDeleting(true);
    try {
      await api.delete(`/note/delete/${noteToDelete._id}`);
      setNotes((currentNotes) => currentNotes.filter((note) => note._id !== noteToDelete._id));
      if (selectedNote?._id === noteToDelete._id) setSelectedNote(null);
      setNoteToDelete(null);
    } catch (error) { setLoadError(getApiError(error, "Unable to delete this note.")); setNoteToDelete(null); }
    finally { setIsDeleting(false); }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar onCreate={openCreate} />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4"><div><p className="text-sm font-medium text-blue-600">Personal workspace</p><h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Your notes</h1><p className="mt-2 text-sm text-slate-500">A calm place for ideas worth keeping.</p></div><div className="hidden items-center gap-2 text-sm text-slate-500 sm:flex"><FileText className="size-4" />{notes.length} {notes.length === 1 ? "note" : "notes"}</div></div>
        {isLoading ? <NotesSkeleton /> : loadError ? <section className="flex min-h-72 flex-col items-center justify-center border border-rose-200 bg-white px-6 text-center"><AlertCircle className="size-7 text-rose-600" /><h2 className="mt-3 font-semibold text-slate-950">We could not load your notes</h2><p role="alert" className="mt-1 text-sm text-slate-500">{loadError}</p><Button variant="secondary" className="mt-5" onClick={fetchNotes}>Try again</Button></section> : notes.length === 0 ? <EmptyState onCreate={openCreate} /> : <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">{notes.map((note) => <NoteCard key={note._id} note={note} onOpen={() => setSelectedNote(note)} onEdit={openEdit} onDelete={(note) => setNoteToDelete(note)} />)}</div>}
      </main>
      <button type="button" aria-label="Create new note" onClick={openCreate} className="focus-ring fixed bottom-5 right-5 flex size-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition hover:bg-blue-700 sm:hidden"><Plus className="size-5" /></button>
      {isEditorOpen && <NewNote note={editingNote} onClose={() => setIsEditorOpen(false)} onCreate={handleCreate} onUpdate={handleUpdate} />}
      {selectedNote && <ReadNote note={selectedNote} onClose={() => setSelectedNote(null)} onDelete={() => setNoteToDelete(selectedNote)} onUpdate={openEdit} />}
      {noteToDelete && <ConfirmDialog noteTitle={noteToDelete.title} isDeleting={isDeleting} onCancel={() => setNoteToDelete(null)} onConfirm={confirmDelete} />}
    </div>
  );
};

export default Home;
