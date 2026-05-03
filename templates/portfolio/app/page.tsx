export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24">
      <section className="mb-20">
        <h1 className="text-5xl font-bold tracking-tight">
          Hi, I&apos;m <span className="text-accent">Your Name</span>
        </h1>
        <p className="mt-6 text-xl text-ink/70">
          One-line description of what you do. Edit this in <code>app/page.tsx</code>.
        </p>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p className="text-ink/80 leading-relaxed">
          A short paragraph about you. Where you&apos;re from, what you care about,
          and what you&apos;re working on now.
        </p>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <ul className="space-y-6">
          <li>
            <h3 className="font-medium">Project name</h3>
            <p className="text-ink/70">What it is and why it matters.</p>
          </li>
          <li>
            <h3 className="font-medium">Another project</h3>
            <p className="text-ink/70">A second example.</p>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-ink/80">
          <a
            href="mailto:you@example.com"
            className="text-accent hover:underline"
          >
            you@example.com
          </a>
        </p>
      </section>
    </main>
  );
}
