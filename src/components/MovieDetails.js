import axios from "axios";
import React, { useEffect, useState } from "react";
import {Col,Container,Row} from "react-bootstrap";
import { BrowserRouter, Link, Route, Routes, useParams } from "react-router-dom";


const MovieDetails = ({}) => {
    const param = useParams();
    const[movie,setMovie] = useState([]);

    const getMovieDetails = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=99b3deb6287af3da2bfaa851ccc48865&language=en-US`)
        setMovie(res.data)
    }
    useEffect(() => {
        getMovieDetails();
    },[])
    return(
      <Col className="moviedetails d-flex align-items-center text-center">
        <Container className="">
          
            <Link to="/">
            <button className="me-5">Back To Main Page</button>
            </Link>
            
            <a href={movie.homepage}><button>Watch Movie Now</button></a>
            </Container>
      </Col>
    )
}
export default MovieDetails