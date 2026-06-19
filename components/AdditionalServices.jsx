const services = [
  'LAND CLEARING',
  'GENERAL EXCAVATION',
  'FOUNDATION DEMOLITION',
  'DRIVEWAYS',
  'PATIOS & WALKWAYS',
  'POOL DECKS & SLABS',
  'FOUNDATIONS',
  'STAMPED CONCRETE',
  'EPOXY COATINGS',
]

export default function AdditionalServices() {
  return (
    <section id="services" className="bg-[#0d0d0d] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-12">
          <div className="max-w-md">
            <p className="text-[#f5c518] text-xs font-bold tracking-widest uppercase mb-2">
              Beyond Rentals
            </p>
            <h2
              className="text-white font-extrabold uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              Additional Services
            </h2>
          </div>
          <p className="text-[#9ca3af] text-base leading-relaxed max-w-sm lg:text-right">
            From raw land to finished concrete, we handle the heavy work that comes before and
            after the rental.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border border-[#2a2a2a]">
          {services.map((service, i) => (
            <div
              key={service}
              className="flex items-center gap-3 px-5 py-4 border-b border-r border-[#2a2a2a] last:border-b-0"
            >
              <span className="w-2 h-2 bg-[#f5c518] shrink-0" />
              <span className="text-white font-bold text-sm tracking-widest uppercase">
                {service}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
