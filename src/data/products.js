import heroImg from '../assets/hero.webp'
import ganeshaImg from '../assets/product-ganesha.webp'
import diyasImg from '../assets/product-diyas.webp'
import thaliImg from '../assets/product-thali.webp'
import durgaImg from '../assets/product-durga.webp'
import krishnaImg from '../assets/product-krishna.webp'
import elephantImg from '../assets/product-elephant.webp'
import peacockImg from '../assets/product-peacock.webp'

export const inr = (n) => '₹' + n.toLocaleString('en-IN')

/* Sample catalogue — real 50–80 SKU manufacturer import replaces this file's
   `products` array (same shape) or loads from Supabase.                   */
export const products = [
  // ——— god idols ———
  { id: 'ganesha-antique', name: 'Ganesha Idol · Antique Finish', category: 'idols', deity: 'ganesha', size: 'medium', weight: '1.2 kg · 18 cm', price: 4999, mrp: 6499, badge: 'Bestseller', img: ganeshaImg, blurb: 'The remover of obstacles, hand-chased in antique-finish brass for the home mandir.' },
  { id: 'ganesha-mini', name: 'Ganesha Idol · Temple Mini', category: 'idols', deity: 'ganesha', size: 'small', weight: '320 g · 9 cm', price: 1499, mrp: null, badge: null, img: ganeshaImg, blurb: 'A pocket mandir — for desks, dashboards and diwali gifting.' },
  { id: 'ganesha-royal', name: 'Grand Ganesha · Royal Seat', category: 'idols', deity: 'ganesha', size: 'large', weight: '4.8 kg · 32 cm', price: 14999, mrp: 17999, badge: 'Heirloom', img: ganeshaImg, blurb: 'A statement murti for entrances and large puja rooms. Cast in a single pour.' },
  { id: 'durga-lion', name: 'Durga with Lion', category: 'idols', deity: 'durga', size: 'medium', weight: '2.1 kg · 24 cm', price: 7999, mrp: null, badge: null, img: durgaImg, blurb: 'Mahishasura Mardini in mid-victory — the protector every home deserves.' },
  { id: 'durga-mini', name: 'Durga Mini · Sherawali', category: 'idols', deity: 'durga', size: 'small', weight: '450 g · 11 cm', price: 1999, mrp: null, badge: null, img: durgaImg, blurb: 'Small in size, fierce in presence. Ideal for gifting during Navratri.' },
  { id: 'krishna-flute', name: 'Krishna with Flute', category: 'idols', deity: 'krishna', size: 'medium', weight: '1.6 kg · 22 cm', price: 5999, mrp: 7499, badge: 'Bestseller', img: krishnaImg, blurb: 'Venugopal at rest — the most gifted idol in our collection.' },
  { id: 'krishna-laddu', name: 'Laddu Gopal · Bal Krishna', category: 'idols', deity: 'krishna', size: 'small', weight: '280 g · 8 cm', price: 1299, mrp: null, badge: null, img: krishnaImg, blurb: 'The beloved butter-thief, sized for daily seva and Janmashtami.' },
  { id: 'lakshmi-kamal', name: 'Lakshmi · Kamal Seat', category: 'idols', deity: 'lakshmi', size: 'medium', weight: '1.4 kg · 19 cm', price: 5499, mrp: null, badge: null, img: krishnaImg, blurb: 'Goddess of prosperity seated on the lotus — the Diwali essential.' },
  { id: 'parvati-grace', name: 'Parvati · Grace Form', category: 'idols', deity: 'parvati', size: 'medium', weight: '1.5 kg · 20 cm', price: 5799, mrp: null, badge: null, img: durgaImg, blurb: 'The divine mother in serene abhaya — calm cast in metal.' },
  { id: 'shiva-dhyan', name: 'Shiva · Dhyan Mudra', category: 'idols', deity: 'shiva', size: 'medium', weight: '1.8 kg · 21 cm', price: 6499, mrp: null, badge: null, img: ganeshaImg, blurb: 'Mahadev in deep meditation — for the quiet corner of the house.' },

  // ——— showpieces ———
  { id: 'elephant-pair', name: 'Elephant Pair · Caparisoned', category: 'showpieces', subject: 'elephant', size: 'medium', weight: '2.4 kg · pair · 20 cm', price: 6999, mrp: null, badge: 'Bestseller', img: elephantImg, blurb: 'Auspicious guardians for the entrance — trunks raised in welcome.' },
  { id: 'elephant-royal', name: 'Royal Elephant · Large', category: 'showpieces', subject: 'elephant', size: 'large', weight: '5.5 kg · 34 cm', price: 16999, mrp: null, badge: 'Heirloom', img: elephantImg, blurb: 'A single-pour showpiece that anchors a living room.' },
  { id: 'peacock-fan', name: 'Peacock · Fanned Tail', category: 'showpieces', subject: 'peacock', size: 'medium', weight: '1.9 kg · 26 cm', price: 6499, mrp: null, badge: null, img: peacockImg, blurb: "India's bird, every feather hand-engraved." },
  { id: 'peacock-pair-mini', name: 'Peacock Pair · Small', category: 'showpieces', subject: 'peacock', size: 'small', weight: '700 g · pair · 12 cm', price: 2499, mrp: null, badge: null, img: peacockImg, blurb: 'A graceful pair for consoles and wedding gifts.' },
  { id: 'horse-victory', name: 'Horse · Victory Pose', category: 'showpieces', subject: 'horse', size: 'medium', weight: '2.2 kg · 24 cm', price: 7499, mrp: null, badge: null, img: elephantImg, blurb: 'Strength and momentum — a favourite for offices.' },
  { id: 'nataraja-cosmic', name: 'Nataraja · Cosmic Dance', category: 'showpieces', subject: 'nataraja', size: 'large', weight: '6.2 kg · 36 cm', price: 18999, mrp: 22999, badge: 'Heirloom', img: ganeshaImg, blurb: 'The lord of dance in the ring of fire — Chola bronze tradition, cast in brass.' },

  // ——— diyas & lighting ———
  { id: 'diya-set4', name: 'Hand-Engraved Diya · Set of 4', category: 'diyas', size: 'small', weight: '320 g · 7 cm each', price: 1299, mrp: null, badge: 'Diwali pick', img: diyasImg, blurb: 'Petal-engraved diyas that make every evening aarti glow.' },
  { id: 'diya-set12', name: 'Diya · Set of 12 (Gift Box)', category: 'diyas', size: 'small', weight: '950 g · gift boxed', price: 2999, mrp: 3799, badge: null, img: diyasImg, blurb: 'Twelve diyas in a ready-to-gift box — the corporate Diwali answer.' },
  { id: 'diya-aarti', name: 'Grand Aarti Diya · Single', category: 'diyas', size: 'medium', weight: '680 g · 14 cm', price: 1799, mrp: null, badge: null, img: diyasImg, blurb: 'One large flame for the main aarti — deep bowl, steady light.' },

  // ——— puja essentials ———
  { id: 'thali-5pc', name: 'Puja Thali Set · 5 Pieces', category: 'puja', size: 'medium', weight: '850 g · 30 cm', price: 2799, mrp: 3499, badge: 'Bestseller', img: thaliImg, blurb: 'Thali, two katoris, bell and incense holder — the complete ritual, one box.' },
  { id: 'thali-7pc', name: 'Royal Thali Set · 7 Pieces', category: 'puja', size: 'large', weight: '1.6 kg · 35 cm', price: 4999, mrp: null, badge: null, img: thaliImg, blurb: 'For weddings and griha pravesh — our most complete set.' },
  { id: 'ghanta-bell', name: 'Garuda Ghanta Bell', category: 'puja', size: 'small', weight: '380 g · 13 cm', price: 1099, mrp: null, badge: null, img: thaliImg, blurb: 'A clear, long ring — tuned by hand, not machine.' },
  { id: 'incense-lotus', name: 'Incense Holder · Lotus', category: 'puja', size: 'small', weight: '220 g · 10 cm', price: 899, mrp: null, badge: null, img: diyasImg, blurb: 'Lotus-form agarbatti stand with ash catcher.' },

  // ——— decor & gifting ———
  { id: 'urli-marigold', name: 'Marigold Urli Bowl', category: 'decor', size: 'large', weight: '1.8 kg · 35 cm', price: 5499, mrp: 6999, badge: 'Heirloom', img: heroImg, blurb: 'Float marigolds and a diya — the entrance your guests photograph.' },
  { id: 'planter-lotus', name: 'Lotus Planter · Antique', category: 'decor', size: 'medium', weight: '1.1 kg · 18 cm', price: 2999, mrp: null, badge: null, img: heroImg, blurb: 'Antique-finish planter that makes any money plant look intentional.' },
]

