import { useState } from 'react'
import Calculator from './Calculator'

const Home = ({ onNavigate }) => {
  const palette = [
    { name: 'Terracotta Bliss', hex: '#C0440A' },
    { name: 'Kolkata Ivory', hex: '#F5EDD6' },
    { name: 'Monsoon Sage', hex: '#6B8C6E' },
    { name: 'Royal Indigo', hex: '#3D4F8C' },
    { name: 'Pearl Mist', hex: '#E0DDD8' },
    { name: 'Mustard Glow', hex: '#D4A017' },
    { name: 'Teal Dream', hex: '#2E8B8B' },
    { name: 'Dusty Rose', hex: '#C09090' },
    { name: 'Deep Charcoal', hex: '#3D3830' },
    { name: 'Mint Fresh', hex: '#8BCFB0' }
  ];

  const [currentColor, setCurrentColor] = useState(palette[0]);

  return (
    <div className="page-anim">
      {/* Hero Section */}
      <section className="min-h-[90vh] grid md:grid-cols-2 items-center px-6 md:px-12 gap-16 relative overflow-hidden py-16 md:py-0">
        <div className="absolute -right-24 -top-24 w-[540px] h-[540px] bg-radial-[circle] from-rust/10 to-transparent pointer-events-none hidden md:block"></div>
        
        <div>
          <div className="text-[12px] font-medium tracking-[2.5px] uppercase text-rust mb-4.5">Kolkata's Most Trusted Painters Since 2010</div>
          <h1 className="font-display text-[clamp(42px,5.5vw,72px)] font-black leading-[1.02] text-ink mb-5.5">
            Paint your home with <em className="not-italic text-rust">confidence</em>
          </h1>
          <p className="text-base leading-loose text-warm-gray max-w-md mb-8.5">
            Professional interior, exterior, texture and waterproofing services for Kolkata homes and businesses. Certified painters, premium materials, milestone payments.
          </p>
          <div className="flex flex-wrap gap-3 mb-11">
            <button 
              className="bg-rust text-white border-none font-body text-sm font-medium px-7 py-3 rounded-xl cursor-pointer transition-all hover:bg-rust-light hover:-translate-y-0.5"
              onClick={() => onNavigate('contact')}
            >
              Get Free Quote
            </button>
            <button 
              className="bg-transparent text-ink border-[1.5px] border-border font-body text-sm font-medium px-7 py-3 rounded-xl cursor-pointer transition-all hover:border-rust hover:text-rust"
              onClick={() => onNavigate('contact')}
            >
              Book Site Visit
            </button>
          </div>
          <div className="flex gap-9 pt-9 border-t border-border">
            <div>
              <div className="font-display text-3xl font-black text-ink">2,400+</div>
              <div className="text-[12px] text-warm-gray mt-1">Projects completed</div>
            </div>
            <div>
              <div className="font-display text-3xl font-black text-ink">14</div>
              <div className="text-[12px] text-warm-gray mt-1">Years experience</div>
            </div>
            <div>
              <div className="font-display text-3xl font-black text-ink">4.9★</div>
              <div className="text-[12px] text-warm-gray mt-1">Google rating</div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center">
          <div className="bg-white rounded-[22px] border border-border p-8 w-full max-w-[390px] shadow-[0_24px_64px_rgba(0,0,0,0.09)]">
            <div className="grid grid-cols-5 gap-2 mb-5">
              {palette.map((color) => (
                <div 
                  key={color.name}
                  className="h-12 rounded-lg cursor-pointer transition-transform hover:scale-110 border border-black/5"
                  style={{ backgroundColor: color.hex }}
                  onClick={() => setCurrentColor(color)}
                ></div>
              ))}
            </div>
            <div className="rounded-2xl h-36 relative overflow-hidden mb-3.5 bg-linear-to-br from-[#f5ede6] to-[#e8d8cc]">
              <div 
                className="absolute inset-0 transition-colors duration-500 opacity-40"
                style={{ backgroundColor: currentColor.hex }}
              ></div>
              <div className="absolute bottom-3 right-4 text-3xl opacity-60">🏠</div>
            </div>
            <div className="text-[13px] font-semibold text-ink text-center">{currentColor.name}</div>
            <div className="text-[11.5px] text-warm-gray text-center mt-1">Preview paint on your wall</div>
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

      {/* Calculator Section */}
      <Calculator />

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
