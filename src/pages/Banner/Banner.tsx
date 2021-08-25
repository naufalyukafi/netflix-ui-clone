import React, { useState, useEffect } from 'react'
import axios from '../../config/axios';
import Request from '../../config/Request';
import './Banner.css';
import { IMovie } from '../../helper/types';

const Banner = () => {
    const [movie, setMovie] = useState<IMovie>();
    
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(Request.fetchNetflixOriginals);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length)
            ]);
            return request;
        }
        fetchData();
    }, []);
    
    return (
        <header className="banner"
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPosition: 'center center',
            }}
        >
            <div className="banner__contents">
                <h1 className="banner__title" >{movie?.title || movie?.name || movie?.original_name }</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {movie?.overview}
                </h1>
            </div>
            
            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner
