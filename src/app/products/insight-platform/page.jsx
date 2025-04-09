'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScanSearch, Brain, Layers, LinkIcon, ArrowBigLeft } from 'lucide-react';

const InsightPlatformPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground py-16 mt-10 lg:mt-20">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <Link href="/products" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200">
            <ArrowBigLeft/>
            Back to Products
          </Link>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
              Vulnuris Insight Platform <span className="text-indigo-500">👁️</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Continuous asset discovery, vulnerability scanning, and risk prioritization – all in one powerful platform. Gain complete visibility and control over your attack surface.
            </p>
            <div className="bg-gray-200 rounded-md p-3 inline-block text-sm text-gray-600">
              Image Placeholder
            </div>
          </div>
          <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg aspect-video">
            <div className="flex items-center justify-center h-full text-gray-600">
              Hero Image Placeholder
            </div>
          </div>
        </div>

        {/* Key Features Section (Fun Layout) */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary tracking-tight mb-8 text-center">
            Unlock Powerful Insights ✨
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="shadow-md border-t-4 border-blue-500 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Layers className="w-6 h-6 text-blue-500" />
                  <span className="font-semibold">Real-time Asset Inventory</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Automatically discover and track all your assets as they appear and change in your environment.
                </p>
                <div className="relative mt-4 rounded-md overflow-hidden aspect-video">
                  <div className="flex items-center justify-center h-full bg-gray-200 text-gray-600">
                    Asset Inventory Placeholder
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md border-t-4 border-purple-500 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="w-6 h-6 text-purple-500" />
                  <span className="font-semibold">AI-powered Vulnerability Detection</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Leverage the power of artificial intelligence to identify vulnerabilities with greater accuracy and context.
                </p>
                <div className="relative mt-4 rounded-md overflow-hidden aspect-video">
                  <div className="flex items-center justify-center h-full bg-gray-200 text-gray-600">
                    AI Detection Placeholder
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md border-t-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <ScanSearch className="w-6 h-6 text-green-500" />
                  <span className="font-semibold">Contextual Risk Scoring</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Prioritize vulnerabilities based on their real-world risk, considering asset criticality and exploitability.
                </p>
                <div className="relative mt-4 rounded-md overflow-hidden aspect-video">
                  <div className="flex items-center justify-center h-full bg-gray-200 text-gray-600">
                    Risk Scoring Placeholder
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md border-t-4 border-orange-500 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <LinkIcon className="w-6 h-6 text-orange-500" />
                  <span className="font-semibold">Integration with Ticketing Systems</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Seamlessly integrate with your existing workflow by pushing findings directly into your ticketing systems.
                </p>
                <div className="relative mt-4 rounded-md overflow-hidden aspect-video">
                  <div className="flex items-center justify-center h-full bg-gray-200 text-gray-600">
                    Integration Placeholder
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits Section (Highlighted) */}
        <section className="bg-primary/5 rounded-lg py-12 px-8 mb-16">
          <h2 className="text-3xl font-bold text-primary tracking-tight mb-8 text-center">
            Why Choose Vulnuris Insight Platform? 💡
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-600 p-6 mb-4">
                <Layers className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Complete Visibility</h3>
              <p className="text-muted-foreground leading-relaxed">Know every asset in your environment, in real time.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-600 p-6 mb-4">
                <Brain className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Smarter Detection</h3>
              <p className="text-muted-foreground leading-relaxed">AI-powered insights for more accurate vulnerability identification.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center rounded-full bg-green-100 text-green-600 p-6 mb-4">
                <ScanSearch className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Actionable Prioritization</h3>
              <p className="text-muted-foreground leading-relaxed">Focus on the risks that matter most to your business.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center py-12">
          <h2 className="text-3xl font-bold text-primary tracking-tight mb-6">
            Ready to Gain Deeper Security Insights?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Request a demo or learn more about how Vulnuris Insight Platform can revolutionize your security posture.
          </p>
          <Link href="/contact" passHref legacyBehavior>
            <Button size="lg" className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold hover:opacity-90 transition duration-300 text-lg shadow-md">
              Learn More About Insight
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InsightPlatformPage;