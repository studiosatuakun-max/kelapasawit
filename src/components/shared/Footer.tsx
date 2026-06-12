import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200/60 bg-white mt-12 py-8">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm font-medium text-slate-500">
          &copy; {new Date().getFullYear()} SawitPro Dashboard. All rights reserved.
        </p>
        <div className="flex items-center gap-1.5 text-sm font-bold text-slate-700 bg-slate-50 px-4 py-2 rounded-full ring-1 ring-slate-200/60">
          Dibuat dengan <Heart size={16} className="text-red-500 fill-red-500 mx-0.5" /> oleh <span className="text-yellow-600 ml-0.5">PT Studio Satu Akun</span>
        </div>
      </div>
    </footer>
  );
}
