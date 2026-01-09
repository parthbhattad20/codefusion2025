'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Building } from 'lucide-react';



const MapPlaceholder = ({ className }) => (
    <div className={`bg-muted rounded-lg flex items-center justify-center h-full min-h-[200px] ${className}`}>
        <MapPin className="w-8 h-8 text-muted-foreground mr-2" />
        <p className="text-muted-foreground font-medium">Map Placeholder</p>
    </div>
);


const ContactPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-16 font-primary mt-10 lg:mt-20">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold font-secondary bg-clip-text bg-gradient-to-br from-violet-500 to-blue-900 text-transparent">
            Get In Touch
          </h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about securing your organization? Reach out and let's start the conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 lg:gap-8 auto-rows-auto">

          <Card className="lg:row-span-2 order-1">
            <CardHeader>
              <CardTitle className="text-3xl">Send Us a Message</CardTitle>
              <CardDescription><span className="text-violet-800">V</span>'ll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Jane Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="jane.doe@example.com" required />
                  </div>
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input id="company" placeholder="Example Corp" />
                  </div>
                 <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Question about Pen Testing" required />
                  </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea id="message" placeholder="How can we help you secure your assets?" required rows={8} className="min-h-[150px] resize-none"/>
                </div>
                <Button type="submit" className="px-6 py-2 rounded-full bg-gradient-to-b from-violet-500 to-violet-600 text-white focus:ring-2 focus:ring-violet-400 hover:shadow-xl dark:hover:shadow-violet-900 transition duration-200 text-md">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          

         <Card className="lg:row-span-1 order-3">
  <CardHeader>
    <CardTitle className="text-2xl">Contact Information</CardTitle>
  </CardHeader>

  <CardContent className="space-y-6 text-sm">

    {/* Address Section */}
    <div className="flex items-start space-x-3">
      <Building className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
      <div className="w-full">
        <h4 className="font-semibold text-foreground mb-3">Our Offices</h4>

        {/* 1 column mobile, 2 columns tablet & desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <h5 className="font-semibold text-foreground">India</h5>
            <p className="text-muted-foreground">
              Anjali Apartment, Flat No. 2, Ground Floor, SR. No. 80/18/2,
              Near Sakal Nagar, Baner Road, Aundh, Pune – 411007
            </p>
          </div>

          <div>
            <h5 className="font-semibold text-foreground">Kuwait</h5>
            <p className="text-muted-foreground">
              5th Floor, Panasonic Tower,<br />
              Kuwait City, Kuwait
            </p>
          </div>

          <div>
            <h5 className="font-semibold text-foreground">USA</h5>
            <p className="text-muted-foreground">
              12310 Pinecrest Road,<br />
              Suite #306, Reston, VA 20191
            </p>
          </div>

          <div>
            <h5 className="font-semibold text-foreground">UAE</h5>
            <p className="text-muted-foreground">
              Vulnuris Security Solutions FZCO,<br />
              A1, IFZA, Dubai, UAE
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Email Section */}
    <div className="flex items-start space-x-3">
      <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
      <div>
        <h4 className="font-semibold text-foreground">Email Us</h4>
        <a
          href="mailto:hello@vulnuris.com"
          className="text-muted-foreground hover:text-primary transition-colors block"
        >
          hello@vulnuris.com,
        </a>
        <a
          href="mailto:connect@vulnuris.com"
          className="text-muted-foreground hover:text-primary transition-colors block"
        >
          connect@vulnuris.com
        </a>
      </div>
    </div>

    {/* Phone Section */}
    <div className="flex items-start space-x-3">
      <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
      <div>
        <h4 className="font-semibold text-foreground">Call Us</h4>
        <a
          href="tel:+918208387709"
          className="text-muted-foreground hover:text-primary transition-colors block"
        >
          +91 82083 87709
        </a>
      </div>
    </div>

  </CardContent>
</Card>


          <Card className="lg:row-span-1 order-2 p-4">
            <div className="w-full h-[200px] rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.5356794382787!2d73.81520277446211!3d18.54987316827994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf84aced01af%3A0x23bc82992e66db06!2sAnjali%20Apartments!5e0!3m2!1sen!2sin!4v1745442896851!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;