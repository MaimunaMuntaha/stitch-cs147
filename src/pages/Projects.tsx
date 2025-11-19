type Project = {
  title: string;
  blurb: string;
  img?: string;
  videoEmbed?: string;
  youtubeLink?: string;
  pdf?: string;
  pptx?: string;
  cv?: string;
  xlsx?: string;
  readme?: string;
  figmaLink?: string;   // ⬅️ NEW FIELD
};

import heroImg from "../assets/needfinding.png";
import needfindingpptx from "../assets/file/needfinding.pdf";
import a5 from "../assets/a5.png";
import a6 from "../assets/a6.png";
import a7 from "../assets/a7.png";
import a8 from "../assets/a8.png";
import experience from "../assets/experience.png";
import a2pdf from "../assets/file/a2.pdf";
import a5pdf from "../assets/file/a5.pdf";
import a4pdf from "../assets/file/a4.pdf";
import a8pdf from "../assets/file/a8.pdf";
import a7pdf from "../assets/file/a7.pdf";
import stitch from "../assets/stitch.jpeg";
import a6pdf from "../assets/file/a6.pdf";
import cvVideo from "../assets/file/cv.mp4";
import readmePDF from "../assets/file/ReadMe.pdf";

const projects: Project[] = [
  {
    title: " Needfinding",
    blurb:
      "We interviewed 7 small business owners/employees/shoppers to see their rationale for how they shop.",
    img: heroImg,
    pdf: needfindingpptx,
    pptx: "p1.pptx",
  },
  {
    title: " POVs and Experience Prototypes",
    blurb:
      "We refined our problem with Point of View statements and generated solutions using How Might We prompts. Then we prototyped the ideas behind our solutions.",
    img: experience,
    pdf: a2pdf,
    pptx: "p2.pptx",
  },
  {
    title: " Concept Video",
    blurb:
      "A short concept video that communicates our vision and key interaction moments.",
    videoEmbed: "https://www.youtube.com/embed/GeFFo-6EKmE",
    youtubeLink: "https://youtu.be/GeFFo-6EKmE?si=r09DMHiZGMBcv_le",
    pdf: a4pdf,
    pptx: "p2.pptx",
    cv: cvVideo,
  },
  {
    title: "Lo-Fi Wireframes",
    blurb:
      "Low-fidelity screens to map flows and validate key tasks before investing in visuals.",
    img: a5,
    pdf: a5pdf,
    pptx: "p5.pptx",
  },
  {
    title: " Medium-fi Prototype",
    blurb: "Our medium fidelity, interactive prototypes on Figma",
    img: a6,
    pdf: a6pdf,
    pptx: "p6.pptx",
    readme: readmePDF,
    figmaLink:
      "https://www.figma.com/proto/ARrTEwUiCxvuIFAGOPhEXB/CS147-Med-Fi-Stitch?page-id=0%3A1&node-id=326-5912&viewport=452%2C187%2C0.09&t=iCXGj0zTgU5ueqCq-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=326%3A5912",  // ⬅️ ADDED FIGMA LINK
  },
  {
    title: "High-fi Prototype",
    blurb: "Our presentation on the changes made to the high fidelity prototype.",
    img: a8,
    pdf: a8pdf,
    pptx: "p8.pptx",
  },
  {
    title: " Heuristic Evaluation Synthesis",
    img: a7,
    blurb:
      "Our med-fi prototype went through an evaluation by experts, and our changes are synthesized in this document.",
    pdf: a7pdf,
    xlsx: "/he.xlsx",
  },
  {
    title: " Pitch and Poster",
    blurb: "TBD",
    pdf: "#",
    img: stitch,
    pptx: "#",
  },
  {
    title: " Poster & Pitch",
    blurb:
      "These are the materials we presented at the CS 147 Project Expo on Dec 5 2025.",
    pdf: "#",
    img: stitch,
    pptx: "#",
  },
  {
    title: "Demo Video",
    blurb: "This is an app showcasing our final prototype's functionality.",
    img: stitch,
    pdf: "#",
    pptx: "#",
  },
  {
    title: "Final Report",
    blurb: "All of our work can be summarized in this one document!",
    img: stitch,
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
                <a className="pill-btn" href={p.pptx} download>
                  Slides (pptx)
                </a>
              )}

              {p.readme && (
                <a className="pill-btn" href={p.readme} target="_blank" rel="noreferrer">
                  ReadMe (pdf)
                </a>
              )}

              {p.figmaLink && (
                <a
                  className="pill-btn"
                  href={p.figmaLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Figma
                </a>
              )}

              {p.xlsx && (
                <a className="pill-btn" href={p.xlsx} download>
                  Heuristic Eval (.xlsx)
                </a>
              )}

              {p.cv && (
                <a className="pill-btn" href={p.cv} download>
                  Download video (mp4)
                </a>
              )}

              {p.youtubeLink && (
                <a
                  className="pill-btn"
                  href={p.youtubeLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Watch on YouTube
                </a>
              )}

            </div>
          </article>
        ))}
      </div>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">STITCH</div>
          <div className="footer-copy">Copyright CS 147</div>
        </div>
      </footer>
    </section>
  );
}
