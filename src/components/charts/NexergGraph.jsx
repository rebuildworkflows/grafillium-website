import React from 'react';
import {
    ComposedChart,
    Bar,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    ErrorBar
} from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white/95 border border-stone-200 p-4 shadow-xl rounded-none backdrop-blur-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">{label}</p>
                {payload.map((entry, index) => (
                    <div key={index} className="flex items-center gap-2 mb-1">
                        <div
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: entry.color }}
                        />
                        <span className="text-sm font-medium text-stone-600">
                            {entry.name === "direct" ? "Direct Savings" : "Effective Savings"}:
                        </span>
                        <span className="text-sm font-bold text-black">
                            {entry.value}%
                        </span>
                    </div>
                ))}
            </div>
        );
    }
    return null;
};

const CustomXAxisTick = ({ x, y, payload, isMobile }) => {
    // Split label at parenthesis for multi-line display
    const parts = payload.value.match(/^(.+?)\s*(\(.+\))$/);

    if (parts) {
        const [, mainText, bracketText] = parts;
        return (
            <g transform={`translate(${x},${y})`}>
                <text
                    x={0}
                    y={0}
                    dy={10}
                    textAnchor="middle"
                    fill="#666"
                    fontSize={isMobile ? 10 : 12}
                    fontWeight={600}
                >
                    {mainText}
                </text>
                <text
                    x={0}
                    y={0}
                    dy={isMobile ? 22 : 26}
                    textAnchor="middle"
                    fill="#999"
                    fontSize={isMobile ? 9 : 11}
                    fontWeight={500}
                >
                    {bracketText}
                </text>
            </g>
        );
    }

    // Fallback for labels without brackets
    return (
        <text
            x={x}
            y={y}
            dy={10}
            textAnchor="middle"
            fill="#666"
            fontSize={isMobile ? 10 : 12}
            fontWeight={600}
        >
            {payload.value}
        </text>
    );
};

const NexergGraph = ({ data }) => {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Transform data object into array for Recharts
    const chartData = [
        {
            name: data.typical.label,
            shortName: "Typical",
            direct: data.typical.direct,
            effective: data.typical.effective,
            bgMin: data.typical.range[0],
            bgMax: data.typical.range[1],
            // Calculate error bar range (deviation from the direct value)
            error: [
                data.typical.direct - data.typical.range[0], // minus
                data.typical.range[1] - data.typical.direct  // plus
            ]
        },
        {
            name: data.optimized.label,
            shortName: "Optimized",
            direct: data.optimized.direct,
            effective: data.optimized.effective,
            bgMin: data.optimized.range[0],
            bgMax: data.optimized.range[1],
            error: [
                data.optimized.direct - data.optimized.range[0],
                data.optimized.range[1] - data.optimized.direct
            ]
        }
    ];

    return (
        <div className="w-full h-[400px] md:h-[450px] bg-white border border-stone-200 p-4 md:p-8">
            <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                    data={chartData}
                    margin={{
                        top: isMobile ? 50 : 40,
                        right: isMobile ? 10 : 30,
                        bottom: isMobile ? 80 : 70,
                        left: isMobile ? 10 : 30,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" vertical={false} />
                    <XAxis
                        dataKey="name"
                        stroke="#000"
                        tickLine={false}
                        axisLine={false}
                        interval={0}
                        height={isMobile ? 80 : 60}
                        tick={<CustomXAxisTick isMobile={isMobile} />}
                    />
                    <YAxis
                        unit="%"
                        stroke="#000"
                        tickLine={false}
                        axisLine={false}
                        tick={{ fill: '#666', fontSize: isMobile ? 10 : 13, fontWeight: 500 }}
                        width={isMobile ? 35 : 45}
                        domain={[0, 18]}
                    />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
                    <Legend
                        verticalAlign="top"
                        height={isMobile ? 70 : 50}
                        iconType="circle"
                        wrapperStyle={{
                            paddingBottom: isMobile ? '15px' : '20px',
                            fontSize: isMobile ? '11px' : '12px',
                            lineHeight: isMobile ? '1.4' : '1.5'
                        }}
                        formatter={(value) => (
                            <span className="text-[11px] md:text-xs font-bold uppercase tracking-wider text-stone-700 ml-2">
                                {value === "direct"
                                    ? (isMobile ? "Direct Savings" : "Direct Coal Savings")
                                    : (isMobile ? "Effective Savings" : "Effective Savings (w/ Benefits)")}
                            </span>
                        )}
                    />

                    {/* Direct Savings Bar */}
                    <Bar
                        dataKey="direct"
                        fill="#10B981" // Emerald-500
                        barSize={isMobile ? 40 : 60}
                        radius={[0, 0, 0, 0]}
                    >
                        <ErrorBar dataKey="error" width={4} strokeWidth={2} stroke="#000000" />
                    </Bar>

                    {/* Effective Savings Line */}
                    <Line
                        type="monotone"
                        dataKey="effective"
                        stroke="#F97316" // Orange-500
                        strokeWidth={3}
                        dot={{ r: 6, fill: "#F97316", stroke: "#fff", strokeWidth: 2 }}
                        activeDot={{ r: 8 }}
                    />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};

export default NexergGraph;
