import { motion } from 'framer-motion';
import { Beaker, Gauge, Droplets, Shield, CheckCircle, Clock, TrendingDown, Leaf, Wrench } from 'lucide-react';

const LubritronTechnicalSpecs = () => {
  const specifications = [
    { category: 'Fuel Savings', value: 'Up to 6%', icon: Gauge },
    { category: 'Wear Reduction', value: 'Up to 40%', icon: Shield },
    { category: 'Oil Life Extension', value: 'Up to 50%', icon: Clock },
    { category: 'Deployment', value: 'Add to Engine Oil', icon: Droplets },
    { category: 'Compatibility', value: 'All Oils', icon: CheckCircle },
    { category: 'Status', value: 'Field Testing', icon: Beaker }
  ];

  const benefitsBreakdown = [
    {
      category: 'Fuel Savings',
      value: 'Up to 6%',
      detail: 'Reduced friction improves engine efficiency',
      color: 'purple'
    },
    {
      category: 'Wear Reduction',
      value: 'Up to 40%',
      detail: 'Nano-lubrication layer protects metal surfaces',
      color: 'emerald'
    },
    {
      category: 'Extended Oil Life',
      value: 'Up to 50%',
      detail: 'Longer intervals between oil changes',
      color: 'blue'
    }
  ];

  const emissionReductions = [
    { pollutant: 'CO₂', reduction: 'Up to 6%', detail: 'Proportional to fuel saved' },
    { pollutant: 'PM/Smoke', reduction: 'Up to 25%', detail: 'Cleaner combustion' },
    { pollutant: 'NOₓ', reduction: 'Up to 10%', detail: 'Reduced emissions' }
  ];

  const secondaryBenefits = [
    { benefit: 'Fleet Uptime', description: 'Reduced downtime from maintenance', icon: TrendingDown },
    { benefit: 'Lower TCO', description: 'Total Cost of Ownership reduction', icon: Wrench },
    { benefit: 'Public Health', description: 'Cleaner air from reduced emissions', icon: Leaf },
    { benefit: 'ESG Advantages', description: 'Environmental, Social, Governance benefits', icon: CheckCircle }
  ];

  const nationalImpact = [
    { metric: 'Fuel Saved', value: '~5.46 MMT', sublabel: '~6.5B litres diesel annually' },
    { metric: 'CO₂ Avoided', value: '~17.5 MMT', sublabel: 'Annual reduction' },
    { metric: 'Economic Impact', value: '₹57,000 Cr', sublabel: '~$7 Billion savings' }
  ];

  return (
    <div className="space-y-8">

      {/* Product Specifications Grid */}
      <div className="bg-white border border-stone-200 rounded-xl p-6">
        <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-6 pb-4 border-b border-stone-200 flex items-center gap-2">
          <Beaker size={16} />
          Product Specifications
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {specifications.map((spec, idx) => {
            const IconComponent = spec.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="p-4 bg-stone-50 border border-stone-200 rounded-lg hover:border-emerald-500/30 transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <IconComponent size={20} className="text-emerald-500 group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-1">
                  {spec.category}
                </div>
                <div className="text-lg font-bold text-black">
                  {spec.value}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Primary Benefits Breakdown */}
      <div className="bg-gradient-to-br from-emerald-50 to-stone-50 border-2 border-emerald-200 rounded-xl p-6">
        <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-6">
          Primary Benefits
        </h3>

        <div className="space-y-6">
          {benefitsBreakdown.map((item, idx) => (
            <div key={idx} className="p-5 bg-white border border-emerald-200 rounded-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-stone-900">{item.category}</span>
                <span className={`text-2xl font-black ${item.color === 'purple' ? 'text-emerald-600' :
                    item.color === 'emerald' ? 'text-emerald-600' :
                      'text-blue-600'
                  }`}>
                  {item.value}
                </span>
              </div>
              <p className="text-sm text-stone-600">{item.detail}</p>
              <div className="h-2 bg-stone-100 rounded-full overflow-hidden mt-3">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: item.value }}
                  transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
                  className={`h-full ${item.color === 'purple' ? 'bg-gradient-to-r from-emerald-400 to-emerald-600' :
                      item.color === 'emerald' ? 'bg-gradient-to-r from-emerald-400 to-emerald-600' :
                        'bg-gradient-to-r from-blue-400 to-blue-600'
                    } rounded-full`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Emission Reductions */}
      <div className="bg-white border border-stone-200 rounded-xl p-6">
        <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-6 pb-4 border-b border-stone-200 flex items-center gap-2">
          <Leaf size={16} />
          Emission Reductions
        </h3>
        <div className="space-y-4">
          {emissionReductions.map((item, idx) => (
            <div key={idx} className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-stone-900">{item.pollutant}</span>
                <span className="text-xl font-black text-emerald-600">↓ {item.reduction}</span>
              </div>
              <div className="text-xs text-stone-500">{item.detail}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Secondary Benefits */}
      <div className="bg-white border border-stone-200 rounded-xl p-6">
        <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-6 pb-4 border-b border-stone-200">
          Secondary Benefits
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {secondaryBenefits.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="p-5 bg-stone-50 border border-stone-200 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <IconComponent size={24} className="text-emerald-500" />
                  <div className="text-sm font-bold text-black">{item.benefit}</div>
                </div>
                <div className="text-sm text-stone-600">{item.description}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* National Scale Impact */}
      <div className="bg-gradient-to-br from-stone-900 to-stone-800 text-white rounded-xl p-8 border border-stone-700">
        <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-8 text-center">
          National-Scale Impact
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {nationalImpact.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm text-center"
            >
              <div className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-3">
                {item.metric}
              </div>
              <div className="text-4xl font-black text-emerald-400 mb-2">
                {item.value}
              </div>
              <div className="text-sm text-stone-300">{item.sublabel}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-center">
          <p className="text-sm font-medium text-emerald-100">
            Based on national deployment scenarios for commercial vehicles
          </p>
        </div>
      </div>

      {/* Compatibility Matrix */}
      <div className="p-6 bg-emerald-50 border-2 border-emerald-200 rounded-xl">
        <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-4">
          Universal Oil Compatibility
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {['Mineral Oil', 'Semi-Synthetic', 'Fully Synthetic'].map((item, idx) => (
            <div key={idx} className="p-4 bg-white border border-emerald-200 rounded-lg text-center">
              <CheckCircle size={24} className="text-emerald-500 mx-auto mb-2" />
              <div className="text-sm font-bold text-black">{item}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-stone-600 mt-4 text-center">
          Works seamlessly with all engine oil types
        </p>
      </div>

    </div>
  );
};

export default LubritronTechnicalSpecs;
