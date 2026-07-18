const IconButton = ({ label, className = "", children, ...props }) => (
  <button
    type="button"
    aria-label={label}
    title={label}
    className={`focus-ring inline-flex size-9 items-center justify-center rounded-md text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-950 disabled:opacity-50 ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default IconButton;
