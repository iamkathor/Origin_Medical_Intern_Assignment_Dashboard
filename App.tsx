import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { DashboardView } from './views/DashboardView';
import { MaterialsView } from './views/MaterialsView';
import { ResearchView } from './views/ResearchView';
import { ResourcesView } from './views/ResourcesView';
import { ViewState } from './types';
import { Bell, Search, UserCircle } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard': return <DashboardView />;
      case 'materials': return <MaterialsView />;
      case 'research': return <ResearchView />;
      case 'resources': return <ResourcesView />;
      default: return <DashboardView />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar currentView={currentView} onChangeView={setCurrentView} />
      
      <main className="flex-1 ml-64 flex flex-col min-h-screen">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 sticky top-0 z-10 px-8 flex items-center justify-between shadow-sm">
          <div className="flex items-center text-slate-400 bg-slate-50 px-3 py-1.5 rounded-lg w-96 border border-slate-200 focus-within:ring-2 focus-within:ring-teal-500 focus-within:border-teal-500 transition-all">
            <Search size={16} className="mr-2" />
            <input 
              type="text" 
              placeholder="Search items, docs, or people..." 
              className="bg-transparent border-none outline-none text-sm text-slate-700 w-full placeholder-slate-400"
            />
          </div>

          <div className="flex items-center space-x-6">
            <button className="relative text-slate-500 hover:text-teal-600 transition-colors">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center space-x-3 pl-6 border-l border-slate-200">
              <div className="text-right hidden md:block">
                <p className="text-sm font-semibold text-slate-800">R. Nair</p>
                <p className="text-xs text-slate-500">Project Manager</p>
              </div>
              <div className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center text-white">
                <UserCircle size={24} />
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-8 flex-1 overflow-y-auto">
          {renderView()}
        </div>
      </main>
    </div>
  );
};

export default App;