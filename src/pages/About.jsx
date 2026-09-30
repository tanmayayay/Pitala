import { Link } from 'react-router-dom'
import heroImg from '../assets/hero.webp'
import ganeshaImg from '../assets/product-ganesha.webp'

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap" style={{ maxWidth: 860 }}>
          <p className="eyebrow">Our story</p>
          <h1>Every idol carries<br />a <em style={{ color: 'var(--bronze)' }}>fingerprint.</em></h1>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ maxWidth: 860 }}>
          <div className="about-prose">
            <p>
              Three generations ago, our family stood around a pit furnace watching brass
              turn liquid gold. The karigars poured, the moulds hissed, and by evening a
              Ganesha emerged — still warm — that would sit in someone's mandir for the
              next hundred years.
            </p>
            <p>
              Nothing about that evening has changed. The furnace is the same. The
              lost-wax method is the same. The hands are the children and grandchildren
              of those hands. What changed is everything around it: brass became a
              commodity, idols became inventory, and the person who made your murti
              became a stranger you would never meet.
            </p>
            <p>
              Pitala exists to undo that distance. We are manufacturers — we cast the
              brass ourselves, in our own foundries, with karigar families we have worked
              beside for decades. There is no trader marking it up, no warehouse
              ageing it, no mystery about what metal you are bringing home. When you
              hold a Pitala idol, you are holding the exact object that left the
              craftsman's bench. Sometimes, if you look closely at the base, you can
              still see the fingerprint in the wax.
            </p>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap about-split">
          <div className="craft-img"><img src={ganeshaImg} alt="Handcrafted brass Ganesha idol" /></div>
          <div>
            <p className="eyebrow">Make in India, as a practice</p>
            <h2>Not a slogan.<br />A supply chain.</h2>
            <div className="about-prose" style={{ marginTop: 20 }}>
              <p>
                "Make in India" is printed on a lot of boxes. For us it is not a label —
                it is the only way we know how to work. The brass is melted here. The
                moulds are built here. The chasing, the engraving, the polishing, the
                packing — every pair of hands in that chain lives within a few
                kilometres of our foundry, and most of them have done this work longer
                than we have been alive.
              </p>
              <p>
                When you buy direct from the manufacturer, something quiet happens:
                the karigar earns more, you pay less, and the craft survives another
                generation. That is the whole business model. Everything else —
                the website, the gift wrap, the Diwali campaigns — is just packaging
                around that one honest exchange.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap" style={{ maxWidth: 860 }}>
          <p className="eyebrow">What we promise</p>
          <h2 style={{ marginBottom: 40 }}>Three things, no fine print.</h2>
          <div className="steps">
            {[
              ['01', 'Solid brass, always', 'We state the weight of every piece because weight is honesty. No hollow cores, no brass-plated shortcuts — if it says 1.2 kg, it weighs 1.2 kg.'],
              ['02', 'The maker earns first', 'By selling direct, the largest share of every rupee stays with the foundry and the karigar families — not with middlemen.'],
              ['03', 'Made to be inherited', 'We finish every piece to age gracefully for decades. If your grandchildren argue over who gets the urli, we have done our job.'],
            ].map(([n, h, p]) => (
              <div className="step" key={n}>
                <span className="num">{n}</span>
                <div><h4>{h}</h4><p>{p}</p></div>
              </div>
            ))}
          </div>
          <div className="about-cta">
            <Link className="btn btn-solid" to="/shop">Shop the collection</Link>
            <Link className="btn btn-ghost" to="/collections">Browse by ritual</Link>
          </div>
        </div>
      </section>

      <section className="band" style={{ padding: '80px 0' }}>
        <div className="wrap" style={{ maxWidth: 860, textAlign: 'center' }}>
          <p className="eyebrow" style={{ marginBottom: 22 }}>From the foundry floor</p>
          <p className="about-quote">
            "My father chased petals. I chase petals. My son is learning to chase
            petals. The machine can make a thousand diyas in a day, but it cannot
            make one that your mother will keep."
          </p>
          <cite className="about-cite">— Master karigar, with us 31 years</cite>
        </div>
      </section>

      <section>
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">The invitation</p>
            <h2>Bring home something<br />with a past.</h2>
            <p className="lede" style={{ margin: '20px 0 34px' }}>
              This Diwali, skip the disposable. Light a diya that was poured, chased
              and polished by hands you could shake — and that will still be glowing
              when your children light it.
            </p>
            <Link className="btn btn-solid" to="/shop?cat=diwali">Shop the Diwali Edit</Link>
          </div>
          <div className="hero-img"><img src={heroImg} alt="Brass idols with diyas and marigold urli" /></div>
        </div>
      </section>
    </>
  )
}
