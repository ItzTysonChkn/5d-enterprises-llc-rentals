export default function ContactCTA() {
  return (
    <section id="contact" className="bg-[#0d0d0d]">
      {/* Top CTA block */}
      <div className="py-20 md:py-28 text-center border-b border-[#1a1a1a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#f5c518] text-xs font-bold tracking-widest uppercase mb-4">
            Get in Touch
          </p>
          <h2
            className="text-white font-extrabold uppercase leading-none tracking-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}
          >
            Ready to Get
            <br />
            the Job Done?
          </h2>
          <p className="text-[#9ca3af] text-base leading-relaxed mb-10 max-w-xl mx-auto">
            Call or text for rates, availability, and delivery anywhere in the San Luis Valley
            &amp; surrounding areas.
          </p>
          <a
            href="tel:7198501498"
            className="inline-block bg-[#f5c518] hover:bg-yellow-400 transition-colors px-8 py-6"
          >
            <p className="text-black text-xs font-bold tracking-widest uppercase mb-1">
              Call or Text
            </p>
            <p className="text-black font-extrabold leading-none" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              719-850-1498
            </p>
            <p className="text-black/60 text-xs font-bold tracking-widest uppercase mt-1">
              ☎ Tap to call now
            </p>
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            {/* Brand */}
            <div>
              <p className="text-white font-extrabold text-xl tracking-widest uppercase mb-2">
                5D Enterprises LLC
              </p>
              <p className="text-[#9ca3af] text-xs tracking-widest uppercase mb-4">
                Equipment Rentals &bull; Excavation &bull; Land Clearing &bull; Demolition
              </p>
              <a
                href="mailto:Rdurre1498@gmail.com"
                className="inline-flex items-center gap-2 bg-[#f5c518] text-black font-bold text-sm px-4 py-2 hover:bg-yellow-400 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Rdurre1498@gmail.com
              </a>
            </div>

            {/* Info */}
            <div className="text-right">
              <p className="text-[#9ca3af] text-sm leading-relaxed">
                Daily, weekend &amp; weekly rentals.
                <br />
                Delivery available. Locally owned &amp; operated.
              </p>
              <p className="text-[#555] text-xs mt-4 tracking-wide">
                &copy; {new Date().getFullYear()} 5D Enterprises LLC &bull; San Luis Valley, Colorado
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}
