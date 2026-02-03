import { motion } from 'framer-motion';
import { Droplets, Flame, Shield, Wind, Gauge, TrendingUp, Clock, Wrench } from 'lucide-react';

const LubritronHowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Nano-Lubrication Layer',
      description: 'Ultra-thin protective layer forms on metal surfaces, creating a molecular-level barrier that dramatically reduces friction',
      icon: Droplets,
      detail: 'Friction reduction at molecular level'
    },
    {
      number: 2,
      title: 'Friction Catalysis',
      description: 'Advanced catalytic compounds optimize the lubrication process, ensuring consistent performance under varying conditions',
      icon: Flame,
      detail: 'Up to 40% wear reduction'
    },
    {
      number: 3,
      title: 'Thermal Stability',
      description: 'Enhanced temperature resistance prevents oil breakdown, maintaining viscosity and performance under extreme heat',
      icon: Wind,
      detail: 'Extended oil life up to 50%'
    },
    {
      number: 4,
      title: 'Oxidation Control',
      description: 'Prevents oil oxidation and sludge formation, keeping the engine cleaner and extending maintenance intervals',
      icon: Shield,
      detail: 'Lower maintenance costs'
    },
    {
      number: 5,
      title: 'Energy Efficiency',
      description: 'Reduced friction translates directly to improved fuel economy and lower emissions',
      icon: Gauge,
      detail: 'Up to 6% fuel savings'
    },
    {
      number: 6,
      title: 'Extended Engine Life',
      description: 'Cumulative benefits of reduced wear, better lubrication, and cleaner operation extend overall engine lifespan',
      icon: TrendingUp,
      detail: 'Longer engine life'
    }
  ];

  return (
    <div className="space-y-8">

      {/* Process Flow */}
      <div className="relative">
        {/* Connection Lines */}
        <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-emerald-500 via-emerald-300 to-emerald-500 transform -translate-x-1/2 hidden lg:block" />

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
                      <div className="w-12 h-12 flex items-center justify-center bg-emerald-950 text-white font-black text-xl rounded-lg border border-emerald-500/30 shadow-lg">
                        {step.number}
                      </div>
                      <h3 className="text-xl font-bold text-black">{step.title}</h3>
                    </div>

                    <p className="text-stone-600 leading-relaxed font-medium">
                      {step.description}
                    </p>

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-lg">
                      <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                        {step.detail}
                      </span>
                    </div>
                  </div>

                  {/* Visual Icon Card */}
                  <div className={`${isEven ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative p-8 bg-gradient-to-br from-stone-50 to-white border border-stone-200 rounded-xl hover:border-emerald-500/30 transition-all group"
                    >
                      <div className="absolute top-4 right-4 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-all" />
                      <IconComponent size={48} className="text-emerald-500 relative z-10" strokeWidth={1.5} />
                    </motion.div>
                  </div>

                </div>

                {/* Center Dot for Timeline */}
                {idx < steps.length - 1 && (
                  <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 -translate-y-1/2 hidden lg:block z-10" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Before & After Comparison */}
      <div className="mt-16 p-8 bg-gradient-to-br from-stone-900 to-stone-800 text-white rounded-xl border border-stone-700">
        <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-8 text-center">
          Performance Transformation
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Before */}
          <div className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
            <div className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4">
              Without Lubritron
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-stone-300">Fuel Consumption:</span>
                <span className="font-bold text-red-400">Baseline</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-stone-300">Engine Wear:</span>
                <span className="font-bold text-red-400">100%</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-stone-300">Oil Change Interval:</span>
                <span className="font-bold text-red-400">Standard</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-stone-300">Maintenance Cost:</span>
                <span className="font-bold text-red-400">100%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-300">PM Emissions:</span>
                <span className="font-bold text-red-400">100%</span>
              </div>
            </div>
          </div>

          {/* After */}
          <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-xl backdrop-blur-sm">
            <div className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4">
              With Lubritron
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-stone-300">Fuel Consumption:</span>
                <span className="font-bold text-emerald-400">↓ Up to 6%</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-stone-300">Engine Wear:</span>
                <span className="font-bold text-emerald-400">↓ Up to 40%</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-stone-300">Oil Change Interval:</span>
                <span className="font-bold text-emerald-400">↑ Up to 50%</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-stone-300">Maintenance Cost:</span>
                <span className="font-bold text-emerald-400">↓ Reduced</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-300">PM Emissions:</span>
                <span className="font-bold text-emerald-400">↓ Up to 25%</span>
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
            Nano-Technology
          </div>
          <p className="text-sm text-stone-600">
            Works at molecular level to create ultra-thin protective layers on metal surfaces
          </p>
        </div>

        <div className="p-6 bg-stone-50 border border-stone-200 rounded-xl">
          <div className="text-2xl mb-3">🛢️</div>
          <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">
            Universal Compatibility
          </div>
          <p className="text-sm text-stone-600">
            Works with all engine oils - mineral, semi-synthetic, and fully synthetic
          </p>
        </div>

        <div className="p-6 bg-stone-50 border border-stone-200 rounded-xl">
          <div className="text-2xl mb-3">✅</div>
          <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">
            Drop-In Solution
          </div>
          <p className="text-sm text-stone-600">
            Simply add to existing engine oil - no special procedures required
          </p>
        </div>
      </div>

      {/* Application Details */}
      <div className="p-6 bg-white border border-stone-200 rounded-xl">
        <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-4 pb-4 border-b border-stone-200">
          Application Details
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="text-sm font-bold text-stone-500 mb-2">Dosage</div>
            <div className="text-lg font-bold text-black">Per Guidelines</div>
            <div className="text-xs text-stone-500 mt-1">As per manufacturer</div>
          </div>
          <div>
            <div className="text-sm font-bold text-stone-500 mb-2">Deployment</div>
            <div className="text-lg font-bold text-black">Add to Oil</div>
            <div className="text-xs text-stone-500 mt-1">Direct addition</div>
          </div>
          <div>
            <div className="text-sm font-bold text-stone-500 mb-2">Compatibility</div>
            <div className="text-lg font-bold text-black">All Oils</div>
            <div className="text-xs text-stone-500 mt-1">Mineral & Synthetic</div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default LubritronHowItWorks;
