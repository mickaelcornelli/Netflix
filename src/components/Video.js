import axios from 'axios'
import React from 'react'
import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"
import requests from '../config/Requests'
import "./Video.scss"

function Video() {
    const [youtubeLink, setYoutubeLink] = useState()
    const API_KEY = "430e4d7b9cae8fca86ca29cfdf9a3938"
    const BASE_URL = "https://api.themoviedb.org/3"
    let { id } = useParams()

    let youtubeVideo = `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`

    
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(youtubeVideo)
            setYoutubeLink(request.data.videos.results[0].key)
            console.log(request)
        }
        fetchData()
    }, [])
    
    

    return(
        <div className="video">
            
           <iframe 
           src={`https://www.youtube.com/embed/${youtubeLink}`} 
           frameBorder="0"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
           allowFullScreen
           title="Embedded youtube"
           ></iframe>

        </div>
    )
}

export default Video