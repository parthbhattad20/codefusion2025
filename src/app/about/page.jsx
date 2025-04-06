'use client';
import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
            About Vulnuris
          </h1>
          <p className="mt-4 text-lg text-gray-600">Find › Fix › Fortify</p>
        </div>

        {/* Who We Are */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold mb-4 text-purple-700">Who We Are</h2>
          <p className="text-lg leading-relaxed">
            Vulnuris is a modern cybersecurity company built to secure the future. Our team of ethical hackers,
            engineers, and analysts are on a mission to make organizations resilient against evolving digital threats.
            We don’t just patch vulnerabilities — we transform your security posture.
          </p>
        </section>

        {/* What We Do */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold mb-4 text-purple-700">What We Do</h2>
          <ul className="space-y-4 text-lg">
            <li>
              <span className="font-semibold text-purple-600">🔍 Find:</span> Discover vulnerabilities using cutting-edge scanning and AI-powered threat analysis.
            </li>
            <li>
              <span className="font-semibold text-purple-600">🛠 Fix:</span> Deliver precise and actionable fixes to eliminate security weaknesses.
            </li>
            <li>
              <span className="font-semibold text-purple-600">🛡 Fortify:</span> Strengthen defenses through continuous monitoring and security hardening.
            </li>
          </ul>
        </section>

        {/* Vision */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold mb-4 text-purple-700">Our Vision</h2>
          <p className="text-lg leading-relaxed">
            To create a world where every organization — large or small — has the tools, knowledge, and confidence to protect what matters most.
          </p>
        </section>

        {/* Values */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold mb-4 text-purple-700">Our Values</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
            <li>✅ Integrity — Security without compromise</li>
            <li>🚀 Innovation — Always ahead of the curve</li>
            <li>💡 Empowerment — Putting control in your hands</li>
            <li>🤝 Trust — Built on transparency and results</li>
          </ul>
        </section>

        {/* Why Choose Us */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold mb-4 text-purple-700">Why Choose Vulnuris?</h2>
          <ul className="list-disc list-inside text-lg">
            <li>Scalable, intuitive security solutions</li>
            <li>Real-time insights and actionable reports</li>
            <li>Trusted by security teams across industries</li>
            <li>Expert guidance and dedicated support</li>
          </ul>
        </section>

        {/* CTA */}
        <div className="text-center mt-20">
          <h3 className="text-2xl font-semibold mb-4">Join us on the journey to secure the future.</h3>
          <p className="text-lg">Let’s work together to <strong>Find</strong>, <strong>Fix</strong>, and <strong>Fortify</strong>.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
