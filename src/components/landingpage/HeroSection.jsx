import { ArrowRight, Loader2 } from "lucide-react";
import { COLORS } from "../../constants/colors";
import Reveal from "./Reveal";

const HeroSection = ({ onGetStarted }) => (
  <section className="pt-48 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-8">
        <Reveal animation="fade-up" delay={100}>
          <div
            className="font-['DM_Mono'] text-xs font-bold tracking-[0.4em] uppercase mb-6 flex items-center gap-4"
            style={{ color: COLORS.red }}
          >
            <span
              className="w-8 h-px"
              style={{ backgroundColor: COLORS.red }}
            />
            Engineering Career Accelerator
          </div>
        </Reveal>

        <Reveal animation="fade-up" delay={300}>
          <h1 className="font-['Unbounded'] text-6xl md:text-[6.5rem] font-black leading-[0.82] tracking-tighter uppercase mb-8">
            Code is Half.
            <br />
            Talk is{" "}
            <span
              className="inline-block hover:skew-x-2 transition-transform"
              style={{ color: COLORS.red }}
            >
              Total.
            </span>
          </h1>
        </Reveal>

        <Reveal animation="fade-up" delay={500}>
          <p
            className="max-w-xl text-lg md:text-xl leading-relaxed mb-10 border-l-4 pl-8"
            style={{ color: COLORS.muted600, borderColor: COLORS.dark }}
          >
            ColloQ translates technical brilliance into interview-winning
            communication. We bridge the gap between "Knowing" and "Explaining".
          </p>
        </Reveal>

        <Reveal animation="fade-up" delay={700}>
          <div className="flex flex-col sm:flex-row gap-6">
            <button
              onClick={onGetStarted}
              className="px-12 py-6 font-['Unbounded'] text-xs font-black uppercase tracking-widest transition-all flex items-center justify-center gap-4 group shadow-2xl"
              style={{ backgroundColor: COLORS.dark, color: COLORS.softBg }}
            >
              Get Started
              <ArrowRight
                size={18}
                className="group-hover:translate-x-2 transition-transform"
              />
            </button>
            <button
              className="border-2 px-12 py-6 font-['Unbounded'] text-xs font-black uppercase tracking-widest transition-all duration-300"
              style={{ borderColor: COLORS.dark, color: COLORS.dark }}
            >
              Methodology
            </button>
          </div>
        </Reveal>
      </div>

      <div className="lg:col-span-4 hidden lg:block">
        <Reveal animation="zoom-in" delay={400} duration={1000}>
          <div
            className="relative border-4 p-6 bg-white transition-all duration-700 animate-float"
            style={{
              borderColor: COLORS.dark,
              boxShadow: "30px 30px 0px 0px rgba(230,57,70,1)",
            }}
          >
            <div className="p-8 border-2 border-dashed bg-neutral-50/50 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center gap-2 mb-10 relative z-10">
                <div className="w-3 h-3 rounded-full bg-red-400 animate-pulse" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="space-y-6 relative z-10">
                <div className="h-4 w-3/4 bg-neutral-200/50 rounded animate-pulse" />
                <div className="h-4 w-full bg-neutral-200/50 rounded animate-pulse delay-75" />
                <div className="h-4 w-5/6 bg-neutral-200/50 rounded animate-pulse delay-150" />
                <div
                  className="pt-8 h-32 w-full border-2 flex flex-col items-center justify-center gap-2 font-['DM_Mono'] text-[10px] uppercase bg-white"
                  style={{ borderColor: COLORS.dark }}
                >
                  <Loader2
                    size={18}
                    className="animate-spin"
                    style={{ color: COLORS.red }}
                  />
                  <span className="tracking-widest">
                    [ AI Analysis Active ]
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>

    <style>{`
      section button:first-child:hover {
        background: ${COLORS.red};
      }
      section button:nth-child(2):hover {
        background: ${COLORS.dark};
        color: white;
      }
      section .animate-float:hover {
        box-shadow: 10px 10px 0px 0px rgba(230,57,70,1);
      }
    `}</style>
  </section>
);

export default HeroSection;
