import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, SatelliteDish, CircuitBoard, AlertTriangle, ScrollText } from 'lucide-react';

const features = [
  {
    title: 'Embedded Device Hardening',
    description: 'Securing IoT firmware and hardware to resist tampering and unauthorized access.',
    icon: <CircuitBoard className="w-6 h-6" />,
    borderColor: 'border-blue-500/50',
    hoverBorderColor: 'group-hover:border-blue-500',
    iconColor: 'text-blue-500'
  },
  {
    title: 'Secure Communication Protocols',
    description: 'Ensuring data transmitted by IoT devices is encrypted and secure against interception.',
    icon: <SatelliteDish className="w-6 h-6" />,
    borderColor: 'border-purple-500/50',
    hoverBorderColor: 'group-hover:border-purple-500',
    iconColor: 'text-purple-500'
  },
  {
    title: 'Vulnerability Management',
    description: 'Detecting and mitigating security risks across all connected IoT endpoints.',
    icon: <AlertTriangle className="w-6 h-6" />,
    borderColor: 'border-orange-500/50',
    hoverBorderColor: 'group-hover:border-orange-500',
    iconColor: 'text-orange-500'
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
              <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 backdrop-blur-sm mb-6">
                <CircuitBoard className="w-16 h-16 text-blue-600" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-600 mb-6">
                IoT Security
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Protecting the ever-growing world of connected devices with robust IoT-specific security strategies.
              </p>
              <Link href="/contact" passHref legacyBehavior>
                <Button
                  size="lg"
                  className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl dark:hover:shadow-blue-900 transition duration-200 text-lg font-bold">
                  Secure Your IoT Devices
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
                <h2 className="text-3xl font-bold">Why IoT Security Matters</h2>
                <div className="space-y-4">
                  {[
                    'Mitigate Unauthorized Access Risks',
                    'Prevent Botnet and Malware Attacks',
                    'Protect User Privacy and Sensitive Data',
                    'Ensure Compliance with IoT Security Standards'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-gradient-to-br from-blue-500/5 to-blue-600/5 hover:from-blue-500/10 hover:to-blue-600/10 transition-colors duration-200">
                      <CheckCircle2 className="w-5 h-5 text-blue-600" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/5 to-blue-600/5 rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6">Our IoT Security Approach</h2>
                <div className="space-y-6">
                  <p className="text-muted-foreground mb-6">
                    We deliver tailored IoT security strategies that safeguard your smart environments from emerging threats.
                  </p>
                  <div className="space-y-6">
                    {[
                      {
                        icon: <CircuitBoard className="w-6 h-6 text-blue-600" />, 
                        title: 'Device Security Hardening', 
                        description: 'Implementing tamper-proof configurations and secure firmware updates.'
                      },
                      {
                        icon: <SatelliteDish className="w-6 h-6 text-blue-600" />, 
                        title: 'Secure Network Communication', 
                        description: 'Ensuring encrypted, authenticated data transfer between devices and platforms.'
                      },
                      {
                        icon: <AlertTriangle className="w-6 h-6 text-blue-600" />, 
                        title: 'IoT Threat Detection', 
                        description: 'Real-time monitoring and alerts for anomalous behavior across IoT endpoints.'
                      },
                      {
                        icon: <ScrollText className="w-6 h-6 text-blue-600" />, 
                        title: 'Remediation & Compliance', 
                        description: 'Remediation plans aligned with leading IoT security frameworks and standards.'
                      }
                    ].map((step, index) => (
                      <div key={index} className="flex items-start space-x-4 group">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-200">
                          {step.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-1 flex items-center gap-2">
                            {step.title}
                            <ArrowRight className="w-4 h-4 text-blue-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
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
                <h3 className="text-3xl font-semibold mb-4 bg-clip-text bg-gradient-to-br from-blue-600 to-blue-950 dark:from-blue-300 dark:to-blue-700 text-transparent">
                  Fortify Your IoT Ecosystem
                </h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                  Speak with our IoT security experts to proactively defend your connected devices and infrastructure.
                </p>
                <Link href="/contact" passHref legacyBehavior>
                  <Button
                    size="lg"
                    className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl dark:hover:shadow-blue-900 transition duration-200 text-lg font-bold">
                    Consult an Expert
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