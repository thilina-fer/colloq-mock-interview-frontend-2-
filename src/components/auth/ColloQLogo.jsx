const ColloQLogo = ({ className = "" }) => (
  <div className={`flex items-center gap-3 ${className}`.trim()}>
    <div className="w-8 h-8 border-2 border-[#F5F3EE] flex items-center justify-center">
      <div className="w-3 h-3 bg-[#E63946]" />
    </div>
    <span className="font-['Unbounded'] text-sm font-bold tracking-[0.2em] uppercase">
      ColloQ
    </span>
  </div>
);

export default ColloQLogo;
