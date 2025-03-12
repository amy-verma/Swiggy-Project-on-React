import RestaurantCard, { withPromiseLabel } from "./RestaurantCard";
import resList from "./mockData";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import userContext from "../utils/UserContext";

const Body = () => {
  const [listOfResataurant, setListOfRestaurant] = useState(resList);

  const [filteredRestaurant, setFilteredRestaurant] = useState(resList);
  // console.log("listofrestaurant",listOfResataurant);

  const [searchText, setSearchText] = useState("");

  //whenever state variable chnges react triggers a reconciliation cycle(re-renders the component)
  console.log("Body Rendered")

  const RestaurantCardPromoted = withPromiseLabel(RestaurantCard);

  const onlineStatus = useOnlineStatus();

  const { logggedInUser, setUserName } = useContext(userContext);

  if (onlineStatus === false)
    return (
      <h1>Looks you're offline!! Please check your internet connection</h1>
    );
  // useEffect(()=>{
  //     fetch()
  // },[]);

  // const fetch=async()=>{
  //     const data=await fetch("");
  //     console.log(json);

  // }

  return listOfResataurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="m-0 p-0 w-full">
      <div className="filter flex ">
        <div className="search m-4 p-4">
          <input
            className="border border-solid border-black mx-1"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-1 bg-green-300 round rounded-lg"
            onClick={() => {
              const filteredRestaurant = resList.filter((re) => {
             return re.info.name.toLowerCase().includes(searchText.toLowerCase());
              });
              setFilteredRestaurant(filteredRestaurant);
              //  console.log(searchText)
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-1 bg-gray-100 rounded-lg"
            onClick={() => {
              const filterLogic = listOfResataurant.filter((res) => {
                return res.info.avgRating > 4;
              });
              setListOfRestaurant(filterLogic);
              setFilteredRestaurant(filterLogic)
              // console.log(filterLogic);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label>User name: </label>
          <input
            className="border border-black p-2"
            value={logggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
