import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { ArrowRight, Leaf, Heart, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background overflow-hidden">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-secondary/10 px-3 py-1 text-sm text-secondary font-medium w-fit">
                  Vital Flow Healing
                </div>
                <h1 className="text-3xl font-serif font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-foreground">
                  Restore Your Body’s <span className="text-primary">Natural Wisdom</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl font-light">
                  Align with nature through personalized Ayurveda, expert naturopathy consultations, and holistic healing programs designed for your unique constitution.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Check My Dosha <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Book Consultation
                  </Button>
                </div>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last lg:aspect-square relative shadow-2xl">
                <Image
                  src="/hero.png"
                  alt="Ancient Banyan Tree by a stream"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
          {/* Decorative background elements if needed */}
          <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent rounded-l-full blur-3xl opacity-50"></div>
        </section>

        {/* Features / Philosophy */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-serif font-bold tracking-tighter sm:text-5xl">Holistic Healing Ecosystem</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Prandhara integrates ancient wisdom with modern convenience to support your journey to vitality.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 shadow-sm p-6 rounded-2xl bg-card border hover:shadow-md transition-all">
                <div className="p-3 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-serif">Personalized Plans</h3>
                <p className="text-muted-foreground">
                  AI-driven insights combined with Ayurvedic principles to create diet and lifestyle plans just for you.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4 shadow-sm p-6 rounded-2xl bg-card border hover:shadow-md transition-all">
                <div className="p-3 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold font-serif">Expert Care</h3>
                <p className="text-muted-foreground">
                  Connect with certified naturopaths and doctors via secure video consultations from home.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4 shadow-sm p-6 rounded-2xl bg-card border hover:shadow-md transition-all">
                <div className="p-3 w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-bold font-serif">Natural Remedies</h3>
                <p className="text-muted-foreground">
                  Shop curated, authentic herbal products and supplements verified for purity and potency.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm">© 2026 Prandhara - Vital Flow Healing. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-sm hover:underline" href="#">Terms</Link>
            <Link className="text-sm hover:underline" href="#">Privacy</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
