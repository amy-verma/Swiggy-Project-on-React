import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

    const RestaurantMenu=()=>{
    useEffect(()=>{
        fetchMenu()
    },[]);

    const [resInfo,setResInfo]=useState(null);

    const {resId}=useParams()

    const [showIndex,setShowIndex]=useState(null)


    const fetchMenu=async ()=>{
        let data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        let json= await data.json();
        // console.log("api-one",json);
        setResInfo(json.data)
    }

    if (resInfo === null) return  ( Shimmer);

    const {name,cuisines,costForTwoMessage,
        avgRating }=resInfo?.cards[2]?.card?.card?.info || "Item name not available" ;

    const {itemCards} =resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    
    const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    
    return  (
        
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>

            <p className="font-bold text-lg">{cuisines.join(", ")}-{costForTwoMessage}</p>
                {/**categories accordian */}
                {categories.map((category,index)=><RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card}
                                showItem={index === showIndex ? true : false}
                                setShowIndex={()=>setShowIndex(index)}

                />
                )}
        </div>
    )
}

export default RestaurantMenu;