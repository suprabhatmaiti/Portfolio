export default function MenuToggle({ isOpen }) {
  return (
    <div className="w-8 h-8 flex flex-col justify-center items-center gap-1.5">
      {/* Top line */}
      <span
        className={`h-0.5 w-6 bg-current rounded transition-all duration-300
          ${isOpen ? "rotate-45 translate-y-2" : ""}`}
      />

      {/* Middle line */}
      <span
        className={`h-0.5 w-6 bg-current rounded transition-all duration-300
          ${isOpen ? "opacity-0" : ""}`}
      />

      {/* Bottom line */}
      <span
        className={`h-0.5 w-6 bg-current rounded transition-all duration-300
          ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
      />
    </div>
  );
}
