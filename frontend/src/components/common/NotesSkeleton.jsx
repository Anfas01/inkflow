const NotesSkeleton = () => (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
    {Array.from({ length: 6 }, (_, index) => (
      <div key={index} className="h-56 animate-pulse rounded-lg border border-slate-200 bg-white p-5">
        <div className="h-5 w-2/3 rounded bg-slate-200" />
        <div className="mt-5 h-3 rounded bg-slate-100" />
        <div className="mt-2 h-3 w-5/6 rounded bg-slate-100" />
        <div className="mt-2 h-3 w-3/5 rounded bg-slate-100" />
        <div className="mt-12 h-3 w-24 rounded bg-slate-100" />
      </div>
    ))}
  </div>
);

export default NotesSkeleton;
