import { Bell, Menu } from "lucide-react";

import { COLORS } from "../../constants/colors";
import UserAvatar from "./UserAvatar";

const Header = ({ isSidebarOpen, setSidebarOpen, userProfile }) => (
  <header
    className="h-20 md:h-24 px-4 sm:px-6 lg:px-12 bg-white border-b flex items-center justify-between sticky top-0 z-20"
    style={{ borderColor: COLORS.borderLight }}
  >
    <div className="flex items-center gap-3 md:gap-6">
      <button
        onClick={() => setSidebarOpen(!isSidebarOpen)}
        className="p-2 border-2 hover:bg-[#1A1A1A] hover:text-white transition-all"
        style={{ borderColor: COLORS.dark }}
      >
        <Menu size={18} />
      </button>

      <div className="hidden sm:flex items-center gap-4 font-['DM_Mono'] text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 border-l border-neutral-200 pl-4 md:pl-6">
        <span className="text-green-600 flex items-center gap-2 underline decoration-2 underline-offset-4 decoration-green-500/30">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Live System
        </span>
      </div>
    </div>

    <div className="flex items-center gap-3 sm:gap-6 md:gap-8">
      <button className="relative p-2 text-neutral-400 hover:text-[#1A1A1A] transition-colors">
        <Bell size={20} />
        <span
          className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full ring-2 ring-white"
          style={{ backgroundColor: COLORS.red }}
        />
      </button>

      <div className="flex items-center gap-3 sm:gap-4 sm:pl-6 md:pl-8 border-l border-neutral-200">
        <div className="text-right hidden md:block">
          <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
            {userProfile.role}
          </p>
          <p className="text-[12px] font-black uppercase tracking-tighter">
            {userProfile.name}
          </p>
        </div>
        <UserAvatar initials={userProfile.initials} />
      </div>
    </div>
  </header>
);

export default Header;
