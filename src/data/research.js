export const researchContent = {
    overview: {
        title: "Research & Data",
        tagline: "Data-driven insights for the energy transition",
        sections: [
            { id: "coal", title: "Coal Energy Reality", link: "/research/coal-industry", description: "Global and Indian coal landscape, consumption data, and environmental impact." },
            { id: "diesel", title: "Diesel Energy Reality", link: "/research/diesel-industry", description: "Diesel consumption trends, economic significance, and transition timeline." },
            { id: "nexerg", title: "Nexerg Performance Graph", link: "/research/nexerg-performance-graph", description: "Interactive visualization of coal savings potential." },
            { id: "tech", title: "Technical Appendix", link: "/research/technical-appendix", description: "Detailed scientific mechanisms and testing methodologies." }
        ]
    },
    coal: {
        title: "Coal Energy Reality",
        stats: [
            { label: "Global Coal Generation", value: "60-70%" },
            { label: "India Annual Consumption", value: "1.3 BMT" },
            { label: "India Thermal Capacity", value: "210 GW" }
        ],
        reality: [
            "Coal provides ~73% of India's electricity.",
            "150+ major thermal power plants are the backbone of the grid.",
            "Transition will take decades; optimization is needed NOW."
        ]
    },
    diesel: {
        title: "Diesel Energy Reality",
        stats: [
            { label: "India Consumption", value: "91 MMT/Year" },
            { label: "Import Cost", value: "$50 Billion/Year" },
            { label: "Transport Dependence", value: "90%+" }
        ],
        reality: [
            "Heavy transport cannot easily electrify yet.",
            "Diesel efficiency directly impacts inflation and logistics costs.",
            "Optimization offers immediate 10-20% fuel savings."
        ]
    },
    nexergGraph: {
        title: "Coal Savings Potential",
        subtitle: "Comparing typical baseload units vs. optimized well-tuned operations",
        description: "This chart illustrates the coal savings potential achieved through Nexerg's optimization approach, highlighting both direct unit-level savings and effective system-wide benefits.",
        data: {
            typical: {
                direct: 6,
                effective: 8.5,
                range: [3, 8],
                label: "Typical Units (Baseload)"
            },
            optimized: {
                direct: 12,
                effective: 14.5,
                range: [10, 15],
                label: "Optimized Units (Well-tuned)"
            }
        },
        insights: [
            {
                title: "Optimization Delivers Measurable Gains",
                description: "Even typical baseload units achieve 3-8% direct savings, demonstrating that optimization alone can significantly reduce coal consumption."
            },
            {
                title: "Well-Tuned Units Unlock Higher Efficiency",
                description: "Optimized units consistently reach 10-15% direct savings, indicating stable and repeatable performance improvements."
            },
            {
                title: "System Benefits Add ~2-3% Additional Savings",
                description: "Effective savings exceed direct savings in both cases, demonstrating the importance of system-level thinking and integrated optimization strategies."
            },
            {
                title: "Variability Is Expected and Manageable",
                description: "The range bars reflect real operating conditions. Optimization shifts both the average and the lower bound upward."
            }
        ],
        keyTakeaway: "Nexerg's optimization approach not only improves unit-level efficiency but also amplifies gains through system-level benefits, enabling coal savings of up to ~15% in well-tuned units and ~8.5% even in typical baseload operations.",
        systemBenefits: [
            "Improved load dispatch",
            "Reduced auxiliary consumption",
            "Better heat-rate consistency",
            "Operational coordination across units"
        ]
    },
    appendix: {
        title: "Technical Appendix",
        mechanisms: [
            { id: "coalorix", title: "Coalorix Mechanisms", points: ["Micro-Crack Formation", "Moisture Displacement", "Hydrocarbon Chain Breakdown"] },
            { id: "ignitron", title: "Ignitron Mechanisms", points: ["Nano-Catalytic Oxidation", "Fuel Atomization", "Injector Cleaning"] },
            { id: "lubritron", title: "Lubritron Mechanisms", points: ["Nano-Layer Formulation", "Friction Modification", "Oxidation Stability"] }
        ]
    }
};
