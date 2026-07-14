import { REGISTER_URL } from "@/data/site";

const steps = [
  {
    n: "STEP 01",
    title: "Choose your pool",
    desc: "Pick residential, datacenter, ISP or mobile. Filter by country, city or ASN; the console previews available exits before you commit.",
  },
  {
    n: "STEP 02",
    title: "Pay as you go",
    desc: "Card or crypto, per-GB or per-IP. No minimums. Balance tops up instantly and never expires.",
  },
  {
    n: "STEP 03",
    title: "Connect & route",
    desc: "Grab credentials or an API key. HTTP and SOCKS5 endpoints with sticky or rotating sessions drop into any stack.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="how-section">
      <div className="how-inner">
        <div className="section-head">
          <span className="section-eyebrow">HOW IT WORKS</span>
          <h2 className="section-title">Live in under two minutes.</h2>
          <p className="section-desc">No sales calls, no contracts; just a rhythm that works.</p>
        </div>
        <div className="steps-grid">
          {steps.map((s) => (
            <div className="step-card" key={s.n}>
              <span className="step-badge">{s.n}</span>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="how-cta">
          <a href={REGISTER_URL} className="btn-primary">Start routing</a>
        </div>
      </div>
    </section>
  );
}
