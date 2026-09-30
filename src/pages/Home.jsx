import { Link } from 'react-router-dom'
import { useCart } from '../store/cart.jsx'
import heroImg from '../assets/hero.webp'
import diyasImg from '../assets/product-diyas.webp'
import { products, categories, inr } from '../data/products.js'

const bestsellers = products.filter((p) => p.badge === 'Bestseller').slice(0, 4)

const steps = [
  { n: '01', h: 'Cast', p: 'Molten brass poured into hand-built moulds — the lost-wax method Indian foundries have trusted for centuries.' },
  { n: '02', h: 'Chiselled by hand', p: 'Master karigars chase every petal and motif with hand tools. No two pieces leave the bench identical.' },
  { n: '03', h: 'Finished to age gracefully', p: 'Polished, antiqued and lacquered so the brass deepens beautifully instead of dulling — made to be inherited.' },
]

const testimonials = [
  { q: 'The Ganesha for our new home arrived gift-wrapped, with the weight and finish of something far more expensive.', by: 'Meera R.', where: 'Bengaluru' },
  { q: 'Ordered thali sets for Diwali gifting across three offices. Every single one felt personal, not bulk.', by: 'Arjun S.', where: 'Mumbai' },
  { q: 'You can tell it was made by hands, not machines. The diyas have become part of our evening ritual.', by: 'Lakshmi V.', where: 'Chennai' },
]

