import React, { useState, useEffect } from "react";
import Item from "../items/Item";
import "./home.css"
import Genre from "./Genre";
import Loader from "../loader/Loader";


function Home(){   
     
    function f(title){
        fetch(`https://api.anilibria.tv/v2/searchTitles?search=${title}&limit=8${  addGenres.length > 0  ? `&genres=${ addGenres.join(",")}` : ""} ${years.length > 0 ? `&year=${years.join(",")}`: "" }` )
        .then(response => response.json())
        .then(todos =>{
            setList([todos]);
            setLoading(false)
        })
       };
    function getGenres(){
        fetch("https://api.anilibria.tv/v2/getGenres")
        .then(genres => genres.json())
        .then(response=>{setGenres(response)})
    };
    function getYears(){
        fetch("https://api.anilibria.tv/v2/getYears")
        .then(genres => genres.json())
        .then(response =>{setAddYears(response);})
    };
    useEffect(()=>{getGenres();getYears();},[]);


    let [loading, setLoading] = useState(true)
    let [years , setYears] = useState([]);
    let [addYears, setAddYears] = useState([]);
    let [addGenres,setAddGenres] = useState([]);
    let [genres,setGenres] = useState("");
    let [value,setValue] = useState("Поиск");
    let [list,setList] = useState([]);


    return (
        <div style = { list[0] == undefined || list[0][0] == undefined || value == "" ? {}: {backgroundImage: `url(https://dl-20211030-963.anilib.top//${list[0][0].posters.original.url} )`}}   className="home" >
           <div className="blur"></div>
           <div className="wrap">
           <div className="find-inp">
             <h1  className="find">Find Anime</h1>
             <div className="inputs">
                 <input value={value} onFocus = {()=> setValue("")} onChange = {(e)=>{setValue(e.target.value); f(value); setLoading(true)}} type="text"/>
                 <h2>Жанры:</h2>
                 <ul className="genres">
                        { genres ? genres.map((item,index)=>{return <Genre value = {value} setValue = {setValue} f = {f} addGenres = {addGenres} setAddGenres = {setAddGenres}  key = {index+1} name ={item}/>}) : ""}
                 </ul>
                 <h2>Годы:</h2>
                 <ul className="genres">
                        { addYears ? addYears.map((item,index)=>{return <Genre value = {value} setValue = {setValue} f = {f} addGenres = {years} setAddGenres = {setYears}  key = {index+1} name ={item}/>}) : ""}
                 </ul>
                    
             </div>

            </div>
            <div className="anime">
                {loading && <Loader/>}
                <div className="anime__items">
                    { list[0] == undefined ? f("кагуя") : list[0].length == 0 ? loading ? "" : <p style={{zIndex : 1, textAlign: "center"}} >по запросу ничего не найдено</p> : list[0].map((item,index)=>{
                            return(
                                <Item key = {index} src = {item.posters.medium.url} description = {item.description} name = {item.names.en}/>
                            )
                        })     
                    }
                </div>
            </div>
           </div>
        </div>
    )
}
export default Home