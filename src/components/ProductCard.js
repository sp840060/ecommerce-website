import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100">
        <img
          src={product.image}
          alt={product.name}
          className="card-img-top"
          style={{ objectFit: 'cover', height: '200px' }}
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text fw-bold">${product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
