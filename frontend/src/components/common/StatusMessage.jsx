import { AlertCircle, CheckCircle2 } from "lucide-react";

const StatusMessage = ({ error, success }) => {
  const message = error || success;
  if (!message) return null;

  const isError = Boolean(error);
  return (
    <div role={isError ? "alert" : "status"} className={`flex items-start gap-2 rounded-md border px-3 py-2.5 text-sm ${isError ? "border-rose-200 bg-rose-50 text-rose-700" : "border-emerald-200 bg-emerald-50 text-emerald-700"}`}>
      {isError ? <AlertCircle className="mt-0.5 size-4 shrink-0" /> : <CheckCircle2 className="mt-0.5 size-4 shrink-0" />}
      <span>{message}</span>
    </div>
  );
};

export default StatusMessage;
