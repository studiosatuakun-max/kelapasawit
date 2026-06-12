'use client';

import { useState, useActionState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Plus, X, Loader2, CheckCircle2 } from 'lucide-react';
import { createActivityAction } from '@/app/actions';

export default function AddActivityButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // React 19 / Next.js 15: useActionState untuk form actions
  const [state, formAction, isPending] = useActionState(createActivityAction, null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Efek untuk menutup modal secara otomatis setelah sukses
  useEffect(() => {
    if (state?.success) {
      const timer = setTimeout(() => {
        setIsOpen(false);
      }, 2500); // Tunggu 2.5 detik untuk memperlihatkan pesan sukses
      return () => clearTimeout(timer);
    }
  }, [state?.timestamp]);

  // Efek untuk memblokir scroll body saat modal terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const modalContent = isOpen ? (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-300">
        <div className="flex items-center justify-between border-b border-slate-100 p-6">
          <div>
            <h2 className="text-xl font-extrabold text-slate-900">Input Aktivitas Baru</h2>
            <p className="text-sm text-slate-500 font-medium mt-1">Catat log operasional harian kebun</p>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="rounded-xl p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors active:scale-95"
          >
            <X size={20} strokeWidth={2.5} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {state?.success ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4 animate-in zoom-in-95 duration-500">
              <div className="flex h-20 w-20 items-center justify-center rounded-[2rem] bg-emerald-100 text-emerald-600 ring-8 ring-emerald-50">
                <CheckCircle2 size={40} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900">Berhasil Disimpan!</h3>
                <p className="text-sm font-medium text-slate-500 mt-2">{state.message}</p>
              </div>
            </div>
          ) : (
            <form action={formAction} className="space-y-5 animate-in fade-in duration-300">
              <div className="space-y-2">
                <label htmlFor="blockName" className="text-sm font-extrabold text-slate-700">Nama Blok Wilayah</label>
                <select id="blockName" name="blockName" required className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm font-semibold text-slate-900 outline-none transition-all focus:border-yellow-400 focus:bg-white focus:ring-4 focus:ring-yellow-400/20">
                  <option value="">Pilih Blok...</option>
                  <option value="Blok A1 - Utara">Blok A1 - Utara</option>
                  <option value="Blok A2 - Utara">Blok A2 - Utara</option>
                  <option value="Blok B3 - Timur">Blok B3 - Timur</option>
                  <option value="Blok C2 - Selatan">Blok C2 - Selatan</option>
                  <option value="Blok D1 - Barat">Blok D1 - Barat</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="activity" className="text-sm font-extrabold text-slate-700">Jenis Aktivitas</label>
                  <select id="activity" name="activity" required className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm font-semibold text-slate-900 outline-none transition-all focus:border-yellow-400 focus:bg-white focus:ring-4 focus:ring-yellow-400/20">
                    <option value="Panen">Panen</option>
                    <option value="Pupuk">Pupuk</option>
                    <option value="Pruning">Pruning</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="date" className="text-sm font-extrabold text-slate-700">Tanggal</label>
                  <input type="date" id="date" name="date" required defaultValue={new Date().toISOString().split('T')[0]} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm font-semibold text-slate-900 outline-none transition-all focus:border-yellow-400 focus:bg-white focus:ring-4 focus:ring-yellow-400/20" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="yieldKg" className="text-sm font-extrabold text-slate-700">Hasil (Kg)</label>
                  <input type="number" id="yieldKg" name="yieldKg" min="0" placeholder="0 (Opsional)" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm font-semibold text-slate-900 outline-none transition-all focus:border-yellow-400 focus:bg-white focus:ring-4 focus:ring-yellow-400/20" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="costRp" className="text-sm font-extrabold text-slate-700">Biaya (Rp)</label>
                  <input type="number" id="costRp" name="costRp" min="0" required placeholder="Contoh: 2500000" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm font-semibold text-slate-900 outline-none transition-all focus:border-yellow-400 focus:bg-white focus:ring-4 focus:ring-yellow-400/20" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="status" className="text-sm font-extrabold text-slate-700">Status Penyelesaian</label>
                <select id="status" name="status" required className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm font-semibold text-slate-900 outline-none transition-all focus:border-yellow-400 focus:bg-white focus:ring-4 focus:ring-yellow-400/20">
                  <option value="Selesai">Selesai</option>
                  <option value="Proses">Proses</option>
                  <option value="Tertunda">Tertunda</option>
                </select>
              </div>

              <div className="pt-8">
                <button 
                  type="submit" 
                  disabled={isPending}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-4 py-4 font-extrabold text-slate-900 transition-all hover:bg-yellow-500 hover:-translate-y-1 active:scale-95 shadow-xl shadow-yellow-400/30 disabled:opacity-70 disabled:hover:translate-y-0 disabled:active:scale-100 disabled:shadow-none"
                >
                  {isPending ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      <span>Menyimpan ke Database...</span>
                    </>
                  ) : (
                    <span>Simpan Data Operasional</span>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-bold text-white transition-all hover:bg-slate-800 hover:-translate-y-0.5 active:scale-95 shadow-lg shadow-slate-900/20"
      >
        <Plus size={18} strokeWidth={2.5} />
        <span className="hidden sm:inline">Tambah Data</span>
      </button>

      {mounted && typeof document !== 'undefined' && createPortal(modalContent, document.body)}
    </>
  );
}
