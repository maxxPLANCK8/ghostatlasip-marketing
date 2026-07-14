export type Tier = {
  name: string;
  slug: string;
  sub: string;
  price: string;
  unit?: string;
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
        slug: "starter",
        sub: "Testing & small jobs",
        price: "$8.00",
        unit: "/ GB",
        features: ["1+ GB", "195+ countries", "City & ASN targeting", "Rotating or sticky sessions"],
        cta: "Start with 1 GB",
      },
      {
        name: "Scale",
        slug: "scale",
        sub: "Production scraping",
        price: "$5.00",
        unit: "/ GB",
        popular: true,
        features: ["5+ GB", "Everything in Starter", "Unlimited concurrency", "Priority routing"],
        cta: "Choose Scale",
      },
      {
        name: "Volume",
        slug: "volume",
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
        slug: "starter",
        sub: "5 IPs included",
        price: "$12.00/mo",
        features: ["5 IPs included", "20+ locations", "Unlimited bandwidth", "HTTP & SOCKS5"],
        cta: "Choose Starter",
      },
      {
        name: "IPv4",
        slug: "ipv4",
        sub: "10 IPs included",
        price: "$20.00/mo",
        popular: true,
        features: ["10 IPs included", "Everything in Starter", "Subnet diversity", "Instant replacement"],
        cta: "Choose IPv4",
      },
      {
        name: "Pro",
        slug: "pro",
        sub: "20 IPs included",
        price: "$35.00/mo",
        features: ["20 IPs included", "Everything in IPv4", "Custom /24 blocks", "API bulk management"],
        cta: "Choose Pro",
      },
    ],
  },
];

export type ProductSummary = {
  tag: string;
  name: string;
  slug: string;
  comingSoon?: boolean;
  flatPrice?: boolean;
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
    comingSoon: true,
    flatPrice: true,
    desc: "Datacenter speed with genuine ISP ASNs. The trust of residential, the reliability of static.",
    price: "$3.50",
    unit: "/IP/mo",
  },
  {
    tag: "IP-BASED",
    name: "Static Mobile",
    slug: "static-mobile",
    comingSoon: true,
    flatPrice: true,
    desc: "Real 4G/5G carrier IPs with on-demand rotation. The highest trust tier for the hardest targets.",
    price: "$14.00",
    unit: "/IP/mo",
  },
];
