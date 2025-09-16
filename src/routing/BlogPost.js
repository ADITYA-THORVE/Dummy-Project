import React from "react";
import { useParams } from "react-router-dom";

function BlogPost() 
{
    let {id} = useParams();
    return (
        <div  style={{ fontSize : "50px"}}>
            Now Showing Post { id }
            </div>
    );
}
export default BlogPost;
