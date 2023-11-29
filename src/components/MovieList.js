import React from 'react'
import Movie_card from './Movie_card'
import { Link } from 'react-router-dom'



function MovieList({movies}) {

    
    
  return (
    <>
    
    <div style={{display:"flex",justifyContent: "space-around"}} >
        {movies.map((movie, index)=>
             {return (
              <>
             <Movie_card props={movie} key={index}/>
             <Link to={`/${movie.title}`}>Description</Link>
             </>
             )}
        )}
    </div>
    </>
  )
}

export default MovieList