import React from 'react';
// import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {Link} from "react-scroll";


const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 py-6 md:flex-row">
            
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm a MERN Stack Developer</h2>
                <p className="text-gray-500 py-4 max-w-md">I'm MERN Stack Developer & Having Good Knowledge in MERN Stack with good in building Web Application, Used React.js for Clientside , Node.js & Express.js for server side and MongoDB for Database</p>

                <div>
                    <Link to= "project"className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-400">
                        Project
                        <span className="group-hover:rotate-90 duration-300"><MdOutlineKeyboardArrowRight size={25} className="ml-1"/></span>
                    </Link>
                </div>

            </div>

        <div>
            {/* <img src={HeroImage} alt="MY PROFILE" className="rounded-2xl mx-auto w-2/3 md:w-full"/> */}
        </div>
        </div>
    </div>
  )
}

export default Home;