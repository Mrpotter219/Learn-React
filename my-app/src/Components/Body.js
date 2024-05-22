import * as React from "react";
import { RestroCard } from "./RestroCard";
import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";
import resList from "../utils/mockdata";

export const Body = () => {
  const [ListOfRestaurant, setListOfRestaurant] = useState(resList); 

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
      const response = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=18.61610&lng=73.72860");
      const json = await response.json();
      
      console.log(json);

      setListOfRestaurant(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants); 
  };

  if(ListOfRestaurant.length===0){
    return<Shimmer />;
  }

  return (
    <div className="body">
      <div className="Filter">
        <button className="filter-btn" onClick={() => {
          const filteredList = ListOfRestaurant.filter(
            (res) => res.info.avgRating > 4.2
          );
          setListOfRestaurant(filteredList);
        }}>Top rated restro</button>
      </div>
      <div className="res-container">
        {
          ListOfRestaurant.map(restaurant => (
            <RestroCard key={restaurant.info.id} restData={restaurant} />
          ))
        }
      </div>
    </div>
  );
};
