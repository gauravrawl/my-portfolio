import { notFound } from "next/navigation";
import Link from "next/link";

const posts = {
  "ai": { 
    title: "Exploring the Impact of Artificial Intelligence in 2025", 
    date: "September 05, 2025", 
    content: `Artificial Intelligence (AI) continues to transform the way we live and work in 2025. From smart assistants in our homes to predictive analytics in business, AI is making processes faster, smarter, and more efficient. 
      
Key applications today include:
- Natural Language Processing enabling advanced chatbots and virtual assistants.
- Computer Vision driving autonomous vehicles and facial recognition.
- Machine Learning models improving decision-making in industries like finance, healthcare, and manufacturing.

Despite its tremendous benefits, ethical challenges and concerns about data privacy and job displacement remain hot topics. As developers, it's our responsibility to ensure AI systems are transparent, unbiased, and designed with user privacy in mind.

Stay updated with the latest AI breakthroughs and how they shape the future of technology.`  
  },

  "web_future": { 
    title: "The Future of Web Development: Trends to Watch in 2025", 
    date: "August 12, 2025", 
    content: `Web development is evolving at lightning speed, and 2025 is set to be a game-changer for developers and businesses alike. Here are some of the top trends to keep an eye on:

1. **Serverless Architecture**: More apps are moving towards serverless to reduce infrastructure complexity and scale automatically.

2. **Progressive Web Apps (PWA)**: With improved offline capabilities and app-like experiences, PWAs are closing the gap between web and native apps.

3. **Web3 and Decentralized Apps (DApps)**: Blockchain technology is empowering decentralized applications for better security and transparency.

4. **AI-Powered Development Tools**: Tools that use AI to assist with code generation, bug detection, and optimization are becoming indispensable.

5. **Component-Based Frameworks**: Frameworks like React, Vue, and the new Lynx.js are encouraging reusable component-driven development.

Understanding these trends helps developers stay competitive and build future-proof applications. The web development landscape will continue to embrace simplicity, speed, and scalability.` 
  },

  "lynx": { 
    title: "Introduction to Lynx.js: A Lightweight JavaScript Framework", 
    date: "June 10, 2025", 
    content: `In the ever-evolving world of web development, developers seek efficient, lightweight, and powerful frameworks to streamline their workflow. Lynx.js is an emerging JavaScript framework that provides a minimal yet effective approach to building modern web applications.

🔍 **Why Lynx.js?**
- Tiny bundle size, ensuring faster load times and better performance.
- Simplified reactivity model without the complexity of virtual DOM diffing.
- Declarative component-based structure that allows easy composition of UI components.

💡 **Key Features:**
- Reactive state management built-in.
- Simple and intuitive templating system.
- No build step required: Just include Lynx.js via a CDN and start coding.

🚀 **Benefits:**
- Faster development cycles due to its simplicity.
- Perfect for small to medium projects where full frameworks are overkill.
- Great learning tool for understanding reactivity and component-based architecture.

📚 Whether you're starting your first web project or looking for an alternative to heavy frameworks, Lynx.js offers a compelling choice for modern web development. Dive in and experience the power of lightweight, reactive development today!`
  },
};


export default function BlogPost({ params }) {
  const { slug } = params; 
  const post = posts[slug];

  if (!post) return notFound();

  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
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
      {/* <div className="mt-6 flex space-x-3">
        <span className="text-gray-600">Share:</span>
        <a href="#" className="text-blue-500 hover:text-blue-700">Twitter</a>
        <a href="#" className="text-blue-500 hover:text-blue-700">LinkedIn</a>
      </div> */}
    </div>
  );
}
