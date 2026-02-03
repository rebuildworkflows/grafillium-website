import { TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const ROISnapshotWidget = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="p-6 bg-slate-900 text-white rounded-2xl border border-slate-800 shadow-xl mb-8"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xs font-bold uppercase tracking-widest text-orange-400">
          Performance Metrics
        </h3>
        <TrendingUp size={16} className="text-orange-400" />
      </div>

      <div className="space-y-4">
        {/* Primary Metric */}
        <div className="text-center pb-4 border-b border-slate-700">
          <div className="text-sm text-slate-400 mb-1">Payback Period</div>
          <div className="text-4xl font-black text-orange-400 tracking-tight">
            1 <span className="text-2xl">month</span> 17 <span className="text-2xl">days</span>
          </div>
        </div>

        {/* Secondary Metrics */}
        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-slate-400">Annual Savings:</span>
            <span className="font-bold text-lg">₹15.48Cr</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400">5-Year Returns:</span>
            <span className="font-bold text-lg">₹77.38Cr</span>
          </div>
          <div className="flex justify-between items-center pt-3 border-t border-slate-700">
            <span className="text-slate-400">Investment:</span>
            <span className="font-bold text-orange-400">₹200L</span>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-orange-500/10 border border-orange-500/20 rounded-lg">
        <div className="text-xs text-center text-orange-300 font-semibold">
          774% Annual ROI
        </div>
      </div>
    </motion.div>
  );
};

export default ROISnapshotWidget;
