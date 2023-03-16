import React from 'react';
import { useState, useEffect  } from 'react';

import './Products.css';

const Fruits = () => {
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

    const fruitsGroceries = groceries.filter((grocery) => grocery.category === "Fruits");

    return (
      <div>
        <h2>Fruits</h2>
        <div className="card-container">
          {fruitsGroceries.map((grocery) => (
            <div className="card" key={grocery._id}>
              <img src={grocery.image} alt={grocery.name} />
              <div className="card-content">
                <h3>{grocery.name}</h3>
                <p>{grocery.description}</p>
                <p>{grocery.price}€</p>
                <button onClick={() => handleAddToFavourites(grocery)}>Add to favourites</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}
 
export default Fruits;