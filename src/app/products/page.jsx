'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react'; 
import KloudRaksha from './kloudraksha/page';

const products = [
  {
    name: "Kloudraksha",
    tagline: "Secure , Optimise and Protect your cloud Infrastructure ",
    features: [
      "Cloud Configuration Audits",
      "Multi-Cloud Support",
      "Automated Remediation and Continuous Monitoring",
      "Customizable Reports"
    ],
    imageSrc: "./assets/products/kloudraksha.png", 
    imageAlt: "Vulnuris Insight Platform dashboard",
    link: "https://kloudraksha.com"
  },
  {
    name: "Vaultix",
    tagline: "Streamline Your IT Service Management",
    features: [
      "Asset management ",
      "Software Bill Of Materials",
      "Ticket Management",
    ],
    imageSrc: "./assets/products/Vumas.png",
    imageAlt: "Vulnuris Threat Intel dashboard",
    link: "https://vaultix.in"
  },
  {
    name: "Phishinstinct",
    tagline: "Train your employees and test their awareness against phishing attacks.",
    features: [
      "Customizable phishing templates",
      "Automated campaign scheduling",
      "Detailed reporting and analytics",
      "Integrated awareness training modules"
    ],
    imageSrc: "./assets/products/Phishinstinct.png",
    imageAlt: "Vulnuris PhishGuard interface",
    link: "https://phishinstinct.com"
  }
];

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-16 mt-10 lg:mt-20">
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
                { product.name === "Kloudraksha" &&(
                <Link href={product.link} passHref legacyBehavior>
                   <Button size="lg" variant="secondary" className="rounded-full mr-2 font-bold bg-gradient-to-br from-violet-500 to-violet-800 text-white focus:ring-2 focus:ring-violet-400 hover:shadow-xl dark:hover:shadow-violet-900 transition duration-200">
                       Coming Soon
                   </Button>
                </Link>
                 )}

                {product.name === "Vaultix" || product.name === "Phishinstinct" ? (
                <Link href={product.link} passHref legacyBehavior>
                   <Button size="lg" variant="secondary" className="rounded-full mr-2 font-bold bg-gradient-to-br from-violet-500 to-violet-800 text-white focus:ring-2 focus:ring-violet-400 hover:shadow-xl dark:hover:shadow-violet-900 transition duration-200">
                       New Features Coming Soon
                   </Button>
                </Link>
                 ):null}


                <Link href={product.link} passHref legacyBehavior>
                   <Button size="lg" variant="secondary" className="rounded-full font-bold bg-gradient-to-br from-violet-500 to-violet-800 text-white focus:ring-2 focus:ring-violet-400 hover:shadow-xl dark:hover:shadow-violet-900 transition duration-200">
                       Learn More
                   </Button>
                </Link>
              </div>

              
              <div className={`${index % 2 !== 0 ? '' : 'md:order-last'}`}>
                 <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="rounded-lg shadow-lg border border-border"
                 />
                
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