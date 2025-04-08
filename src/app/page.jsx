import Certification from '@/components/Certification';
import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';
import WhatWeDo from '@/components/WhatWeDo';

export default function Home() {
  return (
    <div className='mt-20'>
      <Hero />
      <WhatWeDo />
      <Testimonials />
      <Certification />
    </div>
  );
}
