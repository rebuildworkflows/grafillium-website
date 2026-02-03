import { motion } from 'framer-motion';
import { AlertTriangle, TrendingUp, DollarSign, Activity, Wrench, Leaf } from 'lucide-react';

const LubritronDeepDive = () => {
  const frictionReality = [
    { stat: '10-12%', label: 'Fuel energy lost to friction globally', impact: 'Major efficiency loss' },
    { stat: 'Higher', label: 'Fuel consumption from friction', impact: 'Economic burden' },
    { stat: 'Increased', label: 'Maintenance costs', impact: 'Operational expenses' },
    { stat: 'Greater', label: 'Emissions and waste', impact: 'Environmental impact' }
  ];

  const oilDegradation = [
    { issue: 'Thermal Breakdown', consequence: 'Reduced lubrication efficiency' },
    { issue: 'Oxidation', consequence: 'Sludge formation and deposits' },
    { issue: 'Contamination', consequence: 'Accelerated wear' },
    { issue: 'Viscosity Loss', consequence: 'Inadequate protection' }
  ];

  const nationalImpact = [
    {
      metric: 'Fuel Saved Annually',
      value: '~5.46 MMT',
      detail: '~6.5 Billion litres diesel',
      icon: TrendingUp
    },
    {
      metric: 'CO₂ Reduction',
      value: '~17.5 MMT',
      detail: 'Annual emissions avoided',
      icon: Leaf
    },
    {
      metric: 'Economic Impact',
      value: '₹57,000 Cr',
      detail: '~$7 Billion savings',
      icon: DollarSign
    }
  ];

  const trueCostFactors = [
    { factor: 'Fuel Burn', impact: 'Higher consumption due to friction losses' },
    { factor: 'Maintenance', impact: 'Frequent repairs and part replacements' },
    { factor: 'Emissions', impact: 'Increased pollution from inefficient combustion' },
    { factor: 'Waste', impact: 'More frequent oil changes and disposal' }
  ];

  return (
    <div className="space-y-12">

      {/* The Friction Reality */}
      <div className="bg-white border border-stone-200 rounded-xl p-8">
        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-stone-200">
          <Activity className="text-emerald-500" size={24} />
          <h3 className="text-xs font-bold uppercase tracking-widest text-stone-500">
            The Friction Reality
          </h3>
        </div>

        <div className="mb-8">
          <div className="p-6 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl mb-6">
            <div className="flex items-center gap-4">
              <div className="text-5xl font-black text-emerald-600">10-12%</div>
              <div>
                <div className="text-sm font-bold text-black mb-1">Global Energy Loss</div>
                <div className="text-xs text-stone-600">
                  Of total fuel energy is lost to friction in engines worldwide
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {frictionReality.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-5 bg-stone-50 border border-stone-200 rounded-xl"
              >
                <div className="text-2xl font-black text-emerald-600 mb-2">{item.stat}</div>
                <div className="text-sm font-bold text-black mb-1">{item.label}</div>
                <div className="text-xs text-stone-500">{item.impact}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="p-6 bg-gradient-to-br from-emerald-50 to-stone-50 border-2 border-emerald-200 rounded-xl">
          <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-4">
            Oil Degradation Impact
          </h4>
          <div className="grid md:grid-cols-2 gap-3">
            {oilDegradation.map((item, idx) => (
              <div key={idx} className="p-4 bg-white border border-emerald-200 rounded-lg">
                <div className="text-sm font-bold text-black mb-1">{item.issue}</div>
                <div className="text-xs text-stone-600">{item.consequence}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* National Scale Impact */}
      <div className="bg-gradient-to-br from-stone-900 to-stone-800 text-white rounded-xl p-8 border border-stone-700">
        <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-8 text-center">
          National-Scale Impact Potential
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {nationalImpact.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm mb-3">
                  <IconComponent size={32} className="text-emerald-400 mx-auto mb-4" />
                  <div className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-3">
                    {item.metric}
                  </div>
                  <div className="text-4xl font-black text-white mb-2">
                    {item.value}
                  </div>
                </div>
                <div className="text-sm text-stone-300">{item.detail}</div>
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

      {/* The True Cost of Friction */}
      <div className="bg-white border border-stone-200 rounded-xl p-8">
        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-stone-200">
          <AlertTriangle className="text-emerald-500" size={24} />
          <h3 className="text-xs font-bold uppercase tracking-widest text-stone-500">
            The True Cost of Friction
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {trueCostFactors.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl"
            >
              <div className="flex items-start gap-4">
                <Wrench size={24} className="text-emerald-500 shrink-0 mt-1" />
                <div>
                  <div className="text-sm font-bold text-black mb-2">{item.factor}</div>
                  <div className="text-xs text-stone-600 leading-relaxed">{item.impact}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-gradient-to-br from-stone-900 to-stone-800 text-white rounded-xl">
          <div className="flex items-center gap-4 mb-4">
            <Activity size={28} className="text-emerald-400" />
            <h4 className="text-lg font-bold">Cumulative Impact</h4>
          </div>
          <p className="text-stone-200 leading-relaxed">
            The combined effect of friction losses, oil degradation, increased maintenance,
            and higher emissions creates a significant economic and environmental burden.
            Lubritron addresses all these factors simultaneously, delivering measurable improvements
            across fuel efficiency, engine wear, oil life, and emissions.
          </p>
        </div>
      </div>

      {/* Solution Message */}
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-stone-50 border-2 border-emerald-200 rounded-xl p-8">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="relative z-10 flex items-start gap-4">
          <Wrench size={32} className="text-emerald-500 shrink-0 mt-1" />
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-4">
              Drop-In Solution for Lasting ICE Dominance
            </h3>
            <p className="text-xl font-bold text-black leading-relaxed mb-4">
              While electric vehicles gain ground, internal combustion engines will remain dominant
              in commercial transport for decades. Lubritron provides an immediate, cost-effective
              solution to improve efficiency, reduce emissions, and extend engine life across the
              existing vehicle fleet.
            </p>
            <div className="flex items-center gap-2 text-sm font-bold text-emerald-600">
              <span>Works with all engine oils - mineral and synthetic</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default LubritronDeepDive;
