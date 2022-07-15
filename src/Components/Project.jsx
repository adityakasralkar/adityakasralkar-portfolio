import React from 'react';
import basicreactgame from "../assets/portfolio/basicreactgame.png";
import basicstarbucksui from "../assets/portfolio/basicstarbucksui.png";
import githubfetch from "../assets/portfolio/githubfetch.png";
import guessrandomnumber from "../assets/portfolio/guessrandomnumber.png";
// import basicreactgame from "../assets/portfolio/basicreactgame.png";

const Project = () => {

    const projects = [
        {
            id: 1,
            src: basicreactgame,
            hosted: "https://basic-react-game.netlify.app/",
            githubLink: "https://github.com/adityakasralkar/basic-react-game",

        },

        {
            id: 2,
            src: githubfetch,
            hosted: "https://adityakasralkar.github.io/github-user-api/",
            githubLink: "https://github.com/adityakasralkar/github-user-api/tree/master",

        },

        {
            id: 3,
            src: basicstarbucksui,
            hosted: "https://adityakasralkar.github.io/starbucks-ui/",
            githubLink: "https://github.com/adityakasralkar/starbucks-ui",

        },

        {
            id: 4,
            src: guessrandomnumber,
            hosted: "https://adityakasralkar.github.io/guess-the-number.github.io",
            githubLink: "https://github.com/adityakasralkar/guess-the-number.github.io",

        },
    ]


  return (
    <div name="project" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full">

    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">Project</p>
            <p className="py-6">Check Out Some of My Work Right Here</p>
        </div>


    {/* PROJECT CARDS */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            

    {
        projects.map(({id,src , hosted , githubLink }) =>(
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img src={src} alt="" className="rounded-md duration-200 hover:scale-105"/>
                <div className="flex items-center justify-center">
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"><a href={hosted} target="_blank"  rel="noreferrer">HOSTED LINK</a></button>
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"><a href={githubLink} target="_blank"  rel="noreferrer">GITHUB CODE</a></button>
                </div>
            </div>

        ))
    }
            
        </div>
    </div>





    </div>
  )
}

export default Project