import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import Grocery from "./Grocery";
import userContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { HiMenu, HiX } from "react-icons/hi"; // ✅ Correct import




const Header=()=>{
    const [isMenuOpen, setIsMenuOpen] = useState(false); 
    

    let [btnName,setBtnName]=useState("Login")

    const onlineStatus=useOnlineStatus();
    const {logggedInUser}=useContext(userContext)
    // console.log({logggedInUser})

    //subscribe to the store using selector(small portion of store)
    const cartItem=useSelector((store)=>store.cart.items)
    console.log(cartItem);

 

    return (
        <div className="flex justify-between items-center bg-pink-100 shadow-lg p-4 md:px-8">
            {/* Logo */}
            <div className="flex items-center">
                <img className="w-16 md:w-20" src={LOGO_URL} alt="Logo" />
            </div>

            {/* Hamburger Menu (Mobile) */}
            <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? (
                        <HiX className="text-3xl" />
                    ) : (
                        <HiMenu className="text-3xl" />
                    )}
                </button>
            </div>

            {/* Navigation Menu */}
            <div
                className={`absolute md:static top-16 left-0 w-full md:w-auto bg-pink-100 md:bg-transparent md:flex md:items-center transition-all ${
                    isMenuOpen ? "block" : "hidden md:flex"
                }`}
            >
                <ul className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0">
                    <li className="text-lg">
                        Online Status - {onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li>
                        <Link to="/" className="hover:text-gray-600">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-gray-600">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-gray-600">
                            Contact Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/grocery" className="hover:text-gray-600">
                            Grocery
                        </Link>
                    </li>
                    <li className="font-bold text-lg">
                        <Link to="/cart" className="hover:text-gray-600">
                            Cart ({cartItem.length})
                        </Link>
                    </li>
                    <li className="font-bold">{logggedInUser}</li>
                    <li>
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                            onClick={() => {
                                setBtnName(btnName === "Login" ? "Logout" : "Login");
                            }}
                        >
                            {btnName}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;