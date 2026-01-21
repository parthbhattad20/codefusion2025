import { Search, Brain, Mail, Target, Cloud, Bell, ShieldCheck, Zap, Server} from "lucide-react";
const colorMap = {
  blue: 'from-blue-500 to-blue-800 dark:to-blue-950',
  violet: 'from-violet-500 to-violet-800 dark:to-violet-950',
  red: 'from-red-500 to-red-800 dark:to-red-950',
  orange: 'from-orange-500 to-orange-800 dark:to-orange-950',
  cyan: 'from-cyan-500 to-cyan-800 dark:to-cyan-950',
  green: 'from-green-500 to-green-800 dark:to-green-950',
};

export default function WhatWeDo() {
  return (
    // <div className="flex flex-col gap-10 py-10 md:w-2/3 mx-40 border-t">
    <div className="flex flex-col gap-10 py-10 max-w-7xl mx-auto px-6 border-t">

      <h2 className="text-4xl font-bold text-center">What <span className="text-violet-800">V</span> Do?</h2>
      <p className="text-md text-muted-foreground text-center max-w-xl mx-auto">
        At Vulnuris, we help organizations take control of their cybersecurity posture through intelligent products and expert-led services.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-auto  gap-12 max-w-5xl">
        {[
          { icon: <ShieldCheck className="w-5 h-5 text-pink-500"/>, title: "Vaultix", desc: "Protect your digital assets and sensitive data with Vaultix's robust encryption and access control platform.", color: "green" },
          { icon: <Zap className="w-5 h-5 text-teal-500"/>, title: "Phishinstinct", desc: "Detect, simulate, and prevent phishing attacks with Phishinstinct’s advanced AI-driven platform.", color: "cyan" },
          { icon: <Server className="w-5 h-5 text-indigo-500"/>, title: "Kloudraksha", desc: "Secure your cloud infrastructure with Kloudraksha’s real-time monitoring, threat detection, and compliance tools.", color: "orange" },
          { icon: <Search className="w-5 h-5 text-blue-500"/>, title: "Security Visibility & Risk Prioritization", desc: "Continuously discover assets, detect vulnerabilities with AI, and prioritize risks with context using our Insight Platform.", color: "blue" },
          { icon: <Brain className="w-5 h-5 text-violet-500"/>, title: "Tailored Threat Intelligence", desc: "Get actionable insights with curated threat feeds, dark web monitoring, and executive briefings via Vulnuris Threat Intel.", color: "violet" },
          { icon: <Mail className="w-5 h-5 text-red-500"/>, title: "Phishing Simulation & Awareness", desc: "Empower your team with phishing simulations, automated training, and in-depth reporting through PhishGuard.", color: "red" },
          { icon: <Target className="w-5 h-5 text-orange-500"/>, title: "Offensive Security Services", desc: "Identify and remediate weaknesses with Penetration Testing and Vulnerability Assessments.", color: "orange" },
          { icon: <Cloud className="w-5 h-5 text-cyan-500"/>, title: "Cloud Security Expertise", desc: "Secure your AWS, Azure, and GCP environments with expert reviews, architecture design, and real-time monitoring.", color: "cyan" },
          { icon: <Bell className="w-5 h-5 text-green-500"/>, title: "Incident Response & Advisory", desc: "Respond fast to breaches and enhance your security strategy with our Incident Response and Security Advisory services.", color: "green" }
        ].map((item, index) => (
          <div
            key={index}
            className={`border rounded-lg px-8 py-8 bg-foreground/5 backdrop-blur-md dark:bg-white/10 relative overflow-hidden shadow-xl`}
          >
            <span className={`absolute -top-4 -right-2 text-8xl font-bold opacity-10 dark:opacity-15 bg-gradient-to-br ${colorMap[item.color]}-200 bg-clip-text text-transparent`}>
              {`0${index + 1}`}
            </span>
            <div className="flex items-center gap-2 mb-2 relative">
              {item.icon}
              <h3 className="font-semibold">{item.title}</h3>
            </div>
            <p className="text-sm relative text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
