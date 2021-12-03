import React from "react"
import {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import axios from "axios"
import "./Row.scss"

function Row({ title, fetchUrl, isPoster }) {

    const [movies, setMovies] = useState([])
    const baseUrl = "https://image.tmdb.org/t/p/original"
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
        }
        fetchData()
    }, [fetchUrl])

    console.log("movies",movies)
    return(
        <div className="row" id="movie">
           <h2 className="row__title">{title}</h2>
                <div className="row__images">
                    {movies.map((movie)=> (
                    <Link to={`/video/${movie?.id}`}>
                    <div key={movie.id}>
                        {isPoster  ? 
                        <img 
                            src={`${baseUrl}/${movie.poster_path}`} 
                            alt="{movie?.title || movie?.original_title || movie?.original_name || movie?.name}" 
                            className="row__image"
                        />
                        : movie?.backdrop_path ? 
                        <img 
                            src={`${baseUrl}/${movie.backdrop_path}`} 
                            alt="{movie?.title || movie?.original_title || movie?.original_name || movie?.name}" 
                            className="row__image"
                        />
                         : 
                        <img 
                            src="https://www.phoneworld.com.pk/wp-content/uploads/2020/10/seo-watch-free-link-preview.jpg" 
                            alt="{movie?.title || movie?.original_title || movie?.original_name || movie?.name}" 
                            className="row__image"
                        />
                        }
                    </div>
                    </Link>
                    ))}
                    
                </div>
        </div>
    )
}

export default Row