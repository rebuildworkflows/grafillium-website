import { motion } from 'framer-motion';
import { Droplets, Flame, Wind, Shield, Gauge, TrendingUp } from 'lucide-react';

const IgnitronPHowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Combustion-Active Sites',
      description: 'Molecular enhancers create active sites that optimize fuel-air mixing and improve combustion chemistry at the molecular level',
      icon: Flame,
      detail: 'Enhanced fuel atomization'
    },
    {
      number: 2,
      title: 'Surface Agents',
      description: 'Advanced surface-active compounds improve fuel dispersion and promote uniform mixing throughout the combustion chamber',
      icon: Droplets,
      detail: 'Uniform fuel distribution'
    },
    {
      number: 3,
      title: 'Flame Stabilization',
      description: 'Proprietary stabilizers ensure consistent flame propagation, reducing incomplete combustion and engine knock',
      icon: Wind,
      detail: 'Smoother combustion'
    },
    {
      number: 4,
      title: 'Reduced Emissions',
      description: 'More complete combustion translates directly to lower CO, HC, and particulate emissions while maintaining engine performance',
      icon: Shield,
      detail: 'Up to 30% HC reduction'
    },
    {
      number: 5,
      title: 'Fuel Economy Gains',
      description: 'Optimized combustion efficiency converts more fuel energy into useful work, reducing consumption and costs',
      icon: Gauge,
      detail: 'Up to 10% fuel savings'
    },
    {
      number: 6,
      title: 'Engine Protection',
      description: 'Cleaner combustion reduces carbon deposits and knocking, extending engine life and catalyst durability',
      icon: TrendingUp,
      detail: 'Longer component life'
    }
  ];

  return (
    <div className="space-y-8">

      {/* Process Flow */}
      <div className="relative">
        {/* Connection Lines */}
        <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500 via-purple-300 to-purple-500 transform -translate-x-1/2 hidden lg:block" />

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
                      <div className="w-12 h-12 flex items-center justify-center bg-purple-950 text-white font-black text-xl rounded-lg border border-purple-500/30 shadow-lg">
                        {step.number}
                      </div>
                      <h3 className="text-xl font-bold text-black">{step.title}</h3>
                    </div>

                    <p className="text-stone-600 leading-relaxed font-medium">
                      {step.description}
                    </p>

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-50 border border-purple-200 rounded-lg">
                      <span className="text-xs font-bold uppercase tracking-widest text-purple-600">
                        {step.detail}
                      </span>
                    </div>
                  </div>

                  {/* Visual Icon Card */}
                  <div className={`${isEven ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative p-8 bg-gradient-to-br from-stone-50 to-white border border-stone-200 rounded-xl hover:border-purple-500/30 transition-all group overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-all" />
                      <IconComponent size={48} className="text-purple-500 relative z-10" strokeWidth={1.5} />
                    </motion.div>
                  </div>

                </div>

                {/* Center Dot for Timeline */}
                {idx < steps.length - 1 && (
                  <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 -translate-y-1/2 hidden lg:block z-10" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Before & After Comparison */}
      <div className="mt-16 p-8 bg-gradient-to-br from-stone-900 to-stone-800 text-white rounded-xl border border-stone-700">
        <h3 className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-8 text-center">
          Performance Transformation
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Before */}
          <div className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
            <div className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4">
              Without Ignitron P
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-stone-300">Fuel Consumption:</span>
                <span className="font-bold text-red-400">Baseline</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-stone-300">CO Emissions:</span>
                <span className="font-bold text-red-400">100%</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-stone-300">HC Emissions:</span>
                <span className="font-bold text-red-400">100%</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-stone-300">Engine Knocking:</span>
                <span className="font-bold text-red-400">Present</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-300">Particulates:</span>
                <span className="font-bold text-red-400">100%</span>
              </div>
            </div>
          </div>

          {/* After */}
          <div className="p-6 bg-purple-500/10 border border-purple-500/30 rounded-xl backdrop-blur-sm">
            <div className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-4">
              With Ignitron P
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-stone-300">Fuel Consumption:</span>
                <span className="font-bold text-purple-400">↓ Up to 10%</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-stone-300">CO Emissions:</span>
                <span className="font-bold text-purple-400">↓ 10-20%</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-stone-300">HC Emissions:</span>
                <span className="font-bold text-purple-400">↓ 15-30%</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-stone-300">Engine Knocking:</span>
                <span className="font-bold text-purple-400">↓ Reduced</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-300">Particulates:</span>
                <span className="font-bold text-purple-400">↓ 10-20%</span>
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
            Molecular Enhancement
          </div>
          <p className="text-sm text-stone-600">
            Proprietary combustion enhancers optimize fuel-air mixing at molecular level
          </p>
        </div>

        <div className="p-6 bg-stone-50 border border-stone-200 rounded-xl">
          <div className="text-2xl mb-3">⛽</div>
          <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">
            Universal Compatibility
          </div>
          <p className="text-sm text-stone-600">
            Works with BS-VI, catalytic converters, GDI/MPFI, and ethanol blends
          </p>
        </div>

        <div className="p-6 bg-stone-50 border border-stone-200 rounded-xl">
          <div className="text-2xl mb-3">✅</div>
          <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">
            Centralized Dosing
          </div>
          <p className="text-sm text-stone-600">
            Refinery/terminal deployment for seamless integration
          </p>
        </div>
      </div>

      {/* Application Details */}
      <div className="p-6 bg-white border border-stone-200 rounded-xl">
        <h3 className="text-xs font-bold uppercase tracking-widest text-purple-500 mb-4 pb-4 border-b border-stone-200">
          Application Details
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="text-sm font-bold text-stone-500 mb-2">Dosage</div>
            <div className="text-lg font-bold text-black">2.5 L / 1000 L</div>
            <div className="text-xs text-stone-500 mt-1">0.25% (v/v)</div>
          </div>
          <div>
            <div className="text-sm font-bold text-stone-500 mb-2">Deployment</div>
            <div className="text-lg font-bold text-black">Refinery/Terminal</div>
            <div className="text-xs text-stone-500 mt-1">Centralized dosing</div>
          </div>
          <div>
            <div className="text-sm font-bold text-stone-500 mb-2">Compatibility</div>
            <div className="text-lg font-bold text-black">All Systems</div>
            <div className="text-xs text-stone-500 mt-1">BS-VI compliant</div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default IgnitronPHowItWorks;
