import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./anime-description.css"

function AnimeDescription(){
    let [anime,setAnime] = useState("")
    let s = useParams()
    function f(title){
        fetch(`https://api.anilibria.tv/v2/searchTitles?search=${title}&limit=1 `)
        .then(response => response.json())
        .then(todos =>{setAnime(todos[0]);console.log(todos)})
       }
    useEffect(()=>{f(s.id)},[])


    

       


    return(
        
        <div className="anime-description">
          <div className="anime-description__left-side">
              <div className="anime-description__img"><img className="" src={`https://dl-20211030-963.anilib.top//${anime? anime.posters.medium.url: "" }`} alt="" /></div>
              <div className="anime-description__about">
              </div>
          </div>
          <div className="anime-description__right-side">
              <h2 className="anime-description__title">{ `${ anime ? anime.names.ru: "" }` }</h2>
              <p className="anime-description__description">{anime.description}</p>
              <div className="anime-description__detailed-description">
                  <div className="anime-description__item"><div className="anime-description__key">Название</div><div className="line"></div><div className="anime-description__value">{anime ? anime.names.ru : ""}</div></div>
                  <div className="anime-description__item"><div className="anime-description__key">Количество серий</div><div className="line"></div><div className="anime-description__value">{anime ? (anime.type.series == null ? "-" : anime.type.series ) : "неизвестно"}</div></div>
                  <div className="anime-description__item"><div className="anime-description__key">Жанры</div><div className="line"></div><div className="anime-description__value">{anime ? anime.genres.join(", ") : ""}</div></div>
                  <div className="anime-description__item"><div className="anime-description__key">Статус</div><div className="anime-description__value">{ anime ? anime.status.string : ""}</div></div>
                  <div className="anime-description__item"><div className="anime-description__key">Год выпуска</div><div className="anime-description__value">{ anime ? anime.season.string + " "  + anime.season.year : ""}</div></div>
              </div>
              <video>
                  <source src=""/>
              </video> 
          </div>
        </div>
    )
}

export default AnimeDescription