import React from 'react';
import { StatCard } from '../components/StatCard';
import { AlertTriangle, CheckCircle, TrendingUp, Calendar, Clock, AlertCircle } from 'lucide-react';

export const DashboardView: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* Header Section */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Weekly Operations Roll-Up</h2>
          <p className="text-slate-500 mt-1">Week 2 of 6 • 14 days to Regulatory Study Prep deadline</p>
        </div>
        <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="text-sm font-medium text-slate-600">System Status: Operational</span>
        </div>
      </div>

      {/* Critical Alert Banner */}
      <div className="bg-rose-50 border-l-4 border-rose-500 p-4 rounded-r-lg flex items-start justify-between shadow-sm">
        <div className="flex items-start space-x-3">
          <AlertCircle className="text-rose-600 mt-0.5" size={20} />
          <div>
            <h3 className="text-rose-900 font-bold">Conflict Detected: Dr. A. Rao</h3>
            <p className="text-rose-700 text-sm mt-1">
              Resource allocation at <strong>110%</strong>. Double-booked for Pilot Study (USA) and Conference Week 2. 
              <span className="block mt-1 font-medium">Recommended Action: Delegate conference presentation to T. Singh.</span>
            </p>
          </div>
        </div>
        <button className="px-4 py-2 bg-rose-100 text-rose-700 text-sm font-medium rounded hover:bg-rose-200 transition-colors">
          Resolve Conflict
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          metric={{ label: 'Reg. Capacity', value: 61, unit: '%', status: 'warning', trend: 'Low prep time' }} 
          icon={<Clock size={24} />} 
        />
        <StatCard 
          metric={{ label: 'Material Readiness', value: 92, unit: '%', status: 'success', trend: 'On Track' }} 
          icon={<CheckCircle size={24} />} 
        />
        <StatCard 
          metric={{ label: 'Budget Burn', value: 22.4, unit: 'k', status: 'success', trend: '45% of Ceiling' }} 
          icon={<TrendingUp size={24} />} 
        />
        <StatCard 
          metric={{ label: 'Doc Completion', value: 75, unit: '%', status: 'warning', trend: '3 Docs Pending' }} 
          icon={<Calendar size={24} />} 
        />
      </div>

      {/* Gantt / Timeline Snapshot */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-lg text-slate-800">6-Week Operations Timeline</h3>
          <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded font-medium">Week 2 Active</span>
        </div>
        
        {/* Simple Gantt Implementation */}
        <div className="relative">
          {/* Grid Lines */}
          <div className="absolute inset-0 grid grid-cols-6 pointer-events-none">
            {[1, 2, 3, 4, 5, 6].map(week => (
              <div key={week} className="border-r border-slate-100 last:border-r-0 h-full">
                <span className="absolute -top-6 text-xs text-slate-400 font-medium pl-2">Week {week}</span>
              </div>
            ))}
          </div>

          <div className="space-y-4 pt-2 pb-6 relative z-10">
            {/* Row 1: Pilot Study */}
            <div className="grid grid-cols-6 gap-0 items-center">
              <div className="col-span-2 relative h-10">
                <div className="absolute inset-y-0 left-0 w-full bg-teal-500 rounded-md shadow-sm opacity-90 flex items-center px-3">
                  <span className="text-xs font-bold text-white">Pilot Study (USA)</span>
                </div>
              </div>
            </div>

             {/* Row 2: Conference */}
             <div className="grid grid-cols-6 gap-0 items-center">
              <div className="col-start-2 col-span-1 relative h-8">
                <div className="absolute inset-y-0 left-0 w-full bg-indigo-500 rounded-md shadow-sm opacity-90 flex items-center px-3">
                  <span className="text-xs font-bold text-white">Conference</span>
                </div>
              </div>
            </div>

            {/* Row 3: Material Procurement */}
            <div className="grid grid-cols-6 gap-0 items-center">
              <div className="col-span-4 relative h-8">
                <div className="absolute inset-y-0 left-0 w-full bg-amber-500 rounded-md shadow-sm opacity-90 flex items-center px-3">
                  <span className="text-xs font-bold text-white">Material Procurement & Checks</span>
                </div>
              </div>
            </div>

            {/* Row 4: Reg Prep */}
            <div className="grid grid-cols-6 gap-0 items-center">
              <div className="col-start-3 col-span-4 relative h-8">
                <div className="absolute inset-y-0 left-0 w-full bg-slate-700 rounded-md shadow-sm opacity-90 flex items-center px-3">
                  <span className="text-xs font-bold text-white">Regulatory Prep</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Current Week Marker */}
          <div className="absolute top-[-20px] bottom-0 left-[25%] w-0.5 bg-rose-500 z-20 shadow-none">
            <div className="absolute top-0 -translate-x-1/2 bg-rose-500 text-white text-[10px] px-1 rounded">NOW</div>
          </div>
        </div>
      </div>
    </div>
  );
};