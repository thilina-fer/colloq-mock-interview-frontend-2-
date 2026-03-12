import { Plus } from "lucide-react";

import { COLORS } from "../../constants/colors";
import PendingSessions from "./PendingSessions";
import QuickStats from "./QuickStats";
import Reveal from "./Reveal";

const DashboardOverview = ({ pendingSessions, completedSessions }) => (
  <div className="space-y-8 md:space-y-12 animate-in fade-in duration-500">
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
      <Reveal animation="slide-left">
        <div>
          <div
            className="font-['DM_Mono'] text-[10px] font-black tracking-[0.3em] uppercase mb-1"
            style={{ color: COLORS.red }}
          >
            // Status: Overview
          </div>
          <h1 className="font-['Unbounded'] text-3xl sm:text-4xl font-black uppercase tracking-tight italic leading-none">
            The Pulse.
          </h1>
        </div>
      </Reveal>

      <button
        className="text-white py-4 px-8 md:px-10 font-['Unbounded'] text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#E63946] transition-all shadow-xl flex items-center gap-3"
        style={{ backgroundColor: COLORS.dark }}
      >
        Book A New Session <Plus size={16} />
      </button>
    </div>

    <QuickStats
      pendingCount={pendingSessions.length}
      completedCount={completedSessions.length}
    />

    <PendingSessions sessions={pendingSessions} />
  </div>
);

export default DashboardOverview;
