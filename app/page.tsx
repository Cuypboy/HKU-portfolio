const projects = [
  {
    title: "Branding en concept",
    description:
      "Werk waarin visuele identiteit, verhaal en vorm samenkomen."
  },
  {
    title: "Creatieve websites",
    description:
      "Digitale ervaringen met aandacht voor sfeer, ritme en gebruiksgemak."
  },
  {
    title: "Experimenten",
    description:
      "Kleine studies, prototypes en visuele onderzoeken in ontwikkeling."
  }
];

export default function Home() {
  return (
    <main className="page">
      <section className="hero" aria-labelledby="intro-title">
        <p className="eyebrow">HKU Portfolio</p>
        <h1 id="intro-title">Joep Cuypers</h1>
        <p className="intro">
          Een eerste basis voor mijn toelatingsportfolio: rustig, persoonlijk en
          klaar om stap voor stap uit te bouwen met projecten, beeld en verhaal.
        </p>
      </section>

      <section className="grid" aria-label="Portfolio onderdelen">
        {projects.map((project) => (
          <article className="card" key={project.title}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
