import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Droplets, Utensils, Brain, Activity } from "lucide-react";

export const metadata = {
  title: "Services & Treatments | Prandhara Naturopathy",
  description: "Explore our holistic healing modalities including herbal medicine, nutritional therapy, and hydrotherapy.",
};

const SERVICES = [
  {
    id: "herbal-medicine",
    title: "Herbal Medicine",
    icon: <Leaf className="w-8 h-8 text-primary" />,
    description: "Custom-blended botanical remedies tailored to your unique constitution and health goals. Our herbs are ethically sourced and rigorously tested for purity.",
    helpsWith: ["Immunity", "Digestion", "Hormonal Balance", "Stress"],
  },
  {
    id: "hydrotherapy",
    title: "Hydrotherapy",
    icon: <Droplets className="w-8 h-8 text-primary" />,
    description: "The therapeutic use of water at varying temperatures to stimulate circulation, enhance detoxification, and boost the immune system naturally.",
    helpsWith: ["Circulation", "Detoxification", "Pain Relief", "Sleep"],
  },
  {
    id: "nutritional-therapy",
    title: "Nutritional Therapy",
    icon: <Utensils className="w-8 h-8 text-primary" />,
    description: "Food is medicine. We design personalized, anti-inflammatory diet plans that nourish your body at a cellular level and restore gut health.",
    helpsWith: ["Gut Health", "Energy Levels", "Weight Management", "Inflammation"],
  },
  {
    id: "mind-body",
    title: "Mind-Body Medicine",
    icon: <Brain className="w-8 h-8 text-primary" />,
    description: "Techniques including clinical mindfulness, guided meditation, and breathwork (Pranayama) to calm the nervous system and manage chronic stress.",
    helpsWith: ["Anxiety", "Insomnia", "Chronic Stress", "Emotional Well-being"],
  },
  {
    id: "lifestyle",
    title: "Lifestyle Counseling",
    icon: <Activity className="w-8 h-8 text-primary" />,
    description: "Sustainable modifications to your daily routine, aligning your sleep, movement, and environment with natural circadian rhythms.",
    helpsWith: ["Fatigue", "Burnout", "Habit Formation", "Preventative Care"],
  }
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-6xl">
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl font-serif font-bold tracking-tight sm:text-5xl">Our Modalities</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We combine traditional healing wisdom with modern clinical practice. Our treatments are always personalized, evidence-aware, and designed to support your body's inherent healing capacity.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service) => (
          <div key={service.id} className="flex flex-col bg-card border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              {service.icon}
            </div>
            <h2 className="text-2xl font-serif font-bold mb-3">{service.title}</h2>
            <p className="text-muted-foreground flex-1 mb-6">
              {service.description}
            </p>
            <div className="space-y-2 mb-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Helps With</h3>
              <div className="flex flex-wrap gap-2">
                {service.helpsWith.map((concern) => (
                  <span key={concern} className="bg-secondary/10 text-secondary text-xs px-2 py-1 rounded-md font-medium">
                    {concern}
                  </span>
                ))}
              </div>
            </div>
            <Button variant="outline" className="w-full mt-auto group" asChild>
              <Link href={`/consult?service=${service.id}`}>
                Book Session <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-20 bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 text-center shadow-lg">
        <h2 className="text-3xl font-serif font-bold mb-4">Not sure where to start?</h2>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
          During your initial consultation, our practitioners will assess your complete health history and recommend the exact combination of therapies best suited for your unique needs.
        </p>
        <Button size="lg" variant="secondary" asChild>
          <Link href="/consult">Schedule Initial Consultation</Link>
        </Button>
      </div>
    </div>
  );
}
