// Catalogue.js

import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'; 
import './Catalogue.css';

const products = [
  { id: 1, name: 'Product 1', imageUrl: 'https://tinuiti.com/wp-content/uploads/2023/12/alexa-cp-dot-1.jpg', description: 'Description 1', price: 10 },
  { id: 2, name: 'Product 2', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLyd66LXS3WTC-01d546PTePCaQY4IwwY4xOetJxvBu1PObuA5m0kfjsIJK0mpXdpffQY&usqp=CAU', description: 'Description 2', price: 20 },
  { id: 3, name: 'Product 3', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg00M7CnwpDeL0LjVp6qO-_gK-oQBUQ4GnhDL2hjCVFSgbokETSDb-glNvqGsZToPLemg&usqp=CAU', description: 'Description 3', price: 30 },
  { id: 4, name: 'Product 4', imageUrl: 'https://nypost.com/wp-content/uploads/sites/2/2022/02/air-pods.png', description: 'Description 4', price: 40 },
  { id: 5, name: 'Product 5', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzg8v5iAXJ3zPmbbLt5NWCNChoFf5bnkstOw&s', description: 'Description 5', price: 50 },
  { id: 6, name: 'Product 6', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEiEiLLZBelymxaEBUzJY9BblzmJyzeql1Qw&s', description: 'Description 6', price: 60 },
];


const Catalogue = () => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="catalogue">
      <h1>Catalogue</h1>
      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <div className="product-details">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogue;
