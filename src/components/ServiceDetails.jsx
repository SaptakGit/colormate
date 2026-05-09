import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ServiceDetails = () => {
  const navigate = useNavigate();
  const { serviceId } = useParams();
  const [activeTab, setActiveTab] = useState(serviceId || 'interior');

  useEffect(() => {
    setActiveTab(serviceId || 'interior');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [serviceId]);

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
            From a single bedroom to full residential towers — ColorSure brings certified painters, premium materials, and a 10-point quality checklist to every project in Kolkata.
          </p>
          
          <div className="flex flex-wrap gap-10 mt-12 pt-10 border-t border-white/10">
            <div className="hero-stat">
              <div className="font-serif text-3xl text-[#f5c842] font-bold">100%</div>
              <div className="text-[11px] text-white/50 uppercase tracking-widest mt-1">Job Completion</div>
            </div>
            <div className="hero-stat">
              <div className="font-serif text-3xl text-[#f5c842] font-bold">48hr</div>
              <div className="text-[11px] text-white/50 uppercase tracking-widest mt-1">Written Quote</div>
            </div>
            <div className="hero-stat">
              <div className="font-serif text-3xl text-[#f5c842] font-bold">Zero</div>
              <div className="text-[11px] text-white/50 uppercase tracking-widest mt-1">Subcontractors</div>
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
                  🎨 INTERIOR PAINTING SERVICE
                </div>
                <h2 className="font-serif text-4xl lg:text-5xl text-[#0f1f4b] leading-tight mb-6">
                  Transform your home <br /><span className="italic">from the inside out</span>
                </h2>
                <p className="text-[#4a4a6a] leading-relaxed text-lg mb-8">
                  Looking for a reliable interior painting service in Kolkata? We handle living rooms, bedrooms, kitchens, bathrooms and ceilings — anti-fungal primer, machine sanding and 3-coat finish on every wall. No subcontractors. Done right the first time.
                </p>
                <div className="flex flex-wrap gap-4">
                <button onClick={() => navigate('/contact')} className="bg-[#e05a2b] text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-[#e05a2b]/20 hover:bg-[#c44e22] hover:-translate-y-1 transition-all">
                  📞 Book Free Site Visit
                </button>
                <button onClick={() => navigate('/gallery')} className="text-[#0f1f4b] font-bold border-b-2 border-[#0f1f4b] pb-1 hover:text-[#e05a2b] hover:border-[#e05a2b] transition-all">
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
                    'Living rooms, bedrooms, kitchens & bathrooms',
                    'Ceiling painting with drip-control grade paint',
                    'Anti-fungal primer on every wall — standard',
                    '2-coat wall putty + machine sanding',
                    'Furniture masking & post-job cleanup included'
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
                  { num: '01', icon: '🔍', title: 'Wall Health Check', desc: 'Every wall inspected for dampness, cracks, peeling and salt deposits before work begins. Problems flagged in the quote.' },
                  { num: '02', icon: '🪚', title: 'Surface Preparation', desc: 'Flaking paint scraped off. Cracks filled with Asian Paints Crackseal. Machine sanding for a smooth base, no hand-sanding ridges.' },
                  { num: '03', icon: '🪣', title: 'Wall Putty Application', desc: 'Two coats of wall putty applied and dried fully between each coat. Machine-sanded for a glass-smooth surface.' },
                  { num: '04', icon: '🛡️', title: 'Anti-Fungal Primer', desc: 'Anti-fungal primer applied on every wall as standard, not just bathrooms and kitchens. Essential for Kolkata humidity.' },
                  { num: '05', icon: '🖌️', title: 'Top Coat Application', desc: '2–3 coats of premium emulsion applied in cross-direction for even coverage. Roller for walls, brush for edges.' },
                  { num: '06', icon: '✅', title: 'Final Check & Cleanup', desc: '10-point inspection walkthrough with you. Touch-ups on the spot. Masking removed, furniture replaced.' }
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
                  { bad: 'No wall inspection before starting', good: 'Full wall health check on Day 1' },
                  { bad: '1-coat putty, hand sanding skipped', good: '2-coat putty + machine sanding standard' },
                  { bad: 'Standard primer on all walls', good: 'Anti-fungal primer on every wall' },
                  { bad: 'No furniture protection', good: 'Full furniture masking — always' },
                  { bad: 'Verbal quote, cash only', good: 'Written itemised quote within 24 hours' },
                  { bad: 'No follow-up after job', good: '1-year workmanship warranty' }
                ]}
                stats={[
                  { num: '✓', desc: 'Physical shade cards brought to your home' },
                  { num: '✓', desc: 'Room photo colour visualisation included' },
                  { num: '✓', desc: 'Light reflectance advice for lower-floor Kolkata flats' }
                ]}
            />

            <BrandsSection 
              brands={[
                { name: 'Asian Paints', grades: 'Royale · Apcolite · Tractor Emulsion · Damp Shield' },
                { name: 'Berger', grades: 'Silk · Bison Emulsion · Rangoli · WeatherCoat' },
                { name: 'Dulux', grades: 'Velvet Touch · Pentalite · Weathershield' },
                { name: 'Nerolac', grades: 'Impressions · Excel · Beauty Gold' }
              ]}
            />
            <FaqSection 
                title="Questions from Kolkata homeowners"
                faqs={[
                  { q: 'How much does interior painting cost in Kolkata?', a: 'Standard emulsion starts from ₹12/sqft, premium grades like Asian Paints Royale or Berger Silk run ₹18–24/sqft, inclusive of putty, primer and two top coats. Final cost depends on wall condition, grade and carpet area. Book a free site visit for an exact written quote.' },
                  { q: 'How many days does interior painting take for a 3BHK?', a: 'A standard 3BHK, walls and ceilings, no woodwork, takes 4 to 5 days with a team of four. This includes putty, drying, sanding, primer and two top coats. We never compress drying time between coats, that is the single biggest cause of peeling within a year.' },
                  { q: 'Do I need anti-fungal primer for interior walls in Kolkata?', a: 'Yes, on every wall, not just bathrooms. Kolkata\'s monsoon humidity regularly crosses 85-90%, creating conditions for mold on any insufficiently primed surface. We apply anti-fungal primer as standard across all interior walls on every job.' },
                  { q: 'Can I stay home while interior painting is going on?', a: 'Yes. We work room by room, sealing areas with plastic sheeting and using low-VOC paints to keep odour minimal. For newborns or elderly family members, we recommend vacating individual rooms for 24 hours after each coat is applied.' },
                  { q: 'What is the difference between distemper, emulsion and Royale?', a: 'Distemper (₹8-10/sqft) fades within 2-3 years and is not washable. Standard emulsion (₹12–16/sqft) lasts 5-7 years and is washable, the minimum we recommend for Kolkata homes. Royale or Silk (₹18-24/sqft) lasts 8-10 years, washable up to 10,000 scrub cycles, best for high-traffic rooms.' }
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
                  🏠 EXTERIOR PAINTING SERVICE KOLKATA
                </div>
                <h2 className="font-serif text-4xl lg:text-5xl text-[#0f1f4b] leading-tight mb-6">
                  Built to survive every <br /><span className="italic">Kolkata monsoon</span>
                </h2>
                <p className="text-[#4a4a6a] leading-relaxed text-lg mb-8">
                  Looking for a reliable exterior painting service in Kolkata? ColorSure handles facade repaints for residential flats, independent houses and housing societies, WeatherCoat emulsion, elastomeric primer, pipe scaffolding and proper crack repair before a single coat goes on.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button onClick={() => navigate('/contact')} className="bg-[#e05a2b] text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-[#e05a2b]/20 hover:bg-[#c44e22] hover:-translate-y-1 transition-all">
                    📞 Book Free Site Visit
                  </button>
                  <button onClick={() => navigate('/gallery')} className="text-[#0f1f4b] font-bold border-b-2 border-[#0f1f4b] pb-1 hover:text-[#e05a2b] hover:border-[#e05a2b] transition-all">
                    See Gallery →
                  </button>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#1a2f66] to-[#0f1f4b] rounded-[30px] p-10 lg:p-14 text-white relative overflow-hidden min-h-[400px] flex flex-col justify-end">
                <div className="absolute top-10 right-10 text-8xl opacity-20">🏗️</div>
                <div className="text-[11px] font-mono tracking-widest text-white/50 uppercase mb-2">Starting from</div>
                <div className="font-serif text-5xl font-bold text-[#f5c842] mb-8">₹16 <span className="text-lg text-white/50 font-sans font-normal">/ sq ft (with material)</span></div>
                <div className="space-y-4">
                  {[
                    'Scaffolding setup included',
                    'Crack & plaster repair first',
                    'Weather-resistant top coat',
                    '1-year exterior warranty',
                    'Suitable for residential & societies'
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
                  { num: '01', icon: '🔭', title: 'Full Facade Assessment', desc: 'Every crack, plaster damage zone, and previous paint failure documented before quoting. Proper baseline check.' },
                  { num: '02', icon: '🚿', title: 'Power Washing', desc: 'High-pressure washing removes years of algae, mold deposits, and loose paint. Foundation of lasting adhesion.' },
                  { num: '03', icon: '🪚', title: 'Plaster & Crack Repair', desc: 'All cracks filled with elastomeric filler. Damaged plaster redone properly. Essential step most skip.' },
                  { num: '04', icon: '🛡️', title: 'Waterproof Basecoat', desc: 'Dr. Fixit or Berger WeatherCoat barrier applied before primer. Prevents substrate ingress.' },
                  { num: '05', icon: '🖌️', title: 'Alkali-Resistant Primer', desc: 'Mandatory on new or freshly repaired plaster before top coats. Prevents chemical reaction with paint.' },
                  { num: '06', icon: '🏗️', title: 'Top Coat Application', desc: '2–3 coats of WeatherCoat grade emulsion applied by spray or roller with specified drying time.' },
                  { num: '07', icon: '📋', title: 'Inspection & Handover', desc: 'Post-paint walkthrough with photos. Written 1-year service warranty and WhatsApp support issued.' }
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
                  { bad: 'No facade assessment before starting', good: 'Full crack & plaster check on Day 1' },
                  { bad: 'Standard emulsion used outside', good: 'WeatherCoat grade; minimum standard' },
                  { bad: 'Bamboo scaffolding, no safety net', good: 'Pipe scaffolding + safety nets always' },
                  { bad: 'Painting over damp plaster', good: 'Plaster repaired before primer goes on' },
                  { bad: 'Verbal quote, no documentation', good: 'Written itemised quote within 24 hours' },
                  { bad: 'No accountability after job', good: '1-year workmanship service warranty' }
                ]}
                stats={[
                  { num: '100+', desc: 'Exterior projects across Kolkata' },
                  { num: '5-7yr', desc: 'Average exterior paint life on our jobs' },
                  { num: '1yr', desc: 'Warranty on all work' }
                ]}
            />
            
            <BrandsSection 
              brands={[
                { name: 'Asian Paints', grades: 'Apex · Apex Ultima · Apex Ultima Protek · Exterior Primer' },
                { name: 'Berger', grades: 'WeatherCoat · WeatherCoat Long Life · Antidust · Exterior Primer' },
                { name: 'Dulux', grades: 'Weathershield · Weathershield Max · Exterior Primer' },
                { name: 'Nerolac', grades: 'Excel · Excel Total · Exterior Primer' }
              ]}
            />
            <FaqSection 
                title="Questions from Kolkata homeowners"
                faqs={[
                  { q: 'How much does exterior painting cost in Kolkata?', a: 'Exterior painting starts from ₹16/sqft using standard WeatherCoat grade emulsion, inclusive of primer and two top coats. Premium grades like Asian Paints Apex Ultima run ₹22-28/sqft. Scaffolding is quoted separately based on building height. Book a free site visit for an exact written quote.' },
                  { q: 'When is the best time to do exterior painting in Kolkata?', a: 'October to February is ideal, dry weather, low humidity, paint cures properly between coats. We can also schedule exterior work in March–May before monsoon if booked early. We strictly avoid applying exterior paint during active rainfall.' },
                  { q: 'Why does exterior paint peel so fast in Kolkata?', a: 'Three main reasons: using standard emulsion instead of WeatherCoat grade, painting over damp or damaged plaster without repairing it first, and skipping alkali-resistant primer on new plaster.' },
                  { q: 'Do you handle full society or building repaints?', a: 'Yes. We handle full-building exterior repaints for housing societies, apartment complexes and commercial buildings. We provide itemised society committee quotations.' },
                  { q: 'What warranty do you provide on exterior painting?', a: 'All exterior painting carries a 1-year service warranty, any finish defect or application issue within that period, we return and fix it at no charge.' }
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
                  ✨ TEXTURE PAINTING SERVICE KOLKATA
                </div>
                <h2 className="font-serif text-4xl lg:text-5xl text-[#0f1f4b] leading-tight mb-6">
                  Painting Transformed <br /><span className="italic">for Kolkata</span>
                </h2>
                <p className="text-[#4a4a6a] leading-relaxed text-lg mb-8">
                  Whether it is a feature wall in the living room or a full-room finish, ColorSure delivers professional texture paint designs across Kolkata. Asian Paints certified applicators. Sample patch on your wall before you commit.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button onClick={() => navigate('/contact')} className="bg-[#e05a2b] text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-[#e05a2b]/20 hover:bg-[#c44e22] hover:-translate-y-1 transition-all">
                    📞 Book Free Consultation
                  </button>
                  <button onClick={() => navigate('/gallery')} className="text-[#0f1f4b] font-bold border-b-2 border-[#0f1f4b] pb-1 hover:text-[#e05a2b] hover:border-[#e05a2b] transition-all">
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
                    'Jaal, Script, Sponge, Damask & 20+ designs',
                    'Asian Paints certified applicators',
                    'Sample patch before confirmation',
                    'Feature wall or full room, both available',
                    'Colour consultation included free'
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
                title="Trained applicators for every design"
                items={[
                  { title: 'Royale Play (Asian Paints)', desc: 'Premium multi-coat in 50+ designs like Jaal, Script, Damask. ₹55–90/sqft.' },
                  { title: 'Venetian Plaster', desc: 'Marble-like finish with depth and sheen. Stunning for feature walls. ₹90–150/sqft.' },
                  { title: 'Sand & Stone Texture', desc: 'Natural feel. Best for living rooms. Hides wall imperfections. ₹35–50/sqft.' },
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
            
            <BrandsSection 
              brands={[
                { name: 'Asian Paints', grades: 'Royale Play · Royale Play Stucco · Antico · Dune' },
                { name: 'Berger', grades: 'Bison Tex · Easy Clean Texture · Silk Glamour' },
                { name: 'Dulux', grades: 'Ambiance Velvet · Fine Texture · Pentalite' },
                { name: 'Nerolac', grades: 'Impressions Textura · Beauty Smooth · Excel Texture' }
              ]}
            />
            <FaqSection 
                title="Questions from Kolkata homeowners"
                faqs={[
                  { q: 'How much does texture painting cost in Kolkata?', a: 'Sand and stone texture starts from ₹35/sqft. Royale Play designs run ₹55-90/sqft. Venetian plaster and 3D geometric range from ₹90–150/sqft, inclusive of base coat, primer and application. A sample patch is applied free before you confirm.' },
                  { q: 'Can texture be applied on just one wall?', a: 'Yes, and we recommend it. A single feature wall in Royale Play or Venetian plaster paired with three emulsion walls creates more visual impact than texturing all four.' },
                  { q: 'How long does texture painting last in Kolkata?', a: 'Applied correctly over a properly prepared base, texture finishes last 8-12 years. The key is no dampness in the wall before application and the correct product grade. Our work carries a 1-year application warranty against peeling or cracking.' },
                  { q: 'Can I see a sample before committing?', a: 'Always. We apply a sample patch on your actual wall, approximately 1 sqft, in your chosen texture and colour before starting. You approve it before we proceed. If you want to try a different design, we apply another sample at no charge.' },
                  { q: 'Which rooms suit texture painting in Kolkata?', a: 'Living rooms and dining areas are most popular, Royale Play or Venetian plaster on the feature wall makes the strongest impact. Bedrooms suit sand or metallic finishes. Foyers benefit from Venetian plaster or 3D geometric.' }
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
                  💧 WATERPROOFING SERVICE KOLKATA
                </div>
                <h2 className="font-serif text-4xl lg:text-5xl text-[#0f1f4b] leading-tight mb-6">
                  Fix the source. <br /><span className="italic">Not just the surface</span>
                </h2>
                <p className="text-[#4a4a6a] leading-relaxed text-lg mb-8">
                  Looking for reliable waterproofing services in Kolkata? ColorSure diagnoses the seepage source first, terrace, bathroom slab, external wall or water tank, then applies the right Dr. Fixit or Fosroc system. We never paint over a damp wall without treating what is behind it.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button onClick={() => navigate('/contact')} className="bg-[#e05a2b] text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-[#e05a2b]/20 hover:bg-[#c44e22] hover:-translate-y-1 transition-all">
                    📞 Book Damp Inspection
                  </button>
                  <button onClick={() => navigate('/gallery')} className="text-[#0f1f4b] font-bold border-b-2 border-[#0f1f4b] pb-1 hover:text-[#e05a2b] hover:border-[#e05a2b] transition-all">
                    See Gallery →
                  </button>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#0d4a42] to-[#1a6b60] rounded-[30px] p-10 lg:p-14 text-white relative overflow-hidden min-h-[400px] flex flex-col justify-end">
                <div className="absolute top-10 right-10 text-8xl opacity-20">🛡️</div>
                <div className="text-[11px] font-mono tracking-widest text-white/50 uppercase mb-2">Starting from</div>
                <div className="font-serif text-5xl font-bold text-[#f5c842] mb-8">₹25 <span className="text-lg text-white/50 font-sans font-normal">/ sq ft (treatment + coating)</span></div>
                <div className="space-y-4">
                  {[
                    'Full surface preparation to SSD condition',
                    'All cracks routed and filled before treatment',
                    'Dr. Fixit Roofseal Classic / Pidifin 2K',
                    'Slope correction included where required',
                    'Minimum 28-day cure before painting'
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
                  { bad: 'No warranty on treatment', good: 'Manufacturer-backed warranty always' }
                ]}
                stats={[
                  { num: '100+', desc: 'WATERPROOFING JOBS COMPLETED IN KOLKATA' },
                  { num: 'Dr.Fixit', desc: 'MANUFACTURER WARRANTY ON DR. FIXIT SYSTEMS' },
                  { num: '✓', desc: 'CERTIFIED APPLICATOR FOR DR. FIXIT SYSTEMS' }
                ]}
            />
            
            <BrandsSection 
              brands={[
                { name: 'Dr. Fixit', grades: 'Roofseal Classic · Flexi · Pidifin 2K · Fastflex · Raincoat Star' },
                { name: 'Fosroc', grades: 'Brushbond · Nitobond · Renderoc' },
                { name: 'Berger', grades: 'WeatherCoat Barrier · Dampstop · Damp Proof' },
                { name: 'Asian Paints', grades: 'Damp Shield · Dr. Fixit Range (authorised dealer)' }
              ]}
            />
            <FaqSection 
                title="Questions from Kolkata homeowners"
                faqs={[
                  { q: 'How do I know if my wall needs waterproofing or just repainting?', a: 'Signs waterproofing is needed: white salt deposits on the wall, paint bubbling from behind, dark stains growing after rain, or visible wet patches. Painting over these without treatment makes it worse.' },
                  { q: 'How much does waterproofing cost in Kolkata?', a: 'Terrace waterproofing starts from ₹45/sqft, bathroom from ₹35/sqft and external walls from ₹25/sqft. Final cost depends on seepage severity and product system required.' },
                  { q: 'What warranty do you provide on waterproofing?', a: 'The warranty comes directly from Dr. Fixit — 7 years on Roofseal Classic, up to 10 years on Pidifin 2K. We apply every product to exact manufacturer specifications.' },
                  { q: 'My terrace has been waterproofed twice and still leaks, why?', a: 'Most common reason is applying a membrane over a deteriorated base without proper preparation. When the slab moves, the membrane cracks. We fix the underlying base properly.' },
                  { q: 'Can you do waterproofing without breaking tiles?', a: 'External wall seepage can often be treated from outside without disturbing tiles. Bathroom floor leakage typically requires tile removal to treat the sunken slab properly.' }
                ]}
                openFaq={openFaq}
                toggleFaq={toggleFaq}
            />
          </div>
        )}
      </div>

      <FooterBanner navigate={navigate} activeTab={activeTab} />
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
      <div className="text-[11px] font-mono tracking-[2px] text-white/40 uppercase mb-3">The ColorSure Difference</div>
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

const BrandsSection = ({ brands }) => (
  <div className="mb-24">
    <div className="text-[11px] font-mono tracking-[2px] text-[#8888aa] uppercase mb-3">Premium Materials</div>
    <h3 className="font-serif text-3xl text-[#0f1f4b] mb-10">The brands we trust</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {brands.map(brand => (
        <div key={brand.name} className="bg-white border border-[#e0d9ce] p-6 rounded-2xl">
          <div className="font-bold text-[#0f1f4b] mb-2 flex items-center gap-2">
            <span className="text-xl">🎨</span> {brand.name}
          </div>
          <p className="text-[11px] text-[#8888aa] font-bold uppercase tracking-wider leading-relaxed">
            {brand.grades}
          </p>
        </div>
      ))}
    </div>
  </div>
);

const FaqSection = ({ faqs, openFaq, toggleFaq, title }) => (
  <div className="mb-24">
    <div className="text-[11px] font-mono tracking-[2px] text-[#8888aa] uppercase mb-3">Common Questions</div>
    <h3 className="font-serif text-3xl text-[#0f1f4b] mb-10">{title || 'Service FAQ'}</h3>
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

const FooterBanner = ({ navigate, activeTab }) => {
  const h3s = {
    interior: 'Ready to repaint your home?',
    exterior: 'Protect your building before the next monsoon',
    texture: 'Ready to transform your walls?',
    waterproofing: 'Fix the damp. Then paint.'
  };

  const themes = {
    interior: 'bg-gradient-to-r from-[#e05a2b] to-[#c44e22]',
    exterior: 'bg-gradient-to-r from-[#1a2f66] to-[#0f1f4b]',
    texture: 'bg-gradient-to-r from-[#5a4ed4] to-[#3d2eb0]',
    waterproofing: 'bg-gradient-to-r from-[#1d8a78] to-[#0d5a4f]'
  };

  return (
    <div className={`${themes[activeTab]} py-20 px-12 mb-20 rounded-[40px] max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 text-white`}>
      <div className="max-w-xl text-center md:text-left">
        <h3 className="font-serif text-3xl mb-4 font-bold">{h3s[activeTab]}</h3>
        <p className="opacity-80 leading-relaxed text-sm">Free site visit · Detailed written quote in 24 hours · No hidden charges. We serve all areas of Kolkata including Behala, Salt Lake, Ballygunge, and New Town.</p>
      </div>
      <div className="flex flex-col items-end gap-3 shrink-0">
        <button onClick={() => navigate('/contact')} className="bg-white text-ink font-bold px-10 py-4.5 rounded-xl shadow-2xl hover:bg-[#f5f0e8] transition-all whitespace-nowrap">
          📋 Get Free Estimate
        </button>
        <span className="text-[10px] opacity-50 font-bold uppercase tracking-widest">No obligation · Response in 2 hours</span>
      </div>
    </div>
  );
};

export default ServiceDetails;
