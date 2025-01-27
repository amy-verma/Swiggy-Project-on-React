import React from "react";
import { form } from "react-router-dom";

const Contact=()=>{
    return(
        <div>
            <h1 className="font-bold text-2xl p-3 m-3">Contact Us</h1>
            <form>
                <input className="m-2 p-2 border border-black" type="text" placeholder="name"/>
                <input className="m-2 p-2 border border-black" type="text" placeholder="message"/>
                <button className="m-2 p-2 border border-black rounded-lg bg-gray-200" type="submit" >Submit</button>
            </form>

        </div>
    )
}

export default Contact;