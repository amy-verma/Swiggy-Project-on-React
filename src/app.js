import React, { lazy, Suspense, useState,useEffect,useContext} from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header";
import Body from "../components/Body";
import Contact from "../components/Contact";
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';
import Error from "../components/Error";
import About from "../components/About";
import Cart from "../components/Cart";
import RestaurantMenu from "../components/RestaurantMenu";
import userContext from "../utils/UserContext";
// import Grocery from "../components/Grocery";
import {Provider} from 'react-redux'
import appStore from "../utils/appStore";


const Grocery=lazy(()=> import("../components/Grocery"));

const AppLayout=()=>{

    const [userName,setUserName]=useState();

    useEffect(()=>{
        const data={
            name:"Amit Verma"
        };
        setUserName(data.name);
    },[]);

    return(
        <Provider store={appStore}>
        <userContext.Provider value={{logggedInUser:userName ,setUserName}}>
        <div className="app">
           <Header></Header>
          <Outlet/>
        </div>
        </userContext.Provider>
        </Provider>
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/about",
                element:<About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/",
                element: <Body/>
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>, 
            },
            {
                path: "/cart",
                element: <Cart/>
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu/>
            }
        ],
        errorElement:<Error/>,

    },
    
])

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)

