"use client";

import { useState } from "react";
import { DASHBOARD_URL, orderUrl } from "@/data/site";
import { pricingData } from "@/data/pricing";

export default function Pricing() {
  const [tab, setTab] = useState(0);
  const active = pricingData[tab];

  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-inner">
        <div className="section-head">
          <span className="section-eyebrow section-eyebrow--dark">START ROUTING</span>
          <h2 className="section-title section-title--lg">Simple tiers. Volume rewarded.</h2>
          <p className="section-desc section-desc--dark">
            Pick a pool, pick a tier. Upgrade, downgrade or cancel anytime.
          </p>
        </div>

        <div className="pricing-tabs">
          {pricingData.map((p, i) => (
            <button
              key={p.label}
              className="pricing-tab"
              data-active={i === tab}
              onClick={() => setTab(i)}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div className="tiers-grid" data-single={active.tiers.length === 1}>
          {active.tiers.map((tier) => (
            <div className="tier-card" data-popular={!!tier.popular} key={tier.name}>
              {tier.popular && <span className="tier-popular-badge">POPULAR</span>}
              <h3 className="tier-name">{tier.name}</h3>
              <p className="tier-sub">{tier.sub}</p>
              <div className="tier-price-row">
                <span className="tier-price">{tier.price}</span>
                <span className="tier-unit"> {tier.unit}</span>
              </div>
              <div className="tier-features">
                {tier.features.map((f) => (
                  <div className="tier-feature" key={f}>
                    <span className="tier-feature-check">✓</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              {active.comingSoon ? (
                <span className="tier-cta tier-cta--disabled">Coming Soon</span>
              ) : (
                <a
                  href={orderUrl(active.slug, tier.name.toLowerCase())}
                  className="tier-cta"
                  data-popular={!!tier.popular}
                >
                  {tier.cta}
                </a>
              )}
            </div>
          ))}
        </div>

        <p className="pricing-note">
          No commitment / Cancel anytime / Enterprise volume?{" "}
          <a href={DASHBOARD_URL}>Start in the dashboard</a>
        </p>
      </div>
    </section>
  );
}
