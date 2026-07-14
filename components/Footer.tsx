import { DASHBOARD_URL, LEGACY_APP_URL, SUPPORT_EMAIL } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand-row">
            <span className="footer-brand-word">Ghostatlas</span>
            <span className="footer-brand-tag">IP</span>
          </div>
          <p className="footer-brand-desc">
            Proxies that route like they don&apos;t exist. Infrastructure for developers, scrapers
            and automation teams worldwide.
          </p>
        </div>
        <div className="footer-col">
          <span className="footer-col-title">PRODUCTS</span>
          <a href="#products">Rotating Residential</a>
          <a href="#products">Static Datacenter</a>
          <a href="#products">Static ISP</a>
          <a href="#products">Static Mobile</a>
        </div>
        <div className="footer-col">
          <span className="footer-col-title">LEGAL</span>
          <a href={LEGACY_APP_URL}>Terms of Service</a>
          <a href={LEGACY_APP_URL}>Privacy Policy</a>
          <a href={LEGACY_APP_URL}>Acceptable Use Policy</a>
        </div>
        <div className="footer-col">
          <span className="footer-col-title">SUPPORT</span>
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
          <a href={DASHBOARD_URL}>Dashboard</a>
          <a href={LEGACY_APP_URL}>API Docs</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <span>(C) 2026 GHOSTATLASIP.COM</span>
          <span className="footer-status">
            <span className="footer-status-dot" />
            ALL SYSTEMS OPERATIONAL
          </span>
        </div>
      </div>
    </footer>
  );
}
