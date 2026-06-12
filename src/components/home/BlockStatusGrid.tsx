'use client';

import { useState } from 'react';
import { blocksData } from '@/lib/mock-data';
import { Scale, CalendarClock, Leaf, Scissors, ChevronDown } from 'lucide-react';

export default function BlockStatusGrid() {
  const [expandedBlocks, setExpandedBlocks] = useState<Record<string, boolean>>({});

  const toggleBlock = (id: string) => {
    setExpandedBlocks(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('id-ID').format(value);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Status Wilayah Per Blok</h2>
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">Pantau jadwal dan hasil operasional secara mendetail untuk masing-masing area kebun.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {blocksData.map((block) => {
          const isExpanded = expandedBlocks[block.id];

          return (
            <div key={block.id} className="group rounded-3xl border border-slate-200 dark:border-slate-800/60 bg-white dark:bg-slate-900 p-5 sm:p-6 shadow-sm transition-all hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1">
              {/* Header (Always Visible) */}
              <div 
                className="flex items-center justify-between cursor-pointer md:cursor-default"
                onClick={() => toggleBlock(block.id)}
              >
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white leading-tight">{block.name}</h3>
                  <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] sm:text-xs font-bold ring-1 ring-inset ${
                    block.status === 'Aman' 
                      ? 'bg-emerald-50 text-emerald-700 ring-emerald-600/20' 
                      : 'bg-orange-50 text-orange-700 ring-orange-600/20'
                  }`}>
                    {block.status}
                  </span>
                </div>
                {/* Mobile Accordion Icon */}
                <button aria-label="Toggle detail blok" className="md:hidden flex items-center justify-center h-8 w-8 rounded-full bg-slate-50 dark:bg-slate-950/50 text-slate-400">
                  <ChevronDown size={18} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* Body (Collapsible on Mobile) */}
              <div 
                className={`grid transition-all duration-300 ease-in-out md:grid-rows-[1fr] md:opacity-100 md:mt-8 ${
                  isExpanded ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'
                }`}
              >
                <div className="overflow-hidden space-y-5">
                  {/* Hasil Panen */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-600 group-hover:bg-yellow-400 group-hover:text-slate-900 dark:text-white transition-colors shadow-inner">
                      <Scale size={20} strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400">Total Hasil Panen</p>
                      <p className="text-base font-extrabold text-slate-900 dark:text-white mt-0.5">{formatNumber(block.totalYieldKg)} Kg</p>
                    </div>
                  </div>

                  {/* Jadwal Panen */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-inner">
                      <CalendarClock size={20} strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400">Jadwal Panen</p>
                      <p className="text-base font-extrabold text-slate-900 dark:text-white mt-0.5">{block.nextHarvestSchedule}</p>
                    </div>
                  </div>

                  {/* Pemupukan */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 shadow-inner">
                      <Leaf size={20} strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400">Status Pemupukan</p>
                      <p className="text-base font-extrabold text-slate-900 dark:text-white mt-0.5">{block.lastFertilization}</p>
                    </div>
                  </div>

                  {/* Pruning */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 shadow-inner">
                      <Scissors size={20} strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400">Pruning Terakhir</p>
                      <p className="text-base font-extrabold text-slate-900 dark:text-white mt-0.5">{block.lastPruning}</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}
