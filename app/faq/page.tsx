import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "FAQ | Prandhara Naturopathy",
  description: "Frequently asked questions about naturopathic medicine and our holistic healing approach.",
};

const FAQS = [
  {
    question: "What is Naturopathic Medicine?",
    answer: "Naturopathic medicine is a distinct primary health care profession, emphasizing prevention, treatment, and optimal health through the use of therapeutic methods and substances that encourage individuals' inherent self-healing process. The practice includes modern and traditional, scientific, and empirical methods."
  },
  {
    question: "Is naturopathy safe?",
    answer: "Yes. Safety is the first principle of naturopathic medicine ('Do No Harm'). Our practitioners are rigorously trained to use natural, non-invasive therapies and to identify when conventional medical intervention is necessary."
  },
  {
    question: "Can I do naturopathy alongside conventional medical treatments?",
    answer: "Absolutely. We encourage an integrative approach. Naturopathic therapies can often safely complement conventional treatments, mitigating side effects and supporting overall resilience. However, you must always disclose all current medications to avoid potential herb-drug interactions."
  },
  {
    question: "Do you take insurance?",
    answer: "We are currently an out-of-network provider for most insurance plans. However, we can provide you with a superbill after your consultation, which you may submit to your insurance company for potential out-of-network reimbursement, depending on your specific plan."
  },
  {
    question: "How long does a consultation take?",
    answer: "Initial consultations typically last 60 to 90 minutes. This allows us time to take a comprehensive health history, discuss your lifestyle, diet, and concerns in detail. Follow-up appointments are usually 30 to 45 minutes."
  },
  {
    question: "Are herbal medicines regulated?",
    answer: "Yes, we only prescribe professional-grade herbal supplements that undergo rigorous third-party testing for identity, purity, and potency, ensuring they are free from heavy metals, pesticides, and adulterants."
  }
];

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl font-serif font-bold tracking-tight sm:text-5xl">Frequently Asked Questions</h1>
        <p className="text-xl text-muted-foreground">
          Clear answers to common questions about our practice and naturopathic medicine.
        </p>
      </div>

      <div className="bg-card border rounded-3xl p-6 md:p-10 shadow-sm mb-16">
        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-serif hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="text-center bg-secondary/5 rounded-2xl p-8 border">
        <h2 className="text-2xl font-serif font-bold mb-4">Still have questions?</h2>
        <p className="text-muted-foreground mb-6">If you didn't find the answer you were looking for, please don't hesitate to reach out to our team.</p>
        <Button asChild>
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}
