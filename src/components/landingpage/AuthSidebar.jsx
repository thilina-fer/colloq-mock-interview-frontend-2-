import { COLORS } from "../../constants/colors";
import ColloQLogo from "../ColloQLogo";

const AuthSidebar = ({ step, steps, onBack }) => (
  <div
    className="hidden lg:flex w-[460px] shrink-0 flex-col p-16 relative overflow-hidden"
    style={{ backgroundColor: COLORS.dark, color: COLORS.softBg }}
  >
    <div
      className="absolute top-0 left-24 w-px h-full"
      style={{ backgroundColor: COLORS.soft10 }}
    />

    <ColloQLogo
      variant="light"
      size="lg"
      interactive
      onClick={onBack}
      className="mb-auto relative z-10"
    />

    <div className="font-['Unbounded'] text-[64px] font-black leading-[0.85] tracking-tighter mb-16 flex-1 flex items-end relative z-10 uppercase italic">
      {step === 0 ? (
        <span>
          Inter<span style={{ color: COLORS.red }}>—</span>
          <br />
          view
          <br />
          Ready.
        </span>
      ) : (
        <span>
          Build
          <br />
          your<span style={{ color: COLORS.red }}>.</span>
          <br />
          Profile.
        </span>
      )}
    </div>

    <div
      className="flex flex-col mb-16 relative z-10"
      style={{ borderTop: `1px solid ${COLORS.soft20}` }}
    >
      {steps.map((label, i) => (
        <div
          key={label}
          className={`flex items-center gap-6 py-5 transition-all duration-700 ${
            step === i ? "opacity-100 translate-x-4" : "opacity-20"
          }`}
          style={{ borderBottom: `1px solid ${COLORS.soft10}` }}
        >
          <span
            className="font-['DM_Mono'] text-sm w-8"
            style={{ color: COLORS.red }}
          >
            0{i + 1}
          </span>
          <div
            className="flex-1 h-px"
            style={{ backgroundColor: step === i ? COLORS.red : COLORS.soft20 }}
          />
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase">
            {label}
          </span>
        </div>
      ))}
    </div>

    <div
      className="font-['DM_Mono'] text-[11px] tracking-[0.2em] uppercase leading-relaxed pt-8 relative z-10 italic"
      style={{ color: COLORS.soft40, borderTop: `1px solid ${COLORS.soft10}` }}
    >
      Precision Training for High Signal Engineering Interviews.
    </div>
  </div>
);

export default AuthSidebar;
