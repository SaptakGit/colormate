import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AdditionalServicesModal from './AdditionalServicesModal'
import interiorImg from '../assets/images/interior.png'
import exteriorImg from '../assets/images/exterior.png'
import textureImg from '../assets/images/texture.png'
import waterproofingImg from '../assets/images/waterproofing.png'

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const navigate = useNavigate();

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1200); // Trigger every time the page is opened
    return () => clearTimeout(timer);
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { 
      img: interiorImg, 
      title: 'Luxury Interior Finishes', 
      desc: 'Transform your living spaces with premium emulsion and flawless textures.',
      badge: 'INTERIOR'
    },
    { 
      img: exteriorImg, 
      title: 'Durable Exterior Protection', 
      desc: "Weather-resistant coatings built to survive Kolkata's harsh monsoons.",
      badge: 'EXTERIOR'
    },
    { 
      img: textureImg, 
      title: 'Artistic Texture Designs', 
      desc: 'Add depth and character to your walls with 100+ designer patterns.',
      badge: 'TEXTURE'
    },
    { 
      img: waterproofingImg, 
      title: 'Expert Waterproofing', 
      desc: 'Comprehensive seepage solutions with manufacturer-backed warranties.',
      badge: 'WATERPROOFING'
    }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <div className="page-anim min-h-screen">
      <AdditionalServicesModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
        navigate={navigate} 
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
              Looking for reliable house painters in Kolkata? We handle interior, exterior, texture and waterproofing, with trained painters, no subcontractors and no inflated quotes.
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
        <div className="flex-1 bg-[#FFD400] relative px-6 md:px-12 py-24 flex items-center justify-center">
          
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

      </section>

      {/* Services Summary Section */}
      <section className="bg-white py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-[11px] tracking-[3px] uppercase text-rust font-medium mb-3.5">What we do</div>
          <h2 className="font-display text-3xl md:text-5xl font-black text-ink leading-tight mb-4">Every painting service, done right</h2>
          <p className="text-warm-gray leading-loose max-w-lg mb-12">
            From a one-room flat to a full housing society, we handle every surface with the same care. Serving Kolkata, Howrah, Salt Lake, Ballygunge, Behala, New Town, Tollygunge,and other areas.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4.5 mt-12">
            {[
              { id: 'interior', icon: '🎨', title: 'Interior Painting', desc: 'Living rooms, bedrooms, kitchens and ceilings; wall putty, anti-fungal primer and 3-coat emulsion finish. Using Asian Paints, Berger, Dulux, Nerolac, and more.' },
              { id: 'exterior', icon: '🏠', title: 'Exterior Painting', desc: "Facade repaints built to survive Kolkata's monsoon. Surface prep, crack filling, scaffolding setup and WeatherCoat emulsion. 1-year warranty on every job." },
              { id: 'texture', icon: '✨', title: 'Texture Finish', desc: 'Sand finish, Royale Play, Venetian plaster and 3D geometric, 100+ designs. Applied by Asian Paints certified craftsmen.' },
              { id: 'waterproofing', icon: '💧', title: 'Waterproofing', desc: 'We find the source before we apply anything. Terrace, bathroom slab, external walls and water tanks. Manufacturer-backed warranty on all waterproofing products applied on all jobs.' }
            ].map((svc) => (
              <div 
                key={svc.title} 
                onClick={() => navigate(`/service-details/${svc.id}`)}
                className="bg-white border border-border rounded-[18px] p-7 cursor-pointer transition-all hover:border-rust/35 hover:-translate-y-1.5 hover:shadow-xl group relative overflow-hidden"
              >
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
            No fine print, no surprise charges. Just professional house painting done the right way, every single time.
          </p>
          <div className="grid md:grid-cols-3 gap-5.5 mt-12">
            {[
              { num: '01', title: 'Free site visit', desc: 'Our project manager visits your home, checks wall condition, measures the area and helps you choose colours, completely free, zero commitment.' },
              { num: '02', title: 'Detailed quote within 24h', desc: 'You get an itemised written quote covering material grade, labour cost, timeline and payment schedule. Nothing added later without your approval.' },
              { num: '03', title: 'We get to work', desc: 'Our certified in-house painters show up on time, cover your furniture, follow the 8-step process and hand over a clean home, on the date we promised.' }
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

      {/* Modern Showcase Slider */}
      <section className="bg-white py-24 px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative group">
            {/* Main Slider Container */}
            <div className="relative h-[400px] md:h-[600px] w-full rounded-[40px] overflow-hidden shadow-2xl shadow-ink/10">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'
                  }`}
                >
                  {/* Image Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent z-10"></div>
                  
                  {/* Image */}
                  <img 
                    src={slide.img} 
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Caption Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-10 md:p-16 z-20 transform transition-all duration-700 delay-300">
                    <div className={`transition-all duration-700 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                      <div className="inline-block px-4 py-1.5 rounded-full bg-[#FFD400] text-[#0A034F] text-[10px] font-black tracking-[2px] mb-4">
                        {slide.badge}
                      </div>
                      <h3 className="font-display text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
                        {slide.title}
                      </h3>
                      <p className="text-white/70 text-base md:text-lg max-w-xl leading-relaxed">
                        {slide.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Navigation Arrows */}
              <button 
                onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#FFD400] hover:text-[#0A034F] transition-all opacity-0 group-hover:opacity-100"
              >
                ←
              </button>
              <button 
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#FFD400] hover:text-[#0A034F] transition-all opacity-0 group-hover:opacity-100"
              >
                →
              </button>

              {/* Progress Bar (Bottom) */}
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/10 z-30">
                <div 
                  className="h-full bg-[#FFD400] transition-all duration-500 ease-linear"
                  style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'w-10 bg-[#0A034F]' : 'w-4 bg-[#0A034F]/20'
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Calculator CTA Section */}
      <section className="bg-sand/30 py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 border border-border bg-white p-12 md:p-20 rounded-[3rem] shadow-2xl shadow-accent/5">
          <div className="max-w-xl text-center md:text-left">
            <div className="text-accent text-[11px] font-bold tracking-[4px] uppercase mb-4">Cost Estimator</div>
            <h3 className="font-display text-3xl md:text-5xl font-black text-ink leading-tight mb-6">Want to know exactly what your project will cost?</h3>
            <p className="text-warm-gray leading-loose mb-0">
              Interior painting starts from ₹12/sqft, exterior from ₹16/sqft. Use our calculator to get a full breakdown by carpet area, paint grade and surface condition.
            </p>
          </div>
          <button 
            onClick={() => navigate('/calculator')}
            className="bg-accent text-white font-bold px-10 py-5 rounded-2xl shadow-xl shadow-accent/20 hover:bg-accent-light hover:scale-105 transition-all flex items-center gap-3 whitespace-nowrap"
          >
            Get Your Free Estimate
            <span className="text-xl">📊</span>
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-ink py-24 px-6 md:px-12 whitespace-normal overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <div className="text-[11px] tracking-[3px] uppercase text-gold font-medium mb-3.5">What clients say</div>
              <h2 className="font-display text-3xl md:text-5xl font-black text-white leading-tight">Trusted by thousands of Kolkata families</h2>
            </div>
            <div className="hidden md:flex gap-3">
              <button 
                onClick={() => document.getElementById('testimonial-scroll').scrollBy({ left: -400, behavior: 'smooth' })}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all cursor-pointer"
              >
                ←
              </button>
              <button 
                onClick={() => document.getElementById('testimonial-scroll').scrollBy({ left: 400, behavior: 'smooth' })}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all cursor-pointer"
              >
                →
              </button>
            </div>
          </div>

          <div 
            id="testimonial-scroll"
            className="flex gap-5 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-8 -mx-6 px-6 md:mx-0 md:px-0"
          >
            {[
              { author: 'Debashish Roy', area: 'Salt Lake, Kolkata', text: '"Booked ColourSure for our 3BHK repaint in Salt Lake. The team arrived on time, covered every piece of furniture and finished in 4 days. The putty work alone was better than what two other painters had quoted."' },
              { author: 'Anisha Sen', area: 'Behala, Kolkata', text: '"Our Behala flat had serious damp patches, three painters before ColourSure just painted over them. These guys fixed the source, waterproofed the wall and then painted. It\'s been 14 months and not a single patch."' },
              { author: 'Rajat Paul', area: 'New Town, Kolkata', text: '"Got Royale Play texture done in the living room and regular emulsion in the bedrooms. They put up a sample patch first, which I really appreciated. Clean finish, no mess left behind."' },
              { author: 'Sudipta Chakraborty', area: 'Thakurpukur, Kolkata', text: '"Shifted into our flat after ColourSure finished it. 3BHK done in 4 days, zero smell, zero mess. Walls look better than the day the building was built."' },
              { author: 'Amitava Bose', area: 'Dum Dum, Kolkata', text: '"Three painters quoted us. Two gave verbal numbers, one never called back. ColourSure sent a written quote the next morning. Hired them on the spot. Work was exactly what they promised."' },
              { author: 'Rekha Nair', area: 'Baranagar, Kolkata', text: '"Two contractors painted over our leaking terrace. Problem came back both times. ColourSure found the actual source, fixed it properly and painted after it cured. First monsoon since, completely dry."' }
            ].map((t) => (
              <div 
                key={t.author} 
                className="min-w-[320px] md:min-w-[400px] bg-white/5 border border-white/10 rounded-[18px] p-7.5 snap-center"
              >
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
          <h2 className="font-display text-3xl font-black text-white leading-tight mb-1.5">Ready to get started?</h2>
          <p className="text-sm text-white/80">Kolkata's most trusted professional painting services, free site visit and written quote within 24 hours.</p>
        </div>
        <button 
          className="bg-white text-rust border-none font-body text-sm font-semibold px-8 py-3.5 rounded-xl cursor-pointer transition-all hover:bg-cream whitespace-nowrap"
          onClick={() => navigate('/contact')}
        >
          Book Free Site Visit
        </button>
      </section>


      {/* FAQ Section */}
      <section className="bg-cream py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-[11px] tracking-[3px] uppercase text-rust font-medium mb-3.5 text-center md:text-left"></div>
          <h2 className="font-display text-3xl md:text-5xl font-black text-ink leading-tight mb-12 text-center md:text-left">Common questions from Kolkata homeowners</h2>
          
          <div className="space-y-4">
            {[
              { 
                q: "How much does house painting cost in Kolkata?", 
                a: "Interior painting starts from ₹12/sqft and exterior from ₹16/sqft. Final cost depends on paint grade, wall condition and carpet area. Book a free site visit for an exact written quote." 
              },
              { 
                q: "How long does house painting take in Kolkata?", 
                a: "A 2BHK interior repaint takes 3-4 days, a 3BHK takes 4-5 days with a team of four. This covers putty, drying, sanding, primer and two top coats, we never skip drying time between coats." 
              },
              { 
                q: "Which paint brand is best for Kolkata homes?", 
                a: "For interiors, Asian Paints Royale or Berger Silk, washable and mold-resistant, essential given Kolkata's humidity. For exteriors, WeatherCoat grade emulsion is the minimum. Standard exterior emulsion rarely survives more than two monsoons here." 
              },
              { 
                q: "Can I stay home while painting is going on?", 
                a: "Yes. We work room by room, sealing off areas with plastic sheeting and using low-VOC paints to keep odour minimal. For newborns or elderly family members, we suggest vacating individual rooms for 24 hours after each coat." 
              },
              { 
                q: "What warranty do you provide on waterproofing?", 
                a: "The warranty comes directly from Dr. Fixit, 7 years on Roofseal Classic, up to 10 years on Pidifin 2K, depending on the product used for your specific problem. We apply every product to exact manufacturer specifications so your warranty stays valid, the certificate is issued by Dr. Fixit, not us." 
              }
            ].map((faq, idx) => (
              <div key={idx} className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === idx ? 'border-rust shadow-lg shadow-rust/5' : 'border-border'}`}>
                <button 
                  onClick={() => toggleFaq(idx)} 
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
                >
                  <span className={`font-display text-lg font-bold transition-colors ${openFaq === idx ? 'text-rust' : 'text-ink group-hover:text-rust'}`}>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openFaq === idx ? 'bg-rust text-white rotate-45' : 'bg-rust/5 text-rust'}`}>
                    <span className="text-xl font-light">+</span>
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="px-6 md:px-8 pb-8 text-[15px] text-warm-gray leading-relaxed border-t border-border pt-6">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
