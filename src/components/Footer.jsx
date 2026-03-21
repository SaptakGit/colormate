const Footer = ({ onNavigate }) => {
  const handleNavigate = (id) => {
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-ink p-12 md:p-16 text-white/60">
      <div className="max-w-7xl mx-auto grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12">
        <div>
          <div className="font-display text-2xl font-black text-white mb-3.5">
            Color<span className="text-rust">Mate</span>
          </div>
          <p className="text-[13px] leading-relaxed max-w-xs">
            Professional painting services across Kolkata — interior, exterior, textures & waterproofing. Trusted by 2,400+ families since 2010.
          </p>
        </div>

        <div>
          <div className="text-[11px] font-semibold tracking-[2.5px] uppercase text-white/35 mb-4.5">Services</div>
          <ul className="list-none flex flex-col gap-2.5 p-0">
            {['Interior Painting', 'Exterior Painting', 'Texture Finish', 'Waterproofing'].map((service) => (
              <li 
                key={service}
                className="text-[13.5px] cursor-pointer transition-colors hover:text-white"
                onClick={() => handleNavigate('services')}
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-[11px] font-semibold tracking-[2.5px] uppercase text-white/35 mb-4.5">Company</div>
          <ul className="list-none flex flex-col gap-2.5 p-0">
            {['About Us', 'Gallery', 'Blog', 'Contact'].map((item) => (
              <li 
                key={item}
                className="text-[13.5px] cursor-pointer transition-colors hover:text-white"
                onClick={() => handleNavigate(item.toLowerCase().replace(' ', ''))}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-[11px] font-semibold tracking-[2.5px] uppercase text-white/35 mb-4.5">Areas Served</div>
          <ul className="list-none flex flex-col gap-2.5 p-0">
            {['Behala', 'Salt Lake', 'Ballygunge', 'Howrah', 'New Town', 'Tollygunge'].map((area) => (
              <li 
                key={area}
                className="text-[13.5px] cursor-pointer transition-colors hover:text-white"
                onClick={() => handleNavigate('areas')}
              >
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 border-t border-white/10 flex flex-wrap justify-between gap-2 text-xs text-white/30">
        <span>© 2025 ColorMate. All rights reserved. Kolkata, West Bengal.</span>
        <span>hello@colormate.in</span>
      </div>
    </footer>
  )
}

export default Footer
