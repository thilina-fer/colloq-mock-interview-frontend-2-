import { useEffect, useState } from "react";

import CompletedArchive from "../components/candidate/CompletedArchive";
import DashboardOverview from "../components/candidate/DashboardOverview";
import Footer from "../components/candidate/Footer";
import GlobalStyles from "../components/candidate/GlobalStyles";
import Header from "../components/candidate/Header";
import ProfileView from "../components/candidate/ProfileView";
import Sidebar from "../components/candidate/Sidebar";
import { CANDIDATE_PROFILE } from "../constants/candidateProfile";
import { COLORS } from "../constants/colors";
import { COMPLETED_SESSIONS } from "../constants/completedSessions";
import { PENDING_SESSIONS } from "../constants/pendingSessions";

const CandidateDashboard = () => {
  const storedProfile = (() => {
    try {
      const raw = localStorage.getItem("colloqCandidateProfile");
      return raw
        ? { ...CANDIDATE_PROFILE, ...JSON.parse(raw) }
        : CANDIDATE_PROFILE;
    } catch {
      return CANDIDATE_PROFILE;
    }
  })();

  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [currentView, setCurrentView] = useState("overview");
  const [userProfile, setUserProfile] = useState(storedProfile);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState(storedProfile);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500;700&family=Unbounded:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const nextInitials = editForm.name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join("");

    const updatedProfile = {
      ...editForm,
      initials: nextInitials || userProfile.initials,
    };
    setUserProfile(updatedProfile);
    localStorage.setItem(
      "colloqCandidateProfile",
      JSON.stringify(updatedProfile),
    );
    setIsEditing(false);
  };

  return (
    <div
      className="flex h-screen bg-[#F5F3EE] font-['DM_Sans'] text-[#1A1A1A] overflow-hidden"
      style={{ backgroundColor: COLORS.softBg, color: COLORS.dark }}
    >
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        currentView={currentView}
        setCurrentView={setCurrentView}
      />

      <main className="flex-1 flex flex-col overflow-y-auto min-w-0">
        <Header
          isSidebarOpen={isSidebarOpen}
          setSidebarOpen={setSidebarOpen}
          userProfile={userProfile}
        />

        <div className="p-4 sm:p-6 lg:p-12 space-y-8 md:space-y-12">
          {currentView === "overview" && (
            <DashboardOverview
              pendingSessions={PENDING_SESSIONS}
              completedSessions={COMPLETED_SESSIONS}
            />
          )}

          {currentView === "profile" && (
            <ProfileView
              isEditing={isEditing}
              setIsEditing={setIsEditing}
              userProfile={userProfile}
              editForm={editForm}
              setEditForm={setEditForm}
              onSubmit={handleUpdateProfile}
            />
          )}

          {currentView === "completed" && (
            <CompletedArchive sessions={COMPLETED_SESSIONS} />
          )}
        </div>

        <Footer />
      </main>

      <GlobalStyles />
    </div>
  );
};

export default CandidateDashboard;
