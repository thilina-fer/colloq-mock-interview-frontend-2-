import { Menu, X } from "lucide-react";
import { useState } from "react";
import { COLORS } from "../../constants/colors";
import ColloQLogo from "../ColloQLogo";

const Navbar = ({ scrolled, onGetStarted }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const handleNav = (href) => {
    closeMenu();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled
          ? "bg-white/95 backdrop-blur-md py-3"
          : "bg-transparent py-6 md:py-8 border-transparent"
      }`}
      style={{ borderColor: scrolled ? COLORS.dark10 : "transparent" }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 flex justify-between items-center">
        <ColloQLogo
          variant="dark"
          size="md"
          interactive
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />

        {/* Desktop nav */}
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

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X size={22} style={{ color: COLORS.dark }} />
          ) : (
            <Menu size={22} style={{ color: COLORS.dark }} />
          )}
        </button>
      </div>

      {/* Mobile menu drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-64" : "max-h-0"
        }`}
        style={{
          backgroundColor: COLORS.white,
          borderTop: menuOpen ? `1px solid ${COLORS.dark10}` : "none",
        }}
      >
        <div className="px-5 py-6 flex flex-col gap-5 font-['DM_Mono'] text-xs font-bold uppercase tracking-widest">
          <button
            onClick={() => handleNav("#process")}
            className="text-left transition-colors hover:text-red-500 py-2 border-b"
            style={{ color: COLORS.dark, borderColor: COLORS.dark10 }}
          >
            Process
          </button>
          <button
            onClick={() => handleNav("#pricing")}
            className="text-left transition-colors hover:text-red-500 py-2 border-b"
            style={{ color: COLORS.dark, borderColor: COLORS.dark10 }}
          >
            Pricing
          </button>
          <button
            onClick={() => {
              closeMenu();
              onGetStarted();
            }}
            className="py-3 px-6 text-center transition-all duration-300 shadow-md active:scale-95"
            style={{ backgroundColor: COLORS.dark, color: COLORS.softBg }}
          >
            Sign In
          </button>
        </div>
      </div>

      <style>{`
        nav a:hover {
          color: ${COLORS.red};
        }
        nav a::after {
          background: ${COLORS.red};
        }
        .hidden.md\\:flex button:hover {
          background: ${COLORS.red};
          box-shadow: 0 10px 24px rgba(230, 57, 70, 0.2);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
