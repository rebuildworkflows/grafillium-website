import { motion } from 'framer-motion';
import { Gauge, Shield, Clock, Leaf, DollarSign, TrendingUp, TrendingDown, CheckCircle2, Activity } from 'lucide-react';

const LubritronBenefitsROI = () => {
  const primaryBenefits = [
    {
      title: 'Fuel Savings',
      value: 'Up to 6%',
      detail: 'Reduced friction improves engine efficiency',
      icon: Gauge,
      color: 'purple'
    },
    {
      title: 'Wear Reduction',
      value: 'Up to 40%',
      detail: 'Nano-lubrication layer protects metal surfaces',
      icon: Shield,
      color: 'emerald'
    },
    {
      title: 'Extended Oil Life',
      value: 'Longer Intervals',
      detail: 'Reduced oil change frequency and maintenance',
      icon: Clock,
      color: 'blue'
    }
  ];

  const emissionBenefits = [
    { pollutant: 'CO₂ Reduction', value: '~6%', detail: 'Proportional to fuel saved' },
    { pollutant: 'PM/Smoke', value: '15-25%', detail: 'Cleaner combustion' },
    { pollutant: 'NOₓ', value: '5-10%', detail: 'Reduced emissions' }
  ];

  const nationalImpact = {
    basis: '6% Fuel Saving (India Example)',
    metrics: [
      {
        icon: Gauge,
        label: 'Fuel Saved',
        value: '~5.46 MMT',
        sublabel: '~6.5 Billion litres diesel',
        color: 'purple'
      },
      {
        icon: Leaf,
        label: 'CO₂ Avoided',
        value: '~17.5 MMT',
        sublabel: 'Annual emissions reduction',
        color: 'emerald'
      },
      {
        icon: DollarSign,
        label: 'Economic Impact',
        value: '₹57,000 Cr',
        sublabel: '~$7 Billion savings',
        color: 'blue'
      }
    ]
  };

  const secondaryBenefits = [
    { icon: TrendingUp, title: 'Fleet Uptime', description: 'Reduced downtime from maintenance and repairs' },
    { icon: TrendingDown, title: 'Lower TCO', description: 'Total Cost of Ownership reduction across fleet' },
    { icon: Activity, title: 'Public Health', description: 'Cleaner air quality from reduced emissions' },
    { icon: CheckCircle2, title: 'ESG Advantages', description: 'Environmental, Social, Governance benefits' }
  ];

  const costComparison = [
    { category: 'Fuel Costs', without: '100%', with: '94%', savings: '6%' },
    { category: 'Maintenance', without: '100%', with: '~75%', savings: '~25%' },
    { category: 'Oil Changes', without: 'Standard', with: 'Extended', savings: 'Up to 50%' }
  ];

  return (
    <div className="space-y-12">

      {/* Primary Benefits Cards */}
      <div className="bg-white border border-stone-200 rounded-xl p-8">
        <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-8 pb-4 border-b border-stone-200">
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
                className="relative p-6 bg-gradient-to-br from-stone-50 to-white border-2 border-stone-200 rounded-xl hover:border-emerald-500/30 transition-all group overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 ${benefit.color === 'purple' ? 'bg-emerald-500/5' :
                    benefit.color === 'emerald' ? 'bg-emerald-500/5' :
                      'bg-blue-500/5'
                  } rounded-full blur-3xl group-hover:opacity-100 opacity-50 transition-all`} />

                <IconComponent size={32} className={`${benefit.color === 'purple' ? 'text-emerald-500' :
                    benefit.color === 'emerald' ? 'text-emerald-500' :
                      'text-blue-500'
                  } mb-4 relative z-10`} />

                <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-2 relative z-10">
                  {benefit.title}
                </div>

                <div className={`text-3xl font-black mb-3 relative z-10 ${benefit.color === 'purple' ? 'text-emerald-600' :
                    benefit.color === 'emerald' ? 'text-emerald-600' :
                      'text-blue-600'
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

      {/* Emission Benefits */}
      <div className="bg-gradient-to-br from-emerald-50 to-stone-50 border-2 border-emerald-200 rounded-xl p-8">
        <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-6">
          Emission Reductions
        </h3>

        <div className="grid md:grid-cols-3 gap-4">
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
          <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2">
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
                <IconComponent size={32} className={`${metric.color === 'purple' ? 'text-emerald-400' :
                    metric.color === 'emerald' ? 'text-emerald-400' :
                      'text-blue-400'
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

        <div className="mt-8 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-center">
          <p className="text-sm font-medium text-emerald-100">
            Based on deployment across India's commercial vehicle fleet
          </p>
        </div>
      </div>

      {/* Cost Comparison */}
      <div className="bg-white border border-stone-200 rounded-xl p-8">
        <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-8 pb-4 border-b border-stone-200">
          Cost Comparison
        </h3>

        <div className="space-y-6">
          {costComparison.map((item, idx) => (
            <div key={idx} className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-black">{item.category}</span>
                <span className="text-lg font-black text-emerald-600">↓ {item.savings}</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-1">
                    Without Lubritron
                  </div>
                  <div className="text-xl font-bold text-red-600">{item.without}</div>
                </div>

                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                  <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-1">
                    With Lubritron
                  </div>
                  <div className="text-xl font-bold text-emerald-600">{item.with}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Secondary Benefits */}
      <div className="bg-gradient-to-br from-emerald-50 to-stone-50 border-2 border-emerald-200 rounded-xl p-8">
        <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-6">
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
                className="p-5 bg-white border border-emerald-200 rounded-xl hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <IconComponent size={24} className="text-emerald-500 shrink-0 mt-1" />
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
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-600 to-emerald-800 text-white rounded-xl p-8">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

        <div className="relative z-10">
          <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-200 mb-6">
            Transition Technology for ICE Dominance
          </h3>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xl font-bold leading-relaxed mb-4">
                Drop-in solution for lasting internal combustion engine dominance.
                No hardware changes required – works with all engine oils.
              </p>
              <div className="flex items-center gap-2 text-sm font-medium">
                <CheckCircle2 size={20} />
                <span>Immediate implementation, measurable results</span>
              </div>
            </div>

            <div className="p-6 bg-white/10 border border-white/20 rounded-xl backdrop-blur-sm">
              <div className="text-center">
                <div className="text-sm text-emerald-200 mb-2">Combined Savings Potential</div>
                <div className="text-5xl font-black text-white mb-3">₹57K Cr</div>
                <div className="text-sm text-emerald-200">National economic impact</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default LubritronBenefitsROI;
