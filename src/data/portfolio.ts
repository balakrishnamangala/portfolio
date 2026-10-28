export const personalInfo = {
  name: "Balakrishna Mangala",
  firstName: "Balakrishna",
  lastName: "Mangala",
  title: "Supply Chain Analyst",
  tagline:
    "Turning supply chain noise into signal. AI forecasting, logistics intelligence, and data systems that save millions.",
  email: "b.krish0510@gmail.com",
  phone: "+1 (323) 320-7395",
  github: "https://github.com/balakrishnamangala",
  linkedin: "https://linkedin.com/in/balakrishnamangala",
};

export const bigNumbers = [
  {
    value: 18,
    suffix: "%",
    label: "Reduction in forecast error",
    tag: "FedEx · Python + SQL demand models",
  },
  {
    value: 94,
    suffix: "%",
    label: "On-time in-full delivery rate achieved",
    tag: "Sainsbury's · 82% to 94% over 18 months",
  },
  {
    value: 2.1,
    prefix: "$",
    suffix: "B",
    decimal: 1,
    label: "Freight spend tracked and optimized",
    tag: "Power BI dashboards across 3 distribution centers",
  },
];

export const experiences = [
  {
    company: "FedEx",
    role: "Supply Chain Analyst",
    period: "Jul 2025 — Present",
    location: "Connecticut, USA",
    description:
      "SKU-level demand analysis with Python and SQL. Safety stock optimization using ABC/XYZ segmentation. Built Power BI dashboards integrating ERP, warehouse, and logistics data across 3 distribution centers tracking $2.1B in freight spend.",
    metrics: [
      { value: "-28%", label: "Stockout reduction" },
      { value: "98%", label: "Service level" },
      { value: "$2.1B", label: "Freight tracked" },
    ],
    tags: ["Python", "SQL", "SAP S/4HANA", "Power BI", "DAX"],
  },
  {
    company: "DHL Supply Chain",
    role: "Supply Chain Analyst",
    period: "Jan — May 2025",
    location: "Baltimore, MD",
    description:
      "Managed purchase order execution and forecast accuracy improvement. Coordinated carriers for 500+ daily shipments. Built Tableau dashboards for real-time logistics visibility across warehouse and transportation management systems.",
    metrics: [
      { value: "+16%", label: "PO fulfillment" },
      { value: "500+", label: "Daily shipments" },
    ],
    tags: ["Tableau", "SQL", "WMS", "TMS", "Excel"],
  },
  {
    company: "Sainsbury's",
    role: "Supply Chain Analyst",
    period: "Jun 2021 — Jul 2023",
    location: "India (UK Retail)",
    description:
      "Built SQL and Python data pipelines for UK retail supply chain. Supported S&OP planning and demand forecasting. Drove OTIF improvement from 82% to 94% using Lean Six Sigma DMAIC methodology across 200+ SKUs.",
    metrics: [
      { value: "82→94%", label: "OTIF rate" },
      { value: "200+", label: "SKUs managed" },
    ],
    tags: ["SAP", "Lean Six Sigma", "DMAIC", "S&OP", "Python"],
  },
];

export const projects = [
  {
    id: "P-01",
    title: "AI Demand Sensing",
    description:
      "Prophet + XGBoost ensemble model for 12-week demand forecast horizon. FastAPI backend, Docker containers, deployed on Azure with CI/CD.",
    kpis: [
      { value: "-22%", label: "MAPE reduction" },
      { value: "1,200+", label: "SKUs forecast" },
    ],
  },
  {
    id: "P-02",
    title: "Logistics Control Tower",
    description:
      "OTIF, OTD, dwell time, cost analysis dashboard. Weighted supplier risk scorecard with automated alerting.",
    kpis: [
      { value: "-19%", label: "Late shipments" },
      { value: "-12%", label: "Expedite costs" },
    ],
  },
  {
    id: "P-03",
    title: "Inventory Optimizer",
    description:
      "Dynamic safety stock and reorder point calculation engine. Achieved 98% service level at 15% less working capital.",
    kpis: [
      { value: "-15%", label: "Working capital" },
      { value: "98%", label: "Service level" },
    ],
  },
];

export const skills = [
  { name: "Python", core: true },
  { name: "SQL", core: true },
  { name: "SAP S/4HANA", core: true },
  { name: "Power BI", core: true },
  { name: "Tableau", core: true },
  { name: "Demand Planning", core: true },
  { name: "Inventory Management" },
  { name: "Procurement" },
  { name: "Logistics" },
  { name: "Excel / VBA" },
  { name: "Docker" },
  { name: "Azure" },
  { name: "FastAPI" },
  { name: "Git" },
  { name: "Lean Six Sigma" },
  { name: "S&OP" },
  { name: "DMAIC" },
  { name: "DAX" },
  { name: "Power Query" },
  { name: "SciPy" },
  { name: "Scikit-learn" },
  { name: "Pandas" },
  { name: "NumPy" },
];

export const education = [
  {
    degree: "MS Computer Science",
    school: "University of Maryland, Baltimore County",
    year: "2023 — 2025 · GPA 3.6",
  },
];

export const certifications = [
  "APICS CSCP",
  "APICS CPIM",
  "Lean Six Sigma Green Belt",
];
