import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'services', label: 'Services', path: '/services' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'gallery', label: 'Gallery', path: '/gallery' },
    { id: 'areas', label: 'Areas', path: '/areas' },
    { id: 'blog', label: 'Blog', path: '/blog' },
    { id: 'contact', label: 'Contact', path: '/contact' },
  ];

  const handleNavigate = (path) => {
    navigate(path);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-[200] bg-cream border-b border-border flex items-center justify-between px-6 md:px-12 h-16.5">
      <div 
        className="cursor-pointer select-none"
        onClick={() => handleNavigate('/')}
      >
        <img 
          src="/images/logo/color_sure_logo_cropped.png" 
          alt="ColorSure Logo" 
          className="h-8 md:h-10 object-contain"
        />
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-0.5">
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => handleNavigate(link.path)}
            className={`
              bg-transparent border-none font-body text-[13px] px-3 py-2 rounded-md cursor-pointer transition-all font-medium
              ${isActive(link.path) ? 'text-ink bg-rust/8' : 'text-warm-gray hover:text-ink hover:bg-rust/8'}
            `}
          >
            {link.label}
          </button>
        ))}
      </div>

      <div className="hidden md:flex items-center gap-6">
        <a 
          href="tel:+919830000000"
          className="flex items-center gap-2 text-[13px] font-bold text-ink hover:text-rust transition-colors"
        >
          <span className="text-rust text-base">📞</span>
          +91 98300 00000
        </a>

        <button 
          className="bg-rust text-white border-none font-body text-[13px] font-medium px-4.5 py-2.5 rounded-lg cursor-pointer transition-all hover:bg-rust-light"
          onClick={() => handleNavigate('/contact')}
        >
          Get Free Quote
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-1"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className={`block w-5.5 h-0.5 bg-ink rounded-full transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-5.5 h-0.5 bg-ink rounded-full transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-5.5 h-0.5 bg-ink rounded-full transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-16.5 left-0 right-0 bg-cream border-b border-border p-4 px-6 z-[199] flex flex-col gap-1 animate-fi">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavigate(link.path)}
              className="text-left bg-transparent border-none font-body text-base text-ink p-3 rounded-md cursor-pointer transition-all hover:bg-rust/8"
            >
              {link.label}
            </button>
          ))}
          <div className="h-px bg-border my-2 mx-3"></div>
          <a 
            href="tel:+919830000000"
            className="flex items-center gap-3 text-ink font-bold p-3 rounded-md hover:bg-rust/8 transition-all"
          >
            <span className="text-rust text-xl">📞</span>
            +91 98300 00000
          </a>
          <button 
            className="text-left bg-transparent border-none font-body text-base text-rust font-semibold p-3 rounded-md cursor-pointer transition-all hover:bg-rust/8"
            onClick={() => handleNavigate('/contact')}
          >
            Get Free Quote →
          </button>
        </div>
      )}
    </nav>
  )
}

export default Header
