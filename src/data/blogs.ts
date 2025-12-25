export interface Blog {
  title: string;
  image: string;
  category: string;
  date: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
}

export const blogs: Blog[] = [
  {
    title: "The Future of Web Development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072",
    category: "Technology",
    date: "October 10, 2023",
    slug: "future-web-development",
    excerpt: "Exploring the latest trends and technologies shaping the web.",
    author: "Jane Doe",
    content: `
      <div class="space-y-6">
        <p class="text-gray-600">
          Web development is evolving at a rapid pace. From the rise of AI-assisted coding to the dominance of JAMstack architectures, the landscape is shifting. In this post, we explore what the next few years might hold for developers and businesses alike.
        </p>
        <h3 class="text-xl font-semibold">AI in Development</h3>
        <p class="text-gray-600">
          Artificial Intelligence is becoming an integral part of the development workflow. Tools like GitHub Copilot and ChatGPT are helping developers write code faster and with fewer errors.
        </p>
      </div>
    `,
  },
  {
    title: "Mastering UI/UX Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2000",
    category: "Design",
    date: "September 22, 2023",
    slug: "mastering-ui-ux",
    excerpt: "Key principles for creating intuitive and engaging user experiences.",
    author: "John Smith",
    content: `
      <div class="space-y-6">
        <p class="text-gray-600">
          Great design is more than just making things look good. It's about solving problems and creating intuitive experiences for users.
        </p>
        <h3 class="text-xl font-semibold">User-Centered Design</h3>
        <p class="text-gray-600">
          Always start with the user. Understanding their needs, behaviors, and pain points is crucial for creating a successful product.
        </p>
      </div>
    `,
  },
  {
    title: "The Power of SEO",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=2074",
    category: "Marketing",
    date: "August 15, 2023",
    slug: "power-of-seo",
    excerpt: "How to optimize your website to rank higher on search engines.",
    author: "Emily White",
    content: `
      <div class="space-y-6">
        <p class="text-gray-600">
          Search Engine Optimization (SEO) is essential for driving organic traffic to your website. It involves optimizing your content and technical setup to be search-engine friendly.
        </p>
        <h3 class="text-xl font-semibold">Content is King</h3>
        <p class="text-gray-600">
          High-quality, relevant content is the most important factor for SEO success. Write for your audience, not just for search engines.
        </p>
      </div>
    `,
  },
];
