import { Github, Linkedin } from "lucide-react";
import UserAvatar from "./UserAvatar";

export default function ProfileDisplay({ userProfile }) {
  return (
    <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-start relative z-10 animate-in fade-in">
      <UserAvatar name={userProfile.name} size="lg" />

      <div className="space-y-6 pt-6 lg:pt-0">
        <h2 className="font-['Unbounded'] text-3xl sm:text-4xl font-black uppercase italic leading-none">
          {userProfile.name}
        </h2>
        <p className="font-['DM_Mono'] text-xs font-black uppercase text-[#E63946] tracking-[0.2em]">
          {userProfile.role}
        </p>
        <p className="text-neutral-500 italic text-base sm:text-lg border-l-4 border-[#1A1A1A] pl-6 sm:pl-8 py-2 max-w-2xl leading-relaxed">
          "{userProfile.bio}"
        </p>
        <div className="flex flex-wrap gap-2 pt-4">
          {userProfile.expertise.split(",").map((tag, i) => (
            <span
              key={i}
              className="px-4 py-1.5 bg-[#F8F6F1] border-2 border-neutral-100 text-[9px] font-black uppercase tracking-widest text-neutral-400"
            >
              {tag.trim()}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 sm:gap-6 pt-6 border-t border-neutral-50">
          <a
            href={`https://${userProfile.github}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-neutral-400 hover:text-[#1A1A1A] transition-colors"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href={`https://${userProfile.linkedin}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-neutral-400 hover:text-[#1A1A1A] transition-colors"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
