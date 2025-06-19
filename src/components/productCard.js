import React from 'react';

function ProductCard({ name, description, image }) {
  return (
    <div style={{
      backgroundColor: '#ffffff',
      padding: '1rem',
      marginBottom: '2rem',
      borderRadius: '1rem',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      maxWidth: '600px',
      margin: 'auto'
    }}>
      <h2>{name}</h2>
      <p>{description}</p>
      <img
        src={image}
        alt={name}
        style={{ width: '100%', borderRadius: '0.5rem' }}
      />
      <button style={{
        marginTop: '1rem',
        padding: '0.5rem 1rem',
        backgroundColor: '#f44336',
        color: '#fff',
        border: 'none',
        borderRadius: '0.5rem'
      }}>Comprar</button>
    </div>
  );
}

export default ProductCard;
