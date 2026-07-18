import { LoaderCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import api from "../services/api";
import { getApiError } from "../lib/apiError";
import StatusMessage from "./common/StatusMessage";
import Button from "./ui/Button";
import IconButton from "./ui/IconButton";

const NewNote = ({ onClose, onCreate, note, onUpdate }) => {
  const isEditing = Boolean(note);
  const [title, setTitle] = useState(note?.title || "");
  const [content, setContent] = useState(note?.content || "");
  const [error, setError] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => { if (event.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!title.trim() || !content.trim()) { setError("A title and note content are both required."); return; }
    setError(""); setIsSaving(true);
    try {
      const response = isEditing
        ? await api.patch(`/note/update/${note._id}`, { title, content })
        : await api.post("/note/create", { title, content });
      if (isEditing) onUpdate(response.data.note); else onCreate(response.data.note);
      onClose();
    } catch (requestError) { setError(getApiError(requestError, "Unable to save this note.")); }
    finally { setIsSaving(false); }
  };

  return (
    <div role="presentation" onMouseDown={onClose} className="animate-fade-in fixed inset-0 z-50 flex items-end bg-slate-950/40 p-0 sm:items-center sm:justify-center sm:p-6">
      <section role="dialog" aria-modal="true" aria-labelledby="note-form-title" onMouseDown={(event) => event.stopPropagation()} className="animate-slide-up w-full max-w-2xl rounded-t-xl bg-white shadow-xl sm:rounded-lg">
        <header className="flex items-center justify-between border-b border-slate-200 px-5 py-4 sm:px-6"><div><h2 id="note-form-title" className="text-lg font-semibold text-slate-950">{isEditing ? "Edit note" : "New note"}</h2><p className="mt-0.5 text-sm text-slate-500">Keep the important details close.</p></div><IconButton label="Close editor" onClick={onClose}><X className="size-5" /></IconButton></header>
        <form onSubmit={handleSubmit} className="space-y-5 px-5 py-5 sm:px-6 sm:py-6">
          <StatusMessage error={error} />
          <div><label htmlFor="note-title-input" className="mb-2 block text-sm font-medium text-slate-700">Title</label><input id="note-title-input" autoFocus value={title} onChange={(event) => setTitle(event.target.value)} maxLength="140" placeholder="What is this about?" className="focus-ring w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm text-slate-950 placeholder:text-slate-400" /></div>
          <div><label htmlFor="note-content-input" className="mb-2 block text-sm font-medium text-slate-700">Note</label><textarea id="note-content-input" rows={10} value={content} onChange={(event) => setContent(event.target.value)} maxLength="20000" placeholder="Start writing..." className="focus-ring block w-full resize-y rounded-md border border-slate-300 px-3 py-2.5 text-sm leading-6 text-slate-950 placeholder:text-slate-400" /></div>
          <footer className="flex justify-end gap-2"><Button variant="secondary" onClick={onClose} disabled={isSaving}>Cancel</Button><Button type="submit" disabled={isSaving}>{isSaving && <LoaderCircle className="size-4 animate-spin" />}{isSaving ? "Saving" : isEditing ? "Save changes" : "Create note"}</Button></footer>
        </form>
      </section>
    </div>
  );
};

export default NewNote;
