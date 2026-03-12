import { Sparkles } from 'lucide-react';
import Reveal from './Reveal';
import MyBookingsTable from './MyBookingsTable';

export default function MyBookingsView({ personalBookings, onNavigateToBook }) {
  return (
    <div className="space-y-8 sm:space-y-12 animate-in fade-in">
      <Reveal animation="slide-left">
        <div>
          <div className="font-['DM_Mono'] text-[#E63946] text-[10px] font-black tracking-[0.3em] uppercase mb-1">
            // Personal Growth Track
          </div>
          <h1 className="font-['Unbounded'] text-3xl sm:text-4xl font-black uppercase tracking-tight italic leading-none">
            Active Logs.
          </h1>
        </div>
      </Reveal>

      <div className="bg-white border-2 border-[#1A1A1A] overflow-hidden shadow-xl">
        <div className="px-6 sm:px-10 py-6 sm:py-8 border-b-2 border-[#1A1A1A] bg-[#F8F6F1]/50 flex justify-between items-center">
          <h3 className="font-['Unbounded'] text-sm font-black uppercase italic tracking-tight">
            Active Mentorship Contracts
          </h3>
          <Sparkles size={18} className="text-[#E63946]" />
        </div>
        <MyBookingsTable bookings={personalBookings} onNavigateToBook={onNavigateToBook} />
      </div>
    </div>
  );
}
