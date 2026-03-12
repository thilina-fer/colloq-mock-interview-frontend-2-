import { COLORS } from "../../constants/colors";
import ArchiveTable from "./ArchiveTable";

const CompletedArchive = ({ sessions }) => (
  <div className="space-y-8 md:space-y-10 animate-in fade-in duration-500">
    <h1 className="font-['Unbounded'] text-3xl md:text-4xl font-black uppercase tracking-tight italic">
      Termination Archive.
    </h1>

    <div
      className="bg-white border-2 shadow-xl overflow-hidden"
      style={{ borderColor: COLORS.dark }}
    >
      <div
        className="px-5 md:px-8 py-6 border-b-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        style={{ borderColor: COLORS.dark, backgroundColor: COLORS.panelSoft }}
      >
        <h3 className="font-['Unbounded'] text-sm font-black uppercase italic tracking-tight">
          Verified Logs // Total {sessions.length}
        </h3>
        <div className="flex gap-4 font-['DM_Mono'] text-[10px] font-black uppercase">
          <button className="underline" style={{ color: COLORS.red }}>
            Export Logs
          </button>
        </div>
      </div>
      <ArchiveTable sessions={sessions} />
    </div>
  </div>
);

export default CompletedArchive;
