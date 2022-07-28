import React, { useState } from "react";
function Genre(props){
    let [active, setActive] = useState("")
    function addActive(){
        addgenre()
        !active ? setActive("active") : setActive("")
        console.log(props.addGenres)


    }
    function addgenre(){
        !props.addGenres.includes(props.name) ? props.setAddGenres([...props.addGenres,props.name]): props.setAddGenres(props.addGenres.filter((item)=> {
            if (props.name === item){}
            else{ return item  }}))
    }
    return(
        <li onClick={addActive} className = {active} >{props.name}</li>
    )
}
export default Genre