// src/components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard';

const sampleProducts = [
  {
    id: 1,
    name: 'Wireless Headphones',
    description: 'High quality wireless Bluetooth headphones with noise cancellation.',
    price: 59.99,
    image: 'https://m.media-amazon.com/images/I/61D4Z3yKPAL._AC_UL320_.jpg',
    category: 'Electronics'
  },
  {
    id: 2,
    name: 'Smartwatch',
    description: 'Fitness tracking smartwatch with heart rate monitor and GPS.',
    price: 89.99,
    image: 'https://m.media-amazon.com/images/I/71fwbMm1NBL._AC_UL320_.jpg',
    category: 'Wearables'
  },
  {
    id: 3,
    name: 'Laptop Backpack',
    description: 'Waterproof and ergonomic backpack for 15.6 inch laptops.',
    price: 39.99,
    image: 'https://m.media-amazon.com/images/I/71k3gOik46L._AC_UL320_.jpg',
    category: 'Bags'
  },
  {
    id: 4,
    name: 'USB-C Charger',
    description: 'Fast charging USB-C charger compatible with most smartphones and laptops.',
    price: 19.99,
    image: 'https://m.media-amazon.com/images/I/61K9wZwOuyL._AC_UL320_.jpg',
    category: 'Accessories'
  },
  {
    id: 5,
    name: 'Mechanical Keyboard',
    description: 'RGB backlit mechanical keyboard for gamers and programmers.',
    price: 69.99,
    image: 'https://m.media-amazon.com/images/I/81+6f9fnYgL._AC_UL320_.jpg',
    category: 'Computers'
  }
];

function ProductList() {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {sampleProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
