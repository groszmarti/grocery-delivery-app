import React from 'react';
import { useState, useEffect  } from 'react';

import './Products.css';

const Meats = () => {
    const [groceries, setGroceries] = useState(null);

    useEffect(() => {
      const fetchGroceries = async () => {
        const response = await fetch("/api/groceries");
        const data = await response.json();
        setGroceries(data);
      };
      fetchGroceries();
    }, []);
    
        if (!groceries) {
            return <div>Loading...</div>;
          }

    const meatsGroceries = groceries.filter((grocery) => grocery.category === "Meat");

    return (
      <div>
        <h2>Meats</h2>
        <div className="card-container">
          {meatsGroceries.map((grocery) => (
            <div className="card" key={grocery._id}>
              <img src={grocery.image} alt={grocery.name} />
              <div className="card-content">
                <h3>{grocery.name}</h3>
                <p>{grocery.description}</p>
                <p>{grocery.price}€</p>
                <button>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}
 
export default Meats;