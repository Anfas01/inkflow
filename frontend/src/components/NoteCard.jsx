import { Edit3, Trash2 } from "lucide-react";
import IconButton from "./ui/IconButton";

const formatDate = (date) => new Intl.DateTimeFormat("en-IN", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(date));

const NoteCard = ({ note, onOpen, onDelete, onEdit }) => (
  <article className="group relative flex min-h-56 flex-col rounded-lg border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md">
    <button type="button" onClick={onOpen} className="focus-ring -m-1 flex flex-1 flex-col rounded-sm p-1 text-left">
      <h2 className="line-clamp-2 text-base font-semibold leading-6 text-slate-950">{note.title}</h2>
      <p className="mt-3 line-clamp-5 whitespace-pre-wrap text-sm leading-6 text-slate-600">{note.content}</p>
    </button>
    <footer className="mt-5 flex items-center justify-between border-t border-slate-100 pt-3">
      <time dateTime={note.createdAt} className="text-xs text-slate-500">{formatDate(note.createdAt)}</time>
      <div className="flex items-center gap-1 opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100">
        <IconButton label={`Edit ${note.title}`} onClick={() => onEdit(note)} className="size-8"><Edit3 className="size-3.5" /></IconButton>
        <IconButton label={`Delete ${note.title}`} onClick={() => onDelete(note)} className="size-8 hover:bg-rose-50 hover:text-rose-600"><Trash2 className="size-3.5" /></IconButton>
      </div>
    </footer>
  </article>
);

export default NoteCard;
