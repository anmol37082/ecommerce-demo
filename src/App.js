// App.js
import React, { useState } from 'react';
import './App.css';

const products = [
  { id: 1, name: 'Product 1', price: '$10', image: 'https://picsum.photos/id/101/300/200' },
  { id: 2, name: 'Product 2', price: '$20', image: 'https://picsum.photos/id/102/300/200' },
  { id: 3, name: 'Product 3', price: '$30', image: 'https://picsum.photos/id/103/300/200' },
  { id: 4, name: 'Product 4', price: '$40', image: 'https://picsum.photos/id/104/300/200' },
  { id: 5, name: 'Product 5', price: '$50', image: 'https://picsum.photos/id/105/300/200' },
  { id: 6, name: 'Product 6', price: '$60', image: 'https://picsum.photos/id/106/300/200' },
  { id: 7, name: 'Product 7', price: '$70', image: 'https://picsum.photos/id/107/300/200' },
  { id: 8, name: 'Product 8', price: '$80', image: 'https://picsum.photos/id/108/300/200' }
];

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? 'App dark' : 'App'}>
      <header>
        <h1>E-Commerce Demo</h1>
        <button onClick={() => setDark(!dark)}>
          {dark ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>

      <div className="products">
        {products.map(product => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
