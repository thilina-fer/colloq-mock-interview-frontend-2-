import { COLORS } from "../../constants/colors";

const UserAvatar = ({ initials, size = "sm" }) => {
  const isLarge = size === "lg";

  return (
    <div
      className={`${isLarge ? "w-32 h-32 text-4xl border-4 shadow-xl" : "w-10 h-10 text-sm border-2 shadow-md"} bg-[#1A1A1A] text-[#F5F3EE] flex items-center justify-center font-['Unbounded'] font-bold`}
      style={{ borderColor: isLarge ? COLORS.red : COLORS.dark }}
    >
      {initials}
    </div>
  );
};

export default UserAvatar;
