import heroImg from "../assets/stitch.jpeg";
import home from "../assets/home.png";
import msg from "../assets/msg.png";
import comm from "../assets/comm.png";
import stitchLogo from "../assets/stitch.png"; // ← import your logo
import ReadMe from "../assets/file/ReadMe.pdf"; // ← import your ReadMe PDF

const FIGMA_URL =
  "https://www.figma.com/proto/ARrTEwUiCxvuIFAGOPhEXB/CS147-Med-Fi-Stitch?page-id=0%3A1&node-id=326-5912&viewport=452%2C187%2C0.09&t=iCXGj0zTgU5ueqCq-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=326%3A5912";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg-blob" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-text">
            <h1>
              <img
                src={stitchLogo}
                alt="Stitch logo"
                style={{
                  height: "300px",
                  maxWidth: "100%",
                  objectFit: "contain",
                  marginBottom: "10px",
                }}
              />
              <br />
              small businesses together through community events.
            </h1>
            <p className="lead">
              Stitch supports small businesses by connecting them with each
              other, and with their local communities through co-hosted events.
            </p>
            <p>
              Stitch strengthens communities built by small businesses and turns
              community gatherings into engines of shared success.
            </p>
          </div>

          <div className="hero-media">
            <div className="photo-card">
              <img src={heroImg} alt="Stitch hero visual" />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section about">
        <div className="about-inner">
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
                AI-toggle button: On if you want to get matched with other
                businesses and given potential event ideas or AI off if you want
                a regular feed.
              </li>
              <li>Stitch tab lets businesses co-host events</li>
              <li>Communities tab lets businesses find events in the community.</li>
            </ul>
          </div>

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

          {/* Primary Button: Med-Fi Prototype */}
          <a
            href={FIGMA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{
              display: "inline-block",
              marginTop: "12px",
              padding: "10px 16px",
              borderRadius: "9999px",
              textDecoration: "none",
              fontWeight: 600,
              border: "1px solid currentColor",
            }}
            aria-label="Access our Med-Fi prototype in Figma (opens in a new tab)"
          >
            Access our Med-Fi prototype here →
          </a>

          {/* Secondary Button: ReadMe */}
          <a
            href={ReadMe}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{
              display: "inline-block",
              marginTop: "12px",
              padding: "10px 16px",
              borderRadius: "9999px",
              textDecoration: "none",
              fontWeight: 600,
              border: "1px solid currentColor",
            }}
            aria-label="Access the project ReadMe (opens in a new tab)"
          >
            Access ReadMe here →
          </a>
        </header>

        <div className="iphone-row">
          {/* Clickable iPhone Tiles */}
          <a
            href={FIGMA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="iphone-tilt"
            style={{ backgroundImage: `url(${home})` }}
            aria-label="Open Med-Fi prototype: Matching (opens in a new tab)"
          />

          <a
            href={FIGMA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="iphone-tilt"
            style={{ backgroundImage: `url(${msg})` }}
            aria-label="Open Med-Fi prototype: Event Concepts (opens in a new tab)"
          />

          <a
            href={FIGMA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="iphone-tilt"
            style={{ backgroundImage: `url(${comm})` }}
            aria-label="Open Med-Fi prototype: Timeline (opens in a new tab)"
          />
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
