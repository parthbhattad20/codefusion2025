import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, CheckCircle2, FileSearch2, Target, ScanIcon, FileSearch, ScrollText } from 'lucide-react';

const features = [
  {
    title: 'Continuous Vulnerability Assessment',
    description: 'Proactive scanning to detect new threats as they emerge.',
    icon: <ScanIcon className="w-6 h-6" />, 
    borderColor: 'border-orange-500/50',
    hoverBorderColor: 'group-hover:border-orange-500',
    iconColor: 'text-orange-500'
  },
  {
    title: 'Penetration Testing',
    description: 'Real-world attack simulation to test your defenses.',
    icon: <FileSearch2 className="w-6 h-6" />, 
    borderColor: 'border-red-500/50',
    hoverBorderColor: 'group-hover:border-red-500',
    iconColor: 'text-red-500'
  },
  {
    title: 'Remediation Support',
    description: 'Detailed guidance to fix identified vulnerabilities.',
    icon: <Target className="w-6 h-6" />, 
    borderColor: 'border-yellow-500/50',
    hoverBorderColor: 'group-hover:border-yellow-500',
    iconColor: 'text-yellow-500'
  }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pt-20 mt-10 lg:mt-20">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <Link href="/services" className="group inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200">
              <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to Services
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-12 text-center mb-16">
              <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-600/10 backdrop-blur-sm mb-6">
                <FileSearch2 className="w-16 h-16 text-orange-600" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600 mb-6">
                VAPT Services
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Identify, analyze, and mitigate security vulnerabilities before they can be exploited.
              </p>
              <Link href="/contact" passHref legacyBehavior>
                <Button size="lg" className="px-8 py-2 rounded-full bg-gradient-to-b from-orange-500 to-red-600 text-white focus:ring-2 focus:ring-orange-400 hover:shadow-xl dark:hover:shadow-orange-900 transition duration-200 text-lg font-bold">
                  Schedule a VAPT
                </Button>
              </Link>
            </div>

            <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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

            <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">What Makes Our VAPT Different?</h2>
                <div className="space-y-4">
                  {[
                    'Advanced Tooling & Techniques',
                    'Real-Time Remediation Support',
                    'Post-Engagement Support & Reassessment',
                    'Tailored Reporting Based on Audience'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-gradient-to-br from-orange-500/5 to-red-600/5 hover:from-orange-500/10 hover:to-red-600/10 transition-colors duration-200">
                      <CheckCircle2 className="w-5 h-5 text-orange-600" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-500/5 to-red-600/5 rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6">Our Methodology</h2>
                <div className="space-y-6">
                  <p className="text-muted-foreground mb-6">
                    Our VAPT methodology ensures in-depth security evaluations, combining automation with human expertise.
                  </p>
                  {[
                    {
                      icon: <Target className="w-6 h-6 text-orange-600" />, 
                      title: 'Scoping & Planning', 
                      description: 'Understand business needs, compliance goals, and define scope.'
                    },
                    {
                      icon: <ScanIcon className="w-6 h-6 text-orange-600" />, 
                      title: 'Automated & Manual Scanning', 
                      description: 'Perform in-depth scanning and analysis of infrastructure and applications.'
                    },
                    {
                      icon: <FileSearch className="w-6 h-6 text-orange-600" />, 
                      title: 'Exploitation & Reporting', 
                      description: 'Demonstrate real-world attacks and provide detailed, prioritized findings.'
                    },
                    {
                      icon: <ScrollText className="w-6 h-6 text-orange-600" />, 
                      title: 'Fixes & Verification', 
                      description: 'Support remediation and validate fixes through re-testing.'
                    }
                  ].map((step, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors duration-200">
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-1 flex items-center gap-2">
                          {step.title}
                          <ArrowRight className="w-4 h-4 text-orange-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                        </h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-12 text-center mt-5 mb-20">
              <div className="md:col-span-12 mt-8 rounded-md px-6 pt-12 pb-6 text-center border-t-2">
                <h3 className="text-3xl font-semibold mb-4 bg-clip-text bg-gradient-to-br from-orange-600 to-red-800 dark:from-orange-300 dark:to-red-700 text-transparent">
                  Fortify Your Defenses
                </h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                  Let us help you find and fix security flaws before adversaries can exploit them. Reach out now.
                </p>
                <Link href="/contact" passHref legacyBehavior>
                  <Button
                    size="lg"
                    className="px-8 py-2 rounded-full bg-gradient-to-b from-orange-500 to-red-600 text-white focus:ring-2 focus:ring-orange-400 hover:shadow-xl dark:hover:shadow-orange-900 transition duration-200 text-lg font-bold">
                    Book Your VAPT Now
                  </Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
