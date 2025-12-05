type ResourceLink = {
  label: string;
  href: string;
  download?: boolean;
};

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
  figmaLink?: string; // ⬅️ existing
  resources?: ResourceLink[]; // ⬅️ NEW
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
import report from "../assets/file/report.png";
import poster from "../assets/poster.png";
import a6pdf from "../assets/file/a6.pdf";
import cvVideo from "../assets/file/cv.mp4";
import readmePDF from "../assets/file/ReadMe.pdf";
import readmea8PDF from "../assets/file/readme-a8.pdf";
import pitchPdf from "../assets/pitch.pdf";
import posterPdf from "../assets/Poster.pdf";
import scriptPdf from "../assets/script.pdf";
import demoVideoMp4 from "../assets/file/perfect.mp4";
import finalReportPdf from "../assets/file/finalreport.pdf";

// 🔗 Replace this with your actual high-fi prototype URL (Figma, deployed site, etc.)
const HIGH_FI_LINK = "https://your-highfi-prototype-link-here";

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
      "https://www.figma.com/proto/ARrTEwUiCxvuIFAGOPhEXB/CS147-Med-Fi-Stitch?page-id=0%3A1&node-id=326-5912&viewport=452%2C187%2C0.09&t=iCXGj0zTgU5ueqCq-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=326%3A5912",
  },
  {
    title: "High-fi Prototype",
    blurb: "Our presentation on the changes made to the high fidelity prototype.",
    img: a8,
    pdf: a8pdf,
    pptx: "p8.pptx",
    // ✅ Use resources[] so the four buttons show up:
    resources: [
      { label: "Slides (pdf)", href: a8pdf },
      { label: "Slides (pptx)", href: "p8.pptx", download: true },
      { label: "Prototype link", href: "https://expo.dev/preview/update?message=Fix+keyboard+overlay+issue+in+comment&updateRuntimeVersion=1.0.0&createdAt=2025-12-04T06%3A26%3A27.435Z&slug=exp&projectId=827cb71f-a0e8-440a-959d-f9632c9576a9&group=f5658c3c-c9f9-4507-b369-f41875b1cc16" },
      { label: "ReadMe (pdf)", href: readmea8PDF },
    ],
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
    title: "Pitch & Poster",
    blurb:
      "We will present our project to interested parties from industry and campus in the upcoming CS147 Project Expo on Friday, December 8th from 6 - 9pm.",
    img: poster,
    resources: [
      { label: "Pitch (pdf)", href: pitchPdf },
      { label: "Pitch (pptx)", href: "pitch.pptx", download: true },
      { label: "Poster (pdf)", href: posterPdf },
      { label: "Poster (pptx)", href: "poster.pptx", download: true },
      { label: "Script (pdf)", href: scriptPdf },
    ],
  },
  {
    title: "Demo Video",
    blurb: "We showcased the high-fi prototype of our app for the world to see.",
    videoEmbed: "https://www.youtube.com/embed/bAqFJvvU4sE",
    img: stitch,
    resources: [
      {
        label: "Video (link)",
        href: "https://youtu.be/bAqFJvvU4sE",
      },
      {
        label: "Video (mp4)",
        href: demoVideoMp4,
        download: true,
      },
    ],
  },
  {
    title: "Final Report",
    blurb:
      "We synthesized the work we have done this quarter into a single document.",
    img: report,
    resources: [
      { label: "Doc (pdf)", href: finalReportPdf },
      { label: "Doc (docx)", href: "finalreport.docx", download: true },
    ],
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
              {p.resources &&
                p.resources.map((r) => (
                  <a
                    key={r.label}
                    className="pill-btn"
                    href={r.href}
                    {...(r.download
                      ? { download: true }
                      : { target: "_blank", rel: "noreferrer" })}
                  >
                    {r.label}
                  </a>
                ))}

              {!p.resources && (
                <>
                  {p.pdf && (
                    <a
                      className="pill-btn"
                      href={p.pdf}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Slides (pdf)
                    </a>
                  )}

                  {p.pptx && (
                    <a className="pill-btn" href={p.pptx} download>
                      Slides (pptx)
                    </a>
                  )}

                  {p.readme && (
                    <a
                      className="pill-btn"
                      href={p.readme}
                      target="_blank"
                      rel="noreferrer"
                    >
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
                      Video (mp4)
                    </a>
                  )}

                  {p.youtubeLink && (
                    <a
                      className="pill-btn"
                      href={p.youtubeLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Video (link)
                    </a>
                  )}
                </>
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
