import React from "react";
import RestaurantCard from "./RestaurantCard";

const restaurantsData = [
    { name: "Satyug Restaurant", type: "Sweets and Namkeen", rating: 4.4, deliveryTime: 38, imageSrc: "gulab_jamun.avif" },
    { name: "Shraddha Restaurant", type: "foods", rating: 4.6, delliveryTime:29, imageSrc:"coldcoffe.avif"},
    { name: "Taco Bell", type: "Mexican", rating: 3.9, deliveryTime: 38.28, imageSrc: "Taco.avif" },
    { name: "Baskin Robbins", type: "Desserts,Ice Cream", rating: 4.1, delliveryTime:50.10, imageSrc:"Baskin Robbins.avif"},
    { name: "Haldiram's Restaurant", type: "Chinese, North Indian ", rating: 4.0, deliveryTime: 38.40, imageSrc: "Haldiram's Restaurant.avif" },
    { name: "Pizz Hut", type: "Pizzas", rating: 4.6, delliveryTime:30, imageSrc:"pizz hut.avif"},
    { name: "Fassos-Wraps & Rolls", type: "Fast Food", rating: 4.5, deliveryTime: 26.20, imageSrc: "Faasos-wraps&roll.avif" },
    { name: "Subway", type: "Healthy foods", rating: 4.6, delliveryTime:30 , imageSrc:"Subway.avif"},
    { name: "Hotel Rajhans", type: "Thalis, Indian sarafa", rating: 4.6, deliveryTime: 38, imageSrc: "Hotel Rajhans.avif" },
    { name: "Burger Farm", type: "Burgers", rating: 4.2, delliveryTime:27, imageSrc:"Burgerking.avif"},
    { name: "KFC", type: "Non veg", rating: 4.7, deliveryTime: 38, imageSrc: "KFC.avif" },
    { name: "McDonald's", type: "Fast Foods", rating: 4.8, delliveryTime:39, imageSrc:"MCd.avif"},
    { name: "Guru Kripa", type: "Khana Khajana", rating: 4.8, deliveryTime: 40, imageSrc: "GuruKripa.avif" },
    { name: "Kwality", type: "Ice - Cream", rating: 4.6, delliveryTime:29, imageSrc:"Kwality.avif"},
    { name: "StarBucks", type: "coldcoffe", rating: 4.4, deliveryTime: 38, imageSrc: "starbucks coffe.avif" },
    { name: "Cakes & Crafts", type: "Cakes", rating: 4.0, delliveryTime:25, imageSrc:"cakes.avif"},
    { name: "Dal Chawal Restaurant", type: "Dal Chawal", rating: 4.9, deliveryTime: 38, imageSrc: "dal chawal.avif"},
    { name: "All Rolls", type: "Roll & Roll", rating: 4.4, deliveryTime: 38, imageSrc: "Rolls.webp" },
    { name: "apna Restaurant", type: "foods", rating: 3.8, delliveryTime:20, imageSrc:"veg_legacy.avif"},
    { name: "La Pinoz", type: "Pizzas", rating: 3.1, delliveryTime:25, imageSrc:"la pinoz.avif"},

];

const Body = () => {
    return (
        <div className="flex flex-wrap p-5 cursor-pointer m-8 mb-4 mr-4">
            {restaurantsData.map((restaurant, index) => (
                <RestaurantCard key={index} {...restaurant} />
            ))}
        </div>
    );
};

export default Body;
