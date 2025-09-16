import React from "react";
import { Link } from "react-router-dom";
 
function Homee() {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <Link to ="/login">Login</Link> |{" "}
        <Link to ="/services">Dashboard</Link>

      </nav>
    </div>
  );
}
export default Homee;
