"use client";

import { BlogData } from "@/lib/blogData";
import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function BlogList() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className="max-w-5xl mx-auto px-4 py-10 mt-10 lg:mt-20"
    >
      <motion.h1
        variants={cardVariants}
        className="text-3xl font-bold mb-8 text-foreground"
      >
        Latest Blog Posts
      </motion.h1>

      <motion.div
        variants={containerVariants}
        className="grid gap-6 sm:grid-cols-2"
      >
        {BlogData.map((post) => (
          <motion.div
            key={post.slug}
            variants={cardVariants}
            whileHover={{
              y: -6,
              scale: 1.015,
              transition: { type: "spring", stiffness: 250, damping: 18 },
            }}
          >
            <Link href={`/blogs/${post.slug}`} passHref>
              <Card className="cursor-pointer shadow-md hover:shadow-2xl transition-shadow duration-300 p-0 overflow-hidden group">

                <CardHeader className="p-0 mb-4">
                  <div className="relative w-full aspect-video overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="w-full h-full"
                    >
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </div>
                </CardHeader>

                <CardContent className="px-4 pb-4">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {post.date} • {post.readTime}
                  </p>

                  <p className="text-sm text-primary mt-1">
                    {post.author}
                  </p>
                </CardContent>

              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
