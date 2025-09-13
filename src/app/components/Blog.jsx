import Link from "next/link";

export default function Blog() {
  const posts = [
    { 
      id: 1, 
      title: "Artificial Intelligence", 
      date: "September 05, 2025", 
      slug: "ai", 
      image: "https://effvision.com/wp-content/uploads/2024/06/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1.jpg" 
    },
    { 
      id: 2, 
      title: "Future of Web", 
      date: "August 12, 2025", 
      slug: "web_future", 
      image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg" 
    },
    { 
      id: 3, 
      title: "Lynx", 
      date: "June 10, 2025", 
      slug: "lynx", 
      image: "/images/blogs/lynx.jpg" 
    },
  ];

  return (
    <section id="blogs" className="max-w-6xl mx-auto py-16 px-5 ">
      <h2 className="text-center text-4xl font-extrabold text-white mb-12">
        Latest Blogs
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group block bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <div className="relative overflow-hidden h-48">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Read More</span>
              </div>
            </div>

            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h3>
              <p className="text-gray-500 text-sm mb-3">🗓 {post.date}</p>
              <p className="text-blue-600 font-medium">Explore →</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
