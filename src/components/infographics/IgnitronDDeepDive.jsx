import { motion } from 'framer-motion';
import { Database, AlertTriangle, Truck, Factory, Globe, DollarSign, Activity, TrendingUp } from 'lucide-react';

const IgnitronDDeepDive = () => {
  const dieselRealityStats = [
    { label: 'India Consumption', value: '91MMT/Year', icon: Truck },
    { label: 'Import Cost', value: '$50 Billion/Year', icon: DollarSign },
    { label: 'Transport Dependence', value: '90%+', icon: Activity }
  ];

  const dieselKeyPoints = [
    "Heavy transport cannot easily electrify yet.",
    "Diesel efficiency directly impacts inflation and logistics costs.",
    "Optimization offers immediate 10-20% fuel savings."
  ];

  const energyRealityGlobal = [
    { stat: '>1.5B', label: 'Metric tons middle distillates/year', icon: Globe },
    { stat: '~20%', label: 'Of global energy demand', icon: TrendingUp },
    { stat: '3.5-4.0B', label: 'Tonnes CO₂ annually', icon: AlertTriangle }
  ];

  const energyRealityIndia = [
    { fuel: 'Diesel', consumption: '91MMT', icon: Truck },
    { fuel: 'Jet Fuel', consumption: '9.1 MMT', icon: Factory },
    { fuel: 'Kerosene', consumption: '2.4 MMT', icon: Globe }
  ];

  const trueCostGlobal = [
    { impact: 'GHG Emissions', value: '10-12%', detail: 'Of global emissions from middle distillates' },
    { impact: 'Health Impact', value: 'Carcinogen', detail: 'Diesel classified as carcinogenic' },
    { impact: 'Aviation Warming', value: 'Contrails', detail: 'Contrail-induced warming effect' },
    { impact: 'Indoor Pollution', value: 'Kerosene', detail: 'Indoor pollution in developing regions' }
  ];

  const trueCostIndia = [
    { pollutant: 'CO₂', amount: '~326 MMT', source: 'Road transport emissions' },
    { pollutant: 'NOₓ', amount: '>40%', source: 'From road transport' },
    { pollutant: 'PM2.5', amount: 'Large', source: 'Particulate matter contribution' }
  ];

  return (
    <div className="space-y-12">

      {/* Diesel Energy Reality */}
      <div className="bg-white border border-stone-200 rounded-xl p-8">
        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-stone-200">
          <Database className="text-blue-500" size={24} />
          <h3 className="text-xs font-bold uppercase tracking-widest text-stone-500">
            Diesel Energy Reality
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {dieselRealityStats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="relative p-6 bg-stone-50 border border-stone-200 rounded-xl hover:border-blue-500/30 transition-all group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-all" />
                <IconComponent size={28} className="text-blue-500 mb-4 relative z-10" />
                <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-2 relative z-10">
                  {stat.label}
                </div>
                <div className="text-3xl font-black text-black tracking-tight relative z-10">
                  {stat.value}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="p-6 bg-blue-50 border border-blue-200 rounded-xl">
          <h4 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
            Key Intelligence
          </h4>
          <ul className="space-y-3">
            {dieselKeyPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                <span className="text-sm font-medium text-stone-700">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* The Energy Reality - Modernized */}
      <div className="bg-white border border-stone-200 rounded-xl p-8">
        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-stone-200">
          <Activity className="text-blue-500" size={24} />
          <h3 className="text-xs font-bold uppercase tracking-widest text-stone-500">
            The Energy Reality
          </h3>
        </div>

        {/* Global Scale */}
        <div className="mb-10">
          <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-6">Global Scale</h4>
          <div className="grid md:grid-cols-3 gap-4">
            {energyRealityGlobal.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-5 bg-stone-50 border border-stone-200 rounded-xl text-center hover:border-blue-500/30 transition-all group"
                >
                  <IconComponent size={24} className="text-blue-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-black text-black mb-2">{item.stat}</div>
                  <div className="text-xs text-stone-600 font-medium leading-tight">{item.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* India Context */}
        <div className="p-6 bg-gradient-to-br from-blue-50 to-stone-50 border-2 border-blue-200 rounded-xl">
          <h4 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-6">India Context (FY2023-24)</h4>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {energyRealityIndia.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-5 bg-white border border-blue-200 rounded-xl text-center"
                >
                  <IconComponent size={20} className="text-blue-500 mx-auto mb-3" />
                  <div className="text-sm font-bold text-stone-900 mb-2">{item.fuel}</div>
                  <div className="text-xl font-black text-blue-600">{item.consumption}</div>
                </motion.div>
              );
            })}
          </div>

          <div className="p-4 bg-white border border-blue-200 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-1">
                  Total Consumption
                </div>
                <div className="text-2xl font-black text-black">~102.5 MMT</div>
              </div>
              <div className="text-right">
                <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-1">
                  Import Cost
                </div>
                <div className="text-2xl font-black text-blue-600">$132B</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The True Cost of Diesel */}
      <div className="bg-gradient-to-br from-stone-900 to-stone-800 text-white rounded-xl p-8 border border-stone-700">
        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/10">
          <AlertTriangle className="text-blue-400" size={24} />
          <h3 className="text-xs font-bold uppercase tracking-widest text-stone-300">
            The True Cost of Diesel
          </h3>
        </div>

        {/* Global Impact */}
        <div className="mb-8">
          <div className="text-sm text-stone-400 mb-4">Global Impact</div>
          <div className="grid md:grid-cols-2 gap-4">
            {trueCostGlobal.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-white">{item.impact}</span>
                  <span className="text-lg font-black text-blue-400">{item.value}</span>
                </div>
                <div className="text-xs text-stone-400">{item.detail}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* India Context */}
        <div>
          <div className="text-sm text-stone-400 mb-4">India Context</div>
          <div className="space-y-3">
            {trueCostIndia.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                className="p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-white">{item.pollutant}</span>
                  <span className="text-xl font-black text-blue-400">{item.amount}</span>
                </div>
                <div className="text-xs text-stone-400">{item.source}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Context Message */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-stone-50 border-2 border-blue-200 rounded-xl p-8">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="relative z-10 flex items-start gap-4">
          <Truck size={32} className="text-blue-500 shrink-0 mt-1" />
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
              Diesel Powers Global Transport
            </h3>
            <p className="text-xl font-bold text-black leading-relaxed mb-4">
              While the transition to electric vehicles is underway, diesel will remain critical for heavy transport, logistics, and industrial applications for decades. Ignitron D provides an immediate, practical solution to improve efficiency and reduce emissions today.
            </p>
            <div className="flex items-center gap-2 text-sm font-bold text-blue-600">
              <span>Immediate benefits for oil-importing economies</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default IgnitronDDeepDive;
