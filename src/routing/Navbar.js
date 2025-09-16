import { Link }from "react-router-dom";

export const Navbar = () => {
    const myStyle = {backgroundColor:"Blue",  color:"black", fontWeight:"black"};
    return (
        <div>
            <nav style={myStyle}>
                <Link to='/'>Home</Link>&nbsp;&nbsp;
                <Link to='/about'>About</Link> &nbsp;&nbsp;
                <Link to='/about/next'>Next Page</Link>&nbsp;&nbsp;
            </nav>
        </div>
    )
}