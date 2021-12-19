import React from "react";
import {BiChevronDown, BiChevronRight, BiMenu, BiSearch} from "react-icons/bi"

function NavSmall(){
    return (<>
        <div className="flex items-center text-white gap-3 justify-between">
            <div>
                <h1 className="font-bold text-xl ">It All Starts Here!</h1>
                <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
                    NCR <BiChevronRight />
                </span>
            </div>
            <div className="flex gap-3 items-center ">
                <button className="bg-red-600 w-20 text-white px-2 py-1 text-sm rounded-md">Use App</button>
                <div className="w-8">
                    <BiSearch className="h-full w-full" />
                </div>
            </div>
        </div>
    </>)
}

function NavMed(){
    return (<>
        <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
                <BiSearch />
                <input type='search' placeholder="Search for Movies,Events,Plays,Sports and Activities" className="w-full bg-transparent border-none focus:outline-none " />
        </div>
    </>)
}

function NavLg(){
    return (<>
        <div className="container flex mx-auto px-4 items-center justify-between">
               <div className="flex items-center w-1/2 gap-3">
                   {/* <div className="text-white py-1 text-xl">book</div> */}
                   {/* <div className="w-10 h-10">
                       <img src='https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png' alt='logo' className="w-full h-full" />
                   </div> */}
                   {/* <div className="text-white py-1 text-xl">show</div> */}
                   <div className="flex">
                       <div className="text-white py-1 text-xl">book</div>
                       <div className="w-10 h-10">
                            <img src='https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png' alt='logo' className="w-full h-full" />
                        </div>
                       <div className="text-white py-1 text-xl">show</div>
                   </div>
                   <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
                       <BiSearch />
                       <input type='search' placeholder="Search for Movies,Events,Plays,Sports and Activities" className="w-full bg-transparent border-none focus:outline-none " />
                   </div>
               </div>
               <div className="flex items-center gap-3">
                   <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
                       NCR <BiChevronDown />
                   </span>
                   <button className="bg-red-600 text-white px-2 py-1 text-sm rounded-md">Sign in</button>
                   <div className="w-8 h-8 text-white">
                       <BiMenu className="w-full h-full"/>
                   </div>
               </div>
        </div>
    </>)
}

const Navbar =()=>{

    return(
        <>
            <nav className="bg-darkBackground-700 px-4 py-3">
                <div className="md:hidden">
                    {/* for mobile screens */}
                    <NavSmall />
                </div>
                
                <div className="hidden md:flex lg:hidden">
                    {/* for medium or tab screens */}
                    <NavMed />
                </div>

                <div className="hidden w-full lg:flex">
                    {/* for large screens */}
                    <NavLg />
                </div>
            </nav>
        </>
    )
}

export default Navbar