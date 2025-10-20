import heroImg from "../assets/stitch.jpeg"; // temp; swap with src/assets/hero.jpg

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg-blob" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-text">
            <h1>
              Stitch
              <br />
              small businesses together through community events.
            </h1>
            <p className="lead">
              We create smarter, warmer connections between local businesses and
              communities by turning collaborations into repeatable, real-world
              experiences.
            </p>
            <p>
              Stitch helps merchants discover partners, co-host events, and
              co-market offerings—then turns those matches into concrete plans
              with timelines and lightweight tools.
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
              Stitch is a platform that pairs small businesses with each other
              and with local organizations to co-create events that benefit the
              whole neighborhood. Our approach blends{" "}
              <strong>matching intelligence</strong> with{" "}
              <strong>lightweight planning</strong> so teams move from idea →
              event → impact quickly.
            </p>
            <ul className="about-points">
              <li>AI-assisted partner matching based on goals & audiences</li>
              <li>Event concepts you can adopt or remix in one click</li>
              <li>Simple task timelines that keep momentum</li>
            </ul>
          </div>

          <div className="about-side">
            <div className="about-card">
              <div className="about-stat">
                <span className="big">3×</span>
                <span>faster to co-host your next event</span>
              </div>
              <div className="about-stat">
                <span className="big">+42%</span>
                <span>avg. lift in foot traffic during pilots</span>
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
              backgroundImage:
                "url('https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=1200&auto=format&fit=crop')",
            }}
            aria-label="Prototype: Matching"
          />
          <div
            className="iphone-tilt"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1200&auto=format&fit=crop')",
            }}
            aria-label="Prototype: Event Concepts"
          />
          <div
            className="iphone-tilt"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop')",
            }}
            aria-label="Prototype: Timeline"
          />
        </div>
 
      </section>

      {/* PROCESS / ROADMAP */}
      <section className="section process">
        <header className="section-head">
          <h2>Process</h2>
          <p>How we got from insight to a shareable story.</p>
        </header>

        <ol className="roadmap">
          <li>
            <h3>Needfinding</h3>
            <p>
              Interviews with merchants & community groups to map goals,
              constraints, and collaboration friction.
            </p>
          </li>
          <li>
            <h3>POVs & Experience Prototypes</h3>
            <p>
              Point-of-View statements and “How Might We” prompts led to quick
              experience sketches we could test.
            </p>
          </li>
          <li>
            <h3>Concept Video</h3>
            <p>A short narrative to communicate the vision and core value.</p>
          </li>
          <li>
            <h3>Lo-fi Prototype</h3>
            <p>
              Storyboards & simple click-throughs to validate flows and scope.
            </p>
          </li>
          <li>
            <h3>Medium-fi Prototype</h3>
            <p>Refined flows & interaction details from early feedback.</p>
          </li>
          <li>
            <h3>Heuristic Evaluation</h3>
            <p>
              Applied Nielsen’s heuristics; peers flagged clarity & affordance
              issues, feeding fixes.
            </p>
          </li>
          <li>
            <h3>Hi-fi Prototype</h3>
            <p>
              Polished visuals and micro-interactions; demo video and live
              prototype.
            </p>
          </li>
          <li>
            <h3>Poster & Pitch</h3>
            <p>Final artifacts to summarize the journey and results.</p>
          </li>
        </ol>
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
