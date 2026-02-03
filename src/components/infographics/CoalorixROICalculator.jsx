import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, RefreshCw, Gauge } from 'lucide-react'

export default function CoalorixROICalculator() {
  // Updated to match verified specification - 8000 TPD, ₹3000/ton coal, ₹220/ton treatment
  const [inputs, setInputs] = useState({
    dailyCoalConsumption: 8000,
    coalCost: 3000,
    savingsPercent: 15,
    capexInvestment: 200, // Fixed at ₹2 Cr
    treatmentCostPerTon: 220
  })

  // Verified calculation formulas (investor-safe, CFO-approved)
  const calculate = () => {
    // Coal savings
    const coalQtyReduction = (inputs.dailyCoalConsumption * inputs.savingsPercent) / 100
    const coalCostReduction = (coalQtyReduction * inputs.coalCost) / 100000 // in Lakhs

    // Treatment cost on FULL coal quantity (verified formula)
    const additiveCost = (inputs.dailyCoalConsumption * inputs.treatmentCostPerTon) / 100000 // in Lakhs

    // Net financial savings
    const netSavingsPerDay = coalCostReduction - additiveCost
    const netSavingsPerMonth = netSavingsPerDay * (365 / 12) // Exact: 30.4167 days/month (verified)
    const netSavingsPerAnnum = netSavingsPerDay * 365 // Verified formula

    // ROI calculations
    const roiMonths = inputs.capexInvestment / netSavingsPerMonth
    const annualROI = ((netSavingsPerAnnum / inputs.capexInvestment) * 100).toFixed(0)
    const fiveYearReturns = netSavingsPerAnnum * 5

    // CO₂ emission calculations (verified formula for marketing)
    const carbonFraction = 0.70 // F_c for bituminous coal
    const molecularConversion = 3.67 // 44/12 (CO₂/C molecular weight ratio)
    const emissionFactor = carbonFraction * molecularConversion // ~2.569

    // Initial CO₂ emissions (without Coalorix)
    const initialCO2Daily = inputs.dailyCoalConsumption * emissionFactor

    // CO₂ emissions after coal reduction
    const finalCO2Daily = initialCO2Daily * (1 - inputs.savingsPercent / 100)

    // CO₂ avoided
    const co2AvoidedDaily = initialCO2Daily - finalCO2Daily
    const co2AvoidedAnnually = co2AvoidedDaily * 365

    return {
      coalQtyReduction: coalQtyReduction.toFixed(0),
      coalCostReduction: coalCostReduction.toFixed(2),
      additiveCost: additiveCost.toFixed(2),
      netSavingsPerDay: netSavingsPerDay.toFixed(2),
      netSavingsPerMonth: netSavingsPerMonth.toFixed(2),
      netSavingsPerAnnum: netSavingsPerAnnum.toFixed(2),
      roiMonths: roiMonths.toFixed(2),
      annualROI,
      fiveYearReturns: fiveYearReturns.toFixed(2),
      coalSavedAnnually: (coalQtyReduction * 365 / 1000).toFixed(1), // in K tons
      co2AvoidedAnnually: (co2AvoidedAnnually / 1000).toFixed(2) // in K tons (verified formula)
    }
  }

  const results = calculate()

  const resetToDefaults = () => {
    setInputs({
      dailyCoalConsumption: 8000,
      coalCost: 3000,
      savingsPercent: 15,
      capexInvestment: 200, // Fixed at ₹2 Cr
      treatmentCostPerTon: 220
    })
  }

  const handleInputChange = (field, value) => {
    setInputs({ ...inputs, [field]: parseFloat(value) })
  }

  // Adjustable parameters - Coal Saving range: 6-15%, default 15%
  const sliders = [
    { key: 'dailyCoalConsumption', label: 'Daily Coal Consumption', min: 1000, max: 15000, step: 100, unit: 'TPD' },
    { key: 'coalCost', label: 'Coal Cost', min: 2000, max: 8000, step: 100, unit: '₹/Ton' },
    { key: 'savingsPercent', label: 'Coal Savings %', min: 6, max: 15, step: 1, unit: '%' },
    { key: 'treatmentCostPerTon', label: 'Treatment Cost', min: 100, max: 500, step: 10, unit: '₹/Ton' }
  ]

  return (
    <div className="space-y-8">

      {/* Calculator Controls */}
      <div className="bg-white border border-stone-200 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone-200">
          <h3 className="text-xs font-bold uppercase tracking-widest text-orange-500 flex items-center gap-2">
            <Calculator size={16} />
            Adjust Parameters
          </h3>
          <button
            onClick={resetToDefaults}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-stone-500 hover:text-orange-500 transition-colors"
          >
            <RefreshCw size={14} />
            Reset
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {sliders.map((slider) => (
            <div key={slider.key} className="space-y-3">
              <div className="flex justify-between items-baseline">
                <label className="text-xs font-bold uppercase tracking-widest text-stone-500">
                  {slider.label}
                </label>
                <span className="text-lg font-bold text-black">
                  {inputs[slider.key].toLocaleString()}
                  <span className="text-sm ml-1 text-stone-400">{slider.unit}</span>
                </span>
              </div>
              <input
                type="range"
                min={slider.min}
                max={slider.max}
                step={slider.step}
                value={inputs[slider.key]}
                onChange={(e) => handleInputChange(slider.key, e.target.value)}
                className="w-full h-1 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-orange-500 hover:accent-orange-600"
              />
              <div className="flex justify-between text-[10px] uppercase tracking-wider text-stone-400 font-bold">
                <span>{slider.min.toLocaleString()}</span>
                <span>{slider.max.toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Fixed Parameters Display */}
        <div className="mt-6 grid md:grid-cols-1 gap-4">

          <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200 rounded-lg">
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold uppercase tracking-widest text-orange-700 mb-1">
                  CAPEX Investment (Fixed)
                </div>
                <div className="text-xs text-orange-600">
                  One-time capital investment
                </div>
              </div>
              <div className="text-2xl font-black text-orange-600 whitespace-nowrap shrink-0">
                ₹2 Cr
              </div>
            </div>
          </div>
        </div>

        {/* Verified Formula Badge */}
        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="text-[10px] uppercase tracking-widest font-bold text-blue-700 mb-2">
            ✓ Verified Formulas
          </div>
          <div className="text-[9px] text-blue-600 space-y-0.5">
            <div>• Treatment cost on full coal quantity (investor-safe)</div>
            <div>• Monthly: exact 365/12 = 30.4167 days</div>
            <div>• CO₂: (C × 0.70 × 3.67) × (1 - R)</div>
          </div>
        </div>
      </div>

      {/* Results Display */}
      <div className="grid md:grid-cols-3 gap-4">
        <motion.div
          key={results.roiMonths}
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className="p-6 bg-gradient-to-br from-orange-950 to-orange-900 text-white rounded-xl border border-orange-500/30 shadow-lg"
        >
          <Gauge size={20} className="text-orange-400 mb-4" />
          <div className="text-xs font-bold uppercase tracking-widest text-orange-300 mb-2">
            Payback Period
          </div>
          <div className="text-4xl font-black text-white tracking-tight">
            {Math.floor(parseFloat(results.roiMonths))}m {Math.round((parseFloat(results.roiMonths) - Math.floor(parseFloat(results.roiMonths))) * 30)}d
          </div>
        </motion.div>

        <motion.div
          key={results.annualROI}
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className="p-6 bg-stone-50 border border-stone-200 rounded-xl hover:border-orange-500/30 transition-all"
        >
          <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-4">
            Annual ROI
          </div>
          <div className="text-4xl font-bold text-black tracking-tight">
            {results.annualROI}
            <span className="text-xl ml-1 text-stone-400">%</span>
          </div>
        </motion.div>

        <motion.div
          key={results.netSavingsPerAnnum}
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className="p-6 bg-stone-50 border border-stone-200 rounded-xl hover:border-orange-500/30 transition-all"
        >
          <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-4">
            Annual Net Savings
          </div>
          <div className="text-4xl font-bold text-black tracking-tight">
            ₹{(results.netSavingsPerAnnum / 100).toFixed(2)}
            <span className="text-xl ml-1 text-stone-400">Cr</span>
          </div>
        </motion.div>
      </div>

      {/* Detailed Breakdown */}
      <div className="bg-white border border-stone-200 rounded-xl p-6">
        <h3 className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-6 pb-4 border-b border-stone-200">
          Financial Breakdown
        </h3>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="p-4 bg-stone-50 border border-stone-200 rounded-lg">
            <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-3">
              Daily
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-stone-600">Coal Reduced:</span>
                <span className="font-bold text-black">{results.coalQtyReduction} TPD</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-600">Cost Reduction:</span>
                <span className="font-bold text-black">₹{results.coalCostReduction}L</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-600">Additive Cost:</span>
                <span className="font-bold text-stone-500">-₹{results.additiveCost}L</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-stone-200">
                <span className="font-bold text-stone-900">Net Savings:</span>
                <span className="font-bold text-orange-500">₹{results.netSavingsPerDay}L</span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-stone-50 border border-stone-200 rounded-lg">
            <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-3">
              Monthly
            </div>
            <div className="text-3xl font-bold text-black">
              ₹{results.netSavingsPerMonth}
              <span className="text-lg ml-1 text-stone-400">L</span>
            </div>
          </div>

          <div className="p-4 bg-stone-50 border border-stone-200 rounded-lg">
            <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-3">
              Annual
            </div>
            <div className="text-3xl font-bold text-black">
              ₹{results.netSavingsPerAnnum}
              <span className="text-lg ml-1 text-stone-400">L</span>
            </div>
          </div>
        </div>

        {/* 5-Year Projection */}
        <div className="p-6 bg-gradient-to-br from-stone-900 to-stone-800 text-white rounded-xl border border-stone-700">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">
                5-Year Total Returns
              </div>
              <div className="text-4xl font-black text-white tracking-tight">
                ₹{(results.fiveYearReturns / 100).toFixed(2)}
                <span className="text-xl ml-1 text-stone-300">Cr</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">
                ROI Multiple
              </div>
              <div className="text-4xl font-black text-orange-400 tracking-tight">
                {(results.fiveYearReturns / inputs.capexInvestment).toFixed(1)}
                <span className="text-xl ml-1">x</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Environmental Impact - Using Verified CO₂ Formula */}
      <div className="bg-stone-50 border border-stone-200 rounded-xl p-6">
        <h3 className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-6">
          Environmental Impact (Annual)
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="text-center p-4 bg-white border border-stone-200 rounded-lg">
            <div className="text-3xl mb-2">🔥</div>
            <div className="text-2xl font-bold text-black">
              {results.coalSavedAnnually}K
            </div>
            <div className="text-xs uppercase tracking-widest text-stone-500 mt-1">
              Tons Coal Saved
            </div>
          </div>
          <div className="text-center p-4 bg-white border border-stone-200 rounded-lg">
            <div className="text-3xl mb-2">💨</div>
            <div className="text-2xl font-bold text-black">
              {results.co2AvoidedAnnually}K
            </div>
            <div className="text-xs uppercase tracking-widest text-stone-500 mt-1">
              Tons CO₂ Avoided
            </div>
            <div className="text-[9px] uppercase tracking-wider text-stone-400 mt-2">
              Formula: E = (C × 0.70 × 3.67) × (1 - R)
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
