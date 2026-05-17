import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const products = [
  { name: "Kit Labiales Nude", price: "$12.500", img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop" },
  { name: "Set Skincare Daily", price: "$18.200", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop" },
  { name: "Paleta Sombras 12T", price: "$15.900", img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=400&fit=crop" },
  { name: "Perfume Floral 50ml", price: "$22.500", img: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop" },
];

const Products = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <section className="py-16 px-8 text-center">
      <h3 className="text-3xl font-semibold mb-8">Productos Destacados</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {products.map((p) => (
          <div key={p.name} className="bg-white shadow rounded p-4 hover:scale-105 transition">
            <img src={p.img} alt={p.name} className="rounded mb-4 w-full h-40 object-cover" />
            <h4 className="font-medium">{p.name}</h4>
            <p className="text-gray-600">{p.price}</p>
            <button
              onClick={() => addToCart(p)}
              className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Agregar al Carrito
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;