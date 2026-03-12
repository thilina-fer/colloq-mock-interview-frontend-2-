import { COLORS } from "../../constants/colors";

const TrustBar = () => (
  <div
    className="py-10 overflow-hidden"
    style={{ backgroundColor: COLORS.dark }}
  >
    <div
      className="flex whitespace-nowrap animate-marquee font-['Unbounded'] text-xs font-bold uppercase tracking-[0.5em] gap-12 items-center"
      style={{ color: "rgba(245, 243, 238, 0.3)" }}
    >
      {[...Array(2)].map((_, i) => (
        <span key={i}>
          <span>Trusted by Engineers at</span> •{" "}
          <span style={{ color: COLORS.softBg }}>Meta</span> •
          <span> Google</span> •{" "}
          <span style={{ color: COLORS.softBg }}> Airbnb</span> •{" "}
          <span>Netflix</span> •
          <span style={{ color: COLORS.softBg }}> Stripe</span> •{" "}
          <span>Uber</span> •
          <span style={{ color: COLORS.softBg }}> LinkedIn</span> •{" "}
          <span>Amazon</span> •
          <span style={{ color: COLORS.softBg }}> Discord</span> •
        </span>
      ))}
    </div>
  </div>
);

export default TrustBar;
