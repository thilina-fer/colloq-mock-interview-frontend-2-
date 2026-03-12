import { BarChart3, Layout, LogOut, Settings, User } from "lucide-react";

import { COLORS } from "../../constants/colors";
import { NAVIGATION_ITEMS } from "../../constants/navigationItems";
import ColloQLogo from "../ColloQLogo";
import SidebarNavItem from "./SidebarNavItem";

const ICON_MAP = {
  Layout,
  User,
  BarChart3,
  Settings,
};

const Sidebar = ({ isSidebarOpen, currentView, setCurrentView }) => (
  <aside
    className={`bg-[#1A1A1A] text-[#F5F3EE] flex flex-col transition-all duration-500 border-r border-[#1A1A1A] ${
      isSidebarOpen ? "w-[280px]" : "w-[80px]"
    }`}
  >
    <ColloQLogo
      variant="light"
      expanded={isSidebarOpen}
      className="p-8 mb-8"
      gapClassName="gap-4"
      boxClassName="shrink-0"
      textClassName="text-lg animate-in fade-in duration-500"
    />

    <nav className="flex-1 px-4 space-y-2">
      {NAVIGATION_ITEMS.map((item) => (
        <SidebarNavItem
          key={item.id}
          item={item}
          icon={ICON_MAP[item.icon]}
          isActive={currentView === item.id}
          isSidebarOpen={isSidebarOpen}
          onClick={() => setCurrentView(item.id)}
        />
      ))}
    </nav>

    <div className="p-4 border-t" style={{ borderColor: COLORS.soft10 }}>
      <button
        className="w-full flex items-center gap-4 py-3.5 px-4 transition-all group"
        style={{ color: COLORS.sidebarTextDim }}
      >
        <LogOut size={20} className="group-hover:text-[#E63946]" />
        {isSidebarOpen && (
          <span className="font-['DM_Mono'] text-[11px] font-bold uppercase tracking-widest group-hover:text-[#E63946]">
            Logout
          </span>
        )}
      </button>
    </div>
  </aside>
);

export default Sidebar;
