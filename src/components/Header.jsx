import { useState } from 'react'

const Header = ({ activePage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'areas', label: 'Areas' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavigate = (id) => {
    onNavigate(id);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-[200] bg-cream border-b border-border flex items-center justify-between px-6 md:px-12 h-16.5">
      <div 
        className="font-display text-xl md:text-2xl font-black text-rust cursor-pointer select-none"
        onClick={() => handleNavigate('home')}
      >
        Color<span className="text-ink">Mate</span>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-0.5">
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => handleNavigate(link.id)}
            className={`
              bg-transparent border-none font-body text-[13px] px-3 py-2 rounded-md cursor-pointer transition-all font-medium
              ${activePage === link.id ? 'text-ink bg-rust/8' : 'text-warm-gray hover:text-ink hover:bg-rust/8'}
            `}
          >
            {link.label}
          </button>
        ))}
      </div>

      <button 
        className="hidden md:block bg-rust text-white border-none font-body text-[13px] font-medium px-4.5 py-2.5 rounded-lg cursor-pointer transition-all hover:bg-rust-light"
        onClick={() => handleNavigate('contact')}
      >
        Get Free Quote
      </button>

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
              onClick={() => handleNavigate(link.id)}
              className="text-left bg-transparent border-none font-body text-base text-ink p-3 rounded-md cursor-pointer transition-all hover:bg-rust/8"
            >
              {link.label}
            </button>
          ))}
          <button 
            className="text-left bg-transparent border-none font-body text-base text-rust font-semibold p-3 rounded-md cursor-pointer transition-all hover:bg-rust/8"
            onClick={() => handleNavigate('contact')}
          >
            Get Free Quote →
          </button>
        </div>
      )}
    </nav>
  )
}

export default Header
