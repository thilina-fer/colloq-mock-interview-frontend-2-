import { COLORS } from "../../constants/colors";

const SIZE_MAP = {
  md: {
    box: "w-8 h-8",
    inner: "w-3 h-3",
    text: "text-xl",
    gap: "gap-3",
  },
  lg: {
    box: "w-10 h-10",
    inner: "w-4 h-4",
    text: "text-base",
    gap: "gap-4",
  },
};

const ColloQLogo = ({
  variant = "dark",
  size = "md",
  interactive = false,
  className = "",
  onClick,
}) => {
  const palette =
    variant === "light"
      ? { border: COLORS.softBg, text: COLORS.softBg, hoverBg: COLORS.softBg }
      : { border: COLORS.dark, text: COLORS.dark, hoverBg: COLORS.dark };

  const currentSize = SIZE_MAP[size] || SIZE_MAP.md;

  return (
    <div
      className={`flex items-center ${currentSize.gap} ${onClick ? "cursor-pointer" : ""} ${interactive ? "group" : ""} ${className}`.trim()}
      onClick={onClick}
    >
      <div
        className={`${currentSize.box} border-2 flex items-center justify-center transition-all duration-300`}
        style={{
          borderColor: palette.border,
          backgroundColor: interactive ? "transparent" : undefined,
        }}
      >
        <div
          className={`${currentSize.inner} transition-transform`}
          style={{ backgroundColor: COLORS.red }}
        />
      </div>
      <span
        className={`font-['Unbounded'] ${currentSize.text} font-bold tracking-tight uppercase`}
        style={{ color: palette.text }}
      >
        ColloQ
      </span>
      {interactive && (
        <style>{`
          .group:hover > div:first-child {
            background: ${palette.hoverBg};
          }
          .group:hover > div:first-child > div {
            transform: rotate(45deg);
          }
        `}</style>
      )}
    </div>
  );
};

export default ColloQLogo;
