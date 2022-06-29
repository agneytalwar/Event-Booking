import React,{useContext} from "react";
import {
  BiChevronDown,
  BiChevronRight,
  BiMenu,
  BiSearch,
  BiShareAlt,
} from "react-icons/bi";

//context
import {MovieContext} from '../../context/Movie.context'

function NavSmall() {
  
  const {movie}= useContext(MovieContext)
  
  return (
    <>
      <div className="text-gray-700 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">{movie.original_title}</h3>
        </div>
        <div className="w-8 h-8">
          <BiShareAlt className="w-full h-full" />
        </div>
      </div>
    </>
  );
}

// function NavMed() {
//   return (
//     <>
//       <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
//         <BiSearch />
//         <input
//           type="search"
//           placeholder="Search for Movies,Events,Plays,Sports and Activities"
//           className="w-full bg-transparent border-none focus:outline-none "
//         />
//       </div>
//     </>
//   );
// }

function NavLg() {
  return (
    <>
      <div className="container flex mx-auto px-4 items-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
          {/* <div className="text-white py-1 text-xl">book</div> */}
          {/* <div className="w-10 h-10">
                       <img src='https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png' alt='logo' className="w-full h-full" />
                   </div> */}
          {/* <div className="text-white py-1 text-xl">show</div> */}
          <div className="flex">
            {/* <div className="text-white py-1 text-xl">book</div>
            <div className="w-10 h-10">
              <img
                src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
                alt="logo"
                className="w-full h-full"
              />
            </div>
            <div className="text-white py-1 text-xl">show</div> */}
            <div className="text-white py-1 text-xl">BingeWatch</div>
          </div>
          <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
            <BiSearch />
            <input
              type="search"
              placeholder="Search for Movies,Events,Plays,Sports and Activities"
              className="w-full bg-transparent border-none focus:outline-none "
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
            NCR <BiChevronDown />
          </span>
          <button className="bg-red-600 text-white px-2 py-1 text-sm rounded-md">
            Sign in
          </button>
          <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
}

const MovieNavbar = () => {
  return (
    <>
      <nav className="bg-white border-b-2 lg:border-b-0 lg:bg-darkBackground-700 p-4">
        <div className="md:hidden">
          {/* for mobile screens */}
          <NavSmall />
        </div>

        <div className="hidden md:block lg:hidden">
          {/* for medium or tab screens */}
          <NavSmall />
        </div>

        <div className="hidden w-full lg:flex">
          {/* for large screens */}
          <NavLg />
        </div>
      </nav>
    </>
  );
};

export default MovieNavbar;
