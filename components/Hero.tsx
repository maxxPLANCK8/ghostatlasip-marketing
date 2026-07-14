import { DASHBOARD_URL, REGISTER_URL } from "@/data/site";
import RoutingConsole from "./RoutingConsole";

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-glow" />
      <div className="hero-dots" />
      <svg viewBox="0 0 960 620" className="hero-network" aria-hidden="true">
        <path d="M72 380 L220 250 L370 312 L520 180 L694 238 L858 118" />
        <path d="M126 112 L274 198 L406 126 L584 310 L752 284 L900 430" />
        <path d="M186 512 L342 414 L512 478 L674 368 L846 456" />
        <path d="M370 312 L406 126 M520 180 L584 310 M694 238 L674 368" />
        <g>
          <circle cx="72" cy="380" r="5" />
          <circle cx="220" cy="250" r="6" />
          <circle cx="370" cy="312" r="5" />
          <circle cx="520" cy="180" r="7" />
          <circle cx="694" cy="238" r="5" />
          <circle cx="858" cy="118" r="6" />
          <circle cx="126" cy="112" r="5" />
          <circle cx="406" cy="126" r="5" />
          <circle cx="584" cy="310" r="6" />
          <circle cx="900" cy="430" r="5" />
          <circle cx="186" cy="512" r="5" />
          <circle cx="512" cy="478" r="6" />
          <circle cx="846" cy="456" r="5" />
        </g>
        <g className="hero-network-rings">
          <circle cx="520" cy="180" r="20" />
          <circle cx="584" cy="310" r="18" />
          <circle cx="512" cy="478" r="20" />
        </g>
      </svg>

      <div className="hero-copy">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          LIVE / 195 COUNTRIES / 72M+ IPS
        </div>
        <h1 className="hero-title">
          Proxies that route like they <em>never existed.</em>
        </h1>
        <p className="hero-sub">
          Residential, datacenter, ISP and mobile proxies on infrastructure built for scale:
          clean pools, sub-40ms routing, and a console that shows exactly where your traffic exits.
        </p>
        <div className="hero-ctas">
          <a href={DASHBOARD_URL} className="btn-primary">Open dashboard</a>
          <a href={REGISTER_URL} className="btn-secondary">Start routing</a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-value">99.98%</span>
            <span className="hero-stat-label">network uptime</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-value">195+</span>
            <span className="hero-stat-label">countries covered</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-value">&lt;40ms</span>
            <span className="hero-stat-label">avg routing latency</span>
          </div>
        </div>
      </div>

      <RoutingConsole />
    </header>
  );
}
