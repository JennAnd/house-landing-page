import HouseCard from "./HouseCard";
import "./HouseSection.css";
import houseImage from "../../assets/house-1.png";
import optionsImage from "../../assets/house-2.png";

function HouseSection() {
  return (
    <section className="house-section">
      <div className="house-section-grid">
        <HouseCard title="Våra hus" buttonText="Våra hus" image={houseImage} />
        <HouseCard title="Tillval" buttonText="Läs mer" image={optionsImage} />
      </div>
    </section>
  );
}

export default HouseSection;
