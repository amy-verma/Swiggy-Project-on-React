import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import userContext from "../utils/UserContext";


class About extends React.Component{
    constructor(props){
        super(props);
        // console.log("Parent Constuctor");
        
    }

componentDidMount(){
    //console.log("Parent component did mount");
    
}

    render(){
        //console.log("Parent Render");
        
        return(
            <div>
            Logged In User
            <userContext.Consumer>
            {({logggedInUser})=><h1 className="text-xl font-bold">{logggedInUser}</h1>}
            </userContext.Consumer>
            <User name={"Amit"}/>
            <UserClass name={"Amit (class)"} location={"Bangaluru (class)"}/>
           
        </div>
        )
    }
}



export default About;