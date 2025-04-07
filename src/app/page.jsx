import Certification from '@/components/Certification';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';
import CyberChatBot from "@/components/CyberChatBot";

export default function Home() {
  
  return (
    <div>
      <Hero />
      <Testimonials />
      <Certification />
      <CyberChatBot />
      <div className='bg-foreground/5 backdrop-blur-sm dark:bg-white/10'>
        <Footer />
      </div>
    </div>
  );
}
