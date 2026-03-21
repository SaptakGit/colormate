import { useState } from 'react'

const Gallery = ({ onNavigate }) => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'interior', label: 'Interior' },
    { id: 'exterior', label: 'Exterior' },
    { id: 'texture', label: 'Texture' },
    { id: 'waterproofing', label: 'Waterproofing' },
  ];

  const items = [
    { id: 1, cat: 'interior', title: '3BHK Full Interior', area: 'Behala, Kolkata', bg: 'from-[#f7d4b8] to-[#e8a87c]', icon: '🛋️', tall: true },
    { id: 2, cat: 'exterior', title: 'Apartment Exterior', area: 'Salt Lake, Kolkata', bg: 'from-[#b8d4f0] to-[#7aabda]', icon: '🏠', tall: false },
    { id: 3, cat: 'texture', title: 'Venetian Plaster', area: 'Ballygunge, Kolkata', bg: 'from-[#e8d4f0] to-[#c8a8e0]', icon: '✨', tall: false },
    { id: 4, cat: 'interior', title: 'Bedroom Feature Wall', area: 'New Town, Kolkata', bg: 'from-[#d4f0d8] to-[#8cd4a0]', icon: '🛏️', tall: false },
    { id: 5, cat: 'waterproofing', title: 'Terrace Waterproofing', area: 'Howrah', bg: 'from-[#d4e8f8] to-[#9cc4e8]', icon: '💧', tall: false },
    { id: 6, cat: 'texture', title: '3D Geometric Texture', area: 'Park Street, Kolkata', bg: 'from-[#f8e8d0] to-[#e8c48c]', icon: '🎭', tall: true },
    { id: 7, cat: 'exterior', title: 'Commercial Building', area: 'Dum Dum, Kolkata', bg: 'from-[#f0d4d4] to-[#e09898]', icon: '🏢', tall: false },
    { id: 8, cat: 'interior', title: 'Kitchen & Dining', area: 'Tollygunge, Kolkata', bg: 'from-[#d8f4f0] to-[#8cd8d0]', icon: '🍳', tall: false },
    { id: 9, cat: 'waterproofing', title: 'Bathroom Waterproofing', area: 'Rajarhat, Kolkata', bg: 'from-[#e0eaf8] to-[#a0bce8]', icon: '🚿', tall: false },
  ];

  const filteredItems = items.filter(item => filter === 'all' || item.cat === filter);

  return (
    <div className="page-anim">
      <section className="pt-20 pb-12 px-6 md:px-12 bg-cream/50">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <div className="text-[11px] tracking-[3px] uppercase text-rust font-medium mb-3.5">Our Work</div>
          <h1 className="font-display text-4xl md:text-6xl font-black text-ink leading-tight mb-5">2,400+ projects. Every one tells a story.</h1>
          <p className="text-warm-gray leading-loose max-w-2xl mb-8">
            Browse our portfolio of interior, exterior, texture and waterproofing projects across Kolkata.
          </p>
        </div>
      </section>

      <section className="pb-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto mb-10 overflow-x-auto no-scrollbar">
          <div className="flex gap-2 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`
                  border-none font-body text-[13px] font-medium px-5 py-2.5 rounded-full cursor-pointer transition-all
                  ${filter === cat.id ? 'bg-rust text-white shadow-lg shadow-rust/20' : 'bg-white text-warm-gray border border-border hover:bg-white'}
                `}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-24 auto-rows-[230px]">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className={`
                group rounded-[18px] overflow-hidden cursor-pointer relative transition-all
                ${item.tall ? 'row-span-2' : 'row-span-1'}
              `}
            >
              <div className={`w-full h-full flex items-center justify-center text-[34px] relative transition-transform duration-500 group-hover:scale-105 bg-gradient-to-br ${item.bg}`}>
                {item.icon}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-5">
                  <div className="text-white text-[13.5px] font-medium transition-transform duration-300 translate-y-4 group-hover:translate-y-0">{item.title}</div>
                  <div className="text-white/65 text-[11.5px] mt-1 transition-transform duration-300 translate-y-4 group-hover:translate-y-0 delay-75">{item.area}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-rust py-16 px-6 md:px-12 flex flex-wrap items-center justify-between gap-10">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-black text-white leading-tight mb-1.5">Like what you see?</h2>
          <p className="text-sm text-white/80">Get a free quote for your home — site visit within 24 hours.</p>
        </div>
        <button 
          className="bg-white text-rust border-none font-body text-sm font-semibold px-8 py-3.5 rounded-xl cursor-pointer transition-all hover:bg-cream whitespace-nowrap"
          onClick={() => onNavigate('contact')}
        >
          Get Free Quote
        </button>
      </section>
    </div>
  )
}

export default Gallery
