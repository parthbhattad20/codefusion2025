'use client'
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function Footer() {
  const { theme } = useTheme();

  const Underline = () => (
    <span className="absolute left-1/2 bottom-0 h-0.5 w-full bg-primary 
    scale-x-0 origin-center -translate-x-1/2 
    group-hover:scale-x-100 transition-transform duration-300" />
  );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-3 max-w-[92%] mx-auto pt-6 md:pt-10 font-primary">

        {/* Logo */}
        <div>
          <p className="text-sm mb-8 hidden lg:block w-50">
            Professional cybersecurity solutions protecting your digital assets since 2017.
            <br />
            Formarly Known as Newtonsapple Security Solutions LLP
          </p>

          <h2 className="text-3xl md:text-5xl  font-secondary flex items-center mt-15">
            {theme === 'light' ? (
              <Image src="/assets/vulnuris_logo_full1.png" width={256} height={700} alt="logo" />
            ) : (
              <Image src="/assets/vulnuris_logo_full2.png" width={256} height={700} alt="logo" />
            )}
          </h2>
        </div>

        {/* Links + Products */}
        <div className=" flex flex-col gap-6 items-start md:items-center">

          <div>
            <h2 className="text-xl font-semibold mb-4">Links</h2>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Blog", url: "/blogs" },
                { name: "FAQs", url: "/faqs" },
                { name: "Terms", url: "/terms" },
                { name: "Sitemap", url: "/sitemap" },
                { name: "Privacy Policy", url: "/privacy-policy" }
              ].map((item) => (
                <li key={item.name} className="relative group w-fit">
                  <Link href={item.url} className="relative inline-block pb-1">
                    {item.name}
                    <Underline />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Products</h2>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Vaultix", url: "/products/vumas" },
                { name: "Phishinstinct", url: "/products/phishinstinct" },
                { name: "Kloudraksha", url: "/products/kloudraksha" },
                { name: "Vcrypt", url: "/products/vcrypt" }
              ].map((item) => (
                <li key={item.name} className="relative group w-fit">
                  <Link href={item.url} className="relative inline-block pb-1">
                    {item.name}
                    <Underline />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-3 items-start ">
          <h2 className="text-xl font-semibold mb-2 ">Services</h2>
          <ul className="space-y-2 text-sm md:items-center">
            {[
              ["Virtual CISO", "/services/virtual-ciso"],
              ["GRC Advisory and Audit", "/services/grc-advisory"],
              ["Cloud Security", "/services/cloud-security"],
              ["Application Security", "/services/application-security"],
              ["Network Security", "/services/network-security"],
              ["Cyber Forensics", "/services/cyber-forensics"],
              ["VAPT", "/services/vapt"],
              ["Red Teaming", "/services/red-teaming"],
              ["Phishing Simulation", "/services/phishing-simulation"],
              ["IoT Security", "/services/iot-security"],
              ["AI Soc", "/services/ai-soc"]
            ].map(([name, url]) => (
              <li key={name} className="relative group w-fit">
                <Link href={url} className="relative inline-block pb-1">
                  {name}
                  <Underline />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Global Locations */}
        <div className="flex flex-col gap-3 items-start md:items-center">
          <h2 className="text-xl font-semibold mb-2">Global Locations</h2>
          <ul className="space-y-2 text-sm">
            {["US", "UAE", "UK", "Saudi Arabia"].map((loc) => (
              <li key={loc} className="relative group w-fit">
                <Link href="#" className="relative inline-block pb-1">
                  {loc}
                  <Underline />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Social</h3>
          <ul className="space-y-3">
            {[
              { name: "LinkedIn", icon: <Linkedin size={18} />, color: "hover:text-blue-500" },
              { name: "Instagram", icon: <Instagram size={18} />, color: "hover:text-pink-500" },
              { name: "Facebook", icon: <Facebook size={18} />, color: "hover:text-blue-600" }
            ].map((item) => (
              <li key={item.name} className="relative group w-fit">
                <Link
                  href="https://www.linkedin.com/company/vulnuris/"
                  target="_blank"
                  className={`relative flex items-center gap-3 pb-1 ${item.color}`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                  <Underline />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Certifications */}
        <div className="flex lg:col-start-4 lg:col-span-2 gap-6 items-center -mt-54">
          <img src="/assets/ISO-27701-certified.png" className="h-25 w-25 object-contain" />
          <img src="/assets/iso9001.png" className="h-25 w-25 object-contain" />
          <img src="/assets/iso27001.png" className="h-25 w-25 object-contain" />
        </div>
      </div>

      {/* Our Offices */}

<div className="max-w-[92%] mx-auto mt-12 pt-5 border-t border-white/25 pb-10">

  {/* Mobile: 1 col | Tablet: 2 col | Desktop: 4 col */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-sm">

    <div className="p-2">
      <h5 className="font-semibold mb-2">India</h5>
      <p className="opacity-80 leading-relaxed">
        Anjali Apartment, Flat No. 2, Ground Floor, SR. No. 80/18/2,
        Near Sakal Nagar, Baner Road, Aundh, Pune – 411007
      </p>
    </div>

    <div className="p-2 border-l border-white/25 lg:border-l">
      <h5 className="font-semibold mb-2">Kuwait</h5>
      <p className="opacity-80 leading-relaxed">
        5th Floor, Panasonic Tower,<br />
        Kuwait City, Kuwait
      </p>
    </div>

    <div className="p-2 border-l border-white/25  lg:border-l">
      <h5 className="font-semibold mb-2">USA</h5>
      <p className="opacity-80 leading-relaxed">
        12310 Pinecrest Road,<br />
        Suite #306, Reston, VA 20191
      </p>
    </div>

    <div className="p-2 border-l border-white/25 lg:border-l">
      <h5 className="font-semibold mb-2">UAE</h5>
      <p className="opacity-80 leading-relaxed">
        Vulnuris Security Solutions FZCO,<br />
        A1, IFZA, Dubai, UAE
      </p>
    </div>

  </div>
</div>



       
           
      {/* Bottom */}
      <div className="max-w-[92%] mx-auto pb-8 flex flex-col md:flex-row justify-between items-center gap-5">
        <p className="text-sm">© 2025 VULNURIS. All rights reserved.</p>
        <p>
          We are listed on{" "}
          <Link href="https://stafir.com" className="text-blue-600 underline">
            B2B Marketplace
          </Link>{" "}
          Stafir
        </p>
      </div>
    </>
  );
}
