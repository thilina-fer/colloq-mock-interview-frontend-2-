import { COLORS } from "../constants/colors";

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
  expanded = true,
  text = "ColloQ",
  textClassName = "",
  boxClassName = "",
  innerClassName = "",
  gapClassName = "",
}) => {
  const palette =
    variant === "light"
      ? { border: COLORS.softBg, text: COLORS.softBg, hoverBg: COLORS.softBg }
      : { border: COLORS.dark, text: COLORS.dark, hoverBg: COLORS.dark };

  const currentSize = SIZE_MAP[size] || SIZE_MAP.md;
  const gapClass = gapClassName || currentSize.gap;

  return (
    <div
      className={`flex items-center ${gapClass} ${onClick ? "cursor-pointer" : ""} ${interactive ? "group" : ""} ${className}`.trim()}
      onClick={onClick}
    >
      <div
        className={`${currentSize.box} border-2 flex items-center justify-center transition-all duration-300 ${boxClassName}`.trim()}
        style={{
          borderColor: palette.border,
          backgroundColor: interactive ? "transparent" : undefined,
        }}
      >
        <div
          className={`${currentSize.inner} transition-transform ${innerClassName}`.trim()}
          style={{ backgroundColor: COLORS.red }}
        />
      </div>

      {expanded && (
        <span
          className={`font-['Unbounded'] ${currentSize.text} font-bold tracking-tight uppercase ${textClassName}`.trim()}
          style={{ color: palette.text }}
        >
          {text}
        </span>
      )}

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