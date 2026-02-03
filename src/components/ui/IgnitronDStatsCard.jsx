import { Gauge, TrendingDown, Wrench, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

const IgnitronDStatsCard = () => {
  const stats = [
    {
      value: '20%',
      unit: '',
      label: 'Fuel Economy Boost',
      icon: Gauge
    },
    {
      value: '40%',
      unit: '',
      label: 'Emission Reduction',
      icon: Leaf
    },
    {
      value: '₹1.6L',
      unit: 'Cr',
      label: 'National Savings',
      icon: TrendingDown
    },
    {
      value: 'Extended',
      unit: '',
      label: 'Engine Life',
      icon: Wrench
    }
  ];

  return (
    <div className="my-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, idx) => {
          const IconComponent = stat.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 bg-stone-50 border border-stone-200 rounded-xl hover:border-blue-500/30 hover:bg-white transition-all group"
            >
              <IconComponent size={20} className="text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">
                {stat.label}
              </div>
              <div className="text-3xl font-bold text-black tracking-tight">
                {stat.value}
                {stat.unit && <span className="text-lg ml-1 text-stone-400">{stat.unit}</span>}
              </div>
            </motion.div>
          );
        })}
      </div>
      <p className="text-xs text-center text-stone-400 mt-4 font-medium uppercase tracking-wide">
        India National Scale Impact
      </p>
    </div>
  );
};

export default IgnitronDStatsCard;
