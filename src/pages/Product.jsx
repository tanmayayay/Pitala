import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getProduct, products, inr, deityName } from '../data/products.js'
import { useCart } from '../store/cart.jsx'
import ProductCard from '../components/ProductCard.jsx'
import './catalog.css'

const TRUST = [
  ['COD & UPI accepted', 'Pay on delivery or instantly by UPI — your choice, zero risk.'],
  ['Insured pan-India shipping', 'Every piece packed in protective casing and shipped insured.'],
  ['Weight & finish guaranteed', 'Solid brass, weighed before dispatch. What we list is what arrives.'],
]

export default function Product() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addItem } = useCart()
  const [qty, setQty] = useState(1)

  const p = getProduct(id)

  if (!p) {
    return (
      <div className="wrap cat-page">
        <p className="eyebrow">Not found</p>
        <h1>That piece is gone.</h1>
        <p className="lede cat-sub" style={{ margin: '14px 0 30px' }}>
          It may have sold out or moved collections. The rest of the house of brass is still here.
        </p>
        <Link className="btn btn-solid" to="/shop">Back to shop</Link>
      </div>
    )
  }

  const related = products.filter((x) => x.category === p.category && x.id !== p.id).slice(0, 4)
  const savePct = p.mrp ? Math.round((1 - p.price / p.mrp) * 100) : 0

  const buyNow = () => {
    addItem(p, qty)
    navigate('/checkout')
  }

  return (
    <div className="wrap cat-page">
      <p className="crumb">
        <Link to="/">Home</Link> &nbsp;/&nbsp; <Link to="/shop">Shop</Link> &nbsp;/&nbsp; {p.name}
      </p>

      <div className="pd-grid">
        <div className="pd-img">
          <img src={p.img} alt={p.name} />
        </div>

        <div className="pd-info">
          {p.badge && <p className="eyebrow">{p.badge}</p>}
          <h1>{p.name}</h1>
          <p className="pd-weight">{p.weight}</p>
          <p className="pd-price">
            {inr(p.price)}
            {p.mrp && <small>{inr(p.mrp)}</small>}
            {savePct > 0 && <span className="pd-save">Save {savePct}%</span>}
          </p>
          <p className="lede pd-blurb">{p.blurb}</p>

          <div className="qty-row">
            <div className="qty" aria-label="Quantity">
              <button onClick={() => setQty((n) => Math.max(1, n - 1))} aria-label="Decrease quantity">−</button>
              <span>{qty}</span>
              <button onClick={() => setQty((n) => Math.min(9, n + 1))} aria-label="Increase quantity">+</button>
            </div>
          </div>

          <div className="pd-actions">
            <button className="btn btn-solid" onClick={() => addItem(p, qty)}>Add to bag</button>
            <button className="btn btn-ghost" onClick={buyNow}>Buy now</button>
          </div>

          <ul className="trust-mini">
            {TRUST.map(([b, t]) => (
              <li key={b}>
                <span className="dot" />
                <span><b>{b}</b> — {t}</span>
              </li>
            ))}
          </ul>

          <details className="acc" open>
            <summary>Specifications</summary>
            <div className="acc-body">
              <b>Weight & size:</b> {p.weight}
              <br />
              <b>Material:</b> solid brass, hand-finished
              {p.deity && (<><br /><b>Deity:</b> {deityName(p.deity)}</>)}
              <br />
              <b>Finish:</b> polished & lacquered to age gracefully
            </div>
          </details>
          <details className="acc">
            <summary>Shipping & returns</summary>
            <div className="acc-body">
              Dispatched in 2–3 working days in protective, insured packaging.
              Order by 2 Nov for guaranteed Diwali delivery. 7-day easy returns on
              unused pieces in original packaging.
            </div>
          </details>
          <details className="acc">
            <summary>Brass care</summary>
            <div className="acc-body">
              Wipe with a soft, dry cloth after handling. For puja pieces, a paste of
              lemon and baking soda restores the shine in minutes — then rinse, dry,
              and it glows like day one.
            </div>
          </details>
        </div>
      </div>

      {related.length > 0 && (
        <div className="related">
          <h2>You may also like</h2>
          <div className="cat-grid">
            {related.map((r) => (
              <ProductCard key={r.id} product={r} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
