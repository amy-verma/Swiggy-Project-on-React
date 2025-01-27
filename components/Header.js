import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import Grocery from "./Grocery";
import userContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header=()=>{

    let [btnName,setBtnName]=useState("Login")

    const onlineStatus=useOnlineStatus();
    const {logggedInUser}=useContext(userContext)
    // console.log({logggedInUser})

    //subscribe to the store using selector(small portion of store)
    const cartItem=useSelector((store)=>store.cart.items)
    console.log(cartItem);

 

    return(
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
             <div className="logo-container">
            <img
             className="w-20"
              src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 space">
                    <li className="px-4">Online Status -{onlineStatus ===true ? "✅" :"🔴"} </li>
                    <li className="px-4">
                        <Link to="/" >Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                       <Link to="/contact">Contact Us </Link> 
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4 font-bold text-xl">
                         <Link to="/cart">Cart ({cartItem.length
                         })</Link>
                    </li>
                    <li className="px-4 font-bold"> {logggedInUser}  </li>
                    <button className="login" onClick={()=>{
                       btnName=== "Login" ? setBtnName("Logout") :
                       setBtnName("Login")
                        console.log(btnName);
                        
                    }}>{btnName}</button>
                    
                </ul>
            </div>
        </div>
    )
}

export default Header;