import React, { useState, useEffect } from 'react';

const ServiceDetails = ({ activeTab: initialTab, onNavigate }) => {
  const [activeTab, setActiveTab] = useState(initialTab || 'interior');

  useEffect(() => {
    setActiveTab(initialTab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [initialTab]);

  const showService = (id) => {
    setActiveTab(id);
    const tabsElement = document.querySelector('.service-tabs-wrap');
    if (tabsElement) {
      window.scrollTo({ top: tabsElement.offsetTop - 80, behavior: 'smooth' });
    }
  };

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const tabs = [
    { id: 'interior', icon: '🎨', label: 'Interior Painting' },
    { id: 'exterior', icon: '🏠', label: 'Exterior Painting' },
    { id: 'texture', icon: '✨', label: 'Texture Finish' },
    { id: 'waterproofing', icon: '💧', label: 'Waterproofing' },
  ];

  return (
    <div className="page-anim min-h-screen bg-[#f5f0e8] text-[#1a1a2e]">
      {/* ─── HERO ─── */}
      <section className="mt-18 py-24 px-8 md:px-12 lg:px-24 bg-[#0f1f4b] relative overflow-hidden">
        <div className="absolute top-[-60px] right-[-60px] w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute right-12 bottom-[-20px] font-serif text-[9rem] font-black text-white/[0.04] leading-none pointer-events-none tracking-tighter hidden lg:block uppercase">
          Services
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="inline-block font-mono text-[11px] tracking-[2px] text-[#f5c842] uppercase mb-6 px-4 py-1.5 border border-[#f5c842]/30 rounded-full">
            ⬡ Professional Painting Services
          </div>
          <h1 className="font-serif text-[clamp(2.4rem,5vw,4rem)] text-white leading-[1.1] max-w-2xl mb-6">
            Every surface. Every finish.<br /><span className="text-[#f5c842] italic">Done right.</span>
          </h1>
          <p className="text-white/65 text-lg leading-relaxed max-w-xl">
            From a single bedroom to full residential towers — ColorMate brings certified painters, premium materials, and a 10-point quality checklist to every project in Kolkata.
          </p>
          
          <div className="flex flex-wrap gap-10 mt-12 pt-10 border-t border-white/10">
            <div className="hero-stat">
              <div className="font-serif text-3xl text-[#f5c842] font-bold">2,400+</div>
              <div className="text-[11px] text-white/50 uppercase tracking-widest mt-1">Projects Done</div>
            </div>
            <div className="hero-stat">
              <div className="font-serif text-3xl text-[#f5c842] font-bold">4.9★</div>
              <div className="text-[11px] text-white/50 uppercase tracking-widest mt-1">Google Rating</div>
            </div>
            <div className="hero-stat">
              <div className="font-serif text-3xl text-[#f5c842] font-bold">14 Yrs</div>
              <div className="text-[11px] text-white/50 uppercase tracking-widest mt-1">In Kolkata</div>
            </div>
            <div className="hero-stat">
              <div className="font-serif text-3xl text-[#f5c842] font-bold">100%</div>
              <div className="text-[11px] text-white/50 uppercase tracking-widest mt-1">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STICKY TABS ─── */}
      <div className="service-tabs-wrap sticky top-18 z-[90] bg-white border-b border-[#e0d9ce] shadow-lg shadow-black/5">
        <div className="max-w-7xl mx-auto px-8 md:px-12 flex overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => showService(tab.id)}
              className={`flex items-center gap-2.5 px-8 py-5 text-sm font-bold whitespace-nowrap transition-all border-b-3 ${
                activeTab === tab.id 
                ? 'text-[#0f1f4b] border-[#e05a2b]' 
                : 'text-[#8888aa] border-transparent hover:text-[#0f1f4b]'
              }`}
            >
              <span className="text-lg">{tab.icon}</span> {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 md:px-12 py-20 pb-0">
        
        {/* ═══════════════════════════════════════════
             CONTENT SECTIONS
        ═══════════════════════════════════════════ */}
        
        {/* INTERIOR PAINTING */}
        {activeTab === 'interior' && (
          <div className="animate-fade-up">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#f5c842]/15 text-[#a08000] text-[11px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
                  🎨 Interior Painting
                </div>
                <h2 className="font-serif text-4xl lg:text-5xl text-[#0f1f4b] leading-tight mb-6">
                  Walls that make your <br /><span className="italic">home feel alive</span>
                </h2>
                <p className="text-[#4a4a6a] leading-relaxed text-lg mb-8">
                  We transform living rooms, bedrooms, kitchens and bathrooms with precision interior painting. Our certified painters use anti-fungal primers, 3-coat application systems, and low-VOC finishes — the kind of detail your family deserves.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button onClick={() => onNavigate('contact')} className="bg-[#e05a2b] text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-[#e05a2b]/20 hover:bg-[#c44e22] hover:-translate-y-1 transition-all">
                    📞 Book Free Site Visit
                  </button>
                  <button onClick={() => onNavigate('gallery')} className="text-[#0f1f4b] font-bold border-b-2 border-[#0f1f4b] pb-1 hover:text-[#e05a2b] hover:border-[#e05a2b] transition-all">
                    See Gallery →
                  </button>
                </div>
              </div>
              <div className="bg-[#0f1f4b] rounded-[30px] p-10 lg:p-14 text-white relative overflow-hidden min-h-[400px] flex flex-col justify-end">
                <div className="absolute top-10 right-10 text-8xl opacity-20">🎨</div>
                <div className="text-[11px] font-mono tracking-widest text-white/50 uppercase mb-2">Starting from</div>
                <div className="font-serif text-5xl font-bold text-[#f5c842] mb-8">₹12 <span className="text-lg text-white/50 font-sans font-normal">/ sq ft (with material)</span></div>
                <div className="space-y-4">
                  {[
                    'Free site visit & measurement',
                    'Wall health inspection included',
                    'Anti-fungal primer as standard',
                    '2-coat top finish guaranteed',
                    'Full furniture masking & cleanup'
                  ].map(item => (
                    <div key={item} className="flex items-center gap-3 text-sm text-white/70">
                      <span className="w-5 h-5 rounded-full bg-[#f5c842]/20 text-[#f5c842] flex items-center justify-center text-[10px]">✓</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <ContentGrid 
                title="Our 6-Step Interior Process" 
                steps={[
                  { num: '01', icon: '🔍', title: 'Wall Health Check', desc: 'We inspect for dampness, cracks, peeling, and salt efflorescence before a single drop of paint is mixed.' },
                  { num: '02', icon: '🪚', title: 'Surface Preparation', desc: 'Old paint scraping, crack filling with Asian Paints Crackseal, wall sanding with machine for a perfectly smooth base.' },
                  { num: '03', icon: '🪣', title: 'Putty & Primer', desc: '2 coats of wall putty applied and sanded. Anti-fungal primer seals the surface, prevents mold.' },
                  { num: '04', icon: '🖌️', title: 'Top Coat Application', desc: '2–3 coats of premium emulsion applied in cross-direction for even coverage. Flawless edges and corners.' },
                  { num: '05', icon: '✅', title: 'Quality Inspection', desc: 'Our site supervisor does a 10-point checklist walkthrough with you before we pack up. Touch-ups on the spot.' },
                  { num: '06', icon: '🧹', title: 'Final Cleanup', desc: 'All masking removed, floor plastic cleaned, furniture placed back. You get your home cleaner than we found it.' }
                ]}
            />

            <CoverageSection 
                badgeColor="int"
                title="Every room, every surface"
                items={[
                  { title: 'Living Room & Bedroom Walls', desc: 'Full 3-coat system with premium emulsion. Feature walls available.' },
                  { title: 'Ceilings', desc: 'Ceiling painting with white/off-white using ceiling-grade paint for drip control.' },
                  { title: 'Kitchen & Bathroom Walls', desc: 'Moisture-resistant semi-gloss finish. Anti-fungal additive mandatory.' },
                  { title: 'Doors, Frames & Trims', desc: 'Wood or metal surfaces sanded, primed, and painted in enamel or melamine.' },
                  { id: 'balcony', title: 'Balcony Interior Walls', desc: 'Weather-grade emulsion used for balcony-facing interior surfaces.' },
                  { title: 'Staircase & Common Areas', desc: 'Interior stairwells, landings and common lobby walls covered if requested.' }
                ]}
            />
            
            <MaterialCallout 
                icon="⚠️"
                title="Why Kolkata homes need anti-fungal primer — not optional"
                desc="Kolkata's monsoon humidity regularly crosses 85–90%. Without anti-fungal primer, black mold growth on interior walls can begin within 6 months. We use Dr. Fixit Primer SF or Asian Paints Damp Shield as standard."
            />

            <DifferenceSection 
                items={[
                  { bad: 'No wall inspection before starting', good: 'Full wall health check first' },
                  { bad: '1-coat putty, skipped sanding', good: '2-coat putty + machine sanding' },
                  { bad: 'No masking for furniture', good: 'Full furniture masking, always' },
                  { bad: 'Cash-only, no written quotation', good: 'Itemized quote in 24 hours' },
                  { bad: 'Painters disappear after job', good: '1-year support on any issues' }
                ]}
                stats={[
                  { num: '1,400+', desc: 'Interior projects completed in Kolkata' },
                  { num: '4.9★', desc: 'Average Google rating across interior jobs' },
                  { num: '48hr', desc: 'Typical 2BHK interior completion time' }
                ]}
            />

            <BrandsSection />
            <FaqSection 
                faqs={[
                  { q: 'How many days does interior painting take for a 3BHK?', a: 'A standard 3BHK interior paint job takes 4–5 days with a team of 4 painters.' },
                  { q: 'Can I stay in my home during painting?', a: 'Yes, but we recommend vacating bedrooms while they\'re being painted (1–2 days per room). We use low-VOC paints to minimize odor.' },
                  { q: 'What\'s the difference between distemper, emulsion, and Royale?', a: 'Distemper is budget grade, Emulsion is standard (washable), and Royale is premium (superior sheen, highly washable).' },
                  { q: 'Do you do colour consultation?', a: 'Yes. Our project manager brings physical shade cards and we use digital visualizers to help you preview colors.' }
                ]}
                openFaq={openFaq}
                toggleFaq={toggleFaq}
            />
          </div>
        )}

        {/* EXTERIOR PAINTING */}
        {activeTab === 'exterior' && (
          <div className="animate-fade-up">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#e05a2b]/15 text-[#e05a2b] text-[11px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
                  🏠 Exterior Painting
                </div>
                <h2 className="font-serif text-4xl lg:text-5xl text-[#0f1f4b] leading-tight mb-6">
                  Built for Kolkata's <br /><span className="italic">monsoon climate</span>
                </h2>
                <p className="text-[#4a4a6a] leading-relaxed text-lg mb-8">
                  Exterior painting in Kolkata is not just about looks — it's about protection. Our scaffolding-grade teams apply weather-resistant, UV-blocking finishes that keep your building safe from heavy rain and intense heat.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button onClick={() => onNavigate('contact')} className="bg-[#e05a2b] text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-[#e05a2b]/20 hover:bg-[#c44e22] hover:-translate-y-1 transition-all">
                    📞 Book Free Site Visit
                  </button>
                  <button onClick={() => onNavigate('gallery')} className="text-[#0f1f4b] font-bold border-b-2 border-[#0f1f4b] pb-1 hover:text-[#e05a2b] hover:border-[#e05a2b] transition-all">
                    See Gallery →
                  </button>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#1a2f66] to-[#0f1f4b] rounded-[30px] p-10 lg:p-14 text-white relative overflow-hidden min-h-[400px] flex flex-col justify-end">
                <div className="absolute top-10 right-10 text-8xl opacity-20">🏗️</div>
                <div className="text-[11px] font-mono tracking-widest text-white/50 uppercase mb-2">Starting from</div>
                <div className="font-serif text-5xl font-bold text-[#f5c842] mb-8">₹18 <span className="text-lg text-white/50 font-sans font-normal">/ sq ft (with material)</span></div>
                <div className="space-y-4">
                  {[
                    'Scaffolding setup included',
                    'Crack & plaster repair first',
                    'Weather-resistant top coat',
                    '2-year exterior warranty',
                    'Suitable for residential & commercial'
                  ].map(item => (
                    <div key={item} className="flex items-center gap-3 text-sm text-white/70">
                      <span className="w-5 h-5 rounded-full bg-[#f5c842]/20 text-[#f5c842] flex items-center justify-center text-[10px]">✓</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <ContentGrid 
                title="Our 7-Step Exterior Process" 
                steps={[
                  { num: '01', icon: '🔭', title: 'Full Facade Assessment', desc: 'We assess cracks, plaster damage, and seepage points before quoting.' },
                  { num: '02', icon: '🚿', title: 'Power Washing', desc: 'High-pressure washing removes years of dust, algae, and loose paint.' },
                  { num: '03', icon: '🪚', title: 'Plaster Repair', desc: 'All cracks filled with elastomeric filler. Damaged plaster re-done.' },
                  { num: '04', icon: '🛡️', title: 'Waterproof Basecoat', desc: 'Dr. Fixit or Berger WeatherCoat barrier applied before primer.' },
                  { num: '05', icon: '🖌️', title: 'Primer + Top Coats', desc: 'Alkali-resistant primer followed by 2 coats of weather-resistant emulsion.' },
                  { num: '06', icon: '🏗️', title: 'Scaffolding & Safety', desc: 'Proper pipe scaffolding with safety nets. Fully insured teams.' },
                  { num: '07', icon: '📋', title: 'Handover & Warranty', desc: 'Post-paint inspection with photos. Written 2-year weather warranty issued.' }
                ]}
            />

            <CoverageSection 
                badgeColor="ext"
                title="Tough Protection for High-Rises"
                items={[
                  { title: 'Exterior Walls (All Floors)', desc: 'Residential buildings, societies and commercial towers. Scaffolding included.' },
                  { title: 'Boundary Walls & Gates', desc: 'Outer boundary walls and gate columns painted with exterior-grade materials.' },
                  { title: 'Exterior Windows & Grills', desc: 'Metal grills and railings cleaned, primed and painted in enamel.' },
                  { title: 'Balcony Exteriors', desc: 'Balcony slab soffits and external balcony walls treated with waterproof emulsion.' },
                  { id: 'plinth', title: 'Plinth & Dado Areas', desc: 'Ground-level plinth painted with anti-algae, scrub-resistant paint.' },
                  { title: 'Passages & Common Areas', desc: 'Society stairwells, parking areas and common corridors covered.' }
                ]}
            />

            <MaterialCallout 
                icon="🌧️"
                title="Why Kolkata exterior painting is different"
                desc="Kolkata receives over 1,500mm of rain annually. We exclusively use WeatherCoat grade paints and apply elastomeric crack-bridging primer as standard."
            />

            <DifferenceSection 
                items={[
                  { bad: 'No plaster repair before painting', good: 'All plaster repaired first' },
                  { bad: 'Regular emulsion used outside', good: 'WeatherCoat grade mandatory' },
                  { bad: 'Bamboo scaffolding, no safety net', good: 'Pipe scaffold + safety nets' },
                  { bad: 'Fades/peels in 1–2 monsoons', good: '5–7 year life, written warranty' },
                  { bad: 'No insurance for accidents', good: 'Fully insured team, always' }
                ]}
                stats={[
                  { num: '800+', desc: 'Exterior projects across Kolkata' },
                  { num: '5–7yr', desc: 'Average exterior paint life on our jobs' },
                  { num: '2yr', desc: 'Written weather warranty on all work' }
                ]}
            />
            
            <BrandsSection />
            <FaqSection 
                faqs={[
                  { q: 'When is the best time to do exterior painting?', a: 'October–February is ideal. Dry weather and low humidity ensure proper curing.' },
                  { q: 'How much does it cost for a society building?', a: 'Typically ₹3–5 lakhs for a G+4 building repainted with quality WeatherCoat products.' },
                  { q: 'What causes paint to peel so fast in Kolkata?', a: 'Usually using interior paint outside, or painting over damp patches without fixing seepage.' }
                ]}
                openFaq={openFaq}
                toggleFaq={toggleFaq}
            />
          </div>
        )}

        {/* TEXTURE FINISH */}
        {activeTab === 'texture' && (
          <div className="animate-fade-up">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#7c6ef5]/15 text-[#5a4ed4] text-[11px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
                  ✨ Texture Finish
                </div>
                <h2 className="font-serif text-4xl lg:text-5xl text-[#0f1f4b] leading-tight mb-6">
                  Walls that go <br /><span className="italic">beyond paint</span>
                </h2>
                <p className="text-[#4a4a6a] leading-relaxed text-lg mb-8">
                  Texture finishes turn a plain painted wall into a design statement. From Venetian plaster to geometric 3D patterns, we bring 100+ designs with Asian Paints certified craftsmen.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button onClick={() => onNavigate('contact')} className="bg-[#e05a2b] text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-[#e05a2b]/20 hover:bg-[#c44e22] hover:-translate-y-1 transition-all">
                    📞 Book Free Consultation
                  </button>
                  <button onClick={() => onNavigate('gallery')} className="text-[#0f1f4b] font-bold border-b-2 border-[#0f1f4b] pb-1 hover:text-[#e05a2b] hover:border-[#e05a2b] transition-all">
                    View Gallery →
                  </button>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#2d2060] to-[#4a3080] rounded-[30px] p-10 lg:p-14 text-white relative overflow-hidden min-h-[400px] flex flex-col justify-end">
                <div className="absolute top-10 right-10 text-8xl opacity-20">🌀</div>
                <div className="text-[11px] font-mono tracking-widest text-white/50 uppercase mb-2">Starting from</div>
                <div className="font-serif text-5xl font-bold text-[#f5c842] mb-8">₹35 <span className="text-lg text-white/50 font-sans font-normal">/ sq ft (feature wall)</span></div>
                <div className="space-y-4">
                  {[
                    '100+ texture designs available',
                    'Asian Paints Royale Play certified',
                    'Physical sample before you decide',
                    '1-year application warranty',
                    'Color consultation included free'
                  ].map(item => (
                    <div key={item} className="flex items-center gap-3 text-sm text-white/70">
                      <span className="w-5 h-5 rounded-full bg-[#f5c842]/20 text-[#f5c842] flex items-center justify-center text-[10px]">✓</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <CoverageSection 
                badgeColor="tex"
                title="Which texture is right for your space?"
                items={[
                  { title: 'Sand & Stone Texture', desc: 'Natural feel. Best for living rooms. Hides wall imperfections. ₹35–50/sqft.' },
                  { title: 'Royale Play (Asian Paints)', desc: 'Premium multi-coat in 50+ designs like Jaal, Script, Damask. ₹55–90/sqft.' },
                  { title: 'Venetian Plaster', desc: 'Marble-like finish with depth and sheen. Stunning for feature walls. ₹80–120/sqft.' },
                  { title: '3D Geometric Texture', desc: 'Bold angular or wave patterns for accent walls. Modern, dramatic effect.' },
                  { title: 'Metallic Finish', desc: 'Gold or silver sheen over base texture. Adds luxury to master bedrooms.' },
                  { title: 'Smooth Matte (Luxury)', desc: 'Ultra-flat, hyper-smooth finish. Requires perfect wall prep — our specialty.' }
                ]}
            />
            
            <MaterialCallout 
                icon="💡"
                title="Don't texture every wall"
                desc="One strong feature wall paired with 3 plain walls creates more visual impact. Our consultants help you pick the right balance."
            />

            <DifferenceSection 
                items={[
                  { bad: 'Wrong tool = patchy, uneven texture', good: 'Certified tools per design type' },
                  { bad: 'No base coat = texture peels fast', good: '3-coat base system always' },
                  { bad: 'Untrained painter guessing patterns', good: 'Asian Paints trained applicators' },
                  { bad: 'No physical sample before starting', good: 'Sample patch on actual wall first' }
                ]}
                stats={[
                  { num: '100+', desc: 'Texture designs we can execute' },
                  { num: '400+', desc: 'Texture projects in Kolkata' },
                  { num: 'Free', desc: 'Sample patch before you confirm' }
                ]}
            />
            
            <BrandsSection />
            <FaqSection 
                faqs={[
                  { q: 'Can texture be applied only on one wall?', a: 'Yes — we actually recommend it for the most elegant effect.' },
                  { q: 'How long does texture painting last?', a: 'Applied correctly, it lasts 8–12 years.' },
                  { q: 'Can I see a sample first?', a: 'Always. We apply a 1 sq ft sample patch on your actual wall first.' }
                ]}
                openFaq={openFaq}
                toggleFaq={toggleFaq}
            />
          </div>
        )}

        {/* WATERPROOFING */}
        {activeTab === 'waterproofing' && (
          <div className="animate-fade-up">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#2bb5a0]/15 text-[#1d8a78] text-[11px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
                  💧 Waterproofing
                </div>
                <h2 className="font-serif text-4xl lg:text-5xl text-[#0f1f4b] leading-tight mb-6">
                  Stop the leak <br /><span className="italic">at its source</span>
                </h2>
                <p className="text-[#4a4a6a] leading-relaxed text-lg mb-8">
                  Damp walls aren't a painting problem — they're a structural one. We identify the seepage source, treat it with the right system, and then paint.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button onClick={() => onNavigate('contact')} className="bg-[#e05a2b] text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-[#e05a2b]/20 hover:bg-[#c44e22] hover:-translate-y-1 transition-all">
                    📞 Book Damp Inspection
                  </button>
                  <button onClick={() => onNavigate('gallery')} className="text-[#0f1f4b] font-bold border-b-2 border-[#0f1f4b] pb-1 hover:text-[#e05a2b] hover:border-[#e05a2b] transition-all">
                    See Case Studies →
                  </button>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#0d4a42] to-[#1a6b60] rounded-[30px] p-10 lg:p-14 text-white relative overflow-hidden min-h-[400px] flex flex-col justify-end">
                <div className="absolute top-10 right-10 text-8xl opacity-20">🛡️</div>
                <div className="text-[11px] font-mono tracking-widest text-white/50 uppercase mb-2">Starting from</div>
                <div className="font-serif text-5xl font-bold text-[#f5c842] mb-8">₹25 <span className="text-lg text-white/50 font-sans font-normal">/ sq ft (treatment + coating)</span></div>
                <div className="space-y-4">
                  {[
                    'Source diagnosis before treatment',
                    'Dr. Fixit / Fosroc systems used',
                    'Terrace, walls, bathrooms covered',
                    '3-year waterproofing warranty',
                    'Post-treatment paint included'
                  ].map(item => (
                    <div key={item} className="flex items-center gap-3 text-sm text-white/70">
                      <span className="w-5 h-5 rounded-full bg-[#f5c842]/20 text-[#f5c842] flex items-center justify-center text-[10px]">✓</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <CoverageSection 
                badgeColor="wp"
                title="We treat every type of seepage"
                items={[
                  { title: 'Terrace & Roof Waterproofing', desc: 'Brick bat coba system or liquid membrane for complete terrace protection.' },
                  { title: 'Bathroom & Kitchen Floor', desc: 'Crystalline waterproofing or injection grouting for existing seepage.' },
                  { title: 'External Wall Seepage', desc: 'Crack injection and elastomeric treatment for water ingress.' },
                  { title: 'Basement & Underground', desc: 'Integral crystalline waterproofing for below-ground ingress.' },
                  { title: 'Water Tank Waterproofing', desc: 'Overhead and underground tanks treated with potable-safe coating.' },
                  { title: 'Sunken Slab (Bathroom)', desc: 'Full sunken slab waterproofing during renovation before retiling.' }
                ]}
            />
            
            <MaterialCallout 
                icon="🚨"
                title="Painting over damp walls makes it worse"
                desc="Trapped moisture causes new paint to blister and peel. The correct sequence: fix source → waterproof → dry → paint."
            />

            <DifferenceSection 
                items={[
                  { bad: 'Paint over damp without treating', good: 'Source diagnosed & fixed first' },
                  { bad: 'Generic coating on wrong surface', good: 'System matched to seepage type' },
                  { bad: 'No curing time allowed', good: '28-day cure before painting' },
                  { bad: 'No warranty on treatment', good: '3-year written warranty' }
                ]}
                stats={[
                  { num: '600+', desc: 'Waterproofing jobs completed in Kolkata' },
                  { num: '3yr', desc: 'Written warranty on treatment' },
                  { num: 'Dr.Fixit', desc: 'Certified applicator for Dr. Fixit systems' }
                ]}
            />
            
            <BrandsSection />
            <FaqSection 
                faqs={[
                  { q: 'How do I know if it\'s a damp problem?', a: 'Signs include salt deposits, bubbling paint, dark stains, or a musty smell.' },
                  { q: 'Can you waterproof without breaking walls?', a: 'External seepage can often be fixed without breaking interior tiles.' },
                  { q: 'My terrace still leaks after two treatments. Why?', a: 'Usually due to bridging cracks without fixing the underlying base layer properly.' }
                ]}
                openFaq={openFaq}
                toggleFaq={toggleFaq}
            />
          </div>
        )}
      </div>

      <FooterBanner onNavigate={onNavigate} activeTab={activeTab} />
    </div>
  );
};

/* ─── HELPER COMPONENTS ─── */

const ContentGrid = ({ title, steps }) => (
  <div className="mb-24">
    <div className="text-[11px] font-mono tracking-[2px] text-[#8888aa] uppercase mb-3">How It Works</div>
    <h3 className="font-serif text-3xl text-[#0f1f4b] mb-12">{title}</h3>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {steps.map(step => (
        <div key={step.num} className="bg-white border border-[#e0d9ce] p-8 rounded-2xl hover:shadow-xl hover:shadow-black/5 transition-all group relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#e05a2b] scale-x-0 group-hover:scale-x-100 transition-all"></div>
          <div className="text-[11px] font-mono text-[#8888aa] mb-4">{step.num}</div>
          <div className="text-3xl mb-4">{step.icon}</div>
          <h4 className="font-bold text-[#0f1f4b] mb-2">{step.title}</h4>
          <p className="text-xs text-[#4a4a6a] leading-relaxed">{step.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const CoverageSection = ({ title, items, badgeColor }) => (
  <div className="mb-24">
    <div className="text-[11px] font-mono tracking-[2px] text-[#8888aa] uppercase mb-3">What's Covered</div>
    <h3 className="font-serif text-3xl text-[#0f1f4b] mb-10">{title}</h3>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {items.map(item => (
        <div key={item.title} className="flex gap-4 p-6 bg-white border border-[#e0d9ce] rounded-xl">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs 
            ${badgeColor === 'int' ? 'bg-[#f5c842]/15 text-[#a08000]' : 
              badgeColor === 'ext' ? 'bg-[#e05a2b]/15 text-[#e05a2b]' : 
              badgeColor === 'tex' ? 'bg-[#7c6ef5]/15 text-[#5a4ed4]' : 
              'bg-[#2bb5a0]/15 text-[#1d8a78]'}`}>✓</div>
          <div>
            <h5 className="font-bold text-sm text-[#0f1f4b] mb-1">{item.title}</h5>
            <p className="text-[11px] text-[#4a4a6a] leading-relaxed">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const MaterialCallout = ({ icon, title, desc }) => (
  <div className="bg-[#fff8e8] border-l-4 border-[#f5c842] p-8 rounded-r-2xl flex gap-6 mb-24 items-start">
    <div className="text-3xl">{icon}</div>
    <div>
      <h5 className="font-bold text-[#7a6000] mb-2">{title}</h5>
      <p className="text-sm text-[#a08000] leading-relaxed max-w-4xl">{desc}</p>
    </div>
  </div>
);

const DifferenceSection = ({ items, stats }) => (
  <div className="bg-[#0f1f4b] rounded-[30px] p-10 lg:p-16 mb-24 grid lg:grid-cols-2 gap-16">
    <div>
      <div className="text-[11px] font-mono tracking-[2px] text-white/40 uppercase mb-3">The ColorMate Difference</div>
      <h3 className="font-serif text-2xl text-white mb-10">What others skip, we never do.</h3>
      <div className="space-y-5">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-5 text-sm">
            <span className="text-white/40 line-through shrink-0">{item.bad}</span>
            <span className="text-[#f5c842]">→</span>
            <span className="text-white/85 font-medium">{item.good}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="flex flex-col gap-5 justify-center">
      {stats.map(stat => (
        <div key={stat.num} className="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <div className="font-serif text-3xl text-[#f5c842] font-bold">{stat.num}</div>
          <p className="text-[11px] text-white/50 mt-1 uppercase tracking-widest">{stat.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const BrandsSection = () => (
  <div className="mb-24">
    <div className="text-[11px] font-mono tracking-[2px] text-[#8888aa] uppercase mb-3">Premium Materials</div>
    <h3 className="font-serif text-3xl text-[#0f1f4b] mb-10">The brands we trust</h3>
    <div className="flex flex-wrap gap-4">
      {['Asian Paints', 'Berger', 'Dulux', 'Nerolac'].map(brand => (
        <div key={brand} className="bg-white border border-[#e0d9ce] px-6 py-3.5 rounded-full font-bold text-sm text-[#0f1f4b]">
          🎨 {brand}
        </div>
      ))}
    </div>
  </div>
);

const FaqSection = ({ faqs, openFaq, toggleFaq }) => (
  <div className="mb-24">
    <div className="text-[11px] font-mono tracking-[2px] text-[#8888aa] uppercase mb-3">Common Questions</div>
    <h3 className="font-serif text-3xl text-[#0f1f4b] mb-10">Service FAQ</h3>
    <div className="space-y-3">
      {faqs.map((faq, idx) => (
        <div key={idx} className={`bg-white border rounded-xl overflow-hidden transition-all ${openFaq === idx ? 'border-[#e05a2b]' : 'border-[#e0d9ce]'}`}>
          <button onClick={() => toggleFaq(idx)} className="w-full flex items-center justify-between p-6 font-bold text-left text-sm text-[#0f1f4b]">
            {faq.q}
            <span className={`text-xl transition-transform ${openFaq === idx ? 'rotate-45 text-[#e05a2b]' : 'text-[#8888aa]'}`}>+</span>
          </button>
          {openFaq === idx && <div className="px-6 pb-6 text-sm text-[#4a4a6a] leading-relaxed border-t border-[#e0d9ce] pt-4 animate-fade-in">{faq.a}</div>}
        </div>
      ))}
    </div>
  </div>
);

const FooterBanner = ({ onNavigate, activeTab }) => {
  const themes = {
    interior: 'bg-gradient-to-r from-[#e05a2b] to-[#c44e22]',
    exterior: 'bg-gradient-to-r from-[#1a2f66] to-[#0f1f4b]',
    texture: 'bg-gradient-to-r from-[#5a4ed4] to-[#3d2eb0]',
    waterproofing: 'bg-gradient-to-r from-[#1d8a78] to-[#0d5a4f]'
  };

  return (
    <div className={`${themes[activeTab]} py-20 px-12 mb-20 rounded-[40px] max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 text-white`}>
      <div className="max-w-xl text-center md:text-left">
        <h3 className="font-serif text-3xl mb-4 font-bold">Ready to transform your home?</h3>
        <p className="opacity-80 leading-relaxed text-sm">Free site visit · Detailed written quote in 24 hours · No hidden charges. We serve all areas of Kolkata including Behala, Salt Lake, Ballygunge, and New Town.</p>
      </div>
      <div className="flex flex-col items-end gap-3 shrink-0">
        <button onClick={() => onNavigate('contact')} className="bg-white text-ink font-bold px-10 py-4.5 rounded-xl shadow-2xl hover:bg-[#f5f0e8] transition-all whitespace-nowrap">
          📋 Get Free Estimate
        </button>
        <span className="text-[10px] opacity-50 font-bold uppercase tracking-widest">No obligation · Response in 2 hours</span>
      </div>
    </div>
  );
};

export default ServiceDetails;
