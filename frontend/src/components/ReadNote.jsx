const ReadNote = ({ note, onClose, onDelete, onUpdate }) => {
  if (!note) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-[90vh] w-full max-w-3xl flex-col rounded-2xl bg-white shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b px-6 py-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {note.title}
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {new Date(note.createdAt).toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-red-500"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <p className="whitespace-pre-wrap break-words text-gray-700">
            {note.content}
          </p>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 border-t px-6 py-4">
          <button
            onClick={() => onDelete(note._id)}
            className="rounded-lg bg-red-600 px-5 py-2 font-medium text-white transition hover:bg-red-700"
          >
            Delete
          </button>

          <button
            onClick={() => onUpdate(note)}
            className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700"
          >
            Update
          </button>

          <button
            onClick={onClose}
            className="rounded-lg border border-gray-300 px-5 py-2 font-medium text-gray-700 transition hover:bg-gray-100"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadNote;