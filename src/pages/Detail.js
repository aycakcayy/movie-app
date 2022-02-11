import React from "react"
import {fetchMovies, fetchCast} from "../api/index"
import {useParams} from "react-router-dom"
import { useQuery } from "react-query";
import { useSelector, useDispatch } from "react-redux"


function Detail(){
   
    const params= useParams()
    console.log(params)

    const { theme } = useSelector((state) => state)
    
    const movie_id=params.movieId;

    const POSTER_BASE_URL = "https://image.tmdb.org/t/p/w500";

    const MoviesData = useQuery(
        ["movies", movie_id],
        () => fetchMovies(movie_id),
        { retry: false }
      );

    const CastData = useQuery(
        ["cast", movie_id], () => fetchCast(movie_id), 
        {retry: false,}
    );

    const Casts = CastData?.data?.data?.cast;
    console.log(Casts)
   
    return(
    <>
          <div className="container mt-5">
              <div className="row">
                 
            <div  className="card mb-3" >
            <div className="row g-0">
              <div className="col">
             <img src={`${POSTER_BASE_URL}${MoviesData?.data?.data?.poster_path}`} classNameName="img-fluid rounded-start" alt="..." /> 
              </div>
              <div className="col">
                <div className="card-body">
                  <h1 className="card-title">{MoviesData?.data?.data?.original_title}</h1>
                  <p className="card-text">{MoviesData?.data?.data?.overview} </p>
                  <p className="card-text"><small className="text-muted">{MoviesData?.data?.data?.release_date}</small></p>
                </div>
              </div>
            </div>
          </div>
          </div>

<h1>Casts</h1>
<div theme={theme} className="d-flex flex-row flex-nowrap overflow-auto mb-5">
{
    Casts?.map((item, index) => <div key={index}> 
    <div className={`card card-block col-md-12 mx-4 h-100  ${theme === "light" ? "bg-light" : "bg-dark"}`} id="home-block">
        <img src={`${POSTER_BASE_URL}${item.profile_path}`} className="card-img-top h-50" alt="..." /> 
         <div className={`card-body ${theme === "light" ? "text-dark" : "text-light"}`}>
           <p className="card-title">{item.name}</p>
           <p className="card-text">{item.character}</p>
         </div>
       </div></div>)
}
          </div>
          </div> 
    </>
    )
}

export default Detail