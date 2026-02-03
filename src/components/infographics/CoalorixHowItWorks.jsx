import { motion } from 'framer-motion';
import { ArrowRight, Zap, Droplets, Flame, Wind, Gauge, TrendingUp } from 'lucide-react';

const CoalorixHowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Nano-Particle Penetration',
      description: 'Advanced nano-catalysts penetrate coal particle pores and micro-structures',
      icon: Droplets,
      detail: 'Surface area increased by 150%'
    },
    {
      number: 2,
      title: 'Micro-Crack Formation',
      description: 'Creates micro-fractures in coal matrix for enhanced oxygen access',
      icon: Zap,
      detail: 'Better fuel-air mixing'
    },
    {
      number: 3,
      title: 'Moisture Displacement',
      description: 'Removes surface moisture and improves hydrocarbon exposure',
      icon: Wind,
      detail: 'Faster ignition response'
    },
    {
      number: 4,
      title: 'Enhanced Combustion',
      description: 'Catalytic sites enable complete carbon burnout at molecular level',
      icon: Flame,
      detail: '96% → 98.5% burnout efficiency'
    },
    {
      title: 'Heat Transfer Optimization',
      description: 'Higher flame temperature (~+40°C) improves thermal efficiency',
      icon: Gauge,
      detail: '82% → 89% boiler efficiency'
    },
    {
      number: 6,
      title: 'Emission Reduction',
      description: 'The catalyst enables lower ignition temperature which reduces PM, CO, NOₓ, and SO₂ formation',
      icon: TrendingUp,
      detail: 'Up to 35% fewer emissions'
    }
  ];

  return (
    <div className="space-y-8">

      {/* Process Flow */}
      <div className="relative">
        {/* Connection Lines */}
        <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-orange-500 via-orange-300 to-orange-500 transform -translate-x-1/2 hidden lg:block" />

        <div className="space-y-12">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                <div className={`grid lg:grid-cols-2 gap-8 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>

                  {/* Content Card */}
                  <div className={`${isEven ? 'lg:text-right' : 'lg:col-start-2'} space-y-3`}>
                    <div className={`flex items-center gap-3 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                      <div className="w-12 h-12 flex items-center justify-center bg-orange-950 text-white font-black text-xl rounded-lg border border-orange-500/30 shadow-lg">
                        {step.number}
                      </div>
                      <h3 className="text-xl font-bold text-black">{step.title}</h3>
                    </div>

                    <p className="text-stone-600 leading-relaxed font-medium">
                      {step.description}
                    </p>

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-50 border border-orange-200 rounded-lg">
                      <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
                        {step.detail}
                      </span>
                    </div>
                  </div>

                  {/* Visual Icon Card */}
                  <div className={`${isEven ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative p-8 bg-gradient-to-br from-stone-50 to-white border border-stone-200 rounded-xl hover:border-orange-500/30 transition-all group"
                    >
                      <div className="absolute top-4 right-4 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl group-hover:bg-orange-500/10 transition-all" />
                      <IconComponent size={48} className="text-orange-500 relative z-10" strokeWidth={1.5} />
                    </motion.div>
                  </div>

                </div>

                {/* Center Dot for Timeline */}
                {idx < steps.length - 1 && (
                  <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 -translate-y-1/2 hidden lg:block z-10" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Before & After Comparison */}
      <div className="mt-16 p-8 bg-gradient-to-br from-stone-900 to-stone-800 text-white rounded-xl border border-stone-700">
        <h3 className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-8 text-center">
          Performance Transformation
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Before */}
          <div className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
            <div className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4">
              Without Coalorix
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-stone-300">Carbon Burnout:</span>
                <span className="font-bold text-red-400">92%</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-stone-300">Boiler Efficiency:</span>
                <span className="font-bold text-red-400">82%</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-stone-300">Flame Temperature:</span>
                <span className="font-bold text-red-400">1,420°C</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-stone-300">PM Emissions:</span>
                <span className="font-bold text-red-400">100% (baseline)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-300">Application:</span>
                <span className="font-bold text-orange-400">Thermal Power</span>
              </div>
            </div>
          </div>

          {/* After */}
          <div className="p-6 bg-orange-500/10 border border-orange-500/30 rounded-xl backdrop-blur-sm">
            <div className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-4">
              With Coalorix
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-stone-300">Carbon Burnout:</span>
                <span className="font-bold text-emerald-400">98.5% ↑6.5%</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-stone-300">Boiler Efficiency:</span>
                <span className="font-bold text-emerald-400">89% ↑7%</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-stone-300">Flame Temperature:</span>
                <span className="font-bold text-emerald-400">1,460°C ~+40°C</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-stone-300">PM Emissions:</span>
                <span className="font-bold text-emerald-400">65% ↓35%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-300">Coal Consumption:</span>
                <span className="font-bold text-emerald-400">3,400 TPD ↓15%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Science Points */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-6 bg-stone-50 border border-stone-200 rounded-xl">
          <div className="text-2xl mb-3">🔬</div>
          <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">
            Nano-Scale Action
          </div>
          <p className="text-sm text-stone-600">
            Works at molecular level - particles penetrate 10-50 nanometer pores in coal structure
          </p>
        </div>

        <div className="p-6 bg-stone-50 border border-stone-200 rounded-xl">
          <div className="text-2xl mb-3">⚡</div>
          <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">
            Catalytic Process
          </div>
          <p className="text-sm text-stone-600">
            Creates active sites that lower activation energy for complete combustion reactions
          </p>
        </div>

        <div className="p-6 bg-stone-50 border border-stone-200 rounded-xl">
          <div className="text-2xl mb-3">🎯</div>
          <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">
            Drop-In Solution
          </div>
          <p className="text-sm text-stone-600">
            No infrastructure changes required - simple injection at conveyor or bunker
          </p>
        </div>
      </div>

      {/* Dosage Information */}
      <div className="p-6 bg-white border border-stone-200 rounded-xl">
        <h3 className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-4 pb-4 border-b border-stone-200">
          Application Details
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="text-sm font-bold text-stone-500 mb-2">Dosage</div>
            <div className="text-2xl font-bold text-black">
              up to 0.1%
            </div>
            <div className="text-xs text-stone-500 mt-1">w/w (1L per ton)</div>
          </div>
          <div>
            <div className="text-sm font-bold text-stone-500 mb-2">Injection Point</div>
            <div className="text-lg font-bold text-black">Conveyor Belt</div>
            <div className="text-xs text-stone-500 mt-1">Or coal bunker before feeding</div>
          </div>
          <div>
            <div className="text-sm font-bold text-stone-500 mb-2">Compatibility</div>
            <div className="text-lg font-bold text-black">All Coal Types</div>
            <div className="text-xs text-stone-500 mt-1">GCV 2,400-6,500 kcal/kg</div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CoalorixHowItWorks;
