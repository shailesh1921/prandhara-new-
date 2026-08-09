export const metadata = {
  title: "Terms of Service | Prandhara Naturopathy",
  description: "Terms of service for Prandhara Naturopathy.",
};

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-3xl">
      <h1 className="text-4xl font-serif font-bold tracking-tight mb-8">Terms of Service</h1>
      
      <div className="prose prose-stone max-w-none">
        <p className="text-muted-foreground">Last updated: October 1, 2026</p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using the Prandhara Naturopathy website, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access the service.
        </p>

        <h2>2. Medical Disclaimer</h2>
        <p>
          <strong>The content on this website is for informational and educational purposes only.</strong> It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
        </p>

        <h2>3. Consultations and Services</h2>
        <p>
          Booking a consultation through our platform does not establish a doctor-patient relationship until the initial consultation has taken place and appropriate intake forms are completed. We reserve the right to refuse service to anyone for any reason at any time.
        </p>

        <h2>4. AI Symptom Checker</h2>
        <p>
          The AI Symptom Checker provided on this site is an experimental tool for informational purposes. It is not a diagnostic tool and its output should not be considered medical advice.
        </p>
      </div>
    </div>
  );
}
