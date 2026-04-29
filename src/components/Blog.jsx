import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

const blogPosts = [
  {
    id: 'choosing-colors',
    title: 'How to choose the right colors for your Kolkata home',
    date: 'March 15, 2025',
    category: 'Guides',
    image: '🎨',
    desc: 'Picking colors for a humid climate like Kolkata requires more than just aesthetics. Learn about light reflectance and heat absorption.',
    content: '<h2>Introduction</h2><p>Choosing the right paint colors is about more than just what looks good in a catalog. In a city like Kolkata, where humidity is high and sunlight can be intense, your color choice affects everything from the temperature inside your home to how long the paint lasts without fading.</p><h3>The Science of LRV (Light Reflectance Value)</h3><p>LRV is a scale from 0% (black) to 100% (white). In Kolkata homes, we generally recommend colors with an LRV of 50% or higher for exterior walls to minimize heat absorption during our long summers.</p><h3>Humidity and Pigment Stability</h3><p>Certain pigments, especially deep blues and reds, can react with the lime in your plaster under high humidity. We\'ll guide you on which pigments are stable for our climate.</p>'
  },
  {
    id: 'waterproofing-guide',
    title: 'Monsoon Proofing: A complete guide to waterproofing',
    date: 'Feb 28, 2025',
    category: 'Expert Tips',
    image: '💧',
    desc: "Don't wait for the leaks to start. Learn the 5 critical areas every Kolkata homeowner should check before June.",
    content: '<h2>The 5 Critical Areas</h2><ol><li><b>The Terrace:</b> Check for stagnant water and hairline cracks in the parapet wall.</li><li><b>External Pipes:</b> Inspect the sealing around wastewater pipes entering the walls.</li><li><b>Window Perimeters:</b> Old putty often fails, allowing water to seep into the internal plaster.</li><li><b>The Water Tank:</b> Often overlooked, a leaking tank can cause dampness levels from the top floor down.</li><li><b>Rising Damp:</b> Check the ground floor skirting level for salt efflorescence.</li></ol>'
  },
  {
    id: 'texture-trends',
    title: 'Top 5 wall texture trends in 2025',
    date: 'Jan 12, 2025',
    category: 'Design',
    image: '✨',
    desc: 'From Venetian plaster to 3D geometric designs — discover what is trending in luxury Kolkata apartments this year.',
    content: '<h2>Trending Now</h2><p>Textures are the single most popular request in New Town and Ballygunge apartments this year. People are moving away from flat, single-color walls towards finishes that have depth and character.</p><ul><li><b>Venetian Plaster:</b> The timeless Italian luxury look.</li><li><b>Metallic Shimmer:</b> Perfect for dining room feature walls.</li><li><b>Concrete Wash:</b> For the industrial-chic look.</li></ul>'
  }
];

const Blog = () => {
  const navigate = useNavigate();
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Guides', 'Expert Tips', 'Design'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  if (selectedPostId) {
    const post = blogPosts.find(p => p.id === selectedPostId);
    return (
      <div className="page-anim">
        <button 
          className="flex items-center gap-2 bg-transparent border-none font-body text-[13.5px] font-medium text-warm-gray cursor-pointer px-6 md:px-12 pt-10 transition-colors hover:text-rust"
          onClick={() => setSelectedPostId(null)}
        >
          &#8592; Back to Blog
        </button>

        <article className="max-w-3xl mx-auto px-6 pt-12 pb-24">
          <div className="text-[11px] tracking-[3px] uppercase text-rust font-medium mb-3.5">{post.category}</div>
          <h1 className="font-display text-3xl md:text-5xl font-black text-ink leading-tight mb-5">{post.title}</h1>
          <div className="text-[12px] text-warm-gray mb-9">Published on {post.date} by ColorSure Editorial</div>
          <div className="h-64 rounded-3xl bg-cream flex items-center justify-center text-7xl mb-12 border border-border">
            {post.image}
          </div>
          <div className="prose prose-sm max-w-none text-ink/75 leading-loose" dangerouslySetInnerHTML={{ __html: post.content }}></div>
          
          <div className="mt-16 pt-9 border-t border-border flex flex-col items-center text-center">
            <h3 className="font-display text-xl font-bold text-ink mb-1.5">Found this helpful?</h3>
            <p className="text-sm text-warm-gray mb-5.5">Get expert advice tailored to your home.</p>
            <button 
              className="bg-rust text-white border-none font-body text-sm font-medium px-8 py-3 rounded-xl cursor-pointer transition-all hover:bg-rust-light"
              onClick={() => navigate('/contact')}
            >
              Book Free Site Visit
            </button>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="page-anim pb-24">
      <section className="pt-20 pb-16 px-6 md:px-12 bg-cream/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="max-w-2xl text-center md:text-left">
            <div className="text-[11px] tracking-[3px] uppercase text-rust font-medium mb-3.5">The Blog</div>
            <h1 className="font-display text-4xl md:text-6xl font-black text-ink leading-tight mb-5">Painting tips, trends & local advice</h1>
            <p className="text-warm-gray leading-loose mb-0">
              Expert guides on choosing colors, waterproofing for monsoons and maintaining your Kolkata home.
            </p>
          </div>
          <div className="w-full md:w-72 relative">
            <input 
              type="text" 
              placeholder="Search articles..."
              className="w-full bg-white border border-border font-body text-[13px] p-3 px-4.5 rounded-xl outline-none focus:border-rust"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="absolute right-4 top-3 text-warm-gray/50">🔍</span>
          </div>
        </div>
      </section>

      <section className="mt-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-2.5 mb-10 overflow-x-auto no-scrollbar pb-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                  border-none font-body text-[12px] font-semibold px-4.5 py-2.5 rounded-full cursor-pointer transition-all
                  ${activeCategory === cat ? 'bg-ink text-white shadow-lg' : 'bg-white text-warm-gray border border-border hover:bg-cream'}
                `}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map(post => (
              <div 
                key={post.id}
                className="bg-white border border-border rounded-2xl p-6.5 cursor-pointer flex flex-col transition-all hover:-translate-y-1.5 hover:shadow-2xl hover:border-rust/30 group"
                onClick={() => setSelectedPostId(post.id)}
              >
                <div className="h-44 rounded-xl bg-cream flex items-center justify-center text-4xl mb-5 group-hover:scale-[1.02] transition-transform">
                  {post.image}
                </div>
                <div className="text-[10px] tracking-[1.5px] uppercase font-bold text-rust mb-2">{post.category}</div>
                <h3 className="font-display text-lg font-bold text-ink mb-3 group-hover:text-rust transition-colors leading-tight">{post.title}</h3>
                <p className="text-[12.5px] text-warm-gray leading-relaxed mb-6 flex-grow">{post.desc}</p>
                <div className="flex items-center justify-between pt-5 border-t border-border">
                  <span className="text-[11px] text-warm-gray">{post.date}</span>
                  <span className="text-[11.5px] font-bold text-rust">Read more &rarr;</span>
                </div>
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="py-24 text-center">
              <div className="text-4xl mb-3.5">🔎</div>
              <h3 className="font-display text-xl font-bold text-ink">No articles found</h3>
              <p className="text-sm text-warm-gray">Try a different search term or category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Blog
