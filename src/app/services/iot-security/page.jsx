'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  Cpu,
  Wifi,
  Lock,
  Radar,
  Server,
} from 'lucide-react';

export default function IoTSecurityPage() {
  return (
    <main className="w-full bg-background text-foreground">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen w-full mt-10">
        {/* Background Image */}
        <Image
          src="/assets/services/IoT.jpg"
          alt="IoT Security"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <div className="max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-60">
              IoT Security Services
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-200">
              Protecting connected devices, networks, and data across the entire
              Internet of Things ecosystem.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-primary px-8 py-3 text-white font-medium hover:opacity-90"
              >
                Talk to an Expert
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-white/40 px-8 py-3 text-white font-medium"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT IS IOT SECURITY ================= */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              What is IoT Security?
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              IoT Security focuses on protecting internet-connected devices such as
              sensors, cameras, smart appliances, industrial controllers, and
              embedded systems from cyber threats. These devices often lack
              built-in security, making them prime targets for attackers.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our IoT security solutions ensure device authentication, secure
              communication, firmware protection, and continuous monitoring
              across your IoT infrastructure.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[Cpu, Wifi, Lock, Radar].map((Icon, index) => (
              <div
                key={index}
                className="rounded-2xl border border-border p-6 flex flex-col items-center text-center"
              >
                <Icon className="h-10 w-10 text-primary" />
                <p className="mt-4 font-medium">Secure Devices</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary">
            Our IoT Security Services
          </h2>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
              icon: ShieldCheck,
              title: 'IoT Risk Assessment',
              desc: 'Identify vulnerabilities in devices, firmware, and communication protocols.'
            },{
              icon: Server,
              title: 'Secure Firmware & Updates',
              desc: 'Ensure encrypted firmware, secure boot, and safe OTA updates.'
            },{
              icon: Wifi,
              title: 'Network Protection',
              desc: 'Protect IoT traffic using segmentation, firewalls, and anomaly detection.'
            },{
              icon: Lock,
              title: 'Device Authentication',
              desc: 'Strong identity and access control for every connected device.'
            },{
              icon: Radar,
              title: 'Threat Monitoring',
              desc: 'Continuous monitoring to detect attacks and abnormal behavior.'
            },{
              icon: Cpu,
              title: 'Industrial IoT Security',
              desc: 'Protect SCADA, PLCs, and industrial automation systems.'
            }].map((service, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border p-8 bg-background hover:shadow-lg transition"
              >
                <service.icon className="h-10 w-10 text-primary" />
                <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>
                <p className="mt-4 text-muted-foreground">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Why Choose Our IoT Security?
          </h2>
          <p className="mt-6 text-muted-foreground max-w-3xl mx-auto">
            We combine deep IoT expertise, real-world attack simulations, and
            industry best practices to secure your connected ecosystem end-to-end.
          </p>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              'End-to-End Protection',
              'Industry Standards Compliance',
              'Scalable for Millions of Devices',
              '24/7 Security Monitoring'
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-border p-6 font-medium"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
     
{/* ================= CTA ================= */}
<section className="py-28 px-6 text-center border-t border-border">
<h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Secure Your IoT Ecosystem Today</h2>
<p className="text-muted-foreground max-w-2xl mx-auto mb-10">
From device‑level protection to cloud‑level monitoring, we help you build secure and resilient IoT systems.
</p>
<Link href="/contact" className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium">
Get Started
</Link>
</section>
    </main>
  );
}
