'use client';

import { useState, useEffect } from 'react';
import { BarChart3, LineChart } from 'lucide-react';

export default function AnalyticsChart() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<'produksi' | 'pengeluaran'>('produksi');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex h-full min-h-[400px] w-full animate-pulse flex-col rounded-3xl border border-slate-200 dark:border-slate-800/60 bg-white dark:bg-slate-900 p-6">
        <div className="mb-6 flex justify-between">
          <div className="h-8 w-32 rounded-xl bg-slate-100"></div>
          <div className="h-8 w-48 rounded-xl bg-slate-100"></div>
        </div>
        <div className="flex-1 rounded-2xl bg-slate-50 dark:bg-slate-950/50"></div>
      </div>
    );
  }

  return (
    <div className="flex h-full min-h-[400px] flex-col rounded-3xl border border-slate-200 dark:border-slate-800/60 bg-white dark:bg-slate-900 p-6 shadow-sm">
      <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">Tren Analitik</h2>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">Visualisasi mingguan</p>
        </div>
        <div className="flex items-center rounded-xl bg-slate-100/80 p-1 shadow-inner">
          <button 
            onClick={() => setActiveTab('produksi')}
            className={`flex items-center gap-2 rounded-lg px-4 py-1.5 text-sm font-bold transition-all ${
              activeTab === 'produksi' 
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm' 
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:text-slate-300'
            }`}
          >
            <BarChart3 size={16} />
            Produksi
          </button>
          <button 
            onClick={() => setActiveTab('pengeluaran')}
            className={`flex items-center gap-2 rounded-lg px-4 py-1.5 text-sm font-bold transition-all ${
              activeTab === 'pengeluaran' 
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm' 
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:text-slate-300'
            }`}
          >
            <LineChart size={16} />
            Pengeluaran
          </button>
        </div>
      </div>

      {/* Chart Placeholder / Mockup */}
      <div className="relative flex-1 flex items-end gap-2 pb-8 pt-10 mt-4">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-10 bottom-8 flex flex-col justify-between text-xs font-bold text-slate-400">
          <span>{activeTab === 'produksi' ? '100T' : '50M'}</span>
          <span>{activeTab === 'produksi' ? '75T' : '37M'}</span>
          <span>{activeTab === 'produksi' ? '50T' : '25M'}</span>
          <span>{activeTab === 'produksi' ? '25T' : '12M'}</span>
          <span>0</span>
        </div>
        
        {/* Horizontal Grid lines */}
        <div className="absolute inset-x-10 top-10 bottom-8 flex flex-col justify-between">
          <div className="w-full border-t border-slate-200 dark:border-slate-800 border-dashed"></div>
          <div className="w-full border-t border-slate-200 dark:border-slate-800 border-dashed"></div>
          <div className="w-full border-t border-slate-200 dark:border-slate-800 border-dashed"></div>
          <div className="w-full border-t border-slate-200 dark:border-slate-800 border-dashed"></div>
          <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
        </div>

        {/* Bars */}
        <div className="relative z-10 flex h-full w-full items-end justify-between px-2 sm:px-8 gap-2 sm:gap-4">
          {[40, 65, 45, 80, 55, 90, 75].map((height, i) => (
            <div key={i} className="group relative flex flex-1 flex-col items-center justify-end h-full">
              <div 
                className={`w-full max-w-[3.5rem] rounded-t-xl transition-all duration-700 group-hover:opacity-80 group-hover:-translate-y-1 ${
                  activeTab === 'produksi' ? 'bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.4)]' : 'bg-slate-800 shadow-[0_0_15px_rgba(30,41,59,0.4)]'
                }`}
                style={{ height: `${height}%` }}
              ></div>
              <span className="absolute -bottom-7 text-xs font-bold text-slate-500 dark:text-slate-400">
                {['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'][i]}
              </span>
              
              {/* Tooltip on hover */}
              <div className="absolute -top-12 hidden rounded-xl bg-slate-900 px-3 py-2 text-xs font-bold text-white shadow-xl group-hover:block whitespace-nowrap animate-in fade-in slide-in-from-bottom-2">
                {activeTab === 'produksi' ? `${height * 1.5} Ton` : `Rp${height * 2} Juta`}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
