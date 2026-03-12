import Reveal from './Reveal';
import IncomingRequests from './IncomingRequests';
import ConfirmedSessions from './ConfirmedSessions';

export default function OverviewView({ pendingRequests, confirmedSessions, isProcessing, onAcceptBooking }) {
  return (
    <div className="space-y-12 animate-in fade-in">
      <Reveal animation="slide-left">
        <div>
          <div className="font-['DM_Mono'] text-[#E63946] text-[10px] font-black tracking-[0.3em] uppercase mb-1">
            // Commander Panel
          </div>
          <h1 className="font-['Unbounded'] text-3xl sm:text-4xl font-black uppercase tracking-tight italic leading-none">
            The command.
          </h1>
        </div>
      </Reveal>

      <IncomingRequests
        requests={pendingRequests}
        isProcessing={isProcessing}
        onAccept={onAcceptBooking}
      />

      <ConfirmedSessions sessions={confirmedSessions} />
    </div>
  );
}
