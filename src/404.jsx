import React from "react";

function NotFoundPage(){
    return(
        <div style = {{background:"url('imgs/404.jpg')",zIndex:0,width:"100%",flex: '1 1',backgroundRepeat:"no-repeat",backgroundSize:"cover", backgroundPosition:"center"}}>
            <div style={{padding:"20px",display:"flex", flexDirection:"column", alignItems:"center"}} className="er404">
              <h1>404</h1>
              <h2>Page not found</h2>
            </div>
        </div>
    )
}
export default NotFoundPage