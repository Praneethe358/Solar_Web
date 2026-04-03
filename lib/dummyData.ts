export const productData = [
  {
    id: "1",
    name: "Solar Powered Energizer 10KM",
    slug: "solar-powered-energizer-10km",
    category: "Energizers",
    shortDescription: "High-performance solar energizer for perimeter security up to 10KM.",
    description: "Our 10KM solar powered energizer provides reliable around-the-clock protection for your premises, utilizing an advanced photovoltaic panel and high-capacity battery.",
    features: ["10KM Range", "Built-in Solar Panel", "Weather Resistant", "Battery Backup", "Smart Siren Alert"],
    specifications: [
      { key: "Output Voltage", value: "8,000V - 10,000V" },
      { key: "Stored Energy", value: "2.5 Joules" },
      { key: "Battery", value: "12V 7Ah SLA" },
      { key: "Solar Panel", value: "10W Monocrystalline" }
    ],
    images: ["/placeholder.jpg", "/placeholder.jpg"], // Ensure to replace with actual image paths
    price: 350.00
  },
  {
    id: "2",
    name: "Heavy Duty Fencing Wire",
    slug: "heavy-duty-fencing-wire",
    category: "Accessories",
    shortDescription: "Premium high-tensile galvanized wire for maximum conductivity.",
    description: "Ensure the highest level of security with our heavy-duty high-tensile fencing wire. Extremely durable against harsh weather conditions and physical tampering.",
    features: ["High Tensile Strength", "Rust Proof Galvanization", "Excellent Conductivity", "Easy Installation"],
    specifications: [
      { key: "Material", value: "Galvanized Steel" },
      { key: "Thickness", value: "2.5mm / 12 Gauge" },
      { key: "Roll Length", value: "500m" },
      { key: "Tensile Strength", value: "1300 Mpa" }
    ],
    images: ["/placeholder.jpg"],
    price: 45.00
  },
  {
    id: "3",
    name: "100W Monocrystalline Solar Panel",
    slug: "100w-mono-solar-panel",
    category: "Accessories",
    shortDescription: "High-efficiency 100W solar panel for robust off-grid charging.",
    description: "Designed for premium off-grid perimeter defense systems, built to withstand harsh weather and maintain consistent high-output charging in all climates.",
    features: ["A-Grade Monocrystalline Cells", "Tempered Glass", "Anodized Aluminum Frame", "High Light Transmission"],
    specifications: [
      { key: "Max Power", value: "100W" },
      { key: "Voltage", value: "18V" },
      { key: "Dimensions", value: "1200 x 540 x 30 mm" },
      { key: "Weight", value: "8.5kg" }
    ],
    images: ["/placeholder.jpg", "/placeholder.jpg"],
    price: 120.00
  },
  {
    id: "4",
    name: "Complete Residential Solar Fence Kit",
    slug: "residential-solar-fence-kit",
    category: "Complete Kits",
    shortDescription: "Everything you need to secure a 1-acre residential property in one package.",
    description: "This all-in-one bundle includes the energizer, wires, insulators, and warning signs needed to setup a robust, code-compliant residential perimeter.",
    features: ["Plug-and-play installation", "Child-safe mode available", "Battery Backup Included", "Aesthetic design elements"],
    specifications: [
      { key: "Coverage", value: "Up to 1 Acre" },
      { key: "Kit Type", value: "Residential Bundle" },
      { key: "Energizer", value: "2.5KM Output" },
      { key: "Warning Signs", value: "10 pcs included" }
    ],
    images: ["/placeholder.jpg"],
    price: 599.00
  }
];

export const projectData = [
  {
    id: "1",
    title: "100 Acre Agricultural Farm Security",
    image: "/placeholder-project.jpg",
    category: "Agricultural"
  },
  {
    id: "2",
    title: "Industrial Estate Perimeter Defense",
    image: "/placeholder-project.jpg",
    category: "Industrial"
  },
  {
    id: "3",
    title: "Residential HOA Solar Fence",
    image: "/placeholder-project.jpg",
    category: "Residential"
  }
];

export const categories = ["All", "Energizers", "Accessories", "Complete Kits"];
