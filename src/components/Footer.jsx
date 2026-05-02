import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-ink p-12 md:p-16 text-white/60">
      <div className="max-w-7xl mx-auto grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12">
        <div>
          <div 
            className="mb-4 cursor-pointer select-none"
            onClick={() => handleNavigate('/')}
          >
            <img 
              src="/images/logo/color_sure_logo_white_no_bg_cropped.png" 
              alt="ColorSure Logo" 
              className="h-10 object-contain"
            />
          </div>
          <p className="text-[13px] leading-relaxed max-w-xs">
            ColourSure is a professional painting company in Kolkata offering interior, exterior, textures and waterproofing services, trusted by 100+ families.
          </p>
        </div>

        <div>
          <div className="text-[11px] font-semibold tracking-[2.5px] uppercase text-white/35 mb-4.5">Services</div>
          <ul className="list-none flex flex-col gap-2.5 p-0">
            {['Interior Painting', 'Exterior Painting', 'Texture Finish', 'Waterproofing'].map((service) => (
              <li 
                key={service}
                className="text-[13.5px] cursor-pointer transition-colors hover:text-white"
                onClick={() => handleNavigate('/services')}
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-[11px] font-semibold tracking-[2.5px] uppercase text-white/35 mb-4.5">Company</div>
          <ul className="list-none flex flex-col gap-2.5 p-0">
            {[
              { label: 'About Us', path: '/about' },
              { label: 'Gallery', path: '/gallery' },
              { label: 'Blog', path: '/blog' },
              { label: 'Contact', path: '/contact' }
            ].map((item) => (
              <li 
                key={item.label}
                className="text-[13.5px] cursor-pointer transition-colors hover:text-white"
                onClick={() => handleNavigate(item.path)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-[11px] font-semibold tracking-[2.5px] uppercase text-white/35 mb-4.5">Office Address</div>
          <address className="not-italic text-[13.5px] leading-relaxed">
            G/86 755/3 SHKB Sarani<br />
            Jawpur Road SDDM:10,<br />
            Kolkata 700074
          </address>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 border-t border-white/10 flex flex-wrap justify-between gap-6 text-xs text-white/30">
        <span>© 2026 ColorSure. All rights reserved. Kolkata, West Bengal.</span>
        <div className="flex gap-6">
          <span className="cursor-pointer hover:text-white transition-colors" onClick={() => handleNavigate('/disclaimer')}>Disclaimer</span>
          <span className="cursor-pointer hover:text-white transition-colors" onClick={() => handleNavigate('/terms')}>Terms & Conditions</span>
          <span className="cursor-pointer hover:text-white transition-colors" onClick={() => handleNavigate('/privacy')}>Privacy Policy</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
