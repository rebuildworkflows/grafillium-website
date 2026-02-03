export const solutionsContent = {
    overview: {
        title: "Solutions Overview",
        tagline: "Solutions That Transform Industries",
        description: "Grafillium delivers drop-in efficiency solutions that work within existing infrastructure with no costly overhauls, no extended downtime, and measurable impact from day one.",
        pillars: [
            {
                id: "thermal",
                title: "Thermal Power Plant Optimization",
                description: "Enhancing efficiency, reducing coal consumption by 3-8% on average (and up to ~15% in optimized operations), and cutting emissions with minimal infrastructure changes.",
                outcomes: [
                    "Coal Savings: 3-8% (typical) | 10-15% (optimized)",
                    "CO₂ Reduction: Proportional to fuel saved",
                    "PM/Soot Reduction: 20-35%"
                ],
                nationalImpact: {
                    savings: "40 MMT/yr",
                    forex: "₹18,000 Cr",
                    co2: "100M+ Tons"
                },
                link: "/industries/thermal-power"
            },
            {
                id: "transport",
                title: "Transport & Logistics",
                description: "Enabling cleaner fuel use and fleet efficiency improvements, with ~20% fuel economy gains and cutting emissions and maintenance needs without any hardware changes.",
                outcomes: [
                    "Fuel Economy: 15-25% combined savings",
                    "Wear Reduction: 40% extended engine life",
                    "Emission Reductions: 40-50% PM"
                ],
                nationalImpact: {
                    savings: "₹1.6 Lakh Cr",
                    forex: "$8-9 Billion",
                    co2: "49 MMT"
                },
                link: "/industries/transport-logistics"
            },
            {
                id: "industrial",
                title: "Industrial & Heavy Industry",
                description: "Optimize energy-intensive operations across cement, steel, manufacturing, and heavy industry.",
                outcomes: [
                    "Energy Cost Reduction: 5-15%",
                    "Genset Fuel Savings: 15-25%",
                    "Emission Compliance: PM, NOₓ, SO₂ reduction"
                ],
                nationalImpact: {
                    savings: "15-25%",
                    forex: "High",
                    co2: "Significant"
                },
                link: "/industries/industrial-heavy"
            }
        ]
    },
    industries: {
        thermal: {
            id: "thermal-power",
            title: "Thermal Power Industry Solutions",
            tagline: "Optimize coal-fired power generation with proven, drop-in technologies",
            challenges: [
                "Aging Infrastructure: Declining efficiency over time",
                "Coal Quality Variability: High ash (30-45%), moisture",
                "Emission Standards: Strict PM, SO₂, NOₓ limits",
                "Economic Pressure: Rising coal costs and competitive renewables"
            ],
            solution: {
                product: "Coalorix",
                mechanism: "Nano-technology coal combustion optimizer that increases flame quality and lowers heat rate.",
                benefits: [
                    "Direct Coal Savings: 3-8% (typical) to 10-15% (optimized)",
                    "Emission Reduction: 20-35% PM/Soot",
                    "No Infrastructure Changes: Drop-in dosing system"
                ]
            },
            impact: {
                economic: "For a 250 MW unit, 5% savings = ₹15-16 crore/year net benefit. Payback 6-8 weeks.",
                national: "If deployed across 50% capacity, ~40 MMT coal saved/year."
            }
        },
        transport: {
            id: "transport-logistics",
            title: "Transport & Logistics Solutions",
            tagline: "Maximize fleet efficiency, minimize costs",
            challenges: [
                "Fuel Costs: 30-50% of operating expenses",
                "Thin Margins: 5-10% net margins typical",
                "Maintenance: 15-25% of opex",
                "Emission Norms: BS-VI compliance pressures"
            ],
            solution: {
                approach: "Dual Solution (Ignitron D + Lubritron)",
                benefits: [
                    "Combined Fuel Savings: 15-25%",
                    "Wear Reduction: 40%",
                    "Emission Reduction: 40-50% PM"
                ]
            },
            impact: {
                fleet: "For 100-truck fleet, ~₹7.5-9 crore net benefit per year. Payback <1 month.",
                roi: "Immediate positive cash flow."
            }
        },
        industrial: {
            id: "industrial-heavy",
            title: "Industrial & Heavy Industry Solutions",
            tagline: "Optimize energy-intensive operations",
            sectors: [
                { name: "Cement", challenge: "High coal use in kilns", benefit: "3-15% coal savings" },
                { name: "Steel", challenge: "Energy-intensive blast furnaces", benefit: "5-15% energy cost reduction" },
                { name: "Mining", challenge: "Heavy diesel equipment", benefit: "15-25% fuel savings" },
                { name: "Manufacturing", challenge: "Backup genset costs", benefit: "15-25% genset fuel savings" }
            ],
            packages: [
                "Industrial Power & Heat (Coalorix)",
                "Backup Power Optimization (Ignitron D + Lubritron)",
                "Fleet & Mobile Equipment (Combined)"
            ]
        }
    }
};
