import axios from "axios";
import React,{useState,useEffect} from "react";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.Component";
import PosterSlider from "../components/PosterSlider/Poster.Slider.Component";

function HomePage() {
  // const recommendedMoviesList=["https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-Nzk3ayBsaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00310790-cjtuytwcbl-portrait.jpg",
  //                             "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/nobody-et00122451-09-11-2021-11-24-06.jpg",
  //                             "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/dune-et00122526-03-12-2021-01-43-40.jpg",
  //                             "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00309402-tcywztuxdf-portrait.jpg",
  //                             "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-azgcwzunrh-portrait.jpg",
  //                             "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-Nzk3ayBsaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00310790-cjtuytwcbl-portrait.jpg",
  //                             "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/nobody-et00122451-09-11-2021-11-24-06.jpg",
  //                             "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/dune-et00122526-03-12-2021-01-43-40.jpg",
  //                             "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00309402-tcywztuxdf-portrait.jpg",
  //                             "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-azgcwzunrh-portrait.jpg"]

  // const recommendedMoviesList = [
  //   {
  //     src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-Nzk3ayBsaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00310790-cjtuytwcbl-portrait.jpg",
  //     title: "Spiderman-No way Home",
  //     subtitle: "Action/Adventure/Sci-Fi",
  //   },
  //   {
  //     src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/nobody-et00122451-09-11-2021-11-24-06.jpg",
  //     title: "Nobody",
  //     subtitle: "Action/Thriller",
  //   },
  // ];
  const [recommendedMoviesList,setRecommendedMovies]=useState([])

  useEffect(()=>{
    const requestRecommendedMovies= async () =>{
      const getRecommendedMovies= await axios.get('/movie/popular')
      setRecommendedMovies(getRecommendedMovies.data.results)
    }
    requestRecommendedMovies()
  },[])

  // const premiereMoviesList = [
  //   {
  //     src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-Nzk3ayBsaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00310790-cjtuytwcbl-portrait.jpg",
  //     title: "Spiderman-No way Home",
  //     subtitle: "English",
  //   },
  //   {
  //     src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/nobody-et00122451-09-11-2021-11-24-06.jpg",
  //     title: "Nobody",
  //     subtitle: "English",
  //   },
  //   {
  //     src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/malignant-et00122449-21-10-2021-09-57-27.jpg",
  //     title: "Malignant",
  //     subtitle: "English",
  //   },
  //   {
  //     src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/malignant-et00122449-21-10-2021-09-57-27.jpg",
  //     title: "Malignant",
  //     subtitle: "English",
  //   },
  //   {
  //     src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/malignant-et00122449-21-10-2021-09-57-27.jpg",
  //     title: "Malignant",
  //     subtitle: "English",
  //   },
  //   {
  //     src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-Nzk3ayBsaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00310790-cjtuytwcbl-portrait.jpg",
  //     title: "Spiderman-No way Home",
  //     subtitle: "English",
  //   },
  // ];
  const [topRatedMovies,setTopRatedMovies]=useState([])

  useEffect(()=>{
    const requestTopRatedMovies= async ()=>{
      const getTopRatedMovies=await axios.get("/movie/top_rated")
      setTopRatedMovies(getTopRatedMovies.data.results);
    }
    requestTopRatedMovies();
  },[])

  // const onlinetreamEvents = [
  //   {
  //     src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAxNiBEZWMgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00313611-wzhbnnlyvf-portrait.jpg",
  //     title: "FrontRow Open Mics",
  //     subtitle: "Watch on Zoom",
  //   },
  //   {
  //     src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAzMSBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00304004-sswseslfpm-portrait.jpg",
  //     title: "Data Science",
  //     subtitle: "Online Streaming",
  //   },
  //   {
  //       src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAxNiBEZWMgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00313611-wzhbnnlyvf-portrait.jpg",
  //       title: "FrontRow Open Mics",
  //       subtitle: "Watch on Zoom",
  //     },
  //     {
  //       src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAzMSBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00304004-sswseslfpm-portrait.jpg",
  //       title: "Data Science",
  //       subtitle: "Online Streaming",
  //     },
  //     {
  //       src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAxNiBEZWMgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00313611-wzhbnnlyvf-portrait.jpg",
  //       title: "FrontRow Open Mics",
  //       subtitle: "Watch on Zoom",
  //     },
  //     {
  //       src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAzMSBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00304004-sswseslfpm-portrait.jpg",
  //       title: "Data Science",
  //       subtitle: "Online Streaming",
  //     },
  // ];
  const [upcomingMovies,setUpcomingMovies]=useState([])
  useEffect(() =>{
      const requestUpcomingMovies = async() =>{
      const getUpcomingMovies= await axios.get('/movie/upcoming')
      setUpcomingMovies(getUpcomingMovies.data.results)
    }
    requestUpcomingMovies()
  },[])
  return (
    <>
      <div>
        <HeroCarousel />
        <div className="container mx-auto px-4">
          <h1 className="text-2xl text-gray-800 font-bold my-3">
            The Best of Entertainment
          </h1>
        </div>
        <EntertainmentCardSlider />
      </div>
      <div className="container mx-auto px-12 my-8">
        <PosterSlider
          title="Recommended Movies"
          subtitle="List of Recommended Movies"
          posters={recommendedMoviesList}
          isDark={false}
        />
      </div>
      <div className="bg-premiereBackground py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img
              src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
              alt="Rupay"
              className="w-full h-full"
            />
          </div>
          <PosterSlider
            title="Premieres"
            subtitle="Brand new releases every Friday"
            posters={topRatedMovies}
            isDark={true}
          />
        </div>
      </div>
      <div className="container mx-auto px-12 my-8">
        <PosterSlider
          title="Online Streaming events"
          subtitle=""
          posters={upcomingMovies}
          isDark={false}
        />
      </div>
    </>
  );
}
export default HomePage;
