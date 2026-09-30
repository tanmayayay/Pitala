import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link className="wordmark" to="/" style={{ textAlign: 'left' }}>
              <span className="wm-name">PITALA</span>
              <span className="wm-sub">FINE BRASSWARE</span>
            </Link>
            <p>Handcrafted brass idols & puja ware, direct from Indian makers to 40,000 homes.</p>
          </div>
          <div>
            <h5>Shop</h5>
            <Link to="/shop?cat=idols">God idols</Link>
            <Link to="/shop?cat=showpieces">Showpieces</Link>
            <Link to="/shop?cat=diyas">Diyas & lighting</Link>
            <Link to="/shop?cat=puja">Puja essentials</Link>
            <Link to="/shop?cat=decor">Decor & gifting</Link>
          </div>
          <div>
            <h5>Company</h5>
            <Link to="/about">Our story</Link>
            <Link to="/atelier">The Atelier</Link>
            <Link to="/shop?cat=diwali">Diwali gifting</Link>
            <Link to="/collections">Collections</Link>
          </div>
          <div>
            <h5>Care</h5>
            <Link to="/account">Your account</Link>
            <Link to="/cart">Your bag</Link>
            <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer">WhatsApp us</a>
            <Link to="/about">Brass care guide</Link>
          </div>
        </div>
        <div className="foot-base">
          <span>© 2026 Pitala Fine Brassware · Made in India</span>
          <span>COD · UPI · Pan-India shipping</span>
        </div>
      </div>
    </footer>
  )
}
