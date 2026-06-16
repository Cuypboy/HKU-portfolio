const projects = [
  'Art & Design',
  'Bilal Wahib Paradiso',
  'SprinterSoundSystem',
  'TurnDownForWhat',
  'MocHar'
];

export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <p>Portfolio 2026</p>
        <h1>Joep Cuypers</h1>
        <p>Graphic designer, art director and creative developer.</p>
      </section>

      <section>
        <h2>Selected Work</h2>
        {projects.map((project) => (
          <article key={project}>
            <h3>{project}</h3>
          </article>
        ))}
      </section>

      <section>
        <h2>About</h2>
        <p>Designing visual systems for temporary worlds.</p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Available for freelance and collaborative projects.</p>
      </section>
    </main>
  );
}