import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./item.css"
function Item(props){

        function openDescription(){
            setDivClass([...new Set([...divClasses,"active"])])
        }

        function closeDescription(){
                setDivClass([divClasses.splice(divClasses.indexOf("active")-1,1)])
            }    
        const [divClasses, setDivClass] = useState(["item__description"])
    return(
        <Link to = {props.name} onMouseLeave={closeDescription} onMouseEnter = {openDescription} className="item">
                <div className={divClasses.join(" ")}>
                  <div className="body__desc">
                    <h2>{props.name}</h2>
                    <p>{props.description}</p>
                  </div>
                </div>
                <img src = {"https://dl-20211030-963.anilib.top//" + props.src} alt="" />
        </Link>)
}

export default Item