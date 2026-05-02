import React, { useEffect } from 'react';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-anim min-h-screen bg-cream py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl font-black text-ink mb-12">Terms & Conditions</h1>
        <div className="prose prose-slate max-w-none text-warm-gray leading-relaxed space-y-6">
          <p>
            Welcome to ColorSure. These terms and conditions outline the rules and regulations for the use of ColorSure's Website and services.
          </p>
          <h2 className="text-2xl font-bold text-ink mt-8">1. Service Agreement</h2>
          <p>
            By booking a site visit or a service, you agree to provide accurate information regarding your property and requirements. A formal work order will be issued upon site inspection which will govern the specific details of the project.
          </p>
          <h2 className="text-2xl font-bold text-ink mt-8">2. Payment Terms</h2>
          <p>
            Payments are typically divided into stages: an advance at the start of the project, a mid-point payment, and a final payment upon completion. All payment schedules will be clearly mentioned in your written quotation.
          </p>
          <h2 className="text-2xl font-bold text-ink mt-8">3. Work Schedule</h2>
          <p>
            While we strive to adhere to the agreed-upon timeline, factors beyond our control such as weather (especially during Kolkata's monsoons), site accessibility, or material availability may cause adjustments to the schedule.
          </p>
          <h2 className="text-2xl font-bold text-ink mt-8">4. Client Responsibilities</h2>
          <p>
            Clients are responsible for providing access to the site, water, and electricity as required for the work. Valuable items should be secured or moved by the client prior to the start of work, although our team provides basic masking and covering services.
          </p>
          <h2 className="text-2xl font-bold text-ink mt-8">5. Warranty</h2>
          <p>
            Warranty on painting and waterproofing products is provided directly by the manufacturers (e.g., Asian Paints, Dr. Fixit). ColorSure provides a standard application warranty of 1 year on labor unless otherwise specified in writing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
