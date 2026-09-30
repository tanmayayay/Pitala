import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { products, categories, deities, deityName, byCategory } from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx'
import './catalog.css'

const PILLS = categories.filter((c) => c.slug !== 'diwali')
const SIZES = [
  ['small', 'Small'],
  ['medium', 'Medium'],
  ['large', 'Large'],
]
const SORTS = [
  ['featured', 'Featured'],
  ['low', 'Price: low to high'],
  ['high', 'Price: high to low'],
]

const catName = (slug) =>
  slug === 'all' ? 'Shop all' : slug === 'diwali' ? 'The Diwali Edit' : PILLS.find((c) => c.slug === slug)?.name || 'Shop all'

export default function Shop() {
  const [params, setParams] = useSearchParams()
  const paramCat = params.get('cat')
  const validCat = (s) => s === 'all' || s === 'diwali' || PILLS.some((c) => c.slug === s)

  const [cat, setCatState] = useState(validCat(paramCat) ? paramCat : 'all')
  const [deity, setDeity] = useState('all')
  const [size, setSize] = useState('all')
  const [q, setQ] = useState('')
  const [sort, setSort] = useState('featured')

  const setCat = (slug) => {
    setCatState(slug)
    setDeity('all')
    setParams(slug === 'all' ? {} : { cat: slug })
  }

  const clearAll = () => {
    setCatState('all')
    setDeity('all')
    setSize('all')
    setQ('')
    setSort('featured')
    setParams({})
  }

  const showDeity = cat === 'all' || cat === 'idols'

  const filtered = useMemo(() => {
    let list = cat === 'all' ? [...products] : byCategory(cat)
    if (showDeity && deity !== 'all') list = list.filter((p) => p.deity === deity)
    if (size !== 'all') list = list.filter((p) => p.size === size)
    const needle = q.trim().toLowerCase()
    if (needle) list = list.filter((p) => p.name.toLowerCase().includes(needle))
    if (sort === 'low') list = [...list].sort((a, b) => a.price - b.price)
    if (sort === 'high') list = [...list].sort((a, b) => b.price - a.price)
    return list
  }, [cat, deity, size, q, sort, showDeity])

  return (
    <div className="wrap cat-page">
      <p className="eyebrow">Shop</p>
      <h1>{catName(cat)}</h1>
      <p className="lede cat-sub">
        Solid brass, hand-finished by family-run foundries — every piece weighed and guaranteed.
      </p>

      <div className="filters">
        <div className="pill-row" role="tablist" aria-label="Categories">
          <button className={`pill${cat === 'all' ? ' active' : ''}`} onClick={() => setCat('all')}>
            All
          </button>
          {PILLS.map((c) => (
            <button
              key={c.slug}
              className={`pill${cat === c.slug ? ' active' : ''}`}
              onClick={() => setCat(c.slug)}
            >
              {c.name}
            </button>
          ))}
        </div>
        <div className="filter-controls">
          <input
            className="search-input"
            type="search"
            placeholder="Search idols, diyas, thalis…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            aria-label="Search products"
          />
          {showDeity && (
            <select className="select" value={deity} onChange={(e) => setDeity(e.target.value)} aria-label="Filter by deity">
              <option value="all">All deities</option>
              {deities.map((d) => (
                <option key={d} value={d}>{deityName(d)}</option>
              ))}
            </select>
          )}
          <select className="select" value={size} onChange={(e) => setSize(e.target.value)} aria-label="Filter by size">
            <option value="all">All sizes</option>
            {SIZES.map(([v, label]) => (
              <option key={v} value={v}>{label}</option>
            ))}
          </select>
          <select className="select" value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort products">
            {SORTS.map(([v, label]) => (
              <option key={v} value={v}>{label}</option>
            ))}
          </select>
        </div>
      </div>

      <p className="result-count">
        Showing {filtered.length} of {products.length} pieces
      </p>

      {filtered.length > 0 ? (
        <div className="cat-grid">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No pieces match those filters.</h2>
          <p>Try a different deity, size, or search term — or start over.</p>
          <button className="btn btn-solid" onClick={clearAll}>Clear all filters</button>
        </div>
      )}
    </div>
  )
}
