export default function GlobalStyles() {
  return (
    <style>{`
      *::-webkit-scrollbar { width: 6px; }
      *::-webkit-scrollbar-track { background: #F5F3EE; }
      *::-webkit-scrollbar-thumb { background: #1A1A1A; }
      *::-webkit-scrollbar-thumb:hover { background: #E63946; }
      .animate-in { animation: fadeIn 0.4s ease-out forwards; }
      @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
    `}</style>
  );
}
