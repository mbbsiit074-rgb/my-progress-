import React from 'react';
import { ProgressProvider, useProgress } from './context/ProgressContext';
import { AndroidHeader } from './components/AndroidHeader';
import { AndroidBottomNav } from './components/AndroidBottomNav';
import { DashboardTab } from './components/DashboardTab';
import { ChaptersTab } from './components/ChaptersTab';
import { FocusTab } from './components/FocusTab';
import { AchievementsTab } from './components/AchievementsTab';
import { VaultTab } from './components/VaultTab';
import { LevelUpModal } from './components/LevelUpModal';
import { XpToastStack } from './components/XpToastStack';

const MainLayout: React.FC = () => {
  const { activeTab, viewMode } = useProgress();

  return (
    <div className="min-h-screen bg-[#070c18] text-slate-100 flex flex-col justify-between selection:bg-red-500 selection:text-white">
      {/* Container wrapper: switches between realistic Android phone frame & wide command center */}
      <div
        className={`w-full mx-auto transition-all duration-300 min-h-screen flex flex-col ${
          viewMode === 'mobile'
            ? 'max-w-md sm:my-3 sm:min-h-[calc(100vh-24px)] sm:rounded-3xl sm:border sm:border-slate-800/90 sm:shadow-2xl sm:shadow-red-950/20 sm:overflow-hidden relative bg-[#070c18]'
            : 'max-w-7xl px-0'
        }`}
      >
        {/* Android Top Header */}
        <AndroidHeader />

        {/* Tab Content Body */}
        <main className="flex-1 w-full">
          {activeTab === 'dashboard' && <DashboardTab />}
          {activeTab === 'chapters' && <ChaptersTab />}
          {activeTab === 'focus' && <FocusTab />}
          {activeTab === 'achievements' && <AchievementsTab />}
          {activeTab === 'vault' && <VaultTab />}
        </main>

        {/* Android Bottom Navigation */}
        <AndroidBottomNav />
      </div>

      {/* Floating XP Toasts */}
      <XpToastStack />

      {/* Celebratory Level-Up Modal */}
      <LevelUpModal />
    </div>
  );
};

export default function App() {
  return (
    <ProgressProvider>
      <MainLayout />
    </ProgressProvider>
  );
}
