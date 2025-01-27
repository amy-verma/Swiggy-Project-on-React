import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import userContext from "../utils/UserContext";

const RestaurantCard=(props)=>{
    const  {resData}=props;
   const {cloudinaryImageId,name,cuisines,avgRating,deliveryTime,costForTwo,sla}=resData?.info;
    const {logggedInUser}=useContext(userContext)

    return(
        <div className="flex flex-col items-center gap-6" >
        <div className="m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-300 h-[450px]">
        <div className="p-6 w-full max-w-sm flex flex-col ">
            <img className="rounded-lg" alt="res-img" src={CDN_URL+cloudinaryImageId}/>
            <h3 className="font-bold py-4">{name}</h3>
            <h4 className="truncate w-full">{cuisines.join(",")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>User :  {logggedInUser}</h4>
            {/* <h4>{sla?.deliveryTime} minutes</h4> */}
        </div>
        </div>
        </div>
       
    )
};


export const withPromiseLabel=(RestaurantCard)=>{
    return (props)=>{
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>

            </div>
        )
    }
}

export default RestaurantCard;