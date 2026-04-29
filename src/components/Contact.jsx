import { useState } from 'react'
import axios from 'axios';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [leadName, setName] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadService, setLeadService] = useState("");
  const [leadEstdArea, setEstdArea] = useState("");
  const [leadMessage, setLeadMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    try{
      const contactResponse = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/leads/store`, {
        name: leadName,
        phone: leadPhone,
        service: leadService,
        estd_area: leadEstdArea,
        message: leadMessage
      });
      if (contactResponse.data.success) {
        setSubmitted(true);
      }
    }catch(error){
      console.log(error);
    }
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="page-anim flex flex-col items-center justify-center py-32 px-6 text-center">
        <div className="w-20 h-20 bg-rust/10 rounded-full flex items-center justify-center text-3xl mb-7 animate-bounce">✅</div>
        <h1 className="font-display text-3xl md:text-5xl font-black text-ink mb-3.5">Thank you!</h1>
        <p className="text-warm-gray max-w-sm leading-loose">
          We've received your request. Our project manager will call you within 24 hours to schedule a free site visit.
        </p>
        <button 
          className="mt-9 bg-ink text-white font-body text-[13px] font-medium px-8 py-3 rounded-xl cursor-pointer"
          onClick={() => setSubmitted(false)}
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <div className="page-anim">
      <section className="py-24 px-6 md:px-12 grid lg:grid-cols-[1fr_450px] gap-20 max-w-7xl mx-auto">
        <div>
          <div className="text-[11px] tracking-[3px] uppercase text-rust font-medium mb-3.5">Get in touch</div>
          <h1 className="font-display text-4xl md:text-6xl font-black text-ink leading-tight mb-5">Let's talk about your project</h1>
          <p className="text-warm-gray leading-loose max-w-lg mb-12">
            Free site visit, area measurement and itemized quote within 24 hours. No hidden charges, no commitment.
          </p>

          <div className="flex flex-col gap-9">
            <div className="flex gap-4.5">
              <div className="w-11 h-11 bg-cream rounded-xl flex items-center justify-center text-xl border border-border">📞</div>
              <div>
                <div className="text-[11px] font-semibold text-warm-gray uppercase tracking-widest mb-1">Call / WhatsApp</div>
                <div className="text-[15px] font-bold text-ink">+91 98300 00000</div>
              </div>
            </div>
            <div className="flex gap-4.5">
              <div className="w-11 h-11 bg-cream rounded-xl flex items-center justify-center text-xl border border-border">📧</div>
              <div>
                <div className="text-[11px] font-semibold text-warm-gray uppercase tracking-widest mb-1">Email us</div>
                <div className="text-[15px] font-bold text-ink">hello@colorsure.in</div>
              </div>
            </div>
            <div className="flex gap-4.5">
              <div className="w-11 h-11 bg-cream rounded-xl flex items-center justify-center text-xl border border-border">📍</div>
              <div>
                <div className="text-[11px] font-semibold text-warm-gray uppercase tracking-widest mb-1">Address</div>
                <div className="text-[15px] font-bold text-ink leading-relaxed">
                  24B, Ballygunge Circular Road,<br />Kolkata, West Bengal 700019
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-border rounded-3xl p-8 md:p-11 shadow-2xl">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label className="text-[11.5px] font-bold text-ink uppercase tracking-widest">Your Name</label>
              <input 
                required type="text" placeholder="e.g. Rahul Das" 
                className="bg-cream border border-border rounded-xl p-3 px-4.5 font-body text-[13.5px] outline-none focus:border-rust"
                name="name"
                value={leadName}
                onChange={(e) => setName(e.target.value)} 
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[11.5px] font-bold text-ink uppercase tracking-widest">Phone Number</label>
              <input 
                required type="tel" placeholder="+91 00000 00000" 
                className="bg-cream border border-border rounded-xl p-3 px-4.5 font-body text-[13.5px] outline-none focus:border-rust"
                name="phone"
                value={leadPhone}
                onChange={(e) => setLeadPhone(e.target.value)}  
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[11.5px] font-bold text-ink uppercase tracking-widest">Service Required</label>
              <select className="bg-cream border border-border rounded-xl p-3 px-4.5 font-body text-[13.5px] outline-none cursor-pointer focus:border-rust"
                name="service"
                value={leadService}
                onChange={(e) => setLeadService(e.target.value)}  
              >
                <option>Interior Painting</option>
                <option>Exterior Painting</option>
                <option>Texture Finish</option>
                <option>Waterproofing</option>
                <option>Others</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[11.5px] font-bold text-ink uppercase tracking-widest">Estimated Area (sq ft)</label>
              <input 
                type="number" placeholder="e.g. 1000" 
                className="bg-cream border border-border rounded-xl p-3 px-4.5 font-body text-[13.5px] outline-none focus:border-rust"
                name="estd_area"
                value={leadEstdArea}
                onChange={(e) => setEstdArea(e.target.value)}   
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[11.5px] font-bold text-ink uppercase tracking-widest">Your Message</label>
              <textarea 
                rows="3" placeholder="Tell us more about your requirement..."
                className="bg-cream border border-border rounded-xl p-3 px-4.5 font-body text-[13.5px] outline-none focus:border-rust resize-none"
                name="message"
                value={leadMessage}
                onChange={(e) => setLeadMessage(e.target.value)}  
              ></textarea>
            </div>
            <button 
              disabled={loading}
              className={`
                mt-2 w-full bg-rust text-white border-none font-body text-[13.5px] font-bold py-3.5 rounded-xl cursor-pointer transition-all hover:bg-rust-light shadow-lg shadow-rust/20
                ${loading ? 'opacity-70 cursor-wait' : ''}
              `}
            >
              {loading ? 'Sending...' : 'Request Free Site Visit'}
            </button>
            <p className="text-[11.5px] text-warm-gray/60 text-center leading-relaxed">
              By clicking, you agree to our terms. We promise zero spam — only a single follow-up call.
            </p>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
