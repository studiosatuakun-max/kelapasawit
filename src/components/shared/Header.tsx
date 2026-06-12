'use client';

import { Sprout, Bell, Search, Plus, Sun, Moon } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md transition-colors">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        
        {/* Logo & Brand */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-400 text-slate-900 shadow-sm">
            <Sprout size={22} strokeWidth={2.5} />
          </div>
          <span className="text-xl font-black tracking-tight text-slate-900 dark:text-white">
            Sawit<span className="text-yellow-500">Pro</span>
          </span>
        </div>

        {/* Global Search */}
        <div className="hidden md:flex relative w-96 items-center">
          <Search className="absolute left-3 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Cari blok, mandor, atau aktivitas..." 
            className="w-full rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 py-2 pl-10 pr-4 text-sm font-semibold text-slate-900 dark:text-white outline-none transition-all focus:border-yellow-400 focus:bg-white dark:focus:bg-slate-950 focus:ring-4 focus:ring-yellow-400/20"
          />
        </div>

        {/* Actions & Profile */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          {mounted && (
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="relative rounded-full p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}

          <button className="relative rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-slate-200 active:scale-95">
            <Bell size={20} />
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-slate-950"></span>
          </button>
          
          <div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-800 mx-1 hidden sm:block"></div>

          <Link 
            href="/input"
            className="flex items-center gap-2 rounded-xl bg-slate-900 dark:bg-yellow-500 px-4 py-2 text-sm font-bold text-white dark:text-slate-950 transition-all hover:bg-slate-800 dark:hover:bg-yellow-400 hover:-translate-y-0.5 active:scale-95 shadow-lg shadow-slate-900/20 dark:shadow-yellow-500/20"
          >
            <Plus size={18} strokeWidth={2.5} />
            <span className="hidden sm:inline">Input Data</span>
          </Link>
          
          {/* Avatar Profile (Mockup) */}
          <div className="ml-2 h-9 w-9 cursor-pointer rounded-full border-2 border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 p-0.5 transition-transform hover:scale-105 active:scale-95">
            <div className="h-full w-full rounded-full bg-gradient-to-tr from-yellow-400 to-orange-400"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
