import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Server, Wifi, GlobeLock, AlertTriangle } from 'lucide-react';

const features = [
  {
    title: 'Firewall & IDS Configuration',
    description: 'Setup and optimize your firewall and intrusion detection systems for maximum security.',
    icon: <ShieldCheck className="w-6 h-6" />, 
    borderColor: 'border-red-500/50',
    hoverBorderColor: 'group-hover:border-red-500',
    iconColor: 'text-red-500'
  },
  {
    title: 'Network Segmentation',
    description: 'Isolate critical assets with smart segmentation strategies to limit breach impact.',
    icon: <Server className="w-6 h-6" />, 
    borderColor: 'border-yellow-500/50',
    hoverBorderColor: 'group-hover:border-yellow-500',
    iconColor: 'text-yellow-500'
  },
  {
    title: 'Wireless Security',
    description: 'Secure your WiFi infrastructure against unauthorized access and eavesdropping.',
    icon: <Wifi className="w-6 h-6" />, 
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
              <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 backdrop-blur-sm mb-6">
                <GlobeLock className="w-16 h-16 text-cyan-600" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-cyan-600 mb-6">
                Network Security
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Fortify your network infrastructure with cutting-edge security practices and vigilant monitoring.
              </p>
              <Link href="/contact" passHref legacyBehavior>
                <Button
                  size="lg"
                  className="px-8 py-2 rounded-full bg-gradient-to-b from-cyan-500 to-cyan-600 text-white focus:ring-2 focus:ring-cyan-400 hover:shadow-xl dark:hover:shadow-cyan-900 transition duration-200 text-lg font-bold">
                  Secure Your Network
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
                <h2 className="text-3xl font-bold">Why Network Security Is Crucial</h2>
                <div className="space-y-4">
                  {[
                    'Data Breach Prevention',
                    'Threat Containment & Response',
                    'Access Control Enforcement',
                    'Regulatory Compliance'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-gradient-to-br from-cyan-500/5 to-cyan-600/5 hover:from-cyan-500/10 hover:to-cyan-600/10 transition-colors duration-200">
                      <CheckCircle2 className="w-5 h-5 text-cyan-600" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/5 to-cyan-600/5 rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6">How We Secure Your Network</h2>
                <div className="space-y-6">
                  <p className="text-muted-foreground mb-6">
                    Our layecyan security approach addresses every angle of network protection, from endpoint to edge.
                  </p>
                  <div className="space-y-6">
                    {[
                      {
                        icon: <ShieldCheck className="w-6 h-6 text-cyan-600" />, 
                        title: 'Perimeter Hardening', 
                        description: 'Locking down all entry points to your network to deter unauthorized access.'
                      },
                      {
                        icon: <Server className="w-6 h-6 text-cyan-600" />, 
                        title: 'Internal Traffic Monitoring', 
                        description: 'Detecting anomalies and suspicious movements within your network.'
                      },
                      {
                        icon: <Wifi className="w-6 h-6 text-cyan-600" />, 
                        title: 'WiFi Penetration Testing', 
                        description: 'Assessing the strength and security posture of your wireless networks.'
                      },
                      {
                        icon: <AlertTriangle className="w-6 h-6 text-cyan-600" />, 
                        title: 'Incident Response Planning', 
                        description: 'Ensuring your team is prepacyan to respond effectively to potential breaches.'
                      }
                    ].map((step, index) => (
                      <div key={index} className="flex items-start space-x-4 group">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors duration-200">
                          {step.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-1 flex items-center gap-2">
                            {step.title}
                            <ArrowRight className="w-4 h-4 text-cyan-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
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
                <h3 className="text-3xl font-semibold mb-4 bg-clip-text bg-gradient-to-br from-cyan-600 to-cyan-950 dark:from-cyan-300 dark:to-cyan-700 text-transparent">
                  Lock Down Your Digital Perimeter
                </h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                  Reach out to fortify your network, improve resilience, and ensure you're a step ahead of threats.
                </p>
                <Link href="/contact" passHref legacyBehavior>
                  <Button
                    size="lg"
                    className="px-8 py-2 rounded-full bg-gradient-to-b from-cyan-500 to-cyan-600 text-white focus:ring-2 focus:ring-cyan-400 hover:shadow-xl dark:hover:shadow-cyan-900 transition duration-200 text-lg font-bold">
                    Let's Talk Security
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