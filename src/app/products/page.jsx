'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react'; 


const ProductImagePlaceholder = ({ className, text = "Product Screenshot" }) => (
    <div className={`bg-muted border border-border rounded-lg flex items-center justify-center h-64 md:h-80 w-full ${className}`}>
        <p className="text-muted-foreground text-sm font-medium">{text}</p>
    </div>
);


const products = [
  {
    name: "Vulnuris Insight Platform",
    tagline: "Continuous asset discovery, vulnerability scanning, and risk prioritization.",
    features: [
      "Real-time asset inventory",
      "AI-powered vulnerability detection",
      "Contextual risk scoring",
      "Integration with ticketing systems"
    ],
    imageSrc: "/placeholder-product-1.png", 
    imageAlt: "Vulnuris Insight Platform dashboard",
    link: "/products/insight-platform"
  },
  {
    name: "Vulnuris Threat Intel",
    tagline: "Actionable threat intelligence tailored to your industry and infrastructure.",
    features: [
      "Curated threat feeds",
      "Dark web monitoring",
      "IOC tracking and alerting",
      "Executive threat briefings"
    ],
    imageSrc: "/placeholder-product-2.png",
    imageAlt: "Vulnuris Threat Intel dashboard",
    link: "/products/threat-intel"
  },
  {
    name: "Vulnuris PhishGuard",
    tagline: "Train your employees and test their awareness against phishing attacks.",
    features: [
      "Customizable phishing templates",
      "Automated campaign scheduling",
      "Detailed reporting and analytics",
      "Integrated awareness training modules"
    ],
    imageSrc: "/placeholder-product-3.png",
    imageAlt: "Vulnuris PhishGuard interface",
    link: "/products/phishguard"
  }
];

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-16">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text bg-gradient-to-br from-violet-500 to-blue-900 text-transparent">
            Our Security Products
          </h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            Integrated software solutions designed to give you visibility, context, and control over your security posture.
          </p>
        </div>

        <div className="space-y-20 md:space-y-28">
          {products.map((product, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">


              <div className={`space-y-6 ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">{product.name}</h2>
                <p className="text-lg text-muted-foreground">{product.tagline}</p>

                <ul className="space-y-3">
                  {product.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href={product.link} passHref legacyBehavior>
                   <Button size="lg" variant="secondary">
                       Learn More about {product.name.split(' ')[1]}
                   </Button>
                </Link>
              </div>

              
              <div className={`${index % 2 !== 0 ? '' : 'md:order-last'}`}>
                 <ProductImagePlaceholder text={`${product.name} Mockup`} />
                 {/* Replace Placeholder with:
                 <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="rounded-lg shadow-lg border border-border"
                 />
                 */}
              </div>

            </div>
          ))}
        </div>


        <div className="text-center mt-24 mb-10 border-t border-border pt-16">
          <h3 className="text-3xl font-semibold mb-4 bg-clip-text bg-gradient-to-br from-slate-500 to-slate-950 dark:from-slate-300 dark:to-slate-700 text-transparent">
            Integrate Your Defenses
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Discover how Vulnuris products and services work together to provide layered security.
          </p>
          <Link href="/contact?subject=Platform%20Demo" passHref legacyBehavior>
             <Button
               size="lg"
               className="px-8 py-2 rounded-full bg-gradient-to-b from-violet-500 to-violet-600 text-white focus:ring-2 focus:ring-violet-400 hover:shadow-xl dark:hover:shadow-violet-900 transition duration-200 text-lg font-bold">
               Request a Demo
             </Button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ProductsPage;