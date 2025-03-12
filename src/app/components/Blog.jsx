import Link from "next/link";

export default function Blog() {
    const posts = [
      { 
        id: 1, 
        title: "Artificial Intelligence", 
        date: "March 12, 2025", 
        slug: "ai", 
        image: "https://effvision.com/wp-content/uploads/2024/06/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1.jpg" 
      },
      { 
        id: 2, 
        title: "Future of Web", 
        date: "March 10, 2025", 
        slug: "learning-nextjs", 
        image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg" 
      },
      { 
        id: 2, 
        title: "Future of Web", 
        date: "March 10, 2025", 
        slug: "learning-nextjs", 
        image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg" 
      },
    ];
  
    return (
      <section id="blogs" className="max-w-5xl mx-auto py-10 px-5">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          Blogs
        </h2>
  
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <img src={post.image} alt={post.title} className="w-full h-40 object-cover"/>
              
              <div className="p-5">
                <h3 className="text-2xl font-semibold text-gray-800">{post.title}</h3>
                <p className="text-gray-500 text-sm mt-1">🗓 {post.date}</p>
                <p className="text-gray-600 mt-3">Read more...</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    );
  }
  