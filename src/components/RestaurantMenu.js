import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";



const RestaurantMenu = () => {
    const {resId} = useParams();

    //custom hook to get the restaurant menu
    const resInfo = useRestaurantMenu(resId);
    
    if(resInfo === null) return <Shimmer/>;
    
    const { name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);

    return <div>
        <h1>{name}</h1>
        <p>{cuisines.join(", ")} - {costForTwoMessage}</p>

        <h3>Menu</h3>
        <ul>
            {itemCards.map((item, id) => {
                return <li key={id}>{item.card.info.name + " - Rs. " + item.card.info.price/100}</li>
            })}
        </ul>
    </div>
}

export default RestaurantMenu;