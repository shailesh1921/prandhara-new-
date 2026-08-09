import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Blog & Research Hub | Prandhara Naturopathy",
  description: "Educational articles on naturopathic principles, evidence-based natural remedies, and seasonal wellness tips.",
};

const BLOG_POSTS = [
  {
    slug: "benefits-of-ayurvedic-diet",
    title: "Understanding the Ayurvedic Diet: Eating for Your Dosha",
    excerpt: "Discover how tailoring your nutrition to your unique mind-body constitution can optimize digestion and boost energy levels naturally.",
    date: "October 12, 2026",
    category: "Nutrition",
  },
  {
    slug: "hydrotherapy-at-home",
    title: "Simple Hydrotherapy Practices You Can Do at Home",
    excerpt: "Learn how alternating hot and cold water can stimulate your immune system, improve circulation, and speed up recovery.",
    date: "September 28, 2026",
    category: "Wellness Tips",
  },
  {
    slug: "herbs-for-stress-relief",
    title: "Top 5 Adaptogenic Herbs for Managing Chronic Stress",
    excerpt: "From Ashwagandha to Rhodiola, explore the evidence behind these powerful plants that help your body adapt to physical and mental stress.",
    date: "September 15, 2026",
    category: "Herbal Medicine",
  },
  {
    slug: "gut-brain-connection",
    title: "The Gut-Brain Axis: Why Your Microbiome Dictates Your Mood",
    excerpt: "A deep dive into the latest research linking gut health to anxiety and depression, and naturopathic ways to heal your microbiome.",
    date: "August 30, 2026",
    category: "Research",
  }
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-6xl">
      <div className="space-y-4 mb-16">
        <h1 className="text-4xl font-serif font-bold tracking-tight sm:text-5xl">Blog & Research Hub</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Insights, evidence-based remedies, and practical advice for living in alignment with nature.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {BLOG_POSTS.map((post) => (
          <article key={post.slug} className="group flex flex-col items-start justify-between bg-card border rounded-3xl p-8 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-x-4 text-xs mb-4">
              <time dateTime={post.date} className="text-muted-foreground">
                {post.date}
              </time>
              <span className="relative z-10 rounded-full bg-secondary/10 px-3 py-1.5 font-medium text-secondary">
                {post.category}
              </span>
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-2xl font-serif font-bold group-hover:text-primary transition-colors">
                <Link href={`/blog/${post.slug}`}>
                  <span className="absolute inset-0" />
                  {post.title}
                </Link>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-muted-foreground">
                {post.excerpt}
              </p>
            </div>
            <div className="mt-8 flex items-center gap-x-2 text-primary font-medium text-sm group-hover:underline">
              Read article <ArrowRight className="w-4 h-4" />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
