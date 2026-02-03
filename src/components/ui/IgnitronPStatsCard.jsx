import { Gauge, Leaf, DollarSign, Shield } from 'lucide-react';

const IgnitronPStatsCard = () => {
  const stats = [
    {
      icon: Gauge,
      label: 'Fuel Economy',
      value: 'Up to 10%',
      detail: 'Highway conditions'
    },
    {
      icon: Leaf,
      label: 'Emission Reduction',
      value: 'Up to 12%',
      detail: 'Overall emissions'
    },
    {
      icon: DollarSign,
      label: 'Economic Impact',
      value: '₹51K Cr',
      detail: 'National savings potential'
    },
    {
      icon: Shield,
      label: 'Engine Health',
      value: 'Enhanced',
      detail: 'Smoother, reduced knocking'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, idx) => {
        const IconComponent = stat.icon;
        return (
          <div
            key={idx}
            className="p-6 bg-stone-50 border border-stone-200 rounded-xl hover:border-purple-500/30 hover:bg-white transition-all group"
          >
            <div className="flex items-start justify-between mb-4">
              <IconComponent size={24} className="text-purple-500 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">
              {stat.label}
            </div>
            <div className="text-3xl font-black text-purple-600 mb-2">
              {stat.value}
            </div>
            <div className="text-sm text-stone-600">
              {stat.detail}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default IgnitronPStatsCard;
