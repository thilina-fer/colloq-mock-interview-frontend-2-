import { Briefcase, Check, User } from "lucide-react";
import { COLORS } from "../../constants/colors";
import Reveal from "./Reveal";

const DualValueSection = () => (
  <section className="py-0 overflow-hidden">
    <div className="grid md:grid-cols-2">
      <Reveal animation="slide-left" duration={1000}>
        <div
          className="bg-white p-8 sm:p-12 md:p-24 border-y h-full flex flex-col justify-center"
          style={{ borderColor: COLORS.dark10 }}
        >
          <User style={{ color: COLORS.red }} className="mb-6 md:mb-10" size={44} />
          <h2 className="font-['Unbounded'] text-3xl sm:text-4xl font-black uppercase mb-6 md:mb-8 italic leading-none">
            For Job
            <br />
            Seekers
          </h2>
          <ul
            className="space-y-6 font-['DM_Mono'] text-sm"
            style={{ color: COLORS.muted600 }}
          >
            <li className="flex items-start gap-4 hover:translate-x-2 transition-transform">
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                style={{ backgroundColor: COLORS.green }}
              >
                <Check size={12} className="text-white" />
              </span>
              Eliminate cognitive load during high-pressure system design
              rounds.
            </li>
            <li className="flex items-start gap-4 hover:translate-x-2 transition-transform">
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                style={{ backgroundColor: COLORS.green }}
              >
                <Check size={12} className="text-white" />
              </span>
              Benchmark your vocal confidence against top-tier tech candidates.
            </li>
            <li className="flex items-start gap-4 hover:translate-x-2 transition-transform">
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                style={{ backgroundColor: COLORS.green }}
              >
                <Check size={12} className="text-white" />
              </span>
              Master the STAR method for behavioral impact.
            </li>
          </ul>
        </div>
      </Reveal>

      <Reveal animation="slide-right" duration={1000}>
        <div
          className="p-8 sm:p-12 md:p-24 border-y h-full flex flex-col justify-center"
          style={{
            backgroundColor: COLORS.dark,
            color: COLORS.softBg,
            borderColor: COLORS.dark,
          }}
        >
          <Briefcase
            style={{ color: COLORS.red }}
            className="mb-6 md:mb-10"
            size={44}
          />
          <h2 className="font-['Unbounded'] text-3xl sm:text-4xl font-black uppercase mb-6 md:mb-8 italic leading-none">
            For Senior
            <br />
            Mentors
          </h2>
          <ul className="space-y-6 font-['DM_Mono'] text-sm text-neutral-400">
            <li className="flex items-start gap-4 hover:translate-x-2 transition-transform">
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                style={{ backgroundColor: COLORS.red }}
              >
                <Check size={12} className="text-white" />
              </span>
              Refine your ability to ask high-signal technical questions.
            </li>
            <li className="flex items-start gap-4 hover:translate-x-2 transition-transform">
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                style={{ backgroundColor: COLORS.red }}
              >
                <Check size={12} className="text-white" />
              </span>
              Stay synchronized with cross-stack interview patterns.
            </li>
            <li className="flex items-start gap-4 hover:translate-x-2 transition-transform">
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                style={{ backgroundColor: COLORS.red }}
              >
                <Check size={12} className="text-white" />
              </span>
              Monetize your expertise via premium mentor matching.
            </li>
          </ul>
        </div>
      </Reveal>
    </div>
  </section>
);

export default DualValueSection;
