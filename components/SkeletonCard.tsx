export function SkeletonCard() {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden h-full flex flex-col animate-pulse">
      <div className="h-56 bg-slate-200 w-full"></div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between mb-4">
          <div className="h-5 bg-slate-200 rounded w-1/4"></div>
          <div className="h-6 bg-slate-200 rounded w-1/5"></div>
        </div>
        <div className="h-6 bg-slate-200 rounded w-3/4 mb-3"></div>
        <div className="h-4 bg-slate-200 rounded w-full mb-2"></div>
        <div className="h-4 bg-slate-200 rounded w-5/6 mb-6"></div>
        <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between">
          <div className="h-5 bg-slate-200 rounded w-1/3"></div>
          <div className="h-5 bg-slate-200 rounded w-6"></div>
        </div>
      </div>
    </div>
  );
}
