import Certification from '@/components/Certification';
import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';
import Map from '@/components/Map';
import dynamic from "next/dynamic";
import WhatWeDo from '@/components/WhatWeDo';

export default function Home() {
  return (
    <div className='mt-20'>
      <Hero />
      <WhatWeDo />
      <Testimonials />
      <Map/>
      <Certification />
    </div>
  );
}
