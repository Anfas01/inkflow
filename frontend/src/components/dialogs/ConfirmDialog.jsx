import { AlertTriangle, X } from "lucide-react";
import { useEffect } from "react";
import Button from "../ui/Button";
import IconButton from "../ui/IconButton";

const ConfirmDialog = ({ noteTitle, isDeleting, onCancel, onConfirm }) => {
  useEffect(() => {
    const handleKeyDown = (event) => { if (event.key === "Escape" && !isDeleting) onCancel(); };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isDeleting, onCancel]);

  return (
    <div role="presentation" onMouseDown={isDeleting ? undefined : onCancel} className="animate-fade-in fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/40 p-4">
      <section role="alertdialog" aria-modal="true" aria-labelledby="delete-title" onMouseDown={(event) => event.stopPropagation()} className="animate-slide-up w-full max-w-md rounded-lg bg-white p-5 shadow-xl">
        <header className="flex items-start justify-between gap-4"><div className="flex gap-3"><div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-rose-50 text-rose-600"><AlertTriangle className="size-4" /></div><div><h2 id="delete-title" className="font-semibold text-slate-950">Delete note?</h2><p className="mt-1 text-sm leading-6 text-slate-500">“{noteTitle}” will be permanently removed. This cannot be undone.</p></div></div><IconButton label="Close confirmation" onClick={onCancel} disabled={isDeleting}><X className="size-4" /></IconButton></header>
        <footer className="mt-6 flex justify-end gap-2"><Button variant="secondary" onClick={onCancel} disabled={isDeleting}>Cancel</Button><Button variant="danger" onClick={onConfirm} disabled={isDeleting}>{isDeleting ? "Deleting" : "Delete note"}</Button></footer>
      </section>
    </div>
  );
};

export default ConfirmDialog;
