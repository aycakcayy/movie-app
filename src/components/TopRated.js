import {fetchTopRatedMovie} from "../api/index"
import { useQuery } from "react-query";
import {Link} from "react-router-dom";

function TopRated(){

    const topRated = useQuery(
        "topRated",
        fetchTopRatedMovie,
        { retry: false }
      );

      const POSTER_BASE_URL = "https://image.tmdb.org/t/p/w500";

    return(
        <>
        <>
         <div className="container">
             <div className="row">
                {
                    topRated?.data?.data?.results?.map((item,index)=> 
                     <div key={index} className="col-md-3 m-5"> <div className="card" >
                   <img src={`${POSTER_BASE_URL}${item.poster_path}`} className="card-img-top" alt="..."/> 
                  </div>
                  </div>)
                }
             </div>
         </div>
        </>
        </>
    )
}
export default TopRated