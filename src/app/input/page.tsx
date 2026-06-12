'use client';

import { useState, useActionState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Scale, CalendarClock, Leaf, Scissors, Save, Loader2, CheckCircle2, Wallet, TrendingUp, TrendingDown, Factory } from 'lucide-react';
import { updateBlockDataAction, updateFinancialDataAction } from '@/app/actions';

export default function InputDashboard() {
  const [activeTab, setActiveTab] = useState<'operasional' | 'keuangan'>('operasional');
  const [selectedBlock, setSelectedBlock] = useState('');
  
  const [blockState, blockFormAction, isBlockPending] = useActionState(updateBlockDataAction, null);
  const [financeState, financeFormAction, isFinancePending] = useActionState(updateFinancialDataAction, null);

  // Success screen for Block
  if (blockState?.success) {
    return (
      <div className="container mx-auto p-4 lg:p-8 max-w-4xl animate-in fade-in zoom-in-95 duration-500">
        <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-slate-200/60 shadow-sm">
          <div className="flex h-24 w-24 items-center justify-center rounded-[3rem] bg-emerald-100 text-emerald-600 ring-8 ring-emerald-50 mb-6">
            <CheckCircle2 size={48} strokeWidth={2.5} />
          </div>
          <h2 className="text-2xl font-black text-slate-900">Operasional Disimpan!</h2>
          <p className="text-slate-500 font-medium mt-2">{blockState.message}</p>
          <Link href="/" className="mt-8 px-6 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20">
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    );
  }

  // Success screen for Finance
  if (financeState?.success) {
    return (
      <div className="container mx-auto p-4 lg:p-8 max-w-4xl animate-in fade-in zoom-in-95 duration-500">
        <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-slate-200/60 shadow-sm">
          <div className="flex h-24 w-24 items-center justify-center rounded-[3rem] bg-emerald-100 text-emerald-600 ring-8 ring-emerald-50 mb-6">
            <CheckCircle2 size={48} strokeWidth={2.5} />
          </div>
          <h2 className="text-2xl font-black text-slate-900">Keuangan Disimpan!</h2>
          <p className="text-slate-500 font-medium mt-2">{financeState.message}</p>
          <Link href="/" className="mt-8 px-6 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20">
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 lg:p-8 max-w-6xl animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <Link 
            href="/" 
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm shrink-0"
          >
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">Dashboard Input Data</h1>
            <p className="text-sm sm:text-base text-slate-500 font-medium mt-1">Pusat kendali operasional dan finansial kebun.</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex p-1.5 bg-slate-200/50 rounded-2xl w-full md:w-auto">
          <button 
            onClick={() => setActiveTab('operasional')}
            className={`flex-1 md:w-48 py-2.5 text-sm font-bold rounded-xl transition-all ${activeTab === 'operasional' ? 'bg-white text-slate-900 shadow-sm ring-1 ring-slate-200/50' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Operasional Blok
          </button>
          <button 
            onClick={() => setActiveTab('keuangan')}
            className={`flex-1 md:w-48 py-2.5 text-sm font-bold rounded-xl transition-all ${activeTab === 'keuangan' ? 'bg-white text-slate-900 shadow-sm ring-1 ring-slate-200/50' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Data Keuangan
          </button>
        </div>
      </div>

      {activeTab === 'operasional' ? (
        <form action={blockFormAction} className="space-y-8 animate-in fade-in duration-500">
          {/* Pemilihan Blok */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/60 shadow-sm">
            <label htmlFor="blockName" className="block text-sm font-extrabold text-slate-700 mb-3">Pilih Blok Target</label>
            <select 
              id="blockName" 
              name="blockName" 
              required 
              value={selectedBlock}
              onChange={(e) => setSelectedBlock(e.target.value)}
              className="w-full md:w-1/2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-base font-semibold text-slate-900 outline-none transition-all focus:border-yellow-400 focus:bg-white focus:ring-4 focus:ring-yellow-400/20"
            >
              <option value="">Pilih Blok...</option>
              <option value="Blok A1 - Utara">Blok A1 - Utara</option>
              <option value="Blok B3 - Timur">Blok B3 - Timur</option>
              <option value="Blok C2 - Selatan">Blok C2 - Selatan</option>
              <option value="Blok D1 - Barat">Blok D1 - Barat</option>
            </select>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-opacity duration-300 ${selectedBlock ? 'opacity-100' : 'opacity-40 pointer-events-none'}`}>
            
            {/* 1. Hasil Panen */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/60 shadow-sm relative overflow-hidden group">
              <div className="absolute -right-6 -top-6 text-yellow-50 opacity-50 group-hover:scale-110 transition-transform duration-500">
                <Scale size={120} strokeWidth={2} />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-100 text-yellow-600">
                    <Scale size={20} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Hasil Panen</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-2">Tanggal Panen</label>
                    <input type="date" name="harvestDate" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/20" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-2">Jumlah Panen (Kg)</label>
                    <input type="number" name="yieldKg" min="0" placeholder="0" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/20" />
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Jadwal Panen */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/60 shadow-sm relative overflow-hidden group">
              <div className="absolute -right-6 -top-6 text-blue-50 opacity-50 group-hover:scale-110 transition-transform duration-500">
                <CalendarClock size={120} strokeWidth={2} />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <CalendarClock size={20} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Jadwal Panen</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-2">Estimasi Tanggal Panen Berikutnya</label>
                    <input type="date" name="nextHarvestDate" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-2">Status Kesiapan</label>
                    <select name="harvestStatus" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20">
                      <option value="Sesuai Jadwal">Sesuai Jadwal</option>
                      <option value="Ditunda">Ditunda</option>
                      <option value="Dipercepat">Dipercepat</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Pemupukan */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/60 shadow-sm relative overflow-hidden group">
              <div className="absolute -right-6 -top-6 text-emerald-50 opacity-50 group-hover:scale-110 transition-transform duration-500">
                <Leaf size={120} strokeWidth={2} />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <Leaf size={20} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Pemupukan</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-2">Tanggal Pemupukan Terakhir</label>
                    <input type="date" name="fertilizationDate" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/20" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-2">Jenis Pupuk</label>
                    <input type="text" name="fertilizerType" placeholder="Contoh: NPK, Urea" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/20" />
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Pruning */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/60 shadow-sm relative overflow-hidden group">
              <div className="absolute -right-6 -top-6 text-purple-50 opacity-50 group-hover:scale-110 transition-transform duration-500">
                <Scissors size={120} strokeWidth={2} />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                    <Scissors size={20} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Pruning</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-2">Tanggal Pruning Terakhir</label>
                    <input type="date" name="pruningDate" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-400/20" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-2">Catatan Kondisi Pelepah</label>
                    <input type="text" name="pruningNotes" placeholder="Contoh: Normal, Terlalu Lebat" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-400/20" />
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="flex justify-end pt-4">
            <button 
              type="submit" 
              disabled={isBlockPending || !selectedBlock}
              className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-8 py-4 font-bold text-white transition-all hover:bg-slate-800 hover:-translate-y-1 active:scale-95 shadow-xl shadow-slate-900/20 disabled:opacity-50 disabled:hover:translate-y-0 disabled:active:scale-100 disabled:shadow-none"
            >
              {isBlockPending ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  <span>Menyimpan Operasional...</span>
                </>
              ) : (
                <>
                  <Save size={20} />
                  <span>Simpan Data Blok</span>
                </>
              )}
            </button>
          </div>
        </form>
      ) : (
        <form action={financeFormAction} className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-500">
          {/* Form Keuangan */}
          <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200/60 shadow-sm space-y-8">
            <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                <Wallet size={24} strokeWidth={2.5} />
              </div>
              <div>
                <h2 className="text-xl font-black text-slate-900">Pembaruan Laporan Keuangan</h2>
                <p className="text-sm font-medium text-slate-500 mt-1">Masukkan nominal rupiah secara akurat.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-extrabold text-slate-700 mb-2">Periode Laporan</label>
                <input type="month" name="period" required defaultValue={new Date().toISOString().slice(0,7)} className="w-full md:w-1/2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-base font-semibold text-slate-900 outline-none transition-all focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-400/20" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-extrabold text-slate-700">
                    <TrendingUp size={16} className="text-emerald-500" />
                    Total Pemasukan (Gross Revenue)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-3.5 text-base font-bold text-slate-400">Rp</span>
                    <input type="number" name="revenue" required min="0" placeholder="0" className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-12 pr-4 py-3.5 text-base font-semibold text-slate-900 outline-none transition-all focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-400/20" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-extrabold text-slate-700">
                    <TrendingDown size={16} className="text-red-500" />
                    Total Pengeluaran (Expenses)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-3.5 text-base font-bold text-slate-400">Rp</span>
                    <input type="number" name="expenses" required min="0" placeholder="0" className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-12 pr-4 py-3.5 text-base font-semibold text-slate-900 outline-none transition-all focus:border-red-400 focus:bg-white focus:ring-4 focus:ring-red-400/20" />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-extrabold text-slate-700">
                    <Factory size={16} className="text-amber-500" />
                    Harga CPO Saat Ini (Opsional)
                  </label>
                  <div className="relative w-full md:w-1/2">
                    <span className="absolute left-4 top-3.5 text-base font-bold text-slate-400">Rp</span>
                    <input type="number" name="cpoPrice" min="0" placeholder="Misal: 12500" className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-12 pr-12 py-3.5 text-base font-semibold text-slate-900 outline-none transition-all focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-400/20" />
                    <span className="absolute right-4 top-3.5 text-base font-bold text-slate-400">/ Kg</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <button 
              type="submit" 
              disabled={isFinancePending}
              className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 font-bold text-white transition-all hover:bg-indigo-700 hover:-translate-y-1 active:scale-95 shadow-xl shadow-indigo-600/30 disabled:opacity-50 disabled:hover:translate-y-0 disabled:active:scale-100 disabled:shadow-none"
            >
              {isFinancePending ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  <span>Menyimpan Keuangan...</span>
                </>
              ) : (
                <>
                  <Save size={20} />
                  <span>Simpan Data Keuangan</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
