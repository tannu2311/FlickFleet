import React, { useEffect, useState } from 'react';
import axios from './../backend/axios';
// import requests from './../backend/requests'
import "./Banner.css"

const base_url = "https://image.tmdb.org/t/p/original/"

function Banner({ fetchUrl }) {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            // getting a random movie in movie 
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]);
            return request;
        }
        fetchData();
    }, []);
    console.log(movie)

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    return <>
        {/* bg image */}
        <header className="banner"
            style=
            {{ backgroundImage: `url('${base_url}${movie?.backdrop_path}')` }}
        >
            {/* <img key={movie.id} className={`row__poster ${isVerticalLargeRow && 'row__poster_isVertical'}`} 
              src = {`${base_url}${
                isVerticalLargeRow ? movie.poster_path : movie.backdrop_path
              }`}  */}
            <div className="banner__contents">
                {/* title  */}
                <h1 className='banner__title'>
                    {movie?.name || movie?.title || movie?.original_name}
                </h1>

                {/* div -> play, myList */}
                <div className="banner__buttons">
                    <button className="banner__button">
                        Play
                    </button>
                    <button className="banner__button">
                        My List
                    </button>
                </div>
                {/* description */}
                <h1 className="banner__description">
                    {/* {movie?.overview} */}
                    {truncate(movie?.overview, 158)}
                </h1>
            </div>
            {/* Adding fade effect using an empty div  */}
            <div className="banner__fadeBottom">

            </div>
        </header>
    </>;
}

export default Banner;
