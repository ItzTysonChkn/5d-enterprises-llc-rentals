const categories = [
  {
    title: 'MINI EXCAVATORS',
    tag: 'INCL. ONE BUCKET',
    items: ['John Deere 50G', 'John Deere 35G'],
  },
  {
    title: 'SKID LOADERS',
    tag: 'INCL. ONE BUCKET',
    items: ['John Deere 325G', 'CAT 259D3'],
  },
  {
    title: 'TRAILERS',
    tag: null,
    items: ['32 FT PJ Gooseneck', '21 FT PJ Tiltback Bumperpull', '25 FT Big Tex Equipment Trailer'],
  },
  {
    title: 'SCISSOR LIFTS',
    tag: null,
    items: ['Skyjack 3219'],
  },
  {
    title: 'PLATE COMPACTORS',
    tag: null,
    items: null, // full-width link
    fullWidth: true,
  },
]

function EquipmentRow({ name }) {
  return (
    <a
      href="tel:7198501498"
      className="flex items-center justify-between px-4 py-3 border-b border-[#2a2a2a] hover:bg-[#1a1a1a] transition-colors group"
    >
      <span className="text-white text-sm font-medium">{name}</span>
      <span className="text-[#f5c518] text-xs font-bold tracking-widest group-hover:translate-x-0.5 transition-transform">
        LEARN MORE &rsaquo;
      </span>
    </a>
  )
}

function CategoryCard({ cat }) {
  if (cat.fullWidth) {
    return (
      <div className="col-span-1 md:col-span-2 border border-[#2a2a2a] bg-[#111]">
        <a
          href="tel:7198501498"
          className="flex items-center justify-between px-4 py-4 hover:bg-[#1a1a1a] transition-colors group"
        >
          <span className="text-white font-bold text-sm tracking-widest uppercase">
            {cat.title}
          </span>
          <span className="text-[#f5c518] text-xs font-bold tracking-widest group-hover:translate-x-0.5 transition-transform">
            LEARN MORE &rsaquo;
          </span>
        </a>
      </div>
    )
  }

  return (
    <div className="border border-[#2a2a2a] bg-[#111]">
      {/* Category header */}
      <div className="bg-[#0d0d0d] px-4 py-3 flex items-center justify-between border-b border-[#2a2a2a]">
        <span className="text-white font-extrabold text-sm tracking-widest uppercase">
          {cat.title}
        </span>
        {cat.tag && (
          <span className="text-[#9ca3af] text-[10px] font-bold tracking-widest uppercase">
            {cat.tag}
          </span>
        )}
      </div>
      {/* Items */}
      {cat.items && cat.items.map((item) => <EquipmentRow key={item} name={item} />)}
    </div>
  )
}

export default function EquipmentRentals() {
  return (
    <section id="equipment" className="bg-[#0d0d0d] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <p className="text-[#f5c518] text-xs font-bold tracking-widest uppercase mb-2">
            What We Rent
          </p>
          <h2
            className="text-white font-extrabold uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Equipment Rentals
          </h2>
          <p className="text-[#9ca3af] text-sm mt-2">
            Tap any machine to see photos, pricing &amp; details.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {categories.map((cat) => (
            <CategoryCard key={cat.title} cat={cat} />
          ))}
        </div>

        {/* Reserve CTA */}
        <a
          href="tel:7198501498"
          className="flex items-center justify-center gap-3 bg-[#f5c518] text-black font-extrabold uppercase tracking-widest text-sm py-4 hover:bg-yellow-400 transition-colors w-full"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          Reserve Your Equipment
        </a>
      </div>
    </section>
  )
}
