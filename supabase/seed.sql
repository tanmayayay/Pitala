-- ═══════════════════════════════════════════════════════════
-- PITALA · sample catalogue (25 products)
-- Idempotent: safe to re-run; existing rows are updated in place.
-- image_url values are filenames in the public `product-images`
-- storage bucket (see supabase/README.md). They are category-level
-- placeholders — swap in per-product filenames as real photos arrive,
-- then re-run this file.
-- ═══════════════════════════════════════════════════════════

insert into products
  (id, name, category, deity, subject, size, weight, dimensions,
   price_inr, mrp_inr, badge, image_url, blurb, in_stock)
values
  ('ganesha-antique', 'Ganesha Idol · Antique Finish', 'idols', 'Ganesha', null, 'Medium', '1.2 kg', '18 x 12 x 10 cm',
   4999, 6499, 'Bestseller', 'product-ganesha.webp',
   'Hand-cast Ganesha in deep antique brass, chiselled by master karigars.', true),

  ('ganesha-mini', 'Ganesha Idol · Mini Temple', 'idols', 'Ganesha', null, 'Small', '380 g', '10 x 7 x 6 cm',
   1499, null, null, 'product-ganesha.webp',
   'A pocket-mandir Ganesha for desks, dashboards and travel altars.', true),

  ('ganesha-royal', 'Royal Ganesha · Temple Size', 'idols', 'Ganesha', null, 'Large', '8.5 kg', '45 x 30 x 24 cm',
   14999, 17999, 'Heirloom', 'product-ganesha.webp',
   'A statement temple-size Ganesha for entryways and large mandirs.', true),

  ('durga-lion', 'Durga on Lion · Antique', 'idols', 'Durga', null, 'Medium', '2.1 kg', '24 x 16 x 12 cm',
   7999, 9499, null, 'product-durga.webp',
   'Mahishasuramardini in mid-victory, cast in solid brass.', true),

  ('durga-mini', 'Mini Durga · Blessing Pose', 'idols', 'Durga', null, 'Small', '420 g', '11 x 8 x 6 cm',
   1999, null, null, 'product-durga.webp',
   'A gentle blessing Durga for the home altar or gifting.', true),

  ('krishna-flute', 'Krishna with Flute', 'idols', 'Krishna', null, 'Medium', '1.6 kg', '22 x 10 x 8 cm',
   5999, 7299, 'Bestseller', 'product-krishna.webp',
   'Venugopal Krishna in flowing tribhanga pose, mirror-polished.', true),

  ('krishna-laddu', 'Laddu Gopal · Bal Krishna', 'idols', 'Krishna', null, 'Small', '310 g', '9 x 7 x 6 cm',
   1299, null, null, 'product-krishna.webp',
   'Bal Krishna for daily puja, beloved for Janmashtami.', true),

  ('lakshmi-kamal', 'Lakshmi on Lotus', 'idols', 'Lakshmi', null, 'Medium', '1.4 kg', '20 x 12 x 9 cm',
   5499, 6799, 'Diwali pick', 'product-durga.webp',
   'Kamal Lakshmi showering coins — the Diwali mandir centrepiece.', true),

  ('parvati-grace', 'Parvati · Grace Pose', 'idols', 'Parvati', null, 'Medium', '1.5 kg', '21 x 11 x 9 cm',
   5799, null, null, 'product-durga.webp',
   'Serene standing Parvati with fine hand-chased jewellery detail.', true),

  ('shiva-dhyan', 'Shiva in Meditation', 'idols', 'Shiva', null, 'Medium', '1.8 kg', '23 x 14 x 11 cm',
   6499, 7899, null, 'product-ganesha.webp',
   'Dhyan Shiva seated in deep meditation, antique finish.', true),

  ('elephant-pair', 'Elephant Pair · Trunk Up', 'showpieces', null, 'Elephant', 'Medium', '2.4 kg (pair)', '16 x 10 x 8 cm each',
   6999, 8499, null, 'product-elephant.webp',
   'A lucky trunk-up elephant pair for entrances and desks.', true),

  ('elephant-royal', 'Royal Caparisoned Elephant', 'showpieces', null, 'Elephant', 'Large', '6.8 kg', '34 x 22 x 16 cm',
   16999, 19999, 'Heirloom', 'product-elephant.webp',
   'A grand caparisoned elephant — the collector showpiece.', true),

  ('peacock-fan', 'Peacock · Open Fan', 'showpieces', null, 'Peacock', 'Medium', '1.9 kg', '26 x 18 x 10 cm',
   6499, null, null, 'product-peacock.webp',
   'Peacock with fully fanned tail, every feather hand-chased.', true),

  ('peacock-pair-mini', 'Mini Peacock Pair', 'showpieces', null, 'Peacock', 'Small', '520 g (pair)', '12 x 8 x 6 cm each',
   2499, null, 'New', 'product-peacock.webp',
   'A dainty peacock pair for shelves and console styling.', true),

  ('horse-victory', 'Victory Horse', 'showpieces', null, 'Horse', 'Medium', '2.2 kg', '24 x 16 x 10 cm',
   7499, null, null, 'product-elephant.webp',
   'Rearing victory horse — a Vastu favourite for career corners.', true),

  ('nataraja-cosmic', 'Nataraja · Cosmic Dance', 'idols', 'Shiva', null, 'Large', '7.2 kg', '40 x 28 x 14 cm',
   18999, 22999, 'Heirloom', 'product-ganesha.webp',
   'The cosmic dancer in full prabhamandal arch — our finest casting.', true),

  ('diya-set4', 'Hand-Engraved Diya · Set of 4', 'diyas', null, null, 'Small', '320 g (set)', '7 cm dia each',
   1299, null, 'Diwali pick', 'product-diyas.webp',
   'Four petal-engraved diyas for the evening aarti.', true),

  ('diya-set12', 'Festive Diya · Set of 12', 'diyas', null, null, 'Small', '960 g (set)', '7 cm dia each',
   2999, 3599, null, 'product-diyas.webp',
   'A dozen diyas to line the whole home this Diwali.', true),

  ('diya-aarti', 'Aarti Diya with Handle', 'diyas', null, null, 'Medium', '480 g', '12 cm dia',
   1799, null, null, 'product-diyas.webp',
   'Long-handled aarti diya with five wick cups.', true),

  ('thali-5pc', 'Puja Thali Set · 5 Pieces', 'puja', null, null, 'Medium', '850 g', '30 cm plate',
   2799, 3499, 'Bestseller', 'product-thali.webp',
   'Engraved thali with two katoris, bell and incense holder.', true),

  ('thali-7pc', 'Grand Puja Thali Set · 7 Pieces', 'puja', null, null, 'Large', '1.4 kg', '35 cm plate',
   4999, 5999, null, 'product-thali.webp',
   'The complete seven-piece ritual set in temple finish.', true),

  ('ghanta-bell', 'Ghanta · Temple Bell', 'puja', null, null, 'Small', '260 g', '14 cm tall',
   1099, null, null, 'product-thali.webp',
   'Hand-tuned brass ghanta with a clear, long ring.', true),

  ('incense-lotus', 'Lotus Incense Holder', 'puja', null, null, 'Small', '180 g', '10 cm dia',
   899, null, null, 'product-diyas.webp',
   'Lotus-bloom agarbatti holder with ash-catching petals.', true),

  ('urli-marigold', 'Marigold Urli Bowl', 'decor', null, null, 'Large', '1.8 kg', '35 cm dia',
   5499, 6999, 'Heirloom', 'hero.webp',
   'Wide engraved urli for floating flowers at the entrance.', true),

  ('planter-lotus', 'Lotus Planter', 'decor', null, null, 'Medium', '1.1 kg', '22 cm dia',
   2999, null, 'New', 'hero.webp',
   'A lotus-motif brass planter for greens and festive styling.', true)

on conflict (id) do update set
  name        = excluded.name,
  category    = excluded.category,
  deity       = excluded.deity,
  subject     = excluded.subject,
  size        = excluded.size,
  weight      = excluded.weight,
  dimensions  = excluded.dimensions,
  price_inr   = excluded.price_inr,
  mrp_inr     = excluded.mrp_inr,
  badge       = excluded.badge,
  image_url   = excluded.image_url,
  blurb       = excluded.blurb,
  in_stock    = excluded.in_stock;
