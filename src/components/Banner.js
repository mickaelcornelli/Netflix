import React from 'react'
import {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import "./Banner.scss"
import PlayArrowIcon from "@material-ui/icons/PlayArrow"
import HelpOutlineIcon from "@material-ui/icons/HelpOutline"
import axios from 'axios'
import requests from "../config/Requests"
import QuickView from "./QuickView"

function Banner() {

    const [movie, setMovie] = useState([])
    const [popup, setPopup] = useState(false)

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending)
            
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
        }
        fetchData()
    }, [])

    function handleClickPopup() {
        popup ? setPopup(false) : setPopup(true)
    }

    function truncateText(text, n){
        return text?.length > 0 ? text.substr(0, n - 1) + "..." : "No description";
    }
    
    const bannerStyle = {
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
    }
    
    console.log("popup",popup)
    return(
        <header className="banner" style={bannerStyle}>
            <div className="banner__content">
                <h1 className="banner__title">{movie?.title || movie?.original_title || movie?.original_name || movie?.name}</h1>
                <p className="banner__description">{truncateText(movie?.overview,100)}</p>
                <div className="banner__buttons">
                    <Link to={`/video/${movie?.id}`}>
                    <button className="banner__button banner__button--play">
                        <PlayArrowIcon /> Lecture
                    </button>
                    </Link>
                    <button className="banner__button" onClick={handleClickPopup}>
                        <HelpOutlineIcon /> Plus d'infos
                    </button>
                </div>
            </div>
            <QuickView 
                bannerStyle={bannerStyle}
                movie={movie}
                popupStatut={popup}
                popup={handleClickPopup}
            />
        </header>
    )
}

export default Banner