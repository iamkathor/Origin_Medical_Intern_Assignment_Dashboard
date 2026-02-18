import React from 'react';
import { DocumentItem, TravelItem } from '../types';
import { FileCheck, Plane, AlertTriangle, User, Calendar } from 'lucide-react';

const mockDocs: DocumentItem[] = [
  { id: '1', name: 'IRB Protocol v3.1', type: 'Regulatory', status: 'Internal Review', owner: 'Dr. A. Rao', dueDate: 'Week 3' },
  { id: '2', name: 'Participant Consent Form', type: 'Pilot', status: 'Approved', owner: 'P. Mehta', dueDate: 'Week 1' },
  { id: '3', name: 'Data Safety Plan', type: 'Regulatory', status: 'Draft', owner: 'S. Kumar', dueDate: 'Week 4' },
  { id: '4', name: 'Site Initiation Report', type: 'Pilot', status: 'Submitted', owner: 'Dr. A. Rao', dueDate: 'Week 2' },
];

const mockTravel: TravelItem[] = [
  { id: 't1', person: 'Dr. A. Rao', destination: 'Boston (Pilot)', status: 'Confirmed', cost: 1800 },
  { id: 't2', person: 'P. Mehta', destination: 'Boston (Pilot)', status: 'Confirmed', cost: 1650 },
  { id: 't3', person: 'T. Singh', destination: 'London (Reg)', status: 'Visa Pending', cost: 0 },
];

export const ResearchView: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
       <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Tracker B: Research Logistics</h2>
          <p className="text-slate-500 text-sm">Regulatory approvals, documentation lifecycle, and field travel.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Document Lifecycle Card */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">
              <FileCheck size={20} className="text-teal-500"/> Document Lifecycle
            </h3>
            <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded font-medium">2 Pending Review</span>
          </div>

          <div className="space-y-4">
            {mockDocs.map((doc) => (
              <div key={doc.id} className="p-4 rounded-lg border border-slate-100 hover:border-teal-200 hover:bg-teal-50/30 transition-all bg-white shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">{doc.name}</h4>
                    <div className="flex items-center gap-3 mt-1">
                      <span className={`text-[10px] px-1.5 py-0.5 rounded border ${doc.type === 'Regulatory' ? 'bg-slate-100 border-slate-200 text-slate-600' : 'bg-teal-50 border-teal-200 text-teal-700'}`}>
                        {doc.type}
                      </span>
                      <span className="text-xs text-slate-500 flex items-center gap-1">
                        <User size={10} /> {doc.owner}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                     <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        doc.status === 'Approved' ? 'bg-emerald-100 text-emerald-700' :
                        doc.status === 'Draft' ? 'bg-slate-100 text-slate-600' :
                        'bg-amber-100 text-amber-700'
                     }`}>
                        {doc.status}
                     </span>
                     <div className="text-[10px] text-slate-400 mt-1 flex items-center justify-end gap-1">
                       <Calendar size={10} /> Due: {doc.dueDate}
                     </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Travel Tracking Card */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">
              <Plane size={20} className="text-indigo-500"/> Travel & Logistics
            </h3>
            <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded font-medium">Total: $3,450</span>
          </div>

          <div className="space-y-4">
             {mockTravel.map(travel => (
               <div key={travel.id} className="flex items-center justify-between p-4 border border-slate-100 rounded-lg bg-white shadow-sm">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-xs">
                     {travel.person.split(' ').map(n => n[0]).join('')}
                   </div>
                   <div>
                     <div className="font-medium text-slate-900 text-sm">{travel.person}</div>
                     <div className="text-xs text-slate-500">{travel.destination}</div>
                   </div>
                 </div>
                 <div className="text-right">
                   {travel.status === 'Confirmed' ? (
                     <span className="text-xs text-emerald-600 font-medium bg-emerald-50 px-2 py-1 rounded border border-emerald-100 block mb-1">Confirmed</span>
                   ) : (
                     <span className="text-xs text-amber-600 font-medium bg-amber-50 px-2 py-1 rounded border border-amber-100 block mb-1 flex items-center gap-1">
                       <AlertTriangle size={10}/> {travel.status}
                     </span>
                   )}
                   <span className="text-xs text-slate-400">Est: ${travel.cost}</span>
                 </div>
               </div>
             ))}

             <div className="mt-6 p-4 bg-indigo-50 rounded-lg border border-indigo-100">
               <h4 className="text-indigo-900 font-semibold text-sm mb-2">Visa Alert</h4>
               <p className="text-xs text-indigo-700 leading-relaxed">
                 T. Singh requires UK Visa approval by Week 5 for the Regulatory Study kickoff. 
                 Expedited processing recommended.
               </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};