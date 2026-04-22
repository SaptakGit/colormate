const About = ({ onNavigate }) => {
  return (
    <div className="page-anim">
      {/* Story Section */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div>
            <div className="text-[11px] tracking-[3px] uppercase text-rust font-medium mb-3.5">Our Story</div>
            <h1 className="font-display text-3xl md:text-5xl font-black text-ink leading-tight mb-5">14 years of painting Kolkata beautiful</h1>
            <p className="text-base text-warm-gray leading-loose mb-4.5">
              Color Mate was founded in 2010 by Rajesh Mondal, a certified painter who believed that every home in Kolkata — from a one-room flat in Howrah to a duplex in New Town — deserves a professional, trustworthy painting service.
            </p>
            <p className="text-base text-warm-gray leading-loose mb-9">
              Today we are a team of 35 trained painters, 4 project managers and 2 interior consultants who have completed over 2,400 projects across Kolkata and its suburbs.
            </p>
            <div className="flex gap-9 pt-9 border-t border-border">
              <div>
                <div className="font-display text-3xl font-black text-ink">2,400+</div>
                <div className="text-[12px] text-warm-gray mt-1">Projects completed</div>
              </div>
              <div>
                <div className="font-display text-3xl font-black text-ink">35</div>
                <div className="text-[12px] text-warm-gray mt-1">Team members</div>
              </div>
              <div>
                <div className="font-display text-3xl font-black text-ink">4.9★</div>
                <div className="text-[12px] text-warm-gray mt-1">Google rating</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3.5">
            <div className="rounded-2xl h-52 bg-gradient-to-br from-[#fde8d8] to-[#f5c9a8] flex items-center justify-center text-4xl">🏡</div>
            <div className="rounded-2xl h-52 bg-gradient-to-br from-[#dce8f5] to-[#b8d4ed] flex items-center justify-center text-4xl mt-9">🎨</div>
            <div className="rounded-2xl h-52 bg-gradient-to-br from-[#f0e8f5] to-[#dcc8ec] flex items-center justify-center text-4xl">✨</div>
            <div className="rounded-2xl h-52 bg-gradient-to-br from-[#d8f0e8] to-[#a8dcc8] flex items-center justify-center text-4xl mt-9">💧</div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="pb-24 px-6 md:px-12 bg-white/30 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <div className="text-[11px] tracking-[3px] uppercase text-rust font-medium mb-3.5">Meet the team</div>
              <h2 className="font-display text-4xl md:text-5xl font-black text-ink">People behind every project</h2>
            </div>
            <div className="hidden md:flex gap-3">
              <button 
                onClick={() => document.getElementById('team-scroll').scrollBy({ left: -400, behavior: 'smooth' })}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-white transition-all cursor-pointer"
              >
                ←
              </button>
              <button 
                onClick={() => document.getElementById('team-scroll').scrollBy({ left: 400, behavior: 'smooth' })}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-white transition-all cursor-pointer"
              >
                →
              </button>
            </div>
          </div>
          
          <div 
            id="team-scroll"
            className="flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-8 -mx-6 px-6 md:mx-0 md:px-0"
          >
            {[
              { 
                name: 'Rajesh Mondal', 
                role: 'Founder & Managing Director', 
                quote: '"Painting is not just about colors; it\'s about giving life to a home\'s character."',
                image: '/team/team-rajesh.png'
              },
              { 
                name: 'Ananya Sen', 
                role: 'Head of Interior Consultation', 
                quote: '"Every space tells a story. We help you choose the right palette for it."',
                image: '/team/team-ananya.png'
              },
              { 
                name: 'Dipak Roy', 
                role: 'Senior Project Manager', 
                quote: '"Quality and precision are the foundations of every project we undertake."',
                image: '/team/team-dipak.png'
              },
              { 
                name: 'Meena Ghosh', 
                role: 'Customer Success Manager', 
                quote: '"Our goal is simple: a smile on every client\'s face when they see their home."',
                image: '/team/team-meena.png'
              }
            ].map((m, i) => (
              <div 
                key={i} 
                className="min-w-[320px] md:min-w-[380px] h-[520px] rounded-3xl overflow-hidden relative snap-center group"
              >
                <img 
                  src={m.image} 
                  alt={m.name} 
                  className="absolute inset-0 w-full h-full object-cover team-card-grayscale"
                />
                
                {/* LinkedIn Icon */}
                <div className="absolute top-5 right-5 w-8 h-8 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/30 z-10">
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 team-card-gradient flex flex-col justify-end p-8 text-white">
                  <blockquote className="font-display text-xl md:text-2xl leading-tight mb-8 text-white/90">
                    {m.quote}
                  </blockquote>
                  <div>
                    <h4 className="text-[16px] font-bold tracking-wide">{m.name}</h4>
                    <p className="text-[12px] text-white/60 uppercase tracking-[1.5px] mt-1">{m.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Values Section */}
      <section className="bg-ink py-24 px-6 md:px-12 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-[11px] tracking-[3px] uppercase text-gold font-medium mb-3.5">What drives us</div>
          <h2 className="font-display text-3xl md:text-5xl font-black text-white leading-tight mb-12">Our values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: '🎯', title: 'Precision', desc: 'Every cut-in line, every edge, every corner — done with professional-grade tools and care.' },
              { icon: '🤝', title: 'Honesty', desc: 'Transparent quotes, no hidden charges, no upselling you on things you don\'t need.' },
              { icon: '⏱️', title: 'Punctuality', desc: 'We arrive on time, finish on time. Delays on our end mean real discounts for you.' },
              { icon: '🌿', title: 'Sustainability', desc: 'Low-VOC paints, minimal waste, proper disposal — we care about Kolkata\'s environment.' }
            ].map((v) => (
              <div key={v.title} className="border border-white/10 rounded-2xl p-7 flex flex-col gap-3.5 transition-all hover:bg-white/5">
                <div className="text-2xl">{v.icon}</div>
                <h4 className="text-[14px] font-semibold text-white">{v.title}</h4>
                <p className="text-[13px] text-white/50 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-rust py-16 px-6 md:px-12 flex flex-wrap items-center justify-between gap-10">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-black text-white leading-tight mb-1.5">Ready to get started?</h2>
          <p className="text-sm text-white/80">Free site visit & quote within 24 hours.</p>
        </div>
        <button 
          className="bg-white text-rust border-none font-body text-sm font-semibold px-8 py-3.5 rounded-xl cursor-pointer transition-all hover:bg-cream whitespace-nowrap"
          onClick={() => onNavigate('contact')}
        >
          Book Free Site Visit
        </button>
      </section>
    </div>
  )
}

export default About
