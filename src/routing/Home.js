import { useNavigate } from "react-router-dom"; 

const Home = () =>
{
    const navigate = useNavigate();//Initialize useNavigate hook
    const goToAbout = () => {
        navigate('/about');//navigate to "About" page
    };
     return (
    <div>
        <h2>Home Page</h2>
        <button onClick={goToAbout}>Go to About Page</button>
    </div> );

    // return (<div
    //     style={{ color: "red", background: "black" }}>
    //     <h1>This is Home Page</h1>
    //     <img src={require('C:/Users/HP/OneDrive/Desktop/ReactJs By Aditya/react-routing-app/react-routing-app/src/images/Garden.jpeg')}
    //     alt="width={400} height={300}"/>
    // </div>
    
}
export default Home;