'use client';

import React, { useState,useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Building } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMsg('');

    const form = event.target;
    const formData = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      company: form.company.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setMsg('Message sent successfully!');
        form.reset();
        setSubject('');

        setTimeout(() => {
          setMsg('');
        }, 3000);
      } else {
        setMsg('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setMsg('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const searchParams = useSearchParams();
  const [subject, setSubject] = useState('');

  useEffect(() => {
    const s = searchParams.get('subject');
   if(s){
    setSubject(s);
   } 
  }, []);


  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.15 } } }}
      className="min-h-screen bg-background text-foreground px-6 py-16 font-primary mt-10 lg:mt-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Page Header */}
        <motion.div variants={fadeUp} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold font-secondary bg-clip-text bg-gradient-to-br from-violet-500 to-blue-900 text-transparent">
            Get In Touch
          </h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about securing your organization? Reach out and let's start the conversation.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 lg:gap-8 auto-rows-auto">

          {/* Contact Form */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="lg:row-span-2 order-1"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Send Us a Message</CardTitle>
                <CardDescription>
                  <span className="text-violet-800">V</span>'ll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" name="name" placeholder="Jane Doe" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" name="email" type="email" placeholder="jane.doe@example.com" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Phone Number (Optional)</Label>
                    <Input id="phone" name="phone" placeholder="123-456-7890"
                      pattern="^\+?[0-9]{10,15}$"
                      title="Please enter a valid phone number."
                      type="tel" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input id="company" name="company" placeholder="Example Corp" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    {/* <Input id="subject" name="subject" placeholder="Question about Pen Testing" required /> */}
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Question about Pen Testing"
                      value={subject} // controlled input
                      onChange={(e) => setSubject(e.target.value)}
                      required
                    />

                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="How can we help you secure your assets?"
                      required
                      rows={8}
                      className="min-h-[150px] resize-none"
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                    <Button
                      type="submit"
                      className="px-6 py-2 rounded-full bg-gradient-to-b from-violet-500 to-violet-600 text-white focus:ring-2 focus:ring-violet-400 hover:shadow-xl dark:hover:shadow-violet-900 transition duration-200 text-md"
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </motion.div>

                  {msg && <p className="mt-2 text-sm text-green-600">{msg}</p>}
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="lg:row-span-1 order-3"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-sm">

                <div className="flex items-start space-x-3">
                  <Building className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div className="w-full">
                    <h4 className="font-semibold text-foreground mb-3">Our Offices</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <h5 className="font-semibold text-foreground">India</h5>
                        <p className="text-muted-foreground">Nitaan Towers, Aundh, Pune, Maharashtra 411007</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-foreground">Kuwait</h5>
                        <p className="text-muted-foreground">Panasonic Tower, Kuwait City, Kuwait</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-foreground">USA</h5>
                        <p className="text-muted-foreground">12310 Pinecrest Road, Suite #306, Reston, VA 20191</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-foreground">UAE</h5>
                        <p className="text-muted-foreground">Vulnuris Security Solutions FZCO, A1, IFZA, Dubai, UAE</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Email Us</h4>
                    {/* <a href="mailto:hello@vulnuris.com" className="text-muted-foreground hover:text-primary transition-colors block">
                      hello@vulnuris.com
                    </a> */}
                    <a href="mailto:connect@vulnuris.com" className="text-muted-foreground hover:text-primary transition-colors block">
                      connect@vulnuris.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Call Us</h4>
                    <a href="tel:+918208387709" className="text-muted-foreground hover:text-primary transition-colors block">
                      +91 82083 87709
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Map */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="lg:row-span-1 order-2"
          >
            <Card className="p-4">
              <div className="w-full h-[200px] rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://www.google.com/maps?q=Vulnuris%2C%20Fifth%20Floor%2C%20Nitaan%20Towers%2C%20Terraza%20Rd%2C%20Shambhu%20Vihar%20Society%2C%20Aundh%2C%20Pune%2C%20Maharashtra%20411007&output=embed"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Card>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
