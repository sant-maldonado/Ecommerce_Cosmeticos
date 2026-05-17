import { useContext, useState } from 'react';
import BikeCard from './BikeCard';
import { bikes } from '../data/bikes';
import { CartContext } from '../context/CartContext';

const categories = ["todos", "Labios", "Skincare", "Fragancias", "Maquillaje", "Uñas", "Cuidado Corporal"];

export default function BikeGrid() {
  const { addToCart } = useContext(CartContext);
  const [activeCategory, setActiveCategory] = useState("todos");

  const filteredBikes = activeCategory === "todos" 
    ? bikes 
    : bikes.filter(bike => bike.category === activeCategory).slice(0, 6);

  const categoryLabels = {
    todos: "Todos",
    "Labios": "Labios",
    "Skincare": "Skincare",
    "Fragancias": "Fragancias",
    "Maquillaje": "Maquillaje",
    "Uñas": "Uñas",
    "Cuidado Corporal": "Cuerpo"
  };

  return (
    <section id="catalogo" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-900">Catálogo de Cosméticos</h2>
          <p className="text-gray-600 mt-2">Los mejores productos de belleza, los mejores precios</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100"
              }`}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBikes.map((bike) => (
            <BikeCard key={bike.id} bike={bike} addToCart={addToCart} />
          ))}
        </div>

        {filteredBikes.length === 0 && (
          <p className="text-center text-gray-500 py-8">
            No hay productos en esta categoría
          </p>
        )}
      </div>
    </section>
  );
}