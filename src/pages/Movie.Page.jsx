import React,{useContext,useEffect,useState} from "react";
import MovieHero from "../components/MovieHero/MovieHero.Component";
import { FaCcVisa ,FaCcApplePay} from "react-icons/fa";
import Slider from "react-slick";
import PosterSlider from "../components/PosterSlider/Poster.Slider.Component"
import Cast from "../components/Cast/Cast.Component";
import axios from "axios";

//context
import { MovieContext } from "../context/Movie.context";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const MoviePage = () => {

    const {movie} = useContext(MovieContext)
    const {id}=useParams()

    const [cast,setCast]=useState([]);
    const [similarMovies,setSimilarMovies]=useState([])
    const [recommended, setRecommended]= useState([])
    
    useEffect(()=>{
        const requestCast =async()=>{
            const reqdCast=await axios.get(`/movie/${id}/credits`)
            setCast(reqdCast.data.cast)
        }
        requestCast();
    },[id])
    useEffect(()=>{
        const requestSimilarMovies =async()=>{
            const reqdSimilarMovies=await axios.get(`/movie/${id}/similar`)
            setSimilarMovies(reqdSimilarMovies.data.results)
        }
        requestSimilarMovies();
    },[id])
    useEffect(()=>{
        const requestRecommendedMovies=async()=>{
            const reqdRecommendedMovies=await axios.get(`/movie/${id}/recommendations`)
            setRecommended(reqdRecommendedMovies.data.results)
        }
        requestRecommendedMovies();
    },[id])

    const settingsCast = {
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    // const cast=[{
    //     profile_path:"https://in.bmscdn.com/iedb/artist/images/website/poster/large/tom-holland-33741-15-12-2021-05-05-50.jpg",
    //     original_name:"Tom Holland",
    //     character:"Peter Parker / Spider-Man",
    // },{
    //     profile_path:"https://in.bmscdn.com/iedb/artist/images/website/poster/large/zendaya-iein098146-03-07-2017-14-20-19.jpg",
    //     original_name:"Zendaya",
    //     character:"MJ",
    // }]
    // const similarMovies=[{
    //     src:"https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/spider-man-homecoming-et00045372-22-02-2021-04-16-52.jpg",
    //     title:"Spider-Man:Homecoming",
    //     subtitle:"Action/Adventure/Sci-Fi"
    // },{
    //     src:"https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/spider-man-far-from-home-et00078437-10-12-2021-07-58-57.jpg",
    //     title:"Spider-Man:Far From Home",
    //     subtitle:"Action/Adventure/Sci-Fi"
    // }]

  return (
    <>
      <MovieHero />
      <div className="my-12 container px-4 lg:ml-20 lg:w-2/3">
        <div className="flex flex-col item-start gap-3">
          <h1 className="text-gray-800 font-bold text-2xl">About the Movie</h1>
            <p >
              {movie.overview}
            </p>
        </div>

        <div className="my-8">
          <hr />
        </div>
        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-3">
            Applicable Offers
          </h2>
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="flex item-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
                <div className="w-8 h-8">
                <FaCcVisa />
                </div>
                <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">
                    Visa Stream Offer
                </h3>
                <p className="text-gray-600">
                    Get 50% off upto Rs 150 on all Visa card* on BookMyShow
                </p>
                </div>
            </div>
            <div className="flex item-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
                <div className="w-8 h-8">
                <FaCcApplePay />
                </div>
                <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">
                    ApplePay Offer
                </h3>
                <p className="text-gray-600">
                    Get 60% off upto Rs 159 on all payments via ApplePay
                </p>
                </div>
            </div>
          </div>
        </div>
        <div className="my-8">
            <hr />
        </div>
        <div className="my-8" >
            <h2 className="text-gray-800 font-bold text-2xl mb-4">
                    Cast and Crew
            </h2>
            <Slider {...settingsCast}>
                {cast.map((castData) =>(
                    <Cast image={castData.profile_path} castName={castData.original_name} role={castData.character} />
                ))
                }
            </Slider>
        </div>

        <div className="my-8">
                <hr />
        </div>

        <div className="my-8">
                <PosterSlider config={settings} title='Recommended Movies' posters={similarMovies} isDark={false} />
        </div>
        <div className="my-8">
                <hr />
        </div>
        <div className="my-8">
                <PosterSlider config={settings} title='BookMyShow Exclusives' posters={recommended} isDark={false} />
        </div>
      </div>
    </>
  );
};

export default MoviePage;
