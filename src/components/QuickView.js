import React from "react"
import "./QuickView.scss"
import { useState , useEffect} from 'react'
import CancelIcon from "@material-ui/icons/Cancel"
import axios from 'axios';
function QuickView(bannerStyle) {

    const [movies, setMovies] = useState([])

    const API_KEY = "430e4d7b9cae8fca86ca29cfdf9a3938"
    const BASE_URL = "https://api.themoviedb.org/3"
    const fetchUrl = BASE_URL+'/movie/'+bannerStyle.movie.id+'?api_key='+API_KEY

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data)
        }
        fetchData()
    }, [fetchUrl])

    const arrayGenre = [
        ['Actions',28],
        ['Aventures',12],
        ['Animations',16],
        ['Comédies',35],
        ['Crimes',80],
        ['Documentaires',99],
        ['Drames',18],
        ['Familial',10751],
        ['Fantastiques',14],
        ['Historiques',36],
        ['Horreurs',27],
        ['Musiques',10402],
        ['Mystères',9648],
        ['Romantiques',10749],
        ['Sciences Fiction',878],
        ['Téléfilm',10770],
        ['Thriller',53],
        ['Guerrer',10752],
        ['Western',37],
        ['Action & Aventure',10759],
        ['Enfants',10762],
        ['Informations',10763],
        ['Faits rééls',10764],
        ['Sci-Fi & Fantastique',10765],
        ['Savant',10766],
        ['Show',10767],
        ['Guerre et politique',10768],

    ]

    function changeDateFormat(){
        let fullDate = bannerStyle.movie?.release_date
        let year = fullDate.slice(0,4)
        return year
    }

    function notation(){
        let notation = Math.trunc(bannerStyle.movie?.vote_average/10*100)
        return `Recommandé à ${notation} %`
    }

    return (

        <div className={`quickView ${bannerStyle.popupStatut && "open"}`}>
            <div className="quickView__banner" style={bannerStyle.bannerStyle}>
                <div className="quickView__content">
                    <div className="quickView__headerRow">
                        <h3 className="quickView__title">
                            {bannerStyle.movie?.title || bannerStyle.movie?.original_title || bannerStyle.movie?.original_name || bannerStyle.movie?.name} 
                        </h3>
                        <p>
                            {bannerStyle.movie?.release_date && changeDateFormat()}
                        </p>
                        <p className="quickView__notation">
                            {bannerStyle.movie?.vote_average && notation()} 
                        </p>
                        <p>
                            {movies?.runtime} min
                        </p>
                    </div>
                    <div>
                        <p>
                            {bannerStyle.movie?.overview}
                        </p>
                    </div>
                    {bannerStyle.movie?.genres &&
                        <div className="quickView__column">
                            <h4>Genres :</h4>
                                {movies.genres.map((movie)=>{
                                    return (
                                        <li key={movie.id}>
                                            <p>{movie.name}</p>
                                        </li>
                                    )
                                })}
                        </div>
                    }
                </div>
                <button className="quickView__close" onClick={bannerStyle.popup}>
                    <CancelIcon fontSize="large" />
                </button>
            </div>
        </div>
    )
}

export default QuickView