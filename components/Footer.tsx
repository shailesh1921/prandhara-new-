import Link from "next/link";
import { Leaf, Facebook, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-secondary/5 border-t mt-auto">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <Link className="flex items-center gap-2 font-serif font-bold text-2xl text-primary" href="/">
              <Leaf className="h-6 w-6" />
              <span>Prandhara</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Restore your body's natural wisdom through personalized naturopathy and holistic healing.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg font-serif">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary">Our Services</Link></li>
              <li><Link href="/conditions" className="text-sm text-muted-foreground hover:text-primary">Conditions</Link></li>
              <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">Blog & Research</Link></li>
              <li><Link href="/testimonials" className="text-sm text-muted-foreground hover:text-primary">Testimonials</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg font-serif">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>123 Wellness Avenue</li>
              <li>Healing District, 10001</li>
              <li>contact@prandhara.com</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg font-serif">Newsletter</h3>
            <p className="text-sm text-muted-foreground">Subscribe for seasonal wellness tips and naturopathic insights.</p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2026 Prandhara - Vital Flow Healing. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link className="text-sm text-muted-foreground hover:underline underline-offset-4" href="/legal/privacy">
              Privacy Policy
            </Link>
            <Link className="text-sm text-muted-foreground hover:underline underline-offset-4" href="/legal/terms">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
