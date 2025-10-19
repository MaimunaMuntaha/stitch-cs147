// src/pages/Team.tsx
import eva from "../assets/eva.jpg";
import maimuna from "../assets/maimuna.jpg";
import sunny from "../assets/sunny.jpg";



type Member = {
  name: string;
  role: string;
  img: string; // temporary stock; swap for local assets later
};

const members = [
  { name: "Eva Moraa Tom", role: "Software Engineer", img: eva },
  { name: "Maimuna Muntaha", role: "Product Manager", img: maimuna },
  { name: "Sunny Sun", role: "UX Researcher", img: sunny },
];

export default function Team() {
  return (
  <section>
    <section className="section teamv2">
      <div className="teamv2-head">
        <div className="teamv2-eyebrow">Who We Are</div>
        <h2 className="teamv2-title">Meet the Team behind STITCH</h2> 
      </div>

      <div className="teamv2-row">
        {members.map((m) => (
          <figure className="teamv2-card" key={m.name}>
            <img className="teamv2-photo" src={m.img} alt={m.name} loading="lazy" />
            <figcaption className="teamv2-caption">
              <div className="teamv2-name">{m.name}</div>
              <div className="teamv2-role">{m.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
      
      </section>
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
