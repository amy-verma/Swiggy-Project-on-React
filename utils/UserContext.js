import { createContext } from "react";

const userContext=createContext({
    logggedInUser:"Default User"
})

export default userContext;