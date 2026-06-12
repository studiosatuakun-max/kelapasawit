import { Sprout, Bell, Search } from 'lucide-react';
import AddActivityButton from '../input/AddActivityButton';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400 text-slate-900 shadow-sm transition-transform hover:scale-105">
            <Sprout size={24} strokeWidth={2.5} />
          </div>
          <h1 className="text-xl font-bold tracking-tight text-slate-900">
            Sawit<span className="text-yellow-500">Pro</span>
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden items-center rounded-full bg-slate-50 px-3 py-2 text-slate-500 ring-1 ring-inset ring-slate-200 transition-all focus-within:ring-yellow-400 focus-within:bg-white md:flex">
            <Search size={18} />
            <input 
              type="text" 
              placeholder="Cari blok atau aktivitas..." 
              className="ml-2 w-48 bg-transparent text-sm font-medium outline-none placeholder:text-slate-400 placeholder:font-normal"
            />
          </div>
          
          <AddActivityButton />

          <button aria-label="Notifikasi" className="relative flex h-10 w-10 items-center justify-center rounded-full text-slate-600 transition-all hover:bg-slate-100 active:scale-95">
            <Bell size={20} />
            <span className="absolute right-2 top-2 flex h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white"></span>
          </button>
          <div className="h-10 w-10 cursor-pointer rounded-full bg-slate-200 bg-[url('https://api.dicebear.com/7.x/avataaars/svg?seed=Manager')] bg-cover shadow-sm ring-2 ring-white transition-all active:scale-95"></div>
        </div>
      </div>
    </header>
  );
}
