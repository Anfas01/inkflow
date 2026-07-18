import { FileText, LogOut, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./ui/Button";
import IconButton from "./ui/IconButton";

const Navbar = ({ onCreate }) => {
  const navigate = useNavigate();
  const signOut = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex size-8 items-center justify-center rounded-md bg-blue-600 text-white"><FileText className="size-4" /></div>
          <span className="text-base font-semibold tracking-tight text-slate-950">InkFlow</span>
          <span className="hidden border-l border-slate-200 pl-3 text-sm text-slate-500 sm:inline">Notes</span>
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={onCreate} className="hidden sm:inline-flex"><Plus className="size-4" />New note</Button>
          <span className="hidden h-5 border-l border-slate-200 sm:block" />
          <IconButton label="Sign out" onClick={signOut}><LogOut className="size-4" /></IconButton>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
