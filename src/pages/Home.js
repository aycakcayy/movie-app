import React from 'react'
import { useQuery } from "react-query";
import {fetchDiscoverMovie, fetchTrendingMovie} from "../api";
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
import {useState} from "react";



function Home(props) {

  const dispatch = useDispatch()
  const location = useLocation()
  const { theme} = useSelector((state) => state)
 
  

const discoverMovie= useQuery(
  "discoverMovie",
  fetchDiscoverMovie,
  { retry: false }
);

const [type, setType] = useState("day");

const trendingMovie=useQuery(
  ["trending", type],
  () => fetchTrendingMovie(type),
  {
    retry: false,
  }
);

console.log(discoverMovie)
const POSTER_BASE_URL = "https://image.tmdb.org/t/p/w500";


  return ( 
    <>

<div  className="container" >
<h2 className='mb-3'>Discover</h2>
    <div theme={theme} className="d-flex flex-row flex-nowrap overflow-auto">
    {  
      discoverMovie?.data?.data?.results?.map((item,index)=>
  
         <div className={`card card-block col-md-2 mx-4`} id="home-block">
         <img src={`${POSTER_BASE_URL}${item.poster_path}`} className="card-img-top" alt="..."/>
              <div className={`card-body`}>
                <p className="card-title">{item.title}</p>
                <p className="card-text">{item.release_date}</p>
              </div>
            </div>
      )
    }
     </div>
   </div>
<div  className="container">
<div className="btn-group m-3" role="group" aria-label="Basic outlined example">
  <button onClick={()=> setType("day")} type="button" className="btn btn-outline-primary">Today</button>
  <button onClick={()=> setType("week")} type="button" className="btn btn-outline-primary">Last Week</button>
</div>
<h2>Trending</h2>
    <div className="d-flex flex-row flex-nowrap overflow-auto mb-3">
    {  
      trendingMovie?.data?.data?.results?.map((item,index)=>
         <div className={`card card-block col-md-2 mx-4 ${theme.backgroundColor}`} id="home-block">
         <img src={`${POSTER_BASE_URL}${item.poster_path}`} className="card-img-top" alt="..."/>
              <div className={`card-body ${theme.color}`}>
                <p className="card-title">{item.title}</p>
                <p className="card-text">{item.release_date}</p>
              </div>
            </div>
      )
    }
     </div>
   </div>
  
   </>
  
  )
 
}

export default Home;
