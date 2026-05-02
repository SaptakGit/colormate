import React, { useEffect } from 'react';

const Disclaimer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-anim min-h-screen bg-cream py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl font-black text-ink mb-12">Disclaimer</h1>
        <div className="prose prose-slate max-w-none text-warm-gray leading-relaxed space-y-6">
          <p>
            The information provided by ColorSure ("we," "us," or "our") on our website is for general informational purposes only. All information on the site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
          </p>
          <h2 className="text-2xl font-bold text-ink mt-8">Service Estimates</h2>
          <p>
            Any quotes or estimates provided through our online calculator or via email are preliminary. Final pricing is subject to a physical site inspection by our project managers. Factors such as wall condition, accessibility, and material choices may affect the final cost.
          </p>
          <h2 className="text-2xl font-bold text-ink mt-8">Professional Advice</h2>
          <p>
            The site cannot and does not contain professional home improvement or structural advice. The painting and waterproofing information is provided for general informational and educational purposes only and is not a substitute for professional advice.
          </p>
          <p>
            Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of structural engineering advice.
          </p>
          <h2 className="text-2xl font-bold text-ink mt-8">External Links</h2>
          <p>
            The site may contain links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
