import { motion } from 'framer-motion';
import { Beaker, Gauge, Droplets, Factory, Shield, CheckCircle, AlertCircle, Thermometer, Wind, Zap, ArrowRight } from 'lucide-react';

const CoalorixTechnicalSpecs = () => {
  const specifications = [
    { category: 'Physical Form', value: 'Liquid concentrate', icon: Droplets },
    { category: 'Color', value: 'Dark brown to black', icon: Beaker },
    { category: 'Density', value: '0.98-1.02 g/cm³', icon: Gauge },
    { category: 'pH Level', value: '6.5-8.5', icon: Thermometer },
    { category: 'Solubility', value: 'Water-dispersible', icon: Wind },
    { category: 'Flash Point', value: '>100°C', icon: Zap }
  ];

  const dosageRanges = [
    { type: 'Minimum', value: '0.05%', unit: '(500 ppm)', description: 'Low-grade coal or initial trials', color: 'blue' },
    { type: 'Optimal', value: '0.1%', unit: '(1,000 ppm)', description: 'Standard application (recommended)', color: 'orange' },
    { type: 'Maximum', value: '0.2%', unit: '(2,000 ppm)', description: 'High-efficiency targets', color: 'emerald' }
  ];

  const coalCompatibility = [
    { type: 'Anthracite', gcv: '6,500-7,500', compatible: true, savings: '5-8%' },
    { type: 'Bituminous', gcv: '5,500-6,500', compatible: true, savings: '7-10%' },
    { type: 'Sub-Bituminous', gcv: '4,500-5,500', compatible: true, savings: '8-12%' },
    { type: 'Lignite', gcv: '2,400-4,500', compatible: true, savings: '10-15%' }
  ];

  const performanceMetrics = [
    { metric: 'Coal Savings', range: '6-15%', typical: '9%', icon: Factory },
    { metric: 'Efficiency Gain', range: '6-15%', typical: '9%', icon: Gauge },
    { metric: 'PM Reduction', range: '20-35%', typical: '30%', icon: Wind },
    { metric: 'CO Reduction', range: '15-30%', typical: '25%', icon: Droplets }
  ];

  const applicationMethods = [
    {
      method: 'Conveyor Belt Injection',
      description: 'Spray at coal transfer point',
      suitable: 'Large plants (>500 MW)',
      equipment: 'Spray nozzles, pump system'
    },
    {
      method: 'Coal Bunker Addition',
      description: 'Direct injection into bunker',
      suitable: 'Medium plants (100-500 MW)',
      equipment: 'Dosing pump, mixing system'
    },
    {
      method: 'Pre-Treatment Tank',
      description: 'Coal slurry pre-treatment',
      suitable: 'Small plants (<100 MW)',
      equipment: 'Mixing tank, agitator'
    }
  ];

  const safetyCompliance = [
    'Non-toxic formulation',
    'No harmful residues',
    'Compatible with existing pollution control systems (ESP, Baghouse, FGD)',
    'MSDS available on request'
  ];

  return (
    <div className="space-y-8">

      {/* Product Specifications Grid */}
      <div className="bg-white border border-stone-200 rounded-xl p-6">
        <h3 className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-6 pb-4 border-b border-stone-200 flex items-center gap-2">
          <Beaker size={16} />
          Product Specifications
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {specifications.map((spec, idx) => {
            const IconComponent = spec.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="p-4 bg-stone-50 border border-stone-200 rounded-lg hover:border-orange-500/30 transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <IconComponent size={20} className="text-orange-500 group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-1">
                  {spec.category}
                </div>
                <div className="text-lg font-bold text-black">
                  {spec.value}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Dosage Guide */}
      <div className="bg-gradient-to-br from-orange-50 to-stone-50 border-2 border-orange-200 rounded-xl p-6">
        <h3 className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-6 flex items-center gap-2">
          <Droplets size={16} />
          Dosage Application Guide
        </h3>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {dosageRanges.map((dosage, idx) => (
            <div
              key={idx}
              className={`p-6 bg-white border-2 ${dosage.type === 'Optimal'
                  ? 'border-orange-500 shadow-lg'
                  : 'border-stone-200'
                } rounded-xl`}
            >
              <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-3">
                {dosage.type}
              </div>
              <div className="text-4xl font-black text-black mb-1">
                {dosage.value}
                <span className="text-xl ml-1 text-stone-400">{dosage.unit}</span>
              </div>
              <div className="text-sm text-stone-600 mt-3">
                {dosage.description}
              </div>
              {dosage.type === 'Optimal' && (
                <div className="mt-3 px-3 py-1 bg-orange-500 text-white text-xs font-bold uppercase tracking-widest rounded-full inline-block">
                  Recommended
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Dosage Calculation */}
        <div className="p-4 bg-white border border-orange-200 rounded-lg">
          <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-3">
            Calculation Formula
          </div>
          <div className="font-mono text-sm text-stone-700 bg-stone-50 p-4 rounded border border-stone-200">
            <div className="mb-2">
              <span className="text-orange-600 font-bold">Dosage Required (kg/day)</span> = Coal Consumption (tons/day) × Dosage Rate (ppm) / 1000
            </div>
            <div className="text-xs text-stone-500 mt-3 pt-3 border-t border-stone-200">
              Example: 4,000 tons/day × 1,000 ppm / 1000 = <span className="font-bold text-orange-600">4,000 kg/day (4 tons/day)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Coal Type Compatibility */}
      <div className="bg-white border border-stone-200 rounded-xl p-6">
        <h3 className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-6 pb-4 border-b border-stone-200">
          Coal Type Compatibility Matrix
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-stone-200">
                <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-widest text-stone-500">
                  Coal Type
                </th>
                <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-widest text-stone-500">
                  GCV Range (kcal/kg)
                </th>
                <th className="text-center py-3 px-4 text-xs font-bold uppercase tracking-widest text-stone-500">
                  Compatible
                </th>
                <th className="text-right py-3 px-4 text-xs font-bold uppercase tracking-widest text-stone-500">
                  Expected Savings
                </th>
              </tr>
            </thead>
            <tbody>
              {coalCompatibility.map((coal, idx) => (
                <tr key={idx} className="border-b border-stone-100 hover:bg-stone-50 transition-colors">
                  <td className="py-4 px-4 font-bold text-black">{coal.type}</td>
                  <td className="py-4 px-4 text-stone-600">{coal.gcv}</td>
                  <td className="py-4 px-4 text-center">
                    <CheckCircle className="text-emerald-500 inline-block" size={20} />
                  </td>
                  <td className="py-4 px-4 text-right font-bold text-orange-600">{coal.savings}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 p-3 bg-stone-50 border border-stone-200 rounded-lg text-xs text-stone-600">
          <strong>Note:</strong> Savings percentages are typical ranges. Actual results depend on plant configuration, coal quality, and operational parameters.
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="bg-white border border-stone-200 rounded-xl p-6">
        <h3 className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-6 pb-4 border-b border-stone-200 flex items-center gap-2">
          <Gauge size={16} />
          Performance Metrics
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {performanceMetrics.map((metric, idx) => {
            const IconComponent = metric.icon;
            return (
              <div key={idx} className="p-6 bg-stone-50 border border-stone-200 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <IconComponent size={24} className="text-orange-500" />
                  <div className="text-sm font-bold text-black">{metric.metric}</div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-stone-500">Range:</span>
                    <span className="font-bold text-black">{metric.range}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-stone-500">Typical:</span>
                    <span className="font-bold text-orange-600">{metric.typical}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Application Methods - Flowchart */}
      <div className="bg-white border border-stone-200 rounded-xl p-6">
        <h3 className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-6 pb-4 border-b border-stone-200 flex items-center gap-2">
          <Factory size={16} />
          Application Methods
        </h3>

        {/* Flowchart Layout */}
        <div className="relative">
          {/* Connection Lines - Hidden on mobile */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-orange-300 via-orange-400 to-orange-300 transform -translate-y-1/2 -z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {applicationMethods.map((method, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.15 }}
                className="relative"
              >
                {/* Method Card */}
                <div className="p-6 bg-gradient-to-br from-stone-50 to-white border-2 border-orange-200 rounded-xl hover:border-orange-400 hover:shadow-lg transition-all">
                  {/* Method Number Badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-4 border-white">
                    {idx + 1}
                  </div>

                  {/* Method Title */}
                  <h4 className="text-lg font-bold text-black mb-4 mt-2">{method.method}</h4>

                  {/* Method Details */}
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-1">
                        Description
                      </div>
                      <div className="text-stone-700 font-medium">{method.description}</div>
                    </div>
                    <div className="pt-2 border-t border-stone-200">
                      <div className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-1">
                        Suitable For
                      </div>
                      <div className="text-stone-700 font-medium">{method.suitable}</div>
                    </div>
                    <div className="pt-2 border-t border-stone-200">
                      <div className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-1">
                        Equipment
                      </div>
                      <div className="text-stone-700 font-medium">{method.equipment}</div>
                    </div>
                  </div>
                </div>

                {/* Arrow to Next Method - Hidden on last item and mobile */}
                {idx < applicationMethods.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2 z-20">
                    <ArrowRight size={32} className="text-orange-500" strokeWidth={3} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Safety & Compliance */}
      <div className="bg-gradient-to-br from-stone-900 to-stone-800 text-white rounded-xl p-6 border border-stone-700">
        <h3 className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-6 pb-4 border-b border-white/10 flex items-center gap-2">
          <Shield size={16} />
          Safety & Compliance
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {safetyCompliance.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 bg-white/5 border border-white/10 rounded-lg">
              <CheckCircle size={18} className="text-emerald-400 shrink-0 mt-0.5" />
              <span className="text-sm text-stone-200">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-orange-500/10 border border-orange-500/30 rounded-lg">
          <div className="flex items-start gap-3">
            <AlertCircle size={20} className="text-orange-400 shrink-0 mt-0.5" />
            <div className="text-sm text-stone-200">
              <strong className="text-orange-400">Storage & Handling:</strong> Store in cool, dry place away from direct sunlight. Use standard chemical handling procedures. Personal protective equipment (PPE) recommended during handling.
            </div>
          </div>
        </div>
      </div>

      {/* Quick Reference Card */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-6 bg-white border border-stone-200 rounded-xl text-center">
          <div className="text-3xl mb-3">📦</div>
          <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">
            Packaging
          </div>
          <div className="text-lg font-bold text-black">
            200L Drums
          </div>
          <div className="text-xs text-stone-500 mt-1">IBC tanks available</div>
        </div>

        <div className="p-6 bg-white border border-stone-200 rounded-xl text-center">
          <div className="text-3xl mb-3">📅</div>
          <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">
            Shelf Life
          </div>
          <div className="text-lg font-bold text-black">
            12 Months
          </div>
          <div className="text-xs text-stone-500 mt-1">From date of manufacture</div>
        </div>

        <div className="p-6 bg-white border border-stone-200 rounded-xl text-center">
          <div className="text-3xl mb-3">🌡️</div>
          <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">
            Storage Temp
          </div>
          <div className="text-lg font-bold text-black">
            5-40°C
          </div>
          <div className="text-xs text-stone-500 mt-1">Ambient conditions</div>
        </div>
      </div>

    </div>
  );
};

export default CoalorixTechnicalSpecs;
