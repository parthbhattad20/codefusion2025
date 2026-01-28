"use client";

import {
  Building2,
  HeartPulse,
  Shield,
  Briefcase,
  Quote,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      text: "There's always something more to learn from these youngsters. I have seen them handle projects very efficiently and realized the potential they hold. Age is really just a number for them! Their team spirit, expertise, project delivery, adherence to timelines, professional etiquettes and leadership has left me speechless. All the best leaders of tomorrow!",
      industry: "Manufacturing",
      icon: <Building2 className="w-4 h-4 text-violet-500"/>,
      color: "violet",
      span: "md:col-span-2",
    },
    {
      text: "Within two months of delivering our first project audited by Vulnuris, we received 4 more projects through the same client. Their apt security consultancy, prompt and accurate IT security service, gave us the confidence to partner with Vulnuris. Soon, we connected with Mandar's team on strategic fronts and this helped us immensely in penetrating the Cyber Security market in Middle East.",
      industry: "Consultancy",
      icon: <Briefcase className="w-4 h-4 text-blue-500"/>,
      color: "blue",
      span: "md:col-span-3 md:place-self-end",
    },
    {
      text: "We are now associated with Vulenris for the last two years for security services. I found them extremely professional and very accommodating. Their understanding and positioning of services in Cyber Security is outstanding. In particular, my wavelength instantly synced with Aishwarya, who stands out in this male-dominated industry with her proficiency in cyber security.",
      industry: "CyberSecurity",
      icon: <Shield className="w-4 h-4 text-red-500"/>,
      color: "red",
      span: "md:col-span-3 md:place-self-start",
    },
    {
      text: "Our journey truly began when we got our first HIPAA Audit conducted by Vulnuris when our product was in an early stage. We received tremendous support and handholding to define and maintain the security posture of not just our product, but also our entire organization. Vulnuris team has been very cooperative and continue to be on our speed dial for all security.",
      industry: "Healthcare",
      icon: <HeartPulse className="w-4 h-4 text-cyan-500"/>,
      color: "cyan",
      span: "md:col-span-2",
    },
  ];

  const colorMap = {
    violet: "from-violet-500 to-violet-800 dark:to-violet-950",
    blue: "from-blue-500 to-blue-800 dark:to-blue-950",
    red: "from-red-500 to-red-800 dark:to-red-950",
    cyan: "from-cyan-500 to-cyan-800 dark:to-cyan-950",
  };

  const glowMap = {
    violet: "rgba(139, 92, 246, 0.3)",
    blue: "rgba(59, 130, 246, 0.3)",
    red: "rgba(239, 68, 68, 0.3)",
    cyan: "rgba(6, 182, 212, 0.3)",
  };

  return (
    <div className="flex flex-col gap-3 py-10 max-w-6xl mx-auto border-t px-4 relative overflow-hidden" id="testimonials">
      
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-10 left-10 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
          x: [0, -30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.h2
        className="text-4xl text-center font-bold relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.span
          className="inline-block"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Don't take our word for it!
        </motion.span>
        <br />
        <motion.span
          className="inline-block bg-gradient-to-r from-violet-600 via-cyan-600 to-violet-600 bg-clip-text text-transparent"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 6, repeat: Infinity }}
          style={{ backgroundSize: "200% auto" }}
        >
          See what our clients say
        </motion.span>
      </motion.h2>

      <motion.p
        className="text-md text-muted-foreground text-center max-w-xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Discover what professionals from Healthcare, Manufacturing,
        Cybersecurity, and more have to say about collaborating with us.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-6 relative z-10">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className={`rounded-lg p-6 relative overflow-hidden border shadow-xl backdrop-blur-md bg-foreground/5 dark:bg-white/10 ${t.span} group cursor-pointer`}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ 
              y: -12, 
              scale: 1.02,
              boxShadow: `0 20px 60px ${glowMap[t.color]}`,
            }}
            style={{ willChange: "transform" }}
          >
            {/* Gradient overlay on hover */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${colorMap[t.color]} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
            />

            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-violet-500/30 group-hover:shadow-lg transition-all duration-300" />

            {/* Animated quote watermark */}
            <motion.div
              className="absolute -bottom-2 right-2 opacity-10 rotate-12"
              animate={{ 
                y: [0, -8, 0],
                rotate: [12, 15, 12],
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Quote className={`w-24 h-24 text-${t.color}-500`} />
            </motion.div>

            <motion.p
              className="text-justify mb-4 relative z-10"
              initial={{ opacity: 0.9 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >{`"${t.text}"`}</motion.p>

            <motion.div
              className="flex items-center gap-2 mt-auto relative z-10"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-${t.color}-500 bg-black/2 dark:bg-white/10 border dark:border-white/20 group-hover:shadow-lg transition-shadow duration-300`}
                whileHover={{ scale: 1.05 }}
              >
                <motion.span
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  {t.icon}
                </motion.span>
                <span className="text-sm font-medium">{t.industry}</span>
              </motion.span>
            </motion.div>

            {/* Floating particles on hover */}
            <motion.div
              className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-${t.color}-500 opacity-0 group-hover:opacity-60`}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
            />
            <motion.div
              className={`absolute bottom-8 left-4 w-1.5 h-1.5 rounded-full bg-${t.color}-500 opacity-0 group-hover:opacity-50`}
              animate={{
                x: [0, -15, 0],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 0.3,
              }}
            />

            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
              animate={{ x: ["-100%", "200%"] }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                repeat: 0,
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}