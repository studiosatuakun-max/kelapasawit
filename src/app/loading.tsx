export default function Loading() {
  return (
    <div className="container mx-auto p-4 lg:p-8 space-y-8">
      <div className="mb-8 space-y-3">
        <div className="h-10 w-72 animate-pulse rounded-2xl bg-slate-200"></div>
        <div className="h-5 w-96 animate-pulse rounded-xl bg-slate-200"></div>
      </div>
      
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
        <div className="h-64 animate-pulse rounded-3xl bg-slate-200 md:col-span-2 md:row-span-2"></div>
        <div className="h-36 animate-pulse rounded-3xl bg-slate-200"></div>
        <div className="h-36 animate-pulse rounded-3xl bg-slate-200"></div>
        <div className="h-36 animate-pulse rounded-3xl bg-slate-200"></div>
        <div className="h-36 animate-pulse rounded-3xl bg-slate-200"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="h-[400px] animate-pulse rounded-3xl bg-slate-200 lg:col-span-2"></div>
        <div className="h-[400px] animate-pulse rounded-3xl bg-slate-200 lg:col-span-1"></div>
      </div>
    </div>
  );
}
