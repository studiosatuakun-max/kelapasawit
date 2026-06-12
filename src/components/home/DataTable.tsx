import { blockActivities } from '@/lib/mock-data';
import { ActivityStatus, ActivityType } from '@/types';
import { Calendar, MapPin, MoreHorizontal } from 'lucide-react';

export default function DataTable() {
  const formatRp = (value: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const getActivityBadge = (type: ActivityType) => {
    switch (type) {
      case 'Panen':
        return 'bg-emerald-100 text-emerald-800 ring-emerald-600/20';
      case 'Pupuk':
        return 'bg-yellow-100 text-yellow-800 ring-yellow-600/20';
      case 'Pruning':
        return 'bg-blue-100 text-blue-800 ring-blue-600/20';
      default:
        return 'bg-slate-100 text-slate-800 ring-slate-600/20';
    }
  };

  const getStatusBadge = (status: ActivityStatus) => {
    switch (status) {
      case 'Selesai':
        return 'bg-emerald-50 text-emerald-700 ring-emerald-600/20';
      case 'Proses':
        return 'bg-blue-50 text-blue-700 ring-blue-600/20';
      case 'Tertunda':
        return 'bg-red-50 text-red-700 ring-red-600/20';
      default:
        return 'bg-slate-50 text-slate-700 ring-slate-600/20';
    }
  };

  return (
    <div className="rounded-3xl border border-slate-200/60 bg-white shadow-sm overflow-hidden flex flex-col h-full">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-100 p-6 gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900">Detail Operasional</h2>
          <p className="text-sm font-medium text-slate-500 mt-1">Log aktivitas kebun per blok wilayah</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50 active:scale-95">
            <Calendar size={16} />
            <span>Filter Tanggal</span>
          </button>
        </div>
      </div>
      
      <div className="overflow-x-auto flex-1">
        <table className="w-full text-left text-sm text-slate-600">
          <thead className="bg-slate-50/80 text-slate-500 border-b border-slate-100">
            <tr>
              <th className="whitespace-nowrap px-6 py-4 font-bold">Nama Blok</th>
              <th className="whitespace-nowrap px-6 py-4 font-bold">Aktivitas</th>
              <th className="whitespace-nowrap px-6 py-4 font-bold">Hasil (Kg)</th>
              <th className="whitespace-nowrap px-6 py-4 font-bold">Biaya</th>
              <th className="whitespace-nowrap px-6 py-4 font-bold">Status</th>
              <th className="whitespace-nowrap px-6 py-4 font-bold text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {blockActivities.map((activity) => (
              <tr key={activity.id} className="transition-colors hover:bg-slate-50/80 group">
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-500 transition-colors group-hover:bg-white group-hover:shadow-sm">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">{activity.blockName}</div>
                      <div className="text-xs font-medium text-slate-400">{activity.date}</div>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-bold ring-1 ring-inset ${getActivityBadge(activity.activity)}`}>
                    {activity.activity}
                  </span>
                </td>
                <td className="whitespace-nowrap px-6 py-4 font-bold text-slate-900">
                  {activity.yieldKg > 0 ? activity.yieldKg.toLocaleString('id-ID') : '-'}
                </td>
                <td className="whitespace-nowrap px-6 py-4 font-bold text-slate-900">
                  {formatRp(activity.costRp)}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-bold ring-1 ring-inset ${getStatusBadge(activity.status)}`}>
                    {activity.status}
                  </span>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-right">
                  <button className="inline-flex h-9 w-9 items-center justify-center rounded-xl text-slate-400 transition-all hover:bg-slate-100 hover:text-slate-700 active:scale-95">
                    <MoreHorizontal size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
