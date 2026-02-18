import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine, Cell } from 'recharts';
import { ResourceAllocation } from '../types';
import { AlertCircle } from 'lucide-react';

const data: ResourceAllocation[] = [
  { person: 'Dr. A. Rao', role: 'Clinical Lead', pilot: 60, conference: 20, roadshow: 30, regPrep: 0 },
  { person: 'P. Mehta', role: 'Ops Mgr', pilot: 40, conference: 0, roadshow: 0, regPrep: 60 },
  { person: 'S. Kumar', role: 'Engineer', pilot: 20, conference: 0, roadshow: 0, regPrep: 80 },
  { person: 'R. Nair', role: 'PM', pilot: 20, conference: 30, roadshow: 0, regPrep: 50 },
  { person: 'T. Singh', role: 'Researcher', pilot: 10, conference: 40, roadshow: 0, regPrep: 50 },
];

// Calculate totals for rendering custom tooltip or processing
const processedData = data.map(d => ({
  ...d,
  total: d.pilot + d.conference + d.roadshow + d.regPrep
}));

export const ResourcesView: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
       <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Tracker C: Resource Allocation</h2>
          <p className="text-slate-500 text-sm">Week 2 Snapshot • Capacity & Conflict Monitoring</p>
        </div>
        <div className="flex gap-2">
            <span className="flex items-center text-xs text-slate-500 gap-1"><div className="w-3 h-3 bg-teal-500 rounded-sm"></div> Pilot</span>
            <span className="flex items-center text-xs text-slate-500 gap-1"><div className="w-3 h-3 bg-indigo-500 rounded-sm"></div> Conf</span>
            <span className="flex items-center text-xs text-slate-500 gap-1"><div className="w-3 h-3 bg-slate-700 rounded-sm"></div> Reg</span>
            <span className="flex items-center text-xs text-slate-500 gap-1"><div className="w-3 h-3 bg-amber-500 rounded-sm"></div> Roadshow</span>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-[500px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={processedData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            layout="vertical"
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={true} stroke="#e2e8f0" />
            <XAxis type="number" domain={[0, 120]} tickFormatter={(val) => `${val}%`} stroke="#64748b" fontSize={12} />
            <YAxis dataKey="person" type="category" width={100} stroke="#64748b" fontSize={12} fontWeight={500} />
            <Tooltip 
              cursor={{fill: '#f1f5f9'}}
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <ReferenceLine x={100} stroke="#f43f5e" strokeDasharray="3 3" label={{ position: 'top', value: 'Capacity Limit (100%)', fill: '#f43f5e', fontSize: 10 }} />
            
            <Bar dataKey="pilot" stackId="a" fill="#14b8a6" name="Pilot Study" />
            <Bar dataKey="conference" stackId="a" fill="#6366f1" name="Conference" />
            <Bar dataKey="regPrep" stackId="a" fill="#334155" name="Regulatory Prep" />
            <Bar dataKey="roadshow" stackId="a" fill="#f59e0b" name="Roadshow" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-rose-50 border border-rose-200 rounded-xl p-6">
            <h3 className="text-rose-900 font-bold flex items-center gap-2 mb-2">
                <AlertCircle className="text-rose-600"/> Over-Allocation Alert
            </h3>
            <p className="text-sm text-rose-800 mb-4">
                <strong>Dr. A. Rao</strong> is currently at <strong>110%</strong> capacity.
            </p>
            <div className="bg-white p-4 rounded-lg border border-rose-100">
                <div className="flex justify-between text-sm text-slate-600 mb-1">
                    <span>Breakdown:</span>
                </div>
                <ul className="text-xs space-y-1 text-slate-500">
                    <li className="flex justify-between"><span>Pilot Study (USA):</span> <span className="font-medium text-slate-700">60%</span></li>
                    <li className="flex justify-between"><span>Conference:</span> <span className="font-medium text-slate-700">20%</span></li>
                    <li className="flex justify-between"><span>Roadshow:</span> <span className="font-medium text-rose-600">30% (Conflict)</span></li>
                </ul>
            </div>
            <div className="mt-4 flex gap-3">
                <button className="bg-rose-600 hover:bg-rose-700 text-white px-3 py-2 rounded text-xs font-medium transition-colors">
                    Re-assign Conference
                </button>
                <button className="bg-white border border-rose-200 text-rose-700 hover:bg-rose-50 px-3 py-2 rounded text-xs font-medium transition-colors">
                    Defer Roadshow
                </button>
            </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h3 className="text-slate-900 font-bold mb-2">Capacity Health</h3>
            <p className="text-sm text-slate-500 mb-6">
                Team average utilization is at 88%. Regulatory prep bandwidth is currently threatened by operational conflicts.
            </p>
            
            <div className="space-y-4">
                <div>
                    <div className="flex justify-between text-xs mb-1">
                        <span className="font-medium text-slate-700">Regulatory Workstream Coverage</span>
                        <span className="text-amber-600 font-bold">Risk</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                        <div className="bg-amber-400 h-2 rounded-full" style={{width: '65%'}}></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between text-xs mb-1">
                        <span className="font-medium text-slate-700">Pilot Study Staffing</span>
                        <span className="text-emerald-600 font-bold">Optimal</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                        <div className="bg-emerald-500 h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};