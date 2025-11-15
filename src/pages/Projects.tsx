type Project = {
  title: string;
  blurb: string;
  img?: string;          
  videoEmbed?: string;   
  pdf?: string;
  pptx?: string;
};
import heroImg from "../assets/needfinding.png";
import needfindingpptx from "../assets/file/needfinding.pdf";
import a5 from "../assets/a5.png";
import a6 from "../assets/a6.png";
import experience from "../assets/experience.png";
import a2pdf from "../assets/file/a2.pdf";
import a5pdf from "../assets/file/a5.pdf";
import a4pdf from "../assets/file/a4.pdf";
import a6pdf from "../assets/file/a6.pdf";
const projects: Project[] = [
  {
    title: "A1: Needfinding",
    blurb:
      "We interviewed 7 small business owners/employees/shoppers to see their rationale for how they shop.",
      img: heroImg,
    pdf: needfindingpptx,
    pptx: "p1.pptx",
  },
  {
    title: "A2: POVs and Experience Prototypes",
    blurb:
      "We refined our problem with Point of View statements and generated solutions using How Might We prompts. Then we prototyped the ideas behind our solutions.",
    img: experience,
    pdf: a2pdf, 
    pptx: "p2.pptx",
  },
  {
    title: "A4: Concept Video",
    blurb:
      "A short concept video that communicates our vision and key interaction moments.",
    videoEmbed: "https://www.youtube.com/embed/GeFFo-6EKmE",
    pdf: a4pdf,
    pptx: "p2.pptx",
     
  },
  {
    title: "A5: Lo-Fi Wireframes",
    blurb:
      "Low-fidelity screens to map flows and validate key tasks before investing in visuals.",
    img:a5,
    pdf: a5pdf,
    pptx: "p5.pptx",
  },
  {
    title: "A6: Medium-fi Prototype",
    blurb:
      "Our medium fidelity, interactive prototypes on Figma",
      img:a6,

      pdf: a6pdf,
    pptx: "p6.pptx",
  },
  {
    title: "A7: Heuristic Evaluation Synthesis",
    blurb:
      "Our med-fi prototype went through an evaluation by experts, and our changes are synthesized in this document.",
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
    title: "A9: Pitch and Poster",
    blurb:
      "TBD",
      videoEmbed: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    pdf: "#",
    pptx: "#",
  },
  {
    title: "A10: Poster & Pitch",
    blurb:
      "These are the materials we presented at the CS 147 Project Expo on Dec 5 2025.",
      videoEmbed: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    pdf: "#",
    pptx: "#",
  },  
  {
    title: "Demo Video ",
    blurb:
      "This is an app showcasing our final prototype's functionality.",
      videoEmbed: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    pdf: "#",
    pptx: "#",
  },  
  {
    title: "Final Report ",
    blurb:
      "All of our work can be summarized in this one document!",
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
