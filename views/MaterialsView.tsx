import React from 'react';
import { MaterialItem } from '../types';
import { Package, Truck, CheckCircle2, AlertOctagon, FileText } from 'lucide-react';

const mockMaterials: MaterialItem[] = [
  { id: 'DEV-001', name: 'Ultrasound Probe X1', study: 'Pilot', qtyReq: 4, qtyAvail: 4, status: 'Delivered', vendor: 'MedSupply Co.', eta: 'Week 1', cost: 12000, location: 'Site B' },
  { id: 'DEV-002', name: 'High-Perf GPU Node', study: 'Regulatory', qtyReq: 2, qtyAvail: 0, status: 'Shipped', vendor: 'Nvidia Direct', eta: 'Week 5', cost: 8500, location: 'Lab A' },
  { id: 'CON-104', name: 'Sterile Gel Packs (Box)', study: 'Shared', qtyReq: 50, qtyAvail: 20, status: 'PO Raised', vendor: 'MedSupply Co.', eta: 'Week 4', cost: 1200, location: 'Storage' },
  { id: 'DEV-003', name: 'Patient Monitor', study: 'Regulatory', qtyReq: 6, qtyAvail: 0, status: 'Delayed', vendor: 'HealthTech Inc.', eta: 'Week 7 (Risk)', cost: 4500, location: 'Lab A' },
  { id: 'CON-201', name: 'Consent Forms (Printed)', study: 'Pilot', qtyReq: 100, qtyAvail: 100, status: 'Delivered', vendor: 'PrintFast', eta: 'Week 1', cost: 350, location: 'Site B' },
];

export const MaterialsView: React.FC = () => {
  const getStatusBadge = (status: MaterialItem['status']) => {
    switch (status) {
      case 'Delivered': return <span className="px-2 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200 flex w-fit items-center gap-1"><CheckCircle2 size={12}/> Delivered</span>;
      case 'Delayed': return <span className="px-2 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 border border-rose-200 flex w-fit items-center gap-1"><AlertOctagon size={12}/> Delayed</span>;
      case 'Shipped': return <span className="px-2 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 border border-sky-200 flex w-fit items-center gap-1"><Truck size={12}/> Shipped</span>;
      default: return <span className="px-2 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 border border-amber-200 flex w-fit items-center gap-1"><FileText size={12}/> {status}</span>;
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Tracker A: Material Logistics</h2>
          <p className="text-slate-500 text-sm">Monitoring procurement, shipping, and deployment readiness.</p>
        </div>
        <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm">
          + Raise Purchase Order
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-900">Item ID / Name</th>
                <th className="px-6 py-4 font-semibold text-slate-900">Study Tag</th>
                <th className="px-6 py-4 font-semibold text-slate-900">Qty (Req/Avail)</th>
                <th className="px-6 py-4 font-semibold text-slate-900">Status</th>
                <th className="px-6 py-4 font-semibold text-slate-900">Vendor & ETA</th>
                <th className="px-6 py-4 font-semibold text-slate-900 text-right">Cost (USD)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mockMaterials.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="bg-slate-100 p-2 rounded-lg mr-3">
                        <Package size={18} className="text-slate-500" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">{item.name}</div>
                        <div className="text-xs text-slate-400">{item.id} • {item.location}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${item.study === 'Regulatory' ? 'bg-indigo-50 text-indigo-700' : 'bg-teal-50 text-teal-700'}`}>
                      {item.study}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-baseline space-x-1">
                      <span className={`font-bold ${item.qtyAvail < item.qtyReq ? 'text-rose-600' : 'text-emerald-600'}`}>
                        {item.qtyAvail}
                      </span>
                      <span className="text-slate-400">/</span>
                      <span>{item.qtyReq}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {getStatusBadge(item.status)}
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-slate-900">{item.vendor}</div>
                    <div className={`text-xs ${item.status === 'Delayed' ? 'text-rose-600 font-bold' : 'text-slate-500'}`}>
                      ETA: {item.eta}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right font-medium text-slate-900">
                    ${item.cost.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex justify-between items-center">
            <span className="text-xs text-slate-500">Showing 5 of 12 items</span>
            <div className="flex space-x-2">
                <button className="px-3 py-1 border border-slate-300 rounded text-xs hover:bg-white text-slate-600">Previous</button>
                <button className="px-3 py-1 border border-slate-300 rounded text-xs hover:bg-white text-slate-600">Next</button>
            </div>
        </div>
      </div>
    </div>
  );
};