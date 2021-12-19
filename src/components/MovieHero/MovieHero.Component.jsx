import React from "react";
import { useState ,useContext} from "react";
import MovieInfo from "./MovieInfo.Component";

//context
import { MovieContext } from "../../context/Movie.context";

const MovieHero = () => {
  // const [movie, setMovie] = useState({
  //   id: "asda",
  //   original_title: "Spiderman-No Way Home",
  //   overview: "2h 28m•Action,Adventure,Sci-Fi•UA•16 Dec, 2021",
  //   backdrop_path:
  //     "https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/spider-man-no-way-home-et00310790-07-12-2021-07-25-42.jpg",
  //   poster_path:
  //     "https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/spider-man-no-way-home-et00310790-07-12-2021-07-25-42.jpg",
  // });
  const {movie}=useContext(MovieContext);

  const genres =  movie.genres?.map(({name})=>name).join(", ")

  return (
    <>
      <div>
        {/* for mobile and medium sized screens */}
        <div className="lg:hidden w-full ">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt="cover poster"
            className="mx-4 rounded-md"
            style={{ width: "calc(100% -2rem)" }}
          />
        </div>
        <div className="flex flex-col gap-3 lg:hidden">
          <div className="flex flex-col-reverse gap-3 px-4 my-3">
            <div className="text-black flex flex-col gap-2 md:px-4">
              <h4>20.2K ratings</h4>
              <h4>English,Kannada,Telegu,Tamil,Hindi</h4>
              <h4>{(movie.runtime)}m •{genres}</h4>
            </div>
          </div>
          <div className="flex items-center gap-3 md:px-4 md:w-screen text-xl px-4">
            <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
              Book Tickets
            </button>
            <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
              Rent now
            </button>
          </div>
        </div>
        <div
          className="relative hidden w-full lg:block"
          style={{ height: "30rem" }}
        >
          <div
            className="absolute z-10 w-full h-full "
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)",
            }}
          >
          </div>
          <div className="absolute z-30 left-24 top-10 flex items-center gap-10">
            <div className="w-64 h-96">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt="Movie Poster"
                className="w-full h-full rounded-xl"
              />
            </div>
            <div>
                <MovieInfo movie={movie}/>
                
            </div>
          </div>
            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="backdrop poster" className="h-full w-full "/>
        </div>
      </div>
    </>
  );
};

export default MovieHero;
