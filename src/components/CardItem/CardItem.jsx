import "./CardItem.css";
const CardItem = ({ img, name, description }) => {
  return (
    <div>
      <img src={img} alt={description}/>
      <h3 style={{ textAlign: "center"}}>{name}</h3>
    </div>
  );
};

export default CardItem;
