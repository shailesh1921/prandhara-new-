export const metadata = {
  title: "Privacy Policy | Prandhara Naturopathy",
  description: "Privacy policy for Prandhara Naturopathy.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-3xl">
      <h1 className="text-4xl font-serif font-bold tracking-tight mb-8">Privacy Policy</h1>
      
      <div className="prose prose-stone max-w-none">
        <p className="text-muted-foreground">Last updated: October 1, 2026</p>

        <h2>1. Introduction</h2>
        <p>
          Welcome to Prandhara Naturopathy ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.
        </p>

        <h2>2. The Data We Collect About You</h2>
        <p>
          We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
        </p>
        <ul>
          <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
          <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
          <li><strong>Health Data</strong> includes information you provide regarding your health history during consultation bookings or via our AI symptom checker. (Note: In a real app, strict HIPAA/GDPR compliance would be required here).</li>
        </ul>

        <h2>3. How We Use Your Personal Data</h2>
        <p>
          We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
        </p>
        <ul>
          <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., booking a consultation).</li>
          <li>Where it is necessary for our legitimate interests and your interests and fundamental rights do not override those interests.</li>
          <li>Where we need to comply with a legal or regulatory obligation.</li>
        </ul>
      </div>
    </div>
  );
}
