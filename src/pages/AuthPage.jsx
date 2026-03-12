import { useState, useEffect } from "react";

import { STEPS } from "../constants/authSteps";
import { SPECS } from "../constants/specializations";

import AuthLayout from "../components/auth/AuthLayout";
import AuthSidebar from "../components/auth/AuthSidebar";
import AuthTopBar from "../components/auth/AuthTopBar";
import AuthHeader from "../components/auth/AuthHeader";
import SuccessAlert from "../components/auth/SuccessAlert";
import AccountStep from "../components/auth/AccountStep";
import ProfileStep from "../components/auth/ProfileStep";
import SpecializationStep from "../components/auth/SpecializationStep";
import ActionButtons from "../components/auth/ActionButtons";

const AuthPage = () => {
  // ─── Global auth state ───────────────────────────────────────────────────
  const [role, setRole] = useState("candidate"); // 'candidate' | 'interviewer'
  const [isLogin, setIsLogin] = useState(true); // login vs sign-up mode
  const [step, setStep] = useState(0); // 0 = Account, 1 = Profile, 2 = Specialization
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    bio: "",
    company: "",
    designation: "",
    experience: "",
    githubUrl: "",
    linkedinUrl: "",
    specializations: [],
  });

  // ─── Font injection ───────────────────────────────────────────────────────
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Unbounded:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  // ─── Handlers ────────────────────────────────────────────────────────────
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  const toggleSpec = (id) => {
    setForm((p) => ({
      ...p,
      specializations: p.specializations.includes(id)
        ? p.specializations.filter((s) => s !== id)
        : [...p.specializations, id],
    }));
  };

  const validate = () => {
    const e = {};
    if (step === 0) {
      if (!form.email) e.email = "Required";
      if (!form.password) e.password = "Required";
      if (!isLogin && !form.name) e.name = "Required";
      if (!isLogin && !form.confirmPassword) {
        e.confirmPassword = "Required";
      } else if (!isLogin && form.password !== form.confirmPassword) {
        e.confirmPassword = "Passwords do not match";
      }
    } else if (step === 1) {
      if (!form.bio) e.bio = "Required";
      if (role === "interviewer") {
        if (!form.company) e.company = "Required";
        if (!form.experience) e.experience = "Required";
      }
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const finish = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1800));
    setSuccess(true);
    setLoading(false);
  };

  const next = () => {
    if (!validate()) return;
    if (isLogin) {
      finish();
      return;
    }
    if (step === 0) setStep(1);
    else if (step === 1 && role === "interviewer") setStep(2);
    else finish();
  };

  const googleAuth = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    if (isLogin) finish();
    else setStep(1);
  };

  const ctaLabel = isLogin
    ? "Sign In"
    : step === 2 || (step === 1 && role === "candidate")
      ? "Complete"
      : "Continue";

  // ─── Render ───────────────────────────────────────────────────────────────
  return (
    <AuthLayout sidebar={<AuthSidebar step={step} steps={STEPS} />}>
      {/* Right panel */}
      <div className="flex-1 flex flex-col h-full overflow-hidden bg-white">
        <AuthTopBar
          isLogin={isLogin}
          step={step}
          role={role}
          setRole={setRole}
          setStep={setStep}
          loading={loading}
        />

        {/* Vertically-centred form container */}
        <div className="flex-1 flex justify-center items-center w-full overflow-y-auto">
          <div className="w-full max-w-2xl px-6 md:px-16 lg:px-0 py-8">
            <AuthHeader isLogin={isLogin} step={step} />

            {success && <SuccessAlert />}

            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              {step === 0 && (
                <AccountStep
                  isLogin={isLogin}
                  form={form}
                  handleChange={handleChange}
                  errors={errors}
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                />
              )}

              {step === 1 && (
                <ProfileStep
                  role={role}
                  form={form}
                  handleChange={handleChange}
                  errors={errors}
                />
              )}

              {step === 2 && (
                <SpecializationStep
                  specs={SPECS}
                  form={form}
                  toggleSpec={toggleSpec}
                />
              )}

              <ActionButtons
                loading={loading}
                next={next}
                ctaLabel={ctaLabel}
                step={step}
                setStep={setStep}
                googleAuth={googleAuth}
                isLogin={isLogin}
                setIsLogin={setIsLogin}
                setErrors={setErrors}
              />
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default AuthPage;
