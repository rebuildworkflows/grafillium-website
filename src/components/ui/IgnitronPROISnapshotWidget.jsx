import { TrendingUp, DollarSign, Leaf } from 'lucide-react';

const IgnitronPROISnapshotWidget = () => {
  return (
    <div className="p-6 bg-slate-900 text-white rounded-2xl border border-slate-800 shadow-xl mb-8">
      {/* Primary Metric */}
      <div className="text-center pb-4 border-b border-slate-700">
        <div className="text-sm text-slate-400 mb-1">National Impact</div>
        <div className="text-5xl font-black text-purple-400 tracking-tight">
          ₹51K<span className="text-2xl ml-1">Cr</span>
        </div>
        <div className="text-xs text-slate-500 mt-1">Economic Relief</div>
      </div>

      {/* Secondary Metrics */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="text-center p-3 bg-slate-800/50 rounded-lg">
          <DollarSign size={16} className="text-purple-400 mx-auto mb-1" />
          <div className="text-xs text-slate-400 mb-1">Forex Savings</div>
          <div className="text-lg font-bold text-white">$4-5B</div>
        </div>

        <div className="text-center p-3 bg-slate-800/50 rounded-lg">
          <Leaf size={16} className="text-purple-400 mx-auto mb-1" />
          <div className="text-xs text-slate-400 mb-1">CO₂ Avoided</div>
          <div className="text-lg font-bold text-white">11.3 MMT</div>
        </div>
      </div>

      {/* Fuel Saved */}
      <div className="mt-4 p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="text-xs text-purple-300">Fuel Saved</div>
          <div className="text-sm font-bold text-purple-200">3.7 MMT</div>
        </div>
      </div>
    </div>
  );
};

export default IgnitronPROISnapshotWidget;
