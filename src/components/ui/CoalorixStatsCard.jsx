import { Flame, TrendingDown, Calendar, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const CoalorixStatsCard = () => {
  const stats = [
    {
      value: '35.6',
      unit: 'lakh tons',
      label: 'Coal Savings Daily',
      icon: Flame
    },
    {
      value: '₹1,070',
      unit: 'Crores',
      label: 'Cost Reduction/Day',
      icon: TrendingDown
    },
    {
      value: '55',
      unit: 'lakh tons',
      label: 'CO₂ Avoided/Day',
      icon: TrendingUp
    }
  ];

  return (
    <div className="my-8">
      {/* Section Heading */}
      <h3 className="text-xs font-bold uppercase tracking-widest mb-8 text-orange-500 border-b border-stone-200 pb-2 inline-block">
        National Potential: For India
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => {
          const IconComponent = stat.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-stone-50 border border-stone-200 rounded-xl hover:border-orange-500/30 hover:bg-white transition-all group"
            >
              <IconComponent size={24} className="text-orange-500 mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-4 whitespace-nowrap">
                {stat.label}
              </div>
              <div className="flex items-baseline gap-2 whitespace-nowrap">
                <span className="text-4xl font-bold text-black tracking-tight">{stat.value}</span>
                {stat.unit && <span className="text-xl font-semibold text-stone-400">{stat.unit}</span>}
              </div>
            </motion.div>
          );
        })}
      </div>

      <p className="text-sm text-stone-600 mt-6 text-center">
        Estimated impact based on deployment at scale across thermal power sector
      </p>
    </div>
  );
};

export default CoalorixStatsCard;
