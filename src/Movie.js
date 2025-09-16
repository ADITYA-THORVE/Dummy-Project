import React, { useState } from "react";

const Movie = ()=> {

    const movieData =[
    {id: 1, title: "Bhaubali", year: "2015"},
    {id: 2, title: "KGF", year: "2023"},
    {id: 3, title: "Conjuring", year: "2013"},
    {id: 4, title: "The Martix", year: "1999"},
];
const [query,setQuery] = useState("");
const [filteredMovies , setFilteredMovies] =useState (movieData);

const handleSearch = () =>{
    const results = movieData.filter(movie =>
        movie.title.toLowerCase().includes(query.toLowerCase()));
    
};

return (
    <div style ={{textAlign:"center", padding:"20px"}}>
        <h2>movie Search App</h2>

        <input
         type="text"
         placeholder="Enter Movie Name...."
         value={query}
         onChange={(e) => setQuery(e.target.value)}
         style={{padding:"8px", marginRight:"10px", width:"250px"

         }}
         />
           <button onClick={handleSearch}>Search</button>

           {filteredMovies.length > 0 ? (
           <table border ="1" style={{width:"50%", margin :"auto",
            textAlign :"left", marginTop: "20px" }}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredMovies.map((movie, index) => (
                        <tr key ={movie.id}>
                            <td>{index + 1}</td>
                            <td>{movie.title}</td>
                            <td>{movie.year}</td>
                        </tr>
                    ))}
                    </tbody>
                    </table>
                   ) :( 
                    <p>No Movies Found.</p>
                   )}
                    </div>
                  );
                };
                export default Movie ;
