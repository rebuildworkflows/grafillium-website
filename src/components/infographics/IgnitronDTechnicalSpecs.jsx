import { motion } from 'framer-motion';
import { Beaker, Gauge, Droplets, Truck, Shield, CheckCircle, Zap, Leaf, TrendingUp } from 'lucide-react';

const IgnitronDTechnicalSpecs = () => {
  const specifications = [
    { category: 'Dosage Rate', value: '0.01% (~10 ppm)', icon: Droplets },
    { category: 'Deployment', value: 'Refineries/Depots', icon: Truck },
    { category: 'Compatibility', value: 'ULSD, BS-VI, DPF, SCR', icon: CheckCircle },
    { category: 'Fuel Economy Gain', value: 'Up to 15%', icon: Gauge },
    { category: 'PM Reduction', value: 'Up to 15%', icon: Leaf },
    { category: 'Status', value: 'Pilot Testing', icon: Beaker }
  ];

  const emissionReductions = [
    { pollutant: 'PM (Particulate Matter)', reduction: 'Up to 15%', color: 'blue' },
    { pollutant: 'CO (Carbon Monoxide)', reduction: 'Up to 15%', color: 'blue' },
    { pollutant: 'HC (Hydrocarbons)', reduction: 'Up to 15%', color: 'blue' },
    { pollutant: 'NOₓ (Nitrogen Oxides)', reduction: 'Up to 10%', color: 'blue' }
  ];

  const primaryBenefits = [
    { benefit: 'Enhanced Fuel Economy', detail: 'Up to 15% optimized', icon: TrendingUp },
    { benefit: 'Dramatic Emission Cuts', detail: 'PM, CO, HC, NOₓ reduced', icon: Leaf },
    { benefit: 'Injector Cleaning', detail: 'Engine protection', icon: Shield },
    { benefit: 'Smoother Operation', detail: 'Improved engine performance', icon: Gauge }
  ];

  const secondaryBenefits = [
    'Lower inflation through reduced fuel costs',
    'Export competitiveness for Indian products',
    'Health gains from cleaner air',
    'Fleet uptime with better engine performance'
  ];

  const nationalImpact = [
    { metric: 'Fuel Saved', value: '~15.4 MMT', sublabel: '~18.5B litres annually' },
    { metric: 'CO₂ Avoided', value: '~49 MMT', sublabel: 'Annual reduction' },
    { metric: 'Forex Savings', value: '$8-9B', sublabel: '~₹67,000 crore' },
    { metric: 'Economic Relief', value: '₹1.6 Lakh Cr', sublabel: 'National impact' }
  ];

  return (
    <div className="space-y-8">

      {/* Product Specifications Grid */}
      <div className="bg-white border border-stone-200 rounded-xl p-6">
        <h3 className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-6 pb-4 border-b border-stone-200 flex items-center gap-2">
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
                className="p-4 bg-stone-50 border border-stone-200 rounded-lg hover:border-blue-500/30 transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <IconComponent size={20} className="text-blue-500 group-hover:scale-110 transition-transform" />
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

      {/* Emission Reductions */}
      <div className="bg-gradient-to-br from-blue-50 to-stone-50 border-2 border-blue-200 rounded-xl p-6">
        <h3 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-6 flex items-center gap-2">
          <Leaf size={16} />
          Emission Reductions
        </h3>

        <div className="space-y-4">
          {emissionReductions.map((item, idx) => (
            <div key={idx} className="p-4 bg-white border border-blue-200 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-stone-900">{item.pollutant}</span>
                <span className={`text-xl font-black ${item.color === 'emerald' ? 'text-emerald-600' : 'text-blue-600'
                  }`}>
                  ↓ {item.reduction}
                </span>
              </div>
              <div className="h-2 bg-stone-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: item.reduction }}
                  transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
                  className={`h-full ${item.color === 'emerald'
                      ? 'bg-gradient-to-r from-emerald-400 to-emerald-600'
                      : 'bg-gradient-to-r from-blue-400 to-blue-600'
                    } rounded-full`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 p-3 bg-white border border-blue-200 rounded-lg text-xs text-stone-600">
          <strong>Note:</strong> CO₂ reduction is proportional to fuel saved. All emission reductions verified through independent testing.
        </div>
      </div>

      {/* Primary Benefits */}
      <div className="bg-white border border-stone-200 rounded-xl p-6">
        <h3 className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-6 pb-4 border-b border-stone-200">
          Primary Benefits
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {primaryBenefits.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="p-5 bg-stone-50 border border-stone-200 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <IconComponent size={24} className="text-blue-500" />
                  <div className="text-sm font-bold text-black">{item.benefit}</div>
                </div>
                <div className="text-sm text-stone-600">{item.detail}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Secondary Benefits */}
      <div className="bg-white border border-stone-200 rounded-xl p-6">
        <h3 className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-6 pb-4 border-b border-stone-200">
          Secondary Benefits
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {secondaryBenefits.map((benefit, idx) => (
            <div key={idx} className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <CheckCircle size={18} className="text-blue-500 shrink-0 mt-0.5" />
              <span className="text-sm font-medium text-stone-700">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* National Scale Impact */}
      <div className="bg-gradient-to-br from-stone-900 to-stone-800 text-white rounded-xl p-8 border border-stone-700">
        <h3 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-8 text-center">
          National-Scale Impact
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
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
              <div className="text-4xl font-black text-blue-400 mb-2">
                {item.value}
              </div>
              <div className="text-sm text-stone-300">{item.sublabel}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg text-center">
          <p className="text-sm font-medium text-blue-100">
            Based on national deployment scenarios with conservative efficiency estimates
          </p>
        </div>
      </div>

      {/* Compatibility Notice */}
      <div className="p-6 bg-blue-50 border-2 border-blue-200 rounded-xl">
        <h3 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
          Full Compatibility
        </h3>
        <div className="grid md:grid-cols-4 gap-4">
          {['ULSD', 'BS-VI', 'DPF', 'SCR'].map((item, idx) => (
            <div key={idx} className="p-4 bg-white border border-blue-200 rounded-lg text-center">
              <CheckCircle size={24} className="text-blue-500 mx-auto mb-2" />
              <div className="text-sm font-bold text-black">{item}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-stone-600 mt-4 text-center">
          Compatible with all modern diesel emission control systems
        </p>
      </div>

    </div>
  );
};

export default IgnitronDTechnicalSpecs;
