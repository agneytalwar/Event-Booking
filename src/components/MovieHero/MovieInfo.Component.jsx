import React,{useState} from "react";
import PaymentModal from "../PaymentModal/Payment.Component";


const MovieInfo =({movie}) =>{

    const [isOpen,setIsOpen]=useState(false)
    const [price,setPrice]=useState(0)

    const rentMovies =() =>{
        setIsOpen(true);
        setPrice(299)
    }

    const buyMovies = ()=>{
        setIsOpen(true)
        setPrice(599)
    }

    const genres =  movie.genres?.map(({name})=>name).join(", ")
    return(<>
        <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
        <div className="flex flex-col lg-gap-8">
            <h1 className="text-white text-4xl font-bold">
                {movie.original_title}
            </h1>
            <div className="flex flex-col gap-5 text-white my-3">
                <h4>20.2K ratings</h4>
                <div className="bg-white text-black font-bold px-2 rounded-md py-0.5">
                    <h4>English,Kannada,Telegu,Tamil,Hindi</h4>                
                </div>
                <div className=" text-gray-200">
                    <h4>{(movie.runtime)}m •{genres}</h4>
                </div>
            </div>
            <div className="flex items-center gap-3 w-full my-3">
                <button onClick={buyMovies} className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
                Book Tickets
                </button>
                <button onClick={rentMovies} className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
                Rent now
                </button>
            </div>
        </div>
    </>)
}
export default MovieInfo;