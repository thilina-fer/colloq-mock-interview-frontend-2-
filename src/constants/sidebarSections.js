import { Layout, Wallet, BarChart3, Search, Activity, UserCheck } from 'lucide-react';

export const SIDEBAR_SECTIONS = [
  {
    id: 'interviewer-tools',
    label: 'Interviewer Tools',
    sectionPadding: 'py-2',
    items: [
      { id: 'overview', label: 'Dashboard', icon: Layout },
      { id: 'wallet', label: 'Treasury', icon: Wallet },
      { id: 'archive', label: 'History', icon: BarChart3 },
    ],
  },
  {
    id: 'personal-growth',
    label: 'Personal Growth',
    sectionPadding: 'py-6',
    items: [
      { id: 'book_mentorship', label: 'Find Mentors', icon: Search },
      { id: 'my_bookings', label: 'My Sessions', icon: Activity },
      { id: 'profile', label: 'My Profile', icon: UserCheck },
    ],
  },
];
