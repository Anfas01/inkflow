import { Edit3, Trash2, X } from "lucide-react";
import { useEffect } from "react";
import Button from "./ui/Button";
import IconButton from "./ui/IconButton";

const ReadNote = ({ note, onClose, onDelete, onUpdate }) => {
  useEffect(() => {
    const handleKeyDown = (event) => { if (event.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!note) return null;
  const createdDate = new Intl.DateTimeFormat("en-IN", { day: "2-digit", month: "long", year: "numeric" }).format(new Date(note.createdAt));

  return (
    <div role="presentation" onMouseDown={onClose} className="animate-fade-in fixed inset-0 z-50 flex items-end bg-slate-950/40 p-0 sm:items-center sm:justify-center sm:p-6">
      <section role="dialog" aria-modal="true" aria-labelledby="note-title" onMouseDown={(event) => event.stopPropagation()} className="animate-slide-up flex max-h-[92dvh] w-full max-w-3xl flex-col rounded-t-xl bg-white shadow-xl sm:max-h-[85vh] sm:rounded-lg">
        <header className="flex items-start justify-between gap-4 border-b border-slate-200 px-5 py-4 sm:px-6">
          <div className="min-w-0"><h2 id="note-title" className="break-words text-lg font-semibold text-slate-950 sm:text-xl">{note.title}</h2><p className="mt-1 text-sm text-slate-500">Created {createdDate}</p></div>
          <IconButton label="Close note" onClick={onClose}><X className="size-5" /></IconButton>
        </header>
        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-6 sm:px-6"><p className="whitespace-pre-wrap break-words text-sm leading-7 text-slate-700">{note.content}</p></div>
        <footer className="flex flex-wrap justify-between gap-3 border-t border-slate-200 px-5 py-4 sm:px-6"><Button variant="danger" onClick={() => onDelete(note._id)}><Trash2 className="size-4" />Delete</Button><div className="flex gap-2"><Button variant="secondary" onClick={onClose}>Close</Button><Button onClick={() => onUpdate(note)}><Edit3 className="size-4" />Edit note</Button></div></footer>
      </section>
    </div>
  );
};

export default ReadNote;
