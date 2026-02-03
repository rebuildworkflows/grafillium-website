import { TrendingUp, DollarSign, Leaf, Droplet } from 'lucide-react';

const LubritronROISnapshotWidget = () => {
  return (
    <div className="p-6 bg-slate-900 text-white rounded-2xl border border-slate-800 shadow-xl mb-8">
      {/* Primary Metric */}
      <div className="text-center pb-4 border-b border-slate-700">
        <div className="text-sm text-slate-400 mb-1">National Impact</div>
        <div className="text-5xl font-black text-emerald-400 tracking-tight">
          ₹57K<span className="text-2xl ml-1">Cr</span>
        </div>
        <div className="text-xs text-slate-500 mt-1">Economic Relief</div>
      </div>

      {/* Secondary Metrics */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="text-center p-3 bg-slate-800/50 rounded-lg">
          <DollarSign size={16} className="text-emerald-400 mx-auto mb-1" />
          <div className="text-xs text-slate-400 mb-1">Forex Savings</div>
          <div className="text-lg font-bold text-white">$7B</div>
        </div>

        <div className="text-center p-3 bg-slate-800/50 rounded-lg">
          <Leaf size={16} className="text-emerald-400 mx-auto mb-1" />
          <div className="text-xs text-slate-400 mb-1">CO₂ Avoided</div>
          <div className="text-lg font-bold text-white">17.5Mt</div>
        </div>
      </div>

      {/* Fuel Saved */}
      <div className="mt-4 p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="text-xs text-emerald-300">Fuel Saved</div>
          <div className="text-sm font-bold text-emerald-200">5.46 MMT</div>
        </div>
      </div>
    </div>
  );
};

export default LubritronROISnapshotWidget;
