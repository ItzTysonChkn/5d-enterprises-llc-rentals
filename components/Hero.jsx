export default function Hero() {
  return (
    <section className="bg-[#0d0d0d] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left content */}
          <div className="flex-1 max-w-xl">
            <div className="inline-block bg-[#f5c518] text-black text-xs font-bold tracking-widest px-3 py-1 mb-6 uppercase">
              Equipment Rental &amp; Excavation
            </div>

            <h1 className="text-white font-extrabold uppercase leading-none tracking-tight mb-4"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              YOUR PROJECT
              <br />
              STARTS HERE.
            </h1>

            <p className="text-[#f5c518] font-bold uppercase tracking-wider text-lg md:text-xl mb-3">
              Rent the Equipment. Get the Job Done.
            </p>

            <p className="text-[#9ca3af] text-sm tracking-widest uppercase mb-8">
              Equipment Rentals &bull; Excavation &bull; Land Clearing &bull; Demolition
            </p>

            <a
              href="tel:7198501498"
              className="inline-flex items-center gap-3 bg-[#f5c518] text-black font-extrabold uppercase tracking-wider text-base px-6 py-4 hover:bg-yellow-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call or Text: 719-850-1498
            </a>

            <p className="text-[#9ca3af] text-sm mt-6 leading-relaxed">
              Serving the entire San Luis Valley
              <br />
              &amp; surrounding areas, Colorado
            </p>
          </div>

          {/* Right image placeholder */}
          <div className="flex-1 w-full max-w-xl">
            <div className="border-2 border-[#f5c518] aspect-[4/3] bg-[#111] flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 text-[#f5c518] mx-auto mb-3 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-[#555] text-sm uppercase tracking-widest">Equipment Photo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
