import React, { useState } from "react";
import "./App.css";
import MovieCard from "./components/movieCard";
import MoviesList from "./components/MoviesList";
import Addm from "./components/addm";
import Rate from "./components/Rate";
import Search from "./components/search";
import {moviesData} from "./components/data";


function App() {
 
  const [affiche, setAffiche] = useState("");
  // filter movies with title
  const [serchmv, setSearchmv] = useState("");
  const [serch, setSearch] = useState(false);
  const handlchange = (e) => {
    setSearchmv(e.target.value);
    setSearch(true);
    setSave(false);
    setAffiche("filtertitle");
    setRating(0);
  };

  const filtermovie = (serchmv) =>
    moviesData.filter((el, idx) =>
      el.title.toUpperCase().includes(serchmv.toUpperCase())
    );
  //  addmovie
  const [add, setAdd] = useState(false);
  const handeladd = () => {
    setAdd(true);
    setRating(0);
  };
  const handelclose = () => setAdd(false);
  const [newmovies, setNewmovies] = useState([]);
  const [newmovie, setNewmovie] = useState({
    title: "",
    description: "",
    rate: "",
    Img: "",
  });
  const [save, setSave] = useState(false);
  const handelchangemv = (e) => {
    setNewmovie({ ...newmovie, [e.target.name]: e.target.value });
  };
  const handelsave = () => {
    setSave(true);
    setAffiche("addmovie");
  };
  //  rate filter
  const [rating, setRating] = useState(0);
  const onStarClick = (nextValue) => {
    setRating(nextValue);
    setAffiche("ratefilter");
  };
  const filterrate = (rating) =>moviesData.filter((movie) => movie.rate == rating);
  const pushmovie = (save) => {
    if (save) return moviesData.concat(newmovie);
  };
  // full movies
  const handelhome = () => {
    setAffiche("allmovie");
    setRating(0);
  };
//  mainview
  const mainview = (affiche) => {
    switch (affiche) {
      case "filtertitle":
        return <MoviesList data={filtermovie(serchmv)} />;
        break;
      case "ratefilter":
        return <MoviesList data={filterrate(rating)} />;
        break;
      case "addmovie":
        return <MoviesList data={pushmovie(save)} />;
        break;
      case "allmovie":
        return <MoviesList data={moviesData} />;
      default:
        return <MoviesList data={moviesData} />;
    }
  };

  return (
    <>
{/* *****************************navbar************** */}
      <nav className="navbar navbar-expand-sm bg-light nav-pos fixed-top ">
        <a className="navbar-brand" href="#">
          <img src="movie.svg" alt="Logo" style={{ width: "40px" }} />{" "}
          <h3 className="styl-logo">APP</h3>
        </a>
        <ul className="navbar-nav ">
          <li className="nav-item">
            {" "}
            <a className="nav-link styl-link" href="#" onClick={handelhome}>
              All movies
            </a>
          </li>
          <li className="nav-item">
            {" "}
            <a className="nav-link  styl-link" href="#" onClick={handeladd}>
              Add movie
            </a>{" "}
          </li>
          <Addm
            show={add}
            handelclose={handelclose}
            moviesData={moviesData}
            handelsave={handelsave}
            handelchangemv={handelchangemv}
          />
        </ul>
        <Rate onStarClick={onStarClick} rating={rating} />
        <Search handlchange={handlchange} />
      </nav>
{/******************************************* */}
      <div> {mainview(affiche)}</div>
    </>
  );
}

export default App;
