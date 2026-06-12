import { financialMetrics } from '@/lib/mock-data';
import { Wallet, TrendingUp, TrendingDown, Factory, Scale } from 'lucide-react';

export default function BentoGrid() {
  const formatRp = (value: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('id-ID').format(value);
  };

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
      {/* Laba Bersih - Large Hero Card */}
      <div className="group relative overflow-hidden rounded-3xl bg-slate-900 p-6 sm:p-8 text-white md:col-span-2 md:row-span-2 shadow-xl shadow-slate-900/10">
        <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-yellow-400/10 blur-3xl transition-all duration-500 group-hover:bg-yellow-400/20"></div>
        <div className="relative z-10 flex h-full flex-col justify-between">
          <div>
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
              <Wallet className="text-yellow-400" size={28} />
            </div>
            <p className="text-sm font-semibold text-slate-400">Laba Bersih (Bulan Ini)</p>
            <h2 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl text-white">
              {formatRp(financialMetrics.netProfit)}
            </h2>
          </div>
          <div className="mt-10 flex items-center gap-3">
            <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1.5 text-sm font-bold text-emerald-400 backdrop-blur-sm border border-emerald-500/20">
              <TrendingUp size={16} strokeWidth={3} />
              <span>+{financialMetrics.revenueTrend}%</span>
            </div>
            <span className="text-sm font-medium text-slate-400">vs bulan lalu</span>
          </div>
        </div>
      </div>

      {/* Pendapatan Kotor */}
      <div className="group rounded-3xl border border-slate-200/60 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-slate-300 md:col-span-1 md:row-span-1">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition-transform group-hover:scale-105">
          <TrendingUp size={22} strokeWidth={2.5} />
        </div>
        <p className="text-sm font-semibold text-slate-500">Pendapatan Kotor</p>
        <h3 className="mt-1 text-2xl font-extrabold text-slate-900">{formatRp(financialMetrics.grossRevenue)}</h3>
      </div>

      {/* Total Pengeluaran */}
      <div className="group rounded-3xl border border-slate-200/60 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-slate-300 md:col-span-1 md:row-span-1">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition-transform group-hover:scale-105">
          <TrendingDown size={22} strokeWidth={2.5} />
        </div>
        <p className="text-sm font-semibold text-slate-500">Total Pengeluaran</p>
        <h3 className="mt-1 text-2xl font-extrabold text-slate-900">{formatRp(financialMetrics.totalExpenses)}</h3>
        <p className="mt-2 text-xs font-bold text-emerald-500 flex items-center gap-1">
          <TrendingDown size={14} /> {Math.abs(financialMetrics.expenseTrend)}% penghematan
        </p>
      </div>

      {/* Produksi Harian */}
      <div className="group rounded-3xl border border-yellow-500/20 bg-yellow-400 p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-400/20 md:col-span-1 md:row-span-1">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-500 text-slate-900 shadow-inner">
          <Factory size={22} strokeWidth={2.5} />
        </div>
        <p className="text-sm font-bold text-slate-800/80">Total Produksi Harian</p>
        <div className="mt-1 flex items-baseline gap-1">
          <h3 className="text-3xl font-black tracking-tight text-slate-900">{formatNumber(financialMetrics.dailyProductionKg)}</h3>
          <span className="font-bold text-slate-800">Kg</span>
        </div>
      </div>

      {/* Harga TBS */}
      <div className="group rounded-3xl border border-slate-200/60 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-slate-300 md:col-span-1 md:row-span-1">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-transform group-hover:scale-105">
          <Scale size={22} strokeWidth={2.5} />
        </div>
        <p className="text-sm font-semibold text-slate-500">Harga TBS per Kg</p>
        <h3 className="mt-1 text-2xl font-extrabold text-slate-900">{formatRp(financialMetrics.pricePerKgRp)}</h3>
        <p className="mt-2 text-xs font-medium text-slate-400">Pembaruan: Hari ini</p>
      </div>
    </div>
  );
}
