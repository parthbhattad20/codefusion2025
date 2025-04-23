"use client"
import { ArrowUpRight, Globe, Network, Smartphone, Users } from "lucide-react";
import { Button } from "./ui/button";
import Counter from "./Counter";
import CustomerCarasoul from "./CustomerCarasoul";

export default function Hero() {
  return (
    <div className="font-primary pt-10 grid place-content-center">
      <div className="flex flex-col items-center my-6 pt-14 lg:py-14 relative">

      <div
        className="absolute -z-10 inset-0 overflow-hidden pointer-events-none w-full"
        style={{
          WebkitMaskImage: 'radial-gradient(circle at center, rgba(0,0,0,1) 0%, rgba(0, 0, 0, 0) 95%)',
          maskImage: 'radial-gradient(circle at center, rgba(0,0,0,1) 0%, rgba(0, 0, 0, 0) 95%)',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          maskPosition: 'center',
          WebkitMaskSize: 'cover',
          maskSize: 'cover',
        }}
        aria-hidden="true"
      >
        <div
          className="absolute top-1/2 left-1/2 aspect-square -translate-x-1/2 -translate-y-full h-[100vh] border border-violet-500/30 rounded-full shadow-[0_0_30px_10px_rgba(139,92,246,0.5)]"
          style={{
            width: 'clamp(300px, 100vw, 1200px)',
            clipPath: 'inset(80% 0 0 0)',
            background: `
              linear-gradient(to top,
                rgba(123, 22, 205, 0.26) 0%,
                rgba(164, 55, 236, 0) 20%)
            `,
          }}
        />

        
        <div
          className="absolute bottom-1/2 left-1/2 aspect-square  -translate-x-1/2 translate-y-full h-[100vh] border border-violet-500/30 rounded-full shadow-[0_0_30px_10px_rgba(139,92,246,0.5)]"
          style={{
            width: 'clamp(300px, 100vw, 1200px)',
            clipPath: 'inset(0 0 80% 0)',
            background: `
              linear-gradient(to bottom,
                rgba(123, 22, 205, 0.26) 0%,
                rgba(164, 55, 236, 0) 20%)
            `,
          }}
        />

        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4 blur-sm rounded-full bg-gradient-to-r from-violet-500/5 via-violet-500/80 to-violet-500/5"
          style={{
            width: 'clamp(150px, 50vw, 600px)',
          }}
        />
      </div>



        <h1 className="text-5xl md:text-7xl font-bold font-secondary max-w-3xl mx-auto text-center">
          Securing your Digital World 1 byte at a time
        </h1>
        <p className="max-w-2xl text-center py-4 md:text-lg text-gray-400">
          Safeguard your organization's sensitive data and digital assets with
          confidence, relying on our proven cyber security services
        </p>
        <div className="flex gap-5 justify-center">
          <Button
            size="lg"
            className="px-8 py-2 rounded-full bg-gradient-to-b from-violet-500 to-violet-600 text-white focus:ring-2 focus:ring-violet-400 hover:shadow-xl dark:hover:shadow-violet-900 transition duration-200 text-lg font-bold"
          >
            Get In Touch
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full font-bold text-lg"
          >
            Learn More
          </Button>
        </div>
      </div>
      <CustomerCarasoul/>

      <div className="relative w-full max-w-5xl mx-auto px-4 py-12">
        
        <h3 className="text-3xl font-bold font-secondary text-center mb-8">
          Our Security Impact
          <div className="h-1 w-20 bg-gradient-to-r from-violet-500 to-violet-600 mx-auto mt-2 rounded-full"></div>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          <div className="group hover:scale-105 transition-all duration-300">
            <div className="flex flex-col items-center p-6 rounded-xl border border-violet-500/20 bg-foreground/5 backdrop-blur-sm hover:border-violet-500/40 transition-all">
              <div className="p-3 rounded-full bg-violet-500/10 mb-4 group-hover:bg-violet-500/20 transition-all">
                <Smartphone className="w-8 h-8 text-violet-500" />
              </div>
              <div className="flex items-baseline gap-1">
                <p className="text-4xl font-bold bg-gradient-to-r from-violet-500 to-violet-700 bg-clip-text text-transparent">
                <Counter to={80} suffix="+" />

                </p>
                <ArrowUpRight className="w-4 h-4 text-violet-500" />
              </div>
              <p className="text-sm text-gray-500 mt-2 font-medium">Mobile Apps Secured</p>
            </div>
          </div>

          <div className="group hover:scale-105 transition-all duration-300">
            <div className="flex flex-col items-center p-6 rounded-xl border border-violet-500/20 bg-foreground/5 backdrop-blur-sm hover:border-violet-500/40 transition-all">
              <div className="p-3 rounded-full bg-violet-500/10 mb-4 group-hover:bg-violet-500/20 transition-all">
                <Network className="w-8 h-8 text-violet-500" />
              </div>
              <div className="flex items-baseline gap-1">
                <p className="text-4xl font-bold bg-gradient-to-r from-violet-500 to-violet-700 bg-clip-text text-transparent">
                <Counter to={11} suffix="k+" />
                </p>
                <ArrowUpRight className="w-4 h-4 text-violet-500" />
              </div>
              <p className="text-sm text-gray-500 mt-2 font-medium">IP Addresses Protected</p>
            </div>
          </div>

          <div className="group hover:scale-105 transition-all duration-300">
            <div className="flex flex-col items-center p-6 rounded-xl border border-violet-500/20 bg-foreground/5 backdrop-blur-sm hover:border-violet-500/40 transition-all">
              <div className="p-3 rounded-full bg-violet-500/10 mb-4 group-hover:bg-violet-500/20 transition-all">
                <Globe className="w-8 h-8 text-violet-500" />
              </div>
              <div className="flex items-baseline gap-1">
                <p className="text-4xl font-bold bg-gradient-to-r from-violet-500 to-violet-700 bg-clip-text text-transparent">
                <Counter to={220} suffix="+" />
                </p>
                <ArrowUpRight className="w-4 h-4 text-violet-500" />
              </div>
              <p className="text-sm text-gray-500 mt-2 font-medium">Web Apps Fortified</p>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          Continuously expanding our security footprint
          <span className="inline-block w-1.5 h-1.5 bg-violet-500 rounded-full ml-1 animate-pulse"></span>
        </p>
      </div>
    </div>
  );
}
