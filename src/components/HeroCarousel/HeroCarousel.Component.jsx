import React,{useState,useEffect} from "react";
import HeroSlider from 'react-slick';
import { NextArrow,PrevArrow } from "./Arrows.Component";
import axios from "axios";
import "./ReactSlickArrowCustomCSS.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// function NextArrow(props){
//     return <div className={props.className} style={{...props.styles }  } onClick={props.onClick} />
   
// }

// function PrevArrow(props){
//     return (
//         <>
//             <div
//                 className={props.className}
//                 style={{ ...props.style }}
//                 onClick={props.onClick}
//             />
//         </>
//     );
// }

const HeroCarousel = () =>{
//     const [images,setImages]=useState(["https://in.bmscdn.com/promotions/cms/creatives/1639382715521_xo.jpg"
// ,"https://in.bmscdn.com/promotions/cms/creatives/1637323134871_divinepunyapaaptour_webshowcase_1240x300.jpg"
// ,"https://in.bmscdn.com/promotions/cms/creatives/1633590513692_moviemunchies_webshowcase_1240x300_7oct.jpg"])
    const [images,setImages]=useState([]);

    useEffect(()=>{
        const requestNowPlayingMovies= async ()=>{
            const getImages= await axios.get('/movie/now_playing')
            setImages(getImages.data.results);
        }

        requestNowPlayingMovies();
    },[])

    const settingsLG = {
        arrows: true,
        autoplay: true,
        centerMode:true,
        centerPadding: '200px',
        slidesToShow: 1,
        infinite: true,
        nextArrow: <NextArrow />,
        prevArrow:  <PrevArrow />,
        className : "react__slick__slider__parent"
    };  
    const settings = {
        arrows: true,
        slidesToShow: 1,
        infinite:true,
        speed: 500,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        className : "react__slick__slider__parent"

    };  

    return(<>
        <div className="lg:hidden">
            <HeroSlider {...settings}>
                {images.map((image)=>(
                    <div className="w-full h-60 md:h-80 py-3">
                        <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt='Hero banner' className="w-full h-full object-center object-cover"/>
                    </div>
                ))}
            </HeroSlider>
        </div>
        <div className="hidden lg:block">
            <HeroSlider {...settingsLG}>
                {images.map((image) => (
                    <div className="w-full h-90 px-2 py-3">
                        <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="Hero Banner" className="w-full h-full rounded-md object-center object-cover focus:outline-none" />
                    </div>
                ))}
            </HeroSlider>
        </div>
    </>)
}

export default HeroCarousel