import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, FileSearch2, Bug, ScrollText } from 'lucide-react';

const features = [
  {
    title: 'Secure Coding Practices',
    description: 'Enforcing best coding practices to prevent vulnerabilities at the source.',
    icon: <ShieldCheck className="w-6 h-6" />,
    borderColor: 'border-green-500/50',
    hoverBorderColor: 'group-hover:border-green-500',
    iconColor: 'text-green-500'
  },
  {
    title: 'Dynamic & Static Testing',
    description: 'In-depth dynamic and static testing to identify runtime and code-based issues.',
    icon: <FileSearch2 className="w-6 h-6" />,
    borderColor: 'border-yellow-500/50',
    hoverBorderColor: 'group-hover:border-yellow-500',
    iconColor: 'text-yellow-500'
  },
  {
    title: 'Threat Modeling',
    description: 'Proactively identifying and mitigating potential threats to your application.',
    icon: <Bug className="w-6 h-6" />,
    borderColor: 'border-red-500/50',
    hoverBorderColor: 'group-hover:border-red-500',
    iconColor: 'text-red-500'
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

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Hero Content */}
            <div className="md:col-span-12 text-center mb-16">
              <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-green-500/10 to-green-600/10 backdrop-blur-sm mb-6">
                <ShieldCheck className="w-16 h-16 text-green-600" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-600 mb-6">
                Application Security
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Proactive and comprehensive security solutions to protect your applications from design to deployment.
              </p>
              <Link href="/contact" passHref legacyBehavior>
                <Button
                  size="lg"
                  className="px-8 py-2 rounded-full bg-gradient-to-b from-green-500 to-green-600 text-white focus:ring-2 focus:ring-green-400 hover:shadow-xl dark:hover:shadow-green-900 transition duration-200 text-lg font-bold">
                  Secure Your App Now
                </Button>
              </Link>
            </div>

            {/* Feature Cards */}
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

            {/* Benefits Section */}
            <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Why Application Security Matters</h2>
                <div className="space-y-4">
                  {[
                    'Prevention of Exploits',
                    'Secure Development Lifecycle',
                    'Improved User Trust',
                    'Compliance with Security Standards'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-gradient-to-br from-green-500/5 to-green-600/5 hover:from-green-500/10 hover:to-green-600/10 transition-colors duration-200">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-500/5 to-green-600/5 rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
                <div className="space-y-6">
                  <p className="text-muted-foreground mb-6">
                    We integrate security at every stage of your application's lifecycle, ensuring robust protection from end to end.
                  </p>
                  <div className="space-y-6">
                    {[
                      {
                        icon: <Bug className="w-6 h-6 text-green-600" />, 
                        title: 'Threat Modeling', 
                        description: 'Understanding the attack surface and identifying potential vulnerabilities early.'
                      },
                      {
                        icon: <ShieldCheck className="w-6 h-6 text-green-600" />, 
                        title: 'Secure Coding Review', 
                        description: 'Assessing code against security best practices to catch bugs before they become threats.'
                      },
                      {
                        icon: <FileSearch2 className="w-6 h-6 text-green-600" />, 
                        title: 'Security Testing', 
                        description: 'Running static and dynamic tests to uncover both known and unknown vulnerabilities.'
                      },
                      {
                        icon: <ScrollText className="w-6 h-6 text-green-600" />, 
                        title: 'Remediation Guidance', 
                        description: 'Providing clear, actionable recommendations to fix discovered vulnerabilities.'
                      }
                    ].map((step, index) => (
                      <div key={index} className="flex items-start space-x-4 group">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors duration-200">
                          {step.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-1 flex items-center gap-2">
                            {step.title}
                            <ArrowRight className="w-4 h-4 text-green-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                          </h3>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="md:col-span-12 text-center mt-5 mb-20">
              <div className="md:col-span-12 mt-8 rounded-md px-6 pt-12 pb-6 text-center border-t-2">
                <h3 className="text-3xl font-semibold mb-4 bg-clip-text bg-gradient-to-br from-green-600 to-green-950 dark:from-green-300 dark:to-green-700 text-transparent">
                  Protect Your Application from the Ground Up
                </h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                  Get in touch with us to ensure your applications are secure, compliant, and resilient.
                </p>
                <Link href="/contact" passHref legacyBehavior>
                  <Button
                    size="lg"
                    className="px-8 py-2 rounded-full bg-gradient-to-b from-green-500 to-green-600 text-white focus:ring-2 focus:ring-green-400 hover:shadow-xl dark:hover:shadow-green-900 transition duration-200 text-lg font-bold">
                    Talk to Our Experts
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
