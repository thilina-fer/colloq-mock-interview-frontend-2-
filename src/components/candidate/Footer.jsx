import { COLORS } from "../../constants/colors";

const Footer = () => (
  <footer
    className="mt-auto px-4 sm:px-6 lg:px-12 py-6 md:py-8 border-t flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-[10px] font-['DM_Mono'] text-neutral-400 uppercase tracking-widest font-bold"
    style={{ borderColor: COLORS.borderLight }}
  >
    <div>© 2024 ColloQ Technical Systems // Protocol Authorized</div>
    <div className="flex flex-wrap gap-5 md:gap-8 italic underline decoration-[#E63946] decoration-2 underline-offset-4">
      <a href="#" className="hover:text-[#E63946]">
        Status: Online
      </a>
      <a href="#" className="hover:text-[#E63946]">
        Encryption: RSA-4096
      </a>
    </div>
  </footer>
);

export default Footer;
