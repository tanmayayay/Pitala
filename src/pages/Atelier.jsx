import { Link } from 'react-router-dom'
import { useCart } from '../store/cart.jsx'
import { getProduct, inr } from '../data/products.js'

const bundles = [
  { name: 'The Diwali Gift', desc: 'The box that wins every gift exchange.', ids: ['thali-5pc', 'diya-set4'] },
  { name: 'The Griha Pravesh', desc: 'For the new home — blessings, boxed.', ids: ['ganesha-antique', 'thali-7pc'] },
  { name: 'The Daily Ritual', desc: 'Everything the evening aarti needs.', ids: ['diya-set4', 'incense-lotus', 'ghanta-bell'] },
]

const steps = [
  ['1', 'Choose a thali', 'Start with the centrepiece — engraved, antique or temple-finish.'],
  ['2', 'Add diyas & bells', 'Pick your diyas, a ghanta bell and an incense holder to complete the ritual.'],
  ['3', 'We gift-wrap it', 'One beautiful box, one hand-written note, delivered anywhere in India before Diwali.'],
]

export default function Atelier() {
  const { addItem, openCart } = useCart()
  const addBundle = (b) => {
    b.ids.forEach((id) => addItem(getProduct(id), 1))
    openCart()
  }
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">The Atelier</p>
          <h1>Compose your own<br />puja set.</h1>
          <p className="lede" style={{ marginTop: 18, maxWidth: '56ch' }}>
            A thali alone is a vessel. A thali with its diyas, its bell, its incense —
            that is a ritual, ready to begin. Choose the pieces below, or start from
            one of our composed sets. We wrap it all as one gift, with your note inside.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="atelier-steps" style={{ marginTop: 0 }}>
            {steps.map(([n, h, p]) => (
              <div className="atelier-step" key={n}>
                <span className="num">{n}</span>
                <h4>{h}</h4>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band" style={{ paddingTop: 80 }}>
        <div className="wrap">
          <div className="sec-head">
            <div>
              <p className="eyebrow">Composed sets</p>
              <h2>Start from a classic.</h2>
            </div>
          </div>
          <div className="prod-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {bundles.map((b) => {
              const items = b.ids.map(getProduct)
              const total = items.reduce((s, p) => s + p.price, 0)
              return (
                <div className="prod-card" key={b.name}>
                  <div className="img" style={{ aspectRatio: '16 / 9' }}>
                    <img src={items[0].img} alt={b.name} />
                  </div>
                  <div className="prod-body">
                    <h3>{b.name}</h3>
                    <p className="prod-wt">{items.map((p) => p.name).join(' · ')}</p>
                    <div className="prod-row">
                      <span className="price">{inr(total)}</span>
                      <button className="add-btn" onClick={() => addBundle(b)}>Add set</button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <p className="lede" style={{ marginTop: 40, textAlign: 'center' }}>
            Prefer to hand-pick? <Link to="/shop" className="link-arrow">Browse everything →</Link>
          </p>
        </div>
      </section>
    </>
  )
}
