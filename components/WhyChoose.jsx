const reasons = [
  {
    num: '01',
    title: 'Reliable, well-maintained equipment',
    desc: 'Serviced and inspected between every single rental.',
  },
  {
    num: '02',
    title: 'Competitive rates',
    desc: 'Fair daily and weekly pricing with no surprises.',
  },
  {
    num: '03',
    title: 'Flexible rental terms',
    desc: 'Daily, weekend, and weekly options to fit your schedule.',
  },
  {
    num: '04',
    title: 'Delivery available',
    desc: "We'll bring it straight to your job site across the valley.",
  },
  {
    num: '05',
    title: 'Locally owned & operated',
    desc: 'Your neighbors, right here in the San Luis Valley.',
  },
]

export default function WhyChoose() {
  return (
    <section id="why-5d" className="bg-[#f5c518] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left */}
          <div className="flex-1 max-w-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-black" />
              <span className="text-black text-xs font-bold tracking-widest uppercase">
                The 5D Difference
              </span>
            </div>

            <h2 className="text-black font-extrabold uppercase leading-none tracking-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Why Choose 5D
            </h2>

            <p className="text-black text-base leading-relaxed mb-4">
              When the clock is running on a job site, you need equipment that shows up ready to
              work. 5D Enterprises runs a fleet of reliable, well-maintained machines — from mini
              excavators and skid loaders to trailers and lifts — so you spend your day getting the
              job done, not fighting your gear.
            </p>

            <p className="text-black text-base leading-relaxed mb-8">
              We&apos;re locally owned and operated right here in the San Luis Valley, with
              competitive rates and flexible daily, weekend, and weekly rentals. Need it on site?
              Delivery is available across the valley and surrounding areas — just call or text and
              we&apos;ll get you set up.
            </p>

            <a
              href="tel:7198501498"
              className="inline-flex items-center gap-3 bg-black text-white font-extrabold uppercase tracking-wider text-sm px-6 py-4 hover:bg-[#1a1a1a] transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call or Text: 719-850-1498
            </a>
          </div>

          {/* Right — numbered list */}
          <div className="flex-1 flex flex-col gap-0 border-t border-black/20">
            {reasons.map((item, i) => (
              <div
                key={item.num}
                className="flex items-start gap-6 py-5 border-b border-black/20"
              >
                <span className="text-black/40 font-extrabold text-2xl leading-none w-8 shrink-0">
                  {item.num}
                </span>
                <div>
                  <p className="text-black font-bold text-base">{item.title}</p>
                  <p className="text-black/70 text-sm mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
