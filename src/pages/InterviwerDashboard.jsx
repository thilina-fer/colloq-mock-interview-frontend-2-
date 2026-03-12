import { useState, useEffect } from "react";

import GlobalStyles from "../components/interviewer/GlobalStyles";
import Sidebar from "../components/interviewer/Sidebar";
import Header from "../components/interviewer/Header";
import OverviewView from "../components/interviewer/OverviewView";
import WalletView from "../components/interviewer/WalletView";
import ProfileView from "../components/interviewer/ProfileView";
import BookMentorshipView from "../components/interviewer/BookMentorshipView";
import MyBookingsView from "../components/interviewer/MyBookingsView";
import BankModal from "../components/interviewer/BankModal";
import Footer from "../components/interviewer/Footer";

import { INTERVIEWER_PROFILE } from "../constants/interviewerProfile";
import { PENDING_REQUESTS } from "../constants/pendingRequests";
import { CONFIRMED_SESSIONS } from "../constants/confirmedSessions";
import { PERSONAL_BOOKINGS } from "../constants/personalBookings";
import { BANK_FORM_INITIAL } from "../constants/bankFormInitial";

export default function InterviwerDashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [currentView, setCurrentView] = useState("overview");
  const [userProfile, setUserProfile] = useState(INTERVIEWER_PROFILE);

  // Profile edit state
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileForm, setProfileForm] = useState(INTERVIEWER_PROFILE);

  // Bank modal state
  const [isBankModalOpen, setBankModalOpen] = useState(false);
  const [bankForm, setBankForm] = useState(BANK_FORM_INITIAL);

  // Bookings state
  const [pendingRequests, setPendingRequests] = useState(PENDING_REQUESTS);
  const [confirmedSessions, setConfirmedSessions] =
    useState(CONFIRMED_SESSIONS);
  const [personalBookings, setPersonalBookings] = useState(PERSONAL_BOOKINGS);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("colloqInterviewerProfile");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const merged = { ...INTERVIEWER_PROFILE, ...parsed };
        setUserProfile(merged);
        setProfileForm(merged);
      } catch {
        // keep defaults on parse error
      }
    }
  }, []);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500;700&family=Unbounded:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  // Close sidebar on mobile when navigating to a new view
  const handleViewChange = (view) => {
    setCurrentView(view);
    if (window.innerWidth < 768) setSidebarOpen(false);
  };

  // Accept an incoming candidate booking
  const handleAcceptBooking = (bookingId) => {
    const booking = pendingRequests.find((b) => b.id === bookingId);
    setIsProcessing(true);
    setTimeout(() => {
      setPendingRequests((prev) => prev.filter((b) => b.id !== bookingId));
      setConfirmedSessions((prev) => [
        ...prev,
        { ...booking, status: "Paid & Confirmed" },
      ]);
      setIsProcessing(false);
    }, 1500);
  };

  // Connect / update bank account
  const handleConnectBank = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setUserProfile((prev) => ({
        ...prev,
        bankConnected: true,
        bankAccount: { ...bankForm },
      }));
      setBankModalOpen(false);
      setIsProcessing(false);
    }, 2000);
  };

  // Save edited profile
  const handleProfileUpdate = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setUserProfile({ ...profileForm });
      setIsEditingProfile(false);
      setIsProcessing(false);
    }, 1200);
  };

  // Book a personal mentorship session
  const handleBookProtocol = () => {
    setIsProcessing(true);
    setTimeout(() => {
      const newBooking = {
        id: Date.now(),
        mentorName: "Marcus Aurelius",
        type: "Infrastructure Architecture",
        date: "Scheduled: Pending TBD",
        price: 250,
        status: "Active",
      };
      setPersonalBookings((prev) => [newBooking, ...prev]);
      setCurrentView("my_bookings");
      setIsProcessing(false);
    }, 1500);
  };

  return (
    <div className="flex h-screen bg-[#F5F3EE] font-['DM_Sans'] text-[#1A1A1A] overflow-hidden">
      <GlobalStyles />

      <Sidebar
        isSidebarOpen={isSidebarOpen}
        currentView={currentView}
        onViewChange={handleViewChange}
        onToggle={() => setSidebarOpen((prev) => !prev)}
      />

      <main className="flex-1 flex flex-col overflow-y-auto min-w-0">
        <Header
          userProfile={userProfile}
          onToggle={() => setSidebarOpen((prev) => !prev)}
        />

        <div className="p-4 sm:p-8 md:p-12 space-y-8 sm:space-y-12 flex-1">
          {currentView === "overview" && (
            <OverviewView
              pendingRequests={pendingRequests}
              confirmedSessions={confirmedSessions}
              isProcessing={isProcessing}
              onAcceptBooking={handleAcceptBooking}
            />
          )}

          {currentView === "wallet" && (
            <WalletView
              userProfile={userProfile}
              onOpenBankModal={() => setBankModalOpen(true)}
            />
          )}

          {currentView === "profile" && (
            <ProfileView
              userProfile={userProfile}
              isEditing={isEditingProfile}
              profileForm={profileForm}
              isProcessing={isProcessing}
              onToggleEdit={() => {
                setIsEditingProfile((prev) => !prev);
                setProfileForm(userProfile);
              }}
              onFormChange={setProfileForm}
              onSubmit={handleProfileUpdate}
            />
          )}

          {currentView === "book_mentorship" && (
            <BookMentorshipView
              isProcessing={isProcessing}
              onBook={handleBookProtocol}
            />
          )}

          {currentView === "my_bookings" && (
            <MyBookingsView
              personalBookings={personalBookings}
              onNavigateToBook={() => setCurrentView("book_mentorship")}
            />
          )}
        </div>

        <Footer />
      </main>

      <BankModal
        isOpen={isBankModalOpen}
        bankForm={bankForm}
        isProcessing={isProcessing}
        onChange={setBankForm}
        onSubmit={handleConnectBank}
        onClose={() => setBankModalOpen(false)}
      />
    </div>
  );
}
