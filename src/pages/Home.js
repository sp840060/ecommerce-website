import React, { useState } from 'react';

function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  const products = [
    { name: 'Laptop', image: 'laptop.jpg', price: '₹99,999' },
    { name: 'Smartphone', image: 'smartphone.jpg', price: '₹49,999' },
    { name: 'Headphone', image: 'headphone.jpg', price: '₹5,999' },
    { name: 'Smartwatch', image: 'smartwatch.jpg', price: '₹9,999' }
  ];

  const openModal = (image) => {
    setSelectedImage(`/image/${image}`);
    const modal = new bootstrap.Modal(document.getElementById('zoomModal'));
    modal.show();
  };

  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h1>Welcome to Our E-Commerce Store</h1>
        <p className="lead">Find the best electronics at unbeatable prices!</p>
      </div>

      <div className="text-center mb-5">
        <img 
          src="/image/home-banner.jpg" 
          alt="E-commerce Banner" 
          className="img-fluid rounded shadow"
          style={{ maxHeight: '400px', objectFit: 'cover', width: '100%' }}
        />
      </div>

      <div className="row">
        {products.map((product, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <img 
                src={`/image/${product.image}`} 
                className="card-img-top"
                alt={product.name}
                style={{ height: '200px', objectFit: 'contain', padding: '10px', cursor: 'zoom-in' }}
                onClick={() => openModal(product.image)}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text text-success fw-bold">{product.price}</p>
                <div className="mt-auto">
                  <button className="btn btn-success btn-sm w-100 mb-2">Buy Now</button>
                  <button className="btn btn-primary btn-sm w-100">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Zoom Modal */}
      <div className="modal fade" id="zoomModal" tabIndex="-1" aria-labelledby="zoomModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content bg-dark">
            <div className="modal-header border-0">
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-center">
              {selectedImage && (
                <img 
                  src={selectedImage} 
                  alt="Zoomed" 
                  className="img-fluid rounded"
                  style={{ maxHeight: '80vh' }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
