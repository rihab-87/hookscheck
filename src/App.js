import React,{useState} from 'react'

import './App.css';
import MovieCard from './components/movieCard'
// import NavBar from './components/navbar'
// import AddMovie from './components/addMovie'
import MoviesList from './components/MoviesList'
import Addm from './components/addm'
import Rate from './components/Rate'
import Search from './components/search'
 import { Navbar,Nav,NavDropdown,Card , Row, Col,Container} from 'react-bootstrap';
function App() {
  var moviesData=[
{ title:"Princess Frog",description:"A waitress, desperate to fulfill her dreams as a restaurant owner, is set on a journey to turn a frog prince back into a human being.",rate:"4",Img:"https://i.pinimg.com/originals/8b/9e/8c/8b9e8c80fc4929ee384ffd234bc7acb7.jpg"},
{ title:"Frozen",description:" the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter.", rate:"2", Img:"https://runt-of-the-web.com/wordpress/wp-content/uploads/2014/08/frozen.jpg"},
{ title:"Beauty and the beast",description:"A selfish Prince is cursed to become a monster for the rest of his life, unless he learns to fall in love with a beautiful young woman he keeps prisoner.", rate:"2",Img:"https://i.pinimg.com/originals/6d/16/2f/6d162f9417d607b0f953010c1764f972.jpg"},
{ title:"Pocahontas",description:"An English soldier and the daughter of an Algonquin chief share a romance when English colonists invade seventeenth century Virginia.",rate:"1",Img:"https://i.pinimg.com/originals/1c/c6/4c/1cc64c3c7936760675bb4a65cf0ace54.jpg"},
{ title:"Le Roi Lion",description:"Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself", rate:"3",Img:"https://i.pinimg.com/originals/8a/c2/32/8ac232bf0c11fe6a93872c006cba374b.jpg"},
{ title:"Snow White",description:"Exiled into the dangerous forest by her wicked stepmother, a princess is rescued by seven dwarf miners who make her part of their household. ", rate:"5",Img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLdGskD-ZomoftERM1OtE457ersKZJZ2mQDd3RAQWirQYXrZemxLwWRxz_JrjT0ICeNaE&usqp=CAU"},
{ title:"Aladdin",description:"a street urchin in the Arabian city of Agrabah, and his monkey Abu meet Princess Jasmine, who has snuck away from her sheltered life in the palace ", rate:"5",Img:"https://ohmy.disney.com/wp-content/uploads/2014/01/31-aladdin.jpg"},


]
const[affiche,setAffiche]=useState("");
// filter movies with title
 const[serchmv,setSearchmv]=useState("");
 const[serch,setSearch]=useState(false);
 const handlchange=(e)=>{setSearchmv(e.target.value)
  setSearch(true)
  setSave(false)
  setAffiche("filtertitle")
}

 const filtermovie=(serchmv)=>moviesData.filter((el,idx)=>((el.title).toUpperCase()).includes(serchmv.toUpperCase()))
 
 

//  addmovie
const[add,setAdd]=useState(false);
const handeladd=()=>setAdd(true);
const handelclose=()=>setAdd(false);
const[newmovies,setNewmovies]=useState([])
 const[ newmovie,setNewmovie]=useState({ title:"",description:"",rate:"",Img:""})
 const[save,setSave]=useState(false)
   const handelchangemv=(e)=> {
   setNewmovie({...newmovie,[e.target.name ]: e.target.value})
   }
   const handelsave=()=>{
    // console.log(newmovie)
    setSave(true)
    
    setAffiche("addmovie")
    // moviesData.push(newmovie)
       
   }
  //  rate filter
  const[ratefilter,setRatefilter]=useState("");
   const handlerate=(e)=>{setRatefilter(e.target.innerText)
        // console.log(e.target.innerText)
        setAffiche("ratefilter")
   }
   const filterrate=(ratefilter)=>moviesData.filter((movie)=>movie.rate===ratefilter)
   const pushmovie=(save)=> {if(save) return(moviesData.concat(newmovie))}
  const handelhome=()=>setAffiche("allmovie")

    const mainview=(affiche)=>{
switch(affiche){
  case "filtertitle": return <MoviesList  data={filtermovie(serchmv)}/>;break;
  case "ratefilter" : return <MoviesList  data={filterrate(ratefilter)}/>;break;
  case "addmovie":  return <MoviesList data={pushmovie(save)}/>;break;
  case "allmovie":return <MoviesList data={moviesData}/> 
  default:return <MoviesList data={moviesData}/> 
}
    }




  return (
  <>
  
  <Navbar bg="light" expand="lg">
  <Container>
  <Navbar.Brand href="#home" style={{width:"25%"}}><div style={{display:"flex",alignItems:"baseline"}}> <img src="movie.svg" alt="logo" style={{width:"15%"}}/><h3 className="styl-logo" >APP</h3> </div></Navbar.Brand>
    
  <Navbar.Collapse id="basic-navbar-nav" className=".pos-link">

  <Nav className="mr-auto " style={{display:"flex",alignItems:"baseline"}}>
     <Nav.Link class="nav-link" href="#" className="styl-link" onClick={handelhome} >All Movies</Nav.Link> 
     <Nav.Link  onClick={handeladd} className="styl-link"> Add movie</Nav.Link>
    <Addm show={add} handelclose={handelclose} moviesData={moviesData} handelsave={handelsave}  handelchangemv={handelchangemv}/>
    <Rate handlerate={handlerate}/>
    {console.log(filterrate(ratefilter))}
    {/* <MoviesList  data={filterrate(ratefilter)}/> */}
    </Nav>
    <Search handlchange={handlchange}/>
    </Navbar.Collapse>
    </Container>
     </Navbar>
    
 {/* add button */}
 
    {/* <Nav.Link  onClick={handeladd}> addmovie</Nav.Link>
    <Addm show={add} handelclose={handelclose} moviesData={moviesData} handelsave={handelsave}  handelchangemv={handelchangemv}/>
    {console.log(pushmovie(save))} */}
   
    
    {/* searc hbutton */}
    
    {/* <form className="form-inline" action="/action_page.php">
      <label className="form-control mr-sm-2" for="search">Search:</label>
    <input  className="form-control mr-sm-2"type="search" id="search" name="search" placeholder="movies" onChange={handlchange} ></input>
    </form> */}
  {/* //  <Search handlchange={handlchange}/> */}
       
  
  
   
      {/* { save&& (moviesData.push(newmovie))} */}
      {/* {serch&&<MoviesList  data={filtermovie(serchmv)}/>} */}
      {console.log(save)}
      {/* { save?((moviesData.push(newmovie)) ,<MoviesList data={moviesData}/> ):null} */}
      {console.log(save)}
      
      {/* {save?setNewmovies(moviesData.push(newmovie)) <MoviesList data={moviesData.push(newmovie)} />:<MoviesList  data={moviesData}/>} */}
    
   {/* {add?< Addm/>:null} */}
{/* {if (save) {
  moviesData.push(newmovie)
   <MoviesList  data={moviesData}/>} 
  else if (serch) {
  <MoviesList  data={filtermovie(serchmv)}/>} 
  else {
  <MoviesList  data={moviesData}/>
} } */}
<div> {mainview(affiche)}</div>
  
    </>
  );
}

export default App;