export default function Home() {
  const { addItem } = useCart()
  return (
    <>
      {/* ——— hero ——— */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">Handcrafted in India · Direct from the makers</p>
            <h1>Brass, made<br />to be <em>inherited.</em></h1>
            <p className="lede">
              Idols, diyas and puja ware cast in solid brass by family-run foundries —
              finished by hand, priced without the middlemen, and built to outlive us all.
            </p>
            <div className="hero-ctas">
              <Link className="btn btn-solid" to="/shop">Shop bestsellers</Link>
              <Link className="btn btn-ghost" to="/about">Our story</Link>
            </div>
            <div className="hero-stats">
              <div className="stat"><b>38</b><span>years of craft</span></div>
              <div className="stat"><b>120+</b><span>karigar families</span></div>
              <div className="stat"><b>40k</b><span>homes adorned</span></div>
            </div>
          </div>
          <div className="hero-img"><img src={heroImg} alt="Brass Ganesha idol with lit diyas and marigold urli" /></div>
        </div>
      </section>

      {/* ——— trust ——— */}
      <div className="trust">
        <div className="wrap trust-in">
          {[['Direct from manufacturer', 'No middlemen, honest pricing'],
            ['Solid brass, always', 'Weight & finish guaranteed'],
            ['Pan-India insured shipping', 'Safe packaging, doorstep delivery'],
            ['COD & UPI accepted', 'Pay your way, zero risk'],
          ].map(([b, p]) => (
            <div className="trust-item" key={b}><span className="dot" /><p><b>{b}</b>{p}</p></div>
          ))}
        </div>
      </div>

      {/* ——— collections ——— */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <div>
              <p className="eyebrow">Collections</p>
              <h2>Shop by ritual,<br />not by aisle.</h2>
            </div>
            <Link className="link-arrow" to="/collections">View all →</Link>
          </div>
          <div className="coll-grid">
            {categories.slice(0, 4).map((c) => (
              <Link className="coll-card" to={`/shop?cat=${c.slug}`} key={c.slug}>
                <div className="img"><img src={c.img} alt={c.name} /></div>
                <h3>{c.name}</h3>
                <p>{c.note}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ——— bestsellers ——— */}
      <section className="band">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <p className="eyebrow">Bestsellers</p>
              <h2>Loved in 40,000 homes.</h2>
            </div>
            <Link className="link-arrow" to="/shop">Shop all →</Link>
          </div>
          <div className="prod-grid">
            {bestsellers.map((p) => (
              <div className="prod-card" key={p.id}>
                <Link to={`/product/${p.id}`} className="img" style={{ display: 'block' }}>
                  {p.badge && <span className="prod-tag">{p.badge}</span>}
                  <img src={p.img} alt={p.name} />
                </Link>
                <div className="prod-body">
                  <Link to={`/product/${p.id}`} style={{ textDecoration: 'none', color: 'inherit' }}><h3>{p.name}</h3></Link>
                  <p className="prod-wt">{p.weight}</p>
                  <div className="prod-row">
                    <span className="price">{inr(p.price)}{p.mrp && <small>{inr(p.mrp)}</small>}</span>
                    <button className="add-btn" onClick={() => addItem(p, 1)}>Add</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— atelier teaser ——— */}
      <section className="atelier">
        <div className="wrap">
          <p className="eyebrow">The Atelier</p>
          <h2>Build your own puja set.</h2>
          <p className="lede">Choose the pieces, we compose them into one gift-wrapped set — with a hand-written note for the recipient.</p>
          <div style={{ marginTop: 36 }}>
            <Link className="btn btn-solid" to="/atelier">Start composing</Link>
          </div>
        </div>
      </section>

      {/* ——— craft ——— */}
      <section className="band">
        <div className="wrap craft-grid">
          <div className="craft-img"><img src={diyasImg} alt="Hand-engraved brass diyas" /></div>
          <div>
            <p className="eyebrow">Our craft</p>
            <h2>From furnace<br />to mandir.</h2>
            <p className="lede" style={{ marginTop: 18 }}>
              We work directly with family-run foundries — no traders, no dilution.
              What you hold is exactly what left the karigar's bench.
            </p>
            <div className="steps">
              {steps.map((s) => (
                <div className="step" key={s.n}>
                  <span className="num">{s.n}</span>
                  <div><h4>{s.h}</h4><p>{s.p}</p></div>
                </div>
              ))}
            </div>
            <Link className="btn btn-ghost" to="/about">Read our story</Link>
          </div>
        </div>
      </section>

      {/* ——— diwali ——— */}
      <section className="diwali">
        <div className="wrap diwali-grid">
          <div>
            <p className="eyebrow">The Diwali Edit · 8 Nov</p>
            <h2>Give something<br />that outlives the festival.</h2>
            <p className="lede" style={{ marginTop: 18 }}>
              Sweets get eaten, clothes get folded away. Brass stays — on the mandir,
              in the family, in the story.
            </p>
            <div className="diwali-note"><span className="dot" />Order by 2 Nov for guaranteed Diwali delivery</div>
            <div className="diwali-note"><span className="dot" />Complimentary gift wrap & hand-written note on every order</div>
          </div>
          <div className="gift-tiers">
            {[
              ['Under ₹999', 'Diyas, incense holders & small gifts'],
              ['Under ₹2,999', 'Thali sets & mid-size idols'],
              ['Heirlooms ₹4,999+', 'Large idols & statement decor'],
            ].map(([b, s]) => (
              <Link className="tier" to="/shop?cat=diwali" key={b}>
                <div><b>{b}</b><p style={{ fontSize: 13.5, color: 'var(--ink-2)', marginTop: 4 }}>{s}</p></div>
                <span>Shop →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ——— testimonials ——— */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <div>
              <p className="eyebrow">Word of mouth</p>
              <h2>Homes that glow.</h2>
            </div>
          </div>
          <div className="testi-grid">
            {testimonials.map((t) => (
              <div className="testi" key={t.by}>
                <div className="stars">★★★★★</div>
                <p>"{t.q}"</p>
                <cite><b>{t.by}</b>{t.where}</cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— newsletter ——— */}
      <section className="band">
        <div className="wrap news">
          <p className="eyebrow">Letters from the foundry</p>
          <h2>First dibs on new pieces.</h2>
          <p className="lede" style={{ marginTop: 14 }}>New idols, restocks and Diwali drops — once a month, no noise.</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="you@example.com" aria-label="Email" />
            <button className="btn btn-solid" type="submit">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  )
}
