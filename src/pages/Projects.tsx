type Project = {
  title: string;
  blurb: string;
  img?: string;         // use for image cards
  videoEmbed?: string;  // use for YouTube/Vimeo embeds
  pdf?: string;
  pptx?: string;
};

const projects: Project[] = [
  {
    title: "Needfinding",
    blurb:
      "This presentation covers our needfinding interviews to explore the problem space of making and maintaining healthy friendships. We uncovered emotions, pain points, and individual journeys of several interviewees.",
    img: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=1600&auto=format&fit=crop",
    pdf: "#",
    pptx: "#",
  },
  {
    title: "Experience Prototypes",
    blurb:
      "We refined our problem with Point of View statements and generated solutions using How Might We prompts. Then we prototyped the ideas behind our solutions.",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",
    pdf: "#",
    pptx: "#",
  },
  {
    title: "Concept Video",
    blurb:
      "A short concept video that communicates our vision and key interaction moments.",
    videoEmbed: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    pdf: "#",
    pptx: "#",
  },
  {
    title: "Lo-Fi Wireframes",
    blurb:
      "Low-fidelity screens to map flows and validate key tasks before investing in visuals.",
    img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1600&auto=format&fit=crop",
    pdf: "#",
    pptx: "#",
  },
  {
    title: "Diary Study",
    blurb:
      "A one-week diary study to observe planning habits and friction points in the wild.",
    img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop",
    pdf: "#",
    pptx: "#",
  },
  {
    title: "Research Synthesis",
    blurb:
      "Affinity clusters, key insights, and opportunity areas derived from interviews and observations.",
    img: "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1600&auto=format&fit=crop",
    pdf: "#",
    pptx: "#",
  },
  {
    title: "Interaction Design",
    blurb:
      "Core interactions prototyped to validate timing, affordances, and feedback.",
    img: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1600&auto=format&fit=crop",
    pdf: "#",
    pptx: "#",
  },
  {
    title: "Visual System",
    blurb:
      "Typography, color, and components that bring a playful but accessible tone.",
    img: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop",
    pdf: "#",
    pptx: "#",
  },
  {
    title: "Usability Testing",
    blurb:
      "Structured usability sessions with tasks, SUS scores, and qualitative feedback.",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop",
    pdf: "#",
    pptx: "#",
  },
  {
    title: "Final Presentation",
    blurb:
      "End-to-end story of the Playdate journey, findings, and what’s next.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
    pdf: "#",
    pptx: "#",
  },
];

export default function Projects() {
  return (
    <section className="projects-section">
      <header className="projects-head">
        <h1>Projects</h1>
        <p>Come along and learn about the journey we took to develop Playdate.</p>
      </header>

      <div className="projects-grid">
        {projects.map((p) => (
          <article key={p.title} className="project-card">
            <div className="project-media">
              {p.videoEmbed ? (
                <div className="embed-wrap">
                  <iframe
                    src={p.videoEmbed}
                    title={p.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <img src={p.img} alt={p.title} loading="lazy" />
              )}
            </div>

            <h3 className="project-title">{p.title}</h3>
            <p className="project-blurb">{p.blurb}</p>

            <div className="project-actions">
              {p.pdf && (
                <a className="pill-btn" href={p.pdf} target="_blank" rel="noreferrer">
                  Slides (pdf)
                </a>
              )}
              {p.pptx && (
                <a className="pill-btn" href={p.pptx} target="_blank" rel="noreferrer">
                  Slides (pptx)
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
