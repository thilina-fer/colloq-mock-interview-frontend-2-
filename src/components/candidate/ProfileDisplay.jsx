import { Github, Linkedin } from "lucide-react";

import { COLORS } from "../../constants/colors";
import UserAvatar from "./UserAvatar";

const ProfileDisplay = ({ userProfile }) => (
  <div className="space-y-8 md:space-y-12">
    <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-start">
      <UserAvatar initials={userProfile.initials} size="lg" />

      <div className="space-y-4">
        <h2 className="font-['Unbounded'] text-2xl md:text-3xl font-black uppercase italic">
          {userProfile.name}
        </h2>

        <div className="flex flex-wrap gap-4 font-['DM_Mono'] text-[10px] font-black uppercase tracking-widest">
          <span style={{ color: COLORS.red }}>{userProfile.role}</span>
          <span className="text-neutral-300">|</span>
          <span className="text-neutral-400">Joined {userProfile.joined}</span>
        </div>

        <p className="text-neutral-500 leading-relaxed max-w-xl italic">
          "{userProfile.bio}"
        </p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-dashed border-neutral-100">
      <div className="space-y-1">
        <p className="font-['DM_Mono'] text-[10px] font-black uppercase text-neutral-400">
          Secure Email
        </p>
        <p className="font-['DM_Sans'] font-bold">{userProfile.email}</p>
      </div>

      <div className="space-y-1">
        <p className="font-['DM_Mono'] text-[10px] font-black uppercase text-neutral-400">
          Verification Source
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#"
            className="flex items-center gap-2 font-bold hover:text-[#E63946]"
          >
            <Github size={14} /> Github
          </a>
          <a
            href="#"
            className="flex items-center gap-2 font-bold hover:text-[#E63946]"
          >
            <Linkedin size={14} /> LinkedIn
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default ProfileDisplay;
