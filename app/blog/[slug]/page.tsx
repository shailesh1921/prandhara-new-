import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  // In a real app, fetch the blog post from a CMS
  return {
    title: `${resolvedParams.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} | Prandhara Blog`,
    description: "Read the latest insights and research on holistic wellness at Prandhara Naturopathy.",
  };
}
export async function generateStaticParams() {
  return [
    { slug: 'benefits-of-ayurvedic-diet' },
    { slug: 'hydrotherapy-at-home' },
    { slug: 'herbs-for-stress-relief' },
    { slug: 'gut-brain-connection' },
  ];
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  // Mock data for the post
  const title = resolvedParams.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return (
    <article className="container mx-auto px-4 py-12 md:py-20 max-w-3xl">
      <Button variant="ghost" asChild className="mb-8 -ml-4">
        <Link href="/blog">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
      </Button>

      <div className="space-y-4 mb-12 border-b pb-8">
        <div className="flex items-center gap-x-4 text-sm text-muted-foreground">
          <time dateTime="2026-10-12">October 12, 2026</time>
          <span>•</span>
          <span>By Dr. Shailesh</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight">
          {title}
        </h1>
      </div>

      <div className="prose prose-lg prose-stone max-w-none">
        <p className="lead">
          This is a placeholder article for the topic: <strong>{title}</strong>. In a full production build, this content would be fetched from markdown files or a headless CMS like Sanity or Contentful.
        </p>
        
        <h2>The Importance of Natural Wisdom</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis risus varius bibendum. Suspendisse potenti. Vivamus euismod, justo eget venenatis aliquet, enim tortor lacinia nisl, nec faucibus nisi leo non sapien.
        </p>
        
        <h3>Key Takeaways</h3>
        <ul>
          <li>Always listen to your body's subtle signals.</li>
          <li>Nourish yourself with whole, unprocessed foods.</li>
          <li>Make time for rest and parasympathetic activation.</li>
        </ul>

        <h2>Applying the Principles</h2>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus vitae vulputate leo, sit amet lacinia arcu. Donec auctor, elit in varius condimentum, purus magna auctor mauris, a elementum felis justo nec ipsum.
        </p>

        <div className="bg-secondary/10 p-6 rounded-xl my-8 border border-secondary/20">
          <h4 className="font-serif font-bold text-lg mb-2">Did You Know?</h4>
          <p className="text-sm mb-0">
            Clinical studies have shown that just 20 minutes of exposure to nature can significantly lower cortisol levels and improve cognitive function.
          </p>
        </div>
      </div>
    </article>
  );
}
