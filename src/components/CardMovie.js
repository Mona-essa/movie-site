import axios from "axios";
import React, { useState,useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const CardMovie = ({mov}) => {
    
    return(
        <Col xs="4" md="3" lg="2" className="mb-3">
            <Link to={`/movie/${mov.id}`}>
            <div className="box">
           <img src={`https://image.tmdb.org/t/p/w500/`+ mov.poster_path} className="img-fluid"/>
              <div className="overlay text-center  p-2">
                 <div className="info fw-bold">
                    <p> {mov.title}اسم الفيلم : </p>
                    <p> {mov.release_date}تاريخ الاصدار</p>
                    <p>عدد المقيمين: {mov.votec_count} </p>
                    <p>التقيم:{mov.vote_average} </p>
                    
                </div>
            </div>
            
            </div>
           </Link>
        </Col>
    )
}
export default CardMovie;