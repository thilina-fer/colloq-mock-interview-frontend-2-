import { COLORS } from "../../constants/colors";

const SidebarNavItem = ({
  item,
  icon: Icon,
  isActive,
  isSidebarOpen,
  onClick,
}) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-4 py-3.5 px-4 transition-all relative group overflow-hidden ${
      isActive
        ? "text-white shadow-lg"
        : "hover:text-[#F5F3EE] hover:bg-white/5"
    }`}
    style={{
      backgroundColor: isActive ? COLORS.red : "transparent",
      color: isActive ? COLORS.white : COLORS.sidebarTextDim,
    }}
  >
    <Icon size={20} className="shrink-0" />
    {isSidebarOpen && (
      <span className="font-['DM_Mono'] text-[11px] font-bold uppercase tracking-[0.2em] whitespace-nowrap">
        {item.label}
      </span>
    )}
  </button>
);

export default SidebarNavItem;
