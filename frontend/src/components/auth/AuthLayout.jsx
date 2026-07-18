import { FileText } from "lucide-react";
import { Link } from "react-router-dom";

const AuthLayout = ({ title, subtitle, children, footer }) => (
  <main className="grid min-h-screen bg-slate-50 lg:grid-cols-[1.05fr_0.95fr]">
    <section className="hidden bg-slate-950 p-10 text-white lg:flex lg:flex-col lg:justify-between">
      <Link to="/login" className="focus-ring flex w-fit items-center gap-3 rounded-md"><span className="flex size-9 items-center justify-center rounded-md bg-blue-600"><FileText className="size-4" /></span><span className="font-semibold">InkFlow</span></Link>
      <div className="max-w-md"><p className="text-sm font-medium text-blue-300">A focused note workspace</p><h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight">Make room for your best thinking.</h1><p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">Capture ideas, document decisions, and return to what matters without the clutter.</p></div>
      <p className="text-sm text-slate-500">Private by design. Simple by default.</p>
    </section>
    <section className="flex min-h-screen items-center justify-center px-4 py-10 sm:px-6">
      <div className="w-full max-w-sm"><Link to="/login" className="focus-ring mb-10 flex w-fit items-center gap-3 rounded-md lg:hidden"><span className="flex size-9 items-center justify-center rounded-md bg-blue-600 text-white"><FileText className="size-4" /></span><span className="font-semibold text-slate-950">InkFlow</span></Link><header><h1 className="text-2xl font-semibold tracking-tight text-slate-950">{title}</h1><p className="mt-2 text-sm leading-6 text-slate-500">{subtitle}</p></header><div className="mt-8">{children}</div><p className="mt-7 text-center text-sm text-slate-500">{footer}</p></div>
    </section>
  </main>
);

export default AuthLayout;
