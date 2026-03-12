import { COLORS } from "../../constants/colors";
import ColloQLogo from "../ColloQLogo";
import Reveal from "./Reveal";

const FooterCTA = ({ onGetStarted }) => (
  <footer
    className="py-20 sm:py-28 md:py-40 px-5 sm:px-6 md:px-12 max-w-7xl mx-auto text-center"
    style={{ borderTop: `1px solid ${COLORS.dark10}` }}
  >
    <Reveal animation="fade-up">
      <h2 className="font-['Unbounded'] text-4xl sm:text-5xl md:text-8xl font-black uppercase mb-10 md:mb-16 italic tracking-tighter leading-none">
        Speak Your <span style={{ color: COLORS.red }}>Worth.</span>
      </h2>
    </Reveal>

    <Reveal animation="fade-up" delay={200}>
      <button
        onClick={onGetStarted}
        className="px-10 sm:px-16 md:px-20 py-5 sm:py-6 md:py-8 font-['Unbounded'] text-xs sm:text-sm font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] hover:scale-105 active:scale-95 transition-all duration-300"
        style={{
          backgroundColor: COLORS.dark,
          color: COLORS.softBg,
          boxShadow: "0px 20px 50px rgba(230,57,70,0.3)",
        }}
      >
        Start Your Session
      </button>
    </Reveal>

    <div
      className="mt-16 sm:mt-24 md:mt-48 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16 pt-10 md:pt-16"
      style={{ borderTop: `1px solid ${COLORS.dark05}` }}
    >
      <ColloQLogo variant="dark" size="md" />

      <div
        className="font-['DM_Mono'] text-[10px] uppercase tracking-widest max-w-sm leading-relaxed"
        style={{ color: COLORS.muted400 }}
      >
        © 2024 ColloQ Technical Systems inc.
        <br />
        Designed in Switzerland • Optimized for the Engineering Community
      </div>

      <div
        className="flex gap-10 font-['DM_Mono'] text-[10px] uppercase tracking-widest font-bold"
        style={{ color: COLORS.dark }}
      >
        <a href="#" className="transition-colors">
          Privacy
        </a>
        <a href="#" className="transition-colors">
          Terms
        </a>
        <a href="#" className="transition-colors">
          X / Twitter
        </a>
      </div>
    </div>

    <style>{`
      footer > div button:hover {
        background: ${COLORS.red};
      }
      footer a:hover {
        color: ${COLORS.red};
      }
    `}</style>
  </footer>
);

export default FooterCTA;
