export type ActivityType = 'Panen' | 'Pupuk' | 'Pruning';
export type ActivityStatus = 'Selesai' | 'Proses' | 'Tertunda';

export interface BlockDetail {
  id: string;
  name: string;
  totalYieldKg: number;
  nextHarvestSchedule: string;
  lastFertilization: string;
  lastPruning: string;
  status: 'Aman' | 'Perhatian';
}

export interface BlockActivity {
  id: string;
  blockName: string;
  activity: ActivityType;
  yieldKg: number;
  costRp: number;
  status: ActivityStatus;
  date: string;
}

export interface FinancialMetric {
  grossRevenue: number;
  totalExpenses: number;
  netProfit: number;
  dailyProductionKg: number;
  pricePerKgRp: number;
  revenueTrend: number;
  expenseTrend: number;
}
