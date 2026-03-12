import { Edit3, X } from "lucide-react";

import { COLORS } from "../../constants/colors";
import ProfileDisplay from "./ProfileDisplay";
import ProfileEditForm from "./ProfileEditForm";

const ProfileView = ({
  isEditing,
  setIsEditing,
  userProfile,
  editForm,
  setEditForm,
  onSubmit,
}) => (
  <div className="animate-in slide-in-from-bottom-4 duration-500 max-w-4xl">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10 md:mb-12">
      <h1 className="font-['Unbounded'] text-3xl md:text-4xl font-black uppercase tracking-tight italic">
        Identity Profile.
      </h1>

      <button
        onClick={() => {
          setIsEditing(!isEditing);
          setEditForm(userProfile);
        }}
        className={`px-6 py-3 font-['Unbounded'] text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 ${
          isEditing
            ? "bg-neutral-100 text-neutral-400"
            : "text-white hover:bg-[#E63946]"
        }`}
        style={{ backgroundColor: isEditing ? undefined : COLORS.dark }}
      >
        {isEditing ? (
          <>
            <X size={14} /> Cancel
          </>
        ) : (
          <>
            <Edit3 size={14} /> Edit Identity
          </>
        )}
      </button>
    </div>

    <div
      className="bg-white border-2 p-6 md:p-10 space-y-10 relative"
      style={{ borderColor: COLORS.dark }}
    >
      {isEditing ? (
        <ProfileEditForm
          editForm={editForm}
          setEditForm={setEditForm}
          onSubmit={onSubmit}
        />
      ) : (
        <ProfileDisplay userProfile={userProfile} />
      )}
    </div>
  </div>
);

export default ProfileView;
