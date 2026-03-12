import { Shield } from "lucide-react";

export default function ConfirmedSessions({ sessions }) {
  if (sessions.length === 0) return null;

  return (
    <div className="space-y-6">
      <h3 className="font-['Unbounded'] text-sm font-black uppercase italic tracking-tight border-b-2 border-[#1A1A1A] pb-4">
        Verified Operations
      </h3>
      {sessions.map((session) => (
        <div
          key={session.id}
          className="bg-white border-2 border-[#E63946] p-6 sm:p-8 shadow-[12px_12px_0px_0px_rgba(230,57,70,0.1)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-in zoom-in-95"
        >
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="p-3 sm:p-4 bg-green-50 text-green-600 border-2 border-green-500 shrink-0">
              <Shield size={24} />
            </div>
            <div>
              <h4 className="font-['Unbounded'] text-base font-black uppercase italic">
                {session.candidate}
              </h4>
              <p className="font-['DM_Mono'] text-[10px] text-neutral-400 font-bold uppercase">
                {session.date}
              </p>
            </div>
          </div>
          <button className="bg-[#1A1A1A] text-white py-4 px-6 sm:px-8 font-['Unbounded'] text-[9px] font-black uppercase tracking-widest hover:bg-[#E63946] transition-all whitespace-nowrap">
            Enter Room
          </button>
        </div>
      ))}
    </div>
  );
}
