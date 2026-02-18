export type ViewState = 'dashboard' | 'materials' | 'research' | 'resources';

export interface MaterialItem {
  id: string;
  name: string;
  study: 'Pilot' | 'Regulatory' | 'Shared';
  qtyReq: number;
  qtyAvail: number;
  status: 'PO Raised' | 'Approved' | 'Shipped' | 'Delivered' | 'Invoiced' | 'Delayed';
  vendor: string;
  eta: string; // e.g., "Week 5"
  cost: number;
  location: string;
}

export interface DocumentItem {
  id: string;
  name: string;
  type: 'Pilot' | 'Regulatory' | 'Shared';
  status: 'Draft' | 'Internal Review' | 'Approved' | 'Submitted';
  owner: string;
  dueDate: string;
}

export interface TravelItem {
  id: string;
  person: string;
  destination: string;
  status: 'Planning' | 'Visa Pending' | 'Booked' | 'Confirmed';
  cost: number;
}

export interface ResourceAllocation {
  person: string;
  role: string;
  pilot: number;
  conference: number;
  regPrep: number;
  roadshow: number;
}

export interface KPIMetric {
  label: string;
  value: number | string;
  unit?: string;
  status: 'success' | 'warning' | 'danger';
  trend?: string;
}