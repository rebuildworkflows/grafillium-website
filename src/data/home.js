import { BarChart3, FlaskConical, Globe2, Layers, Leaf, Zap } from "lucide-react";

export const homeContent = {
    hero: {
        headline: "Nanotech powered performance. Real industrial impact across fuels, coatings, water, and bitumen.",
        subheadline: "Grafillium is a deeptech innovation company developing nanomaterial additive technologies that improve efficiency and reduce carbon emissions.",
        whatWeDo: [
            "Develop nanomaterial additives for industrial fuels including coal, diesel, petrol, and engine oils",
            "Enhance performance of industrial coatings and fluid systems",
            "Improve bitumen and construction material efficiency",
            "Enable advanced industrial water recycling and treatment"
        ],
        coreValue: [
            "Efficiency gains through improved energy conversion and process performance",
            "Emissions reduction through optimized fuel and material usage",
            "Sustainable impact aligned with environmental and industrial objectives"
        ],
        whyChoose: [
            "Deep scientific expertise in nanotechnology and materials science",
            "Industry ready solutions with measurable performance impact",
            "Scalable technologies designed for industrial deployment",
            "Tangible improvements in energy use, emissions, and operational costs"
        ],
        howWorks: [
            "Nano additives engineered for molecular level interaction",
            "Reduction of friction and energy losses in combustion and fluid systems",
            "More complete fuel utilization and reduced waste",
            "Support for resource recovery and reuse in water systems"
        ],
        industrialBenefits: [
            "Reduced fuel consumption and operating costs",
            "Improved performance of coatings and industrial materials",
            "Enhanced efficiency in industrial water recycling",
            "Lower carbon footprint and emissions intensity"
        ],
        callToAction: [
            "Partner with Grafillium for performance and sustainability advancement",
            "Explore our solutions to unlock efficiency and climate impact benefits",
            "Connect with us to evaluate fit for your industrial needs"
        ],
        badges: [
            "10-15% Coal Savings",
            "Double-Digit Efficiency",
            "Zero Infrastructure Changes"
        ],
        ctas: [
            { label: "Start a Pilot Trial", primary: true, link: "/contact" },
            { label: "Our Innovation Portfolio", primary: false, link: "/products" }
        ],
        metrics: [
            { label: "Coal Savings", value: "15.4M", suffix: "tons", sub: "National Scale Impact" },
            { label: "CO₂ Reduction", value: "49M+", suffix: "tons", sub: "Annual Avoidance" },
            { label: "Economic Value", value: "₹67k", suffix: "crore", sub: "Forex Savings" },
            { label: "Efficiency", value: "15%", suffix: "Gain", sub: "Optimized Operations" }
        ]
    },
    portfolio: [
        {
            id: "thermal",
            title: "Thermal Power Plant Optimization",
            tag: "Active Deployment",
            description: "Enhancing efficiency and cutting emissions in thermal plants. 3-8% average savings (up to ~15% optimized).",
            link: "/industries/thermal-power",
            icon: Zap,
            metrics: [
                { value: "40M", label: "Tonnes/yr", sub: "Annual Savings" },
                { value: "100M+", label: "Tonnes", sub: "CO₂ Avoided" },
                { value: "Significant", label: "Impact", sub: "Forex Savings" }
            ],
            outcomes: [
                "Coal Savings: 3-8% (typical) | 10-15% (optimized)",
                "CO₂ Reduction: Proportional to fuel saved",
                "PM/Soot Reduction: 20-35%"
            ]
        },
        {
            id: "transport",
            title: "Transport & Logistics",
            tag: "Active Deployment",
            description: "Enabling cleaner fuel use and fleet efficiency improvements, with ~20% fuel economy gains and cutting emissions without hardware changes.",
            link: "/industries/transport-logistics",
            icon: FlaskConical,
            metrics: [
                { value: "₹1.6L", label: "Crore", sub: "Annual Savings" },
                { value: "49M", label: "Tonnes", sub: "CO₂ Avoided" },
                { value: "$9B", label: "Billion", sub: "Forex Impact" }
            ],
            outcomes: [
                "Fuel Economy: 15-25% combined savings",
                "Wear Reduction: 40% extended engine life",
                "Emission Reductions: 40-50% PM"
            ]
        },
        {
            id: "industrial",
            title: "Industrial & Heavy Industry",
            tag: "Active Deployment",
            description: "Optimize energy-intensive operations across cement, steel, manufacturing, and heavy industry.",
            link: "/industries/industrial-heavy",
            icon: Layers,
            metrics: [
                { value: "15-25%", label: "Savings", sub: "Annual Energy" },
                { value: "Significant", label: "Reduction", sub: "CO₂ Avoided" },
                { value: "High", label: "Value", sub: "Forex Impact" }
            ],
            outcomes: [
                "Energy Cost Reduction: 5-15%",
                "Genset Fuel Savings: 15-25%",
                "Emission Compliance: PM, NOₓ, SO₂ reduction"
            ]
        }
    ],
    vision: "To accelerate sustainable industrial transformation through nanoscale science and measurable performance gains.",
    strategicImperative: {
        title: "Core Value Proposition",
        subtitle: "Science-backed solutions for measurable industrial impact",
        intro: "We exist to accelerate sustainable industrial transformation through nanoscale science and measurable performance gains.",
        points: [
            {
                title: "Efficiency Gains",
                description: "Efficiency gains through improved energy conversion and process performance. Our nanomaterial additives work at the molecular level to unlock efficiency improvements across fuels, coatings, and industrial systems."
            },
            {
                title: "Emissions Reduction",
                description: "Emissions reduction through optimized fuel and material usage. By enabling more complete fuel utilization and reducing friction losses, we help lower carbon emissions and environmental impact."
            },
            {
                title: "Sustainable Impact",
                description: "Sustainable impact aligned with environmental and industrial objectives. Our solutions deliver tangible improvements in energy use, emissions, and operational costs while supporting long-term sustainability goals."
            }
        ]
    },
    whatWeDo: [
        "Develop nanomaterial additives for industrial fuels including coal, diesel, petrol, and engine oils",
        "Enhance performance of industrial coatings and fluid systems",
        "Improve bitumen and construction material efficiency",
        "Enable advanced industrial water recycling and treatment"
    ],
    whyChooseUs: [
        {
            title: "Deep Scientific Expertise",
            description: "Deep scientific expertise in nanotechnology and materials science"
        },
        {
            title: "Industry Ready Solutions",
            description: "Industry ready solutions with measurable performance impact"
        },
        {
            title: "Scalable Technologies",
            description: "Scalable technologies designed for industrial deployment"
        },
        {
            title: "Tangible Improvements",
            description: "Tangible improvements in energy use, emissions, and operational costs"
        }
    ],
    howItWorks: [
        "Nano additives engineered for molecular level interaction",
        "Reduction of friction and energy losses in combustion and fluid systems",
        "More complete fuel utilization and reduced waste",
        "Support for resource recovery and reuse in water systems"
    ],
    industrialBenefits: [
        "Reduced fuel consumption and operating costs",
        "Improved performance of coatings and industrial materials",
        "Enhanced efficiency in industrial water recycling",
        "Lower carbon footprint and emissions intensity"
    ],
    updates: [
        { date: "Jan 2026", text: "Coalorix: Field trials scheduled with partner thermal plants." },
        { date: "Jan 2026", text: "Ignitron D: Pilot results confirm 18-22% fuel economy gains." },
        { date: "Jan 2026", text: "Lubritron: Expansion to heavy commercial vehicle fleets." }
    ],
    challenges: [
        {
            id: 1,
            title: "Coal Consumption",
            stat: "1.3BMT",
            desc: "Burned annually in India",
            icon: "Flame"
        },
        {
            id: 2,
            title: "Diesel Import Bill",
            stat: "$132B",
            desc: "Annual expenditure",
            icon: "DollarSign"
        },
        {
            id: 3,
            title: "Friction Loss",
            stat: "10-12%",
            desc: "Fuel energy wasted",
            icon: "Activity"
        },
        {
            id: 4,
            title: "Water Waste",
            stat: "Billions",
            desc: "Liters lost to evaporation",
            icon: "Droplets"
        },
        {
            id: 5,
            title: "Road Lifespan",
            stat: "-50%",
            desc: "Due to poor bitumen",
            icon: "AlertTriangle"
        },
        {
            id: 6,
            title: "Carbon Emissions",
            stat: "Rising",
            desc: "Industrial footprint",
            icon: "CloudFog"
        }
    ]
};
