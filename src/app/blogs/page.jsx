"use client";

import { BlogData } from "@/lib/blogData";
import Link from "next/link";
import Image from "next/image";

export default function BlogList() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 mt-20">
      <h1 className="text-3xl font-bold mb-8">Latest Blog Posts</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {BlogData.map((post) => (
          <Link key={post.slug} href={`/blogs/${post.slug}`}>
            <div className="border rounded-lg p-4 hover:shadow-lg transition">
              <div className="relative w-full aspect-video rounded-md overflow-hidden mb-4">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="text-sm text-gray-500">
                {post.date} • {post.readTime}
              </p>
              <p className="text-sm text-blue-600">{post.author}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
