const Navbar = ({ setNewNote, setEditingNote }) => {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold tracking-tight text-indigo-600">
          InkFlow
        </h1>

        <button onClick={() => {setNewNote(true); setEditingNote(null)}} className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-indigo-700 active:scale-95">
          + New Note
        </button>
      </div>
    </header>
  );
};

export default Navbar;