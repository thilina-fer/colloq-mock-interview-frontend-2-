import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";

// Step 0 — Email, password, and sign-up only fields.
// Error state is communicated through border colour only, matching the original.
const AccountStep = ({
  isLogin,
  form,
  handleChange,
  errors,
  showPassword,
  setShowPassword,
}) => (
  <div className="space-y-4">
    {!isLogin && (
      <div className="space-y-1.5">
        <label className="text-[10px] font-bold uppercase text-neutral-500 tracking-widest font-['DM_Mono']">
          Full Name
        </label>
        <div className="relative group">
          <User
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
          />
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className={`w-full py-3.5 pl-14 pr-4 bg-[#F8F6F1] border-[1.5px] outline-none transition-all ${
              errors.name
                ? "border-[#E63946]"
                : "border-[#E8E5DF] focus:border-[#1A1A1A] focus:bg-white"
            }`}
            placeholder="Jane Smith"
          />
        </div>
      </div>
    )}

    <div className="space-y-1.5">
      <label className="text-[10px] font-bold uppercase text-neutral-500 tracking-widest font-['DM_Mono']">
        Email
      </label>
      <div className="relative group">
        <Mail
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          className={`w-full py-3.5 pl-14 pr-4 bg-[#F8F6F1] border-[1.5px] outline-none transition-all ${
            errors.email
              ? "border-[#E63946]"
              : "border-[#E8E5DF] focus:border-[#1A1A1A] focus:bg-white"
          }`}
          placeholder="name@colloq.io"
        />
      </div>
    </div>

    <div className="space-y-1.5">
      <label className="text-[10px] font-bold uppercase text-neutral-500 tracking-widest font-['DM_Mono']">
        Password
      </label>
      <div className="relative group">
        <Lock
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
        />
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          value={form.password}
          onChange={handleChange}
          className={`w-full py-3.5 pl-14 pr-14 bg-[#F8F6F1] border-[1.5px] outline-none transition-all ${
            errors.password
              ? "border-[#E63946]"
              : "border-[#E8E5DF] focus:border-[#1A1A1A] focus:bg-white"
          }`}
          placeholder="••••••••"
        />
        <button
          type="button"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-[#1A1A1A]"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
    </div>

    {!isLogin && (
      <div className="space-y-1.5">
        <label className="text-[10px] font-bold uppercase text-neutral-500 tracking-widest font-['DM_Mono']">
          Re-enter Password
        </label>
        <div className="relative group">
          <Lock
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
          />
          <input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            value={form.confirmPassword || ""}
            onChange={handleChange}
            className={`w-full py-3.5 pl-14 pr-4 bg-[#F8F6F1] border-[1.5px] outline-none transition-all ${
              errors.confirmPassword
                ? "border-[#E63946]"
                : "border-[#E8E5DF] focus:border-[#1A1A1A] focus:bg-white"
            }`}
            placeholder="••••••••"
          />
        </div>
      </div>
    )}
  </div>
);

export default AccountStep;
