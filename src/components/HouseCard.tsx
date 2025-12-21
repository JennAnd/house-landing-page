type HouseCardProps = {
  title: string;
  buttonText: string;
  image: string;
};

function HouseCard({ title, buttonText, image }: HouseCardProps) {
  return (
    <div>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <button>{buttonText}</button>
    </div>
  );
}

export default HouseCard;
