import { LogOut } from 'lucide-react';
import ColloQLogo from './ColloQLogo';
import SidebarNavSection from './SidebarNavSection';
import { SIDEBAR_SECTIONS } from '../../constants/sidebarSections';

export default function Sidebar({ isSidebarOpen, currentView, onViewChange, onToggle }) {
  return (
    <>
      {/* Mobile backdrop overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/50 md:hidden"
          onClick={onToggle}
        />
      )}

      <aside
        className={`
          fixed inset-y-0 left-0 z-30
          md:relative md:z-auto md:inset-auto
          bg-[#1A1A1A] text-[#F5F3EE] flex flex-col
          transition-all duration-500
          border-r border-[#1A1A1A]
          ${isSidebarOpen
            ? 'translate-x-0 w-[280px]'
            : '-translate-x-full md:translate-x-0 md:w-[80px]'
          }
        `}
      >
        <ColloQLogo expanded={isSidebarOpen} />

        <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
          {SIDEBAR_SECTIONS.map((section) => (
            <SidebarNavSection
              key={section.id}
              section={section}
              currentView={currentView}
              onViewChange={onViewChange}
              isExpanded={isSidebarOpen}
            />
          ))}
        </nav>

        <div className="p-4 border-t border-[#F5F3EE]/10">
          <button className="w-full flex items-center gap-4 py-3.5 px-4 text-[#F5F3EE]/40 hover:text-[#E63946] transition-all group">
            <LogOut size={20} />
            {isSidebarOpen && (
              <span className="font-['DM_Mono'] text-[11px] font-bold uppercase tracking-widest">
                Logout
              </span>
            )}
          </button>
        </div>
      </aside>
    </>
  );
}
