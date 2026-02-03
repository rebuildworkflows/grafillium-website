import { motion } from 'framer-motion';
import { Database, AlertTriangle, Leaf, Factory, Globe, Zap, ArrowRight, TrendingUp, DollarSign, Activity, Layers, CheckCircle2, Mountain, Flame, Building2 } from 'lucide-react';

const CoalorixDeepDive = () => {
  const coalRealityStats = [
    { label: 'Global Coal Generation', value: '60-70%', icon: Globe },
    { label: 'India Annual Consumption', value: '1.3 BMT', icon: Factory },
    { label: 'India Thermal Capacity', value: '210 GW', icon: Zap }
  ];

  const coalKeyPoints = [
    "Coal provides ~73% of India's electricity.",
    "150+ major thermal power plants are the backbone of the grid.",
    "Transition will take decades; optimization is needed NOW."
  ];

  const energyRealityGlobal = [
    { stat: '60-70%', label: 'Global electricity from thermal power', icon: Zap },
    { stat: '8.8B', label: 'Tonnes coal mined annually (2024 record)', icon: Mountain },
    { stat: 'Asia', label: 'Accounts for majority of coal production', icon: Globe }
  ];

  const energyRealityIndia = [
    { stat: '1.3BM', label: 'Tons consumed annually', sublabel: '~3.5 lakh metric tons daily', icon: Factory, percentage: 100 },
    { stat: '84%', label: 'Non-coking coal', sublabel: 'For electricity generation', icon: Zap, percentage: 84 },
    { stat: '14%', label: 'Coking coal', sublabel: 'For steelmaking', icon: Building2, percentage: 14 },
    { stat: '2%', label: 'Lignite', sublabel: 'Other industrial uses', icon: Flame, percentage: 2 },
    { stat: '73%', label: "Of India's electricity", sublabel: 'Powered by coal', icon: TrendingUp, percentage: 73 }
  ];

  const trueCostData = [
    { pollutant: 'CO₂ Emissions', share: '22.9B tons', source: 'Power sector (80%+ from coal)' },
    { pollutant: 'PM/soot & CO', share: '↓ up to 9%', source: 'Reduction with Coalorix' },
    { pollutant: 'NOₓ', share: '↓ up to 10%', source: 'Reduction with Coalorix' },
    { pollutant: 'SO₂', share: '↓ up to 8%', source: 'Reduction with Coalorix' },
    { pollutant: 'Mercury', share: 'Proportional', source: 'Reduction with Coalorix' }
  ];

  return (
    <div className="space-y-12">

      {/* Coal Energy Reality */}
      <div className="bg-white border border-stone-200 rounded-xl p-8">
        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-stone-200">
          <Database className="text-orange-500" size={24} />
          <h3 className="text-xs font-bold uppercase tracking-widest text-stone-500">
            Coal Energy Reality
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {coalRealityStats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="relative p-6 bg-stone-50 border border-stone-200 rounded-xl hover:border-orange-500/30 transition-all group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl group-hover:bg-orange-500/10 transition-all" />
                <IconComponent size={28} className="text-orange-500 mb-4 relative z-10" />
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

        <div className="p-6 bg-orange-50 border border-orange-200 rounded-xl">
          <h4 className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-4">
            Key Intelligence
          </h4>
          <ul className="space-y-3">
            {coalKeyPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 bg-orange-500 rounded-full shrink-0 shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
                <span className="text-sm font-medium text-stone-700">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* The Energy Reality - Modernized */}
      <div className="bg-white border border-stone-200 rounded-xl p-8">
        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-stone-200">
          <Layers className="text-orange-500" size={24} />
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
                  className="p-5 bg-stone-50 border border-stone-200 rounded-xl text-center hover:border-orange-500/30 transition-all group"
                >
                  <IconComponent size={24} className="text-orange-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-black text-black mb-2">{item.stat}</div>
                  <div className="text-xs text-stone-600 font-medium leading-tight">{item.label}</div>
                </motion.div>
              );
            })}
          </div>
          <div className="mt-6 p-4 bg-stone-50 border border-stone-200 rounded-lg">
            <p className="text-sm text-stone-600 font-medium">
              <strong className="text-black">Key industries:</strong> Coal remains essential for steel production and cement manufacturing, alongside electricity generation.
            </p>
          </div>
        </div>

        {/* India Context */}
        <div className="p-6 bg-gradient-to-br from-orange-50 to-stone-50 border-2 border-orange-200 rounded-xl">
          <h4 className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-6">India Context (2024)</h4>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {energyRealityIndia.slice(0, 2).map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-5 bg-white border border-orange-200 rounded-xl"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <IconComponent size={20} className="text-orange-500" />
                    <span className="text-2xl font-black text-black">{item.stat}</span>
                  </div>
                  <div className="text-sm font-bold text-stone-900 mb-1">{item.label}</div>
                  <div className="text-xs text-stone-500">{item.sublabel}</div>
                </motion.div>
              );
            })}
          </div>

          {/* Breakdown Visualization */}
          <div className="mb-6">
            <div className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-3">Coal Type Breakdown</div>
            <div className="space-y-3">
              {energyRealityIndia.slice(1, 4).map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <IconComponent size={16} className="text-orange-500" />
                        <span className="text-sm font-bold text-stone-900">{item.label}</span>
                      </div>
                      <span className="text-lg font-black text-orange-600">{item.stat}</span>
                    </div>
                    <div className="h-2 bg-white rounded-full overflow-hidden border border-orange-200">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.percentage}%` }}
                        transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
                        className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
                      />
                    </div>
                    <div className="text-xs text-stone-500">{item.sublabel}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Power Generation Highlight */}
          <div className="p-4 bg-orange-600 text-white rounded-lg">
            <div className="flex items-center gap-3">
              <TrendingUp size={24} className="shrink-0" />
              <div>
                <div className="text-2xl font-black mb-1">73%</div>
                <div className="text-sm font-medium opacity-90">of India's electricity powered by coal</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Economic Impact - Modernized */}
      <div className="bg-gradient-to-br from-orange-950 to-stone-900 text-white rounded-xl p-8 border border-orange-500/30">
        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/10">
          <Activity className="text-orange-400" size={24} />
          <h3 className="text-xs font-bold uppercase tracking-widest text-stone-300">Economic Impact</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
            <DollarSign size={32} className="text-orange-400 mb-4" />
            <div className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Annual Savings</div>
            <div className="text-3xl font-black text-white mb-3">₹1,460.00L</div>
            <div className="text-sm text-stone-300">For a plant consumption of 8,000 TPD</div>
          </div>

          <div className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
            <TrendingUp size={32} className="text-orange-400 mb-4" />
            <div className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">ROI Performance</div>
            <div className="text-3xl font-black text-white mb-3">1 month 19 days</div>
            <div className="text-sm text-stone-300">Payback period with 15% coal savings optimization</div>
          </div>
        </div>
      </div>

      {/* Coalorix Benefits - Pollutant Reduction */}
      <div className="bg-white border border-stone-200 rounded-xl p-8">
        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-stone-200">
          <Leaf className="text-orange-500" size={24} />
          <h3 className="text-xs font-bold uppercase tracking-widest text-stone-500">
            Coalorix Benefits
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-gradient-to-br from-orange-50 to-stone-50 border border-orange-200 rounded-xl">
            <h4 className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-4">
              Emission Reductions
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                <span className="text-sm font-medium text-stone-700">PM/soot & CO</span>
                <span className="text-lg font-bold text-orange-600">↓ up to 9%</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                <span className="text-sm font-medium text-stone-700">NOₓ</span>
                <span className="text-lg font-bold text-orange-600">↓ up to 10%</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                <span className="text-sm font-medium text-stone-700">SO₂</span>
                <span className="text-lg font-bold text-orange-600">↓ up to 8%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-stone-700">Mercury</span>
                <span className="text-lg font-bold text-orange-600">Proportional</span>
              </div>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-br from-orange-50 to-stone-50 border border-orange-200 rounded-xl">
            <h4 className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-4">
              Primary Benefits
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                <span className="text-sm font-medium text-stone-700">Coal Reduction</span>
                <span className="text-lg font-bold text-orange-600">up to 15%</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                <span className="text-sm font-medium text-stone-700">CO₂ Reduction</span>
                <span className="text-lg font-bold text-orange-600">Proportional</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-stone-700">Safety</span>
                <span className="text-sm font-bold text-emerald-600">No harmful residues</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-orange-600 text-white rounded-lg">
          <p className="text-sm font-bold text-center">
            Complete formulation: PM/soot & CO ↓ up to 9%; NOₓ ↓ up to 10%; SO₂ ↓ up to 8%; Mercury proportional
          </p>
        </div>
      </div>

      {/* The True Cost of Coal */}
      <div className="bg-gradient-to-br from-stone-900 to-stone-800 text-white rounded-xl p-8 border border-stone-700">
        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/10">
          <AlertTriangle className="text-orange-400" size={24} />
          <h3 className="text-xs font-bold uppercase tracking-widest text-stone-300">
            The True Cost of Coal
          </h3>
        </div>

        <div className="mb-8">
          <div className="text-sm text-stone-400 mb-2">Global Impact</div>
          <p className="text-lg font-medium text-stone-200 leading-relaxed">
            Fossil fuels account for ~73% of global GHG emissions, with coal alone contributing ~40%.
          </p>
        </div>

        <div className="space-y-3">
          {trueCostData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-white">{item.pollutant}</span>
                <span className="text-xl font-black text-orange-400">{item.share}</span>
              </div>
              <div className="text-xs text-stone-400">{item.source}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Transition Technology Message */}
      <div className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-stone-50 border-2 border-orange-200 rounded-xl p-8">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-orange-200">
            <Leaf size={24} className="text-orange-500" />
            <h3 className="text-xs font-bold uppercase tracking-widest text-stone-500">
              A Transition Technology
            </h3>
          </div>

          <p className="text-xl font-bold text-black leading-relaxed mb-4">
            While the world transitions to renewable energy, coal will remain a critical part of the energy mix for decades.
            Coalorix provides an immediate, practical solution to reduce emissions and improve efficiency today.
          </p>
          <div className="flex items-center gap-2 text-sm font-bold text-orange-600">
            <span>Optimization is needed NOW</span>
            <ArrowRight size={16} />
          </div>
        </div>
      </div>

    </div>
  );
};

export default CoalorixDeepDive;
