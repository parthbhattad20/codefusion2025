import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, CheckCircle2, FileSearch2, FileSearch, ScrollText, ShieldCheck } from 'lucide-react';

const features = [
  {
    title: 'Governance Frameworks',
    description: 'Establish and optimize security governance aligned with business goals.',
    icon: <ShieldCheck className="w-6 h-6" />,
    borderColor: 'border-emerald-500/50',
    hoverBorderColor: 'group-hover:border-emerald-500',
    iconColor: 'text-emerald-500'
  },
  {
    title: 'Risk Management',
    description: 'Identify, assess, and mitigate cybersecurity risks effectively.',
    icon: <FileSearch2 className="w-6 h-6" />,
    borderColor: 'border-orange-500/50',
    hoverBorderColor: 'group-hover:border-orange-500',
    iconColor: 'text-orange-500'
  },
  {
    title: 'Compliance Readiness',
    description: 'Achieve and maintain compliance with industry and regulatory standards.',
    icon: <ScrollText className="w-6 h-6" />,
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

          <div className="mb-16">
            <Link href="/services" className="group inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200">
              <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to Services
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-12 text-center mb-16">
              <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 backdrop-blur-sm mb-6">
                <ShieldCheck className="w-16 h-16 text-emerald-600" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-emerald-600 mb-6">
                GRC Advisory and Audit
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Helping your organization navigate governance, risk, and compliance challenges with expert guidance.
              </p>
              <Link href="/contact" passHref legacyBehavior>
                <Button
                  size="lg"
                  className="px-8 py-2 rounded-full bg-gradient-to-b from-emerald-500 to-emerald-600 text-white focus:ring-2 focus:ring-emerald-400 hover:shadow-xl dark:hover:shadow-emerald-900 transition duration-200 text-lg font-bold">
                  Get Started Today
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
                <h2 className="text-3xl font-bold">Why GRC Matters?</h2>
                <div className="space-y-4">
                  {[
                    'Improved Security Governance',
                    'Risk-aware Decision Making',
                    'Audit-ready Compliance',
                    'Operational Resilience'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-gradient-to-br from-emerald-500/5 to-emerald-600/5 hover:from-emerald-500/10 hover:to-emerald-600/10 transition-colors duration-200">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-500/5 to-emerald-600/5 rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6">Our GRC Process</h2>
                <div className="space-y-6">
                  <p className="text-muted-foreground mb-6">
                    Our comprehensive GRC services are designed to help businesses embed risk management into their culture and comply with relevant standards.
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
                        title: "Governance Review",
                        description: "Evaluate your existing governance structures and align them with industry best practices."
                      },
                      {
                        icon: <FileSearch className="w-6 h-6 text-emerald-600" />,
                        title: "Risk Assessment",
                        description: "Identify and assess key risks across your business functions and infrastructure."
                      },
                      {
                        icon: <ScrollText className="w-6 h-6 text-emerald-600" />,
                        title: "Compliance Mapping",
                        description: "Map current practices to standards like ISO 27001, NIST, HIPAA, and GDPR."
                      },
                      {
                        icon: <ArrowRight className="w-6 h-6 text-emerald-600" />,
                        title: "Audit & Reporting",
                        description: "Prepare your business for audits with documented controls and clear remediation guidance."
                      }
                    ].map((step, index) => (
                      <div key={index} className="flex items-start space-x-4 group">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-200">
                          {step.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-1 flex items-center gap-2">
                            {step.title}
                            <ArrowRight className="w-4 h-4 text-emerald-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                          </h3>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-12 text-center mt-5 mb-20">
              <div className="md:col-span-12 mt-8 rounded-md px-6 pt-12 pb-6 text-center border-t-2">
                <h3 className="text-3xl font-semibold mb-4 bg-clip-text bg-gradient-to-br from-emerald-600 to-emerald-950 dark:from-emerald-300 dark:to-emerald-700 text-transparent">
                  Ready to Strengthen Your Governance?
                </h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                  Connect with us to evaluate and enhance your GRC posture with expert-led advisory and audits.
                </p>
                <Link href="/contact" passHref legacyBehavior>
                  <Button
                    size="lg"
                    className="px-8 py-2 rounded-full bg-gradient-to-b from-emerald-500 to-emerald-600 text-white focus:ring-2 focus:ring-emerald-400 hover:shadow-xl dark:hover:shadow-emerald-900 transition duration-200 text-lg font-bold">
                    Schedule a Consultation
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
