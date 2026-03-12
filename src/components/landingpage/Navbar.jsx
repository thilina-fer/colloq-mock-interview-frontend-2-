import { Menu } from "lucide-react";
import { COLORS } from "../../constants/colors";
import ColloQLogo from "./ColloQLogo";

const Navbar = ({ scrolled, onGetStarted }) => (
  <nav
    className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
      scrolled
        ? "bg-white/90 backdrop-blur-md py-4"
        : "bg-transparent py-8 border-transparent"
    }`}
    style={{ borderColor: scrolled ? COLORS.dark10 : "transparent" }}
  >
    <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
      <ColloQLogo
        variant="dark"
        size="md"
        interactive
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />

      <div className="hidden md:flex items-center gap-12 font-['DM_Mono'] text-xs font-bold uppercase tracking-widest">
        <a
          href="#process"
          className="transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] hover:after:w-full after:transition-all"
          style={{ color: COLORS.dark }}
        >
          Process
        </a>
        <a
          href="#pricing"
          className="transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] hover:after:w-full after:transition-all"
          style={{ color: COLORS.dark }}
        >
          Pricing
        </a>
        <button
          onClick={onGetStarted}
          className="px-8 py-3 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 shadow-lg"
          style={{ backgroundColor: COLORS.dark, color: COLORS.softBg }}
        >
          Sign In
        </button>
      </div>

      <Menu className="md:hidden" style={{ color: COLORS.dark }} />
    </div>

    <style>{`
      nav a:hover {
        color: ${COLORS.red};
      }
      nav a::after {
        background: ${COLORS.red};
      }
      nav button:hover {
        background: ${COLORS.red};
        box-shadow: 0 10px 24px rgba(230, 57, 70, 0.2);
      }
    `}</style>
  </nav>
);

export default Navbar;
