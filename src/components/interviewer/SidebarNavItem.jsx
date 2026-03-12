export default function SidebarNavItem({
  item,
  isActive,
  onClick,
  isExpanded,
}) {
  return (
    <button
      onClick={() => onClick(item.id)}
      className={`w-full flex items-center gap-4 py-3.5 px-4 transition-all relative group ${
        isActive
          ? "bg-[#E63946] text-white shadow-lg"
          : "text-[#F5F3EE]/40 hover:text-[#F5F3EE] hover:bg-white/5"
      }`}
    >
      <item.icon size={20} className="shrink-0" />
      {isExpanded && (
        <span className="font-['DM_Mono'] text-[11px] font-bold uppercase tracking-[0.2em]">
          {item.label}
        </span>
      )}
    </button>
  );
}
