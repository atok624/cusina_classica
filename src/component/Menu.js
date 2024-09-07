import React from 'react';

const Menu = () => {
  const menuItems = [
    {
      name: "Margherita Pizza",
      description: "Classic pizza with tomato, mozzarella, and fresh basil.",
      price: "$12",
      image: "/Images/Margherita Pizza.jpg",
    },
    {
      name: "Spaghetti Carbonara",
      description: "Rich and creamy pasta with pancetta and parmesan.",
      price: "$15",
      image: "/Images/Spaghetti Carbonara.jpg",
    },
    {
      name: "Lasagna Bolognese",
      description: "Layered pasta with Bolognese sauce and béchamel.",
      price: "$18",
      image: "/Images/Lasagna Bolognese.jpg",
    },
    {
      name: "Tiramisu",
      description: "Traditional Italian dessert with coffee-soaked ladyfingers.",
      price: "$8",
      image: "/Images/Tiramisu.jpg",
    },
    // Add more dishes if needed
  ];

  return (
    <section className="py-16 bg-white" id="menu">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Our Menu
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
              {/* Dish Image */}
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              
              {/* Dish Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <p className="text-gray-800 font-semibold">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
