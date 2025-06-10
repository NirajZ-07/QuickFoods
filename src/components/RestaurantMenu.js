import { useState, useEffect, use } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";





const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();


    useEffect( () => {
        fetchMenu();
    }, []);

    //name locality areaName rest id
    const fetchMenu = async () => {
        const data = await fetch( MENU_URL + resId);
        // 833270

        const json = await data.json();

        // console.log(json.data);
        setResInfo(json.data);
    }
    
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