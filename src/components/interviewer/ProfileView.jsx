import { Edit3, X } from 'lucide-react';
import ProfileDisplay from './ProfileDisplay';
import ProfileEditForm from './ProfileEditForm';

export default function ProfileView({
  userProfile,
  isEditing,
  profileForm,
  isProcessing,
  onToggleEdit,
  onFormChange,
  onSubmit,
}) {
  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto space-y-8 sm:space-y-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-4 border-[#1A1A1A] pb-6 sm:pb-8 gap-4">
        <h1 className="font-['Unbounded'] text-3xl sm:text-4xl font-black uppercase tracking-tight italic">
          Identity Profile.
        </h1>
        <button
          onClick={onToggleEdit}
          className={`px-6 sm:px-8 py-4 font-['Unbounded'] text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-3 self-start sm:self-auto ${
            isEditing
              ? 'bg-neutral-100 text-neutral-400 shadow-none'
              : 'bg-[#1A1A1A] text-white hover:bg-[#E63946] shadow-xl'
          }`}
        >
          {isEditing
            ? <><X size={14} /> Abandon Changes</>
            : <><Edit3 size={14} /> Edit Identity</>
          }
        </button>
      </div>

      <div className="bg-white border-2 border-[#1A1A1A] p-8 sm:p-12 relative overflow-hidden shadow-2xl">
        {isEditing ? (
          <ProfileEditForm
            profileForm={profileForm}
            isProcessing={isProcessing}
            onChange={onFormChange}
            onSubmit={onSubmit}
          />
        ) : (
          <ProfileDisplay userProfile={userProfile} />
        )}
      </div>
    </div>
  );
}
