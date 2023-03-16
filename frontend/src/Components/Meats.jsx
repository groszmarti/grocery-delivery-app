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

    const handleAddToFavourites = async (grocery) => {
      const response = await fetch('/api/favourites/', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(grocery),
        });
        const favourite = await response.json();
    }
    
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
              <div className="card-image">
              <img src={grocery.image} alt={grocery.name} />
              </div>
              <div className="card-content">
                <h3>{grocery.name}</h3>
                <p>{grocery.quantity}</p>
                <p><strong>{grocery.price}€</strong></p>
                <button onClick={() => handleAddToFavourites(grocery)}>Add to favourites</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}
 
export default Meats;