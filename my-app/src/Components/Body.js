import * as React from "react";
import resList from "../utils/mockdata";
import { RestroCard } from "./RestroCard";
import { useState } from "react";

export const Body = () => {

  const  [ListOfRestaurant, setListOfRestaurant] = useState(resList); 
    return (
        <div className="body">
            <div className="Filter">
              <button className="filter-btn" onClick={() => {
                const filteredList=ListOfRestaurant.filter(
                  (res)=>res.info.avgRating > 4.2
                );
                setListOfRestaurant(filteredList);
              }}>Top reted restro</button>
            </div>
            <div className="res-container">
            {
                ListOfRestaurant.map(restaurant => <RestroCard key={restaurant.info.id} restData={restaurant}/>)
            }
            </div>
        </div>
    );
}
