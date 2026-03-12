import { COLORS } from "../../constants/colors";
import PendingSessionCard from "./PendingSessionCard";

const PendingSessions = ({ sessions }) => (
  <div className="space-y-6">
    <div
      className="flex items-center justify-between border-b-2 pb-4"
      style={{ borderColor: COLORS.dark }}
    >
      <h3 className="font-['Unbounded'] text-sm font-black uppercase italic tracking-tight">
        Active Queues
      </h3>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {sessions.map((session) => (
        <PendingSessionCard key={session.id} session={session} />
      ))}
    </div>
  </div>
);

export default PendingSessions;
