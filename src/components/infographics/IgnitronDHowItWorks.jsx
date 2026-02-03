import { motion } from 'framer-motion';
import { Droplets, Zap, Flame, Wind, Gauge, TrendingUp, Shield, Sparkles } from 'lucide-react';

const IgnitronDHowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Nano-Catalytic Sites',
      description: 'Ultra-fine catalytic particles create active combustion sites at the molecular level',
      icon: Sparkles,
      detail: 'Enhanced fuel atomization'
    },
    {
      number: 2,
      title: 'Smart Dispersants',
      description: 'Advanced dispersant technology ensures uniform fuel mixture and prevents deposit formation',
      icon: Droplets,
      detail: 'Cleaner injectors'
    },
    {
      number: 3,
      title: 'Thermal Smoothing',
      description: 'Optimized combustion profile reduces peak temperatures while increasing overall efficiency',
      icon: Flame,
      detail: 'Smoother engine operation'
    },
    {
      number: 4,
      title: 'Complete Combustion',
      description: 'Near-complete fuel burnout reduces unburned hydrocarbons and particulate matter',
      icon: Zap,
      detail: 'Up to 40% fewer emissions'
    },
    {
      number: 5,
      title: 'Efficiency Gains',
      description: 'Improved combustion efficiency translates directly to better fuel economy',
      icon: Gauge,
      detail: 'Up to 20% fuel savings'
    },
    {
      number: 6,
      title: 'Engine Protection',
      description: 'Reduced deposits and cleaner combustion extend engine life and reduce maintenance',
      icon: Shield,
      detail: 'Extended engine life'
    }
  ];

  return (
    <div className="space-y-8">

      {/* Process Flow */}
      <div className="relative">
        {/* Connection Lines */}
        <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 via-blue-300 to-blue-500 transform -translate-x-1/2 hidden lg:block" />

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
                      <div className="w-12 h-12 flex items-center justify-center bg-blue-950 text-white font-black text-xl rounded-lg border border-blue-500/30 shadow-lg">
                        {step.number}
                      </div>
                      <h3 className="text-xl font-bold text-black">{step.title}</h3>
                    </div>

                    <p className="text-stone-600 leading-relaxed font-medium">
                      {step.description}
                    </p>

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-lg">
                      <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                        {step.detail}
                      </span>
                    </div>
                  </div>

                  {/* Visual Icon Card */}
                  <div className={`${isEven ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative p-8 bg-gradient-to-br from-stone-50 to-white border border-stone-200 rounded-xl hover:border-blue-500/30 transition-all group"
                    >
                      <div className="absolute top-4 right-4 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-all" />
                      <IconComponent size={48} className="text-blue-500 relative z-10" strokeWidth={1.5} />
                    </motion.div>
                  </div>

                </div>

                {/* Center Dot for Timeline */}
                {idx < steps.length - 1 && (
                  <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 -translate-y-1/2 hidden lg:block z-10" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Before & After Comparison */}
      <div className="mt-16 p-8 bg-gradient-to-br from-stone-900 to-stone-800 text-white rounded-xl border border-stone-700">
        <h3 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-8 text-center">
          Performance Transformation
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Before */}
          <div className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
            <div className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4">
              Without Ignitron D
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-stone-300">Fuel Economy:</span>
                <span className="font-bold text-red-400">Baseline</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-stone-300">PM Emissions:</span>
                <span className="font-bold text-red-400">100%</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-stone-300">CO Emissions:</span>
                <span className="font-bold text-red-400">100%</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-stone-300">HC Emissions:</span>
                <span className="font-bold text-red-400">100%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-300">Injector Condition:</span>
                <span className="font-bold text-red-400">Normal wear</span>
              </div>
            </div>
          </div>

          {/* After */}
          <div className="p-6 bg-blue-500/10 border border-blue-500/30 rounded-xl backdrop-blur-sm">
            <div className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">
              With Ignitron D
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-stone-300">Fuel Economy:</span>
                <span className="font-bold text-emerald-400">↑ Up to 20%</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-stone-300">PM Emissions:</span>
                <span className="font-bold text-emerald-400">↓ Up to 40%</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-stone-300">CO Emissions:</span>
                <span className="font-bold text-emerald-400">↓ Up to 20%</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-stone-300">HC Emissions:</span>
                <span className="font-bold text-emerald-400">↓ Up to 40%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-300">Injector Condition:</span>
                <span className="font-bold text-emerald-400">Cleaner & Protected</span>
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
            Works at molecular level to optimize every stage of the combustion process
          </p>
        </div>

        <div className="p-6 bg-stone-50 border border-stone-200 rounded-xl">
          <div className="text-2xl mb-3">✅</div>
          <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">
            BS-VI Compatible
          </div>
          <p className="text-sm text-stone-600">
            Fully compatible with ULSD, DPF, SCR and all modern emission control systems
          </p>
        </div>

        <div className="p-6 bg-stone-50 border border-stone-200 rounded-xl">
          <div className="text-2xl mb-3">🎯</div>
          <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">
            Easy Deployment
          </div>
          <p className="text-sm text-stone-600">
            Dosed at refineries/depots - no infrastructure changes required
          </p>
        </div>
      </div>

      {/* Dosage Information */}
      <div className="p-6 bg-white border border-stone-200 rounded-xl">
        <h3 className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-4 pb-4 border-b border-stone-200">
          Application Details
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="text-sm font-bold text-stone-500 mb-2">Dosage Rate</div>
            <div className="text-2xl font-bold text-black">
              0.01%
              <span className="text-sm ml-1 text-stone-400">(~10 ppm)</span>
            </div>
          </div>
          <div>
            <div className="text-sm font-bold text-stone-500 mb-2">Deployment</div>
            <div className="text-lg font-bold text-black">Refineries/Depots</div>
            <div className="text-xs text-stone-500 mt-1">Centralized dosing</div>
          </div>
          <div>
            <div className="text-sm font-bold text-stone-500 mb-2">Compatibility</div>
            <div className="text-lg font-bold text-black">Universal</div>
            <div className="text-xs text-stone-500 mt-1">ULSD, BS-VI, DPF, SCR</div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default IgnitronDHowItWorks;
