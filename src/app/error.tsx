'use client';

import { useEffect } from 'react';
import { AlertCircle, RefreshCcw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center p-4 text-center">
      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-[2rem] bg-red-100 text-red-600 ring-8 ring-red-50">
        <AlertCircle size={48} strokeWidth={2.5} />
      </div>
      <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Gagal Memuat Dashboard</h2>
      <p className="mt-3 max-w-md text-slate-500 font-medium">
        Terjadi kesalahan saat mengambil data operasional. Silakan coba lagi dalam beberapa saat.
      </p>
      <button
        onClick={() => reset()}
        className="mt-8 flex items-center gap-2 rounded-2xl bg-slate-900 px-8 py-4 font-bold text-white transition-all hover:bg-slate-800 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/20 active:scale-95"
      >
        <RefreshCcw size={20} strokeWidth={2.5} />
        Coba Muat Ulang
      </button>
    </div>
  );
}
