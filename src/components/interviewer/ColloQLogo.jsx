export default function ColloQLogo({ expanded }) {
  return (
    <div className="p-6 sm:p-8 mb-6 sm:mb-8 flex items-center gap-4">
      <div className="w-8 h-8 border-2 border-[#F5F3EE] flex items-center justify-center shrink-0">
        <div className="w-3 h-3 bg-[#E63946]" />
      </div>
      {expanded && (
        <span className="font-['Unbounded'] text-lg font-bold tracking-tight uppercase animate-in fade-in">
          ColloQ
        </span>
      )}
    </div>
  );
}
