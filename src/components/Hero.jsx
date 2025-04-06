import { Earth, Monitor, Smartphone, Users } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div className="font-primary h-[75vh] grid place-content-center">
      <div className="flex flex-col items-center my-6">
        <h1 className="text-7xl font-bold font-secondary max-w-3xl mx-auto">
          Securing your Digital
          World 1 byte at a time
        </h1>
        <p className="max-w-2xl text-center py-4 text-lg text-gray-400">
          Safeguard your organization's sensitive data and digital assets with
          confidence, relying on our proven cyber security services
        </p>
        <div className="flex gap-5 justify-center">
            <Button size="lg" className="px-8 py-2 rounded-full bg-gradient-to-b from-violet-500 to-violet-600 text-white focus:ring-2 focus:ring-violet-400 hover:shadow-xl dark:hover:shadow-violet-900 transition duration-200 text-lg font-bold">Get In Touch</Button>
            <Button size="lg" variant="outline" className="rounded-full font-bold text-lg">Learn More</Button>
        </div>
      </div>
      {/* <div>
        <h2>Our Trusted Parteners</h2>
      </div> */}
      <div className="flex flex-col items-center gap-4">
        <div className="grid grid-cols-4 gap-4">
            <div className="flex flex-col items-center border py-4 px-6 rounded-lg">
                <Users size={50} />
                <p className="text-3xl font-bold mt-3">200+</p>
                <p className="text-sm text-gray-500 mt-2">Happy Customers</p>
            </div>
            <div className="flex flex-col items-center border py-4 px-6 rounded-lg">
                <Smartphone size={50} />
                <p className="text-3xl font-bold mt-3">80+</p>
                <p className="text-sm text-gray-500 mt-2">Mobile Apps</p>
            </div>
            <div className="flex flex-col items-center border py-4 px-6 rounded-lg">
                <Earth size={50} />
                <p className="text-3xl font-bold mt-3">10,500+</p>
                <p className="text-sm text-gray-500 mt-2">IP Addresses</p>
            </div>
            <div className="flex flex-col items-center border py-4 px-6 rounded-lg">
                <Monitor size={50} />
                <p className="text-3xl font-bold mt-3">220+</p>
                <p className="text-sm text-gray-500 mt-2">Web Apps</p>
            </div>
        </div>
        <p className="text-lg text-gray-400">and counting...</p>
      </div>
    </div>
  );
}
