import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{

    //read my card
    const cartItem=useSelector((store)=>store.cart.items);
    console.log(cartItem)

    const dispatch=useDispatch();

    const handleClearCart=()=>{
        dispatch(clearCart())
    }

    return(
        <div className="text-center m-4 p-4">
            <h1 className="m-2 p-2 font-bold text-xl">Cart</h1>
            <button className="p-2 m-2 rounded-lg bg-black text-white" onClick={handleClearCart}>Clear Cart</button>
            <div className="w-6/12 m-auto">
            {cartItem.length==0 && <h1>Cart is empty,Add Items to the cart!</h1>}
                <ItemList items={cartItem}/>
            </div>
        </div>
    )
}

export default Cart;