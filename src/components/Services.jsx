import React, { useState, useEffect, useRef } from 'react';
import AdditionalServicesModal from './AdditionalServicesModal'

const Services = ({ onNavigate }) => {
  const [showModal, setShowModal] = useState(false);
  const revealsRef = useRef([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('opacity-100', 'translate-y-0');
          e.target.classList.remove('opacity-0', 'translate-y-6');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });

    revealsRef.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !revealsRef.current.includes(el)) {
      revealsRef.current.push(el);
    }
  };

  const servicesList = [
    {
      id: 'interior',
      title: 'Interior Painting',
      icon: '🎨',
      bg: 'from-[#fde8d8] to-[#f5c9a8]',
      price: 'From Rs12/sq ft',
      desc: 'Transform your living spaces using Asian Paints Royale, Berger Silk and Dulux Velvet Touch. Flawless, lasting finishes on every surface in your Kolkata home.',
      features: [
        'Living rooms, bedrooms, kitchen & bathrooms',
        'Ceiling painting with anti-fungal primer',
        'Feature walls & accent finishes',
        'Putty + primer + 2-coat finish as standard',
        'Furniture masking & post-work cleanup'
      ]
    },
    {
      id: 'exterior',
      title: 'Exterior Painting',
      icon: '🏠',
      bg: 'from-[#dce8f5] to-[#b8d4ed]',
      price: 'From Rs18/sq ft',
      desc: "Kolkata's climate demands tough exterior protection. We use weather-shield and UV-resistant paints to protect your facade from heavy rain and sun damage.",
      features: [
        'Weather-resistant exterior emulsions',
        'Surface prep, crack-filling & sealing',
        'Scaffolding setup for high-rise buildings',
        'Residential & commercial properties',
        '2-year exterior painting warranty'
      ]
    },
    {
      id: 'texture',
      title: 'Texture Finish',
      icon: '✨',
      bg: 'from-[#f0e8f5] to-[#dcc8ec]',
      price: 'From Rs35/sq ft',
      desc: 'Add depth and luxury to your walls with our decorative texture finishes. From rustic sand to modern 3D panels — we create walls that become centerpieces.',
      features: [
        'Sand texture, stucco & rustic plaster',
        'Venetian plaster & marble effect',
        '3D geometric & panel textures',
        'Metallic & shimmer finishes',
        'Feature wall design consultation'
      ]
    },
    {
      id: 'waterproofing',
      title: 'Waterproofing',
      icon: '💧',
      bg: 'from-[#d8f0e8] to-[#a8dcc8]',
      price: 'From Rs45/sq ft',
      desc: "Protect your home from Kolkata's monsoons using Dr. Fixit and BASF systems. Permanently seal terraces, bathrooms, and basements.",
      features: [
        'Terrace & roof waterproofing',
        'Bathroom & wet area treatment',
        'Basement & underground wall sealing',
        'Crack injection & structural repair',
        '5-year material warranty'
      ]
    }
  ];

  const scopeItems = [
    { name: 'Exterior Walls', icon: '🏠' },
    { name: 'Exterior Windows', icon: '🪟' },
    { name: 'Window Grills', icon: '🔒' },
    { name: 'Main Gates', icon: '🚪' },
    { name: 'Passages', icon: '🛤️' },
    { name: 'Outer Boundary', icon: '🧱' },
    { name: 'Inner Boundary', icon: '🏢' },
    { name: 'Common Areas', icon: '🚶' },
    { name: 'Staff Rooms', icon: '🛋️' },
    { name: 'Interior Windows', icon: '🪟' }
  ];

  const processSteps = [
    { num: '01', title: 'Site Inspection & Cleaning', desc: 'Detailed surface assessment followed by thorough dirt and grime removal.' },
    { num: '02', title: 'Surface Preparation', desc: 'Machine sanding and repair of cracks or holes to ensure a level foundation.' },
    { num: '03', title: 'Masking & Protection', desc: 'Furniture, lights, and floors covered with heavy-duty drop cloths for zero-mess.' },
    { num: '04', title: 'Waterproof Basecoat', desc: 'Application of moisture-resistant primers to prevent future damp issues.' },
    { num: '05', title: 'Putty & Fine Sanding', desc: 'Premium wall putty applied for mirror-smooth finish, followed by meticulous sanding.' },
    { num: '06', title: 'Primer Application', desc: 'Seal the surface with high-grade primers to ensure perfect paint adhesion.' },
    { num: '07', title: '3-Coat Quality Finish', desc: 'Selection of top-brand paints applied in multiple coats for rich, even color.' },
    { num: '08', title: 'Final Review & Handover', desc: 'Rigorous 10-point checklist inspection before thorough post-work cleaning.' }
  ];

  const whyUsItems = [
    { title: '15+ Years Expertise', desc: 'All painters are background-verified and trained professionals.', icon: '🏅' },
    { title: 'Lowest Price Guarantee', desc: 'Transparent pricing with zero hidden charges. We beat any genuine quote.', icon: '💰' },
    { title: 'Eco-Friendly & Dustless', desc: 'Low-VOC paints and dustless techniques for a healthier home environment.', icon: '🌿' },
    { title: 'Free Consultation', desc: 'Our experts help you pick perfect color combinations with no commitment.', icon: '🎨' }
  ];

  const checklistItems = [
    'Proper masking of windows & fittings',
    'Wall sanding using machine',
    'Damp treatment & waterproofing',
    'Wall crack repair & filling',
    'First coat of primer',
    '2-coat wall putty application',
    'Wall sanding after putty',
    '2-coat exterior primer',
    '3-coat top paint finish',
    'Masking removal & final cleanup'
  ];

  return (
    <div className="page-anim overflow-x-hidden">
      <AdditionalServicesModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
        onNavigate={onNavigate} 
      />
      {/* ───── HERO SECTION (OPTIMIZED v2) ───── */}
      <section className="relative pt-20 pb-16 md:pb-24 lg:pb-32 overflow-hidden bg-warm/30">
        {/* Decorative background elements that span full width */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 skew-x-[-12deg] translate-x-24 -z-10"></div>
        <div className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="w-full px-8 md:px-16 lg:px-24 xl:px-40 2xl:px-56 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left Content (Text) */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-sand border border-border rounded-full px-4 py-1.5 text-[11px] font-bold text-accent tracking-widest uppercase mb-6 w-fit mx-auto lg:mx-0">
                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                Professional Painting Services
              </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-ink leading-[1.08] mb-6 -tracking-wider">
                Painting<br/>
                <span className="text-accent relative inline-block">
                  Transformed
                  <span className="absolute bottom-2 left-0 right-0 h-2 bg-accent2/30 -z-10 rounded-full"></span>
                </span>
                <br className="hidden lg:block"/> for Kolkata
              </h1>
              <p className="text-muted text-base md:text-lg leading-relaxed max-w-lg mb-10 mx-auto lg:mx-0">
                From luxury apartments to high-rise commercial towers — Color Mate delivers precision painting and weather protection that wows.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-14">
                <button 
                  onClick={() => onNavigate('contact')}
                  className="bg-accent text-white px-9 py-4.5 rounded-xl font-bold text-sm tracking-wide transition-all hover:bg-accent/90 hover:-translate-y-1 shadow-lg shadow-accent/25"
                >
                  Get Free Estimate
                </button>
                <a href="#process" className="inline-flex items-center justify-center px-9 py-4.5 border-2 border-border rounded-xl font-bold text-sm text-ink hover:border-accent hover:text-accent transition-all bg-white/50 backdrop-blur-sm">
                  Our Process
                </a>
              </div>
              <div className="grid grid-cols-3 gap-6 md:gap-12 pt-10 border-t border-border/70 max-w-lg mx-auto lg:mx-0">
                <div>
                  <div className="font-display text-3xl font-black text-ink">1000+</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted font-bold mt-1">Happy Clients</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-black text-ink">15 yrs</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted font-bold mt-1">Experience</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-black text-ink">100%</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted font-bold mt-1">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Right Panel (Integrated Card Inside Banner) */}
            <div className="flex-1 w-full max-w-md xl:max-w-xl relative group">
              {/* Outer Glow / Blur */}
              <div className="absolute -inset-10 bg-accent/10 rounded-[4rem] blur-[80px] group-hover:bg-accent/20 transition-all duration-1000 opacity-60"></div>
              
              <div className="relative bg-ink rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl translate-x-4 lg:translate-x-0">
                <div className="aspect-[4/5] flex flex-col justify-end p-10 lg:p-14 transition-transform duration-700 group-hover:scale-[1.03]">
                  {/* Premium Visuals Inside Card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2a1f10] via-ink to-[#0d0a05]"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[140px] font-display font-black text-white/[0.03] select-none pointer-events-none">CM</div>
                  
                  {/* Rotating Site Visit Badge */}
                  <div className="absolute top-10 right-10 w-24 h-24 bg-accent text-white rounded-full flex flex-col items-center justify-center font-display font-extrabold leading-tight text-center text-[10px] border border-white/20 shadow-2xl z-20 group-hover:rotate-12 transition-transform duration-500">
                    <span className="text-xl block">FREE</span>
                    SITE VISIT
                  </div>

                  {/* Glassmorphic Content Piece */}
                  <div className="relative z-20 bg-white/5 backdrop-blur-2xl border border-white/10 p-8 lg:p-10 rounded-[2.5rem] shadow-inner mb-2 transform transition-all group-hover:translate-y-[-10px]">
                    <h3 className="font-display text-2xl font-bold text-white mb-3">Prime Choice in Kolkata</h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-1">
                      Weather-resistant coatings • Professional crew • Zero mess guarantee • Background verified painters
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Floating Quality Badge (Partly outside the dark card, but inside the banner) */}
              <div className="absolute -bottom-8 -left-10 lg:-left-20 bg-white border border-border p-6 rounded-3xl shadow-2xl z-30 transform -rotate-2 hover:rotate-0 transition-all duration-500 max-w-[220px]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent text-2xl shadow-inner">🛡️</div>
                  <div>
                    <div className="text-[10px] font-bold text-muted uppercase tracking-widest mb-0.5">Warranty</div>
                    <div className="text-[15px] font-black text-ink leading-tight">Up to 10 Years</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── MAIN SERVICES (Existing content) ───── */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-white" id="main-services">
        <div className="max-w-[1440px] mx-auto">
          <div ref={addToRefs} className="opacity-0 translate-y-6 transition-all duration-700 text-center mb-16">
            <div className="text-accent text-[11px] font-bold tracking-[4px] uppercase mb-4">Core Expertise</div>
            <h2 className="font-display text-4xl md:text-5xl font-black text-ink mb-6">Mastery Across Every Surface</h2>
            <p className="text-muted max-w-2xl mx-auto leading-loose">
              We bring specialized skills, certified materials and a meticulous eye for detail to every project we undertake.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {servicesList.map((svc, idx) => (
              <div 
                key={svc.title} 
                ref={addToRefs}
                style={{ transitionDelay: `${idx * 100}ms` }}
                className="opacity-0 translate-y-6 transition-all duration-700 bg-warm/20 border border-border rounded-[2.5rem] overflow-hidden group hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-1"
              >
                <div className={`h-48 flex items-center justify-center text-7xl bg-gradient-to-br ${svc.bg} transition-transform duration-700 group-hover:scale-105`}>
                  {svc.icon}
                </div>
                <div className="p-10 lg:p-12">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="font-display text-3xl font-bold text-ink">{svc.title}</h3>
                    <div className="bg-accent/10 text-accent text-[11px] font-bold px-4 py-1.5 rounded-full">
                      {svc.price}
                    </div>
                  </div>
                  <p className="text-muted text-sm leading-loose mb-8">{svc.desc}</p>
                  <ul className="space-y-3 mb-10">
                    {svc.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-3 text-ink/80 text-[13px] font-medium">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0"></span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => onNavigate('service-details', svc.id)}
                    className="w-full py-4 border-2 border-border bg-white rounded-2xl font-bold text-sm text-ink group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-300"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── SCOPE OF WORK (NEW) ───── */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-cream/50" id="scope">
        <div className="max-w-[1440px] mx-auto">
          <div ref={addToRefs} className="opacity-0 translate-y-6 transition-all duration-700 text-center md:text-left mb-12">
            <div className="text-accent text-[11px] font-bold tracking-[4px] uppercase mb-4">Detailed Scope</div>
            <h2 className="font-display text-4xl md:text-5xl font-black text-ink mb-2">Everything Covered.</h2>
            <p className="text-muted text-lg">We handle every corner of your property with professional care.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {scopeItems.map((item, idx) => (
              <div 
                key={item.name}
                ref={addToRefs}
                style={{ transitionDelay: `${idx * 50}ms` }}
                className="opacity-0 translate-y-6 transition-all duration-700 bg-white border border-border p-6 rounded-2xl flex flex-col items-center gap-4 hover:border-accent hover:shadow-xl hover:shadow-accent/5 transition-all text-center"
              >
                <div className="w-12 h-12 bg-warm rounded-xl flex items-center justify-center text-xl">{item.icon}</div>
                <div className="text-[13px] font-bold text-ink">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── PROCESS SECTION (NEW) ───── */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-ink text-white relative overflow-hidden" id="process">
        <div className="absolute top-[-10%] right-[-5%] font-display font-black text-white/[0.02] text-[25vw] pointer-events-none select-none">HOW</div>
        
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div ref={addToRefs} className="opacity-0 translate-y-6 transition-all duration-700 mb-16">
            <div className="text-accent2 text-[11px] font-bold tracking-[4px] uppercase mb-4">Engineered Process</div>
            <h2 className="font-display text-4xl md:text-5xl font-black text-white mb-6">Proven 8-Step Lifecycle</h2>
            <p className="text-white/40 max-w-xl leading-relaxed">
              Our structured approach ensures longevity and a flawless finish, turning chaos into a systematic transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div 
                key={step.num}
                ref={addToRefs}
                style={{ transitionDelay: `${idx * 100}ms` }}
                className="opacity-0 translate-y-6 transition-all duration-700 bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-accent/10 hover:border-accent/30 transition-all group"
              >
                <div className="font-display text-5xl font-black text-white/10 group-hover:text-accent/20 transition-all mb-4">{step.num}</div>
                <h4 className="font-display text-lg font-bold text-white mb-3">{step.title}</h4>
                <p className="text-white/40 text-[13px] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── WHY CHOOSE US (NEW) ───── */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-white overflow-hidden" id="why">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div ref={addToRefs} className="opacity-0 translate-y-6 transition-all duration-700 mb-10">
              <div className="text-accent text-[11px] font-bold tracking-[4px] uppercase mb-4">The ColorMate Edge</div>
              <h2 className="font-display text-4xl md:text-5xl font-black text-ink mb-6">Why Kolkata Trusts Us Over Anyone Else</h2>
            </div>
            
            <div className="grid gap-6">
              {whyUsItems.map((item, idx) => (
                <div 
                  key={item.title}
                  ref={addToRefs}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                  className="opacity-0 translate-y-6 transition-all duration-700 flex gap-6 p-6 bg-warm/20 rounded-3xl border border-transparent hover:border-accent/20 hover:bg-white hover:shadow-xl hover:shadow-accent/5 transition-all"
                >
                  <div className="w-14 h-14 bg-sand rounded-2xl flex shrink-0 items-center justify-center text-2xl shadow-inner">{item.icon}</div>
                  <div>
                    <h4 className="font-display text-lg font-bold text-ink mb-1">{item.title}</h4>
                    <p className="text-muted text-[13px] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div ref={addToRefs} className="opacity-0 translate-y-6 transition-all duration-700 relative">
            <div className="bg-ink p-12 lg:p-16 rounded-[3rem] text-white relative z-10 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <h3 className="font-display text-3xl font-black mb-6 leading-tight">100% Satisfaction or we fix it free.</h3>
              <p className="text-white/50 leading-relaxed mb-10">
                We stand behind every project. If you're not happy with the finish, we'll make it right. No arguments, no extra charge.
              </p>
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl italic relative">
                <span className="absolute -top-6 -left-2 text-6xl text-accent font-serif opacity-40">"</span>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  "The team was punctual, professional, and the finish looks absolutely stunning. Best decision we made for our home renovation."
                </p>
                <div className="text-accent2 text-xs font-bold not-italic">— Happy Customer, New Town, Kolkata</div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-accent -z-10 rounded-[3rem] opacity-10"></div>
          </div>
        </div>
      </section>

      {/* ───── STANDARD CHECKLIST (NEW) ───── */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-sand/30" id="checklist">
        <div className="max-w-[1440px] mx-auto">
          <div ref={addToRefs} className="opacity-0 translate-y-6 transition-all duration-700 text-center mb-16">
            <div className="text-accent text-[11px] font-bold tracking-[4px] uppercase mb-4">Quality Control</div>
            <h2 className="font-display text-4xl md:text-5xl font-black text-ink mb-6">10-Point Standard Checklist</h2>
            <p className="text-muted max-w-xl mx-auto">Every project follows this exact protocol — no shortcuts, no compromises.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {checklistItems.map((item, idx) => (
              <div 
                key={item}
                ref={addToRefs}
                style={{ transitionDelay: `${idx * 50}ms` }}
                className="opacity-0 translate-y-6 transition-all duration-700 bg-white border border-border p-5 rounded-2xl flex items-center gap-5 group hover:border-accent transition-all"
              >
                <span className="font-display text-accent font-black text-xs min-w-[30px]">{String(idx + 1).padStart(2, '0')}</span>
                <span className="text-ink font-bold text-[13px]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── BRANDS SECTION (NEW) ───── */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-white" id="brands">
        <div className="max-w-[1440px] mx-auto">
          <div ref={addToRefs} className="opacity-0 translate-y-6 transition-all duration-700 text-center mb-16">
            <div className="text-accent text-[11px] font-bold tracking-[4px] uppercase mb-4">Premium Materials</div>
            <h2 className="font-display text-4xl md:text-5xl font-black text-ink mb-6">The Brands Kolkata Trusts</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center justify-center p-8 bg-warm/10 border-2 border-dashed border-border rounded-3xl group hover:border-accent transition-all">
              <span className="font-display text-xl md:text-2xl font-black text-ink group-hover:text-accent transition-all">Asian Paints</span>
              <span className="text-[10px] text-muted font-bold uppercase tracking-widest mt-2">Royale • Apex</span>
            </div>
            <div className="flex flex-col items-center justify-center p-8 bg-warm/10 border-2 border-dashed border-border rounded-3xl group hover:border-accent transition-all">
              <span className="font-display text-xl md:text-2xl font-black text-ink group-hover:text-accent transition-all">Berger</span>
              <span className="text-[10px] text-muted font-bold uppercase tracking-widest mt-2">Silk • Weathercoat</span>
            </div>
            <div className="flex flex-col items-center justify-center p-8 bg-warm/10 border-2 border-dashed border-border rounded-3xl group hover:border-accent transition-all">
              <span className="font-display text-xl md:text-2xl font-black text-ink group-hover:text-accent transition-all">Dulux</span>
              <span className="text-[10px] text-muted font-bold uppercase tracking-widest mt-2">Velvet • Weathershield</span>
            </div>
            <div className="flex flex-col items-center justify-center p-8 bg-warm/10 border-2 border-dashed border-border rounded-3xl group hover:border-accent transition-all">
              <span className="font-display text-xl md:text-2xl font-black text-ink group-hover:text-accent transition-all">Nerolac</span>
              <span className="text-[10px] text-muted font-bold uppercase tracking-widest mt-2">Excel • Impressions</span>
            </div>
          </div>
        </div>
      </section>

      {/* ───── FINAL CTA ───── */}
      <section className="py-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="bg-accent rounded-[3.5rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-3xl shadow-accent/20">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent2/10 rounded-full blur-3xl -ml-40 -mb-40"></div>
            
            <h2 className="font-display text-4xl md:text-6xl font-black mb-6 leading-tight relative z-10">
              Ready to transform<br/>your building?
            </h2>
            <p className="text-white/70 text-lg md:text-xl mb-12 max-w-xl mx-auto relative z-10 leading-relaxed">
              Free site visit • Free estimate • No obligation.<br/>We serve all of Kolkata.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 relative z-10">
              <button 
                onClick={() => onNavigate('contact')}
                className="w-full md:w-auto bg-white text-accent px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl hover:scale-105 transition-all"
              >
                📞 Book Free Assessment
              </button>
              <a 
                href="https://wa.me/919830000000" 
                target="_blank" 
                className="w-full md:w-auto border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

