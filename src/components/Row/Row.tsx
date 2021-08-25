import React, { useState, useEffect } from 'react';
import axios from '../../config/axios';
import { IMovie, IRow } from '../../helper/types';
import "./Row.css";
export const POSTER_PATH = 'https://image.tmdb.org/t/p/original'

const Row = ({ title, fetchUrl, isLargeRow } : IRow) => {    
    const [movies, setMovies] = useState<IMovie []>([]);

    useEffect(() => {
        async function fecthData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fecthData();
    }, [fetchUrl])

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map((movie) => (
                    <img
                        key={movie.id}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${POSTER_PATH}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                        alt={movie.name} 
                    />
                ))}
            </div>
        </div>
    )
}

export default Row
