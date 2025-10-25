import heroImg from "../assets/stitch.jpeg";
import home from "../assets/home.png";
import msg from "../assets/msg.png";
import comm from "../assets/comm.png";
import stitchLogo from "../assets/stitch.png"; // ← import your logo

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
      height: "180px",     // ⬅️ increase this to make it much bigger
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
            New small businesses are trying to establish themselves. 
Old small businesses are trying to keep up with the changing times. 
For all small businesses, finding support, adapting to a new generation, and creating community has been difficult.

{" "}{" "}
              <strong>STITCH uses an AI matching algorithm to allow small businesses to collaborate on events to attract new customers. </strong>  {" "}
             
            </p>
            <ul className="about-points">
              <li>AI-toggle button: On if you want to get matched with other businesses and given potential event ideas or AI off if you want a regular feed. </li>
              <li>Stitch tab lets businesses co-host events</li>
              <li>Communities tab lets businesses find events in the community. </li>
            </ul>
          </div>

          <div className="about-side">
            <div className="about-card">
              <div className="about-stat">
                <span className="big">9/10</span>
                <span>Average User Eagerness during Low-fi User Testing </span>
              </div>
              <div className="about-stat">
                <span className="big">8.25/10                 </span>
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
        </header>

        <div className="iphone-row">
          {/* Replace the backgroundImage URLs with your own prototype screenshots later */}
          <div
            className="iphone-tilt"
            style={{
              backgroundImage: `url(${home})`,
            }}
            aria-label="Prototype: Matching"
          />
          <div
            className="iphone-tilt"
            style={{
              backgroundImage:
              `url(${msg})`,
            }}
            aria-label="Prototype: Event Concepts"
          />
          <div
            className="iphone-tilt"
            style={{
              backgroundImage:
                `url(${comm})`,
            }}
            aria-label="Prototype: Timeline"
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
