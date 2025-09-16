import { AddressContext, UserContext } from "../App"
import { useContext } from "react"
import React from "react"
export const ComponentF=()=>
{ 
    const user= useContext(UserContext)
     const address=useContext(AddressContext) 
     
    
    return(<div  id="comp_F">
     {user} and {address} 

    <UserContext.Consumer>
        {user=>{
            return(
                <AddressContext.Consumer>
                    {
                        address=>{
                            return(
                                <div>
                                    user context value {user},Address context val {address}
                                </div>
                            )
                        }
                    }
                </AddressContext.Consumer>
            )
        }}

    </UserContext.Consumer>
    </div>)
} 
