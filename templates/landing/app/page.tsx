export default function Home() {
  return (
    <main>
      <section className="px-6 py-24 md:py-32 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Your Business
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-ink/70 max-w-2xl">
          A clear, confident tagline that says what you do and who it&apos;s for.
        </p>
        <div className="mt-10 flex gap-4">
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-accent text-white rounded-lg font-medium hover:opacity-90"
          >
            Get in touch
          </a>
          <a
            href="#services"
            className="inline-block px-6 py-3 border border-ink/20 rounded-lg font-medium hover:bg-muted"
          >
            See services
          </a>
        </div>
      </section>

      <section id="services" className="bg-muted px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-12">What we do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-2">Service one</h3>
              <p className="text-ink/70">
                Describe what this service is and the outcome a customer gets.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Service two</h3>
              <p className="text-ink/70">
                Describe what this service is and the outcome a customer gets.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Service three</h3>
              <p className="text-ink/70">
                Describe what this service is and the outcome a customer gets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-24 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Get in touch</h2>
        <p className="text-ink/70 mb-6">
          We&apos;d love to hear from you. Reply within one business day.
        </p>
        <a
          href="mailto:hello@example.com"
          className="text-accent text-lg hover:underline"
        >
          hello@example.com
        </a>
      </section>
    </main>
  );
}
