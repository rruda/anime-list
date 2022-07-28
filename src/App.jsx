import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./home/Home";
import User from "./user/User";
import NotFoundPage from "./404";
import Header from "./header/header";
import AnimeDescription from "./Anime-description/Anime-desccription";



function App() {
  return (
    <div className="App">

      <Header/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/user" element = {<User/>}/>
        <Route path='*' element = {<NotFoundPage/>}/>
        <Route path='/home/:id' element = {<AnimeDescription/>}/>
      </Routes>
      <div className="footer"></div>
    </div>
  );
}

export default App;
