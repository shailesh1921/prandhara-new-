export default function Home() {
  return (
    <main className="p-10 space-y-10">
      <section className="text-center">
        <h1 className="text-4xl font-bold">Prandhara Naturopathy</h1>
        <p className="text-gray-600 mt-2">
          Heal naturally. Live fully.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Our Treatments</h2>
        <ul className="list-disc ml-6 mt-3">
          <li>Detox Therapy</li>
          <li>Yoga & Meditation</li>
          <li>Diet Consultation</li>
          <li>Stress Relief Programs</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Book Consultation</h2>
        <p className="mt-2">
          Start your healing journey with our expert doctors.
        </p>
        <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded">
          Book Now
        </button>
      </section>
    </main>
  );
}
