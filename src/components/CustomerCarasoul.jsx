'use client'
import { motion } from "framer-motion";

const logos = [
  { src: "./assets/clients/kirloskar.png", alt: "Kirloskar company logo" },
  { src: "./assets/clients/kyb.png", alt: "KYB company logo" },
  { src: "./assets/clients/lnt.png", alt: "L&T company logo" },
  { src: "./assets/clients/piaggio.png", alt: "Piaggio company logo" },
  { src: "./assets/clients/revolut.png", alt: "Revolut company logo" },
  { src: "./assets/clients/sndt.png", alt: "Sndt org logo" },
  { src: "./assets/clients/technogen.png", alt: "Technogen company logo" },
  { src: "./assets/clients/theintell.png", alt: "theintell company logo" },
  { src: "./assets/clients/vidyan.png", alt: "PVG org logo" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Bajaj-Finserv-Logo.jpg/640px-Bajaj-Finserv-Logo.jpg", alt: "Bajaj Finserv" },
  { src: "./assets/clients/tatatech.png", alt: "Tata Technologies" },
  {src:"./assets/clients/oneam.png", alt:"OneAM" },
  {src: "./assets/clients/afs.png", alt:"AFS" },
  {src: "./assets/clients/camlin.png", alt:"Camlin" },
  {src: "./assets/clients/credimax.jpg", alt:"Credimax" },
  {src: "./assets/clients/hafeetrail.jpg", alt:"Hafeet Rail" },
  {src: "./assets/clients/paysii.png", alt:"Paysii" },
  {src: "./assets/clients/thomas_cook.jpg", alt:"Thomas Cook" },

];

export default function CustomerCarousel() {
  return (
    <div className="font-primary pt-10 w-full">
      <div className="w-full max-w-full">
        <h2 className="font-bold text-center lg:text-left text-xl text-gray-700 dark:text-gray-400">
          Making Security effortless for{" "}
          <span className="bg-gradient-to-b from-violet-400 to-violet-800 bg-clip-text text-transparent">
            200+
          </span>{" "}
          customers
        </h2>

        <div className="w-[70vw] overflow-hidden relative pt-4 pb-2 border-t mt-4 mx-auto">
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{
              x: ["0%", "-133%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 50,
                ease: "linear",
              },
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <img
                  className="opacity-80 filter grayscale hover:grayscale-0 hover:opacity-100 transition duration-300 max-h-full max-w-full object-contain"
                  src={logo.src}
                  alt={logo.alt}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}