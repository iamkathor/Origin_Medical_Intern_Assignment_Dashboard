import React from 'react';
import { LayoutDashboard, Box, FileText, Users, Activity, Settings, LogOut } from 'lucide-react';
import { ViewState } from '../types';

interface SidebarProps {
  currentView: ViewState;
  onChangeView: (view: ViewState) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, onChangeView }) => {
  const navItems = [
    { id: 'dashboard', label: 'Master Dashboard', icon: <LayoutDashboard size={20} /> },
    { id: 'materials', label: 'Material Logistics', icon: <Box size={20} /> },
    { id: 'research', label: 'Research Studies', icon: <FileText size={20} /> },
    { id: 'resources', label: 'Resource Matrix', icon: <Users size={20} /> },
  ];

  return (
    <div className="w-64 bg-slate-900 text-white h-screen flex flex-col fixed left-0 top-0 z-20 shadow-xl">
      <div className="p-6 border-b border-slate-800 flex items-center space-x-3">
        <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
          <Activity size={20} className="text-white" />
        </div>
        <div>
          <h1 className="font-bold text-lg tracking-tight">ORIGIN MEDICAL</h1>
          <p className="text-xs text-slate-400">Ops Command Center</p>
        </div>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onChangeView(item.id as ViewState)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
              currentView === item.id
                ? 'bg-teal-600 text-white shadow-lg shadow-teal-900/50'
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <div className="bg-slate-800 rounded-xl p-4 mb-4">
          <p className="text-xs text-slate-400 mb-1">Budget Ceiling</p>
          <div className="flex justify-between items-end mb-2">
            <span className="text-sm font-bold">$22,450</span>
            <span className="text-xs text-teal-400">45% used</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-1.5">
            <div className="bg-teal-500 h-1.5 rounded-full" style={{ width: '45%' }}></div>
          </div>
          <p className="text-[10px] text-slate-500 mt-2 text-right">Target: $50,000</p>
        </div>

        <button className="flex items-center space-x-3 text-slate-400 hover:text-white px-4 py-2 text-sm w-full transition-colors">
          <Settings size={18} />
          <span>Settings</span>
        </button>
        <button className="flex items-center space-x-3 text-slate-400 hover:text-white px-4 py-2 text-sm w-full transition-colors">
          <LogOut size={18} />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
};