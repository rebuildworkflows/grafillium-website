import coalorixImage from '../assets/coalorix.png';
import ignitronDImage from '../assets/ignitron-d.png';
import lubritronImage from '../assets/lubritron-landscape.png';
import ignitronPImage from '../assets/ignitron-p-landscape.png';

export const productsContent = [
    {
        id: "coalorix",
        name: "Coalorix",
        tagline: "Optimizing coal, Reducing emissions.",
        image: coalorixImage,
        category: "Thermal Power",
        brand: "Grafillium x Nexerg",
        status: "Commercial Pilot",
        specs: {
            savings: "up to 15%",
            emissions: "up to 35%",
            dose: "up to 0.1%"
        },
        hero: {
            metrics: [
                { label: "Coal Savings", value: "Up to 15%", sub: "Optimized" },
                { label: "Emission Cuts", value: "Up to 35%", sub: "PM/Soot" },
                { label: "Effectiveness", value: "Up to 100%", sub: "Drop-in" }
            ]
        },
        tabs: {
            overview: {
                what: "Coalorix is a drop-in nano-technology combustion improver that dramatically enhances coal burning efficiency while reducing emissions, without requiring any infrastructure modifications.",
                benefits: [
                    "Reduced coal consumption (up to 15% optimized)",
                    "Lower emissions (PM, NOₓ, SO₂, CO)",
                    "Improved combustion efficiency & faster ignition",
                    "Better ash quality & reduced downtime",
                    "No infrastructure changes required"
                ]
            },
            primaryBenefits: {
                coalReduction: "up to 15% optimized",
                co2Reduction: "Proportional to coal saved",
                pollutants: "PM/soot & CO ↓ up to 9%; NOₓ ↓ up to 10%; SO₂ ↓ up to 8%; Mercury proportional",
                safety: "No harmful residues or toxins"
            },
            secondaryBenefits: [
                "Lower costs",
                "Lower auxiliary power",
                "Reduced downtime",
                "Upgraded ash quality",
                "Higher flame temperature",
                "Improved boiler efficiency",
                "Reduced slagging & fouling",
                "Faster ignition response"
            ],
            doseAndUse: {
                dosage: "up to 0.1%",
                deployment: "Dosing at conveyor/bunker",
                compatibility: "Compatible with ESP, Baghouse, FGD, SNCR/SCR"
            },
            mechanism: {
                steps: [
                    { title: "Micro-Crack Formation", desc: "" },
                    { title: "Moisture Displacement", desc: "" },
                    { title: "Hydrocarbon Chain Breakdown", desc: "" },
                    { title: "Surface Modification", desc: "" },
                    { title: "Higher Flame Temperatures", desc: "" }
                ]
            },
            labToIndustry: "Advanced R&D, ready for field trials. Early results: Increased flame intensity, reduced smoke/emissions/ash, faster ignition.",
            transitionTechnology: "Immediate, scalable bridge for coal-dependent systems.",
            energyReality: {
                global: "Thermal power plants produce 60-70% of global electricity. In 2024, global coal mining hit a record 8.8 BMT per annum, with Asia accounting for the majority. Coal remains key for steel and cement production.",
                india: "India burns over 1.3 BMT annually (~3.5 lakh metric tons daily). Breakdown (2024): Non-coking coal ~84% (electricity), Coking coal ~14% (steelmaking), Lignite ~2%. Coal powers ~73% of India's electricity."
            },
            deepDive: {
                context: "Thermal power plants produce 60-70% of global electricity.",
                coalReality: {
                    title: "Coal Energy Reality",
                    stats: [
                        { label: "Global Coal Generation", value: "60-70%" },
                        { label: "India Annual Consumption", value: "1.3 BMT" },
                        { label: "India Thermal Capacity", value: "210 GW" }
                    ],
                    keyPoints: [
                        "Coal provides ~73% of India's electricity.",
                        "150+ major thermal power plants are the backbone of the grid.",
                        "Transition will take decades; optimization is needed NOW."
                    ]
                },
                nexergAnalysis: {
                    title: "Coal Savings Potential",
                    subtitle: "Comparing typical baseload units vs. optimized well-tuned operations",
                    description: "This chart illustrates the coal savings potential achieved through our optimization approach, highlighting both direct unit-level savings and effective system-wide benefits.",
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
                    keyTakeaway: "our optimization approach not only improves unit-level efficiency but also amplifies gains through system-level benefits, enabling coal savings of up to ~15% in well-tuned units and ~8.5% even in typical baseload operations.",
                    systemBenefits: [
                        "Improved load dispatch",
                        "Reduced auxiliary consumption",
                        "Better heat-rate consistency",
                        "Operational coordination across units"
                    ]
                }
            },
            trueCost: {
                title: "The True Cost of Coal",
                global: "Fossil fuels ~73% of GHG emissions; coal ~40%.",
                india: "CO₂ ~22.9B tons (power sector, 80%+ from coal); PM/soot & CO ↓ up to 9%; NOₓ ↓ up to 10%; SO₂ ↓ up to 8%; Mercury proportional"
            }
        }
    },
    {
        id: "ignitron-d",
        name: "Ignitron D",
        tagline: "Maximizing diesel efficiency while minimizing environmental impact.",
        image: ignitronDImage,
        category: "Transport (Diesel)",
        brand: "Grafillium",
        status: "Pilot Testing",
        specs: {
            savings: "up to 15%",
            emissions: "up to 15%",
            dose: "0.01%"
        },
        hero: {
            metrics: [
                { label: "Fuel Economy", value: "Up to 15%", sub: "Optimized" },
                { label: "Emission Cuts", value: "Up to 15%", sub: "Reduced" },
                { label: "Engine Life", value: "Extended", sub: "Longevity" }
            ]
        },
        impact: {
            savings: "₹1.6 Lakh Cr",
            co2: "49 MMT",
            forex: "$8-9 Billion"
        },
        tabs: {
            overview: {
                what: "Ignitron D is a proprietary nano-catalytic diesel fuel additive that achieves near-complete combustion, delivering dramatic improvements in fuel economy, emissions, and engine performance.",
                benefits: [
                    "Enhanced fuel economy (up to 15% optimized)",
                    "Dramatic emission cuts (PM, CO, HC)",
                    "Injector cleaning & engine protection",
                    "Smoother engine operation",
                    "BS-VI compatible"
                ]
            },
            primaryBenefits: {
                fuelEconomy: "up to 15% optimized",
                co2Reduction: "Proportional to fuel saved",
                emissions: "PM ↓ up to 15%; CO ↓ up to 15%; HC ↓ up to 15%; NOₓ ↓ up to 10%"
            },
            secondaryBenefits: [
                "Lower inflation",
                "Export competitiveness",
                "Health gains",
                "Fleet uptime"
            ],
            doseAndUse: {
                dosage: "0.01% (~10 ppm)",
                deployment: "Dosed at refineries/depots",
                compatibility: "Compatible with ULSD, BS-VI, DPF, SCR"
            },
            mechanism: {
                steps: [
                    { title: "Nano-Catalytic Sites", desc: "" },
                    { title: "Smart Dispersants", desc: "" },
                    { title: "Thermal Smoothing", desc: "" }
                ]
            },
            transitionTechnology: "Immediate benefits for oil-importing economies.",
            energyReality: {
                global: "Middle distillates >1.5 BMT/year; ~20% energy demand; 3.5-4.0 BMT CO₂.",
                india: "Diesel 91 MMT, Jet fuel 9.1 MMT, Kerosene 2.4 MMT (total ~102.5 MMT FY2023-24); import cost $132B."
            },
            nationalScaleImpact: {
                fuelSaved: "~15.4 MMT (~18.5B litres)",
                co2Avoided: "~49 MMT",
                forexSavings: "~$8-9B (~₹67,000 crore)",
                economicRelief: "~₹1.6 lakh crore",
                airQuality: "NOₓ and PM reductions"
            },
            deepDive: {
                context: "Diesel powers global transport.",
                dieselReality: {
                    title: "Diesel Energy Reality",
                    stats: [
                        { label: "India Consumption", value: "91 MMT/Year" },
                        { label: "Import Cost", value: "$50 Billion/Year" },
                        { label: "Transport Dependence", value: "90%+" }
                    ],
                    keyPoints: [
                        "Heavy transport cannot easily electrify yet.",
                        "Diesel efficiency directly impacts inflation and logistics costs.",
                        "Optimization offers immediate 10-20% fuel savings."
                    ]
                }
            },
            trueCost: {
                title: "The True Cost of Diesel",
                global: "Middle distillates account for 10-12% of global GHG emissions. Diesel is classified as a carcinogen; aviation contributes contrail-induced warming; kerosene causes indoor pollution in developing regions.",
                india: "~326 MMT CO₂; road transport >40% NOₓ, large PM₂.₅."
            }
        }
    },
    {
        id: "lubritron",
        name: "Lubritron",
        tagline: "Less friction. More miles. Longer engine life.",
        image: lubritronImage,
        category: "Engine Oil",
        brand: "Grafillium",
        status: "Field Testing",
        specs: {
            savings: "up to 6%",
            wear: "-40%",
            oilLife: "up to 50%"
        },
        hero: {
            metrics: [
                { label: "Fuel Savings", value: "Up to 6%", sub: "Optimized" },
                { label: "Wear Reduction", value: "Up to 40%", sub: "Less Friction" },
                { label: "Oil Life", value: "Up to 50%", sub: "Extended" }
            ]
        },
        impact: {
            savings: "₹57,000 Cr",
            co2: "17.5 MMT",
            forex: "$7 Billion"
        },
        tabs: {
            overview: {
                what: "Lubritron is a nano-enabled engine oil additive that dramatically reduces friction, minimizes wear, and extends engine life.",
                benefits: [
                    "Up to 6% fuel savings",
                    "Up to 40% wear reduction",
                    "Extended oil change intervals",
                    "Lower maintenance costs",
                    "Works with all oils (mineral, synthetic)"
                ]
            },
            primaryBenefits: {
                fuelSavings: "Up to 6%",
                wearReduction: "Up to 40%",
                oilLife: "Extended oil change intervals",
                maintenance: "Lower maintenance costs",
                emissions: "CO₂ ↓ up to 6%; PM/smoke ↓ up to 25%; NOₓ ↓ up to 10%"
            },
            secondaryBenefits: [
                "Fleet uptime",
                "Lower TCO",
                "Public health",
                "ESG advantages"
            ],
            doseAndUse: {
                dosage: "As per manufacturer guidelines",
                deployment: "Add to engine oil",
                compatibility: "Works with all oils (mineral, synthetic)"
            },
            mechanism: {
                steps: [
                    { title: "Nano-Lubrication Layer", desc: "" },
                    { title: "Friction Catalysis", desc: "" },
                    { title: "Thermal Stability", desc: "" },
                    { title: "Oxidation Control", desc: "" }
                ]
            },
            transitionTechnology: "Drop-in solution for lasting ICE dominance.",
            energyReality: {
                global: "10-12% fuel energy lost to friction globally; oil degradation increases costs/emissions."
            },
            nationalScaleImpact: {
                fuelSaved: "~5.46 MMT (~6.5B litres diesel)",
                co2Avoided: "~17.5 MMT",
                economic: "~₹57,000 crore (~$7B)"
            },
            deepDive: {
                context: "10-12% of fuel energy is lost to friction."
            },
            trueCost: {
                title: "The True Cost of Friction",
                global: "Higher fuel burn, maintenance, emissions, waste."
            }
        }
    },
    {
        id: "ignitron-p",
        name: "Ignitron P",
        tagline: "Molecular Combustion Enhancer for Petrol.",
        image: ignitronPImage,
        category: "Transport (Petrol)",
        brand: "Grafillium",
        status: "Pilot Phase",
        specs: {
            savings: "up to 10%",
            emissions: "up to 12%",
            dose: "0.25%"
        },
        hero: {
            metrics: [
                { label: "Fuel Economy", value: "Up to 10%", sub: "Target" },
                { label: "Emission Reduction", value: "Up to 12%", sub: "Target" },
                { label: "Engine Life", value: "Extended", sub: "Longevity" }
            ]
        },
        impact: {
            savings: "₹51,000 Cr",
            co2: "11.3 MMT",
            forex: "$4-5 Billion"
        },
        tabs: {
            overview: {
                what: "Ignitron P is a molecular combustion enhancer specifically formulated for petrol engines, targeting the massive two-wheeler and passenger car market.",
                benefits: [
                    "up to 10% fuel economy improvement",
                    "Lower urban emissions (CO, HC)",
                    "Smoother engine operation & reduced knocking",
                    "Compatible with E10/E20 blends"
                ]
            },
            primaryBenefits: {
                fuelEconomy: "up to 10%",
                emissions: "CO ↓ up to 20%; HC ↓ up to 30%; Particulates ↓ up to 20%; NOₓ neutral to ↓ up to 5%",
                engineHealth: "Smoother, reduced knocking"
            },
            secondaryBenefits: [
                "Lower cost of mobility for consumers",
                "Reduced urban pollution and health burden",
                "Extended catalytic converter life",
                "Smoother engine operation and reduced knocking",
                "Compatibility with ethanol-blended fuels (E10/E20)"
            ],
            doseAndDeployment: {
                dosage: "2.5 L per 1,000 L (0.25%)",
                deployment: "Refinery/terminal dosing",
                compatibility: "Compatible with BS-VI, catalytic converters, GDI/MPFI, ethanol blends (E10/E20)"
            },
            mechanism: {
                steps: [
                    { title: "Combustion-Active Sites", desc: "" },
                    { title: "Surface-Active Agents", desc: "" },
                    { title: "Flame Stabilization", desc: "" }
                ]
            },
            energyReality: {
                global: "Petrol >1.2 BMT/year; ~15% transport energy; >2.8 BMT CO₂.",
                india: "~37 million metric tons (FY2023-24); 5-7% CAGR growth."
            },
            nationalScaleImpact: {
                fuelSaved: "3.7 MMT (~4.9B litres)",
                co2Avoided: "~11.3 MMT",
                economic: "₹51,000+ crore savings; $4-5B forex",
                airQuality: "Reduced CO/HC in urban areas"
            },
            deepDive: {
                context: "Petrol powers passenger vehicles and two-wheelers across India."
            },
            trueCost: {
                title: "The Hidden Cost of Petrol",
                global: "CO, HC, NOₓ, particulates; urban smog; ~110 MMT CO₂ in India."
            }
        }
    },
    {
        id: "pipeline",
        name: "Innovation Pipeline",
        tagline: "Building the industrial backbone of tomorrow.",
        image: null,
        category: "Future Tech",
        status: "R&D",
        specs: {
            savings: "TBD",
            emissions: "TBD",
            dose: "Varies"
        },
        hero: {
            metrics: [
                { label: "Products", value: "6+", sub: "In Pipeline" },
                { label: "Sectors", value: "4", sub: "Disrupted" },
                { label: "Impact", value: "Global", sub: "Reach" }
            ]
        },
        tabs: {
            overview: {
                what: "Our R&D pipeline represents the next generation of industrial additives and solutions. Each product is being developed to address specific challenges in infrastructure, power, marine, and construction sectors.",
                benefits: [
                    "Cutting-edge nano-technology applications",
                    "Sector-specific solutions in development",
                    "Technology Readiness Levels (TRL) 3-8",
                    "Pilot programs available for select products",
                    "Continuous innovation and testing"
                ]
            },
            mechanism: {
                steps: [
                    { title: "Research & Development", desc: "Advanced materials science and nano-technology research." },
                    { title: "Laboratory Testing", desc: "Controlled environment validation and optimization." },
                    { title: "Pilot Trials", desc: "Real-world testing in industrial settings." },
                    { title: "Scale-Up", desc: "Production optimization and commercial readiness." },
                    { title: "Market Launch", desc: "Full commercialization and deployment." }
                ]
            },
            deepDive: {
                context: "Grafillium's innovation pipeline focuses on solving critical industrial challenges through advanced materials science. Our products move through rigorous TRL stages before commercialization.",
                math: "Pipeline products represent future revenue streams and technological leadership in industrial additives."
            }
        },
        pipelineItems: [
            {
                name: "Bitumax™",
                sector: "Infrastructure",
                brand: "Grafillium x Nexerg",
                status: "Advanced R&D Phase",
                tagline: "High-performance bitumen additive for longer-lasting, safer, and more sustainable roads",
                text: "Bitumax™ is a high-performance bitumen additive that significantly improves fatigue resistance and controls cracking, ravelling, and moisture-induced stripping. It addresses critical infrastructure challenges, resulting in longer-lasting, safer, and more sustainable roads.",
                oneLine: "Bitumax™: Makes roads tougher, longer-lasting, safer, eco-friendlier.",
                keyBenefits: [
                    "Extends pavement life 1.5x to 2x (8-12 years)",
                    "Reduces repair frequency by up to 60%",
                    "30–50% reduction in fatigue, cracking, ravelling and stripping",
                    "Up to 25% reduction in accidents",
                    "5–15% fuel savings from smoother roads",
                    "40–60% reduction in patching & re-laying"
                ],
                indianContext: {
                    roadNetwork: "~1.5 million km",
                    annualLoss: "₹50,000 crore/year in congestion",
                    roadFatalities: "~1.5 lakh/year (50% linked to poor pavement)",
                    economicBurden: "₹3 lakh crore+ annual societal cost",
                    fuelImportBill: "₹12 lakh crore+/year",
                    infraBudget: "~₹1 lakh crore/year on road maintenance",
                    nhaiExpansion: "~50,000 km/year highway expansion"
                },
                economicImpact: {
                    india: {
                        total: "₹1.3–2.5 lakh crore/year",
                        breakdown: {
                            downtimeRepairs: "₹40,000–80,000 Cr (40-60% reduction)",
                            accidentsLives: "₹50,000–1,00,000 Cr (up to 25% reduction)",
                            fuelPollution: "₹40,000–70,000 Cr (5-15% savings)",
                            maintenance: "₹20–50 Cr per 100 km highway"
                        },
                        reductionVsStandard: "30–50% net"
                    },
                    global: {
                        total: "$650–1,450 billion/year",
                        breakdown: {
                            downtimeRepairs: "$200–500B (25-50% reduction)",
                            accidentsLives: "$100–200B (15-35% reduction)",
                            fuelPollution: "$50–150B (5-20% reduction)",
                            maintenance: "$300–600B (20-40% reduction)"
                        },
                        reductionVsStandard: "25–40% net"
                    }
                },
                carbonFootprint: {
                    india: {
                        annual: "20–40 MMT CO₂ avoided annually",
                        mechanism: "Fewer reconstructions reduce embodied carbon by 30–50%",
                        alignment: "Strong fit for NAPCC, ESG financing, green bonds"
                    },
                    global: {
                        contribution: "Roads contribute ~10% of infrastructure emissions (3-5% of global CO₂)",
                        reduction: "20–35% emission reduction via modern practices",
                        savings: "$50–100 billion/year (carbon pricing & compliance)"
                    }
                },
                strategicValue: {
                    india: [
                        "Critical for national highway expansion programs",
                        "Alignment with India's Road Safety Mission",
                        "Supports clean air & net-zero goals",
                        "Enables redirection of funds to new infrastructure projects"
                    ],
                    global: [
                        "Global losses from degraded roads: $1–2 trillion/year",
                        "WHO reports 1.3 million road deaths/year globally",
                        "Global road maintenance spend exceeds $1 trillion+/year",
                        "Proven in pilots (e.g., Nigeria ~23%, Texas DOT trials)"
                    ]
                },
                targetApplications: "National highway expansion, heavy traffic zones, high-shear areas, thin overlays, preventive maintenance",
                marketSize: {
                    value: "~8-9 MMT/year ($4-5.5B market)",
                    global: "~100-110 MMT/year ($50-65B)"
                },
                lifecycleSavings: "₹20–50 crore per 100 km highway",
                viewMore: true
            },
            {
                name: "Aquamax™",
                brand: "Plume Dynamics",
                sector: "Water Recovery & Conservation",
                status: "Advanced R&D Phase",
                tagline: "Recovering 95% of industrial cooling water lost to evaporation",
                text: "Aquamax™ is the world's first hybrid water recovery system combining HAMR (active electrostatic recovery) and HGMC (passive graphene condensation) to recover up to 95% of cooling tower plume water, delivering 12-24 month ROI while transforming water-stressed facilities into sustainable operations.",
                oneLine: "Aquamax™: 95% water recovery, 12-24 month ROI, zero net water loss.",
                keyTechnologies: {
                    hamr: {
                        name: "HAMR (High-Efficiency Atmospheric Moisture Recovery)",
                        desc: "Active electrostatic moisture capture delivering 70-80% recovery with 0.3-0.5 kWh/m³ energy efficiency",
                        type: "Active System",
                        recovery: "70-80%",
                        bestFor: "Large-scale operations, high-volume recovery"
                    },
                    hgmc: {
                        name: "HGMC (Hydrophilic Graphene Muffle Covers)",
                        desc: "Passive graphene-based condensation providing 20-30% additional recovery with zero power consumption",
                        type: "Passive System",
                        recovery: "20-30%",
                        bestFor: "Cost-sensitive applications, first-line defense"
                    }
                },
                performanceMetrics: {
                    totalRecovery: "95%+ from cooling tower plumes",
                    waterYield: "1-5 liters per m³ processed air",
                    largeTowerOutput: "100,000+ liters/day per facility",
                    energyEfficiency: "0.3-0.5 kWh/m³ (<50% of desalination)",
                    roiIndia: "12-18 months",
                    roiGlobal: "18-24 months",
                    operationalLife: "5× longer than conventional systems",
                    installationTime: "2-6 weeks (plug-and-play retrofit)"
                },
                economicImpact: {
                    india: {
                        annualSavings: "₹1.2-2 Lakh Crore per year",
                        gdpContribution: "0.5-0.8% of Indian GDP",
                        carbonReduction: "10-15 Million tCO₂ per year",
                        jobCreation: "15,000-25,000 direct jobs (500+ installations)",
                        perFacilitySavings: "₹35-57 Crore per large facility annually"
                    },
                    global: {
                        annualSavings: "$80-150 Billion per year",
                        gdpImpact: "0.1-0.2%",
                        totalWaterRecovery: "~1 Trillion liters per year at scale",
                        carbonReduction: "60-95 Million tCO₂ per year",
                        perFacilitySavings: "$4.5-7.0M per large facility annually"
                    }
                },
                healthSocialImpact: {
                    diseaseElimination: "100% elimination of water-borne diseases in facility water systems (cholera, typhoid)",
                    toxinRemoval: "95-99% removal of heavy metals; 99.9%+ pathogen removal post-UV",
                    workerHealth: "70% reduction in waterborne illness; 20% productivity increase",
                    livesImproved: "250,000+ workers (India, 50 plants); 1-2 million community members",
                    healthcareSavings: "₹500-800 Crore (India, 50 plants)"
                },
                environmentalImpact: {
                    waterSavings: "100,000+ liters/day per facility; 1.8 billion liters/year (India, 50 facilities)",
                    freshwaterReduction: "70-90% reduction in external water sourcing",
                    carbonReduction: {
                        waterPumping: "30-40 MtCO₂/year avoided",
                        coolingEfficiency: "20-35 MtCO₂/year avoided",
                        chemicalTransport: "10-20 MtCO₂/year avoided",
                        perFacility: "0.5-1 MtCO₂/year (equivalent to 100,000 electric vehicles)"
                    },
                    ecosystemBenefits: "25-40% biodiversity increase; 15-25% soil improvement; 2-3°C local temperature reduction"
                },
                keyBenefits: [
                    "95%+ total water recovery from cooling tower plumes",
                    "12-18 month ROI in India; 18-24 months globally",
                    "100,000+ liters/day recovery per large cooling tower",
                    "70-90% reduction in freshwater withdrawal",
                    "0.3-0.5 kWh/m³ energy efficiency (<50% of desalination)",
                    "Zero net water loss in closed-loop systems",
                    "Plug-and-play retrofit installation (2-6 weeks)",
                    "5× longer operational life than conventional systems",
                    "100% elimination of waterborne diseases in facility water",
                    "Meets/exceeds all ESG water & sustainability targets"
                ],
                technicalSpecs: {
                    hamrRecovery: "70-80%",
                    hgmcRecovery: "20-30%",
                    totalRecovery: "95%+",
                    waterYield: "1-5 L/m³ air",
                    energyUse: "0.3-0.5 kWh/m³",
                    hgmcPower: "Zero (passive)",
                    waterQuality: {
                        tds: "<500 ppm",
                        microbial: "<10 CFU/mL (post-UV)",
                        pH: "6.5-8.5",
                        heavyMetals: "Below WHO limits",
                        turbidity: "<1 NTU"
                    },
                    grapheneProperties: {
                        dropletSpeed: "3× faster than conventional",
                        antiFouling: "Self-cleaning surfaces",
                        durability: "5× longer life",
                        operatingTemp: "-10°C to 80°C"
                    }
                },
                targetIndustries: [
                    {
                        name: "Thermal Power Plants",
                        recovery: "100,000-500,000 L/day per plant",
                        keyBenefit: "Boiler makeup reduction; zero-discharge capability"
                    },
                    {
                        name: "Data Centers",
                        recovery: "10,000-50,000 L/day per DC",
                        keyBenefit: "Mission-critical water security; sustainability certifications"
                    },
                    {
                        name: "Textile Mills",
                        recovery: "50,000-200,000 L/day",
                        keyBenefit: "Process cooling + steam condensate recovery"
                    },
                    {
                        name: "Chemical Plants",
                        recovery: "30,000-150,000 L/day",
                        keyBenefit: "Closed-loop process cooling"
                    },
                    {
                        name: "Food & Beverage",
                        recovery: "20,000-80,000 L/day",
                        keyBenefit: "Sanitary-grade water recovery"
                    },
                    {
                        name: "Automotive",
                        recovery: "15,000-60,000 L/day",
                        keyBenefit: "Paint booth HVAC + process cooling"
                    }
                ],
                geographicPriorities: {
                    highPriority: [
                        { region: "India", stress: "High", focus: "Rajasthan, Gujarat, Tamil Nadu" },
                        { region: "Middle East (GCC)", stress: "Extreme", focus: "Highest water tariffs globally" },
                        { region: "Western USA", stress: "High", focus: "California, Arizona, Nevada" },
                        { region: "Northern China", stress: "High", focus: "Beijing, Hebei" },
                        { region: "Australia", stress: "Moderate-High", focus: "Climate variability" }
                    ],
                    emerging: [
                        { region: "Southeast Asia", timeline: "2-5 years" },
                        { region: "Southern Europe", timeline: "2-4 years" },
                        { region: "South Africa", timeline: "Immediate" },
                        { region: "Latin America", timeline: "3-5 years" }
                    ]
                },
                esgAlignment: {
                    environmental: [
                        "70-90% reduction in freshwater withdrawal",
                        "0.5-1 MtCO₂ per facility avoided annually",
                        "Reduced aquifer stress supports ecosystems",
                        "95% water reuse in closed loops"
                    ],
                    social: [
                        "Clean water access; disease prevention",
                        "Absenteeism ↓70%; productivity ↑20%",
                        "~300 jobs per facility (operations + maintenance)",
                        "15-20% improvement in child school attendance"
                    ],
                    governance: [
                        "Meets/exceeds water use & discharge standards",
                        "Secures water supply; reduces operational risk",
                        "Automated monitoring & real-time ESG reporting",
                        "First-mover advantage in water tech"
                    ],
                    certifications: [
                        "GRI (Water & effluents; Energy)",
                        "CDP Water Security A-list support",
                        "TCFD climate risk mitigation",
                        "UN SDGs 6, 13, 9",
                        "LEED water efficiency credits",
                        "ISO 14001 integration"
                    ]
                },
                implementation: {
                    preInstallation: "2-4 weeks (site assessment, engineering design, permits)",
                    installation: "2-6 weeks (HGMC + HAMR installation, commissioning)",
                    postInstallation: "Ongoing performance monitoring & quarterly maintenance",
                    compatibleSystems: [
                        "Mechanical draft cooling towers (Excellent)",
                        "Natural draft cooling towers (Excellent)",
                        "Evaporative condensers (Good)",
                        "Closed-circuit coolers (Good)",
                        "Hybrid cooling systems (Excellent)"
                    ],
                    automation: "Fully automated with remote monitoring dashboard",
                    maintenance: "Weekly inspection; quarterly full service; annual deep clean",
                    annualOperatingCost: "₹6-11 Lakh ($7,200-13,500) per large facility (<2% of water savings)"
                },
                competitiveAdvantages: [
                    "World's first hybrid system (95% recovery vs 3-8% conventional)",
                    "Only solution combining passive + active recovery",
                    "3× faster droplet formation with graphene technology",
                    "12-24 month ROI vs 3-5 years for alternatives",
                    "5× longer operational life than industry standard",
                    "Weeks to install vs months for dry cooling",
                    "<50% energy use compared to desalination",
                    "Zero discharge capability for complete sustainability"
                ],
                proofPoints: {
                    recoveryRate: "On-site pilot data; third-party engineering validation",
                    roi: "Customer case studies; financial modeling",
                    healthImpact: "Medical literature on water-borne disease prevention",
                    carbonReduction: "Life-cycle assessment (LCA) studies",
                    economicImpact: "Market sizing by independent analysts"
                },
                contact: {
                    company: "Plume Dynamics",
                    address: "250 JMD Megapolis, Sector 48, Sohna Road, Gurgaon, Haryana 122018",
                    email: "info@plumedynamics.com",
                    website: "https://plumedynamics.com/"
                },
                keyMessages: {
                    ceo: "Aquamax™ delivers 12-24 month ROI while securing water supply and achieving your ESG targets. Recover 95% of cooling water with proven technology.",
                    cfo: "₹35-57 Crore direct annual savings per large facility. 45-65% IRR with 12-18 month payback in India. Eliminates water scarcity risk.",
                    sustainability: "Meet your 2030 water reduction targets today. 70-90% freshwater withdrawal reduction; carbon savings equivalent to 100,000 EVs per facility.",
                    operations: "Plug-and-play retrofit in 2-6 weeks. 95% recovery at 0.3-0.5 kWh/m³. Automated operation with 5× longer life than conventional systems.",
                    investors: "$80-150 billion global market; 0.1-0.2% GDP impact. Solving a critical infrastructure problem with 2× better technology than alternatives."
                },
                viewMore: true
            },
            {
                name: "InsuShield",
                brand: "Grafillium",
                sector: "Construction",
                status: "Under Development",
                tagline: "Thermal Insulation Paint Additive for energy-efficient buildings",
                text: "InsuShield is an advanced paint additive that imparts thermal insulation to building wall paints, directly addressing massive economic losses from unchecked heat transfer and high cooling demand.",
                oneLine: "InsuShield: Keeps buildings cooler, cuts energy bills, extends life.",
                keyBenefits: [
                    "25–40% lower AC usage; indoor temps 5–10°C cooler",
                    "30–50% fewer repainting & facade repairs",
                    "2–3× paint life extension",
                    "+10–20 years building lifespan",
                    "5–10% rental premium, lower vacancy"
                ],
                economicImpact: {
                    india: {
                        annual: "₹1.2–1.8 lakh crore/year (0.5–0.7% GDP)",
                        breakdown: {
                            maintenance: "₹50,000–70,000 Cr",
                            energyComfort: "₹30,000–50,000 Cr",
                            lifespanExtension: "₹40,000–60,000 Cr",
                            carbonHazards: "₹20,000–40,000 Cr"
                        }
                    },
                    global: {
                        annual: "$450–800 billion/year (0.4–0.7% global GDP)",
                        breakdown: {
                            maintenance: "$100–200B",
                            energyComfort: "$50–100B",
                            lifespanExtension: "$200–300B",
                            carbonHazards: "$100–200B"
                        }
                    }
                },
                carbonFootprint: {
                    india: "10–15 MMT CO₂/year avoided (20–30% building emissions cut)",
                    global: "1–2 GtCO₂/year avoided (equivalent to 400–700 million cars removed)"
                },
                marketSize: {
                    global: "$31–36B (2026) → $52–56B (2034), CAGR 5–6%",
                    india: "$1–2B (2026), CAGR 12–15%"
                },
                targetApplications: "Urban homes (70M+), PMAY housing (100M+ homes), ECBC compliance, IGBC/LEED buildings",
                hiddenCosts: {
                    india: "₹1.6–2.5 lakh crore/year in excess cooling, tenant discomfort, mold/health costs, grid strain",
                    global: "$440–740B/year in HVAC waste, vacancy costs, health impacts"
                },
                viewMore: true
            },
            {
                name: "AgniShield",
                brand: "Grafillium",
                sector: "Construction",
                status: "Advanced R&D Phase",
                tagline: "Fire-Retardant Paint Additive for building safety",
                text: "AgniShield paint additive imparts fire-retardant properties to wall paints, creating an intumescent char barrier that slows flame spread and extends evacuation time (30–120+ minutes).",
                oneLine: "AgniShield: Stops fire spread, saves lives, protects assets.",
                keyBenefits: [
                    "Creates intumescent char barrier against flames",
                    "Extends evacuation time by 30–120+ minutes",
                    "40–60% reduction in post-fire repairs",
                    "15–25% reduction in fire-related accidents",
                    "Extends building lifespan by 15–25 years"
                ],
                economicImpact: {
                    india: {
                        annual: "₹40,000–60,000 crore/year (~0.15–0.2% GDP)",
                        breakdown: {
                            maintenance: "₹13,000–20,000 Cr",
                            lifeEconomicLoss: "₹15,000–20,000 Cr",
                            lifespan: "₹7,000–10,000 Cr",
                            carbonHazards: "₹5,000–10,000 Cr"
                        },
                        context: "~1 lakh fire incidents/year costing ₹20,000–30,000 crore in direct damages"
                    },
                    global: {
                        annual: "$400–700 billion/year (0.3–0.6% world GDP)",
                        breakdown: {
                            maintenance: "$100–200B",
                            lifeEconomicLoss: "$150–250B",
                            lifespan: "$80–150B",
                            carbonHazards: "$70–100B"
                        },
                        context: "4M fire incidents/year causing $300–500B in losses"
                    }
                },
                carbonFootprint: {
                    india: "2–4 MMT CO₂/year avoided (fewer rebuilds)",
                    global: "0.5–1 GtCO₂/year avoided (equivalent to 150–300M cars removed)"
                },
                marketSize: {
                    global: "$9–12B (2026) → $12–15B (2031), CAGR 4–6%",
                    india: "₹5,500 Cr (2026) → ₹10,000 Cr (2033), CAGR 8.2%"
                },
                targetApplications: "NBC code compliance, 50K+ high-rises under construction, Smart Cities/PMAY projects",
                hiddenCosts: {
                    india: "₹40,000–62,000 Cr/year in remediation, downtime, life/injury claims, insurance, health, legal costs",
                    global: "$400–760B/year in post-fire costs across all sectors"
                },
                safetyImpact: {
                    india: "Prevents 10,000+ deaths/injuries annually",
                    global: "Saves 50,000+ lives annually",
                    roi: "ROI in high-risk zones <2 years"
                },
                viewMore: true
            }
        ]
    }
];
