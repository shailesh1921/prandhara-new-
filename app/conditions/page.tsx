import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Conditions We Help With | Prandhara Naturopathy",
  description: "Learn how naturopathic medicine can support digestion, hormonal health, immunity, and more.",
};

const CONDITIONS = [
  {
    category: "Digestive Health",
    description: "The gut is the foundation of overall health. We address the root causes of digestive discomfort to restore optimal nutrient absorption and microbiome balance.",
    issues: ["IBS / IBD Support", "Acid Reflux / GERD", "Food Sensitivities", "Bloating & Indigestion", "Leaky Gut Syndrome"]
  },
  {
    category: "Hormonal Balance",
    description: "Hormones dictate our energy, mood, and metabolism. We use natural therapies to gently guide the endocrine system back into a state of equilibrium.",
    issues: ["PCOS & Endometriosis", "Thyroid Imbalances", "Menopause Support", "Adrenal Fatigue", "Irregular Cycles"]
  },
  {
    category: "Mental & Emotional Well-being",
    description: "Mental health is deeply connected to physical health. We support the nervous system through targeted nutrition, herbal medicine, and lifestyle adjustments.",
    issues: ["Chronic Stress", "Anxiety & Depression", "Insomnia & Sleep Disorders", "Brain Fog", "Burnout Recovery"]
  },
  {
    category: "Immunity & Autoimmune",
    description: "A resilient immune system protects without overreacting. We aim to modulate immune response, reduce systemic inflammation, and build robust defenses.",
    issues: ["Frequent Infections", "Autoimmune Conditions", "Chronic Fatigue Syndrome", "Allergies", "Post-Viral Recovery"]
  },
  {
    category: "Skin Health",
    description: "Skin conditions are often external manifestations of internal imbalances, particularly within the gut or liver. We treat skin issues from the inside out.",
    issues: ["Acne & Rosacea", "Eczema & Psoriasis", "Premature Aging", "Hives & Rashes"]
  },
  {
    category: "Pain Management",
    description: "Chronic pain drains vitality. Our holistic approach utilizes anti-inflammatory diets, specific herbs, and physical therapies to manage pain safely.",
    issues: ["Arthritis & Joint Pain", "Migraines & Headaches", "Fibromyalgia", "Muscle Tension"]
  }
];

export default function ConditionsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-6xl">
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl font-serif font-bold tracking-tight sm:text-5xl">Conditions We Support</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Naturopathic medicine does not just treat the disease; it treats the person. By addressing underlying imbalances, we can support the body in managing and overcoming a wide range of chronic and acute health concerns.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
        {CONDITIONS.map((cond, idx) => (
          <div key={idx} className="bg-card border p-8 rounded-3xl shadow-sm">
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">{cond.category}</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {cond.description}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {cond.issues.map((issue) => (
                <li key={issue} className="flex items-center text-sm font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mr-2" />
                  {issue}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-secondary/10 border border-secondary/20 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-serif font-bold mb-2">Don't see your condition listed?</h3>
          <p className="text-muted-foreground">Because we treat the whole person, our therapies are beneficial for many unlisted concerns. Reach out to discuss your specific situation.</p>
        </div>
        <Button size="lg" className="shrink-0" asChild>
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
      
      <div className="mt-8 text-center text-sm text-muted-foreground px-4">
        <p><strong>Disclaimer:</strong> The information provided is for educational purposes only. Naturopathic care at Prandhara is meant to complement, not replace, the advice and treatment of your primary care physician or licensed medical professional.</p>
      </div>
    </div>
  );
}
