import BentoGrid from '@/components/home/BentoGrid';
import DataTable from '@/components/home/DataTable';
import AnalyticsChart from '@/components/home/AnalyticsChart';
import BlockStatusGrid from '@/components/home/BlockStatusGrid';

export default function Home() {
  return (
    <div className="container mx-auto p-4 lg:p-8 space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="mb-2">
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">Ringkasan Dashboard</h1>
        <p className="mt-2 text-slate-500 font-medium text-lg max-w-2xl">Pantau kinerja keuangan dan operasional perkebunan Anda hari ini dengan wawasan yang jelas dan langsung ke sasaran.</p>
      </header>
      
      {/* 1. Highlight Keuangan */}
      <section>
        <BentoGrid />
      </section>

      {/* 2. Status Wilayah Per Blok */}
      <section>
        <BlockStatusGrid />
      </section>

      {/* Bottom Section: Chart & Table */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {/* 3. Detail Operasional (Logs) */}
          <DataTable />
        </div>
        <div className="lg:col-span-1">
          {/* 4. Visualisasi Analitik */}
          <AnalyticsChart />
        </div>
      </section>
    </div>
  );
}
