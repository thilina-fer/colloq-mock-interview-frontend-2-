import { Menu } from "lucide-react";
import UserAvatar from "./UserAvatar";

export default function Header({ userProfile, onToggle }) {
  return (
    <header className="h-auto min-h-[5rem] px-4 sm:px-8 md:px-12 py-4 bg-white border-b border-[#E8E5DF] flex items-center justify-between sticky top-0 z-20 gap-4">
      <div className="flex items-center gap-3 sm:gap-6 min-w-0">
        <button
          onClick={onToggle}
          className="p-2 border-2 border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all shrink-0"
        >
          <Menu size={18} />
        </button>
        <div className="font-['DM_Mono'] text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 pl-3 sm:pl-6 border-l border-neutral-200 hidden sm:block">
          <span className="text-[#E63946] flex items-center gap-2 underline decoration-2 underline-offset-4 decoration-red-500/20">
            <div className="w-2 h-2 rounded-full bg-[#E63946] animate-pulse" />
            System Node: Active
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-6 shrink-0">
        <div className="flex flex-col items-end">
          <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest leading-none mb-1 hidden sm:block">
            Treasury Balance
          </p>
          <p className="text-[12px] sm:text-[14px] font-black font-['Unbounded'] tracking-tighter text-[#E63946] leading-none">
            ${userProfile.walletBalance.toFixed(2)}
          </p>
        </div>
        <UserAvatar name={userProfile.name} size="sm" />
      </div>
    </header>
  );
}
