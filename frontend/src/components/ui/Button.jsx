const variants = {
  primary: "bg-blue-600 text-white shadow-sm hover:bg-blue-700 disabled:bg-blue-300",
  secondary: "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:text-slate-400",
  danger: "bg-rose-600 text-white hover:bg-rose-700 disabled:bg-rose-300",
  ghost: "text-slate-600 hover:bg-slate-100 hover:text-slate-950 disabled:text-slate-400",
};

const Button = ({ className = "", variant = "primary", type = "button", children, ...props }) => (
  <button
    type={type}
    className={`focus-ring inline-flex items-center justify-center gap-2 rounded-md px-3.5 py-2 text-sm font-medium transition-colors disabled:opacity-70 ${variants[variant]} ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
