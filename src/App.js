import React from 'react';
import ProductCard from './components/productCard';
import conjuntoDep from './recursosVisuales/conjuntoDep.webp';
import joggers from './recursosVisuales/josggers.webp';
import Comprension from './recursosVisuales/compresion.webp';

function App() {
  const products = [
    {
      name: "Conjunto Deportivo de Mujer",
      description: "Marca Lululemon, tallas S,M,L,XL,XXL.",
      image: conjuntoDep
    },
    {
      name: "Camisa de Compresión",
      description: "Marca Adidas, colores: Negro, azul, gris.",
      image: Comprension
    },
    {
      name: "Jogger",
      description: "Marca Under Armour, unisex.",
      image: joggers
    }
  ];

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      padding: '2rem',
      background: 'linear-gradient(to right, #e0f7fa, #fff)'
    }}>
      <h1 style={{
        textAlign: 'center',
        color: '#00695c',
        fontSize: '2.5rem',
        marginBottom: '2rem'
      }}>
        💪 Tienda de Ropa Deportiva GreenSport 🍀
      </h1>

      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          description={product.description}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default App;
