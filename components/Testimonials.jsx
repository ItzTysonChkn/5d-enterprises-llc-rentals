const testimonials = [
  {
    stars: 5,
    quote:
      '"Rented a skid loader for a weekend fence project — machine was clean, ran perfect, and they dropped it right at my place. Couldn\'t ask for more."',
    name: 'Mike R.',
    location: 'ALAMOSA, CO',
  },
  {
    stars: 5,
    quote:
      '"Fair pricing and the excavator was ready when I needed it. These guys know equipment and they\'re easy to work with."',
    name: 'Dave T.',
    location: 'MONTE VISTA, CO',
  },
  {
    stars: 5,
    quote:
      '"Called in the morning, had a trailer delivered the same day. Local, reliable, and no runaround — my go-to now."',
    name: 'Sarah K.',
    location: 'CENTER, CO',
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#f5c518]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="bg-[#111] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-[#f5c518] text-xs font-bold tracking-widest uppercase mb-2">
            From the Job Site
          </p>
          <h2
            className="text-white font-extrabold uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            What Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#0d0d0d] border border-[#2a2a2a] p-6"
            >
              <Stars count={t.stars} />
              <p className="text-[#d1d5db] text-sm leading-relaxed mb-6">{t.quote}</p>
              <div>
                <p className="text-white font-bold text-sm">{t.name}</p>
                <p className="text-[#9ca3af] text-xs tracking-widest uppercase mt-0.5">
                  {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
