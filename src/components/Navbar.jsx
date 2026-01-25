"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SelectTheme } from "./theme-toggler";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

const FloatingNavbar = () => {
  const pathname = usePathname();
  const { theme } = useTheme();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openProduct, setOpenProduct] = useState(false);
  const [openService, setOpenService] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  const productItems = [
    { name: "Vaultix", href: "/products/vaultix" },
    { name: "Phishinstinct", href: "/products/phishinstinct" },
    { name: "Kloudraksha", href: "/products/kloudraksha" },
    { name: "Vcrypt", href: "/products/vcrypt" },
  ];

  const servicesMegaMenu = {
    "Application Security": [
      "VAPT",
      "Web Application Penetration Testing",
      "Mobile App Penetration Testing",
      "API Penetration Testing",
      "Secure Source Code Review",
      "Ecommerce Security",
      "SaaS Security",
    ],

    "Cyber Risk Management": [
      "ISO 27001 Consulting",
      "ISO 27701 Consulting",
      "Aramco CCC",
      "Dora Compliance",
      "HIPAA Compliance",
      "PCI DSS Compliance",
      "Cyber Security Strategic Consulting",
    ],
    "Enterprise Security": [
      "Virtual CISO Services",
      "Black Box Testing",
      "Email Security Audit",
      "Server Hardening",
      "Microsoft 365 Security",
      "ERP Security Audit Assessment",
      "Security Architecture Review",
    ],
    "Cloud Security": [
      "Cloud Security Audit",
      "Cloud Application Security Assessment",
      "AWS Server Hardening",
      "Azure Server Hardening",
      "GCP Server Hardening",
      "Container Security",
    ],
    "Data Privacy": [
      "DPO as a Service",
      "GDPR Compliance",
      "Data Privacy Consulting",
      "DPDPA",
    ],
    "Managed Services": [
      "Managed Security Services",
      "Security Operations Centre",
      "Annual Security Program",
    ],
    "Industrial Security": [
      "IoT Penetration Testing",
      "OT Security Assessment",
      "ICS Scada Security Testing",
    ],
    "Network Security": [
      "Firewall Assessment",
      "Network Penetration Testing",
      "Wireless Security Assessment",
    ],
    "Managed VAPT": ["Managed Threat Hunting", "Pro active threat hunting"],

    "Threat simulations": ["Phishing Simulation", "Red Teaming"],
  };

  const slugify = (text) =>
    text
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

  return (
    <nav
      className="
      fixed top-0 left-0 w-full z-50
      bg-background/70
      backdrop-blur-xl
      shadow-lg
      border-b border-white/10
      before:absolute before:inset-0
      before:bg-gradient-to-b before:from-white/20 before:to-transparent bg-foreground/5 backdrop-blur-md dark:bg-white/10 lg:border lg:border-white/10 lg:shadow-lg
      before:opacity-40
      before:pointer-events-none
    "
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src={
              theme === "light"
                ? "/assets/vulnuris_logo_full1.png"
                : "/assets/vulnuris.png"
            }
            alt="Vulnuris logo"
            width={180}
            height={50}
            priority
            className="object-contain"
          />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden z-50 p-2 rounded-lg hover:bg-primary/10 transition-colors"
          aria-label="Toggle menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isMenuOpen ? "close" : "menu"}
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </motion.div>
          </AnimatePresence>
        </motion.button>

        {/* BACKDROP */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-background/80 backdrop-blur-sm lg:hidden z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* MENU */}
        <motion.div
          className={`
    fixed top-[72px] right-0
    h-[calc(100vh-72px)]
    w-[90%] max-w-[360px]
    bg-background
    border-l border-border/40
    shadow-2xl
    z-50
    overflow-y-auto
    transition-transform duration-300 ease-in-out
    ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
    lg:relative lg:top-0 lg:h-auto lg:w-auto
    lg:translate-x-0 lg:border-none lg:shadow-none lg:bg-transparent lg:overflow-visible
  `}
          initial={false}
        >
          <ul
            className="flex flex-col items-start justify-start h-full px-6 pt-6 space-y-6
            lg:flex-row lg:items-center lg:justify-center lg:space-y-0 lg:gap-8 lg:px-0 lg:pt-0"
          >
            <NavItem
              label="About"
              href="/about"
              pathname={pathname}
              close={() => setIsMenuOpen(false)}
            />

            {/* Products Dropdown */}
            <li className="relative w-full lg:w-auto text-left lg:text-left">
              <div className="hidden lg:block group relative">
                <motion.button
                  className="text-sm font-medium relative flex items-center gap-1 py-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Products
                  <motion.span
                    animate={{ rotate: 0 }}
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={16} className="opacity-60" />
                  </motion.span>
                  <Underline active={pathname.startsWith("/products")} />
                </motion.button>

                <div className="absolute left-1/2 top-full hidden group-hover:block -translate-x-1/2 pt-4 z-50">
                  <motion.div
                    className="w-[280px] rounded-2xl bg-background/95 backdrop-blur-xl border border-border/40 shadow-2xl p-2 overflow-hidden"
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-cyan-500"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    />
                    {productItems.map((p, i) => (
                      <motion.div
                        key={p.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: i * 0.05 }}
                      >
                        <Link
                          href={p.href}
                          className="block px-4 py-3 rounded-lg text-sm hover:bg-primary/10 transition-all group/item"
                        >
                          <span className="relative inline-block">
                            {p.name}

                            <span
                              className="
        absolute left-1/2 -bottom-1
        h-0.5 w-full
        -translate-x-1/2
        bg-primary
        scale-x-0 origin-center
        transition-transform duration-300
        group-hover/item:scale-x-100
      "
                            />
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>

              {/* Mobile Products */}
              <div className="lg:hidden w-full">
                <motion.button
                  onClick={() => setOpenProduct(!openProduct)}
                  className="text-lg font-medium w-full text-left flex items-center justify-between py-2"
                  whileTap={{ scale: 0.98 }}
                >
                  Products
                  <motion.span
                    animate={{ rotate: openProduct ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={20} />
                  </motion.span>
                </motion.button>

                <AnimatePresence>
                  {openProduct && (
                    <motion.ul
                      className="mt-2 space-y-1 text-left overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {productItems.map((p, i) => (
                        <motion.li
                          key={p.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: i * 0.05 }}
                        >
                          <Link
                            href={p.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="group relative text-sm text-muted-foreground  transition inline-block "
                          >
                            {p.name}

                            <span className="absolute left-0 -bottom-2 h-0.5 w-full bg-primary scale-x-0 origin-center transition-transform duration-400 group-hover:scale-x-100" />
                          </Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            </li>

            {/* Services Dropdown */}
            <li className="relative w-full lg:w-auto text-left lg:text-left">
              <div className="hidden lg:block group relative">
                <motion.button
                  className="text-sm font-medium relative flex items-center gap-1 py-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Services
                  <motion.span
                    animate={{ rotate: 0 }}
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={16} className="opacity-60" />
                  </motion.span>
                  <Underline active={pathname.startsWith("/services/")} />
                </motion.button>

                <div className="absolute left-1/2 top-full hidden group-hover:block -translate-x-1/2 pt-4 z-50">
                  <div
                    className="w-[1100px] max-w-[95vw] rounded-2xl bg-background border shadow-2xl
                    max-h-[90vh] overflow-y-auto p-6
                    [-ms-overflow-style:none]
                    [scrollbar-width:none]
                    [&::-webkit-scrollbar]:hidden"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                      {Object.keys(servicesMegaMenu).map((category) => (
                        <div key={category}>
                          <h3 className="text-primary font-semibold mb-3 border-b pb-1">
                            {category}
                          </h3>
                          <ul className="space-y-2">
                            {servicesMegaMenu[category].map((item) => (
                              <li key={item}>
                                <Link
                                  href={`/services/${slugify(category)}/${slugify(item)}`}
                                  className="
      group/item
      text-sm text-muted-foreground
      transition
      inline-block
      relative
     
    "
                                >
                                  {item}

                                  <span
                                    className="
                                        absolute left-0 -bottom-1
                                        h-0.5 w-full 
                                        bg-primary
                                        scale-x-0 origin-center
                                        transition-transform duration-400
                                        group-hover/item:scale-x-100
                                        "
                                  />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Services */}
              <div className="lg:hidden w-full">
                <motion.button
                  onClick={() => setOpenService(!openService)}
                  className="text-base font-medium sm:text-lg w-full text-left flex items-center justify-between py-2"
                  whileTap={{ scale: 0.98 }}
                >
                  Services
                  <motion.span
                    animate={{ rotate: openService ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={20} />
                  </motion.span>
                </motion.button>

                <AnimatePresence>
                  {openService && (
                    <motion.ul
                      className="mt-3 space-y-3 text-left overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {Object.keys(servicesMegaMenu).map((category) => (
                        <CategoryDropdown
                          key={category}
                          category={category}
                          items={servicesMegaMenu[category]}
                          slugify={slugify}
                          closeMenu={() => setIsMenuOpen(false)}
                        />
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            </li>

            <NavItem
              label="SOC"
              href="/soc"
              pathname={pathname}
              close={() => setIsMenuOpen(false)}
            />
            <NavItem
              label="Contact"
              href="/contact"
              pathname={pathname}
              close={() => setIsMenuOpen(false)}
            />
            <NavItem
              label="Blogs"
              href="/blogs"
              pathname={pathname}
              close={() => setIsMenuOpen(false)}
            />

            <motion.li
              className="lg:hidden w-full flex justify-start pt-4 border-t border-border/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <SelectTheme />
            </motion.li>
          </ul>
        </motion.div>

        <div className="hidden lg:flex items-center gap-4">
          <div
            className={`h-5 w-px ${isScrolled ? "bg-background/80 shadow-xl" : "bg-background/60"}`}
          />
          <SelectTheme />
        </div>
      </div>
    </nav>
  );
};

export default FloatingNavbar;

const NavItem = ({ label, href, pathname, close }) => (
  <motion.li
    className="relative group"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 400 }}
  >
    <Link
      href={href}
      onClick={close}
      className="text-lg lg:text-sm font-medium py-2 block relative"
    >
      <motion.span className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
      {label}
      <Underline active={pathname === href} />
    </Link>
  </motion.li>
);

const CategoryDropdown = ({ category, items, slugify, closeMenu }) => {
  const [openCategory, setOpenCategory] = useState(false);

  return (
    <li>
      <motion.button
        onClick={() => setOpenCategory(!openCategory)}
        className="w-full text-left flex items-center justify-between py-2 px-3  dark:bg-muted/30 hover:text-primary rounded-lg"
        whileTap={{ scale: 0.98 }}
      >
        <span className="font-semibold  text-sm">{category}</span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${openCategory ? "rotate-180" : ""}`}
        />
      </motion.button>

      <AnimatePresence>
        {openCategory && (
          <motion.ul
            className="mt-1 space-y-1 pl-4"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {items.map((item) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={`/services/${slugify(category)}/${slugify(item)}`}
                  onClick={closeMenu}
                  className="group relative inline-block py-1.5 px-2 text-sm rounded transition-all "
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-primary scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100" />
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
};

const Underline = ({ active }) => (
  <motion.span
    className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500"
    initial={{ scaleX: 0 }}
    animate={{ scaleX: active ? 1 : 0 }}
    transition={{ duration: 0.3 }}
    style={{ transformOrigin: "left" }}
  />
);