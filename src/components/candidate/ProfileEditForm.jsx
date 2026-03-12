import { Save } from "lucide-react";

import { COLORS } from "../../constants/colors";

const ProfileEditForm = ({ editForm, setEditForm, onSubmit }) => (
  <form onSubmit={onSubmit} className="space-y-8 animate-in fade-in">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      <div className="space-y-2">
        <label className="font-['DM_Mono'] text-[10px] font-black uppercase text-neutral-400">
          Full Name
        </label>
        <input
          type="text"
          value={editForm.name}
          onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
          className="w-full border-2 border-neutral-200 p-3 focus:border-[#1A1A1A] outline-none font-['DM_Sans'] font-bold uppercase"
        />
      </div>

      <div className="space-y-2">
        <label className="font-['DM_Mono'] text-[10px] font-black uppercase text-neutral-400">
          Job Title
        </label>
        <input
          type="text"
          value={editForm.role}
          onChange={(e) => setEditForm({ ...editForm, role: e.target.value })}
          className="w-full border-2 border-neutral-200 p-3 focus:border-[#1A1A1A] outline-none font-['DM_Sans'] font-bold uppercase"
        />
      </div>

      <div className="md:col-span-2 space-y-2">
        <label className="font-['DM_Mono'] text-[10px] font-black uppercase text-neutral-400">
          Professional Bio
        </label>
        <textarea
          rows="3"
          value={editForm.bio}
          onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
          className="w-full border-2 border-neutral-200 p-3 focus:border-[#1A1A1A] outline-none font-['DM_Sans'] resize-none"
        />
      </div>

      <div className="space-y-2">
        <label className="font-['DM_Mono'] text-[10px] font-black uppercase text-neutral-400">
          GitHub Link
        </label>
        <input
          type="text"
          value={editForm.github}
          onChange={(e) => setEditForm({ ...editForm, github: e.target.value })}
          className="w-full border-2 border-neutral-200 p-3 focus:border-[#1A1A1A] outline-none font-['DM_Sans']"
        />
      </div>

      <div className="space-y-2">
        <label className="font-['DM_Mono'] text-[10px] font-black uppercase text-neutral-400">
          LinkedIn Link
        </label>
        <input
          type="text"
          value={editForm.linkedin}
          onChange={(e) =>
            setEditForm({ ...editForm, linkedin: e.target.value })
          }
          className="w-full border-2 border-neutral-200 p-3 focus:border-[#1A1A1A] outline-none font-['DM_Sans']"
        />
      </div>
    </div>

    <button
      type="submit"
      className="text-white px-8 md:px-10 py-4 font-['Unbounded'] text-[10px] font-black uppercase tracking-[0.2em] shadow-lg flex items-center gap-2"
      style={{ backgroundColor: COLORS.red }}
    >
      <Save size={14} /> Update Core Identity
    </button>
  </form>
);

export default ProfileEditForm;
