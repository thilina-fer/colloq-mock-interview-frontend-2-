import { CheckCircle2 } from "lucide-react";
import { COLORS } from "../../constants/colors";

const AuthSuccessAlert = () => (
  <div
    className="flex items-start gap-6 p-6 mb-10 animate-in fade-in slide-in-from-top-4 duration-500 shadow-xl"
    style={{
      backgroundColor: COLORS.softBg,
      borderLeft: `6px solid ${COLORS.dark}`,
    }}
  >
    <CheckCircle2 size={24} className="mt-0.5" style={{ color: COLORS.dark }} />
    <div>
      <div
        className="font-['Unbounded'] text-base font-bold mb-1"
        style={{ color: COLORS.dark }}
      >
        System Synced.
      </div>
      <div
        className="text-[11px] font-['DM_Mono'] uppercase tracking-[0.2em] font-bold"
        style={{ color: COLORS.muted500 }}
      >
        Authentication complete. Welcome to the core network.
      </div>
    </div>
  </div>
);

export default AuthSuccessAlert;
