import { COLORS } from "../../constants/colors";
import Reveal from "./Reveal";

const PROCESS_ITEMS = [
  {
    step: "01",
    title: "Contextualize",
    desc: "Input your target role and senior level. Our AI calibrates to specific patterns found in modern system design and behavioral loops.",
  },
  {
    step: "02",
    title: "Articulate",
    desc: "Conduct a high-pressure mock session via voice. Explain complex state management or architecture on the fly.",
  },
  {
    step: "03",
    title: "Calibrate",
    desc: "Receive a technical score, sentiment analysis, and structural suggestions to refine your storytelling.",
  },
];

const ProcessSection = () => (
  <section
    id="process"
    className="py-16 sm:py-24 md:py-40 px-5 sm:px-6 md:px-12 max-w-7xl mx-auto"
  >
    <Reveal animation="fade-up">
      <div className="text-center mb-12 sm:mb-20 md:mb-32">
        <h2 className="font-['Unbounded'] text-3xl sm:text-4xl md:text-6xl font-black uppercase mb-6 italic tracking-tight">
          The Workflow
        </h2>
        <div
          className="h-2 w-32 mx-auto transition-all hover:w-64 duration-500"
          style={{ backgroundColor: COLORS.red }}
        />
      </div>
    </Reveal>

    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 relative">
      <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-neutral-200 -z-10" />
      {PROCESS_ITEMS.map((item, i) => (
        <Reveal key={item.step} animation="fade-up" delay={i * 200}>
          <div className="relative group p-6 sm:p-8 hover:bg-white transition-all duration-500 border border-transparent hover:border-neutral-100">
            <div
              className="w-20 h-20 flex items-center justify-center font-['Unbounded'] text-2xl font-bold mb-10 group-hover:-translate-y-2 transition-all duration-500 shadow-xl"
              style={{ backgroundColor: COLORS.dark, color: COLORS.softBg }}
            >
              {item.step}
            </div>
            <h3 className="font-['Unbounded'] text-xl font-bold uppercase mb-6 transition-colors">
              {item.title}
            </h3>
            <p
              className="font-['DM_Mono'] text-sm leading-relaxed border-t border-neutral-100 pt-6 italic"
              style={{ color: COLORS.muted500 }}
            >
              "{item.desc}"
            </p>
          </div>
        </Reveal>
      ))}
    </div>

    <style>{`
      #process .group:hover h3,
      #process .group:hover .w-20 {
        color: ${COLORS.softBg};
      }
      #process .group:hover .w-20 {
        background: ${COLORS.red};
      }
      #process .group:hover h3 {
        color: ${COLORS.red};
      }
    `}</style>
  </section>
);

export default ProcessSection;
