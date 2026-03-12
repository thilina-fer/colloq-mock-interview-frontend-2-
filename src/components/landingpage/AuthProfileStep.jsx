import { COLORS } from "../../constants/colors";

const INPUT_STYLE = {
  backgroundColor: COLORS.authInputBg,
  borderColor: COLORS.borderLight,
  fontFamily: "DM Sans, sans-serif",
  fontWeight: 500,
};

const AuthProfileStep = ({ role, form, handleChange, errors }) => (
  <div className="space-y-6">
    <div className="space-y-2">
      <label
        className="text-[11px] font-black uppercase tracking-[0.2em] font-['DM_Mono']"
        style={{ color: COLORS.muted400 }}
      >
        Technical Bio
      </label>
      <textarea
        name="bio"
        value={form.bio}
        onChange={handleChange}
        className="w-full h-32 py-4 px-6 border-2 outline-none transition-all duration-300 resize-none focus:bg-white focus:shadow-xl"
        style={{
          ...INPUT_STYLE,
          borderColor: errors.bio ? COLORS.red : COLORS.borderLight,
        }}
        placeholder="Concise summary of your stack and seniority..."
      />
    </div>

    {role === "interviewer" ? (
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label
              className="text-[11px] font-black uppercase tracking-[0.2em] font-['DM_Mono']"
              style={{ color: COLORS.muted400 }}
            >
              Current Company
            </label>
            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              className="w-full py-4 px-6 border-2 outline-none transition-all duration-300"
              style={{
                ...INPUT_STYLE,
                borderColor: errors.company ? COLORS.red : COLORS.borderLight,
              }}
            />
          </div>
          <div className="space-y-2">
            <label
              className="text-[11px] font-black uppercase tracking-[0.2em] font-['DM_Mono']"
              style={{ color: COLORS.muted400 }}
            >
              Designation / Role
            </label>
            <input
              name="designation"
              value={form.designation}
              onChange={handleChange}
              className="w-full py-4 px-6 border-2 outline-none transition-all duration-300"
              style={{
                ...INPUT_STYLE,
                borderColor: errors.designation
                  ? COLORS.red
                  : COLORS.borderLight,
              }}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label
              className="text-[11px] font-black uppercase tracking-[0.2em] font-['DM_Mono']"
              style={{ color: COLORS.muted400 }}
            >
              Experience (Years)
            </label>
            <input
              name="experience"
              value={form.experience}
              onChange={handleChange}
              className="w-full py-4 px-6 border-2 outline-none transition-all duration-300"
              style={{
                ...INPUT_STYLE,
                borderColor: errors.experience
                  ? COLORS.red
                  : COLORS.borderLight,
              }}
            />
          </div>
          <div className="space-y-2">
            <label
              className="text-[11px] font-black uppercase tracking-[0.2em] font-['DM_Mono']"
              style={{ color: COLORS.muted400 }}
            >
              GitHub
            </label>
            <input
              name="githubUrl"
              value={form.githubUrl}
              onChange={handleChange}
              className="w-full py-4 px-6 border-2 outline-none transition-all duration-300"
              style={INPUT_STYLE}
            />
          </div>
        </div>
        <div className="space-y-2">
          <label
            className="text-[11px] font-black uppercase tracking-[0.2em] font-['DM_Mono']"
            style={{ color: COLORS.muted400 }}
          >
            LinkedIn
          </label>
          <input
            name="linkedinUrl"
            value={form.linkedinUrl}
            onChange={handleChange}
            className="w-full py-4 px-6 border-2 outline-none transition-all duration-300"
            style={INPUT_STYLE}
          />
        </div>
      </div>
    ) : (
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            className="text-[11px] font-black uppercase tracking-[0.2em] font-['DM_Mono']"
            style={{ color: COLORS.muted400 }}
          >
            GitHub
          </label>
          <input
            name="githubUrl"
            value={form.githubUrl}
            onChange={handleChange}
            className="w-full py-4 px-6 border-2 outline-none transition-all duration-300"
            style={INPUT_STYLE}
          />
        </div>
        <div className="space-y-2">
          <label
            className="text-[11px] font-black uppercase tracking-[0.2em] font-['DM_Mono']"
            style={{ color: COLORS.muted400 }}
          >
            LinkedIn
          </label>
          <input
            name="linkedinUrl"
            value={form.linkedinUrl}
            onChange={handleChange}
            className="w-full py-4 px-6 border-2 outline-none transition-all duration-300"
            style={INPUT_STYLE}
          />
        </div>
      </div>
    )}
  </div>
);

export default AuthProfileStep;
