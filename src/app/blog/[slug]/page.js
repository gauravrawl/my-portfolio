import { notFound } from "next/navigation";
import Link from "next/link";

const posts = {
  "ai": { 
    title: "My First Blog Post", 
    date: "March 12, 2025", 
    content: "This is my first blog post! I'm excited to share my journey in web development." 
  },
  "learning-nextjs": { 
    title: "Learning Next.js", 
    date: "March 10, 2025", 
    content: "Next.js is an amazing framework for React developers. It simplifies server-side rendering and provides powerful features like API routes and static site generation." 
  },
};

export default function BlogPost({ params }) {
  const { slug } = params; 
  const post = posts[slug];

  if (!post) return notFound();

  return (
    <div className="max-w-3xl mx-auto py-10 px-6 bg-transparent">
      {/* Back Button */}
      <Link href="/#blogs" className="text-blue-600 hover:underline flex items-center space-x-2">
        ⬅ Back to Blog
      </Link>

      {/* Blog Card */}
      <div className="bg-white shadow-lg rounded-lg p-6 mt-5 border border-gray-200">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{post.title}</h1>
        <p className="text-gray-500 text-sm mb-6">🗓 {post.date}</p>
        <p className="text-gray-700 leading-relaxed">{post.content}</p>
      </div>

      {/* Share Section */}
      <div className="mt-6 flex space-x-3">
        <span className="text-gray-600">Share:</span>
        <a href="#" className="text-blue-500 hover:text-blue-700">Twitter</a>
        <a href="#" className="text-blue-500 hover:text-blue-700">LinkedIn</a>
      </div>
    </div>
  );
}
