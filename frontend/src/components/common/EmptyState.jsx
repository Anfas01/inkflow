import { FileText, Plus } from "lucide-react";
import Button from "../ui/Button";

const EmptyState = ({ onCreate }) => (
  <section className="flex min-h-80 flex-col items-center justify-center border border-dashed border-slate-300 bg-white px-6 text-center">
    <div className="mb-4 flex size-11 items-center justify-center rounded-md bg-blue-50 text-blue-600"><FileText className="size-5" /></div>
    <h2 className="text-base font-semibold text-slate-950">Your workspace is clear</h2>
    <p className="mt-1 max-w-sm text-sm leading-6 text-slate-500">Create your first note to keep ideas, decisions, and details in one focused place.</p>
    <Button className="mt-5" onClick={onCreate}><Plus className="size-4" />Create note</Button>
  </section>
);

export default EmptyState;
