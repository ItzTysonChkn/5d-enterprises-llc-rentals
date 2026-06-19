const uses = [
  'EXCAVATION',
  'TRENCHING',
  'LAND CLEARING',
  'FENCE INSTALLATION',
  'CONCRETE REMOVAL',
  'LANDSCAPING',
  'CONSTRUCTION PROJECTS',
  'PROPERTY IMPROVEMENTS',
]

export default function PerfectFor() {
  return (
    <section className="bg-[#111] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-[#f5c518] text-xs font-bold tracking-widest uppercase mb-2">
            Get It Done
          </p>
          <h2
            className="text-white font-extrabold uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Perfect For
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {uses.map((use) => (
            <div
              key={use}
              className="bg-[#0d0d0d] border border-[#2a2a2a] px-4 py-4 text-center"
            >
              <span className="text-white font-bold text-xs tracking-widest uppercase">
                {use}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
