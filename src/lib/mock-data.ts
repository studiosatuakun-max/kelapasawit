import { BlockActivity, FinancialMetric, BlockDetail } from '@/types';

export const financialMetrics: FinancialMetric = {
  grossRevenue: 1250000000, // Rp 1.25M
  totalExpenses: 450000000, // Rp 450M
  netProfit: 800000000,     // Rp 800M
  dailyProductionKg: 85000, // 85 Ton
  pricePerKgRp: 2500,
  revenueTrend: 12.5,
  expenseTrend: -5.2,
};

export const blockActivities: BlockActivity[] = [
  {
    id: 'ACT-001',
    blockName: 'Blok A1 - Utara',
    activity: 'Panen',
    yieldKg: 12500,
    costRp: 2500000,
    status: 'Selesai',
    date: '2026-06-12',
  },
  {
    id: 'ACT-002',
    blockName: 'Blok B3 - Timur',
    activity: 'Pupuk',
    yieldKg: 0,
    costRp: 15000000,
    status: 'Proses',
    date: '2026-06-12',
  },
  {
    id: 'ACT-003',
    blockName: 'Blok C2 - Selatan',
    activity: 'Pruning',
    yieldKg: 0,
    costRp: 1200000,
    status: 'Selesai',
    date: '2026-06-11',
  },
  {
    id: 'ACT-004',
    blockName: 'Blok A2 - Utara',
    activity: 'Panen',
    yieldKg: 9800,
    costRp: 1960000,
    status: 'Selesai',
    date: '2026-06-11',
  },
  {
    id: 'ACT-005',
    blockName: 'Blok D1 - Barat',
    activity: 'Pupuk',
    yieldKg: 0,
    costRp: 10000000,
    status: 'Tertunda',
    date: '2026-06-10',
  },
];

export const blocksData: BlockDetail[] = [
  {
    id: 'B-001',
    name: 'Blok A1 - Utara',
    totalYieldKg: 125000,
    nextHarvestSchedule: 'Besok',
    lastFertilization: '2 Minggu Lalu',
    lastPruning: '1 Bulan Lalu',
    status: 'Aman',
  },
  {
    id: 'B-002',
    name: 'Blok B3 - Timur',
    totalYieldKg: 98000,
    nextHarvestSchedule: '3 Hari Lagi',
    lastFertilization: 'Hari Ini',
    lastPruning: '2 Bulan Lalu',
    status: 'Perhatian',
  },
  {
    id: 'B-003',
    name: 'Blok C2 - Selatan',
    totalYieldKg: 145000,
    nextHarvestSchedule: 'Minggu Depan',
    lastFertilization: '1 Bulan Lalu',
    lastPruning: 'Kemarin',
    status: 'Aman',
  },
  {
    id: 'B-004',
    name: 'Blok D1 - Barat',
    totalYieldKg: 75000,
    nextHarvestSchedule: 'Hari Ini',
    lastFertilization: '3 Bulan Lalu',
    lastPruning: '3 Bulan Lalu',
    status: 'Perhatian',
  },
];
