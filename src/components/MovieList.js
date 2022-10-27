import React from "react";
import { Container ,Col, Row} from "react-bootstrap";
import CardMovie from "./CardMovie";




const MovieList = ({movies}) => {
    return(
    <Row className="pt-3 ">
       {movies.length >= 1 ?(
        movies.map((mov) => {
            return(
                <CardMovie key={mov.id} mov={mov}/>
            )
        })
       ):<h2> No Movies To show</h2>}
       
    </Row>
    )
}
export default MovieList;