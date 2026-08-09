import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us | Prandhara Naturopathy",
  description: "Get in touch to begin your holistic healing journey.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-6xl">
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl font-serif font-bold tracking-tight sm:text-5xl">Connect With Us</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Whether you have a question about our services or are ready to schedule a consultation, we're here to help.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-serif font-bold mb-6">Reach Out</h2>
            <p className="text-muted-foreground mb-8">
              Fill out the form and our care coordinator will get back to you within 24 business hours to discuss your needs and answer any questions.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                <Input id="firstName" placeholder="John" />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                <Input id="lastName" placeholder="Doe" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email Address</label>
              <Input id="email" type="email" placeholder="john@example.com" />
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">Subject</label>
              <Input id="subject" placeholder="How can we help you?" />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <Textarea id="message" placeholder="Please provide some details..." className="min-h-[120px]" />
            </div>

            <Button type="submit" size="lg" className="w-full sm:w-auto">
              Send Message
            </Button>
          </form>
        </div>

        <div className="space-y-10 bg-secondary/5 rounded-3xl p-8 md:p-12 border">
          <div>
            <h3 className="text-xl font-bold font-serif mb-6">Contact Information</h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <MapPin className="w-6 h-6 text-primary mr-4 shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Clinic Location</p>
                  <p className="text-muted-foreground">123 Wellness Avenue<br />Healing District, 10001<br />(By Appointment Only)</p>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="w-6 h-6 text-primary mr-4 shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <p className="text-muted-foreground">(555) 123-4567</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="w-6 h-6 text-primary mr-4 shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-muted-foreground">contact@prandhara.com</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="w-6 h-6 text-primary mr-4 shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Hours of Operation</p>
                  <p className="text-muted-foreground">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 2:00 PM<br />Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="pt-8 border-t border-secondary/20">
            <h4 className="font-medium mb-2">In an emergency?</h4>
            <p className="text-sm text-muted-foreground">
              Please note that Prandhara Naturopathy is not an emergency medical facility. If you are experiencing a medical emergency, please call 911 or visit your nearest emergency room immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
