import React from "react";
import { CDN_URL } from "../utils/constants";

export function RestroCard(props){

    const {restData}=props;
    return(
        <div className="res-card">
            <img className="res-logo" alt="images" src={CDN_URL + restData.info.cloudinaryImageId} />
            <h3>{restData.info.name}</h3>
            <h4>{restData.info.cuisines.join(", ")}</h4>
            <h4>{restData.info.avgRating}</h4>
            <h4>{restData.info.costForTwo}</h4>
            <h4>{restData.info.sla.deliveryTime} minutes</h4>
        </div>
    );
}