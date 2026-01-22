'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SelectTheme } from './theme-toggler';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const FloatingNavbar = () => {
  const pathname = usePathname();
  const { theme } = useTheme();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openProduct, setOpenProduct] = useState(false);
  const [openService, setOpenService] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  const productItems = [
    { name: 'Vaultix', href: '/products/vaultix' },
    { name: 'Phishinstinct', href: '/products/phishinstinct' },
    { name: 'Kloudraksha', href: '/products/kloudraksha' },
    { name: 'Vcrypt', href: '/products/vcrypt' },
  ];


  const servicesMegaMenu = {
    'Application Security': [
      'VAPT',
      'Web Application Penetration Testing',
      'Mobile App Penetration Testing',
      'API Penetration Testing',
      'Secure Source Code Review',
      'Ecommerce Security',
      'SaaS Security',
    ],
    
    'Cyber Risk Management': [
      'ISO 27001 Consulting',
      'ISO 27701 Consulting',
      'Aramco CCC',
      'Dora Compliance',
      'HIPAA Compliance',
      'PCI DSS Compliance',
      'Cyber Security Strategic Consulting',
    ],
    'Enterprise Security': [
      'Virtual CISO Services',
      'Black Box Testing',
      'Email Security Audit',
      'Server Hardening',
      'Microsoft 365 Security',
      'ERP Security Audit Assessment',
      'Security Architecture Review',
    ],
     'Cloud Security': [
      'Cloud Security Audit',
      'Cloud Application Security Assessment',
      'AWS Server Hardening',
      'Azure Server Hardening',
      'GCP Server Hardening',
      'Container Security',
    ],
    'Data Privacy': [
      'DPO as a Service',
      'GDPR Compliance',
      'Data Privacy Consulting',
      'DPDPA',
    ],
     'Managed Services': [
      'Managed Security Services',
      'Security Operations Centre',
      'Annual Security Program',
    ],
    'Industrial Security': [
      'IoT Penetration Testing',
      'OT Security Assessment',
      'ICS Scada Security Testing',
    ],
    'Network Security': [
      'Firewall Assessment',
      'Network Penetration Testing',
      'Wireless Security Assessment',
    ],
    'Managed VAPT': [
      'Managed Threat Hunting',
      'Pro active threat hunting',
    ],
    
     'Threat simulations': [
      'Phishing Simulation',
      'Red Teaming',
    ],
  };

  const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

    
    


  return (
    // <nav className="fixed top-0 left-0 w-full z-50 bg-background/90 backdrop-blur-md shadow-lg">
    <nav
  className="
    fixed top-0 left-0 w-full z-50
    bg-background/70
    backdrop-blur-xl
    shadow-lg
    border-b border-white/10
    before:absolute before:inset-0
    before:bg-gradient-to-b before:from-white/20 before:to-transparent
    before:opacity-40
    before:pointer-events-none
  "
>

      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src={theme === 'light'
              ? '/assets/vulnuris_logo_full1.png'
              : '/assets/vulnuris.png'}
            alt="Vulnuris logo"
            width={180}
            height={50}
            priority
            className="object-contain"
          />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden z-50"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* NAV LINKS */}
        <div
          className={`fixed top-[80px] right-0 h-[calc(100vh-80px)] w-[85%] max-w-[360px]
          bg-background/95 transition-transform duration-300
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          lg:relative lg:inset-auto lg:h-auto lg:w-auto lg:translate-x-0 lg:bg-transparent`}
        >
          <ul className="flex flex-col items-start justify-start h-full px-6 pt-6 space-y-6
            lg:flex-row lg:items-center lg:justify-center lg:space-y-0 lg:gap-8 lg:px-0 lg:pt-0">

            {/* ABOUT */}
            <NavItem label="About" href="/about" pathname={pathname} close={() => setIsMenuOpen(false)} />

            {/* PRODUCTS */}
            <li className="relative w-full lg:w-auto text-left lg:text-left">

              {/* Desktop */}
              <div className="hidden lg:block group relative">
                <button className="text-sm font-medium relative">
                  Products
                  <Underline active={pathname.startsWith('/products')} />
                </button>

                <div className="absolute left-1/2 top-full hidden group-hover:block -translate-x-1/2 pt-4 z-50">
                  <div className="w-[260px] rounded-2xl bg-background border shadow-xl p-4">
                    {productItems.map(p => (
                      <Link
                        key={p.name}
                        href={p.href}
                        className="block px-4 py-2 rounded-lg text-sm hover:bg-primary/10"
                      >
                        {p.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile */}
              <div className="lg:hidden w-full">
                <button
                  onClick={() => setOpenProduct(!openProduct)}
                  className="text-lg font-medium w-full text-left"
                >
                  Products
                </button>

                {openProduct && (
                  <ul className="mt-3 space-y-2 text-left">
                    {productItems.map(p => (
                      <li key={p.name}>
                        <Link
                          href={p.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block px-4 py-2 text-muted-foreground hover:text-primary"
                        >
                          {p.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

            </li>

            {/* SERVICES */}
            <li className="relative w-full lg:w-auto text-left lg:text-left">

              {/* Desktop */}
              <div className="hidden lg:block group relative">
                <button className="text-sm font-medium relative">
                  Services
                  <Underline active={pathname.startsWith('/services')} />
                </button>

                <div className="absolute left-1/2 top-full hidden group-hover:block -translate-x-1/2 pt-4 z-50">
                  {/* <div className="w-[2000px] max-w-[100vw] rounded-2xl bg-background  p-6"> */}
                   <div
  className="w-[1100px] max-w-[95vw]
               rounded-2xl bg-background border shadow-2xl
               max-h-[90vh] overflow-y-auto p-6
               [-ms-overflow-style:none]
               [scrollbar-width:none]
               [&::-webkit-scrollbar]:hidden"
>
{/* <div className="grid grid-cols-5 gap-25 bg-background border rounded-2xl shadow-xl p-6 max-w-[93vw]"> */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

  {Object.keys(servicesMegaMenu).map(category => (
    <div key={category}>
      <h3 className="text-primary font-semibold mb-3 border-b pb-1">{category}</h3>
      <ul className="space-y-3">
        {servicesMegaMenu[category].map(item => (
          <li key={item}>
            <Link
             
              href={`/services/${slugify(category)}/${slugify(item)}`}
             className="text-sm text-muted-foreground  transition block"
              
            >
              {item}
             <span
      className="absolute left-0 -bottom-1 h-0.5 w-full bg-primary
                 scale-x-0 origin-left transition-transform duration-300
                 group-hover:scale-x-100"
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

              {/* Mobile */}
              <div className="lg:hidden w-full">
                <button
                  onClick={() => setOpenService(!openService)}
                  className="text-lg font-medium w-full text-left"
                >
                  Services
                </button>

                {openService && (
                  <ul className="mt-5 space-y-2 text-left">
                    {serviceItems.map(s => (
                      <li key={s.name}>
                        <Link
                          href={s.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block px-4 py-2  text-muted-foreground hover:text-primary"
                        >
                          {s.name}
                         
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

            </li>

            <NavItem label="SOC" href="/soc" pathname={pathname} close={() => setIsMenuOpen(false)} />
            <NavItem label="Contact" href="/contact" pathname={pathname} close={() => setIsMenuOpen(false)} />
            <NavItem label="Blogs" href="/blogs" pathname={pathname} close={() => setIsMenuOpen(false)} />

            {/* MOBILE THEME */}
            <li className="lg:hidden w-full flex justify-start pt-4">
              <SelectTheme />
            </li>

          </ul>
        </div>

        {/* DESKTOP THEME */}
        <div className="hidden lg:flex items-center gap-4">
          <div className={`h-5 w-px ${isScrolled ? 'bg-background/80 shadow-xl' : 'bg-background/60'}`} />
          <SelectTheme />
        </div>

      </div>
    </nav>
  );
};

export default FloatingNavbar;

/* ================= HELPERS ================= */

const NavItem = ({ label, href, pathname, close }) => (
  <li className="relative group">
    <Link
      href={href}
      onClick={close}
      className="text-lg lg:text-sm font-medium"
    >
      {label}
      <Underline active={pathname === href} />
    </Link>
  </li>
);

const Underline = ({ active }) => (
  <span
    className={`absolute left-0 right-0 bottom-0 h-0.5 bg-primary transition-transform duration-300
      ${active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
  />
);
