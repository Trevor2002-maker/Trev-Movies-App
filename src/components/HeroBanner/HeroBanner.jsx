import React ,{useState } from "react";
import "../HeroBanner/HeroBanner.css";
import { useNavigate } from "react-router-dom";
import Img from "../images/background.jpeg";

function HeroBanner(){
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const searchQueryHandler = (event)=>{
        if(event.key === 'Enter' && query.length > 0){
            navigate(`/search/${query}`)
        }
    }
    return(
        <div className="heroBanner">
         <div className="backdrop-img">
                <Img />
                </div>
                <div className="wrapper">
                    <div className="heroBannerContext">
                        <span className="title">Welcome</span>
                        <span className="subTitle">The ultimate place for movie Lovers. Explore Now..</span>
                        <div className="searchInput">
                        <input type="text" placeholder='Search for movie or TV show..' onChange={(e)=> setQuery(e.target.value)} onKeyUp={searchQueryHandler}/>
                        <button>Search</button>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default HeroBanner;