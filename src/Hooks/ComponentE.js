import { ComponentF } from "./ComponentF"

import { UserContext,AddressContext } from "../App"
import { useContext } from "react"

export const ComponentE=()=>
{
     const user= useContext(UserContext)
    const address=useContext(AddressContext) 

    return(<div  id="comp_E">
       
       <ComponentF/> 

      {user} and {address} 
    </div>)
}
