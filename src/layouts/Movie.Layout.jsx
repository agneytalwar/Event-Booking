import React,{useEffect,useContext} from "react";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.Component";
import MovieNavbar from "../components/Navbar/MovieNavbar.Component";
import Navbar from "../components/Navbar/Navbar.Component";
import axios from "axios";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

//context
import { MovieContext } from '../context/Movie.context'

const MovieLayout = (props) => {

    const {id}=useParams()
    const {movie,setMovie}=useContext(MovieContext)

    useEffect(()=>{
        const requestMovie = async()=>{
            const getReqdMovie=await axios.get(`/movie/${id}`);
            setMovie(getReqdMovie.data)
        }
        requestMovie();
    },[id])

    return (
        <div>
            <MovieNavbar />
            {/* <HeroCarousel />
            <EntertainmentCardSlider /> */}
            {props.children}
            <div>Footer</div>
        </div>
    );
};

export default MovieLayout;