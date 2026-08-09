"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Leaf } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const NAV_LINKS = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Conditions", href: "/conditions" },
  { name: "Blog", href: "/blog" },
  { name: "Tools", href: "/assessment" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur-md">
      <div className="container flex h-16 items-center px-4 md:px-6 mx-auto">
        <Link className="flex items-center gap-2 font-serif font-bold text-xl text-primary" href="/">
          <Leaf className="h-6 w-6" />
          <span>Prandhara</span>
        </Link>
        <nav className="ml-auto hidden gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              className="text-sm font-medium hover:text-primary transition-colors"
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="outline" className="hidden md:flex">
            Login
          </Button>
          <Button className="hidden md:flex bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <Link href="/consult">Book Consult</Link>
          </Button>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <nav className="flex flex-col gap-4 mt-8">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    className="text-lg font-medium hover:text-primary transition-colors"
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  className="text-lg font-medium hover:text-primary transition-colors mt-4"
                  href="/consult"
                  onClick={() => setIsOpen(false)}
                >
                  Book Consult
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
