import heroImg from "../assets/react.svg"; // put an image at src/assets/hero.jpg

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-bg-blob" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-text">
          <h1>Stitch<br/>small businesses together through community events.</h1>
          <p className="lead">
            We want to revitalize your close connections by making it
            easy to connect with your friends regularly.
          </p>
          <p>
            Playdate is a mobile app that allows you to explore activities and
            events personalized to you. Playdate incentivizes you to make plans
            with your friends concrete by giving you a deadline to complete a
            playdate with someone!
          </p>
        </div>

        <div className="hero-media">
          <div className="photo-card">
            <img src={heroImg} alt="Two friends enjoying a picnic" />
          </div>
        </div>
      </div>
    </section>
  );
}
