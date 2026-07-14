export type Tier = {
  name: string;
  sub: string;
  price: string;
  unit: string;
  popular?: boolean;
  features: string[];
  cta: string;
};

export type ProductPricing = {
  label: string;
  slug: string;
  tiers: Tier[];
};

export const pricingData: ProductPricing[] = [
  {
    label: "Rotating Residential",
    slug: "rotating-residential",
    tiers: [
      {
        name: "Starter",
        sub: "Testing & small jobs",
        price: "$8.00",
        unit: "/ GB",
        features: ["1+ GB", "195+ countries", "City & ASN targeting", "Rotating or sticky sessions"],
        cta: "Start with 1 GB",
      },
      {
        name: "Scale",
        sub: "Production scraping",
        price: "$5.00",
        unit: "/ GB",
        popular: true,
        features: ["5+ GB", "Everything in Starter", "Unlimited concurrency", "Priority routing"],
        cta: "Choose Scale",
      },
      {
        name: "Volume",
        sub: "Heavy pipelines",
        price: "$4.00",
        unit: "/ GB",
        features: ["10+ GB", "Everything in Scale", "Dedicated account channel", "Custom rotation rules"],
        cta: "Choose Volume",
      },
    ],
  },
  {
    label: "Static Datacenter",
    slug: "static-datacenter",
    tiers: [
      {
        name: "Starter",
        sub: "A handful of IPs",
        price: "$2.40",
        unit: "/ IP / mo",
        features: ["5+ IPs", "20+ locations", "Unlimited bandwidth", "HTTP & SOCKS5"],
        cta: "Start with 5 IPs",
      },
      {
        name: "Scale",
        sub: "Growing operations",
        price: "$2.00",
        unit: "/ IP / mo",
        popular: true,
        features: ["10+ IPs", "Everything in Starter", "Subnet diversity", "Instant replacement"],
        cta: "Choose Scale",
      },
      {
        name: "Volume",
        sub: "Bulk deployments",
        price: "$1.75",
        unit: "/ IP / mo",
        features: ["20+ IPs", "Everything in Scale", "Custom /24 blocks", "API bulk management"],
        cta: "Choose Volume",
      },
    ],
  },
  {
    label: "Static Residential ISP",
    slug: "static-isp",
    tiers: [
      {
        name: "Starter",
        sub: "Trusted identities",
        price: "$4.00",
        unit: "/ IP / mo",
        features: ["1-9 IPs", "Real ISP ASNs", "Unlimited bandwidth", "Sticky forever"],
        cta: "Start with 1 IP",
      },
      {
        name: "Scale",
        sub: "Account ops & QA",
        price: "$3.50",
        unit: "/ IP / mo",
        popular: true,
        features: ["10-49 IPs", "Everything in Starter", "Multi-country mix", "Instant replacement"],
        cta: "Choose Scale",
      },
      {
        name: "Volume",
        sub: "Large fleets",
        price: "$2.90",
        unit: "/ IP / mo",
        features: ["50 IPs+", "Everything in Scale", "Dedicated subnets", "Account manager"],
        cta: "Choose Volume",
      },
    ],
  },
  {
    label: "Static Mobile",
    slug: "static-mobile",
    tiers: [
      {
        name: "Starter",
        sub: "Single carrier lines",
        price: "$8.00",
        unit: "/ IP / mo",
        features: ["1-4 IPs", "4G / 5G carrier IPs", "IP rotation on demand", "HTTP & SOCKS5"],
        cta: "Start with 1 IP",
      },
      {
        name: "Scale",
        sub: "Social & ad ops",
        price: "$14.00",
        unit: "/ IP / mo",
        popular: true,
        features: ["5-19 IPs", "Everything in Starter", "Carrier selection", "Priority support"],
        cta: "Choose Scale",
      },
      {
        name: "Volume",
        sub: "Agency scale",
        price: "$5.90",
        unit: "/ IP / mo",
        features: ["20 IPs+", "Everything in Scale", "Dedicated modems", "Custom rotation API"],
        cta: "Choose Volume",
      },
    ],
  },
];

export type ProductSummary = {
  tag: string;
  name: string;
  slug: string;
  desc: string;
  price: string;
  unit: string;
};

export const products: ProductSummary[] = [
  {
    tag: "GB-BASED",
    name: "Rotating Residential",
    slug: "rotating-residential",
    desc: "72M+ real household IPs across 195+ countries. Rotate per request or hold sticky sessions up to 30 minutes.",
    price: "$5.00",
    unit: "/GB",
  },
  {
    tag: "IP-BASED",
    name: "Static Datacenter",
    slug: "static-datacenter",
    desc: "Dedicated high-speed IPs on premium subnets. Unlimited bandwidth from major hubs.",
    price: "$2.00",
    unit: "/IP/mo",
  },
  {
    tag: "IP-BASED",
    name: "Static Residential ISP",
    slug: "static-isp",
    desc: "Datacenter speed with genuine ISP ASNs. The trust of residential, the reliability of static.",
    price: "$3.50",
    unit: "/IP/mo",
  },
  {
    tag: "IP-BASED",
    name: "Static Mobile",
    slug: "static-mobile",
    desc: "Real 4G/5G carrier IPs with on-demand rotation. The highest trust tier for the hardest targets.",
    price: "$14.00",
    unit: "/IP/mo",
  },
];