export const categories = [
  { slug: 'idols', name: 'God Idols & Murtis', note: 'Ganesha, Durga, Krishna & more', img: ganeshaImg },
  { slug: 'showpieces', name: 'Showpieces', note: 'Animals & sculptures, big and small', img: elephantImg },
  { slug: 'diyas', name: 'Diyas & Lighting', note: 'For every evening aarti', img: diyasImg },
  { slug: 'puja', name: 'Puja Essentials', note: 'Thalis, bells, incense holders', img: thaliImg },
  { slug: 'decor', name: 'Decor & Gifting', note: 'Urlis, planters, gift sets', img: heroImg },
  { slug: 'diwali', name: 'The Diwali Edit', note: 'Gifts that outlive the festival', img: heroImg },
]

export const deities = ['ganesha', 'durga', 'parvati', 'krishna', 'lakshmi', 'shiva']
export const deityName = (d) => ({ ganesha: 'Ganesha', durga: 'Durga', parvati: 'Parvati', krishna: 'Krishna', lakshmi: 'Lakshmi', shiva: 'Shiva' }[d] || d)

export const getProduct = (id) => products.find((p) => p.id === id)
export const byCategory = (slug) => slug === 'diwali'
  ? products.filter((p) => p.badge === 'Diwali pick' || p.badge === 'Bestseller' || p.category === 'diyas')
  : products.filter((p) => p.category === slug)
