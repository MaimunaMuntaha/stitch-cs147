import heroImg from "../assets/stitch.jpeg";
import home from "../assets/home.png";
import msg from "../assets/msg.png";
import highfi from "../assets/highfi.png";
import stitchLogo from "../assets/stitch.png";
import ReadMe from "../assets/file/ReadMe.pdf";
import lowfi from "../assets/lowfi.pdf";

const FIGMA_URL =
  "https://www.figma.com/proto/ARrTEwUiCxvuIFAGOPhEXB/CS147-Med-Fi-Stitch?page-id=0%3A1&node-id=326-5912&viewport=452%2C187%2C0.09&t=iCXGj0zTgU5ueqCq-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=326%3A5912";

const HIGH_FI_URL =
  "https://expo.dev/preview/update?message=final+CS147&updateRuntimeVersion=1.0.0&createdAt=2025-12-07T01%3A12%3A07.259Z&slug=exp&projectId=827cb71f-a0e8-440a-959d-f9632c9576a9&group=fc56df91-c03c-46b4-8199-5fde8cb18cc4"; // placeholder

export default function Home() {
  return (
    <>
      {/* HERO + ABOUT - 2x2 Grid */}
      <section className="hero-about-grid">
        <div className="hero-bg-blob" aria-hidden="true" />
        <div className="hero-about-inner">
          {/* Top Left: Logo + Value Statement */}
          <div className="hero-text">
            <h1>
              <img src={stitchLogo} alt="Stitch logo" className="hero-logo" />
              <br />
              small businesses together through community events.
            </h1>
          </div>

          {/* Top Right: Stitch Image */}
          <div className="hero-media">
            <div className="photo-card">
              <img src={heroImg} alt="Stitch hero visual" />
            </div>
          </div>

          {/* Bottom Left: About Text */}
          <div className="about-copy">
            <h2>About</h2>
            <p>
              New small businesses are trying to establish themselves, while old
              small businesses are trying to keep up with the changing times.
              <strong> For all small businesses, </strong> finding support,
              adapting to a new generation, and creating community has been
              difficult.{" "}
              <strong>
                STITCH uses an AI matching algorithm to allow small businesses
                to collaborate on events to attract new customers.
              </strong>{" "}
            </p>
            <ul className="about-points">
              <li>
                AI-powered matching based on values, location, and business
                type.
              </li>
              <li>
                Hash out all the details of the event to collaborate on using
                the in-app Stitch Now feature.
              </li>
              <li>
                Discover other businesses around you through the Communities
                tab.
              </li>
            </ul>
          </div>

          {/* Bottom Right: About Stat Card */}
          <div className="about-side">
            <div className="about-card">
              <div className="about-stat">
                <span className="big">9/10</span>
                <span>Average User Eagerness during Low-fi User Testing </span>
              </div>
              <div className="about-stat">
                <span className="big">8.25/10</span>
                <span>Ease of Navigation according to User Testers </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROTOTYPES (3D iPhones) */}
      <section className="section prototypes">
        <header className="section-head">
          <h2>Prototypes</h2>
          <p>Early explorations of the Stitch mobile experience.</p>

          <div className="prototype-actions">
            <a
              href={FIGMA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              aria-label="Access our Med-Fi prototype in Figma (opens in a new tab)"
            >
              Access Med-Fi prototype →
            </a>

            <a
              href={HIGH_FI_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              aria-label="Access our High-Fi prototype (opens in a new tab)"
            >
              Access High-Fi prototype →
            </a>

            <a
              href={ReadMe}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              aria-label="Access the project ReadMe (opens in a new tab)"
            >
              Access ReadMe →
            </a>
          </div>
        </header>

        {/* iPhones */}
        <div className="iphone-row">
          {/* LOW-FI → lowfi.pdf */}
          <a
            href={lowfi}
            target="_blank"
            rel="noopener noreferrer"
            className="iphone-tilt"
            style={{ backgroundImage: `url(${home})` }}
            aria-label="Open Low-Fi prototype (PDF, opens in a new tab)"
          />

          {/* MED-FI → Figma */}
          <a
            href={FIGMA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="iphone-tilt"
            style={{ backgroundImage: `url(${msg})` }}
            aria-label="Open Med-Fi prototype (Figma, opens in a new tab)"
          />

          {/* HIGH-FI */}
          <a
            href={HIGH_FI_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="iphone-tilt"
            style={{ backgroundImage: `url(${highfi})` }}
            aria-label="Open High-Fi prototype (placeholder link, opens in a new tab)"
          />
        </div>

        {/* Labels under iPhones */}
        <div className="iphone-label-row">
          <span className="iphone-label">Low-Fi Prototype</span>
          <span className="iphone-label">Mid-Fi Prototype</span>
          <span className="iphone-label">High-Fi Prototype</span>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">STITCH</div>
          <div className="footer-copy">Copyright CS 147</div>
        </div>
      </footer>
    </>
  );
}
