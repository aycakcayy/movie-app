import React from 'react'
import { useQuery } from "react-query";
import { fetchDiscoverMovie, fetchTrendingMovie, fetchSearch } from "../api";
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
import { useState } from "react";
import ReactPaginate from 'react-paginate';


function Home(props) {


  const dispatch = useDispatch()
  const location = useLocation()
  const { theme } = useSelector((state) => state)
  const [movie_id, setMovieId] = useState();
  const [show, setShow] = useState();
  const perPage = 3;
  const [selectedPage, setSelectedPage] = useState(0);

  console.log(theme)

  const handlePageClick = (data) => {
    setSelectedPage(data.selected * perPage);
    console.log(selectedPage);
  };

  const discoverMovie = useQuery(
    "discoverMovie",
    fetchDiscoverMovie,
    { retry: false }
  );

  const [type, setType] = useState("day");

  const trendingMovie = useQuery(
    ["trending", type],
    () => fetchTrendingMovie(type),
    {
      retry: false,
    }
  );
  const searchMovie = useQuery(
    ["search", movie_id],
    () => fetchSearch(movie_id),
    {
      retry: false,
    }
  );

  console.log(searchMovie)

  const POSTER_BASE_URL = "https://image.tmdb.org/t/p/w500";


  return (
    <>



     
      
        <div className='container'>
        <div className="input-group flex-nowrap my-5 ">
          <span class="input-group-text" id="addon-wrapping" onClick={() => setShow(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </span>
          <input type="text" className={`form-control  ${theme === "light" ? "bg-light" : "bg-dark"}  ${theme === "light" ? "text-dark" : "text-light"}`} placeholder="Search Movie..." aria-label="Username" aria-describedby="addon-wrapping"
            onChange={(e) => setMovieId(e.target.value)} />
        </div>
      </div>

       {
         show? <div className='d-flex flex-column justify-content-center'> 
            <div className='row'>
              {searchMovie?.data?.data?.results
              ?.slice(selectedPage, selectedPage + perPage)
              .map((item, index) => (
                <div key={index} className="col" > 
                
             
                <div className={`card card-block col-md-8 center mb-5 m-5  ${theme === "light" ? "bg-light" : "bg-dark"}`} id="home-block">
                <img src={`${POSTER_BASE_URL}${item.poster_path}`} className="card-img-top" alt="..." />
                <div className={`card-body ${theme === "light" ? "text-dark" : "text-light"}`}>
                  <p className="card-title">{item.title}</p>
                  <p className="card-text">{item.release_date}</p>
                </div>
              </div>
    

          </div> ))}
          </div>
          <div className='justify-content-center d-flex'>
          <ReactPaginate
              previousLabel={"↩"}
              nextLabel={"↪"}
              breakLabel={"..."}
              pageCount={10}
              marginPagesDisplayed={3}
              pageRangeDisplayed={3}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link"}
              breakClassName={"page-item"}
              breakLinkClassName={"page-link"}
              activeClassName={"active"}
              forcePage={selectedPage / perPage}
            />
            </div>
         </div> : 
        <div className="container">

        <h2 className={`mb-3 ${theme === "light" ? "text-dark" : "text-light"}`} >Discover</h2>
        <div theme={theme} className="d-flex flex-row flex-nowrap overflow-auto">
          {
            discoverMovie?.data?.data?.results?.map((item, index) =>

              <div className={`card card-block col-md-2 mx-4 ${theme === "light" ? "bg-light" : "bg-dark"}`} id="home-block">
                <img src={`${POSTER_BASE_URL}${item.poster_path}`} className="card-img-top" alt="..." />
                <div className={`card-body ${theme === "light" ? "text-dark" : "text-light"}`}>
                  <p className="card-title">{item.title}</p>
                  <p className="card-text">{item.release_date}</p>
                </div>
              </div>
            )
          }
        </div>
     
      
        <div className="btn-group m-3" role="group" aria-label="Basic outlined example">
          <button onClick={() => setType("day")} type="button" className="btn btn-outline-primary">Today</button>
          <button onClick={() => setType("week")} type="button" className="btn btn-outline-primary">Last Week</button>
        </div>
        <h2 className={`mb-3 ${theme === "light" ? "text-dark" : "text-light"}`}>Trending</h2>
        <div className="d-flex flex-row flex-nowrap overflow-auto mb-3">
          {
            trendingMovie?.data?.data?.results?.map((item, index) =>
              <div className={`card card-block col-md-2 mx-4 ${theme.backgroundColor} ${theme === "light" ? "bg-light" : "bg-dark"}`} id="home-block">
                <img src={`${POSTER_BASE_URL}${item.poster_path}`} className="card-img-top" alt="..." />
                <div className={`card-body ${theme.color} ${theme === "light" ? "text-dark" : "text-light"}`}>
                  <p className="card-title">{item.title}</p>
                  <p className="card-text">{item.release_date}</p>
                </div>
              </div>
            )
          }
        </div>
      </div>

       }
    </>

  )

}

export default Home;
