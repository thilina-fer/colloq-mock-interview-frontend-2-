import { Shield } from "lucide-react";

export default function UserAvatar({ name, size = "sm" }) {
  if (size === "lg") {
    return (
      <div className="w-32 h-32 sm:w-40 sm:h-40 bg-[#1A1A1A] text-white flex items-center justify-center text-4xl sm:text-5xl font-['Unbounded'] font-black border-4 border-[#E63946] shadow-2xl relative shrink-0">
        {name[0]}
        <div className="absolute -bottom-4 -right-4 bg-white p-2 border-2 border-[#1A1A1A]">
          <Shield size={24} className="text-[#E63946]" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-10 h-10 border-2 border-[#1A1A1A] bg-[#1A1A1A] text-white flex items-center justify-center font-['Unbounded'] text-sm font-bold shadow-md shrink-0">
      {name[0]}
    </div>
  );
}
