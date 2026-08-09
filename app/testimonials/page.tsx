import Image from "next/image";
import { Star, Quote } from "lucide-react";

export const metadata = {
  title: "Testimonials & Case Studies | Prandhara Naturopathy",
  description: "Read real stories of healing and transformation from our clients.",
};

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    issue: "Chronic Migraines & Fatigue",
    quote: "After 10 years of relying on strong medications for my migraines, I finally found lasting relief with Prandhara. The combination of dietary changes, specific herbs, and stress management completely transformed my life. I haven't had a migraine in 6 months.",
    rating: 5
  },
  {
    name: "James T.",
    issue: "Digestive Issues (IBS)",
    quote: "I was told my IBS was something I just had to live with. Dr. Shailesh's systematic approach to identifying my food triggers and rebuilding my gut microbiome was eye-opening. I feel like I have my energy and freedom back.",
    rating: 5
  },
  {
    name: "Elena R.",
    issue: "PCOS & Hormonal Imbalance",
    quote: "The personalized care here is unmatched. They didn't just give me a generic plan; they really listened to my symptoms and adjusted my herbal regimen as my cycle changed. I'm finally experiencing regular cycles and clearer skin.",
    rating: 5
  },
  {
    name: "David K.",
    issue: "Anxiety & Insomnia",
    quote: "I came to Prandhara desperate for sleep. The mind-body techniques, combined with their calming herbal tinctures, helped regulate my nervous system in a way that sleep aids never could. Highly recommend their holistic approach.",
    rating: 5
  }
];

export default function TestimonialsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-6xl">
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl font-serif font-bold tracking-tight sm:text-5xl">Journeys to Vitality</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Healing is a personal journey, but you don't have to walk it alone. Read how others have restored their body's natural balance.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {TESTIMONIALS.map((testimonial, idx) => (
          <div key={idx} className="bg-card border rounded-3xl p-8 shadow-sm flex flex-col h-full relative overflow-hidden">
            <Quote className="absolute top-6 right-6 w-24 h-24 text-secondary/5 -rotate-12" />
            <div className="flex gap-1 mb-6 relative z-10">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-lg italic text-foreground mb-8 relative z-10 flex-1">
              "{testimonial.quote}"
            </p>
            <div className="border-t pt-6 mt-auto relative z-10">
              <p className="font-serif font-bold text-lg">{testimonial.name}</p>
              <p className="text-sm font-medium text-secondary">{testimonial.issue}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-sm text-muted-foreground">
          *Results may vary. These testimonials are shared with the explicit consent of the clients.
        </p>
      </div>
    </div>
  );
}
