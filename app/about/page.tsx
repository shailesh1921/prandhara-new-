import Image from "next/image";
import { Leaf, Award, HeartHandshake } from "lucide-react";

export const metadata = {
  title: "About | Prandhara Naturopathy",
  description: "Learn about the founder, our philosophy, and the mission of Prandhara Naturopathy.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-5xl">
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl font-serif font-bold tracking-tight sm:text-5xl">About Prandhara</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Rooted in ancient wisdom, elevated by modern science. Our mission is to guide you back to your body's natural state of balance and vitality.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
          {/* Fallback color if image is missing */}
          <div className="absolute inset-0 bg-muted/50" />
          <Image 
            src="/images/founder.jpg" 
            alt="Founder of Prandhara" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-serif font-bold">Our Founder's Story</h2>
          <p className="text-muted-foreground leading-relaxed">
            The journey of Prandhara began with a simple but profound realization: true healing comes from within. After years of observing the limitations of symptom-focused treatments, our founder sought a more holistic approach that honored the intricate connection between mind, body, and spirit.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Through rigorous study of classical naturopathy, Ayurveda, and evidence-based nutritional science, Prandhara was born—a sanctuary where individuals are treated as whole ecosystems, not just a collection of symptoms.
          </p>
          <div className="pt-4 border-t">
            <h3 className="font-semibold mb-2">Credentials & Expertise</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Award className="w-4 h-4 text-primary" /> Doctor of Naturopathic Medicine (ND)</li>
              <li className="flex items-center gap-2"><Award className="w-4 h-4 text-primary" /> Certified Ayurvedic Practitioner</li>
              <li className="flex items-center gap-2"><Award className="w-4 h-4 text-primary" /> Member, Holistic Health Association</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-secondary/5 rounded-3xl p-8 md:p-12 mb-16 text-center space-y-6">
        <HeartHandshake className="w-12 h-12 text-primary mx-auto" />
        <h2 className="text-3xl font-serif font-bold">Our Philosophy</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          We believe that nature has provided everything we need to heal. By identifying the root cause of imbalance and utilizing the purest natural remedies alongside lifestyle modifications, we empower our clients to achieve sustainable, lifelong wellness. 
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-8 text-center">
        <div className="space-y-3">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto text-primary text-2xl font-serif">1</div>
          <h3 className="font-bold text-lg">Do No Harm</h3>
          <p className="text-sm text-muted-foreground">Utilizing non-invasive, natural therapies to minimize risk and side effects.</p>
        </div>
        <div className="space-y-3">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto text-primary text-2xl font-serif">2</div>
          <h3 className="font-bold text-lg">Treat the Root Cause</h3>
          <p className="text-sm text-muted-foreground">Looking beyond symptoms to address the underlying physiological imbalances.</p>
        </div>
        <div className="space-y-3">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto text-primary text-2xl font-serif">3</div>
          <h3 className="font-bold text-lg">Doctor as Teacher</h3>
          <p className="text-sm text-muted-foreground">Empowering you with the knowledge to maintain your own health independently.</p>
        </div>
      </div>
    </div>
  );
}
