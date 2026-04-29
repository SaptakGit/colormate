import { useState, useEffect } from 'react'

const AdditionalServicesModal = ({ isOpen, onClose, navigate }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6 md:p-12">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-ink/60 backdrop-blur-md animate-fi"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-[2.5rem] overflow-hidden shadow-2xl animate-modal-in border border-white/20 flex flex-col md:flex-row">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 rounded-full bg-warm/20 flex items-center justify-center text-ink hover:bg-rust hover:text-white transition-all z-[30] group backdrop-blur-sm"
        >
          <span className="text-xl group-hover:rotate-90 transition-transform">✕</span>
        </button>

        <div className="flex flex-col md:flex-row w-full overflow-y-auto">
          {/* Left Column: Image/Visual */}
          <div className="md:w-2/5 bg-ink relative min-h-[220px] md:min-h-full overflow-hidden flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800"
              alt="Interior Design"
              className="absolute inset-0 w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-1000 opacity-80"
            />
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20 pr-6 md:pr-10">
              <div className="text-rust text-[9px] md:text-[10px] font-bold tracking-[3px] uppercase mb-1 md:mb-2">New Vertical</div>
              <h3 className="font-display text-3xl md:text-4xl font-black text-white leading-tight">Beyond Painting</h3>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="md:w-3/5 p-6 md:p-14 bg-white">
            <div className="space-y-6 md:space-y-8">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-black text-ink mb-3 md:mb-4">Complete Home Solutions</h2>
                <p className="text-[13px] md:text-sm text-warm-gray leading-relaxed mb-4 md:mb-6">Explore our newly launched premium services designed to transform your entire living space with the same expertise and trust as ColorSure.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="group p-4 md:p-5 rounded-2xl bg-sand/20 border border-border/50 hover:bg-white hover:border-rust/30 hover:shadow-xl hover:shadow-rust/5 transition-all">
                  <div className="text-xl md:text-2xl mb-2 md:mb-3">📐</div>
                  <h4 className="font-bold text-ink text-sm md:text-base mb-1">Interior Design</h4>
                  <p className="text-[11px] md:text-[12px] text-muted leading-relaxed">Expert 3D modeling and space planning.</p>
                </div>
                <div className="group p-4 md:p-5 rounded-2xl bg-sand/20 border border-border/50 hover:bg-white hover:border-rust/30 hover:shadow-xl hover:shadow-rust/5 transition-all">
                  <div className="text-xl md:text-2xl mb-2 md:mb-3">🍳</div>
                  <h4 className="font-bold text-ink text-sm md:text-base mb-1">Modular Kitchen</h4>
                  <p className="text-[11px] md:text-[12px] text-muted leading-relaxed">Modern and ergonomic designs.</p>
                </div>
                <div className="group p-4 md:p-5 rounded-2xl bg-sand/20 border border-border/50 hover:bg-white hover:border-rust/30 hover:shadow-xl hover:shadow-rust/5 transition-all">
                  <div className="text-xl md:text-2xl mb-2 md:mb-3">🏗️</div>
                  <h4 className="font-bold text-ink text-sm md:text-base mb-1">Civil & Renovation</h4>
                  <p className="text-[11px] md:text-[12px] text-muted leading-relaxed">End-to-end renovation services.</p>
                </div>
                <div className="group p-4 md:p-5 rounded-2xl bg-sand/20 border border-border/50 hover:bg-white hover:border-rust/30 hover:shadow-xl hover:shadow-rust/5 transition-all">
                  <div className="text-xl md:text-2xl mb-2 md:mb-3">✨</div>
                  <h4 className="font-bold text-ink text-sm md:text-base mb-1">False Ceiling</h4>
                  <p className="text-[11px] md:text-[12px] text-muted leading-relaxed">Designer ceilings with lighting.</p>
                </div>
              </div>

              <div className="pt-4 md:pt-6 flex flex-col sm:flex-row gap-4 items-center">
                <button 
                  onClick={() => { navigate('/contact'); onClose(); }}
                  className="w-full sm:w-auto bg-rust text-white font-bold px-10 py-4 rounded-xl shadow-lg shadow-rust/20 hover:bg-rust-light hover:-translate-y-1 transition-all text-sm md:text-base"
                >
                  Enquire Now
                </button>
                <div className="text-[10px] md:text-[11px] font-bold text-warm-gray flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rust animate-pulse"></span>
                  Kolkata Exclusive
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalServicesModal;
