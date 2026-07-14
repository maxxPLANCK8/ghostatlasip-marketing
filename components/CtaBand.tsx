import { DASHBOARD_URL } from "@/data/site";
import Divider from "./Divider";

export default function CtaBand() {
  return (
    <section className="cta-band">
      <Divider />
      <div className="cta-card">
        <svg viewBox="0 0 800 180" preserveAspectRatio="none" className="cta-svg" aria-hidden="true">
          <line x1="60" y1="140" x2="240" y2="55" />
          <line x1="240" y1="55" x2="430" y2="115" />
          <line x1="430" y1="115" x2="620" y2="40" />
          <line x1="620" y1="40" x2="760" y2="105" />
          <circle cx="60" cy="140" r="4" />
          <circle cx="240" cy="55" r="4" />
          <circle cx="240" cy="55" r="9" />
          <circle cx="430" cy="115" r="4" />
          <circle cx="620" cy="40" r="4" />
          <circle cx="620" cy="40" r="9" />
          <circle cx="760" cy="105" r="4" />
        </svg>
        <span className="section-eyebrow">GET STARTED</span>
        <h2 className="cta-title">
          Your first request is <em>one click</em> away.
        </h2>
        <p className="cta-desc">
          Instant provisioning, pay-as-you-go pricing, and a console that shows every hop. Cancel
          anytime, with no stranded sessions.
        </p>
        <a href={DASHBOARD_URL} className="btn-primary">Open dashboard</a>
        <p className="cta-footnote">dashboard.ghostatlasip.com / card or crypto / from $1.75/IP</p>
      </div>
    </section>
  );
}
