// Step 1 — Professional bio + role-specific fields.
// Interviewer: Company, Designation, Experience, GitHub, LinkedIn.
// Candidate: GitHub + LinkedIn grid.
const ProfileStep = ({ role, form, handleChange, errors }) => (
  <div className="space-y-4">
    <div className="space-y-1.5">
      <label className="text-[10px] font-bold uppercase text-neutral-500 tracking-widest font-['DM_Mono']">
        Professional Bio
      </label>
      <textarea
        name="bio"
        value={form.bio}
        onChange={handleChange}
        className={`w-full h-24 py-3.5 px-4 bg-[#F8F6F1] border-[1.5px] outline-none transition-all resize-none ${
          errors.bio
            ? "border-[#E63946]"
            : "border-[#E8E5DF] focus:border-[#1A1A1A] focus:bg-white"
        }`}
        placeholder="Brief summary of your expertise..."
      />
    </div>

    {role === "interviewer" ? (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold uppercase text-neutral-500 tracking-widest font-['DM_Mono']">
              Company
            </label>
            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              className={`w-full py-3 px-4 bg-[#F8F6F1] border-[1.5px] outline-none transition-all ${
                errors.company
                  ? "border-[#E63946]"
                  : "border-[#E8E5DF] focus:border-[#1A1A1A]"
              }`}
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold uppercase text-neutral-500 tracking-widest font-['DM_Mono']">
              Designation
            </label>
            <input
              name="designation"
              value={form.designation}
              onChange={handleChange}
              className="w-full py-3 px-4 bg-[#F8F6F1] border-[1.5px] border-[#E8E5DF] focus:border-[#1A1A1A] outline-none transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold uppercase text-neutral-500 tracking-widest font-['DM_Mono']">
              Experience
            </label>
            <input
              name="experience"
              value={form.experience}
              onChange={handleChange}
              className={`w-full py-3 px-4 bg-[#F8F6F1] border-[1.5px] outline-none transition-all ${
                errors.experience
                  ? "border-[#E63946]"
                  : "border-[#E8E5DF] focus:border-[#1A1A1A]"
              }`}
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold uppercase text-neutral-500 tracking-widest font-['DM_Mono']">
              GitHub
            </label>
            <input
              name="githubUrl"
              value={form.githubUrl}
              onChange={handleChange}
              className="w-full py-3 px-4 bg-[#F8F6F1] border-[1.5px] border-[#E8E5DF] focus:border-[#1A1A1A] outline-none transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold uppercase text-neutral-500 tracking-widest font-['DM_Mono']">
              LinkedIn
            </label>
            <input
              name="linkedinUrl"
              value={form.linkedinUrl}
              onChange={handleChange}
              className="w-full py-3 px-4 bg-[#F8F6F1] border-[1.5px] border-[#E8E5DF] focus:border-[#1A1A1A] outline-none transition-all"
            />
          </div>
          <div />
        </div>
      </div>
    ) : (
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold uppercase text-neutral-500 tracking-widest font-['DM_Mono']">
            GitHub
          </label>
          <input
            name="githubUrl"
            value={form.githubUrl}
            onChange={handleChange}
            className="w-full py-3 px-4 bg-[#F8F6F1] border-[1.5px] border-[#E8E5DF] focus:border-[#1A1A1A] outline-none transition-all"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold uppercase text-neutral-500 tracking-widest font-['DM_Mono']">
            LinkedIn
          </label>
          <input
            name="linkedinUrl"
            value={form.linkedinUrl}
            onChange={handleChange}
            className="w-full py-3 px-4 bg-[#F8F6F1] border-[1.5px] border-[#E8E5DF] focus:border-[#1A1A1A] outline-none transition-all"
          />
        </div>
      </div>
    )}
  </div>
);

export default ProfileStep;
