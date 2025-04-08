import { Search, Brain, Mail, Target, Cloud, Bell } from "lucide-react";

export default function WhatWeDo() {
  return (
    <div className="flex flex-col gap-4 py-10 max-w-2/3 mx-auto border-t">
      <h2 className="text-4xl font-bold text-center">
        What We Do ?
      </h2>
      <p className="text-md text-muted-foreground text-center max-w-xl mx-auto">
        At Vulnuris, we help organizations take control of their cybersecurity posture through intelligent products and expert-led services.
      </p>
      <div className="grid grid-cols-3 gap-4 max-w-5xl mx-auto">
        {[
          { icon: Search, title: "Security Visibility & Risk Prioritization", desc: "Continuously discover assets, detect vulnerabilities with AI, and prioritize risks with context using our Insight Platform.", color: "blue" },
          { icon: Brain, title: "Tailored Threat Intelligence", desc: "Get actionable insights with curated threat feeds, dark web monitoring, and executive briefings via Vulnuris Threat Intel.", color: "violet" },
          { icon: Mail, title: "Phishing Simulation & Awareness", desc: "Empower your team with phishing simulations, automated training, and in-depth reporting through PhishGuard.", color: "red" },
          { icon: Target, title: "Offensive Security Services", desc: "Identify and remediate weaknesses with Penetration Testing and Vulnerability Assessments.", color: "orange" },
          { icon: Cloud, title: "Cloud Security Expertise", desc: "Secure your AWS, Azure, and GCP environments with expert reviews, architecture design, and real-time monitoring.", color: "cyan" },
          { icon: Bell, title: "Incident Response & Advisory", desc: "Respond fast to breaches and enhance your security strategy with our Incident Response and Security Advisory services.", color: "green" }
        ].map((item, index) => (
          <div key={index} className={`border rounded-lg px-6 py-4 bg-gradient-to-br from-${item.color}-500 to-${item.color}-800 dark:to-${item.color}-950 text-white relative overflow-hidden`}>
            {/* Number in background */}
            <span className="absolute -top-4 -right-2 text-8xl font-bold opacity-15">
              {`0${index + 1}`}
            </span>
            <div className="flex items-center gap-2 mb-2 relative">
              <item.icon className="w-5 h-5" />
              <h3 className="font-semibold">{item.title}</h3>
            </div>
            <p className="text-sm relative">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
