import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, FileSearch2, Bug, ScrollText, Search } from 'lucide-react';

const features = [
  {
    title: 'Incident Response',
    description: 'Immediate action and investigation to contain and assess cyber incidents.',
    icon: <ShieldCheck className="w-6 h-6" />, 
    borderColor: 'border-red-500/50',
    hoverBorderColor: 'group-hover:border-red-500',
    iconColor: 'text-red-500'
  },
  {
    title: 'Evidence Collection',
    description: 'Methodical and legally sound collection of digital evidence.',
    icon: <FileSearch2 className="w-6 h-6" />, 
    borderColor: 'border-yellow-500/50',
    hoverBorderColor: 'group-hover:border-yellow-500',
    iconColor: 'text-yellow-500'
  },
  {
    title: 'Forensic Analysis',
    description: 'In-depth analysis of systems and data to uncover the root cause and extent of compromise.',
    icon: <Search className="w-6 h-6" />, 
    borderColor: 'border-blue-500/50',
    hoverBorderColor: 'group-hover:border-blue-500',
    iconColor: 'text-blue-500'
  }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      <div className="pt-20 mt-10 lg:mt-20">
        <div className="container max-w-7xl mx-auto px-6">
          {/* Navigation */}
          <div className="mb-16">
            <Link href="/services" className="group inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200">
              <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to Services
            </Link>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-red-500/10 to-red-600/10 backdrop-blur-sm mb-6">
              <Search className="w-16 h-16 text-red-600" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-600 mb-6">
              Cyber Forensics
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Investigative services to trace cyber incidents, preserve evidence, and provide legally defensible findings.
            </p>
            <Link href="/contact" passHref legacyBehavior>
              <Button
                size="lg"
                className="px-8 py-2 rounded-full bg-gradient-to-b from-red-500 to-red-600 text-white focus:ring-2 focus:ring-red-400 hover:shadow-xl dark:hover:shadow-red-900 transition duration-200 text-lg font-bold">
                Get Forensic Help Now
              </Button>
            </Link>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className={`group relative overflow-hidden backdrop-blur-sm border-2 ${feature.borderColor} 
                  hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${feature.hoverBorderColor}`}
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${feature.iconColor} bg-foreground/5`}>
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Process Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Forensic Process</h2>
              <div className="space-y-4">
                {[
                  'Timely Incident Response & Containment',
                  'Comprehensive Log and System Review',
                  'Chain-of-Custody Documentation',
                  'Legal and Regulatory Compliance Reporting'
                ].map((step, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-gradient-to-br from-red-500/5 to-red-600/5 hover:from-red-500/10 hover:to-red-600/10 transition-colors duration-200">
                    <CheckCircle2 className="w-5 h-5 text-red-600" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-500/5 to-red-600/5 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
              <p className="text-muted-foreground mb-6">
                Our team comprises certified cyber forensic professionals with extensive experience in handling sensitive data and complex investigations.
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: <Bug className="w-6 h-6 text-red-600" />, 
                    title: 'Root Cause Analysis', 
                    description: 'Determine how the breach occurred and what data was affected.'
                  },
                  {
                    icon: <ShieldCheck className="w-6 h-6 text-red-600" />, 
                    title: 'Secure Evidence Handling', 
                    description: 'We maintain integrity of evidence to support legal proceedings.'
                  },
                  {
                    icon: <ScrollText className="w-6 h-6 text-red-600" />, 
                    title: 'Detailed Reporting', 
                    description: 'Actionable reports tailored for technical teams, executives, and legal bodies.'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors duration-200">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1 flex items-center gap-2">
                        {item.title}
                        <ArrowRight className="w-4 h-4 text-red-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                      </h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <div className="rounded-md px-6 pt-12 pb-6 text-center border-t-2">
              <h3 className="text-3xl font-semibold mb-4 bg-clip-text bg-gradient-to-br from-red-600 to-red-950 dark:from-red-300 dark:to-red-700 text-transparent">
                Get Expert Cyber Forensics Today
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                If you suspect a breach or need a trusted forensic investigation, our team is here to support you every step of the way.
              </p>
              <Link href="/contact" passHref legacyBehavior>
                <Button
                  size="lg"
                  className="px-8 py-2 rounded-full bg-gradient-to-b from-red-500 to-red-600 text-white focus:ring-2 focus:ring-red-400 hover:shadow-xl dark:hover:shadow-red-900 transition duration-200 text-lg font-bold">
                  Speak With Forensics Team
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}