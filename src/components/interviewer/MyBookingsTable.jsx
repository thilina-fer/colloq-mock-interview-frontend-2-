export default function MyBookingsTable({ bookings, onNavigateToBook }) {
  if (bookings.length === 0) {
    return (
      <div className="p-12 sm:p-20 text-center space-y-4">
        <p className="font-['DM_Mono'] text-xs font-bold text-neutral-400 uppercase tracking-[0.2em]">
          No records found.
        </p>
        <button
          onClick={onNavigateToBook}
          className="text-[#E63946] font-['Unbounded'] text-[10px] font-black uppercase underline underline-offset-8"
        >
          Book First Session
        </button>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[580px]">
        <thead className="bg-neutral-50 text-left font-['DM_Mono'] text-[10px] uppercase font-black tracking-widest text-neutral-400">
          <tr className="border-b">
            <th className="px-6 sm:px-10 py-5">Mentor</th>
            <th className="px-6 sm:px-10 py-5">Type</th>
            <th className="px-6 sm:px-10 py-5">Status</th>
            <th className="px-6 sm:px-10 py-5 text-right">Value</th>
          </tr>
        </thead>
        <tbody className="divide-y font-['DM_Sans']">
          {bookings.map((pb) => (
            <tr key={pb.id} className="hover:bg-neutral-50 transition-colors">
              <td className="px-6 sm:px-10 py-6 sm:py-8">
                <div className="font-['Unbounded'] text-xs font-black uppercase italic">
                  {pb.mentorName}
                </div>
              </td>
              <td className="px-6 sm:px-10 py-6 sm:py-8 font-['DM_Mono'] text-[11px] font-bold uppercase text-neutral-400 tracking-tighter">
                {pb.type}
              </td>
              <td className="px-6 sm:px-10 py-6 sm:py-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <span className="font-['DM_Mono'] text-[10px] font-black uppercase">
                    {pb.status}
                  </span>
                </div>
              </td>
              <td className="px-6 sm:px-10 py-6 sm:py-8 text-right font-['Unbounded'] text-sm font-black italic tracking-tighter">
                ${pb.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
