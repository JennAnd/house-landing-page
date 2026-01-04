import heroImage from "../../assets/hero.png";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <img className="hero-image" src={heroImage} alt="" />
      <div className="hero-content">
        <h1 className="hero-title">Unika hus i en unik miljö</h1>
        <p className="hero-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
          erat tempor, fringilla nunc vitae, laoreet velit. Suspendisse eu
          tortor eu odio dapibus molestie nec quis ipsum.
        </p>

        <button type="button" className="hero-button">
          Läs mer
        </button>
      </div>
    </section>
  );
}

export default Hero;
