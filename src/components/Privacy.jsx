import React, { useEffect } from 'react';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-anim min-h-screen bg-cream py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl font-black text-ink mb-12">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none text-warm-gray leading-relaxed space-y-6">
          <p>
            At ColorSure, accessible from colorsure.in, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by ColorSure and how we use it.
          </p>
          <h2 className="text-2xl font-bold text-ink mt-8">Information We Collect</h2>
          <p>
            If you contact us directly or use our quote calculator, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
          </p>
          <h2 className="text-2xl font-bold text-ink mt-8">How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide, operate, and maintain our website and services.</li>
            <li>Improve, personalize, and expand our website and services.</li>
            <li>Understand and analyze how you use our website.</li>
            <li>Develop new products, services, features, and functionality.</li>
            <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.</li>
            <li>Send you emails or messages regarding your site visit or project status.</li>
          </ul>
          <h2 className="text-2xl font-bold text-ink mt-8">GDPR and Data Protection</h2>
          <p>
            We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The right to access – You have the right to request copies of your personal data.</li>
            <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate.</li>
            <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
