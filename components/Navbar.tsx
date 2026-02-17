"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Leaf } from "lucide-react";

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
            <div className="container flex h-16 items-center px-4 md:px-6">
                <Link className="flex items-center gap-2 font-serif font-bold text-xl text-primary" href="/">
                    <Leaf className="h-6 w-6" />
                    <span>Prandhara</span>
                </Link>
                <nav className="ml-auto hidden gap-6 md:flex">
                    <Link
                        className="text-sm font-medium hover:text-primary transition-colors"
                        href="/assessment"
                    >
                        Heal (Dosha)
                    </Link>
                    <Link
                        className="text-sm font-medium hover:text-primary transition-colors"
                        href="/consult"
                    >
                        Consult
                    </Link>
                    <Link
                        className="text-sm font-medium hover:text-primary transition-colors"
                        href="/store"
                    >
                        Store
                    </Link>
                    <Link
                        className="text-sm font-medium hover:text-primary transition-colors"
                        href="/symptom-checker"
                    >
                        AI Guide
                    </Link>
                    <Link
                        className="text-sm font-medium hover:text-primary transition-colors"
                        href="/dashboard"
                    >
                        Dr. Portal
                    </Link>
                </nav>
                <div className="ml-auto flex items-center gap-4">
                    <Button variant="outline" className="hidden md:flex">
                        Login
                    </Button>
                    <Button className="hidden md:flex bg-primary text-primary-foreground hover:bg-primary/90">
                        Get Started
                    </Button>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </div>
            </div>
        </header>
    );
}
