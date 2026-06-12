import { Sprout, Bell, Search, Plus } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        
        {/* Logo & Brand */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-400 text-slate-900 shadow-sm">
            <Sprout size={22} strokeWidth={2.5} />
          </div>
          <span className="text-xl font-black tracking-tight text-slate-900">
            Sawit<span className="text-yellow-500">Pro</span>
          </span>
        </div>

        {/* Global Search (Mockup) */}
        <div className="hidden md:flex relative w-96 items-center">
          <Search className="absolute left-3 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Cari blok, mandor, atau aktivitas..." 
            className="w-full rounded-full border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-sm font-semibold text-slate-900 outline-none transition-all focus:border-yellow-400 focus:bg-white focus:ring-4 focus:ring-yellow-400/20"
          />
        </div>

        {/* Actions & Profile */}
        <div className="flex items-center gap-3">
          <button className="relative rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700 active:scale-95">
            <Bell size={20} />
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
          </button>
          
          <div className="h-8 w-[1px] bg-slate-200 mx-1 hidden sm:block"></div>

          <Link 
            href="/input"
            className="flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-bold text-white transition-all hover:bg-slate-800 hover:-translate-y-0.5 active:scale-95 shadow-lg shadow-slate-900/20"
          >
            <Plus size={18} strokeWidth={2.5} />
            <span className="hidden sm:inline">Input Data</span>
          </Link>
          
          {/* Avatar Profile (Mockup) */}
          <div className="ml-2 h-9 w-9 cursor-pointer rounded-full border-2 border-slate-200 bg-slate-100 p-0.5 transition-transform hover:scale-105 active:scale-95">
            <div className="h-full w-full rounded-full bg-gradient-to-tr from-yellow-400 to-orange-400"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
