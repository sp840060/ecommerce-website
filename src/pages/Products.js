import React from 'react';
import ProductCard from '../components/ProductCard'; // Adjust the import path if necessary

function Products() {
  const products = [
    {
      id: 1,
      name: 'Laptop',
      description: 'High-performance laptop',
      price: 999.99,
      image: '/image/laptop.jpg',
    },
    {
      id: 2,
      name: 'Smartphone',
      description: 'Latest model smartphone',
      price: 499.99,
      image: '/image/smartphone.jpg',
    },
    {
      id: 3,
      name: 'Headphone',
      description: 'Noise-cancelling headphone',
      price: 199.99,
      image: '/image/headphone.jpg',
    },
    {
      id: 4,
      name: 'Smartwatch',
      description: 'Fitness tracking smartwatch',
      price: 299.99,
      image: '/image/smartwatch.jpg',
    },
  ];

  return (
    <div className="container">
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
