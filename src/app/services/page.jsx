import Link from 'next/link'; 
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Cloud, Target, BookLock, Binary, Network, FolderSearch, Radar, Fish, Cpu } from 'lucide-react'; 


const services = [
  {
    title: "Virtual CISO",
    description: "Expert cybersecurity leadership with customized, cost-effective services to protect your business from cyber threats through our Virtual CISO as a Service.",
    icon: <ShieldCheck className="w-10 h-10 text-violet-500 flex-shrink-0" />,
    link: "/services/virtual-ciso"
  },
  {
    title: "GRC Advisory and Audit",
    description: "Navigate governance, risk, and compliance with our comprehensive GRC advisory and audit solutions to build resilience and maintain security.",
    icon: <BookLock className="w-10 h-10 text-emerald-500 flex-shrink-0" />,
    link: "/services/grc-advisory"
  },
  {
    title: "Cloud Security",
    description: "Secure your cloud environments with our expert-designed solutions, continuous monitoring, and compliance-focused cloud security services.",
    icon: <Cloud className="w-10 h-10 text-blue-500 flex-shrink-0" />,
    link: "/services/cloud-security"
  },
  {
    title: "Application Security",
    description: "Safeguard your applications with proactive security measures, secure coding practices, and rigorous testing to mitigate vulnerabilities.",
    icon: <Binary className="w-10 h-10 text-green-500 flex-shrink-0" />,
    link: "/services/application-security"
  },
  {
    title: "Network Security",
    description: "Design and maintain secure network infrastructures with our comprehensive Network Security services to prevent internal and external threats.",
    icon: <Network className="w-10 h-10 text-cyan-500 flex-shrink-0" />,
    link: "/services/network-security"
  },
  {
    title: "Cyber Forensics",
    description: "Investigate and prevent cybercrimes with our cutting-edge Cyber Forensics services that provide actionable insights through evidence analysis.",
    icon: <FolderSearch className="w-10 h-10 text-red-500 flex-shrink-0" />,
    link: "/services/cyber-forensics"
  },
  {
    title: "Vulnerability Assessment and Penetration Testing",
    description: "Identify and mitigate threats before they escalate with continuous VAPT, threat modeling, and remediation support.",
    icon: <Radar className="w-10 h-10 text-orange-500 flex-shrink-0" />,
    link: "/services/vapt"
  },
  {
    title: "Red Teaming",
    description: "Simulate real-world attacks to uncover hidden vulnerabilities and enhance your security with our advanced Red Teaming services.",
    icon: <Target className="w-10 h-10 text-red-500 flex-shrink-0" />,
    link: "/services/red-teaming"
  },
  {
    title: "Phishing Simulation",
    description: "Improve cybersecurity awareness with realistic phishing simulations and insights that reduce click rates and increase organizational readiness.",
    icon: <Fish className="w-10 h-10 text-yellow-500 flex-shrink-0" />,
    link: "/services/phishing-simulation"
  },
  {
    title: "IoT Security",
    description: "Secure your IoT devices with inter-dependency testing, access management, and a robust IoT Security Framework for data and device protection.",
    icon: <Cpu className="w-10 h-10 text-blue-500 flex-shrink-0" />,
    link: "/services/iot-security"
  },
  {
  title: "AI SOC",
  description:
    "Autonomous AI-driven Security Operations Center providing real-time threat detection, intelligent correlation, and automated incident response across your entire infrastructure.",
  icon: <ShieldCheck className="w-10 h-10 text-indigo-500 flex-shrink-0" />,
  link: "/services/ai-soc"
}

 
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-16 font-primary mt-10 lg:mt-20">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold font-secondary bg-clip-text bg-gradient-to-br from-violet-500 to-blue-900 text-transparent">
            Our Cybersecurity Services
          </h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            From proactive defense to rapid response, Vulnuris offers a comprehensive suite of services to protect your digital assets and ensure resilience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            return (
              <Card key={index} className="flex flex-col h-full shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                <CardHeader className="flex flex-row items-center space-x-4">
                  {service.icon}
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
                <div className="px-6">
                  <Link href={service.link} passHref >
                    <Button variant="outline" size="sm" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-20">
          <h3 className="text-3xl font-semibold mb-4 bg-clip-text bg-gradient-to-br from-slate-500 to-slate-950 dark:from-slate-300 dark:to-slate-700 text-transparent">
            Ready to Enhance Your Security?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's discuss your specific needs and how Vulnuris can tailor a solution for you.
          </p>
          <Link href="/contact" passHref legacyBehavior>
             <Button
               size="lg"
               className="px-8 py-2 rounded-full bg-gradient-to-b from-violet-500 to-violet-600 text-white focus:ring-2 focus:ring-violet-400 hover:shadow-xl dark:hover:shadow-violet-900 transition duration-200 text-lg font-bold">
               Request a Free Consultation
             </Button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ServicesPage;