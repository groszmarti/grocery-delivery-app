import React, { useEffect, useState } from "react";

const Favourites = () => {
  const [favourites, setFavourites] = useState(null);

  useEffect(()=> {
    const fetchFavourites = async () => {
      const response = await fetch('/api/favourites');
      const data = await response.json();
      setFavourites(data);
    };
    fetchFavourites();
  }, [])

  const handleRemoveFromFavourites = (favourite) => {
      fetch(`/api/favourites/${favourite._id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(console.log(`${favourite._id}has been successfully deleted`))
        .then(()=> fetch('/api/favourites'))
        .then((res)=> res.json())
        .then((data)=>setFavourites(data));
    }

  if (!favourites) {
    return <div>Loading...</div>
  }

  if (favourites.length < 1) {
    return (
    <div className="favourites">
      <h2>You don't have any favourites yet</h2>
      </div>
    )
  }
 
  return (
    <div className="favourites">
      <h2>Your Favourites:</h2>
       <div className="card-container">
       {favourites.map((favourite) =>
         <div className="card" key={favourite._id}>
           <img src={favourite.image} alt={favourite.name} />
           <div className="card-content">
             <h3>{favourite.name}</h3>
             <p>{favourite.quantity}</p>
             <p>{favourite.price}€</p>
             <button onClick={() => handleRemoveFromFavourites(favourite)}>Remove from favourites</button>
           </div>
         </div>
      )}
    </div>
    </div>
  );
};

export default Favourites;
