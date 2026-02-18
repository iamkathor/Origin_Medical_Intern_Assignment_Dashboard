import React from 'react';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';
import { KPIMetric } from '../types';

interface StatCardProps {
  metric: KPIMetric;
  icon: React.ReactNode;
}

export const StatCard: React.FC<StatCardProps> = ({ metric, icon }) => {
  const statusColors = {
    success: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    warning: 'bg-amber-50 text-amber-700 border-amber-200',
    danger: 'bg-rose-50 text-rose-700 border-rose-200',
  };

  const trendColors = {
    success: 'text-emerald-600',
    warning: 'text-amber-600',
    danger: 'text-rose-600',
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-2 rounded-lg ${statusColors[metric.status]} bg-opacity-50`}>
          {icon}
        </div>
        {metric.trend && (
          <span className={`text-xs font-medium flex items-center ${trendColors[metric.status]}`}>
            {metric.status === 'success' ? <ArrowUpRight size={14} className="mr-1" /> : 
             metric.status === 'danger' ? <ArrowDownRight size={14} className="mr-1" /> : 
             <Minus size={14} className="mr-1"/>}
            {metric.trend}
          </span>
        )}
      </div>
      <div>
        <h3 className="text-slate-500 text-sm font-medium uppercase tracking-wider">{metric.label}</h3>
        <div className="flex items-baseline mt-1">
          <span className="text-2xl font-bold text-slate-900">{metric.value}</span>
          {metric.unit && <span className="ml-1 text-sm text-slate-500">{metric.unit}</span>}
        </div>
      </div>
    </div>
  );
};