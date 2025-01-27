import React from "react"
import { json } from "react-router-dom";


class UserClass extends React.Component{
    constructor(props){
        super(props)

        this.state={
            userInfo:{
                name:"Dummy",
                location:"Default",
            }
           
        }
        //console.log(this.props.name + "Child Constructor");
        
    }

    async componentDidMount(){
        // console.log(this.props.name+"Child Componenet did mount");
        const data=await fetch("https://api.github.com/users/amy-verma");
        const json=await data.json()
        //console.log(json);

        this.setState({
            userInfo:json,
        })
    }

    render(){
        // const {name,location}=this.props;
        const {login,location,avatar_url} =this.state.userInfo;
       
        
        return(
            <div className="user-card">
                    <img src={avatar_url} /> 
                <h2>Name:{login}</h2>
                <h2>Location: {location}</h2>
        </div>
        )
    }
}

export default UserClass