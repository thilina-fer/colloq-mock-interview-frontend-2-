import { Save, Loader2 } from 'lucide-react';

export default function ProfileEditForm({ profileForm, isProcessing, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="space-y-10 animate-in fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
        <div className="space-y-2 group">
          <label className="font-['DM_Mono'] text-[10px] font-black uppercase text-neutral-400 tracking-widest">
            Full Display Name
          </label>
          <input
            required
            type="text"
            value={profileForm.name}
            onChange={e => onChange({ ...profileForm, name: e.target.value })}
            className="w-full border-2 border-neutral-100 p-4 font-['DM_Sans'] font-bold uppercase focus:border-[#1A1A1A] outline-none transition-all"
          />
        </div>

        <div className="space-y-2 group">
          <label className="font-['DM_Mono'] text-[10px] font-black uppercase text-neutral-400 tracking-widest">
            Current Professional Role
          </label>
          <input
            required
            type="text"
            value={profileForm.role}
            onChange={e => onChange({ ...profileForm, role: e.target.value })}
            className="w-full border-2 border-neutral-100 p-4 font-['DM_Sans'] font-bold uppercase focus:border-[#1A1A1A] outline-none transition-all"
          />
        </div>

        <div className="space-y-2 group">
          <label className="font-['DM_Mono'] text-[10px] font-black uppercase text-neutral-400 tracking-widest">
            Secure Email
          </label>
          <input
            required
            type="email"
            value={profileForm.email}
            onChange={e => onChange({ ...profileForm, email: e.target.value })}
            className="w-full border-2 border-neutral-100 p-4 font-['DM_Sans'] font-bold focus:border-[#1A1A1A] outline-none transition-all"
          />
        </div>

        <div className="space-y-2 group">
          <label className="font-['DM_Mono'] text-[10px] font-black uppercase text-neutral-400 tracking-widest">
            Technical Expertise Stack
          </label>
          <input
            required
            type="text"
            value={profileForm.expertise}
            onChange={e => onChange({ ...profileForm, expertise: e.target.value })}
            className="w-full border-2 border-neutral-100 p-4 font-['DM_Sans'] font-bold focus:border-[#1A1A1A] outline-none transition-all"
          />
        </div>

        <div className="space-y-2 group">
          <label className="font-['DM_Mono'] text-[10px] font-black uppercase text-neutral-400 tracking-widest">
            GitHub Profile URL
          </label>
          <input
            required
            type="text"
            value={profileForm.github}
            onChange={e => onChange({ ...profileForm, github: e.target.value })}
            className="w-full border-2 border-neutral-100 p-4 font-['DM_Sans'] focus:border-[#1A1A1A] outline-none transition-all"
          />
        </div>

        <div className="space-y-2 group">
          <label className="font-['DM_Mono'] text-[10px] font-black uppercase text-neutral-400 tracking-widest">
            LinkedIn Profile URL
          </label>
          <input
            required
            type="text"
            value={profileForm.linkedin}
            onChange={e => onChange({ ...profileForm, linkedin: e.target.value })}
            className="w-full border-2 border-neutral-100 p-4 font-['DM_Sans'] focus:border-[#1A1A1A] outline-none transition-all"
          />
        </div>

        <div className="md:col-span-2 space-y-2 group">
          <label className="font-['DM_Mono'] text-[10px] font-black uppercase text-neutral-400 tracking-widest">
            Technical Bio &amp; Philosophy
          </label>
          <textarea
            rows="4"
            value={profileForm.bio}
            onChange={e => onChange({ ...profileForm, bio: e.target.value })}
            className="w-full border-2 border-neutral-100 p-4 font-['DM_Sans'] focus:border-[#1A1A1A] outline-none transition-all resize-none italic leading-relaxed"
          />
        </div>
      </div>

      <div className="pt-6 border-t border-dashed border-neutral-100">
        <button
          type="submit"
          disabled={isProcessing}
          className="bg-[#E63946] text-white px-8 sm:px-12 py-5 font-['Unbounded'] text-[11px] font-black uppercase tracking-[0.3em] shadow-xl hover:scale-105 transition-transform flex items-center gap-4"
        >
          {isProcessing
            ? <Loader2 size={18} className="animate-spin" />
            : <><Save size={18} /> Update Core Node</>
          }
        </button>
      </div>
    </form>
  );
}
