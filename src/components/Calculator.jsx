import { useState, useEffect } from 'react'

const Calculator = () => {
  const [area, setArea] = useState(800);
  const [coats, setCoats] = useState(2);
  const [serviceType, setServiceType] = useState('interior');
  const [quality, setQuality] = useState('standard');
  const [condition, setCondition] = useState('good');
  const [estimate, setEstimate] = useState({ total: 0, range: '', details: {} });

  const rates = { interior: 12, exterior: 18, texture: 35, waterproofing: 45 };
  const qMult = { standard: 1, premium: 1.42, luxury: 1.88 };
  const cAdd = { good: 0, minor: 1600, major: 3800 };

  useEffect(() => {
    const rate = rates[serviceType] * qMult[quality];
    const mat = Math.round(area * rate * 0.55 * (1 + (coats - 1) * 0.28));
    const labour = Math.round(area * rate * 0.35 * (1 + (coats - 1) * 0.18));
    const primer = Math.round(area * (serviceType === 'waterproofing' ? 0.8 : 1.2) + cAdd[condition]);
    
    const low = mat + labour + primer;
    const high = Math.round(low * 1.19);
    const days = Math.max(1, Math.round(area / 420 * (coats * 0.72)));

    setEstimate({
      total: low,
      range: `– Rs${high.toLocaleString('en-IN')}`,
      details: {
        mat: `Rs${mat.toLocaleString('en-IN')}`,
        labour: `Rs${labour.toLocaleString('en-IN')}`,
        primer: `Rs${primer.toLocaleString('en-IN')}`,
        days: `${days}–${days + 1} days`
      }
    });
  }, [area, coats, serviceType, quality, condition]);

  return (
    <div className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-[11px] tracking-[3px] uppercase text-rust font-medium mb-3.5">Cost Estimator</div>
        <h2 className="font-display text-3xl md:text-5xl font-black text-ink leading-tight mb-4">Get an instant ballpark quote</h2>
        <p className="text-warm-gray leading-loose max-w-lg mb-12">
          Adjust the sliders to match your project — we'll estimate the cost on the fly.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-cream border border-border rounded-3xl p-9 flex flex-col gap-6">
            <div>
              <div className="flex justify-between text-[12px] font-semibold tracking-wide uppercase text-ink mb-3">
                Area (sq ft) <span className="text-rust normal-case tracking-normal">{area.toLocaleString('en-IN')} sq ft</span>
              </div>
              <input 
                type="range" min="100" max="5000" step="50" 
                value={area} onChange={(e) => setArea(parseInt(e.target.value))}
                className="w-full accent-rust cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-[12px] font-semibold tracking-wide uppercase text-ink mb-3">
                Number of coats <span className="text-rust normal-case tracking-normal">{coats} {coats === 1 ? 'coat' : 'coats'}</span>
              </div>
              <input 
                type="range" min="1" max="3" step="1" 
                value={coats} onChange={(e) => setCoats(parseInt(e.target.value))}
                className="w-full accent-rust cursor-pointer"
              />
            </div>

            <div>
              <div className="text-[12px] font-semibold tracking-wide uppercase text-ink mb-3">Service type</div>
              <div className="flex flex-wrap gap-2">
                {Object.keys(rates).map(type => (
                  <label key={type} className="cursor-pointer">
                    <input 
                      type="radio" name="stype" value={type} checked={serviceType === type} 
                      onChange={() => setServiceType(type)} className="hidden peer" 
                    />
                    <div className="bg-white border border-border text-warm-gray text-[13px] font-medium px-4 py-2 rounded-lg transition-all peer-checked:bg-rust peer-checked:border-rust peer-checked:text-white capitalize">
                      {type}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <div className="text-[12px] font-semibold tracking-wide uppercase text-ink mb-3">Paint quality</div>
              <div className="flex flex-wrap gap-2">
                {['standard', 'premium', 'luxury'].map(q => (
                  <label key={q} className="cursor-pointer">
                    <input 
                      type="radio" name="qual" value={q} checked={quality === q} 
                      onChange={() => setQuality(q)} className="hidden peer" 
                    />
                    <div className="bg-white border border-border text-warm-gray text-[13px] font-medium px-4 py-2 rounded-lg transition-all peer-checked:bg-rust peer-checked:border-rust peer-checked:text-white capitalize">
                      {q}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <div className="text-[12px] font-semibold tracking-wide uppercase text-ink mb-3">Wall condition</div>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'good', label: 'Good' },
                  { id: 'minor', label: 'Minor repairs' },
                  { id: 'major', label: 'Major repairs' }
                ].map(c => (
                  <label key={c.id} className="cursor-pointer">
                    <input 
                      type="radio" name="cond" value={c.id} checked={condition === c.id} 
                      onChange={() => setCondition(c.id)} className="hidden peer" 
                    />
                    <div className="bg-white border border-border text-warm-gray text-[13px] font-medium px-4 py-2 rounded-lg transition-all peer-checked:bg-rust peer-checked:border-rust peer-checked:text-white">
                      {c.label}
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-ink rounded-3xl p-10 text-white shadow-2xl">
            <div className="text-[11px] tracking-[2.5px] uppercase text-white/40 mb-3">Estimated total cost</div>
            <div className="font-display text-5xl font-black text-white leading-none mb-1.5 flex items-baseline gap-2">
              Rs{estimate.total.toLocaleString('en-IN')}
            </div>
            <div className="text-sm text-white/40 mb-7">{estimate.range} (depending on brand)</div>
            
            <div className="border-t border-white/10 pt-5.5 flex flex-col gap-3.5 mb-5.5">
              <div className="flex justify-between text-[13.5px]">
                <span className="text-white/50">Paint + materials</span>
                <span className="font-medium text-white">{estimate.details.mat}</span>
              </div>
              <div className="flex justify-between text-[13.5px]">
                <span className="text-white/50">Labour charges</span>
                <span className="font-medium text-white">{estimate.details.labour}</span>
              </div>
              <div className="flex justify-between text-[13.5px]">
                <span className="text-white/50">Putty + primer</span>
                <span className="font-medium text-white">{estimate.details.primer}</span>
              </div>
              <div className="flex justify-between text-[13.5px]">
                <span className="text-white/50">Estimated duration</span>
                <span className="font-medium text-white">{estimate.details.days}</span>
              </div>
            </div>

            <p className="text-[12px] text-white/30 leading-relaxed mb-5.5">Ballpark only. Actual quote may vary based on wall height, condition and paint brand.</p>
            <button className="w-full bg-rust text-white border-none font-body text-[13.5px] font-medium py-3 rounded-xl cursor-pointer transition-all hover:bg-rust-light shadow-lg shadow-rust/20">
              Get Exact Quote — Free Site Visit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator
