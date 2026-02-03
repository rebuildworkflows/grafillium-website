import { motion } from 'framer-motion';
import { AlertTriangle, TrendingUp, DollarSign, Activity, Wrench, Leaf } from 'lucide-react';

const IgnitronPDeepDive = () => {
  const energyReality = [
    { scope: 'Global Scale', stat: '>1.2 BMT/year', label: 'Petrol consumption', impact: '~15% transport energy' },
    { scope: 'Global Impact', stat: '>2.8 BMT', label: 'CO₂ emissions annually', impact: 'Major climate contributor' },
    { scope: 'India Scale', stat: '~37 MMT', label: 'Annual consumption (FY2023-24)', impact: '5-7% CAGR growth' },
    { scope: 'India Emissions', stat: '~110 MMT', label: 'CO₂ from petrol annually', impact: 'Urban air quality crisis' }
  ];

  const hiddenCost = [
    { issue: 'Carbon Monoxide (CO)', consequence: 'Major urban air pollutant, health hazard' },
    { issue: 'Hydrocarbons (HC)', consequence: 'Contributes to smog and ground-level ozone' },
    { issue: 'Nitrogen Oxides (NOₓ)', consequence: 'Respiratory issues, acid rain precursor' },
    { issue: 'Particulates', consequence: 'PM2.5/PM10 health impacts, especially urban areas' }
  ];

  const nationalImpact = [
    {
      metric: 'Fuel Saved Annually',
      value: '3.7 MMT',
      detail: '~4.9 Billion litres petrol',
      icon: TrendingUp
    },
    {
      metric: 'CO₂ Reduction',
      value: '~11.3 MMT',
      detail: 'Annual emissions avoided',
      icon: Leaf
    },
    {
      metric: 'Economic Impact',
      value: '₹51,000+ Cr',
      detail: '$4-5B forex savings',
      icon: DollarSign
    }
  ];

  const trueCostFactors = [
    { factor: 'Urban Pollution', impact: 'CO and HC emissions degrade air quality in cities' },
    { factor: 'Health Burden', impact: 'Respiratory diseases from vehicular emissions' },
    { factor: 'Fuel Import Costs', impact: 'India imports significant petrol, forex drain' },
    { factor: 'Climate Impact', impact: 'Transport sector major contributor to emissions' }
  ];

  return (
    <div className="space-y-12">

      {/* The Energy Reality */}
      <div className="bg-white border border-stone-200 rounded-xl p-8">
        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-stone-200">
          <Activity className="text-purple-500" size={24} />
          <h3 className="text-xs font-bold uppercase tracking-widest text-stone-500">
            The Energy Reality
          </h3>
        </div>

        <div className="mb-8">
          <div className="p-6 bg-purple-50 border-l-4 border-purple-500 rounded-r-xl mb-6">
            <div className="flex items-center gap-4">
              <div className="text-5xl font-black text-purple-600">1.2B</div>
              <div>
                <div className="text-sm font-bold text-black mb-1">Global Petrol Consumption</div>
                <div className="text-xs text-stone-600">
                  Over 1.2 billion metric tons per year, powering global transport
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {energyReality.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-5 bg-stone-50 border border-stone-200 rounded-xl"
              >
                <div className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-2">{item.scope}</div>
                <div className="text-2xl font-black text-purple-600 mb-2">{item.stat}</div>
                <div className="text-sm font-bold text-black mb-1">{item.label}</div>
                <div className="text-xs text-stone-500">{item.impact}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="p-6 bg-gradient-to-br from-purple-50 to-stone-50 border-2 border-purple-200 rounded-xl">
          <h4 className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-4">
            The Hidden Cost
          </h4>
          <div className="grid md:grid-cols-2 gap-3">
            {hiddenCost.map((item, idx) => (
              <div key={idx} className="p-4 bg-white border border-purple-200 rounded-lg">
                <div className="text-sm font-bold text-black mb-1">{item.issue}</div>
                <div className="text-xs text-stone-600">{item.consequence}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* National Scale Impact */}
      <div className="bg-gradient-to-br from-stone-900 to-stone-800 text-white rounded-xl p-8 border border-stone-700">
        <h3 className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-8 text-center">
          National-Scale Impact Potential (10% Saving Scenario)
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
                  <IconComponent size={32} className="text-purple-400 mx-auto mb-4" />
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

        <div className="mt-8 p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg text-center">
          <p className="text-sm font-medium text-purple-100">
            Based on deployment across India's petrol vehicle fleet
          </p>
        </div>
      </div>

      {/* The True Cost */}
      <div className="bg-white border border-stone-200 rounded-xl p-8">
        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-stone-200">
          <AlertTriangle className="text-purple-500" size={24} />
          <h3 className="text-xs font-bold uppercase tracking-widest text-stone-500">
            The True Cost of Petrol Emissions
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {trueCostFactors.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 bg-purple-50 border-l-4 border-purple-500 rounded-r-xl"
            >
              <div className="flex items-start gap-4">
                <Wrench size={24} className="text-purple-500 shrink-0 mt-1" />
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
            <Activity size={28} className="text-purple-400" />
            <h4 className="text-lg font-bold">Cumulative Impact</h4>
          </div>
          <p className="text-stone-200 leading-relaxed">
            Petrol combustion in spark-ignition engines produces significant CO, HC, NOₓ, and particulate emissions.
            Urban areas face severe air quality challenges from vehicular pollution. Ignitron P addresses these issues
            while improving fuel economy, reducing both environmental impact and operating costs for consumers and fleet operators.
          </p>
        </div>
      </div>

      {/* Solution Message */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-stone-50 border-2 border-purple-200 rounded-xl p-8">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="relative z-10 flex items-start gap-4">
          <Wrench size={32} className="text-purple-500 shrink-0 mt-1" />
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-4">
              Drop-In Solution for Petrol Vehicles
            </h3>
            <p className="text-xl font-bold text-black leading-relaxed mb-4">
              While electric mobility gains traction, petrol vehicles will remain dominant in personal and commercial
              transport for years. Ignitron P provides an immediate, cost-effective solution to improve efficiency,
              reduce emissions, and enhance engine performance across the existing petrol fleet.
            </p>
            <div className="flex items-center gap-2 text-sm font-bold text-purple-600">
              <span>Compatible with BS-VI, catalytic converters, GDI/MPFI, and ethanol blends</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default IgnitronPDeepDive;
