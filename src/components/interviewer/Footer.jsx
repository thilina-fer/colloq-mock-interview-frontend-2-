export default function Footer() {
  return (
    <footer className="mt-auto px-4 sm:px-12 py-6 sm:py-8 border-t border-[#E8E5DF] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[10px] font-['DM_Mono'] text-neutral-400 uppercase tracking-widest font-bold">
      <div>© 2024 ColloQ Technical Systems // Operations Encrypted</div>
      <div className="flex gap-4 sm:gap-8 italic underline decoration-[#E63946] decoration-2 underline-offset-8">
        <a href="#" className="hover:text-[#1A1A1A]">
          Security_Node
        </a>
        <a href="#" className="hover:text-[#1A1A1A]">
          Terminal_Archive
        </a>
      </div>
    </footer>
  );
}
