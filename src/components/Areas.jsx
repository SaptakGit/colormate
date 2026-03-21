import { useState } from 'react'

const areasData = [
  { 
    id: 'behala', 
    name: 'Behala', 
    emoji: '🏘️', 
    bg: 'from-[#fde8d8] to-[#e8a87c]', 
    badge: 'Most Projects', 
    tagline: "South Kolkata's largest residential zone", 
    shortDesc: 'Mix of ageing multi-storey buildings and new housing. Waterproofing and exterior repaints are the top need.', 
    stats: [{ n: '320+', l: 'Projects done' }, { n: '4.9★', l: 'Rating' }, { n: '48hr', l: 'Site visit' }], 
    services: ['Interior Painting', 'Exterior Painting', 'Waterproofing', 'Texture Finish'], 
    nearby: ['Parnasree', 'Tollygunge', 'Joka'], 
    body: '<p>Behala is one of our most active service areas — a mix of 1970s–1990s multi-storey buildings, newer housing societies and independent homes, each with different painting needs.</p><h2>What Behala homes typically need</h2><p>Older buildings in Behala tend to have external wall dampness from Kolkata\'s monsoon seasons and interior paint that has lost its bond to the underlying plaster. We see a lot of peeling on western-facing walls and salt efflorescence along ground-floor exteriors.</p><p>For newer housing societies and apartments in areas like Sakherbazar and Parnasree, the demand is quite different — texture finishes, premium interior emulsions and feature walls are the most frequent requests.</p><div class="bg-rust/5 border-l-4 border-rust rounded-r-xl p-5 my-6 text-sm text-ink leading-relaxed">Most requested in Behala: Exterior repainting with waterproof topcoat + interior full repaint. Buildings in the 15–25 year age bracket benefit from both done simultaneously.</div><h2>Our work in Behala</h2><p>Over 320 projects completed in Behala since 2010, ranging from single-room freshups to full society exterior repaints covering 40,000+ sq ft.</p><ul><li>Behala Chowrasta — 3 full society exterior repaints completed 2023–2024</li><li>Parnasree — Multiple 3BHK premium interior projects with texture finishes</li><li>Sakherbazar — Waterproofing + interior repaint combination packages</li></ul>' 
  },
  { 
    id: 'salt-lake', 
    name: 'Salt Lake', 
    emoji: '🏢', 
    bg: 'from-[#dce8f5] to-[#7aabda]', 
    badge: 'High Demand', 
    tagline: 'Planned township, ageing plaster', 
    shortDesc: 'Largely 1980s–90s construction. Rising damp and ageing plaster are widespread. Anti-fungal primers are a must.', 
    stats: [{ n: '280+', l: 'Projects done' }, { n: '4.9★', l: 'Rating' }, { n: '48hr', l: 'Site visit' }], 
    services: ['Exterior Painting', 'Waterproofing', 'Interior Painting', 'Texture Finish'], 
    nearby: ['Ultadanga', 'Lake Town', 'New Town'], 
    body: '<p>Salt Lake (Bidhannagar) was Kolkata\'s first planned township, built predominantly between the late 1970s and 1990s. Most buildings are now 30–45 years old — old enough that original waterproofing has completely failed in most cases.</p><h2>What Salt Lake homes typically need</h2><p>The most common problem we see is rising damp on ground and first-floor apartments, and horizontal damp bands on upper floors caused by leaking terraces. The planned grid layout also means many buildings get strong afternoon sun on west-facing walls, causing accelerated paint degradation on that side.</p><div class="bg-rust/5 border-l-4 border-rust rounded-r-xl p-5 my-6 text-sm text-ink leading-relaxed">Salt Lake tip: If your walls show a consistent damp line at skirting level, that\'s rising damp — not a painting problem. We treat the source first with a damp-proof injection system before painting, otherwise any paint job will fail within 12 months.</div><h2>Our work in Salt Lake</h2><p>We\'ve completed over 280 projects across Sectors I through V, including several full-block exterior repaints for housing cooperatives.</p><ul><li>Sector V tech corridor — Multiple commercial office interior repaints</li><li>Sectors II and III — Residential exterior waterproofing and repaint packages</li><li>Karunamoyee area — Premium interior finishes for renovated apartments</li></ul>' 
  },
  {
    id: 'ballygunge', name: 'Ballygunge', emoji: '🏛️', bg: 'from-[#f0e8f5] to-[#c8a8e0]', badge: 'Premium Area', tagline: 'Heritage homes and upmarket apartments', shortDesc: 'A mix of heritage bungalows and premium apartments. Venetian plaster, luxury finishes and careful heritage restoration.', stats: [{ n: '190+', l: 'Projects done' }, { n: '5.0★', l: 'Rating' }, { n: '24hr', l: 'Site visit' }], services: ['Interior Painting', 'Texture Finish', 'Exterior Painting', 'Waterproofing'], nearby: ['Gariahat', 'Rashbehari', 'Dhakuria'], 
    body: '<p>Ballygunge is one of Kolkata\'s most prestigious neighbourhoods with two very different property types: pre-independence heritage bungalows and modern premium apartment complexes built in the last 15–20 years.</p><h2>Heritage properties</h2><p>Working on heritage bungalows in Ballygunge requires a completely different approach. Lime plaster — common in pre-1950s construction — cannot simply be painted over with modern acrylic emulsions.</p><div class="bg-rust/5 border-l-4 border-rust rounded-r-xl p-5 my-6 text-sm text-ink leading-relaxed">For heritage Ballygunge properties: We always conduct a substrate survey before quoting. Applying modern paint to lime plaster is one of the most common and expensive mistakes in heritage property maintenance.</div><ul><li>Ballygunge Place — Heritage bungalow restoration projects</li><li>Ballygunge Circular Road — Premium apartment texture and Venetian plaster work</li><li>Southern Avenue — Full exterior and interior packages for housing societies</li></ul>'
  },
  {
    id: 'new-town', name: 'New Town', emoji: '🏗️', bg: 'from-[#fde8d8] to-[#f5c9a8]', badge: 'Premium Demand', tagline: "New Kolkata's fastest-growing zone", shortDesc: 'New construction throughout. Premium interior finishes, texture walls and luxury emulsions dominate requests here.', stats: [{ n: '240+', l: 'Projects done' }, { n: '4.9★', l: 'Rating' }, { n: '24hr', l: 'Site visit' }], services: ['Interior Painting', 'Texture Finish', 'Exterior Painting', 'Waterproofing'], nearby: ['Rajarhat', 'Kestopur', 'Teghoria'],
    body: '<p>New Town (Rajarhat) is Kolkata\'s newest major residential and commercial development zone. The property base is almost entirely new construction — apartments built in the last 5–15 years.</p><div class="bg-rust/5 border-l-4 border-rust rounded-r-xl p-5 my-6 text-sm text-ink leading-relaxed">New Town tip: If your apartment is less than 3 years old, check whether the builder-applied plaster has fully cured before painting over it. We test moisture content before every New Town project.</div><ul><li>Action Area I and II — Multiple premium 3BHK and 4BHK interior projects</li><li>Eco Park area — Full texture and premium interior packages</li><li>New Town commercial — Office interior repaints and feature wall installations</li></ul>'
  }
];

