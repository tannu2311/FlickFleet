// rfce 
import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types'
import axios from './../backend/axios';
import "./Row.css"
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'

const base_url = "https://image.tmdb.org/t/p/original/"
// const trailerUrl = "XtMThy8QKqU" 
function Row({ fetchUrl, title, isVerticalLargeRow }) {
  {/* state is like a short term memory, when we refresh it disappears  */ }
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  // useEffect used -> 
  // This piece of code will run everytime the dependency changes
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // console.log(request); We found Data.results contain all the matching results.
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]); // fetchUrl is being pulled from outside the block (using props)
  
  console.log(movies);
  
  const opts = {
    height:"390",
    width:"100%",
    playerVars:{
      //http://////////
      autoplay: 1,
    }
  }
  // handleClick
  const handleClick = (movie) => {
    if(trailerUrl)
      setTrailerUrl("");
    else
      movieTrailer(movie?.name || movie?.original_name|| movie?.title || "")
      .then(url => {
        // finding url ID from the whole url 
        const urlParams = new URLSearchParams(new URL(url).search)
        // v contains thte videoId in the url 
        setTrailerUrl( urlParams.get('v'));
      }).catch(error => console.log(error));
  }

  return (
    <>
      <div>

        <div className="row">

          {/* title  */}
          <h2>{title}</h2>

          {/* container -> Posters inside it */} {/* several row posters  */}
          <div className="row__posters">
            {movies.map(movie => (
              // key added for optimisation
              <img key={movie.id}
              // onClick for showing trailer of a particular video
              onClick={() => handleClick(movie)} 
              className={`row__poster ${isVerticalLargeRow && 'row__poster_isVertical'}`} 
              src = {`${base_url}${
                isVerticalLargeRow ? movie?.poster_path : movie?.backdrop_path
              }`} 
              alt={movie?.name || movie?.title} />
            ))}
          </div>
          {trailerUrl && <YouTube videoId = {trailerUrl} opts = {opts}/>}
        </div>
      </div>
    </>
  )
}

export default Row;
