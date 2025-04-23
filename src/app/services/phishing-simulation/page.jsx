import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldAlert, MailWarning, UserCheck, GlobeLock, AlertTriangle } from 'lucide-react';

const features = [
  {
    title: 'Simulated Phishing Campaigns',
    description: 'Realistic mock phishing emails tailored to your organization to test employee awareness.',
    icon: <MailWarning className="w-6 h-6" />, 
    borderColor: 'border-yellow-500/50',
    hoverBorderColor: 'group-hover:border-yellow-500',
    iconColor: 'text-yellow-500'
  },
  {
    title: 'Phishing Awareness Training',
    description: 'Educate employees with engaging training on how to detect and report phishing attempts.',
    icon: <ShieldAlert className="w-6 h-6" />, 
    borderColor: 'border-orange-500/50',
    hoverBorderColor: 'group-hover:border-orange-500',
    iconColor: 'text-orange-500'
  },
  {
    title: 'Response Readiness Evaluation',
    description: 'Test how quickly and effectively your team responds to a suspected phishing incident.',
    icon: <UserCheck className="w-6 h-6" />, 
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
          <div className="mb-16">
            <Link href="/services" className="group inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200">
              <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to Services
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-12 text-center mb-16">
              <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm mb-6">
                <MailWarning className="w-16 h-16 text-yellow-600" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-600 mb-6">
                Phishing Simulation
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Prepare your team for real threats with tailored phishing simulations and actionable training.
              </p>
              <Link href="/contact" passHref legacyBehavior>
                <Button
                  size="lg"
                  className="px-8 py-2 rounded-full bg-gradient-to-b from-yellow-500 to-orange-500 text-white focus:ring-2 focus:ring-yellow-400 hover:shadow-xl dark:hover:shadow-yellow-900 transition duration-200 text-lg font-bold">
                  Start Simulation
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
                <h2 className="text-3xl font-bold">Why Phishing Simulations Matter</h2>
                <div className="space-y-4">
                  {[
                    'Improve Employee Awareness',
                    'Measure Organizational Risk',
                    'Strengthen Response Capabilities',
                    'Mitigate Real-World Attacks'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-gradient-to-br from-yellow-500/5 to-orange-500/5 hover:from-yellow-500/10 hover:to-orange-500/10 transition-colors duration-200">
                      <CheckCircle2 className="w-5 h-5 text-yellow-600" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-500/5 to-orange-500/5 rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6">How Our Simulation Works</h2>
                <div className="space-y-6">
                  <p className="text-muted-foreground mb-6">
                    We deliver realistic phishing campaigns to assess employee vigilance and follow-up with targeted learning.
                  </p>
                  <div className="space-y-6">
                    {[
                      {
                        icon: <MailWarning className="w-6 h-6 text-yellow-600" />, 
                        title: 'Custom Email Campaigns', 
                        description: 'We create mock phishing emails that mimic real threats employees might face.'
                      },
                      {
                        icon: <ShieldAlert className="w-6 h-6 text-yellow-600" />, 
                        title: 'Engagement Tracking', 
                        description: 'Track click-through rates and identify high-risk users for further training.'
                      },
                      {
                        icon: <UserCheck className="w-6 h-6 text-yellow-600" />, 
                        title: 'Targeted Feedback & Learning', 
                        description: 'Provide just-in-time education and reinforcement after the test.'
                      },
                      {
                        icon: <AlertTriangle className="w-6 h-6 text-yellow-600" />, 
                        title: 'Reporting & Insights', 
                        description: 'Detailed metrics to help shape your future security awareness strategy.'
                      }
                    ].map((step, index) => (
                      <div key={index} className="flex items-start space-x-4 group">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors duration-200">
                          {step.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-1 flex items-center gap-2">
                            {step.title}
                            <ArrowRight className="w-4 h-4 text-yellow-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
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
                <h3 className="text-3xl font-semibold mb-4 bg-clip-text bg-gradient-to-br from-yellow-600 to-orange-600 text-transparent">
                  Ready to Test Your Defenses?
                </h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                  Empower your employees and reduce risk with hands-on phishing simulations tailored to your needs.
                </p>
                <Link href="/contact" passHref legacyBehavior>
                  <Button
                    size="lg"
                    className="px-8 py-2 rounded-full bg-gradient-to-b from-yellow-500 to-orange-500 text-white focus:ring-2 focus:ring-yellow-400 hover:shadow-xl dark:hover:shadow-yellow-900 transition duration-200 text-lg font-bold">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}