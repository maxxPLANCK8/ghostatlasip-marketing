import { DASHBOARD_URL } from "@/data/site";

export default function Nav() {
  return (
    <nav className="nav">
      <a href="#" className="nav-logo">
        <span className="nav-logo-word">Ghostatlas</span>
        <span className="nav-logo-tag">IP</span>
      </a>
      <div className="nav-links">
        <a href="#products">Products</a>
        <a href="#how">How it works</a>
        <a href="#pricing">Pricing</a>
      </div>
      <div className="nav-actions">
        <a href={DASHBOARD_URL} className="nav-signin">Sign in</a>
        <a href={DASHBOARD_URL} className="nav-cta">Open dashboard</a>
      </div>
    </nav>
  );
}
