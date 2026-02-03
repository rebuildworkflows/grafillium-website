import { Gauge, Shield, Clock, TrendingDown } from 'lucide-react';
import { motion } from 'framer-motion';

const LubritronStatsCard = () => {
  const stats = [
    {
      value: '6%',
      unit: '',
      label: 'Fuel Savings',
      icon: Gauge
    },
    {
      value: '40%',
      unit: '',
      label: 'Wear Reduction',
      icon: Shield
    },
    {
      value: '50%',
      unit: '',
      label: 'Extended Oil Life',
      icon: Clock
    },
    {
      value: '₹57K',
      unit: 'Cr',
      label: 'National Savings',
      icon: TrendingDown
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
              className="p-6 bg-stone-50 border border-stone-200 rounded-xl hover:border-emerald-500/30 hover:bg-white transition-all group"
            >
              <IconComponent size={20} className="text-emerald-500 mb-4 group-hover:scale-110 transition-transform" />
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

export default LubritronStatsCard;
