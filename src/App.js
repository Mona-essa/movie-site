import React, {useEffect,useState} from "react";
import NavBar from "./components/Navbar";
import {Container} from "react-bootstrap";
import MovieList from "./components/MovieList";
import axios from "axios";
import Pagination from "./components/Pagination";
import {useParams,BrowserRouter,Routes,Route} from 'react-router-dom'



function App() {

const [movies,setMovies] = useState([])
const [pageCount,setPageCount] = useState(0)

const GetAllMovies = async () => {
  const res =  await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=99b3deb6287af3da2bfaa851ccc48865&language=en-US&page=1");
  setMovies(res.data.results)
  setPageCount(res.data.total_pages)
  
}
const getPage = async (page) => {
 const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=99b3deb6287af3da2bfaa851ccc48865&language=en-US&page=${page}`)
  setMovies(res.data.results)
  setPageCount(res.data.total_pages)
  
}
useEffect(() => {
 GetAllMovies();
 },[])

const search = async (word) => {
  if(word === ""){
    GetAllMovies();}
    else {const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=99b3deb6287af3da2bfaa851ccc48865&query=${word}&language=en-US&page=1&include_adult=false`)
    setMovies(res.data.results);}
  

}

  return (
    <div className="App">
    <NavBar search={search}/>
    <Container>
      
     <MovieList movies={movies} getpage={getPage}/>
      
      
      <Pagination getPage={getPage} pageCount = {pageCount}/>
    </Container>
    
    </div>
  );
}

export default App;
