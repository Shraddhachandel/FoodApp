import RestaurantCard from './RestaurantCard'; // Update the path based on your project structure

const App = () => {
  const restaurantsData = [
    { name: 'Satyug Restaurant', category: 'Sweets and Namkeen', rating: '4.4', deliveryTime: '38', image: 'gulab_jamun.avif' },
    // Add more restaurant data as needed
  ];

  return (
    <div>
      <RestaurantCard restaurants={restaurantsData} />
    </div>
  );
};

export default App;