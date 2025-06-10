import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurants] = useState([]);



  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData =async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.0076578&lng=75.5626039&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();

    console.log(json);

    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log(listOfRestaurants);
  }

  if(listOfRestaurants.length === 0){
    return <Shimmer />
  }

    return (
      <div className="body">
        <div className="filter">
            <div className="search">
              <input 
                type="text" 
                className="search-box" 
                onChange={(event) => {
                  setSearchText(event.target.value);
                }} 
                value={searchText}
              />
              <button onClick={() => {
                //filter the restaurant card and update the UI
                const filteredRestaurant = listOfRestaurants.filter((res) => {
                  return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                });

                setFilteredRestaurants(filteredRestaurant);
                //searchText
                console.log(searchText);
              }}>Search</button>
            </div>


            <button 
                className="filter-btn" 
                onClick={() => {
                    //filter logic here
                    const filteredData = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4
                    );
                    setListOfRestaurants(filteredData);
                }}
            >
                Top Rated Restaurants
            </button>
        </div>
        <div className="res-container">
          {filteredRestaurant.map((restaurant) => (
        <Link to={"/Restaurants/" + restaurant.info.id} key={restaurant.info.id}><RestaurantCard resData = {restaurant}/></Link>
            
          ))}
        </div>
      </div>
    );
  };
  
  export default Body;
  
  // {/* <RestaurantCard key={restaurant.info.id} resData = {restaurant}/> */}