const Areas = ({ onNavigate }) => {
  const [selectedArea, setSelectedArea] = useState(null);

  if (selectedArea) {
    const a = areasData.find(x => x.id === selectedArea);
    return (
      <div className="page-anim">
        <button 
          className="flex items-center gap-2 bg-transparent border-none font-body text-[13.5px] font-medium text-warm-gray cursor-pointer px-6 md:px-12 pt-10 transition-colors hover:text-rust"
          onClick={() => setSelectedArea(null)}
        >
          &#8592; All Service Areas
        </button>

        <div className="grid lg:grid-cols-[1fr_320px] gap-16 px-6 md:px-12 pt-9 pb-24 items-start max-w-7xl mx-auto">
          <div>
            <div className={`rounded-2xl h-72 flex items-center justify-center text-7xl mb-7 bg-gradient-to-br ${a.bg}`}>
              {a.emoji}
            </div>
            <div className="text-[11px] tracking-[3px] uppercase text-rust font-medium mb-3">{a.tagline}</div>
            <h1 className="font-display text-3xl md:text-5xl font-black text-ink leading-tight mb-3.5">House Painters in {a.name}, Kolkata</h1>
            <div className="flex flex-wrap gap-4 text-[13px] text-warm-gray mb-9">
              <span className="bg-rust/10 text-rust font-semibold px-3 py-1 rounded-full">{a.badge}</span>
              <span>• {a.stats[0].n} projects completed</span>
              <span>• Free site visit available</span>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-9">
              {a.stats.map(s => (
                <div key={s.l} className="bg-white border border-border rounded-xl p-4 text-center">
                  <div className="font-display text-2xl font-black text-rust">{s.n}</div>
                  <div className="text-[11.5px] text-warm-gray mt-1">{s.l}</div>
                </div>
              ))}
            </div>

            <div className="prose prose-sm max-w-none text-[#3a3028] leading-loose" dangerouslySetInnerHTML={{ __html: a.body }}>
            </div>

            <h2 className="font-display text-xl font-bold text-ink mt-9 mb-4.5">Services available in {a.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {a.services.map(s => {
                const icon = s.includes('Interior') ? '🎨' : s.includes('Exterior') ? '🏠' : s.includes('Waterproofing') ? '💧' : s.includes('Texture') ? '✨' : '🖌️';
                return (
                  <div 
                    key={s} 
                    className="bg-white border border-border rounded-xl p-3.5 px-4 text-[13px] font-medium text-ink cursor-pointer transition-all hover:border-rust hover:text-rust flex items-center gap-2"
                    onClick={() => onNavigate('services')}
                  >
                    {icon} {s}
                  </div>
                );
              })}
            </div>
          </div>

          <aside className="sticky top-24 flex flex-col gap-4.5">
            <div className="bg-rust rounded-2xl p-7 text-center text-white shadow-xl shadow-rust/20">
              <h4 className="font-display text-lg font-bold mb-2">Get a quote in {a.name}</h4>
              <p className="text-[13px] text-white/75 mb-4.5 leading-relaxed">Free site visit within 24 hours. No commitment required.</p>
              <button 
                className="w-full bg-white text-rust border-none font-body text-[13px] font-bold py-3 rounded-lg cursor-pointer shadow-md"
                onClick={() => onNavigate('contact')}
              >
                Book Free Site Visit
              </button>
            </div>
            <div className="bg-white border border-border rounded-2xl p-6">
              <div className="text-[12px] font-semibold tracking-widest uppercase text-warm-gray mb-4">Nearby Areas</div>
              <div className="flex flex-col gap-0">
                {a.nearby.map(n => {
                  const found = areasData.find(x => x.name === n);
                  return (
                    <div 
                      key={n}
                      className="flex items-center justify-between text-[13.5px] cursor-pointer text-ink py-2 border-b border-border last:border-none hover:text-rust"
                      onClick={() => found && setSelectedArea(found.id)}
                    >
                      <span>{n}</span>
                      <span>&rarr;</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </div>
    );
  }

  return (
    <div className="page-anim">
      <section className="pt-20 pb-12 px-6 md:px-12 bg-cream/50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16">
          <div>
            <div className="text-[11px] tracking-[3px] uppercase text-rust font-medium mb-3.5">Service Areas</div>
            <h1 className="font-display text-4xl md:text-6xl font-black text-ink leading-tight mb-5">We paint homes across every corner of Kolkata</h1>
            <p className="text-warm-gray leading-loose max-w-lg mb-8">
              Color Mate serves 8 major areas across Kolkata. Each neighbourhood has its own building types and paint challenges — and we know exactly what each one needs.
            </p>
            <button 
              className="bg-rust text-white border-none font-body text-sm font-medium px-7 py-3 rounded-xl cursor-pointer transition-all hover:bg-rust-light shadow-lg shadow-rust/15"
              onClick={() => onNavigate('contact')}
            >
              Get a Quote in Your Area
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            {areasData.map(a => (
              <div 
                key={a.id}
                className="bg-white border border-border rounded-xl p-4 text-center cursor-pointer transition-all hover:border-rust hover:-translate-y-1"
                onClick={() => setSelectedArea(a.id)}
              >
                <div className="text-2xl mb-1.5">{a.emoji}</div>
                <div className="text-xs font-bold text-ink">{a.name}</div>
                <div className="text-[10px] text-warm-gray mt-0.5">Kolkata</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {areasData.map(a => (
            <div 
              key={a.id} 
              className="bg-white border border-border rounded-[18px] overflow-hidden cursor-pointer transition-all hover:-translate-y-1.5 hover:shadow-2xl hover:border-rust/30 group"
              onClick={() => setSelectedArea(a.id)}
            >
              <div className={`h-32 flex items-center justify-center text-4xl relative bg-linear-to-br ${a.bg}`}>
                {a.emoji}
                <span className="absolute top-2.5 right-2.5 text-[10px] font-bold tracking-widest uppercase py-1 px-2.5 rounded-full bg-rust/10 text-rust">{a.badge}</span>
              </div>
              <div className="p-5 px-6">
                <h3 className="font-display text-lg font-bold text-ink mb-1.5 group-hover:text-rust transition-colors">{a.name}</h3>
                <p className="text-[12.5px] text-warm-gray leading-relaxed mb-4">{a.shortDesc}</p>
                <span className="text-[12.5px] font-bold text-rust">View area &rarr;</span>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto mt-12 bg-rust rounded-3xl p-10 py-12 flex flex-wrap items-center justify-between gap-10">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-black text-white leading-tight mb-1.5">Don't see your area?</h2>
            <p className="text-sm text-white/80">We cover all of Kolkata. Call us and we'll confirm service availability.</p>
          </div>
          <button 
            className="bg-white text-rust border-none font-body text-sm font-semibold px-8 py-3.5 rounded-xl cursor-pointer transition-all hover:bg-cream"
            onClick={() => onNavigate('contact')}
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  )
}

export default Areas
