import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line, ComposedChart } from 'recharts';

const data = [
    {
        name: 'Typical Units',
        directSavings: 6,
        effectiveSavings: 8.5,
        range: [3, 8]
    },
    {
        name: 'Optimized Units',
        directSavings: 12,
        effectiveSavings: 14.5,
        range: [10, 15]
    }
];

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white border border-stone-200 p-4 rounded-xl shadow-xl text-stone-900">
                <p className="font-black mb-2 uppercase text-xs tracking-wider">{label}</p>
                <p className="text-stone-600 text-sm font-bold">
                    Direct Savings: <span className="text-black">{payload[0].value}%</span>
                </p>
                <p className="text-stone-600 text-sm font-bold">
                    Effective Savings: <span className="text-black">{payload[1].value}%</span>
                </p>
            </div>
        );
    }
    return null;
};

const NexergGraph = () => {
    return (
        <div className="w-full bg-white rounded-xl p-6 md:p-8">
            <div className="mb-8">
                <h3 className="text-xl font-black text-black tracking-tight">Nexerg Potential Savings Analysis</h3>
                <p className="text-stone-500 text-sm font-medium mt-1">Comparing typical vs. optimized operational baselines</p>
            </div>

            <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                        data={data}
                        margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e5e5" />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#000', fontSize: 12, fontWeight: 700 }}
                            dy={15}
                        />
                        <YAxis
                            unit="%"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#78716c', fontSize: 12, fontWeight: 600 }}
                        />
                        <Tooltip content={<CustomTooltip />} cursor={{ fill: '#f5f5f4' }} />
                        <Legend wrapperStyle={{ paddingTop: '30px', fontSize: '12px', fontWeight: '700' }} />

                        <Bar
                            dataKey="directSavings"
                            name="Direct Coal Savings"
                            fill="#000000"
                            radius={[4, 4, 0, 0]}
                            barSize={60}
                        />
                        <Line
                            type="monotone"
                            dataKey="effectiveSavings"
                            name="Effective (System) Savings"
                            stroke="#d97706"
                            strokeWidth={4}
                            dot={{ r: 6, fill: "#d97706", strokeWidth: 3, stroke: "#fff" }}
                        />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>

            <div className="mt-8 flex items-start gap-4 p-5 bg-stone-50 rounded-xl border border-stone-200">
                <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 shrink-0" />
                <p className="text-sm text-stone-600 font-medium leading-relaxed">
                    <strong className="text-black uppercase tracking-wide text-xs">Insight:</strong> System-level integration (orange line) consistently delivers ~2.5% additional effective savings over direct combustion improvements, highlighting the importance of holistic plant optimization.
                </p>
            </div>
        </div>
    );
};

export default NexergGraph;
