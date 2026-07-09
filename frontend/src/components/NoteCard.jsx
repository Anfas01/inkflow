const NoteCard = ({ note, onOpen, onDelete, onEdit }) => {
  return (
    <div
      onClick={onOpen}
      className="flex cursor-pointer flex-col justify-between rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Title */}
      <div>
        <h2 className="mb-2 text-xl font-semibold text-gray-800">
          {note.title}
        </h2>

        {/* Content */}
        <p className="line-clamp-4 text-gray-600">
          {note.content}
        </p>
      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
        <span className="text-sm text-gray-500">
          {new Date(note.createdAt).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </span>

        <div className="flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onEdit(note);
            }}
            className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-600"
          >
            Edit
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(note._id);
            }}
            className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;