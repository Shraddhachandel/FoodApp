
const RestaurantCard = ({ name, type, rating, deliveryTime, imageSrc }) => {
  return (
      <div className="p-5 w-72 h-96 border-2 border-solid border-green-100 shadow-sm">
          <img src={imageSrc} alt={name} />
          <h3>{name}</h3>
          <h4>{type}</h4>
          <h4>{rating} stars</h4>
          <h4>{deliveryTime} minutes</h4>
      </div>
  );
};

export default RestaurantCard;



