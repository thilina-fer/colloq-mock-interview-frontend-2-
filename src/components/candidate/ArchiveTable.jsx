import { Activity, ExternalLink, Shield } from "lucide-react";

import { COLORS } from "../../constants/colors";

const ArchiveTable = ({ sessions }) => (
  <div className="overflow-x-auto">
    <table className="w-full min-w-[700px]">
      <thead>
        <tr className="border-b border-neutral-100 text-left bg-neutral-50/50 text-neutral-400 font-['DM_Mono'] text-[10px] uppercase font-black">
          <th className="px-6 md:px-8 py-4 tracking-widest">Protocol Type</th>
          <th className="px-6 md:px-8 py-4 tracking-widest">Mentor</th>
          <th className="px-6 md:px-8 py-4 tracking-widest text-center">
            AI Score
          </th>
          <th className="px-6 md:px-8 py-4 tracking-widest text-right">
            Verification
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-neutral-50 font-['DM_Sans']">
        {sessions.map((session) => (
          <tr
            key={session.id}
            className="group hover:bg-[#F5F3EE] transition-all cursor-pointer"
          >
            <td className="px-6 md:px-8 py-6">
              <div className="font-['Unbounded'] text-[11px] font-black uppercase">
                {session.type}
              </div>
              <div className="font-['DM_Mono'] text-[9px] text-neutral-400 font-bold uppercase">
                {session.date}
              </div>
            </td>

            <td className="px-6 md:px-8 py-6 font-['DM_Mono'] text-[11px] font-bold text-neutral-500 italic uppercase tracking-tighter">
              {session.mentor}
            </td>

            <td className="px-6 md:px-8 py-6 text-center">
              <span
                className={`font-['Unbounded'] text-sm font-black ${
                  session.score >= 80 ? "text-green-600" : "text-[#E63946]"
                }`}
              >
                {session.score}%
              </span>
            </td>

            <td className="px-6 md:px-8 py-6 text-right">
              <div className="flex items-center justify-end gap-3 font-['DM_Mono'] text-[10px] font-black uppercase tracking-widest">
                {session.result === "Passed" ? (
                  <Shield size={14} className="text-green-600" />
                ) : (
                  <Activity size={14} className="text-yellow-500" />
                )}
                <span
                  className={
                    session.result === "Passed"
                      ? "text-green-600"
                      : "text-yellow-600"
                  }
                >
                  {session.result}
                </span>
                <ExternalLink
                  size={12}
                  className="text-neutral-300 group-hover:text-[#1A1A1A]"
                  style={{ color: COLORS.neutral300 }}
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ArchiveTable;
