const Services = ({ onNavigate }) => {
  const services = [
    {
      title: 'Interior Painting',
      icon: '🎨',
      bg: 'linear-to-br from-[#fde8d8] to-[#f5c9a8]',
      price: 'From Rs12/sq ft',
      desc: 'Transform your living spaces using Asian Paints Royale, Berger Silk and Dulux Velvet Touch. Flawless, lasting finishes on every surface in your Kolkata home.',
      features: [
        'Living rooms, bedrooms, kitchen & bathrooms',
        'Ceiling painting with anti-fungal primer',
        'Feature walls & accent finishes',
        'Putty + primer + 2-coat finish as standard',
        'Furniture masking & post-work cleanup included'
      ]
    },
    {
      title: 'Exterior Painting',
      icon: '🏠',
      bg: 'linear-to-br from-[#dce8f5] to-[#b8d4ed]',
      price: 'From Rs18/sq ft',
      desc: "Kolkata's climate demands tough exterior protection. We use weather-shield and UV-resistant paints to protect your facade from heavy rain, humidity and sun damage year-round.",
      features: [
        'Weather-resistant exterior emulsions',
        'Surface prep, crack-filling & sealing',
        'Scaffolding setup included for high-rise buildings',
        'Suitable for residential & commercial properties',
        '2-year exterior painting warranty'
      ]
    },
    {
      title: 'Texture Finish',
      icon: '✨',
      bg: 'linear-to-br from-[#f0e8f5] to-[#dcc8ec]',
      price: 'From Rs35/sq ft',
      desc: 'Add depth and luxury to your walls with our decorative texture finishes. From rustic sand to modern 3D panels — we create walls that become the centrepiece of any room.',
      features: [
        'Sand texture, stucco & rustic plaster',
        'Venetian plaster & marble effect',
        '3D geometric & panel textures',
        'Metallic & shimmer finishes',
        'Feature wall design consultation included'
      ]
    },
    {
      title: 'Waterproofing',
      icon: '💧',
      bg: 'linear-to-br from-[#d8f0e8] to-[#a8dcc8]',
      price: 'From Rs45/sq ft',
      desc: "Protect your home from Kolkata's intense monsoons using Dr. Fixit and BASF systems. Permanently seal terraces, bathrooms, basements and walls against water ingress.",
      features: [
        'Terrace & roof waterproofing',
        'Bathroom & wet area treatment',
        'Basement & underground wall sealing',
        'Crack injection & structural repair',
        '5-year material warranty'
      ]
    }
  ];

  return (
    <div className="page-anim">
      <section className="pt-20 pb-12 px-6 md:px-12 bg-cream/50">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <div className="text-[11px] tracking-[3px] uppercase text-rust font-medium mb-3.5">Our Services</div>
          <h1 className="font-display text-4xl md:text-6xl font-black text-ink leading-tight mb-5">Every paint job, done right</h1>
          <p className="text-warm-gray leading-loose max-w-2xl mb-12">
            From a single bedroom to a full residential tower — Color Mate brings expertise, certified painters and premium materials to every project in Kolkata.
          </p>
        </div>
      </section>

      <section className="pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-7">
          {services.map((svc) => (
            <div key={svc.title} className="bg-white border border-border rounded-3xl overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-1">
              <div className={`h-44 flex items-center justify-center text-6xl bg-${svc.bg}`}>
                <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${svc.bg.split('bg-')[1] || svc.bg}`}>
                  {svc.icon}
                </div>
              </div>
              <div className="p-8 md:p-10">
                <h3 className="font-display text-2xl font-bold text-ink mb-3">{svc.title}</h3>
                <p className="text-sm text-warm-gray leading-relaxed mb-6">{svc.desc}</p>
                <ul className="list-none p-0 flex flex-col gap-2.5 mb-7">
                  {svc.features.map((feat) => (
                    <li key={feat} className="text-[13.5px] text-ink pl-6 relative before:content-['→'] before:absolute before:left-0 before:text-rust before:text-xs">
                      {feat}
                    </li>
                  ))}
                </ul>
                <div className="inline-block bg-rust/10 text-rust text-[12px] font-semibold px-3.5 py-1.5 rounded-full">
                  {svc.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-rust py-16 px-6 md:px-12 flex flex-wrap items-center justify-between gap-10">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-black text-white leading-tight mb-1.5">Not sure what you need?</h2>
          <p className="text-sm text-white/80">Our expert will visit your home, assess & recommend — completely free.</p>
        </div>
        <button 
          className="bg-white text-rust border-none font-body text-sm font-semibold px-8 py-3.5 rounded-xl cursor-pointer transition-all hover:bg-cream whitespace-nowrap"
          onClick={() => onNavigate('contact')}
        >
          Book Free Assessment
        </button>
      </section>
    </div>
  )
}

export default Services
