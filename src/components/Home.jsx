import { useState, useEffect } from 'react'
import AdditionalServicesModal from './AdditionalServicesModal'

const Home = ({ onNavigate }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1200); // Trigger every time the page is opened
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="page-anim min-h-screen">
      <AdditionalServicesModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
        onNavigate={onNavigate} 
      />
      {/* Hero Section - Modern Color-Block Architecture (Berger & Orientbell Style) */}
      <section className="min-h-[90vh] flex flex-col md:flex-row items-stretch relative overflow-hidden bg-white">
        
        {/* Zone 1: Navy Anchor (Left) - 45% Width */}
        <div className="md:w-[45%] bg-[#0A034F] relative px-6 md:px-12 lg:px-20 py-24 flex flex-col justify-center text-white overflow-hidden">
          {/* Subtle Geometric Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-white/5 skew-x-[-15deg] -translate-x-1/2 pointer-events-none border-r border-white/10"></div>
          
          <div className="relative z-10">
            <div className="text-[11px] font-bold tracking-[3.5px] uppercase text-[#FFD400] mb-6 drop-shadow-sm">
              Kolkata's Most Trusted Painters
            </div>
            <h1 className="font-display text-[clamp(42px,5.5vw,76px)] font-black leading-[0.98] mb-6 -tracking-wider">
              Paint your home with <br/>
              <span className="text-[#FFD400] italic underline decoration-white/20 underline-offset-8">confidence.</span>
            </h1>
            <p className="text-lg leading-relaxed text-white/70 max-w-sm mb-12 font-medium">
              Professional interior, exterior, texture and waterproofing. Experience the gold standard of painting with Kolkata's certified masters.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-12 border-t border-white/10">
              <div>
                <div className="font-display text-4xl font-black text-[#FFD400] leading-none">2.4k+</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40 mt-1.5 font-bold">Projects Done</div>
              </div>
              <div className="mx-4 md:mx-8 h-10 w-[1px] bg-white/10"></div>
              <div>
                <div className="font-display text-4xl font-black text-[#FFD400] leading-none">4.9★</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40 mt-1.5 font-bold">Google Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Zone 2: Neutral Base (Center) - Dynamic Width */}
        <div className="flex-1 bg-white relative px-6 md:px-12 py-24 flex items-center justify-center">
          
          <div className="relative z-10 w-full max-w-lg">
            <div className="bg-white rounded-[40px] border border-gray-100 p-10 md:p-12 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)]">
              <div className="mb-10 border-l-8 border-[#FFD400] pl-6">
                <h3 className="font-display text-3xl font-black text-[#0A034F] mb-1">Request a Quote</h3>
                <p className="text-sm font-semibold text-warm-gray">Professional estimate within 24 hours.</p>
              </div>
              
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Form submitted! We will contact you soon.'); }}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-[#0A034F]/40 tracking-wider ml-1">Name</label>
                    <input required type="text" placeholder="John Doe" className="w-full bg-[#0A034F]/5 border border-transparent rounded-2xl px-5 py-4 text-sm font-bold text-[#0A034F] focus:bg-white focus:border-[#FFD400] outline-none transition-all placeholder:text-[#0A034F]/20" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-[#0A034F]/40 tracking-wider ml-1">Email</label>
                    <input required type="email" placeholder="john@email.com" className="w-full bg-[#0A034F]/5 border border-transparent rounded-2xl px-5 py-4 text-sm font-bold text-[#0A034F] focus:bg-white focus:border-[#FFD400] outline-none transition-all placeholder:text-[#0A034F]/20" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-[#0A034F]/40 tracking-wider ml-1">Phone</label>
                    <input required type="tel" placeholder="+91 98..." className="w-full bg-[#0A034F]/5 border border-transparent rounded-2xl px-5 py-4 text-sm font-bold text-[#0A034F] focus:bg-white focus:border-[#FFD400] outline-none transition-all placeholder:text-[#0A034F]/20" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-[#0A034F]/40 tracking-wider ml-1">Place</label>
                    <input required type="text" placeholder="Salt Lake" className="w-full bg-[#0A034F]/5 border border-transparent rounded-2xl px-5 py-4 text-sm font-bold text-[#0A034F] focus:bg-white focus:border-[#FFD400] outline-none transition-all placeholder:text-[#0A034F]/20" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-[#0A034F]/40 tracking-wider ml-1">Message</label>
                  <textarea required rows="2" placeholder="Your project details..." className="w-full bg-[#0A034F]/5 border border-transparent rounded-2xl px-5 py-4 text-sm font-bold text-[#0A034F] focus:bg-white focus:border-[#FFD400] outline-none transition-all placeholder:text-[#0A034F]/20 resize-none"></textarea>
                </div>

                <button type="submit" className="w-full bg-[#0A034F] text-white font-black py-5 rounded-2xl shadow-2xl shadow-[#0A034F]/20 hover:bg-[#1A05A2] hover:scale-[1.02] transform transition-all mt-6 text-[12px] uppercase tracking-widest">
                  Secure Free Quote
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Zone 3: Yellow Feature (Right Strip) - Fixed Width */}
        <div className="md:w-[15%] bg-[#FFD400] relative hidden md:flex flex-col items-center justify-center p-8 lg:p-12 overflow-hidden">
          {/* Vertical Decor Stripes (Orientbell Style) */}
          <div className="absolute inset-y-0 left-4 w-1 bg-white/20"></div>
          <div className="absolute inset-y-0 right-4 w-1 bg-white/20"></div>
          
          {/* Floating Action CTA */}
          <div 
            onClick={() => onNavigate('calculator')}
            className="cursor-pointer rotate-90 whitespace-nowrap font-display text-4xl font-black text-[#0A034F] tracking-tighter opacity-20 transform -translate-x-12"
          >
            PAINT CALCULATOR
          </div>
        </div>
      </section>

      {/* Services Summary Section */}
      <section className="bg-white py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-[11px] tracking-[3px] uppercase text-rust font-medium mb-3.5">What we do</div>
          <h2 className="font-display text-3xl md:text-5xl font-black text-ink leading-tight mb-4">Every painting service, done right</h2>
          <p className="text-warm-gray leading-loose max-w-lg mb-12">
            From a single bedroom to a full residential tower — we bring expertise, certified painters and premium materials to every project.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4.5 mt-12">
            {[
              { icon: '🎨', title: 'Interior Painting', desc: 'Transform your living spaces with Asian Paints Royale, Berger Silk and Dulux Velvet Touch.' },
              { icon: '🏠', title: 'Exterior Painting', desc: 'Weather-shield and UV-resistant paints to protect your facade from heavy rain and sun damage.' },
              { icon: '✨', title: 'Texture Finish', desc: 'Sand texture, Venetian plaster, 3D geometric and metallic finishes for walls that stand out.' },
              { icon: '💧', title: 'Waterproofing', desc: 'Permanently seal terraces, bathrooms and walls using Dr. Fixit and BASF systems.' }
            ].map((svc) => (
              <div key={svc.title} className="bg-white border border-border rounded-[18px] p-7 cursor-pointer transition-all hover:border-rust/35 hover:-translate-y-1.5 hover:shadow-xl group relative overflow-hidden">
                <div className="w-11.5 h-11.5 rounded-xl bg-rust/10 flex items-center justify-center text-2xl mb-4.5">{svc.icon}</div>
                <h3 className="font-display text-lg font-bold text-ink mb-2 group-hover:text-rust transition-colors">{svc.title}</h3>
                <p className="text-[13px] text-warm-gray leading-relaxed">{svc.desc}</p>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-rust scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-cream py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <div className="text-[11px] tracking-[3px] uppercase text-rust font-medium mb-3.5">How it works</div>
          <h2 className="font-display text-3xl md:text-5xl font-black text-ink leading-tight mb-4">Simple, transparent process</h2>
          <p className="text-warm-gray leading-loose md:max-w-lg mb-12 mx-auto md:mx-0">
            No surprises, no hidden costs. Just professional painting done right, every time.
          </p>
          <div className="grid md:grid-cols-3 gap-5.5 mt-12">
            {[
              { num: '01', title: 'Free site visit', desc: 'Our project manager visits your home, assesses wall conditions and measures the area — completely free.' },
              { num: '02', title: 'Detailed quote within 24h', desc: 'You receive an itemized quote with material costs, labour, timeline and milestone payment schedule.' },
              { num: '03', title: 'We get to work', desc: 'Our trained painters arrive on time, protect your furniture, and deliver a flawless finish on schedule.' }
            ].map((step) => (
              <div key={step.title} className="bg-white p-7.5 rounded-2xl border border-border text-left">
                <div className="font-display text-5xl font-black text-rust/10 leading-none mb-2.5">{step.num}</div>
                <h4 className="text-base font-semibold text-ink mb-2">{step.title}</h4>
                <p className="text-[13px] text-warm-gray leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator CTA Section */}
      <section className="bg-sand/30 py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 border border-border bg-white p-12 md:p-20 rounded-[3rem] shadow-2xl shadow-accent/5">
          <div className="max-w-xl text-center md:text-left">
            <div className="text-accent text-[11px] font-bold tracking-[4px] uppercase mb-4">Cost Estimator</div>
            <h2 className="font-display text-3xl md:text-5xl font-black text-ink leading-tight mb-6">Want to know exactly what your project will cost?</h2>
            <p className="text-warm-gray leading-loose mb-0">
              Our professional painting cost calculator gives you a detailed breakdown based on carpet area, paint quality, and surface condition.
            </p>
          </div>
          <button 
            onClick={() => onNavigate('calculator')}
            className="bg-accent text-white font-bold px-10 py-5 rounded-2xl shadow-xl shadow-accent/20 hover:bg-accent-light hover:scale-105 transition-all flex items-center gap-3 whitespace-nowrap"
          >
            Open Calculator
            <span className="text-xl">📊</span>
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-ink py-24 px-6 md:px-12 whitespace-normal overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-[11px] tracking-[3px] uppercase text-gold font-medium mb-3.5">What clients say</div>
          <h2 className="font-display text-3xl md:text-5xl font-black text-white leading-tight mb-12">Trusted by thousands of Kolkata families</h2>
          <div className="grid md:grid-cols-3 gap-5 mt-12">
            {[
              { author: 'Priya Chatterjee', area: 'Behala, Kolkata', text: '"Color Mate painted our entire 3BHK in South Kolkata in just 5 days. The texture finish on the living room wall is stunning. Best painters I\'ve hired."' },
              { author: 'Arjun Bose', area: 'Ballygunge, Kolkata', text: '"Very professional. They covered all my furniture, cleaned up after and the finish looks amazing. The milestone payment gave me real confidence."' },
              { author: 'Sunil Kumar Das', area: 'Salt Lake, Kolkata', text: '"The exterior painting + waterproofing combo was perfect for our building. Zero leakage this entire monsoon season. The whole colony is impressed."' }
            ].map((t) => (
              <div key={t.author} className="bg-white/5 border border-white/10 rounded-[18px] p-7.5">
                <div className="text-gold text-base mb-3.5">★★★★★</div>
                <p className="text-sm text-white/80 leading-loose mb-4.5 italic">{t.text}</p>
                <div className="text-[13px] text-white font-medium">{t.author}</div>
                <div className="text-[12px] text-white/40 mt-1">{t.area}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-rust py-16 px-6 md:px-12 flex flex-wrap items-center justify-between gap-10">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-black text-white leading-tight mb-1.5">Ready to transform your home?</h2>
          <p className="text-sm text-white/80">Free site visit & quote within 24 hours. No commitment required.</p>
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

export default Home
