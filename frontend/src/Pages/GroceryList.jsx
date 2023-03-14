import { useState, useEffect } from "react";

const GroceryList = () => {
    const [groceries, setGroceries] = useState(null);

    useEffect(()=> {
        const fetchGroceries = async () => {
            const response = await fetch('/api/groceries');
            const data = await response.json();
            setGroceries(data)
        }
        fetchGroceries()
    }, [])
    console.log(groceries)

    if (!groceries) {
        return (
            <div>Loading...</div>
        )
    }

    return ( 
        <div className="grocery-list">
            {groceries.map((grocery) => 
                <ul key={grocery._id}>
                    <li>{grocery.name}</li>
                    <li>{grocery.price}</li>
                    <li>{grocery.quantity}</li>
                </ul>
            )}
        </div>
     );
}
 
export default GroceryList;