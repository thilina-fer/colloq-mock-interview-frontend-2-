import { Calendar } from "lucide-react";

import { COLORS } from "../../constants/colors";

const PendingSessionCard = ({ session }) => (
  <div
    className="bg-white border-2 p-6 group hover:shadow-xl transition-all"
    style={{ borderColor: COLORS.dark }}
  >
    <div className="flex justify-between items-start mb-6">
      <Calendar size={20} style={{ color: COLORS.dark }} />
      <span className="px-3 py-1 bg-yellow-50 text-yellow-600 font-['DM_Mono'] text-[9px] font-black uppercase border border-yellow-200">
        {session.status}
      </span>
    </div>

    <div className="font-['Unbounded'] text-[11px] font-black uppercase mb-1">
      {session.type}
    </div>
    <div className="font-['DM_Mono'] text-[10px] text-neutral-400 font-bold uppercase tracking-widest mb-4">
      with {session.mentor}
    </div>

    <div className="flex items-center justify-between pt-4 border-t border-dashed border-neutral-100">
      <div className="text-neutral-500 font-['DM_Mono'] text-[10px] font-black uppercase">
        {session.date}
      </div>
      <button
        className="text-[10px] font-black uppercase hover:underline"
        style={{ color: COLORS.red }}
      >
        Details
      </button>
    </div>
  </div>
);

export default PendingSessionCard;
