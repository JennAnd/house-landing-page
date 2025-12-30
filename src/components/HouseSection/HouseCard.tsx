import "./HouseCard.css";

type HouseCardProps = {
  title: string;
  buttonText: string;
  image: string;
};

function HouseCard({ title, buttonText, image }: HouseCardProps) {
  return (
    <article className="house-card">
      <img className="house-card-image" src={image} alt="" />
      <h3 className="house-card-title">{title}</h3>
      <button className="house-card-button">{buttonText}</button>
    </article>
  );
}

export default HouseCard;
