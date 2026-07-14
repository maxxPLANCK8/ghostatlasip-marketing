import { orderUrl } from "@/data/site";
import { products } from "@/data/pricing";
import Divider from "./Divider";

export default function Products() {
  return (
    <section id="products" className="products-section">
      <Divider />
      <div className="section-head">
        <span className="section-eyebrow">CHOOSE YOUR POOL</span>
        <h2 className="section-title">Four ways to disappear.</h2>
        <p className="section-desc">Ethically sourced, continuously monitored, and priced to scale with you.</p>
      </div>
      <div className="products-grid">
        {products.map((p) => (
          <div className="product-card" key={p.name}>
            <span className="product-tag">{p.tag}</span>
            <h3 className="product-name">{p.name}</h3>
            <p className="product-desc">{p.desc}</p>
            <div className="product-footer">
              <div>
                <span className="product-price-label">from </span>
                <span className="product-price">{p.price}</span>
                <span className="product-price-label">{p.unit}</span>
              </div>
              <a href={orderUrl(p.slug)} className="product-buy">Buy</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
