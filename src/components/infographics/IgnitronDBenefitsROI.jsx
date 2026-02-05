import { motion } from 'framer-motion';
import { Gauge, Shield, Leaf, DollarSign, TrendingUp, TrendingDown, CheckCircle2, Activity, Flame } from 'lucide-react';

const IgnitronDBenefitsROI = () => {
  const primaryBenefits = [
    {
      title: 'Fuel Economy',
      value: 'Up to 15%',
      detail: 'Optimized combustion efficiency through nano-catalytic action',
      icon: Gauge,
      color: 'blue'
    },
    {
      title: 'Emission Reduction',
      value: 'Up to 15%',
      detail: 'Cleaner combustion reduces particulate matter significantly',
      icon: Leaf,
      color: 'blue'
    },
    {
      title: 'Engine Protection',
      value: 'Up to 25%',
      detail: 'Improved heat management and injector cleanliness',
      icon: Shield,
      color: 'blue'
    }
  ];

  const emissionBenefits = [
    { pollutant: 'PM Reduction', value: 'Up to 15%', detail: 'Particulate matter decrease' },
    { pollutant: 'CO Reduction', value: 'Up to 15%', detail: 'Carbon monoxide decrease' },
    { pollutant: 'HC Reduction', value: 'Up to 15%', detail: 'Hydrocarbon decrease' },
    { pollutant: 'NOₓ Reduction', value: 'Up to 10%', detail: 'Nitrogen oxide decrease' }
  ];

  const nationalImpact = {
    basis: '15% Fuel Saving (India Example)',
    metrics: [
      {
        icon: Gauge,
        label: 'Fuel Saved',
        value: '~15.4 MMT',
        sublabel: '~18.5 Billion litres diesel',
        color: 'blue'
      },
      {
        icon: Leaf,
        label: 'CO₂ Avoided',
        value: '~49 MMT',
        sublabel: 'Annual emissions reduction',
        color: 'emerald'
      },
      {
        icon: DollarSign,
        label: 'Economic Impact',
        value: '₹1.6L Cr',
        sublabel: '~$8-9 Billion savings',
        color: 'blue'
      }
    ]
  };

  const secondaryBenefits = [
    { icon: TrendingDown, title: 'Lower Inflation', description: 'Reduced fuel costs impact overall economy' },
    { icon: TrendingUp, title: 'Export Competitiveness', description: 'Lower logistics costs improve trade position' },
    { icon: Activity, title: 'Public Health', description: 'Cleaner air quality from reduced emissions' },
    { icon: CheckCircle2, title: 'Fleet Uptime', description: 'Reduced maintenance and improved reliability' }
  ];

  const costComparison = [
    { category: 'Fuel Costs', without: '100%', with: '85%', savings: '15%' },
    { category: 'Maintenance', without: '100%', with: '~80%', savings: '~20%' },
    { category: 'Emissions', without: '100%', with: '60-80%', savings: '20-40%' }
  ];

  const performanceMetrics = [
    { metric: 'Typical Fuel Economy', value: '5-10%', context: 'Real-world conditions' },
    { metric: 'Optimized Fuel Economy', value: 'Up to 20%', context: 'Ideal conditions' },
    { metric: 'CO₂ Reduction', value: 'Proportional', context: 'To fuel saved' }
  ];

  return (
    <div className="space-y-12">

      {/* Primary Benefits Cards */}
      <div className="bg-white border border-stone-200 rounded-xl p-8">
        <h3 className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-8 pb-4 border-b border-stone-200">
          Primary Benefits
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {primaryBenefits.map((benefit, idx) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="relative p-6 bg-gradient-to-br from-stone-50 to-white border-2 border-stone-200 rounded-xl hover:border-blue-500/30 transition-all group overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 ${benefit.color === 'blue' ? 'bg-blue-500/5' : 'bg-emerald-500/5'
                  } rounded-full blur-3xl group-hover:opacity-100 opacity-50 transition-all`} />

                <IconComponent size={32} className={`${benefit.color === 'blue' ? 'text-blue-500' : 'text-emerald-500'
                  } mb-4 relative z-10`} />

                <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-2 relative z-10">
                  {benefit.title}
                </div>

                <div className={`text-3xl font-black mb-3 relative z-10 ${benefit.color === 'blue' ? 'text-blue-600' : 'text-emerald-600'
                  }`}>
                  {benefit.value}
                </div>

                <p className="text-sm text-stone-600 leading-relaxed relative z-10">
                  {benefit.detail}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="bg-gradient-to-br from-blue-50 to-stone-50 border-2 border-blue-200 rounded-xl p-8">
        <h3 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-6">
          Fuel Economy Performance Range
        </h3>

        <div className="grid md:grid-cols-3 gap-4">
          {performanceMetrics.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 bg-white border border-blue-200 rounded-xl text-center"
            >
              <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-3">
                {item.metric}
              </div>
              <div className="text-4xl font-black text-blue-600 mb-2">
                {item.value}
              </div>
              <div className="text-xs text-stone-500">{item.context}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Emission Benefits */}
      <div className="bg-gradient-to-br from-emerald-50 to-stone-50 border-2 border-emerald-200 rounded-xl p-8">
        <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-6">
          Emission Reductions
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {emissionBenefits.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 bg-white border border-emerald-200 rounded-xl text-center"
            >
              <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-3">
                {item.pollutant}
              </div>
              <div className="text-4xl font-black text-emerald-600 mb-2">
                ↓ {item.value}
              </div>
              <div className="text-xs text-stone-500">{item.detail}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* National-Scale Impact */}
      <div className="bg-gradient-to-br from-stone-900 to-stone-800 text-white rounded-xl p-8 border border-stone-700">
        <div className="text-center mb-8">
          <h3 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2">
            National-Scale Impact
          </h3>
          <p className="text-sm text-stone-400">{nationalImpact.basis}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {nationalImpact.metrics.map((metric, idx) => {
            const IconComponent = metric.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm text-center hover:bg-white/10 transition-all"
              >
                <IconComponent size={32} className={`${metric.color === 'blue' ? 'text-blue-400' : 'text-emerald-400'
                  } mx-auto mb-4`} />

                <div className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-3">
                  {metric.label}
                </div>

                <div className="text-3xl font-black text-white mb-2">
                  {metric.value}
                </div>

                <div className="text-sm text-stone-300">{metric.sublabel}</div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg text-center">
          <p className="text-sm font-medium text-blue-100">
            Based on deployment across India's diesel vehicle fleet
          </p>
        </div>
      </div>

      {/* Cost Comparison */}
      <div className="bg-white border border-stone-200 rounded-xl p-8">
        <h3 className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-8 pb-4 border-b border-stone-200">
          Cost Comparison
        </h3>

        <div className="space-y-6">
          {costComparison.map((item, idx) => (
            <div key={idx} className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-black">{item.category}</span>
                <span className="text-lg font-black text-blue-600">↓ {item.savings}</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-1">
                    Without Ignitron D
                  </div>
                  <div className="text-xl font-bold text-red-600">{item.without}</div>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-1">
                    With Ignitron D
                  </div>
                  <div className="text-xl font-bold text-blue-600">{item.with}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Secondary Benefits */}
      <div className="bg-gradient-to-br from-blue-50 to-stone-50 border-2 border-blue-200 rounded-xl p-8">
        <h3 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-6">
          Secondary Benefits & Strategic Advantages
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          {secondaryBenefits.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-5 bg-white border border-blue-200 rounded-xl hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <IconComponent size={24} className="text-blue-500 shrink-0 mt-1" />
                  <div>
                    <div className="text-sm font-bold text-black mb-1">{item.title}</div>
                    <div className="text-xs text-stone-600 leading-relaxed">{item.description}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ROI Highlight */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl p-8">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

        <div className="relative z-10">
          <h3 className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-6">
            Transition Technology for Diesel Dominance
          </h3>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xl font-bold leading-relaxed mb-4">
                Drop-in nano-catalytic solution for immediate diesel efficiency gains.
                Compatible with all diesel systems – ULSD, BS-VI, DPF, and SCR.
              </p>
              <div className="flex items-center gap-2 text-sm font-medium">
                <CheckCircle2 size={20} />
                <span>Immediate deployment, measurable results</span>
              </div>
            </div>

            <div className="p-6 bg-white/10 border border-white/20 rounded-xl backdrop-blur-sm">
              <div className="text-center">
                <div className="text-sm text-blue-200 mb-2">Combined Savings Potential</div>
                <div className="text-5xl font-black text-white mb-3">₹1.6L Cr</div>
                <div className="text-sm text-blue-200">National economic impact</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Deployment Info */}
      <div className="p-6 bg-stone-50 border-2 border-stone-200 rounded-xl">
        <h3 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
          Deployment Specifications
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-white border border-stone-200 rounded-lg text-center">
            <Flame size={24} className="text-blue-500 mx-auto mb-2" />
            <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-1">Dosage</div>
            <div className="text-sm font-bold text-black">~10 ppm</div>
            <div className="text-xs text-stone-500 mt-1">5-20 ppm range</div>
          </div>
          <div className="p-4 bg-white border border-stone-200 rounded-lg text-center">
            <Gauge size={24} className="text-blue-500 mx-auto mb-2" />
            <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-1">Application</div>
            <div className="text-sm font-bold text-black">Refinery/Depot</div>
            <div className="text-xs text-stone-500 mt-1">Centralized dosing</div>
          </div>
          <div className="p-4 bg-white border border-stone-200 rounded-lg text-center">
            <CheckCircle2 size={24} className="text-blue-500 mx-auto mb-2" />
            <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-1">Compatibility</div>
            <div className="text-sm font-bold text-black">Universal</div>
            <div className="text-xs text-stone-500 mt-1">All diesel systems</div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default IgnitronDBenefitsROI;
