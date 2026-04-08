import { useState, useEffect, useRef } from 'react'

const CalculatorPage = ({ onNavigate }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    scope: 'interior',
    bhk: '2BHK',
    area: 900,
    type: 'Re-Painting',
    quality: 'Premium'
  });

  const bhkMapping = {
    '1BHK': 600,
    '2BHK': 900,
    '3BHK': 1300,
    '4BHK': 1800,
    'Villa': 2500
  };

  const rates = {
    Economy: { rate: 12, brands: ['Asian Paints Tractor', 'Berger Bison'] },
    Premium: { rate: 22, brands: ['Asian Paints Apcolite', 'Berger Silk'] },
    Luxury: { rate: 38, brands: ['Asian Paints Royale', 'Berger Silk Glamor'] }
  };

  const handleBhkSelect = (bhk) => {
    setFormData({ ...formData, bhk, area: bhkMapping[bhk] });
  };

  const calculateEstimate = () => {
    const surfaceArea = formData.area * 3.5;
    const baseRate = rates[formData.quality].rate;
    const typeMult = formData.type === 'Fresh Painting' ? 1.3 : 1.0;
    
    const total = Math.round(surfaceArea * baseRate * typeMult);
    const material = Math.round(total * 0.45);
    const labor = Math.round(total * 0.40);
    const prep = Math.round(total * 0.15);
    
    return { total, material, labor, prep };
  };

  const estimate = calculateEstimate();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const nextStep = () => {
    if (step < 4) setStep(s => s + 1);
  };
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step, isSubmitted]);

  return (
    <div className="page-anim min-h-screen bg-warm/30 pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        {!isSubmitted && (
          <div className="text-center mb-12">
            <div className="text-accent text-[11px] font-bold tracking-[4px] uppercase mb-4">Cost Estimator</div>
            <h1 className="font-display text-4xl md:text-5xl font-black text-ink mb-6">Calculate Your Painting Budget</h1>
            
            {/* Progress Bar */}
            <div className="flex items-center justify-center gap-4 mt-8">
              {[1, 2, 3, 4].map(num => (
                <div key={num} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${step >= num ? 'bg-accent text-white shadow-lg shadow-accent/30' : 'bg-white text-muted border border-border'}`}>
                    {num}
                  </div>
                  {num < 4 && <div className={`w-8 md:w-16 h-1 mx-2 rounded-full transition-all ${step > num ? 'bg-accent' : 'bg-border'}`}></div>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Form Card */}
        <div className="bg-white rounded-[2.5rem] border border-border p-8 md:p-12 shadow-2xl shadow-accent/5">
          
          {isSubmitted ? (
            /* SUCCESS STATE */
            <div className="text-center py-10 space-y-8">
              <div className="w-24 h-24 bg-accent/10 text-accent rounded-full flex items-center justify-center text-5xl mx-auto mb-6">
                ✅
              </div>
              <div>
                <h2 className="font-display text-3xl font-black text-ink mb-4">Request Received!</h2>
                <p className="text-muted text-lg max-w-md mx-auto leading-relaxed">
                  Thank you for sharing your project details. Our expert consultant will review your requirements for <strong>{formData.bhk} {formData.scope}</strong> and contact you within 24 hours with a customized formal quote.
                </p>
              </div>
              <div className="pt-8 flex flex-col sm:flex-row justify-center gap-4">
                <button 
                  onClick={() => onNavigate('home')}
                  className="bg-accent text-white font-bold px-12 py-4 rounded-xl shadow-lg shadow-accent/20 hover:bg-accent/90 transition-all"
                >
                  Back to Home
                </button>
                <button 
                  onClick={() => { setIsSubmitted(false); setStep(1); }}
                  className="bg-warm/30 text-ink font-bold px-12 py-4 rounded-xl hover:bg-warm/50 transition-all"
                >
                  New Estimate
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* STEP 1: Basic Scope */}
              {step === 1 && (
                <div className="space-y-10">
                  <div className="text-center">
                    <h2 className="font-display text-2xl font-bold text-ink mb-2">Where do you want to paint?</h2>
                    <p className="text-muted text-sm px-4">Choose the primary scope of your project.</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    {['interior', 'exterior'].map(s => (
                      <button 
                        key={s}
                        onClick={() => setFormData({ ...formData, scope: s })}
                        className={`p-8 rounded-3xl border-2 transition-all flex flex-col items-center gap-4 ${formData.scope === s ? 'border-accent bg-accent/5' : 'border-border bg-white hover:border-accent/40'}`}
                      >
                        <span className="text-4xl">{s === 'interior' ? '🛋️' : '🏠'}</span>
                        <span className="font-bold capitalize">{s}</span>
                      </button>
                    ))}
                  </div>

                  <div className="text-center mt-12">
                    <h3 className="font-display text-xl font-bold text-ink mb-6">Select House Type</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                      {Object.keys(bhkMapping).map(b => (
                        <button 
                          key={b}
                          onClick={() => handleBhkSelect(b)}
                          className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${formData.bhk === b ? 'bg-accent text-white shadow-xl shadow-accent/30 scale-105' : 'bg-warm/50 text-muted hover:bg-warm border border-transparent'}`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Dimensions & Condition */}
              {step === 2 && (
                <div className="space-y-12">
                  <div className="text-center">
                    <h2 className="font-display text-2xl font-bold text-ink mb-2">Confirm Dimensions</h2>
                    <p className="text-muted text-sm">We've estimated the area, but you can adjust it for precision.</p>
                  </div>

                  <div className="bg-warm/20 p-10 rounded-[2rem] border border-border">
                    <div className="flex justify-between items-end mb-6">
                      <div>
                        <div className="text-[11px] font-bold uppercase text-muted tracking-wide mb-1">Carpet Area</div>
                        <div className="font-display text-4xl font-black text-ink">{formData.area} <span className="text-lg font-bold text-muted">sq ft</span></div>
                      </div>
                      <div className="text-right">
                        <div className="text-[11px] font-bold uppercase text-muted tracking-wide mb-1">Total Wall Area (Est.)</div>
                        <div className="font-display text-2xl font-bold text-accent">~{Math.round(formData.area * 3.5)} sq ft</div>
                      </div>
                    </div>
                    <input 
                      type="range" min="100" max="5000" step="50"
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: parseInt(e.target.value) })}
                      className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-accent"
                    />
                  </div>

                  <div className="space-y-6">
                    <h3 className="font-display text-xl font-bold text-ink text-center">Project Type</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {['Fresh Painting', 'Re-Painting'].map(t => (
                        <button 
                          key={t}
                          onClick={() => setFormData({ ...formData, type: t })}
                          className={`p-6 rounded-2xl border-2 transition-all flex flex-col gap-2 ${formData.type === t ? 'border-accent bg-accent/5' : 'border-border hover:border-accent/40'}`}
                        >
                          <span className="font-bold">{t}</span>
                          <span className="text-[11px] text-muted leading-tight">
                            {t === 'Fresh Painting' ? 'Full prep, 2 coats putty, primer + 2 coats paint' : 'Basic prep, touch-up putty, primer + 2 coats paint'}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Quality Selection */}
              {step === 3 && (
                <div className="space-y-10">
                  <div className="text-center">
                    <h2 className="font-display text-2xl font-bold text-ink mb-2">Select Paint Quality</h2>
                    <p className="text-muted text-sm">Choose the finish and durability that fits your budget.</p>
                  </div>

                  <div className="grid gap-4">
                    {Object.keys(rates).map(q => (
                      <button 
                        key={q}
                        onClick={() => setFormData({ ...formData, quality: q })}
                        className={`flex items-center gap-6 p-6 rounded-3xl border-2 transition-all text-left group ${formData.quality === q ? 'border-accent bg-accent/5' : 'border-border hover:border-accent/30'}`}
                      >
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all ${formData.quality === q ? 'bg-accent text-white' : 'bg-warm/50 text-muted group-hover:bg-accent/10 group-hover:text-accent'}`}>
                          {q === 'Economy' ? '💰' : q === 'Premium' ? '⭐' : '👑'}
                        </div>
                        <div className="flex-grow">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-bold text-lg">{q} Finish</span>
                            <span className="text-xs font-bold text-accent uppercase tracking-wider">Starts ₹{rates[q].rate}/sq ft</span>
                          </div>
                          <div className="text-[13px] text-muted">Includes {rates[q].brands.join(', ')}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 4: Lead Capture Form */}
              {step === 4 && (
                <div className="space-y-10">
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4">
                      Final Step
                    </div>
                    <h2 className="font-display text-3xl font-black text-ink mb-1">Get Your Custom Quote</h2>
                    <p className="text-muted text-sm">Share your details to receive a formal estimate for your {formData.bhk} project.</p>
                  </div>

                  <form className="space-y-6 max-w-lg mx-auto" onSubmit={handleFormSubmit}>
                    <div className="space-y-4">
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold uppercase text-muted tracking-wide ml-1">Full Name</label>
                        <input required type="text" placeholder="Enter your name" className="w-full bg-warm/20 border border-border rounded-xl px-4 py-3 text-sm focus:border-accent outline-none transition-all" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[11px] font-bold uppercase text-muted tracking-wide ml-1">Phone Number</label>
                          <input required type="tel" placeholder="+91 98..." className="w-full bg-warm/20 border border-border rounded-xl px-4 py-3 text-sm focus:border-accent outline-none transition-all" />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[11px] font-bold uppercase text-muted tracking-wide ml-1">Email Address</label>
                          <input required type="email" placeholder="john@example.com" className="w-full bg-warm/20 border border-border rounded-xl px-4 py-3 text-sm focus:border-accent outline-none transition-all" />
                        </div>
                      </div>
                    </div>

                    <div className="bg-sand/30 p-6 rounded-2xl border border-border/60">
                      <h4 className="text-[11px] font-bold uppercase text-ink tracking-widest mb-3">Project Summary</h4>
                      <div className="grid grid-cols-2 gap-y-2 text-[13px]">
                        <span className="text-muted">Scope:</span> <span className="font-bold text-ink capitalize">{formData.scope}</span>
                        <span className="text-muted">House Type:</span> <span className="font-bold text-ink">{formData.bhk}</span>
                        <span className="text-muted">Quality:</span> <span className="font-bold text-ink">{formData.quality} Finish</span>
                        <span className="text-muted">Est. Area:</span> <span className="font-bold text-ink">{formData.area} sq ft</span>
                      </div>
                    </div>

                    <button type="submit" className="w-full bg-accent text-white font-bold py-5 rounded-2xl shadow-xl shadow-accent/20 hover:bg-accent/90 hover:-translate-y-1 transition-all text-lg tracking-wide">
                      Request Professional Estimate
                    </button>
                    <p className="text-[10px] text-muted text-center italic">By submitting, you agree to a free site visit for technical measurements.</p>
                  </form>
                </div>
              )}

              {/* Navigation Buttons */}
              {step < 4 && (
                <div className="flex justify-between items-center mt-12 pt-10 border-t border-border/60">
                  <button 
                    onClick={prevStep}
                    className={`flex items-center gap-2 font-bold text-sm transition-all ${step === 1 ? 'opacity-0 pointer-events-none' : 'text-muted hover:text-accent'}`}
                  >
                    ← Previous
                  </button>
                  <button 
                    onClick={nextStep}
                    className="bg-accent text-white font-bold px-10 py-4 rounded-xl shadow-lg shadow-accent/20 hover:bg-accent/90 hover:-translate-y-1 transition-all"
                  >
                    {step === 3 ? 'Get Quote' : 'Next Step →'}
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        {/* FAQ / Trust Segment */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="text-3xl mb-4">📍</div>
            <h4 className="font-display font-bold text-lg mb-2 text-ink">Kolkata Exclusive</h4>
            <p className="text-muted text-[13px] leading-relaxed">Pricing optimized for local material rates and labor costs in West Bengal.</p>
          </div>
          <div className="text-center p-6">
            <div className="text-3xl mb-4">🛡️</div>
            <h4 className="font-display font-bold text-lg mb-2 text-ink">No Hidden Costs</h4>
            <p className="text-muted text-[13px] leading-relaxed">Our estimates include labor, material, GST, and furniture masking protection.</p>
          </div>
          <div className="text-center p-6">
            <div className="text-3xl mb-4">⏱️</div>
            <h4 className="font-display font-bold text-lg mb-2 text-ink">24hr Final Quote</h4>
            <p className="text-muted text-[13px] leading-relaxed">Book a site visit for a 100% accurate formal quote within 24 hours.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;
