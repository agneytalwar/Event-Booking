import react from "react";
import Slider from "react-slick";
import Poster from "../Poster/Poster.Component"; 

const PosterSlider = (props) =>{
    
    const settings={
        infinite: false,
        autoplay: false,
        slidesToShow:5,
        slidesToScroll:4,
        InitialSlide:0,
        responsive: [
            {
                breakpoint:1024,
                settings:{
                    slidesToShow:3,
                    slidesToScroll:2,
                    infinite: true,
                }

            },
            {
                breakpoint:600 ,
                settings:{
                    slidesToShow:3,
                    slidesToScroll:1,
                    InitialSlide:1,
                }
                
            }
            ,{
                breakpoint:480 ,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                }
                
            }
        ]
    }
    const {posters ,title, subtitle,isDark,config} =props;

    const currentSetting= config ? config :settings;
    // const PosterImages=["https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-Nzk3ayBsaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00310790-cjtuytwcbl-portrait.jpg",
    //                 "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/nobody-et00122451-09-11-2021-11-24-06.jpg",
    //                 "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/dune-et00122526-03-12-2021-01-43-40.jpg",
    //                 "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00309402-tcywztuxdf-portrait.jpg",
    //                 "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-azgcwzunrh-portrait.jpg","https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-Nzk3ayBsaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00310790-cjtuytwcbl-portrait.jpg",
    //                 "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/nobody-et00122451-09-11-2021-11-24-06.jpg",
    //                 "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/dune-et00122526-03-12-2021-01-43-40.jpg",
    //                 "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00309402-tcywztuxdf-portrait.jpg",
    //                 "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-azgcwzunrh-portrait.jpg"]

    return(<>
    {/* add flex and flex-col? */}
        <div className="flex flex-col">
            <h3 className={`text-2xl font-bold ${isDark ? "text-white" : "text-black"}`}>{title}</h3>
            <p className={`text-sm ${isDark ? "text-white": "text-gray-700"}`}>{subtitle}</p>
        </div>
        <Slider {...currentSetting} >
            {posters.map((movie) =>(
                <Poster {...movie} isDark={isDark}/>
            ))}
        </Slider>
    </>)
}

export default PosterSlider;