type Project = {
  title: string;
  blurb: string;
  img?: string;         // use for image cards
  videoEmbed?: string;  // use for YouTube/Vimeo embeds
  pdf?: string;
  pptx?: string;
};
import heroImg from "../assets/needfinding.png";
import needfindingpptx from "../assets/file/needfinding.pdf";
import a5 from "../assets/a5.png";
import experience from "../assets/experience.png";
import a2pdf from "../assets/file/a2.pdf";
import a5pdf from "../assets/file/a5.pdf";
import a4pdf from "../assets/file/a4.pdf";
const projects: Project[] = [
  {
    title: "A1: Needfinding",
    blurb:
      "We interviewed 7 small business owners/employees/shoppers to see their rationale for how they shop.",
      img: heroImg,
    pdf: needfindingpptx,
    pptx: "https://docs.google.com/presentation/d/14mTuNBSAxF_zb3A1ALIWDPT5UeRCrEOAbeUg39zkjrk/edit?usp=sharing",
  },
  {
    title: "A2: POVs and Experience Prototypes",
    blurb:
      "We refined our problem with Point of View statements and generated solutions using How Might We prompts. Then we prototyped the ideas behind our solutions.",
    img: experience,
    pdf: a2pdf, 
    pptx: "https://docs.google.com/presentation/d/1s8SHX_G_3J-Ng0z3SfqunXdN2g_YhcZ9KFcknWjOJmA/edit?usp=sharing",
  },
  {
    title: "A4: Concept Video",
    blurb:
      "A short concept video that communicates our vision and key interaction moments.",
    videoEmbed: "https://www.youtube.com/embed/GeFFo-6EKmE",
    pdf: a4pdf,
    pptx: "https://docs.google.com/presentation/d/1skKN9pDN2HrmkZd3-32T2O6-uQZTQOi6UpuxCLyflYQ/edit?usp=sharing",
     
  },
  {
    title: "A5: Lo-Fi Wireframes",
    blurb:
      "Low-fidelity screens to map flows and validate key tasks before investing in visuals.",
    img:a5,
    pdf: a5pdf,
    pptx: "https://docs.google.com/presentation/d/1dfrfNJ_ENfkONvKOP-xsbO_bJ1eA7WE0NX48ISvEz4s/edit?usp=sharing",
  },
  {
    title: "A6: Medium-fi Prototype",
    blurb:
      "TBD: Our medium fidelity, interactive prototypes.",
      videoEmbed: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    pptx: "#",
  },
  {
    title: "A7: Heuristic Evaluation",
    blurb:
      "TBD.",
      videoEmbed: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    pdf: "#",
    pptx: "#",
  },
  {
    title: "A8: High-fi Prototype",
    blurb:
      "TBD.",
      videoEmbed: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    pdf: "#",
    pptx: "#",
  },
  {
    title: "A9: HE Summary",
    blurb:
      "TBD",
      videoEmbed: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    pdf: "#",
    pptx: "#",
  },
  {
    title: "A10: Poster & Pitch",
    blurb:
      "TBD.",
      videoEmbed: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    pdf: "#",
    pptx: "#",
  },  
];

export default function Projects() {
  return (
    <section className="projects-section">
      <header className="projects-head">
        <h1>Design Process</h1>
        <p>Follow our design and thinking process while building Stitch.</p>
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
      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">STITCH</div>
          <div className="footer-copy">Copyright CS 147</div>
        </div>
      </footer>
    </section>
    
  );
}
